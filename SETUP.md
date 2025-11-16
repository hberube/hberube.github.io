# Quick Setup Guide

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Angular 17+ framework
- Angular Material UI components
- TypeScript compiler
- RxJS for reactive programming
- All development tools

### 2. Verify Installation

```bash
npm run ng version
```

### 3. Start Development Server

```bash
npm start
```

The app will be available at `http://localhost:4200/`

### 4. Build for Production

```bash
npm run build
```

Output will be in `dist/hockey-pool/`

## Project Features

### ✅ Modern Angular 17+
- Standalone components (no NgModules needed)
- Signal-based reactivity
- Latest Angular features

### ✅ TypeScript
- Full type safety
- Better IDE support
- Catch errors early

### ✅ Angular Material
- Beautiful, responsive UI
- Accessible components
- Consistent design

### ✅ Reactive Data
- Auto-refresh every 60 seconds
- RxJS observables
- Efficient data management

### ✅ Lazy Loading
- Fast initial load
- Code splitting
- Optimized bundles

## File Organization

```
src/app/
├── core/
│   ├── models/pool.model.ts          # Data interfaces
│   └── services/pool-data.service.ts # API service
├── features/
│   ├── leaders/                      # Standings page
│   ├── stats/                        # Statistics page
│   ├── teams/                        # Team rosters page
│   └── injuries/                     # Injuries page
├── app.component.ts                  # Root component
└── app.routes.ts                     # Route config
```

## Available Routes

- `/leaders` - Pool standings (default)
- `/stats` - Player statistics
- `/teams` - Team rosters
- `/injuries` - Injury reports

## Data Files

Place your JSON data files in the `json/` directory. They will be automatically copied to `assets/data/` during build:

- `leaders.json`
- `teams.json`
- `injuries.json`
- `best.forwards.json`
- `best.defenses.json`
- `best.goalies.json`
- `live.poolers.json`
- `live.skaters.json`
- `live.goalies.json`
- `live.games.json`

## Development Tips

### Hot Reload
Changes to TypeScript files automatically reload the browser.

### Debugging
Use Chrome DevTools with source maps for debugging TypeScript.

### Linting
```bash
npm run lint
```

### Testing
```bash
npm test
```

## Common Issues

### Port Already in Use
```bash
npm start -- --port 4201
```

### Clear Cache
```bash
rm -rf .angular/cache
npm start
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ✅ Test with your JSON data
4. ✅ Customize styles in `src/styles.scss`
5. ✅ Add new features as needed

## Resources

- [Angular Docs](https://angular.io/docs)
- [Angular Material](https://material.angular.io/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Guide](https://rxjs.dev/guide/overview)
