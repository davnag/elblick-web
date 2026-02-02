# Elnu Website

Static website for the Elnu app, hosted on GitHub Pages.

## Structure

```
website/
├── index.html          # Landing page
├── terms.html          # Terms of Use (Användarvillkor)
├── privacy.html        # Privacy Policy (Integritetspolicy)
├── assets/
│   ├── css/            # Custom styles (if needed)
│   └── images/
│       ├── icon.png    # App icon
│       └── screenshots/# App screenshots (add here)
└── README.md           # This file
```

## Local Development

Open `index.html` in a browser to preview the site:

```bash
# macOS
open website/index.html

# Or use a local server
cd website && python3 -m http.server 8000
```

## GitHub Pages Setup

1. Go to repository **Settings** → **Pages**
2. Under "Source", select:
   - **Branch:** `main` (or your default branch)
   - **Folder:** `/website`
3. Click **Save**
4. Your site will be available at `https://<username>.github.io/<repo>/`

## Updating Content

### Screenshots
Replace placeholder images by adding PNG/JPG files to `assets/images/screenshots/` and updating `index.html`.

### App Store Link
Replace `http://example-app-store-url.com` with your actual App Store URL in:
- `index.html` (2 places)

### Legal Pages
Review and update `terms.html` and `privacy.html` with your specific legal content.

## Tech Stack

- **HTML5** - Static pages
- **Tailwind CSS** - Styling (via CDN, no build step required)
- **No JavaScript framework** - Simple and fast

## Notes

- The site uses Tailwind CSS via CDN for simplicity
- All pages are in Swedish (sv)
- Responsive design works on mobile and desktop
