# Calling your code from JavaScript

Calling a method in your C# class from JavaScript is very straightforward. One approach is to add a `<script>` tag with JavaScript on your page.

With this approach, all that is required is to know your Project and class names so you can build the call path.

### Determining Your Function Name

To determine which JavaScript function name to call, use the following pattern:

```csharp
[Namespace].[ClassName].[MethodName]();
```

The following sample demonstrates the technique.

```csharp
namespace Demo
{
    public class App
    {
        public static void Init()
        {
            Console.WriteLine("Hello, world!");
        }
    }
}
```

Then, on your page you should add a `<script>` HTML tag like the one below:

```html
<script src="bridge.js"></script>
<script src="demo.js"></script>
<script>
    Demo.App.Init();
</script>
```

The `Init()` function will be called as soon as the contents of the `<script>` tag are executed by the browser.