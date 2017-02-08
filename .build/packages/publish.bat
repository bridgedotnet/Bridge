@ECHO OFF

SET /p proceed1=Are you sure? [y] or [n]
SET /p version=Bridge release version number?
SET /p apikey=NuGet API Key?

IF "%proceed1%"=="y" (
    ECHO Starting Bridge Publishing...

    ..\..\.nuget\NuGet.exe push Bridge.Core.%version%.nupkg  %apikey%
    ECHO Bridge.Core has been published


    ..\..\.nuget\NuGet.exe push Bridge.Min.%version%.nupkg  %apikey%
    ECHO Bridge.Min has been published


    ..\..\.nuget\NuGet.exe push Bridge.Html5.%version%.nupkg  %apikey%
    ECHO Bridge.Html5 has been published


    ..\..\.nuget\NuGet.exe push Bridge.%version%.nupkg  %apikey%
    ECHO Bridge has been published


    ECHO SUCCESS!
)


SET /p proceed2=Have you updated the framework .nuspec version numbers? [y] or [n]

IF "%proceed2%"=="y" (
    ECHO Starting Framework Publishing...

    :: ..\..\.nuget\NuGet.exe push Bridge.Clean.15.5.0.nupkg  %apikey%
    :: ECHO Bridge.Clean has been published

    ..\..\.nuget\NuGet.exe push Bridge.Bootstrap.3.9.4.nupkg  %apikey%
    ECHO Bridge.Bootstrap has been published


    :: ..\..\.nuget\NuGet.exe push Bridge.Collections.1.3.4.nupkg  %apikey%
    :: ECHO Bridge.Collections has been published


    :: ..\..\.nuget\NuGet.exe push Bridge.Html5.Console.1.0.2.nupkg  %apikey%
    :: ECHO Bridge.Html5.Console has been published


    :: ..\..\.nuget\NuGet.exe push Bridge.jQuery.2.9.3.nupkg  %apikey%
    :: ECHO Bridge.jQuery has been published


    :: ..\..\.nuget\NuGet.exe push Bridge.QUnit.1.8.3.nupkg  %apikey%
    :: ECHO Bridge.QUnit has been published


    :: ..\..\.nuget\NuGet.exe push Bridge.WebGL.1.8.3.nupkg  %apikey%
    :: ECHO Bridge.WebGL has been published


    ECHO SUCCESS!
)

PAUSE