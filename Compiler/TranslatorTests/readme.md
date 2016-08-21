**Please note**
The test project should have a dependency on **Bridge.Transpiled** project (the project that triggers Bridge Core JavaScript generation).
The dependency can be set in **Solution Properties** -> **Project Dependencies**.
This is required in order to get NUnit Test Adapter not triggering **Bridge** and **Bridge.Html5** projects compilation
afterwards or instead of **Bridge.Transpiled** project.



﻿These server-side NUnit tests are to check transpilation process from end to end and can be considered as integration tests as well.

There is `NUnit test project` located at 
  https://github.com/bridgedotnet/Bridge/blob/master/Compiler/TranslatorTests/Bridge.Translator.Tests.csproj
  
This `NUnit test project` contains NUnit tests to run transpilation for all `Bridge test projects` located in folder
  https://github.com/bridgedotnet/Bridge/tree/master/Compiler/TranslatorTests/TestProjects
    
A `Bridge test project` is a usual Bridge project with **bridge.json** configuration file with specific settings to be tested and output folder configured as `"output": "Bridge\\output"`.
NUnit tests run translipation for `Bridge test projects` and compare actual output files from **Bridge\output** folder with expected output located in **Bridge\reference** folder.
A test fails if any descrepancies found.

**Working with server-side NUnit tests**

 1) Install [NUnit3 Test Adapter](https://visualstudiogallery.msdn.microsoft.com/0da0f6bd-9bb6-4ae3-87a8-537788622f2d)  
 2) Run the tests in Visual Studio `Test Explorer` window.

Basically, there are two reasons why a test can fail:    
   1) Difference in actual output compared to expected:
       - See the test error description to check the difference between actual and expected outputs;
       - Copy actual output from *Bridge\output* folder into *Bridge\reference* folder and use any Diff tool to check all the differences. Please note there is a utility located at https://github.com/bridgedotnet/Bridge/blob/master/Compiler/TranslatorTests/CopyOutputToReference/CopyOutputToReference.sln
         The utility copies `actual` output into corresponding `reference` folder for each Bridge test project (do not forget to run test before running the copy utility to generate output before copying).         
    2) Corresponding `Bridge test project` cannot be compiled and (or) transpiled:
       - open the corresponding Bridge test *test.csproj* project file in Visual Studio and rebuild it to see the underlying errors


**Adding tests**

  There are two existing `Bridge test projects` to test features (Test16) and bugs (Test18). In general, they should be used for testing new bugs and features:
   - Just open existing appropriate Bridge **test.csproj** project file in Visual Studio;
   - Add code required to test;
   - Rebuild the project;
   - Copy **output** to corresponding **reference** folder, For example, Test18 project;
     - Locate the Bridge output folder **..Compiler\TranslatorTests\TestProjects\18\Bridge\output**
     - Copy all generated files into **..\Compiler\TranslatorTests\TestProjects\18\Bridge\reference**
     
     Analyse the differences.
     Please note the files **bridge.js** and **bridge.min.js**. is checked in `Test01` so you don't have to copy content into reference folder - empty files with the names are Ok.
   - Close the `Bridge test project` and run NUnit tests in the `NUnit test project` as described in `Working with server-side NUnit tests`.
  
  New `Bridge test projects` should be created if the project's **bridge.json** configuration file contradicts with the settings required to test a new bug or feature:
  - Copy one of the folders in https://github.com/bridgedotnet/Builder/tree/master/TranslatorTests/TestProjects
  - Give it a numeric incremental name, let's say `19`
  - Open the new `Bridge test project` in folder `19`in VisualStudio and add all required CS classes
  - Rebuild the project
  - Locate the Bridge output folder **..Compiler\TranslatorTests\TestProjects\19\Bridge\output**
  - Copy all generated files into **..\Compiler\TranslatorTests\TestProjects\19\Bridge\reference**
    
    These reference files will be compared to actual output during test execution.
    Please note the files **bridge.js** and **bridge.min.js**. is checked in test 01 so you don't have to copy content into reference folder - empty files with the names is Ok. 
  - In `NUnit test project`, add `[TestCase]` attribute to method Test in class https://github.com/bridgedotnet/Builder/blob/master/TranslatorTests/OutputTest.cs
    For example,  `[TestCase("19", true, true, TestName = "OutputTest for project 19 - description of what being tested")]`
  - Run all tests locally in Visual Studio using NUnit Test Adapter;
  - Push the changes.
  
**Troubleshooting on CI server**  
1) Test results are on the build TESTS page. For example, https://ci.appveyor.com/project/ObjectDotNet/builder/build/tests  
   It contains both js client tests and cs server tests  
2) There are logs accessible on the build ARTIFACTS page (three msbuild log files and one test log file `Bridge.Translator.Tests.run.log`)
   For example, https://ci.appveyor.com/project/ObjectDotNet/builder/build/artifacts
