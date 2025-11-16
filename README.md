# Pool Bérubé Roy - Modern Angular Application

A modernized hockey pool application built with Angular 17+, featuring real-time updates and a responsive Material Design interface.

## Features

- **Modern Angular 17+** with standalone components
- **TypeScript** for type safety
- **Angular Material** for beautiful UI components
- **Reactive data** with RxJS
- **Auto-refresh** data every 60 seconds
- **Responsive design** for mobile and desktop
- **Lazy loading** for optimal performance

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── models/          # Data models
│   │   └── services/        # Data services
│   ├── features/
│   │   ├── leaders/         # Leaders standings
│   │   ├── stats/           # Player statistics
│   │   ├── teams/           # Team rosters
│   │   └── injuries/        # Injury reports
│   ├── app.component.ts     # Root component
│   └── app.routes.ts        # Route configuration
├── assets/
│   ├── data/                # JSON data files
│   └── img/                 # Images
└── styles.scss              # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you make changes.

### Build

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Migration from Legacy Code

This application has been modernized from AngularJS 1.x to Angular 17+:

- ✅ Migrated from AngularJS to modern Angular
- ✅ Converted JavaScript to TypeScript
- ✅ Replaced jQuery with Angular's built-in features
- ✅ Implemented standalone components (no NgModules)
- ✅ Added Angular Material for UI
- ✅ Improved routing with lazy loading
- ✅ Reactive data management with RxJS
- ✅ Modern build tooling with Angular CLI

## Data Files

The application expects JSON data files in the `json/` directory:
- `leaders.json` - Pool standings
- `teams.json` - Team rosters
- `injuries.json` - Injury reports
- `best.forwards.json` - Top forwards
- `best.defenses.json` - Top defensemen
- `best.goalies.json` - Top goalies

## License

Private project
