@echo off
title Cocktail OS — Dev Launcher
echo ================================================
echo   Cocktail OS — Starting Development Servers
echo   Client: http://localhost:5560
echo   Server: http://localhost:4560/api/health
echo ================================================
echo.

:: Start Backend (port 4560)
start "Cocktail OS - Server [4560]" cmd /k "cd /d %~dp0server && npm run dev"

:: Small delay to let server start first
timeout /t 2 /nobreak > nul

:: Start Frontend (port 5560)
start "Cocktail OS - Client [5560]" cmd /k "cd /d %~dp0client && npm run dev"

echo Both servers launched. Check the new terminal windows.
echo Press any key to close this launcher...
pause > nul
