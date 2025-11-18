# PWA Testing Guide

## ✅ What We've Implemented

### 1. **Service Worker & Offline Support**
- App shell caching (HTML, CSS, JS)
- Data caching with smart strategies:
  - Pool data: Fresh data first, fallback to cache (1 hour max age)
  - Player photos: Performance-first caching (7 days max age)
- Automatic updates with user prompt

### 2. **Install Prompt**
- Custom install banner appears when app is installable
- "Install" button for easy one-click installation
- "Plus tard" (Later) option to dismiss

### 3. **Offline Indicator**
- Red banner at top when offline
- Shows "Mode hors ligne - Données en cache"
- Automatically disappears when back online

### 4. **Enhanced Manifest**
- Proper app name: "Pool Bérubé Roy - Hockey LNH"
- Short name: "Pool Hockey"
- Standalone display mode (looks like native app)
- All required icon sizes (72x72 to 512x512)
- Hockey theme colors

## 🧪 How to Test

### Testing Locally (Development)

**Note:** Service workers only work in production builds or on HTTPS/localhost.

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Serve the production build:**
   ```bash
   npx http-server dist/hockey-pool -p 8080
   ```

3. **Open in browser:**
   ```
   http://localhost:8080
   ```

### Testing Install Prompt

1. Open Chrome DevTools (F12)
2. Go to Application tab → Manifest
3. Check if manifest is loaded correctly
4. Click "Add to home screen" to test installation
5. Or wait for the custom install banner to appear

### Testing Offline Mode

1. Open Chrome DevTools (F12)
2. Go to Network tab
3. Check "Offline" checkbox
4. Refresh the page
5. App should still work with cached data
6. Red offline banner should appear at top

### Testing on Mobile

1. **Deploy to GitHub Pages** (already configured)
2. Open on your phone's browser
3. Look for "Add to Home Screen" prompt
4. Install the app
5. Open from home screen - should look like native app!

### Testing Service Worker Updates

1. Make a change to the app
2. Build again: `npm run build`
3. Deploy the new version
4. Open the app (it will use cached version)
5. Service worker detects new version
6. Prompt appears: "Nouvelle version disponible!"
7. Click OK to reload with new version

## 📱 Features You'll See

### On Desktop:
- Install banner at bottom of screen
- Offline indicator when disconnected
- Fast loading from cache
- Update prompts when new version available

### On Mobile:
- "Add to Home Screen" browser prompt
- Custom install banner
- App opens in standalone mode (no browser UI)
- Offline support
- Fast loading
- Native app feel

## 🎯 Next Steps (Optional Enhancements)

### 1. **Badge API** (Show rank on app icon)
```typescript
// In leaders component, update badge when rank changes
if ('setAppBadge' in navigator) {
  (navigator as any).setAppBadge(currentRank);
}
```

### 2. **Push Notifications** (Requires backend)
- Notify when rank changes
- Alert when players score
- Weekly recap notifications

### 3. **Background Sync**
- Queue actions when offline
- Sync when connection returns

### 4. **Share API**
- Share your rank with friends
- Share team stats

## 🐛 Troubleshooting

### Install prompt doesn't appear?
- Make sure you're on HTTPS or localhost
- Check if already installed
- Try in incognito mode
- Check DevTools → Application → Manifest for errors

### Service worker not working?
- Only works in production builds
- Check DevTools → Application → Service Workers
- Make sure you're on HTTPS or localhost
- Try unregistering old service workers

### Offline mode not working?
- Build must be production (`npm run build`)
- Service worker must be registered
- Check DevTools → Application → Cache Storage

## 📊 Caching Strategy

### App Shell (Prefetch)
- Loads immediately on install
- Always available offline
- HTML, CSS, JS bundles

### Assets (Lazy)
- Loads on demand
- Cached for future use
- Images, fonts, icons

### Pool Data (Freshness)
- Tries network first
- Falls back to cache if offline
- Max age: 1 hour
- Timeout: 10 seconds

### Player Photos (Performance)
- Cache first
- Network if not cached
- Max age: 7 days
- Max 500 images cached

## 🚀 Deployment

Your app is already configured for GitHub Pages deployment. Just run:

```bash
npm run build
# Copy dist/hockey-pool/* to docs/
# Commit and push
```

The PWA will work automatically on GitHub Pages (it's HTTPS).

## ✨ User Benefits

1. **Install on phone** - One tap from home screen
2. **Works offline** - View last known standings
3. **Fast loading** - Cached assets load instantly
4. **Auto updates** - Always get latest version
5. **Native feel** - No browser UI when installed
6. **Save data** - Less network usage with caching
7. **Reliable** - Works even with poor connection

Enjoy your new Progressive Web App! 🎉
