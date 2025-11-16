# Migration Guide: Legacy to Modern Angular

## Overview

This guide documents the migration from AngularJS 1.x to Angular 17+.

## Key Changes

### 1. Framework Migration

**Before (AngularJS 1.x):**
```javascript
angular.module('main', ['ngRoute'])
  .controller('leadersCtrl', function($scope, $http) {
    $http.get('json/leaders.json').success(function(data) {
      $scope.pool = data;
    });
  });
```

**After (Angular 17+):**
```typescript
@Component({
  selector: 'app-leaders',
  standalone: true,
  template: `...`
})
export class LeadersComponent implements OnInit {
  leaders$: Observable<PoolTeam[]>;
  
  constructor(private poolDataService: PoolDataService) {}
  
  ngOnInit(): void {
    this.leaders$ = this.poolDataService.getLeaders();
  }
}
```

### 2. Routing

**Before:**
```javascript
$routeProvider.when('/leaders', {
  templateUrl: 'views/leaders.html',
  controller: 'leadersCtrl'
});
```

**After:**
```typescript
export const routes: Routes = [
  {
    path: 'leaders',
    loadComponent: () => import('./features/leaders/leaders.component')
      .then(m => m.LeadersComponent)
  }
];
```

### 3. HTTP Requests

**Before:**
```javascript
$http.get('json/leaders.json').success(function(data) {
  $scope.pool = data;
});
```

**After:**
```typescript
this.http.get<PoolTeam[]>('assets/data/leaders.json')
  .pipe(shareReplay(1))
  .subscribe();
```

### 4. Auto-Refresh

**Before:**
```javascript
$interval(function(){
  liveDataUpdate($scope, $http);
}, 60000);
```

**After:**
```typescript
interval(60000).pipe(
  startWith(0),
  switchMap(() => this.http.get<T>(`${this.dataPath}/${filename}`)),
  shareReplay(1)
);
```

### 5. UI Components

**Before:** Bootstrap 3 + jQuery
**After:** Angular Material

### 6. Type Safety

All code now uses TypeScript with strict type checking:

```typescript
export interface PoolTeam {
  name: string;
  owner: string;
  totalPoints: number;
  rank: number;
  players: Player[];
}
```

## File Structure Changes

### Old Structure
```
/
├── index.html
├── modules/
│   ├── core.js
│   ├── main.js
│   └── maintenance.js
├── views/
│   ├── leaders.html
│   ├── stats.html
│   └── teams.html
└── json/
```

### New Structure
```
src/
├── app/
│   ├── core/
│   │   ├── models/
│   │   └── services/
│   ├── features/
│   │   ├── leaders/
│   │   ├── stats/
│   │   ├── teams/
│   │   └── injuries/
│   └── app.component.ts
└── assets/
    └── data/
```

## Benefits of Migration

1. **Type Safety**: TypeScript catches errors at compile time
2. **Better Performance**: Ahead-of-time compilation, tree-shaking
3. **Modern Tooling**: Angular CLI, better debugging
4. **Maintainability**: Clear component structure, dependency injection
5. **Mobile-First**: Responsive Material Design
6. **Future-Proof**: Active framework with long-term support

## Running the New Application

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Data Migration

The JSON data files remain the same, but are now served from `assets/data/` instead of `json/`.

Update your build process to copy JSON files to the assets folder, or the angular.json already handles this automatically.

## Next Steps

1. Install dependencies: `npm install`
2. Test with existing JSON data
3. Update any backend APIs if needed
4. Deploy the new build
5. Remove old AngularJS files once verified

## Rollback Plan

The old files are preserved. To rollback:
1. Restore old index.html
2. Keep using old modules/ and views/
3. Remove new src/ directory

## Support

For issues or questions about the migration, refer to:
- [Angular Documentation](https://angular.io/docs)
- [Angular Material](https://material.angular.io/)
- [RxJS Documentation](https://rxjs.dev/)
