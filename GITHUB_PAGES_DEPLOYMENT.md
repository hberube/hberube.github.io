# GitHub Pages Deployment Guide

## Setup for GitHub Pages

### 1. Update angular.json for GitHub Pages

In `angular.json`, update the build configuration:

```json
"outputPath": "docs",
"baseHref": "/your-repo-name/"
```

Replace `your-repo-name` with your actual GitHub repository name.

### 2. Build for Production

```bash
npm run build -- --configuration production --base-href /your-repo-name/
```

This creates optimized files in the `docs` folder.

### 3. Add 404.html for Angular Routing

Copy `docs/index.html` to `docs/404.html` after building:

```bash
copy docs\index.html docs\404.html
```

This ensures Angular routing works on GitHub Pages.

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main` (or your default branch)
   - Folder: `/docs`
4. Click **Save**

### 5. Update package.json Scripts

Add these helpful scripts to `package.json`:

```json
"scripts": {
  "build:gh": "ng build --configuration production --base-href /your-repo-name/",
  "deploy:gh": "ng build --configuration production --base-href /your-repo-name/ && copy docs\\index.html docs\\404.html"
}
```

### 6. Deploy

```bash
npm run deploy:gh
git add docs
git commit -m "Deploy to GitHub Pages"
git push
```

Your site will be live at: `https://yourusername.github.io/your-repo-name/`

## Important Notes

### Asset Paths
- All assets should use relative paths or start with `assets/`
- Images: `assets/img/image.png`
- JSON: `assets/json/data.json`

### Base Href
- Always include the correct `--base-href` when building
- This ensures all routes and assets work correctly on GitHub Pages

### CORS Issues
- If loading external data, ensure CORS is properly configured
- Consider using a proxy or CORS-enabled API

### Custom Domain (Optional)
1. Add a `CNAME` file in the `docs` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Troubleshooting

### Blank Page After Deployment
- Check browser console for errors
- Verify `base-href` matches your repository name
- Ensure `404.html` exists and matches `index.html`

### Assets Not Loading
- Check that asset paths don't start with `/`
- Use `assets/` prefix for all assets
- Verify files exist in the `docs` folder after build

### Routing Issues
- Ensure `404.html` is present
- Check that `base-href` is correct
- Verify Angular routing is configured properly

## Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build:gh
      
    - name: Copy 404.html
      run: cp docs/index.html docs/404.html
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./docs
```

This automatically deploys when you push to main!
