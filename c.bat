@echo off
if "%1"=="" (
	start cmd /k cd %HOMEPATH%
) else (
	start cmd /k cd %1
)