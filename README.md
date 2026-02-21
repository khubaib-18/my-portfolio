# 🌐 Davood Suliaman — Frontend Developer Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-22c55e?style=flat)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

A modern, fully responsive, dark-themed personal portfolio website built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** — no frameworks, no dependencies, just clean code.

---

## 📸 Preview

> **Live Demo:** [https://github.com/khubaib-18/portfolio](https://github.com/khubaib-18/portfolio)  
> **GitHub:** [https://github.com/khubaib-18](https://github.com/khubaib-18)

---

## 📁 Project Structure

```
portfolio/
│
├── index.html        # Main HTML file — semantic, SEO-ready markup
├── style.css         # All styles — variables, layout, animations, responsive
├── script.js         # All interactivity — typed text, scroll, form validation
│
├── README.md         # Project documentation (you are here)
└── LICENSE           # MIT License
```

---

## ✨ Features

### 🎨 Design
- **Dark luxury aesthetic** — deep navy/black background with blue-violet gradient accents
- **Typography** — Syne (display/headings) + DM Sans (body) from Google Fonts
- **Subtle 3D card tilt** effect on hover (desktop only)
- **Animated gradient text** on name and section titles
- **Code window** visual in the hero section with syntax highlighting

### 🔧 Functionality
- **Typed text animation** — cycles through multiple developer roles in the hero
- **Sticky navbar** — scrolls with the page, changes style on scroll
- **Active nav link highlighting** — uses Intersection Observer to track current section
- **Hamburger mobile menu** — with body scroll lock and keyboard/outside-click close
- **Scroll-triggered reveal animations** — elements animate in as they enter the viewport
- **Animated skill progress bars** — triggered on scroll, not on page load
- **Animated stat counters** — numbers count up with an ease-out effect
- **Contact form validation** — full client-side validation with error messages and success toast
- **Scroll-to-top button** — appears after scrolling 400px down

### ♿ Accessibility
- Semantic HTML5 elements (`<nav>`, `<section>`, `<article>`, `<footer>`, etc.)
- `aria-label`, `aria-expanded`, `aria-required`, `role` attributes throughout
- `aria-live` regions for form error and success messages
- Keyboard navigation support (Escape closes mobile menu)
- `alt`-friendly image placeholders ready for real images
- Skip-to-content friendly structure

### 📱 Responsive
- Mobile-first CSS approach
- Three breakpoints: `1024px` (tablet), `768px` (mobile), `480px` (small mobile)
- Hamburger menu for mobile navigation
- Fluid typography using `clamp()`
- Hero code window hidden on mobile to keep layout clean

### 🔍 SEO
- Descriptive `<title>` and `<meta description>`
- Open Graph (`og:title`, `og:description`, `og:type`) meta tags
- `<meta name="keywords">` and `<meta name="author">`
- Semantic heading hierarchy (`h1` → `h2` → `h3`)
- `rel="noopener noreferrer"` on all external links

---

## 🗂️ Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Name, typed role animation, tagline, CTA buttons, social links, code window |
| 2 | **About** | Profile image placeholder, bio, career objective, skill highlights, stats |
| 3 | **Skills** | 6 animated progress bar skill cards + 8 tool/tech tags |
| 4 | **Projects** | 3 project cards with hover overlay, tech tags, GitHub & Live Demo buttons |
| 5 | **Services** | Web Design, Responsive Design, Frontend Development service cards |
| 6 | **Contact** | Contact info, social links, validated contact form with success state |
| 7 | **Footer** | Brand, quick links, contact details, dynamic copyright year |

---

## 🚀 Getting Started

No build tools or package managers needed. Just open the file!

### Option 1 — Open directly
```bash
# Clone or download the repo
git clone https://github.com/khubaib-18/portfolio.git

# Open in browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option 2 — Live Server (recommended for development)
If you use VS Code, install the **Live Server** extension, then right-click `index.html` → **Open with Live Server**.

### Option 3 — Deploy online (free)
| Platform | Steps |
|----------|-------|
| **GitHub Pages** | Push to GitHub → Settings → Pages → Deploy from branch |
| **Netlify** | Drag & drop the folder at [netlify.com/drop](https://netlify.com/drop) |
| **Vercel** | `npx vercel` in the project folder |

---


## 📦 External Resources Used

| Resource | Purpose | License |
|----------|---------|---------|
| [Google Fonts — Syne](https://fonts.google.com/specimen/Syne) | Display/heading font | OFL |
| [Google Fonts — DM Sans](https://fonts.google.com/specimen/DM+Sans) | Body font | OFL |
| [Font Awesome 6](https://fontawesome.com/) | Icons | FA Free License |

No npm packages. No bundlers. No frameworks. 100% vanilla.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📬 Contact

**Davood Suliaman**  
📧 [darimad75@gmail.com](mailto:darimad75@gmail.com)  
📞 +91 77006433404  
📍 Hyderabad, India  
💻 [github.com/khubaib-18](https://github.com/khubaib-18)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<p align="center">Designed & Built with ❤️ by <strong>Davood Suliaman</strong></p>
