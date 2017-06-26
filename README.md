![bridge-repo-header](https://user-images.githubusercontent.com/62210/27444113-89c3f518-5732-11e7-9911-f8cb31aaef14.png)

[![Build status](https://ci.appveyor.com/api/projects/status/nm2f0c0u1jx0sniq/branch/master?svg=true)](https://ci.appveyor.com/project/ObjectDotNet/bridge/branch/master)
[![Build Status](https://travis-ci.org/bridgedotnet/Bridge.svg?branch=master)](https://travis-ci.org/bridgedotnet/Bridge)
[![NuGet Status](https://img.shields.io/nuget/v/Bridge.svg)](https://www.nuget.org/packages/Bridge)
[![Join the chat at https://gitter.im/bridgedotnet/Bridge](https://badges.gitter.im/bridgedotnet/Bridge.svg)](https://gitter.im/bridgedotnet/Bridge?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CLA assistant](https://cla-assistant.io/readme/badge/bridgedotnet/Bridge)](https://cla-assistant.io/bridgedotnet/Bridge)

[Bridge.NET](http://bridge.net/) is an open source C#-to-JavaScript Compiler.

Compile your C#...

```csharp
class Program
{
    static void Main(string[] args)
    {
        var msg = "Hello, world!";
        
        Console.WriteLine(msg);
    }
}
```

into JavaScript

```js
Bridge.define("Program", {
    main: function Main(args) {
        var msg = "Hello, world!";

        System.Console.WriteLine(msg);
    }
});
```

Run the sample above at [Deck.NET](https://deck.net/5c58693ae7b44ac969f576545cac7f0c).

## TL;DR

* Read the [Getting Started](https://github.com/bridgedotnet/Bridge/wiki) Knowledge Base article
* Try [Deck](https://deck.net/) if you want to play
* Installation:
  * Add **Bridge.NET** Visual Studio extension, or 
  * Use [NuGet](https://www.nuget.org/packages/bridge) to install into a C# Class Library project (`Install-Package Bridge`), or
  * [Download](http://bridge.net/download/) the Visual Studio Code starter project
* The [Attribute Reference](https://github.com/bridgedotnet/Bridge/wiki/attribute-reference) is important
* The [Global Configuration](https://github.com/bridgedotnet/Bridge/wiki/global-configuration) is important
* Licensed under [Apache License, Version 2.0](https://github.com/bridgedotnet/Bridge/blob/master/LICENSE.md)
* Need Help? Bridge.NET [Forums](http://forums.bridge.net/) or GitHub [Issues](https://github.com/bridgedotnet/Bridge/issues)
* [@bridgedotnet](https://twitter.com/bridgedotnet) on Twitter
* [Gitter](https://gitter.im/bridgedotnet/Bridge) for messaging

## Getting Started

A great place to start if you're new to Bridge is reviewing the [Getting Started](https://github.com/bridgedotnet/Bridge/wiki) wiki.

The easiest place to see Bridge in action is [Deck.NET](https://deck.net/). 

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

A full list of installation options available at [bridge.net/download/](http://bridge.net/download/), including full support on Windows, Mac OS and Linux for [Visual Studio Code](https://code.visualstudio.com/) and [Mono Develop](http://www.monodevelop.com/).

### Bridge for Visual Studio

If you're using Visual Studio, the best way to get started is by adding the Bridge.NET for Visual Studio [extension](https://visualstudiogallery.msdn.microsoft.com/dca5c80f-a0df-4944-8343-9c905db84757).

From within Visual Studio, go to the `Tools > Extensions and Updates...`.

![Visual Studio Extensions and Updates](https://cloud.githubusercontent.com/assets/62210/13193691/10876f0a-d73a-11e5-809d-69b090da6769.png)

From the options on the left side, be sure to select **Online**, then search for **Bridge**. Clicking **Download** will install Bridge for Visual Studio. After installation is complete, Visual Studio may require a restart. 

![Bridge for Visual Studio](https://cloud.githubusercontent.com/assets/62210/13193692/10964c46-d73a-11e5-8350-700236c98016.png)

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

1. Add a [Badge](#badges)
1. Star **[Bridge](https://github.com/bridgedotnet/Bridge/)** project on GitHub
1. Leave a review on [Visual Studio Gallery](https://marketplace.visualstudio.com/items?itemName=BridgeNET.BridgeNET)
1. Blog about Bridge.NET
1. Tweet about [@bridgedotnet](https://twitter.com/bridgedotnet)
1. Start a discussion on [Reddit](http://reddit.com/r/programming)
1. Answer Bridge related questions on [StackOverflow](http://stackoverflow.com/questions/tagged/bridge.net)
1. Give a local usergroup presentation on Bridge
1. Give a conference talk on Bridge
1. Provide feedback ([forums](http://forums.bridge.net), [GitHub](https://github.com/bridgedotnet/Bridge/issues) or [email](mailto:hello@bridge.net))
1. Vote for Bridge.NET on [UserVoice](https://visualstudio.uservoice.com/forums/121579-visual-studio-ide/suggestions/17335078-support-bridge-net)

## Testing

Bridge is continually tested and the full test runner is available at http://testing.bridge.net/. 

## Credits

Bridge is developed by the team at [Object.NET](http://object.net/). Frameworks and Tools for .NET Developers.

## License

**Apache License, Version 2.0**

Please see [LICENSE](https://github.com/bridgedotnet/Bridge/blob/master/LICENSE.md) for details.
