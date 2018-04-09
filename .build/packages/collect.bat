:: By default, this process should only run on a Release compile 
:: because .nupkg files are only created during Release mode.

::------------------------------------------------------------------------------------------::
:: CONFIG
::------------------------------------------------------------------------------------------::

:: Set to either Release or Build.
SET build=Release

:: Set root folder depth
SET root="..\..\..\"

:: Set a custom output folder
SET output="%root%Bridge\.build\packages\"

::------------------------------------------------------------------------------------------::
:: Bridge
::------------------------------------------------------------------------------------------::

:: Bridge.PostBuild
echo f | xcopy /f /y "%root%Bridge\PostBuild\bin\%build%\*.nupkg"                   %output%

:: Bridge.Build
echo f | xcopy /f /y "%root%Bridge\Compiler\Build\bin\%build%\*.nupkg"              %output%

:: Bridge.Contract
echo f | xcopy /f /y "%root%Bridge\Compiler\Contract\bin\%build%\*.nupkg"           %output%

:: Bridge.Compiler
echo f | xcopy /f /y "%root%Bridge\Compiler\Builder\bin\%build%\bridge.exe"         %output%
echo f | xcopy /f /y "%root%Bridge\Compiler\Translator\bin\%build%\*.nupkg"         %output%

::------------------------------------------------------------------------------------------::
:: Plugins
::------------------------------------------------------------------------------------------::

:: Bridge.Aspect
echo f | xcopy /f /y "%root%Aspect\Bridge.Aspect\bin\%build%\*.nupkg"               %output%

:: Bridge.Test
echo f | xcopy /f /y "%root%Test\Bridge.Test\bin\%build%\*.nupkg"                   %output%

::------------------------------------------------------------------------------------------::
:: Frameworks
::------------------------------------------------------------------------------------------::

:: Bridge.Html5
echo f | xcopy /f /y "%root%Frameworks\Html5\bin\%build%\*.nupkg"                   %output%

:: Bridge.Newtonsoft.Json
echo f | xcopy /f /y "%root%Bridge.Newtonsoft.Json\Newtonsoft.Json\bin\%build%\*.nupkg"	%output%

:: Bridge.Bootstrap3
echo f | xcopy /f /y "%root%Frameworks\Bootstrap3\bin\%build%\*.nupkg"              %output%

:: Bridge.Html5.Console
echo f | xcopy /f /y "%root%Frameworks\Html5.Console\bin\%build%\*.nupkg"           %output%

:: Bridge.jQuery2
echo f | xcopy /f /y "%root%Frameworks\jQuery2\bin\%build%\*.nupkg"                 %output%

:: Bridge.QUnit
echo f | xcopy /f /y "%root%Frameworks\QUnit\bin\%build%\*.nupkg"                   %output%

:: Bridge.WebGL
echo f | xcopy /f /y "%root%Frameworks\WebGL\bin\%build%\*.nupkg"                   %output%

:: Bridge.QUnit.Sample
echo f | xcopy /f /y "%root%Samples\QUnit\Bridge.QUnit.Sample\bin\%build%\*.nupkg"  %output%

:: PAUSE
