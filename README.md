# ACE of SPADES — Backend Developer Portfolio

A lightweight, responsive static portfolio for Odey Anthony Ogar, positioned as an early-career developer focused on Python, secure systems, and PropTech.

## Contents

- `index.html` — semantic page content and sections
- `styles.css` — responsive layout, typography, contrast, and reduced-motion support
- `script.js` — accessible mobile navigation and project/link rendering
- `config.js` — single place to update repositories, deployed API URLs, documentation, GitHub profile, and technical notes
- `assets/favicon.svg` — original lightweight favicon

No backend is required to display the portfolio. GitHub Pages can host the static site, but it cannot run a Python API.

## Preview locally on Windows

**Option A: Python's built-in static server**

1. Install Python if it is not already installed.
2. Open Command Prompt or PowerShell in this project directory.
3. Run:

   ```powershell
   py -m http.server 8000
   ```

4. Open `http://localhost:8000` in your browser.
5. Stop the server with `Ctrl+C`.

**Option B:** Open `index.html` directly. The page should display, but using the local server is closer to how a hosted static site behaves.

## Configure project links

Open `config.js`. Each project has three independent link fields:

- `repositoryUrl` — the real GitHub source repository
- `liveApiUrl` — the deployed API base URL, if it exists
- `docsUrl` — the interactive API documentation URL, commonly `/docs` for a deployed FastAPI application

For example, only after you have created and verified the actual URLs, change a project's fields to:

```js
repositoryUrl: "https://github.com/REAL-USERNAME/REAL-REPOSITORY",
liveApiUrl: "https://REAL-DEPLOYMENT-HOST.example",
docsUrl: "https://REAL-DEPLOYMENT-HOST.example/docs"
```

Those example domains are explanatory placeholders, not live links. Replace them with URLs you personally confirmed. Leave fields as `null` until then. Missing links are displayed as “not published” and are not clickable.

To add your GitHub profile, set `githubProfile` to your actual profile URL. Do not guess your username or use a URL that has not been checked. Add public writing to `technicalNotes` using objects with `title` and `url` fields.

The current technology labels and feature descriptions are intended to reflect the projects as described during portfolio setup. Before publishing, compare each card against the project's actual code and README; remove any technology or feature that the repository does not implement.

## Publish with GitHub Pages

### 1. Create a GitHub repository

Create a new repository on GitHub, for example `ace-backend-portfolio`. Choose public if you want recruiters to access it. Do not add a README if you already have this folder's README, or be prepared to reconcile the files.

### 2. Initialise Git and push

From PowerShell, change directory into this folder and run:

```powershell
git init
git add .
git commit -m "Build backend developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-REAL-USERNAME/ace-backend-portfolio.git
git push -u origin main
```

Replace `YOUR-REAL-USERNAME` with your real GitHub username and use the repository URL GitHub actually provides. These are command templates, not verified URLs.

If Git says the remote already exists, inspect it with `git remote -v` before changing it. If Git prompts for authentication, use GitHub's supported sign-in or credential flow; do not put a password or token in the remote URL.

### 3. Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under the build/deployment section, select **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then save.
5. Wait for the Pages deployment to finish. GitHub will display the actual public site URL in the Pages settings.
6. Open that URL and test it. Do not advertise it until the site loads correctly.

GitHub Pages deployment availability and interface labels can change. Follow the repository's current Pages settings if the UI differs.

### 4. Update the site after edits

```powershell
git add .
git commit -m "Update portfolio content"
git push
```

After the push, allow the Pages deployment to complete and refresh the public site.

## Accessibility and responsive checks

Before publishing:

- Navigate the page with `Tab` and `Shift+Tab`; verify the focus outline is visible.
- Use the “Skip to content” link.
- Activate the mobile navigation button at a narrow viewport; check `aria-expanded` changes and a menu link closes the menu.
- Check that headings are hierarchical and every navigation link moves to the expected section.
- Test at widths around 320 px, 375 px, 768 px, and desktop width; confirm there is no horizontal overflow.
- Enable reduced motion in your operating system and confirm smooth scrolling is disabled.
- Check contrast and zoom the page to 200%.
- Click the email link and confirm it opens your default mail application.
- Confirm each external repository, demo, documentation, profile, and technical-note URL opens the intended destination.
- Test the hosted URL on a phone and in a private/incognito browser window.

## Limitations and honest presentation

- This is a static site. It does not submit contact forms or execute a Python backend.
- Project links are intentionally unconfigured until real URLs are supplied.
- A “not published” label means a URL has not been configured; it does not claim a deployment exists.
- Review the project descriptions and technology lists against the actual code before publication.
- The site imports Manrope and DM Mono from Google Fonts. If the font service is blocked, system font fallbacks are used.

## Licence

Personal portfolio starter. Review and choose a licence before distributing this code as a reusable template.
