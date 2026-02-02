# Elnu Website

Static website for the Elnu app, hosted on GitHub Pages.

## Structure

```
website/
├── index.html          # Landing page
├── terms.html          # Terms of Use (Användarvillkor)
├── privacy.html        # Privacy Policy (Integritetspolicy)
├── assets/
│   ├── css/            # Custom styles (Variables, Animations, Glassmorphism)
│   ├── js/             # Vanilla JavaScript logic
│   └── images/
│       ├── icon.png    # App icon
│       └── screenshots/# App screenshots
└── README.md           # This file
```

## Local Development

Open `index.html` in a browser to preview the site:

```bash
# macOS
open index.html

# Or use a local server
python3 -m http.server 8000
```

## GitHub Pages Setup

1. Go to repository **Settings** → **Pages**
2. Under "Source", select:
   - **Branch:** `main` (or your default branch)
   - **Folder:** `/` (root)
3. Click **Save**
4. Your site will be available at `https://<username>.github.io/<repo>/`

## Features

- **Real-time Prices**: Displays current electricity prices for all Swedish price areas (SE1-SE4).
- **Smart Notifications**: Alerts for low prices.
- **Widgets**: Home screen and Lock screen widgets for quick access.
- **Apple Watch**: Standalone Watch app with complications.
- **Price History**: Graphs showing highs, lows, and averages.

## Updating Content

- **Screenshots**: Replace images in `assets/images/screenshots/` and match filenames in `index.html`.
- **App Store Link**: Update the URL in `index.html`.
- **Legal**: Edit `terms.html` and `privacy.html`.

## Tech Stack

- **HTML5** - Semantic structure.
- **CSS3** - Custom design system with variables, flexbox/grid, and extensive use of gradients and glassmorphism. Hand-written animations.
- **Vanilla JavaScript** - Lightweight interaction logic for the carousel and mobile navigation.

## Testimonials

Includes a section for user reviews to build trust and showcase app benefits.
