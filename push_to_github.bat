@echo off
title Push Adamu Yakubu Portfolio to GitHub
echo ========================================================
echo   Push Adamu Yakubu Portfolio to GitHub
echo ========================================================
echo.
echo Make sure you have created the repository on GitHub:
echo   https://github.com/new
echo   Repository Name: portfolio  (or AdamuData2026.github.io)
echo   Public, DO NOT initialize with README/license (empty repo)
echo.
echo Current Remote:
git remote -v
echo.
echo Pushing main branch to GitHub...
echo If prompted, enter your GitHub Username and Personal Access Token (or password).
echo.
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo [SUCCESS] Portfolio successfully pushed to GitHub!
    echo.
    echo Next Steps to enable GitHub Pages:
    echo 1. Open https://github.com/AdamuData2026/portfolio/settings/pages
    echo 2. Set Branch to 'main' and Folder to '/ (root)'
    echo 3. Click Save. Your website will be live at:
    echo    https://adamudata2026.github.io/portfolio/
) else (
    echo [NOTICE] Push encountered an authentication or network check.
    echo If GitHub rejected password authentication, generate a Personal Access Token:
    echo 1. Visit: https://github.com/settings/tokens
    echo 2. Generate new token (classic) with 'repo' scope.
    echo 3. Use your token as the password when prompted.
)
echo.
pause
