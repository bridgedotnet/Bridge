## Introduction

In the recent [3D Graphics with Bridge and WebGL](/3d-graphics-with-bridge-and-webgl/) blog post we introduced **WebGL** support in Bridge.NET. This article is intended to help you get started with WebGL in Bridge.NET but will not teach you WebGL itself as this is something well beyond its scope. If you are further interested, there are a lot of learning resources online such as [LearningWebGL.com](http://learningwebgl.com). The Bridge.NET WebGL demo which you can play with [here](https://bridge.net/#frameworks) is based on [lesson #8](http://learningwebgl.com/blog/?p=859) of the aforementioned web site. 

!!!
To get the best out of this article, clone the full source code of the 3D cube demo found in the [Demos](https://github.com/bridgedotnet/Demos) GitHub repository, inside the **WebGL\Cube** folder. To run it locally just open the `Cube3D.sln` file, build the solution and view `index.html` in the browser.
!!!

## WebGL Installation

Starting from scratch, create an empty Bridge.NET Class Library project by following the [Getting Started tutorial](kb/getting-started).

Once ready, install the [Bridge.WebGL NuGet package](https://www.nuget.org/packages/Bridge.WebGL) to add the WebGL API to the project.

```
Install-Package Bridge.WebGL
```

Please note that the [**Bridge** NuGet package](https://www.nuget.org/packages/Bridge) is auto referenced and will also be installed if it has not been added to the project already. What the **Bridge.WebGL** package actually does is it fetches the `Bridge.WebGL.dll` which contains the WebGL API.

## WebGL API

While working on the implementation of the Bridge.NET WebGL API we used several documentation resources.

* [The official WebGL specification by Khronos](https://www.khronos.org/registry/webgl/specs/1.0)
* [The OpenGL documentation by Khronos](https://www.khronos.org/opengles/sdk/docs/man)
* [The MSDN WebGL documentation](https://developer.mozilla.org/ru/docs/Web/API/WebGLRenderingContext)
* [The Mozilla WebGL documentation](https://msdn.microsoft.com/en-us/library/ie/dn621085%28v=vs.85%29.aspx)

Generally speaking, the Bridge.NET WebGL and the WebGL JavaScript APIs are pretty much the same except the former is in C# syntax and with IntelliSense support. For example, the JavaScript line:

```js
gl.viewport(0, 0, canvas.width, canvas.height);
```

where `gl` is a **WebGLRenderingContext** instance and `canvas` is a **CanvasElement** instance, looks as follows in Bridge.NET.

```csharp
gl.Viewport(0, 0, canvas.Width, canvas.Height);
```

The difference is only in the naming convention. Methods and properties start with a capital letter in Bridge.NET. Also, while typing, you will be prompted by IntelliSense with possible options and documentation on each method and parameter which is extremely useful.

## Demo Solution Structure

The are two projects in the demo solution: **Cube3D** and **www**. 

* **Cube3D** is a Bridge.NET Class Library project that contains C# source code for drawing WebGL graphics.
* **www** is an HTML application to show the results in a browser.

In the **Cube3D** project the most important files are `App.cs`, `Cube.cs` and `GLMatrix.cs`.

* `App.cs` defines the entry point to the application. It creates a WebGL rendering context and the cube itself.
* `Cube.cs` contains the **Cube** class which models the 3D cube graphic object.
* `GLMatrix.cs` is a partial Bridge.NET implementation of the [glMatrix](http://glmatrix.net) library, that is extensively used in the WebGL world.

The **www** project contains `index.html`, JavaScript files (the output of the **Cube3D** project and the glMatrix library file) and a texture image (**crate.gif**).

## InitCube Method

The **InitCube** method in `App.cs` is of paramount importance. It represents the entire logic of the demo:

1. Creates a **Cube** instance.
2. Initializes the **Cube** object with UI settings (if available).
3. Creates a WebGL rendering context.
4. Initializes WebGL shaders.
5. Initializes WebGL buffers with the data to draw the cube.
6. Initializes the texture.
7. Draws the cube.
8. Handles key pressing events to spin and zoom the cube.

```csharp
public static void InitCube(string canvasId)
{
    var cube = new Cube();

    App.InitSettings(cube);

    cube.canvas = App.GetCanvasEl(canvasId);
    cube.gl = App.Create3DContext(cube.canvas);

    if (cube.gl != null)
    {
        cube.InitShaders();
        cube.InitBuffers();
        cube.InitTexture();
        cube.Tick();

        Document.AddEventListener(EventType.KeyDown, cube.HandleKeyDown);
        Document.AddEventListener(EventType.KeyUp, cube.HandleKeyUp);
    }
    else
    {
        App.ShowError(cube.canvas, "WebGL is not supported or disabled");
    }
}
```

Fully explaining the above steps requires a separate article for each one of them. So, here we will try to shed some light only on the basic facts.

## WebGL Rendering Context

To start rendering into the browser, you need to declare a **canvas** HTML5 element in `index.html` to act as the WebGL rendering context. 

```html
<canvas id="canvas" width="320" height="240">
    Your browser doesn't appear to support the HTML5 <canvas> element.
</canvas>
```

The rendering context is created by calling the **GetContext** method on the canvas element.

```csharp
public static WebGLRenderingContext Create3DContext(CanvasElement canvas)
{
    string[] names = new string[] 
    { 
        "webgl", 
        "experimental-webgl", 
        "webkit-3d", 
        "moz-webgl" 
    };

    WebGLRenderingContext context = null;

    foreach (string name in names)
    {
        try
        {
            context = canvas.GetContext(name).As<WebGLRenderingContext>();
        }
        catch (Exception ex) { }

        if (context != null)
        {
            break;
        }
    }

    return context;
}
```

## WebGL Initialization

Having a WebGL rendering context we initialize vertex and fragment shaders in the **App.InitShaders** method. To become familiar with shaders, reading [lesson #1](http://learningwebgl.com/blog/?p=28) of [LearningWebGL.com](http://learningwebgl.com) is highly recommended.

With the shaders initialized, we start preparing WebGL buffers in the **App.InitBuffers** method. This is quite a complicated topic, so it is best to go through [lesson #4](http://learningwebgl.com/blog/?p=370).

The **App.InitTexture** method sets up a texture image and applies it on the cube. The process is well-explained in [lesson #5](http://learningwebgl.com/blog/?p=507).

## Animation

Spinning the cube is basically done by redrawing it periodically with new rotation settings. The logic is encapsulated in the **Tick** method of the **Cube** class.

```csharp
public void Tick()
{
    App.InitSettings(this);
    this.HandleKeys();
    this.DrawScene();
    this.Animate();
    Global.SetTimeout(this.Tick, 20);
}
```

First, it re-reads the **Cube** settings from UI (if available). Then it handles key events. Pressing `A`, `S`, `D`, `W` changes the speed of spinning on X- and Y-axes and pressing `Q` and `E` zooms out/in the cube. Next, a call to **this.DrawScene** draws the cube and **this.Animate** changes the X and Y rotation parameters for the next iteration. Finally, it schedules re-drawing of the cube in 20 milliseconds by calling the **Global.SetTimeout** method.

## Further Development

Can you imagine the power of coding WebGL graphics in C#? We can! We think there is huge potential. C# with Visual Studio opens new horizons to creating big WebGL projects.

As usual, you are welcome to the Bridge.NET [community forums](https://forums.bridge.net/) to share your thoughts and suggestions or report bugs. By the way, what WebGL JavaScript library would you like to see in Bridge.NET?