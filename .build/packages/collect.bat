:: By default, this process should only run on a Release compile 
:: because .nupkg files are only created during Release mode.


::---------------------------------------------------------------------------------------::
:: CONFIG
::---------------------------------------------------------------------------------------::

:: Set to either Release or Build.
SET build=Release

:: Set root folder depth
SET root="..\..\..\"

:: Set a custom output folder
SET output="%root%Bridge\.build\packages\"


::---------------------------------------------------------------------------------------::
:: FIND NUPKG'S
::---------------------------------------------------------------------------------------::

:: Bridge
echo f | xcopy /f /y "%root%Bridge\Bridge\bin\%build%\*.nupkg"                  %output%

:: Bridge.Html5
echo f | xcopy /f /y "%root%Bridge\Html5\bin\%build%\*.nupkg"                   %output%

:: Bridge.Contract
echo f | xcopy /f /y "%root%Bridge\Compiler\Contract\bin\%build%\*.nupkg"       %output%

:: Bridge.Compiler
echo f | xcopy /f /y "%root%Bridge\Compiler\Translator\bin\%build%\*.nupkg"     %output%

:: Bridge.Test
echo f | xcopy /f /y "%root%Test\Bridge.Test\bin\%build%\*.nupkg"               %output%

:: Bridge.Aspect
echo f | xcopy /f /y "%root%Aspect\Bridge.Aspect\bin\%build%\*.nupkg"           %output%

:: Bridge.AngularJS
echo f | xcopy /f /y "%root%Frameworks\AngularJS\bin\%build%\*.nupkg"           %output%

:: Bridge.Bootstrap3
echo f | xcopy /f /y "%root%Frameworks\Bootstrap3\bin\%build%\*.nupkg"          %output%

:: Bridge.Collections
echo f | xcopy /f /y "%root%Frameworks\Collections\bin\%build%\*.nupkg"         %output%

:: Bridge.jQuery2
echo f | xcopy /f /y "%root%Frameworks\jQuery2\bin\%build%\*.nupkg"             %output%

:: Bridge.QUnit
echo f | xcopy /f /y "%root%Frameworks\QUnit\bin\%build%\*.nupkg"               %output%

:: Bridge.WebGL
echo f | xcopy /f /y "%root%Frameworks\WebGL\bin\%build%\*.nupkg"               %output%