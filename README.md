# Devansh Gajendra Kadu - Portfolio Website

A minimalist, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- Fully responsive design that works on all devices
- Dark/Light theme toggle with persistent preference saving
- Smooth scroll-based animations using AOS library
- Floating gradient animations in the hero section
- Interactive skill progress bars
- Mobile-friendly navigation with toggle menu
- Contact form with validation and animations
- Project cards with hover effects

## Technologies Used

- HTML5
- CSS3 (with CSS variables)
- JavaScript (ES6+)
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library
- [Font Awesome](https://fontawesome.com/) - Icon library
- Google Fonts (Inter & Poppins)

## Getting Started

1. Clone this repository or download the files
2. Open the `index.html` file in your browser to view the website
3. To make changes, edit the HTML, CSS, or JavaScript files as needed

## Structure

- `index.html` - Main HTML structure
- `styles.css` - All styling with responsive breakpoints and theme variables
- `script.js` - JavaScript functionality, animations, and theme management

## Customization

### Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector (light theme) and `[data-theme="dark"]` selector (dark theme) at the top of the `styles.css` file.

### Content

Update the text content in the `index.html` file to personalize the portfolio information.

### Images

Replace the placeholder image in the About section with an actual photo by replacing:

```html
<div class="img-placeholder"></div>
```

with:

```html
<img src="path/to/your-image.jpg" alt="Devansh Gajendra Kadu">
```

### Dark Mode

The website includes a dark/light theme toggle that saves user preferences to localStorage. It also respects the user's system preference for dark mode on the first visit.

## License

This project is available for personal and commercial use.

## Contact

For any questions or feedback, please reach out to Devansh at devanshkadu@gmail.com 