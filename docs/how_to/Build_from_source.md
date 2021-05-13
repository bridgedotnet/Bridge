# Build from source

## Step 1: Get Bridge Source

1. [Clone](https://github.com/bridgedotnet/Bridge.git) the [Bridge](https://github.com/bridgedotnet/Bridge) repo
  * **master** branch is the latest, or
  * **dev** branch will be the next release, or
  * clone a feature [branch](https://github.com/bridgedotnet/Bridge/branches), or
  * clone a release [tag](https://github.com/bridgedotnet/Bridge/tags)
2. Or, [download](https://github.com/bridgedotnet/Bridge/archive/master.zip) the latest full-source .zip package
3. Or, fork the Bridge repo if you want to send a pull request

## Step 2: Compile

1. Double-click on [Bridge.sln](https://github.com/bridgedotnet/Bridge/blob/master/Bridge.sln) to open in Visual Studio
2. Switch to **Release** mode
3. Choose **Build** > **Build Solution** or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>b</kbd>

## Step 3: Setup Local NuGet Packages

1. After [Step #2](#step-2-compile) completes successfully, double-click on the file **.build\packages\collect.bat**
2. NuGet packages will be copied to the **.build\packages** folder
3. Within NuGet Package Manager, add a new [Local Package Source](https://docs.nuget.org/create/hosting-your-own-nuget-feeds) pointing to **.build\packages**

## Step 4: New Project

1. Once you setup a local NuGet package source, create a new **C# Class Library** project
2. Use **NuGet Package Manager** to install your new **Bridge** package, or
3. Use **NuGet Package Manager Console** to install **Bridge** using the following command:

```
Install-Package Bridge
```

!!!
If you recompile the **Bridge** project locally and create updated versions of the NuGet packages, it is best to delete the contents of your Projects root **packages** folder. The next time you compile your project where **Bridge** is installed, Visual Studio will automatically fetch updated Packages.
!!!