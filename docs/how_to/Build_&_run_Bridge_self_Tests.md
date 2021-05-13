# Build & run Bridge self tests

## Introduction

This is a stub for a guide for running Bridge tests. Feedbacks and suggestions on formatting are highly appreciated from the community.

The text here is heavily based in the instructions provided [in this issue comment](https://github.com/bridgedotnet/Bridge/pull/3758#issuecomment-435532696), with the goal into running the more than 200,000 Bridge self tests we maintain to every fixed issue in our development cycle.

The process should be similar to [Building Bridge from Sources](Build_From_Source.md), but includes a few extra steps, especially important if you made modifications on Bridge sources and want them to reflect in the run tests.

## Step-thru

In this case, the `Bridge.Dev.sln` solution should be built.

Step-thru:
1. Open `Bridge.Dev.sln`
2. Within the **Solution Explorer**, right-click the `Tests\Runner` project and choose `Set as StartUp Project`.
3. Build the project

In step 3 above, you should be able to just go to <kbd>Debug</kbd> menu, <kbd>Start Without Debugging</kbd> before building. The whole solution gets built at this point, this is necessary to ensure Bridge changes not caught by Visual Studio are refreshed at the point the website project is run.

## Testing with your own built NuGet packages

For running the tests with your own built NuGet packages, it is necessary that the new packages are available from NuGet to download. This requires a few extra-steps:

1. Delete whatever copy of the packages are currently under Bridge's `packages/` directory
2. Set up a local NuGet repository and set it as first on the list with **NuGet Package Manager** (or console)
3. Copy over the freshly built NuGet packages to the locat NuGet repository folder
4. Repeat steps 1-4 to ensure the fresh NuGet packages and dependencies are met.

### Caveats

- To ensure fresh packages were used, it may be useful to temporarily disable `nuget.org` from the list of available NuGet sources. As long as only the Bridge packages to be updated have been removed from `packages/`, it should not miss any other third-party NuGet package, and won't download original versions of the NuGet packages.
- It may be necessary to repeat steps several times as dependencies are met after each build iteration.
- The updated NuGet packages are laid in the projects' `bin/<Configuration>/` directory.
- One way to ensure all packages are being updated is searching within the project for `.nupkg` files, excluding whatever is within the repostory's `/packages/` folder.
- If you expect updates to the `Bridge.Min.<version>.nupkg` and already built the solution once close and reopen the whole Visual Studio Instance with the solution open before trying a rebuild with the updated NuGet package. This is required because Visual Studio locks up Bridge's build task once it is first called.

Here's an example using the GNU's `find` tool to find the NuGet packages in Bridge repository after a successful build. This tool should be available if you have either cygwin or the git bash shell that comes with **Git for Windows**. This is how it looks like when building the sources for **Bridge 17.4.0**:

```
find ./ -name '*.nupkg' -not -path './packages/*'
./Compiler/Build/bin/Release/Bridge.Clean.17.4.0.nupkg
./Compiler/Build/bin/Release/Bridge.Min.17.4.0.nupkg
./Compiler/Contract/bin/Release/Bridge.Contract.17.4.0.nupkg
./Compiler/Translator/bin/Release/Bridge.Compiler.17.4.0.nupkg
./PostBuild/bin/Release/Bridge.17.4.0.nupkg
./PostBuild/bin/Release/Bridge.Core.17.4.0.nupkg
```