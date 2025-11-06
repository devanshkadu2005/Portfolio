import React, { useState, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const formRef = useRef(null);
  const iframeRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    showToast('Sending message...', 'success');
    
    // Submit form programmatically to hidden iframe
    formRef.current.submit();
    
    // Set timeout as fallback in case iframe onload doesn't fire
    setTimeout(() => {
      if (isSubmitting) {
        showToast('Message sent successfully!', 'success');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }
    }, 3000);
  };

  const handleIframeLoad = () => {
    // Only trigger if form was actually submitted
    if (isSubmitting) {
      setTimeout(() => {
        showToast('Message sent successfully!', 'success');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 500);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
        <div className="contact-content">
          <form
            ref={formRef}
            id="contact-form"
            className="contact-form"
            action="https://script.google.com/macros/s/AKfycbyJRPH_s6zWAVhcuwz-LjGR7WMc56VoDup7Q8kBzL7BqOZ9009bh-humVviWIy4Hm4/exec"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <div className="submit-icon">
                <i className="fas fa-paper-plane"></i>
              </div>
            </button>
          </form>

          {/* Hidden iframe */}
          <iframe
            ref={iframeRef}
            name="hidden_iframe"
            style={{ display: 'none' }}
            onLoad={handleIframeLoad}
            title="hidden_iframe"
          ></iframe>

          {/* Toast container */}
          <div className={`toast ${toast.show ? 'show' : ''} ${toast.type}`}>
            {toast.message}
          </div>

          <div className="social-links" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <a href="https://github.com/devanshkadu2005" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/devanshkadu2005" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:devanshkadu2005@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
