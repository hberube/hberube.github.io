@echo off
echo ========================================
echo Committing Changes to Git
echo ========================================
echo.

echo Checking current status...
git status

echo.
echo ========================================
echo Adding all changes...
git add .

echo.
echo Committing changes...
git commit -m "UI improvements: expandable highlights, updated banner, accessibility enhancements"

echo.
echo Pushing to remote repository...
git push

echo.
echo ========================================
echo Done! Your changes are now on GitHub.
echo ========================================
pause
