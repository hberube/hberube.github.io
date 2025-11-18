# How to Deploy Your Angular PWA to GitHub Pages

## Quick Deploy (Easiest Way)

Just run:
```
deploy-to-github.bat
```

This will:
1. Build your Angular app for production (with PWA support)
2. Copy files to the `docs` folder
3. Create necessary files for GitHub Pages
4. Include service worker and PWA manifest
5. Commit and push to GitHub

## Manual Deploy Steps

If you prefer to do it manually:

```bash
# 1. Build the app (includes PWA service worker)
npm run build

# 2. Copy built files to docs folder
xcopy /E /I /Y dist\hockey-pool\browser docs

# 3. Copy 404.html for Angular routing
copy docs\index.html docs\404.html

# 4. Create .nojekyll file (tells GitHub not to use Jekyll)
type nul > docs\.nojekyll

# 5. Stage all changes
git add docs

# 6. Commit the changes
git commit -m "Deploy PWA to GitHub Pages"

# 7. Push to GitHub
git push
```

## After Deployment

Wait 1-2 minutes, then visit: **https://hberube.github.io/**

### PWA Features Will Work:
- ✅ Install prompt on desktop/mobile
- ✅ Offline mode with cached data
- ✅ Service worker caching
- ✅ Fast loading from cache
- ✅ Auto-updates

## Configure GitHub Pages (One-Time Setup)

1. Go to: https://github.com/hberube/hberube.github.io/settings/pages
2. Under **Source**, select:
   - Branch: `master` (or `main`)
   - Folder: `/docs`
3. Click **Save**

## Your Site URL

After deployment, your site will be at:
**https://hberube.github.io/**

## Testing PWA Features

### On Desktop:
1. Visit your site
2. Look for install banner at bottom
3. Click "Installer" to add to desktop
4. Test offline: DevTools → Network → Offline checkbox

### On Mobile:
1. Visit your site on phone
2. Browser shows "Add to Home Screen"
3. Install the app
4. Open from home screen (full-screen mode)
5. Turn off WiFi/data to test offline mode

## Important Notes

### Why `/docs` folder?
- GitHub Pages can serve from root `/` or `/docs` folder
- We use `/docs` to keep source code separate from built files
- The `docs` folder contains the compiled Angular PWA

### PWA Files Included
- `ngsw.json` - Service worker configuration
- `ngsw-worker.js` - Service worker script
- `manifest.webmanifest` - PWA manifest
- `assets/icons/` - App icons (8 sizes)

### The old index.html
- The old `index.html` in your root is from the legacy version
- You can delete it or move it to a backup folder
- The new Angular PWA is built from `/src` into `/docs`

### After Deployment
- Wait 1-2 minutes for GitHub to update
- Clear your browser cache (Ctrl+F5) to see changes
- Check browser console (F12) for any errors

## Troubleshooting

### Site shows old version
1. Clear browser cache (Ctrl+Shift+Delete)
2. Try incognito/private mode
3. Wait a few minutes for GitHub to update
4. Check that GitHub Pages is pointing to `/docs` folder

### Assets not loading
- Make sure all asset paths use `assets/` prefix
- Check that files exist in the `docs` folder after build
- Verify `base-href` is set to `/`

### Blank page
- Check browser console for errors
- Verify `docs/404.html` exists
- Make sure `.nojekyll` file is in `docs` folder

## Testing Before Deploy

Always test locally first:
```bash
npm start
```

Then open http://localhost:4200 in your browser.

## What Gets Deployed

The `docs` folder contains:
- Compiled JavaScript bundles
- Optimized CSS
- All assets (images, JSON data)
- index.html and 404.html
- manifest.json for PWA support

## What Doesn't Get Deployed

Thanks to `.gitignore`:
- `/node_modules` (too large)
- `/src` source code (only compiled version)
- Development files
- Build artifacts
