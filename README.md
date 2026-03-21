# Ayush Kumar Portfolio

Static multi-page portfolio for Ayush Kumar.

## Files

- `index.html` is the interactive landing page.
- `projects.html` contains selected project case studies.
- `experience.html` contains experience, education, skills, and publications.
- `contact.html` contains contact details, role fit, and resume access.
- `background.html` powers the neural-network background.
- `styles.css` holds the shared visual system across all pages.
- `script.js` handles active navigation, footer year, zen mode, and numeric page shortcuts.
- `assets/Ayush_Kumar_resume.pdf` is the linked resume asset.

## Local Preview

Open `index.html` directly in a browser, or serve the repo with any static server.

## Deploy on Vercel

This site is static HTML, CSS, and JavaScript, so Vercel is the easiest deployment option.

### 1. Create a GitHub repository

Create a new GitHub repo, for example:

- `portfolio`
- `ayush-portfolio`
- `ayush-kumar-portfolio`

Then run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 2. Import the repo into Vercel

1. Go to `https://vercel.com`
2. Sign in with GitHub
3. Click `Add New...` -> `Project`
4. Find this repository and click `Import`

### 3. Use these Vercel settings

Because this is a static site:

- `Project Name`: choose your public site/project name
- `Framework Preset`: `Other`
- `Root Directory`: leave as the repo root
- `Build Command`: leave blank
- `Output Directory`: leave blank

Then click `Deploy`.

### 4. Choose the website name

Vercel gives every project a free `.vercel.app` URL.

Examples:

- `ayush-portfolio.vercel.app`
- `ayush-kumar-portfolio.vercel.app`
- `ayushkumar-ds.vercel.app`

The `Project Name` you choose in Vercel usually becomes part of that free URL, so pick something clean.

### 5. Change the project name later if needed

In Vercel:

1. Open the project
2. Go to `Settings`
3. Open `General`
4. Edit `Project Name`

### 6. Add a custom domain

If you buy or already own a domain such as `ayushkumar.dev`:

1. Open the Vercel project
2. Go to `Settings` -> `Domains`
3. Click `Add Domain`
4. Enter your domain name
5. Follow the DNS instructions Vercel shows

Common choices:

- `ayushkumar.dev`
- `ayushkumar.ai`
- `ayushkumar.me`

Typical DNS setup:

- root domain like `ayushkumar.dev` uses an `A` record
- subdomain like `www.ayushkumar.dev` uses a `CNAME`

### 7. After deployment

Update your public links:

- resume
- LinkedIn
- GitHub profile
- email signature if needed

## Other Hosting Options

This site can also be deployed on:

- GitHub Pages
- Netlify

## Notes

The home page is compact and route-based so visitors can enter deeper pages without being forced through a long scroll.
