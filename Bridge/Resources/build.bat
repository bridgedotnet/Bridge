@echo off
rem this script concatenates all files specified in <include name=<what> />
rem tags on Bridge.jsb file into a single bridge.js file.

cd %~dp0

type dostools\utfbom.dat > newbridge.js
<nul set /p="/*" >> newbridge.js
type dostools\unixnl.dat >> newbridge.js
type dostools\spacechar.dat >> newbridge.js

setlocal EnableDelayedExpansion
set "sep= copyright"
for /F "usebackq delims=" %%l in (`findstr /c:"%sep%=" Bridge.jsb`) do (
 set "line=%%l"
 set "header=!line:*%sep%=!"
 
 rem remove =" characters
 set "header=!header:~2!"

 rem remove from end of copyright tag to end of line
 set header=!header:" output=\!
 for /F "delims=\" %%j in ("!header!") do (
  set header=%%j
 )

 rem split on lines. use \ as line separator
 set header=!header:^&#xD;^&#xA;=\!

 :nextLine
 rem consume the 'header' var until it is empty. output one per line, formatted
 for /f "tokens=1* delims=\" %%A in ("!header!") do (
  set crline=%%A
  <nul set /p=" * !crline!" >> newbridge.js
  type dostools\unixnl.dat >> newbridge.js
  type dostools\spacechar.dat >> newbridge.js
  set header=%%B
 )
 if defined header goto nextLine
)

<nul set /p=" */" >> newbridge.js
type dostools\unixnl.dat >> newbridge.js
type dostools\unixnl.dat >> newbridge.js

set "sep=include name"
for /F "usebackq delims=" %%l in (`findstr /c:"%sep%=" Bridge.jsb`) do (
 set "line=%%l"
 set "value=!line:*%sep%=!"
 set "value=!value:~2!"
 set "value=!value:/=\!
 echo Merging !value!
 type !value! >> newbridge.js
 type dostools\unixnl.dat >> newbridge.js
)

..\..\packages\BOMStrip.1.0.0\tools\BOMStrip.exe newbridge.js

copy /y newbridge.js bridge.js
del newbridge.js

:bailout
