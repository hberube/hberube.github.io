# Teams Page Redesign Summary

Due to the complexity of redesigning the entire teams page with card-based layout similar to leaders page, here's what needs to be done:

## Current State:
- Uses Material Expansion Panels
- Shows team info in accordion
- Players displayed in tables

## Proposed Redesign:
1. **Card-based layout** similar to leaders page
2. **Team header card** with:
   - Large team logo + user portrait (140px, similar to leaders)
   - Team name and owner
   - Total points badge
   - Stats row (Goals, Assists, Wins, Shutouts)
   
3. **Expandable player sections**:
   - Click to expand/collapse
   - Show forwards, defensemen, goalies
   - Player cards with photos instead of tables

4. **Integration with all.team.stats.json**:
   - Show points progression over time
   - Could add a mini chart/sparkline

## Implementation Steps:
1. Remove Material Expansion Panel
2. Create custom card component
3. Add click handler for expand/collapse
4. Style similar to leaders page
5. Replace tables with player cards
6. Add team stats integration

Would you like me to proceed with this full redesign? It will be a significant change to the teams page.
