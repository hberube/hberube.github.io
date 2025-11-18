# Last Updated Timestamp Guide

## What Was Added

A "Last Updated" timestamp now appears at the bottom of the leaders page, showing when the data was last refreshed.

## How to Add the Timestamp to Your JSON

### Option 1: Manual Update

Edit your `json/leaders.json` file and add a `lastUpdated` field at the root level:

```json
{
  "topTotalScore": 1234,
  "lowTotalScore": 567,
  "topScoreYesterday": 45,
  "lowScoreYesterday": 12,
  "lastUpdated": "2024-01-15 08:30 AM",
  "leaders": [
    ...
  ],
  "bestLast7Days": { ... },
  "bestLast14Days": { ... },
  "bestLast28Days": { ... },
  "bestYesterday": { ... },
  "bestTonight": { ... },
  "worstLast7Days": { ... },
  "worstLast14Days": { ... },
  "worstLast28Days": { ... },
  "worstYesterday": { ... }
}
```

### Option 2: Automated Script (Python Example)

If you're generating the JSON with a script, add this:

```python
from datetime import datetime

# Your existing data generation code...

data = {
    "topTotalScore": top_score,
    "lowTotalScore": low_score,
    # ... other fields ...
    "lastUpdated": datetime.now().strftime("%Y-%m-%d %I:%M %p"),
    "leaders": leaders_list,
    # ... rest of your data ...
}

# Write to file
with open('json/leaders.json', 'w') as f:
    json.dump(data, f, indent=2)
```

### Option 3: Automated Script (Node.js Example)

```javascript
const fs = require('fs');

// Your existing data generation code...

const data = {
  topTotalScore: topScore,
  lowTotalScore: lowScore,
  // ... other fields ...
  lastUpdated: new Date().toLocaleString('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }),
  leaders: leadersList,
  // ... rest of your data ...
};

// Write to file
fs.writeFileSync('json/leaders.json', JSON.stringify(data, null, 2));
```

### Option 4: Batch Script (Windows)

Create a `update-timestamp.bat` file:

```batch
@echo off
setlocal enabledelayedexpansion

:: Get current date and time
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set year=!datetime:~0,4!
set month=!datetime:~4,2!
set day=!datetime:~6,2!
set hour=!datetime:~8,2!
set minute=!datetime:~10,2!

:: Format timestamp
set timestamp=!year!-!month!-!day! !hour!:!minute!

echo Updating timestamp to: !timestamp!

:: You'll need to use a JSON tool like jq or manually update
:: This is just an example - adapt to your workflow
echo "lastUpdated": "!timestamp!" 

pause
```

## Timestamp Format Examples

You can use any format you prefer:

- `"2024-01-15 08:30 AM"` (12-hour with AM/PM)
- `"2024-01-15 20:30"` (24-hour)
- `"15 janvier 2024, 20h30"` (French format)
- `"Jan 15, 2024 at 8:30 PM"` (English long format)
- `"Il y a 2 heures"` (Relative time - if you calculate it)

## What Happens If You Don't Add It

If the `lastUpdated` field is missing or empty, the timestamp simply won't appear at the bottom of the page. The rest of the app will work normally.

## Testing

1. Add the `lastUpdated` field to your `json/leaders.json`
2. Commit and push to GitHub
3. Wait 1-2 minutes for GitHub Pages to update
4. Refresh your site
5. Scroll to the bottom - you should see: "⏰ Dernière mise à jour: [your timestamp]"

## Benefits

✅ **Know when data was updated** - See at a glance if overnight updates ran
✅ **Debug issues** - Quickly identify if data is stale
✅ **User transparency** - Users know how fresh the data is
✅ **No rebuild needed** - Just update the JSON file and push

## Example Complete JSON Structure

```json
{
  "topTotalScore": 1500,
  "lowTotalScore": 800,
  "topScoreYesterday": 45,
  "lowScoreYesterday": 12,
  "lastUpdated": "2024-01-15 08:30 AM",
  "leaders": [
    {
      "pos": 1,
      "teamName": "Les Champions",
      "teamUserName": "Hugo",
      "goals": 150,
      "passes": 200,
      "goaliesWins": 25,
      "goaliesShutOuts": 5,
      "points": 1500,
      "goalsDiff": 10,
      "passesDiff": 15,
      "goaliesWinDiff": 2,
      "goaliesShutOutsDiff": 1,
      "pointsDiff": 45,
      "userLogo": "hugo.png",
      "bigLogo": "champions_big.png",
      "smallLogo": "champions_small.png",
      "playForCash": true,
      "hasPaid": true,
      "diffPosition": 0
    }
  ],
  "bestLast7Days": { ... },
  "bestLast14Days": { ... },
  "bestLast28Days": { ... },
  "bestYesterday": { ... },
  "bestTonight": { ... },
  "worstLast7Days": { ... },
  "worstLast14Days": { ... },
  "worstLast28Days": { ... },
  "worstYesterday": { ... }
}
```
