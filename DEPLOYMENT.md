# 🚀 Deployment Guide - GitHub Pages

## 📊 Current Status

✅ **Your website is LIVE!**

- **Live URL:** https://sacredalchemy.github.io
- **GitHub Repository:** https://github.com/sacredalchemy/sacredalchemy.github.io
- **Deployment Platform:** GitHub Pages (Automatic)
- **Branch:** `main`

---

## 🌍 How GitHub Pages Works

This repository uses GitHub Pages to automatically deploy your React app:

1. **Main branch contains your source code** (`src/`)
2. **Build folder is pushed to GitHub**
3. **GitHub serves the `index.html` and static files** from the build folder
4. **Your site is accessible at:** https://sacredalchemy.github.io

---

## 📝 Making Updates

### Step 1: Make Changes Locally

Edit your React code in the `src/` folder:
```bash
# For example, update a page or component
nano src/pages/Home/Home.js
```

### Step 2: Build for Production

Create an optimized production build:
```bash
npm run build
```

This generates the `build/` folder with optimized files.

### Step 3: Commit Changes

```bash
git add .
git commit -m "Description of changes"
```

### Step 4: Push to GitHub

```bash
git push origin main
```

### Step 5: Verify Deployment

- Changes appear on https://sacredalchemy.github.io within **1-2 minutes**
- You can check deployment status at: https://github.com/sacredalchemy/sacredalchemy.github.io/actions

---

## 🔄 Automated Workflow

The repository is configured to serve files from the root of the `main` branch.

When you push the built app, GitHub Pages automatically:
1. Detects the `index.html` in the repository root
2. Serves the `static/` folder and other files
3. Updates the live website

---

## 📦 What's Deployed

```
sacredalchemy.github.io/
├── index.html              ← Main entry point
├── asset-manifest.json
├── bslogo.png
├── logo.svg
└── static/
    ├── js/                 ← JavaScript bundles
    ├── css/                ← CSS files
    └── media/              ← Images & assets
```

---

## 🔧 Configuration

### Homepage URL
The `package.json` has:
```json
"homepage": "https://sacredalchemy.github.io"
```

This tells React where the app is hosted.

### Build Settings
```json
"scripts": {
  "build": "react-scripts build"
}
```

---

## ✅ Checklist for Future Updates

Before pushing code:
- [ ] Tested changes locally with `npm start`
- [ ] Ran `npm run build` successfully
- [ ] All files added with `git add .`
- [ ] Committed with descriptive message
- [ ] Ready to push with `git push origin main`

---

## 🆘 Troubleshooting

### Changes Not Showing
1. Hard refresh your browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Clear browser cache
3. Check GitHub Actions for deployment status
4. Wait up to 5 minutes for deployment to complete

### 404 Errors
- Ensure `index.html` is in the root of your repository
- Verify `build/` folder was properly copied to root
- Check that all static files are in the `static/` folder

### Broken Assets
- Verify all images and files are in the `public/` folder before build
- Check that paths in your code match deployed file structure
- Ensure `homepage` in `package.json` matches your GitHub Pages URL

---

## 📚 Useful Commands

```bash
# Development
npm start                  # Start local development server

# Production
npm run build             # Build for production
npm test                  # Run tests
npm eject                 # Eject from create-react-app (not reversible)

# Git
git status               # Check current changes
git log                  # View commit history
git remote -v            # View remote repository
git branch               # List branches
```

---

## 🔐 SSH Authentication

Your project uses SSH keys for GitHub authentication:

- **Key location:** `~/.ssh/id_ed25519_new`
- **SSH config:** `~/.ssh/config` (routes to github-new host)
- **Remote URL:** `git@github-new:sacredalchemy/sacredalchemy.github.io.git`

When pushing, you'll be prompted for your SSH key passphrase.

---

## 📞 Support

For GitHub Pages issues:
- Visit: https://docs.github.com/en/pages
- Check Actions tab: https://github.com/sacredalchemy/sacredalchemy.github.io/actions
- Repository settings: https://github.com/sacredalchemy/sacredalchemy.github.io/settings/pages

---

## 🎉 Summary

Your Sacred Alchemy website is now **LIVE** on GitHub Pages! 

Every time you:
1. Make changes to code
2. Run `npm run build`
3. Push to GitHub (`git push origin main`)

Your website automatically updates at: **https://sacredalchemy.github.io**

Happy deploying! ✨
