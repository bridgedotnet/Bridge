# Bridge.Test Overview

## Installation

Install **Bridge.Test** into your C# Class Library project using [NuGet](https://www.nuget.org/packages/bridge.test).

```
Install-Package Bridge.Test
```

![Install-Package Bridge.Test](https://i.imgur.com/qgqHRZg.gif)

## Sample

The following sample demonstrates defining a simple **Person** class, then running a simple test against a property of a `Person` instance.

Currently **Bridge.Test** only supports **NUnit** syntax. A future release will provide support for **XUnit** syntax, in addition to **NUnit**.

```csharp
using Bridge.Test.NUnit;

namespace Demo
{
    public class Person
    {
        public string Name { get; set; } = "Frank";
    }

    [TestFixture]
    public class AppTest
    {
        [Test]
        public void AutoPropertyInitializerIsWorking()
        {
            Assert.AreEqual(new Person().Name, "Frank");
        }
    }
}
```

Your `demo.html` file should be configured as follows:

```html
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Bridge Test Demo</title>

    <script src="../output/bridge.js"></script>
    <script src="../output/bridge.test.js"></script>

    <script src="../output/demo.js"></script>
    <script src="../output/demo.runner.js"></script>
</head>
<body>
    <!-- 
        Right-Click on this file and select "View in Browser"
    --> 
</body>
</html>
```

After compiling your sample, right-click on the `demo.html` file and select <kbd>View in Browser</kbd>. A browser should open and your tests should run.

![Bridge Test Sample](https://i.imgur.com/zm3WgSS.png)

You can view the Bridge Testing runner at https://testing.bridge.net.

## TestFixture Attribute

The `[TestFixture]` attribute is applied to a class.

This attribute marks a class that contains tests.

There are a few restrictions on a class to be used as a `[TestFixture]`:

  - Must be `public`
  - Must not be abstract
  - Must have a default constructor

## Test Attribute

The `[Test]` attribute used to make a method inside a **TestFixture** class as a test.

Test methods may have parameters. Multiple sets of arguments cause the creation of multiple tests.

A Method marked with `[Test]`:

  - Must be `public`
  - Must not be abstract
  - A parameterized test method must match the parameters provided
  - May be static
  - May appear one or more times on a test method

## Category Attribute

The `[Category]` attribute applies to either individual tests or fixtures that are identified as belonging to a particular category.

## SetUp Attribute

The `[SetUp]` attribute is used inside a `[TestFixture]` to provide a common set of functions to be performed just before each test method is called. 

SetUp methods may be either static or instance methods and you may define more than one in a fixture. If a **SetUp** method fails or throws an exception, the test is not executed and a failure or error is reported.

## TearDown Attribute

The `[TearDown]` attribute is used inside a `[TestFixture]` to provide a common set of functions that are performed after each test method. **TearDown** methods may be either static or instance and you may define more than one in a fixture. 

The **TearDown** method will not run if a **SetUp** method fails or throws an exception.

## Ignore Attribute

The `[Ignore]` attribute can be applied to _not_ run a `[Test]` or `[TestFixture]`.

This attribute should be used temporarily, as it is considered a better mechanism than commenting out the test or renaming methods. Tests with `[Ignore]` will still be compiled with the rest of the tests and insures that tests will not be forgotten.
