# Project Cleanup Summary

## What Was Cleaned Up

This project was migrated from a legacy HTML/jQuery application to a modern Angular application. The cleanup removed old files that are no longer needed.

### Removed Files

**Old HTML Files:**
- All `gamecenter*.html` files (old game center pages)
- All `mobile*.html` files (old mobile versions)
- All `PoolBerubeRoy*.html` files (old pool pages)
- All `m.PoolBerubeRoy*.html` files (old mobile pool pages)
- Test and temp files (`temp*.html`, `test*.html`)
- Backup files (`index_bu.html`, `index_old.html`)
- Conflict copies (files with "Copie en conflit" or "conflicted copy")

**Old JavaScript Libraries:**
- jQuery files (`jquery*.js`)
- Old libraries (`iscroll.js`, `zepto.min.js`, `swipe.js`, `tooltip.js`, `popup.js`)
- Old custom scripts (`poolMobileRedirect.js`, `d3-barplot.js`)

**Old CSS Files:**
- `standalone.css`
- `styles.css`
- `tabs-flowplayer-v2*.css`

**Old Scripts:**
- Python email scripts (`automate-Weekly-Email.py`, `sendEmail*.py`)
- Batch files (`CommitStats*.bat`, `start-server.bat`)

**Old Directories:**
- `/css/` - old stylesheets
- `/d3/` - old D3.js visualizations
- `/doc/` - old documentation
- `/fonts/` - old font files
- `/images/` - old images
- `/img - Copy/` - duplicate image folder
- `/js/` - old JavaScript files
- `/modules/` - old modules
- `/views/` - old view templates
- `/scripts/` - old scripts

**Miscellaneous:**
- Old text files (`allLeague.txt`, `Document1.txt`, etc.)
- Old images (`blue_panes.jpg`, `teaser.gif`, etc.)
- Old config files (`browserconfig.xml`, `crossdomain.xml`)
- IntelliJ project file (`hberube.github.io.iml`)

### What Was Kept

**Angular Application (in `/src/`):**
- All Angular components, services, and modules
- Modern application structure

**Essential Files:**
- `index.html` - Main entry point (now serves Angular app)
- `package.json` - Dependencies
- `angular.json` - Angular configuration
- `tsconfig*.json` - TypeScript configuration
- `.gitignore` - Git configuration
- `README.md`, `SETUP.md`, `MIGRATION_GUIDE.md` - Documentation
- `MODERNIZATION_SUMMARY.md`, `TEAMS_REDESIGN.md`, `ENHANCEMENTS.md` - Project docs

**Data Files:**
- `/json/` - JSON data files used by the Angular app
- `/img/` - Images used by the Angular app
- `/mug_shots/` - Player photos

**Static Assets:**
- `favicon.ico`, `apple-touch-icon.png` - App icons
- `robots.txt`, `humans.txt` - SEO files
- `tile*.png` - Windows tile icons

## How to Run the Cleanup

1. **Review the cleanup script:**
   ```
   notepad cleanup-old-files.bat
   ```

2. **Run the cleanup:**
   ```
   cleanup-old-files.bat
   ```

3. **Verify everything still works:**
   ```
   npm start
   ```

## Safety Notes

- The Angular app in `/src/` is completely untouched
- All data files in `/json/` are preserved
- All images in `/img/` and `/mug_shots/` are preserved
- You can always restore files from Git history if needed
- The cleanup script shows what it's doing and pauses before starting

## After Cleanup

Your project will be much cleaner with only:
- Modern Angular application
- Essential configuration files
- Data and assets actually being used
- Relevant documentation

The old legacy files that were removed are no longer needed since the app has been fully migrated to Angular.
