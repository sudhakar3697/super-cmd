@echo off
if "%1"=="" (
    %WINDIR%\explorer.exe %HOMEPATH%
) else (
    %WINDIR%\explorer.exe %1
)