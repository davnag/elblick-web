# Elblick Website ⚡️

The official website for **Elblick**, a modern iOS and watchOS application for tracking real-time electricity prices in Sweden.

[![Website](https://img.shields.io/badge/Website-elblick.se-blue)](https://www.elblick.se)
[![App Store](https://img.shields.io/badge/App_Store-Download-black?logo=apple)](https://apps.apple.com/app/id6741142614)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📋 Overview

This repository contains the source code for the Elblick landing page, hosted on GitHub Pages. The site is designed to be lightweight, responsive, and visually stunning, mirroring the app's premium aesthetic.

## 🚀 Features

- **Real-time Price Visualizations**: Showcases how the app displays electricity prices for all Swedish price areas (SE1-SE4).
- **Interactive Carousel**: Preview the app's interface across different devices.
- **Glassmorphic Design**: A modern UI with smooth transitions and vibrant gradients.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.
- **SEO Optimized**: Meta tags and structured data for better search visibility.

## 🛠 Tech Stack

- **HTML5**: Semantic and accessible structure.
- **CSS3**: Custom design system using CSS Variables, Flexbox, and Grid. No heavy frameworks.
- **Vanilla JavaScript**: High-performance interactions and carousel logic.
- **GitHub Pages**: Automated deployment and hosting.

## 📂 Project Structure

```text
.
├── index.html          # Main landing page
├── press.html          # Press kit and marketing materials
├── terms.html          # Terms of Use (Användarvillkor)
├── privacy.html        # Privacy Policy (Integritetspolicy)
├── assets/
│   ├── css/            # Custom styles and design tokens
│   ├── js/             # Interactive logic
│   └── images/         # Icons, screenshots, and visual assets
├── robots.txt          # SEO configuration
├── sitemap.xml         # Search engine indexing
└── LICENSE             # MIT License
```

## 💻 Local Development

To run the project locally, you can use any static file server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (npx)
npx -y serve .
```

Then open `http://localhost:8000` in your browser.

## 🌐 Deployment

The site is automatically deployed to GitHub Pages from the `main` branch. 

1. Ensure all changes are committed and pushed to `main`.
2. GitHub Actions or the default Pages integration will handle the build.
3. The live site is available at [www.elblick.se](https://www.elblick.se).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [David Jonsén](https://github.com/davnag)

