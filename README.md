![Bridge.NET logo](https://speed.bridge.net/identity/bridgedotnet-sh.png)

<p align="center"><img src="https://user-images.githubusercontent.com/62210/29276839-1759fbe8-80cd-11e7-921c-d509e0e2a22c.png"></p>

[![Build status](https://ci.appveyor.com/api/projects/status/nm2f0c0u1jx0sniq/branch/master?svg=true)](https://ci.appveyor.com/project/ObjectDotNet/bridge/branch/master)
[![Build Status](https://travis-ci.org/bridgedotnet/Bridge.svg?branch=master)](https://travis-ci.org/bridgedotnet/Bridge)
[![NuGet Status](https://img.shields.io/nuget/v/Bridge.svg)](https://www.nuget.org/packages/Bridge)
[![Join the chat at https://gitter.im/bridgedotnet/Bridge](https://badges.gitter.im/bridgedotnet/Bridge.svg)](https://gitter.im/bridgedotnet/Bridge?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[Bridge.NET](http://bridge.net/) is an open source C#-to-JavaScript Compiler. Write your application in C# and run on billions of devices.

### Write in C#. Run in a Web Browser.

<table>
<tr><td align="center" width="50%">C#</td><td></td><td align="center"  width="50%">JavaScript</td></tr>
<tr>
<td>
<pre lang="csharp">
public class Program
{
    public static void Main()
    {
        var msg = "Hello, World!";

            Console.WriteLine(msg);
        }
}
</pre>
</td>
<td><h1>&#8680;</h1></td>
<td>
<pre lang="javascript">
Bridge.define("Demo.Program", {
    main: function Main () {
        var msg = "Hello, World!";

            System.Console.WriteLine(msg);
        }
});
</pre>
</td>
</tr>
</table>

Run the sample above at [Deck.NET](https://deck.net/helloworld).

## TL;DR

* Read the [Getting Started](https://github.com/bridgedotnet/Bridge/wiki) Knowledge Base article
* Try [Deck](https://deck.net/) if you want to play
* Installation:
  * Add **Bridge.NET** Visual Studio extension, or 
  * Use [NuGet](https://www.nuget.org/packages/bridge) to install into a C# Class Library project (`Install-Package Bridge`), or
  * [Download](http://bridge.net/download/) the Visual Studio Code starter project
* The [Attribute Reference](https://github.com/bridgedotnet/Bridge/wiki/attribute-reference) documentation is important
* The [Global Configuration](https://github.com/bridgedotnet/Bridge/wiki/global-configuration) documentation is important
* Check out [Retyped](https://retyped.com/) for 2400+ supported libraries ([demos](https://demos.retyped.com))
* Licensed under [Apache License, Version 2.0](https://github.com/bridgedotnet/Bridge/blob/master/LICENSE.md)
* Need Help? Bridge.NET [Forums](http://forums.bridge.net/) or GitHub [Issues](https://github.com/bridgedotnet/Bridge/issues)
* [@bridgedotnet](https://twitter.com/bridgedotnet) on Twitter
* [Gitter](https://gitter.im/bridgedotnet/Bridge) for messaging

## Getting Started

A great place to start if you're new to Bridge is reviewing the [Getting Started](https://github.com/bridgedotnet/Bridge/wiki) wiki.

The easiest place to see Bridge in action is [Deck.NET](https://deck.net/). 

[![Video Tutorial](https://user-images.githubusercontent.com/62210/30412015-ee0e9ccc-98d1-11e7-9a28-3bc02b900190.png)](https://www.youtube.com/watch?v=cEUR1UthE2c)

## Sample

The following code sample demonstrates a simple **App.cs** class that will run automatically on page load and write a message to the Bridge Console.

**Example ([Deck](https://deck.net/7fb39e336182bea04c695ab43379cd8c))**

```csharp
public class Program
{
    public static void Main()
    {
        Console.WriteLine("Hello World!");
    }
}
```

The C# class above will be compiled into JavaScript and added to **/Bridge/ouput/demo.js** within your project. By default, Bridge will use the Namespace name as the file name. In this case: **demo.js**. There are many options to control the output of your JavaScript files, and the [Attribute Reference](https://github.com/bridgedotnet/Bridge/wiki/attribute-reference) is important [documentation](https://github.com/bridgedotnet/Bridge/wiki) to review.

```javascript
Bridge.define("Demo.Program", {
    main: function Main() {
        System.Console.WriteLine("Hello World!");
    }
});
```

## Installation

A full list of installation options available at [bridge.net/download/](http://bridge.net/download/), including full support for Visual Studio and Visual Studio Community on Windows, and Visual Studio Mac.

### Bridge for Visual Studio

If you're using Visual Studio for Windows, the easiest way to get started is by adding the Bridge.NET for Visual Studio [extension](https://visualstudiogallery.msdn.microsoft.com/dca5c80f-a0df-4944-8343-9c905db84757).

From within Visual Studio, go to the `Tools > Extensions and Updates...`.

![Bridge for Visual Studio](https://user-images.githubusercontent.com/62210/29292228-932ebb7e-8103-11e7-952a-3088274acf10.png)

From the options on the left side, be sure to select **Online**, then search for **Bridge**. Clicking **Download** will install Bridge for Visual Studio. After installation is complete, Visual Studio may require a restart. 

![Visual Studio Extensions and Updates](https://user-images.githubusercontent.com/62210/29292229-93406b44-8103-11e7-90a0-30232486a5a7.png)

Once installation is complete you will have a new **Bridge.NET** project type. When creating new Bridge enabled projects, select this project type. 
### NuGet

Another option is installation of Bridge into a new **C# Class Library** project using [NuGet](https://www.nuget.org/packages/bridge). Within the NuGet Package Manager, search for **Bridge** and click to install. 

Bridge can also be installed using the NuGet Command Line tool by running the following command:

```
Install-Package Bridge
```

More information regarding Nuget package installation for Bridge is available in the [Documentation](https://github.com/bridgedotnet/Bridge/wiki/nuget-installation).

## Contributing

Interested in contributing to Bridge? Please see [CONTRIBUTING.md](https://github.com/bridgedotnet/Bridge/blob/master/.github/CONTRIBUTING.md).

We also flag some Issues as [up-for-grabs](https://github.com/bridgedotnet/Bridge/issues?q=is%3Aopen+is%3Aissue+label%3Aup-for-grabs). These are generally easy introductions to the inner workings of Bridge, and are items we just haven't had time to implement. Your help is always appreciated.

## Badges

Show your support by adding a **built with Bridge.NET** badge to your projects README or website.

[![Built with Bridge.NET](https://img.shields.io/badge/built%20with-Bridge.NET-blue.svg)](http://bridge.net/)

#### Markdown

```md
[![Built with Bridge.NET](https://img.shields.io/badge/built%20with-Bridge.NET-blue.svg)](http://bridge.net/)
```

#### HTML

```html
<a href="http://bridge.net/">
    <img src="https://img.shields.io/badge/built%20with-Bridge.NET-blue.svg" title="Built with Bridge.NET" />
</a>
```

## How to Help

We need your help spreading the word about Bridge. Any of the following items will help:

1. Star the [Bridge](https://github.com/bridgedotnet/Bridge/) project on GitHub
1. Add a [Badge](#badges)
1. Leave a review at [Visual Studio Gallery](https://marketplace.visualstudio.com/items?itemName=BridgeNET.BridgeNET)
1. Blog about Bridge.NET
1. Tweet about [@bridgedotnet](https://twitter.com/bridgedotnet)
1. Start a discussion on [Reddit](http://reddit.com/r/programming) or [Hacker News](https://news.ycombinator.com/)
1. Answer Bridge related questions on [StackOverflow](http://stackoverflow.com/questions/tagged/bridge.net)
1. Give a local usergroup presentation on Bridge
1. Give a conference talk on Bridge
1. Provide feedback ([forums](http://forums.bridge.net), [GitHub](https://github.com/bridgedotnet/Bridge/issues) or [email](mailto:hello@bridge.net))

## Testing

Bridge is continually tested with the full test runner available at http://testing.bridge.net/. 

## Credits

Bridge is developed by the team at [Object.NET](http://object.net/). Frameworks and Tools for .NET Developers.

## License

**Apache License, Version 2.0**

Please see [LICENSE](https://github.com/bridgedotnet/Bridge/blob/master/LICENSE.md) for details.
