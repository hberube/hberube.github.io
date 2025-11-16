@echo off
echo ========================================
echo Hockey Pool Project Cleanup
echo ========================================
echo.
echo This will remove old legacy files that are no longer needed.
echo The Angular app in /src will NOT be touched.
echo.
pause

echo.
echo Removing old HTML files...
del /q "404.html" 2>nul
del /q "c3-test.html" 2>nul
del /q "gamecenter*.html" 2>nul
del /q "gemecenter.html" 2>nul
del /q "index_bu.html" 2>nul
del /q "index_old.html" 2>nul
del /q "index2.html" 2>nul
del /q "live-results.html" 2>nul
del /q "m.PoolBerubeRoy*.html" 2>nul
del /q "main.html" 2>nul
del /q "mobile*.html" 2>nul
del /q "mytwitter.html" 2>nul
del /q "old.PoolBerubeRoy.html" 2>nul
del /q "pool.main.html" 2>nul
del /q "PoolBerubeRoy*.html" 2>nul
del /q "real.html" 2>nul
del /q "temp*.html" 2>nul
del /q "test*.html" 2>nul
del /q "testPopUp.htm" 2>nul

echo Removing old JavaScript files...
del /q "d3-barplot.js" 2>nul
del /q "iscroll.js" 2>nul
del /q "jquery*.js" 2>nul
del /q "poolMobileRedirect.js" 2>nul
del /q "popup.js" 2>nul
del /q "swipe.js" 2>nul
del /q "tooltip.js" 2>nul
del /q "zepto.min*.js" 2>nul

echo Removing old CSS files...
del /q "standalone.css" 2>nul
del /q "styles.css" 2>nul
del /q "tabs-flowplayer-v2*.css" 2>nul

echo Removing old Python scripts...
del /q "automate-Weekly-Email.py" 2>nul
del /q "sendEmail*.py" 2>nul

echo Removing old batch files...
del /q "CommitStats*.bat" 2>nul
del /q "SB_CommitStats.bat" 2>nul
del /q "start-server.bat" 2>nul

echo Removing old text/data files...
del /q "allLeague.txt" 2>nul
del /q "d3-barplot-stats.csv" 2>nul
del /q "Document1.txt" 2>nul
del /q "Echanges-Pool-2011-2012.txt" 2>nul
del /q "INSTALL_INSTRUCTIONS.txt" 2>nul

echo Removing old image files...
del /q "blue_panes.jpg" 2>nul
del /q "left*.png" 2>nul
del /q "logo.png" 2>nul
del /q "picture.jpg" 2>nul
del /q "right.png" 2>nul
del /q "teaser*.gif" 2>nul

echo Removing old XML/config files...
del /q "browserconfig.xml" 2>nul
del /q "crossdomain.xml" 2>nul

echo Removing old IntelliJ file...
del /q "hberube.github.io.iml" 2>nul

echo Removing old directories...
rmdir /s /q "css" 2>nul
rmdir /s /q "d3" 2>nul
rmdir /s /q "doc" 2>nul
rmdir /s /q "fonts" 2>nul
rmdir /s /q "images" 2>nul
rmdir /s /q "img - Copy" 2>nul
rmdir /s /q "js" 2>nul
rmdir /s /q "modules" 2>nul
rmdir /s /q "views" 2>nul
rmdir /s /q "scripts" 2>nul

echo.
echo ========================================
echo Cleanup Complete!
echo ========================================
echo.
echo Your Angular app in /src is safe and untouched.
echo All old legacy files have been removed.
echo.
pause
