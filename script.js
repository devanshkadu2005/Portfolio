// Initialize AOS (Animate on Scroll) library
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: false,
        mirror: false
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        // Check if user prefers dark mode
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            htmlElement.setAttribute('data-theme', 'dark');
        }
    }
    
    // Toggle theme when the button is clicked
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Enhanced Smooth Scrolling
    class SmoothScroll {
        constructor(links, options = {}) {
            this.links = links;
            this.options = {
                speed: options.speed || 800,
                offset: options.offset || 0,
                easing: options.easing || this.easeInOutQuad,
                updateURL: options.updateURL !== undefined ? options.updateURL : true,
                callback: options.callback || null
            };
            this.navLinks = document.querySelectorAll('.nav-links a');
            this.init();
        }

        easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        getPosition(element) {
            let distance = 0;
            if (element.offsetParent) {
                do {
                    distance += element.offsetTop;
                    element = element.offsetParent;
                } while (element);
            }
            return distance;
        }

        scrollTo(destination, duration, easing, callback) {
            const start = window.pageYOffset;
            const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
            const documentHeight = Math.max(
                document.body.scrollHeight, 
                document.body.offsetHeight, 
                document.documentElement.clientHeight, 
                document.documentElement.scrollHeight, 
                document.documentElement.offsetHeight
            );
            const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            const destinationOffset = typeof destination === 'number' ? destination : this.getPosition(destination);
            const destinationOffsetToScroll = Math.round(
                documentHeight - destinationOffset < windowHeight ? 
                documentHeight - windowHeight : 
                destinationOffset
            );

            if ('requestAnimationFrame' in window === false) {
                window.scroll(0, destinationOffsetToScroll);
                if (callback) {
                    callback();
                }
                return;
            }

            function scroll() {
                const now = 'now' in window.performance ? performance.now() : new Date().getTime();
                const time = Math.min(1, ((now - startTime) / duration));
                const timeFunction = easing(time);
                window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

                if (Math.abs(window.pageYOffset - destinationOffsetToScroll) < 2) {
                    if (callback) {
                        callback();
                    }
                    return;
                }

                requestAnimationFrame(scroll);
            }

            scroll();
        }

        handleClick(link, event) {
            event.preventDefault();
            
            // Get the target element
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (!targetElement) return;
            
            // Calculate position with offset
            const targetPosition = this.getPosition(targetElement) - this.options.offset;
            
            // Scroll to the target
            this.scrollTo(
                targetPosition, 
                this.options.speed, 
                this.options.easing, 
                this.options.callback
            );
            
            // Update URL if needed
            if (this.options.updateURL) {
                window.history.pushState(null, null, targetId);
            }

            // Update active nav links
            this.navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            link.classList.add('active');
            
            // Close mobile navigation if open
            const nav = document.querySelector('.nav-links');
            const burger = document.querySelector('.burger');
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                document.querySelectorAll('.nav-links li').forEach(link => {
                    link.style.animation = '';
                });
            }
        }

        init() {
            if (!this.links) return;
            
            this.links.forEach(link => {
                link.addEventListener('click', this.handleClick.bind(this, link));
            });
        }
    }

    // Initialize smooth scrolling
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    new SmoothScroll(smoothScrollLinks, {
        speed: 800,      // Animation speed in milliseconds
        offset: 70,      // Offset in pixels (header height)
        easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 // Cubic easing
    });

    // Mobile Navigation Toggle
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            // Toggle Navigation
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    };

    navSlide();

    // Scroll detection for header
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }

        // Hide/show header based on scroll direction
        if (window.scrollY > lastScrollY && window.scrollY > 150) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScrollY = window.scrollY;
    });

    // Initialize Skill Progress Bars
    const skills = document.querySelectorAll('.skill');
    const skillsSection = document.querySelector('.skills');

    const animateSkills = () => {
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            skills.forEach(skill => {
                const progress = skill.querySelector('.skill-progress');
                const percent = progress.dataset.progress;
                progress.style.width = `${percent}%`;
            });
        }
    };

    // Initial check for skills in viewport
    animateSkills();
    window.addEventListener('scroll', animateSkills);

    //Form Submission
    function showToast(message, type = "success") {
        const toast = document.getElementById("toast");
        toast.className = `toast-message show toast-${type}`;
        toast.textContent = message;
      
        setTimeout(() => {
          toast.className = "toast-message"; // hide
        }, 3000);
      }
      
      document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("contact-form");
      
        if (form) {
          form.addEventListener("submit", function (e) {
            e.preventDefault(); // ✅ Prevent reload
      
            const submitBtn = form.querySelector(".submit-btn");
            const submitText = submitBtn.querySelector("span");
            const submitIcon = submitBtn.querySelector(".submit-icon");
      
            submitBtn.disabled = true;
            submitText.textContent = "Sending...";
            submitIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      
            fetch("https://script.google.com/macros/s/AKfycbw2OGvXZPQk1XTQTDKPy_UYo1nAR_XFQsYz59ZbiKxtG3vg1ZhLy8fB6tbAzCrRaCM/exec", {
              method: "POST",
              body: new FormData(form),
            })
              .then((res) => {
                if (res.ok) {
                  showToast("✔️ Message sent!", "success");
                  form.reset();
                } else {
                  showToast("❗ Failed to send message", "error");
                }
              })
              .catch(() => {
                showToast("❗ Network error", "error");
              })
              .finally(() => {
                submitBtn.disabled = false;
                submitText.textContent = "Send Message";
                submitIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
              });
          });
        }
      });
      
      
      

    // Hero section subtle parallax effect
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
            heroSection.style.transform = `translateY(${scrollPosition * 0.3}px)`;
            document.querySelector('.hero-bg').style.transform = `translateY(${scrollPosition * 0.2}px)`;
        }
    });

    // Highlight active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}); 
