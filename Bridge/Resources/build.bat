%~dp0\JSBuilder\JSBuildConsole.exe /path=%~dp0\Bridge.jsb

move /y %~dp0\bridge.js %~dp0\bridge.min.js
move /y %~dp0\bridge-debug.js %~dp0\bridge.js