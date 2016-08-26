**Please note**
**Bridge.Transpiled** (the project that triggers Bridge Core JavaScript generation) should be a Bridge project (`NoStdLib` etc).
This forces the the project recompilation when compiler tests **Bridge.Translator.Tests** are run with NUnit Test Adapter.
NUnit Test Adapter run test dicsovery even if the solution if fully rebuilt already.
The test dicsovery process "does not like" `NoStdLib` projects (earlier Test Adapter version even shown exceptions in Test OUTput window).
Therefore the discovery process always tries to rebuild `NoStdLib` projects. We did not find a way to supress test discovery for certain projects.
In order to force the process do it (discovery) properly (considering project dependencies) the **Bridge.Transpiled** should be also a `NoStdLib` prject.
So that it will be built each time the test discovery process touches **Bridge** and **Bridge.Html5** projects.
