# Method Patterns

## Buffered Method

```csharp Example ([Deck.NET](https://deck.net/65a45a3f28ad28dedf689d5c89bf238b))
/*
Buffers the execution of the method for the configured number of milliseconds. If called again within that period, the impending invocation will be canceled, and the timeout period will begin again.
*/
public class Program
{
    [BufferedMethod(1000)]
    public static void MyMethod1()
    {
         Console.WriteLine(DateTime.Now.TimeOfDay);    
    }
    
    public static void Main()
    {
        var button = new HTMLButtonElement()
        {
            ClassName = "btn",
            InnerHTML = "Click",
            Style =
            {
                MarginRight = "10px" 
            }
        };
    
        button.AddEventListener(EventType.Click, MyMethod1);
        Document.Body.AppendChild(button);
    }
}
```

When you click the button, it should show the current time in the console, like this:

``` Output
02:52:15.8510000
```

Each time the button is clicked, an updated time string will be displayed in a new console line.

## Barrier Method

```csharp Example ([Deck.NET](https://deck.net/47174e2d53fc3e643d7ab60fafdd4d45))
/*
The Method will be called after the passed number of invocations.
*/
public class Program
{
    [BarrierMethod(5)]
    public static void MyMethod1()
    {
         Console.WriteLine(DateTime.Now.TimeOfDay);    
    }
    
    public static void Main()
    {
        var button = new HTMLButtonElement()
        {
            ClassName = "btn",
            InnerHTML = "Click 5 times to see output",
            Style =
            {
                MarginRight = "10px" 
            }
        };
    
        button.AddEventListener(EventType.Click, MyMethod1);
        Document.Body.AppendChild(button);
    }
}
```

When you click the button the fifth time, it should show the current time in the console, like this:

``` Output
02:52:15.8510000
```

Additional clicks won't trigger the method so no more console output messages will be displayed until reload.

## Delayed Method

```csharp Example ([Deck.NET](https://deck.net/81c632c83af37be020a47ddf6cc2ebfb))
/*
The Method will be executed after a specific delay in milliseconds
*/
public class Program
{
    [DelayedMethod(1000)]
    public static void MyMethod1()
    {
         Console.WriteLine(DateTime.Now.TimeOfDay);    
    }
    
    public static void Main()
    {
        var button = new HTMLButtonElement()
        {
            ClassName = "btn",
            InnerHTML = "Click",
            Style =
            {
                MarginRight = "10px" 
            }
        };
    
        button.AddEventListener(EventType.Click, MyMethod1);
        Document.Body.AppendChild(button);
    }
}
```

When you click the button, it should show the current time in the console after a delay of 1000ms (1 second). The output will be something like this:

``` Output
02:52:15.8510000
```

Each time the button is clicked, an updated time string will be displayed, after the set delay, in a new console line. It buffers the clicks, so quickly clicking the button will display one line per click, always obeying the click's event delay.

## Throttled Method

```csharp Example ([Deck.NET](https://deck.net/902dad0627a2eafc4893b88f381aa4a7))
/*
Creates a throttled version of the passed Method, which when called repeatedly and rapidly, invokes the passed function only after a certain interval has elapsed since the previous invocation.
*/
public class Program
{
    [ThrottledMethod(1000)]
    public static void MyMethod1()
    {
         Console.WriteLine(DateTime.Now.TimeOfDay);    
    }
    
    public static void Main()
    {
        var button = new HTMLButtonElement()
        {
            ClassName = "btn",
            InnerHTML = "Click",
            Style =
            {
                MarginRight = "10px" 
            }
        };
    
        button.AddEventListener(EventType.Click, MyMethod1);
        Document.Body.AppendChild(button);
    }
}
```

When you click the button, it should show the current time in the console, like this:

``` Output
02:52:15.8510000
```

Each time the button is clicked, an updated time string will be displayed in a new console line. If the button is repeatedly clicked within the 1000ms throttle delay, the click event will be suppressed.
