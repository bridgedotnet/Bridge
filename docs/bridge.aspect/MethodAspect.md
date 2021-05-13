# MethodAspect Attribute

The `[MethodAspect]` attribute enables the configuration of intercept points in a method’s execution by providing four methods to override.

| Hooks | Description |
| --- | --- |
| `OnEntry` | Before the execution of the method body |
| `OnExit` | Always called when a method is done executing even if there was an error |
| `OnSuccess` | Called only when a method is done executing and there were no exceptions |
| `OnException` | Called only when a method has stopped executing due to an unhandled exception |

# Examples

## Logger

Creating a simple Logger Attribute to log messages as Methods are called. If an Exception is thrown, we can also capture the error by adding the `OnException` override.

```csharp Example ([Deck.NET](https://deck.net/f2634997a0d54a08ccbffa18efa64ff3))
using System;
using Bridge.Aspect;

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            App.Save();
        }

        [Logger]
        public static void Save()
        {
            Console.WriteLine("Saving...");
            System.Threading.Thread.Sleep(2000);
            Console.WriteLine("Saved");
        }
    }

    public class LoggerAttribute : MethodAspectAttribute
    {
        public override void OnEntry(MethodAspectEventArgs args)
        {
            // Write to logging system here
            Console.WriteLine("Log: Before {0}", args.MethodName);
        }
        
        public override void OnExit(MethodAspectEventArgs args)
        {
            // Write to logging system here
            Console.WriteLine("Log: After {0}", args.MethodName);
        }
    }
}
```

``` Output
Log: Before save
Saving...
Saved
Log: After save
```

## OnException

Catch exception and show information about it.

```csharp Example ([Deck.NET](https://deck.net/465833bf051944e5c4cc4b368ebc0d40))
using System;
using Bridge.Aspect;

namespace Demo
{
    public class App
    {
        /// <summary>
        /// Bridge.Aspect is flexible in how aspects can be applied. Here we'll go over the most direct way which is applying it to the target method declaration. 
        /// </summary>
        [ExceptionWrapper]
        public static void MethodWithException()
        {
            throw new InvalidOperationException("Oops, something wrong");
        }

        public static void Main()
        {
           App.MethodWithException();
        }
    }

    /// <summary>
    /// Bridge.Aspect comes with an aspect class called MethodAspectAttribute that is specifically designed for implementing method handling behaviour.
    /// To use MethodAspectAttribute, we simply inherit from it. MethodAspectAttribute exposes a few virtual methods that we can override to gain access to certain events. 
    /// Since we want to handle exceptions when they occur, we override the OnException method.
    /// The OnException method is called when an unhandled exception occurs in the target method. 
    /// Bridge.Aspect will wrap the target method in a try/catch where the code we provided will be placed in the catch.
    /// Inside OnException, we can build a string to hold some exception information that we will log. 
    /// OnException provides us with a MethodAspectEventArgs parameter that contains useful information about the current method and the exception that was thrown. 
    /// args.Exception holds the exception that was thrown by the method so we can extract the details we need from there.  
    /// </summary>
    public class ExceptionWrapper : MethodAspectAttribute
    {
        public override void OnException(MethodAspectEventArgs args)
        {
            string msg = string.Format("{0}.{1} had an error @ {2}: {3}\n{4}",
                args.Scope.GetType().FullName, args.MethodName, DateTime.Now,
                args.Exception.Message, args.Exception.StackTrace);

            Console.WriteLine(msg);

            throw new Exception("There was a problem");
        }

        /*
             Another method that MethodAspectAttribute exposes for us is GetExceptionTypes. 
             The way MethodAspectAttribute works is by wrapping the method in a try/catch block and catching exceptions of type Exception.
             But there will be cases when you want to handle a specific type of error.         
             Implementing GetExceptionTypes is nothing more than returning the types you wish to handle.
        */
        //remove to catch all exceptions
        protected override Type[] GetExceptionTypes(string methodName, object scope)
        {
            return new Type[] { typeof(InvalidOperationException) };
        }
    }
}
```

``` Console output
Function.MethodWithException had an error @ 11/14/2017 17:03:28: Oops, something wrong
Error: Oops, something wrong
    at ctor (https://deck.net/resources/js/bridge/bridge.min.js?16.5.0:7:86604)
    at new ctor (https://deck.net/resources/js/bridge/bridge.min.js?16.5.0:7:91972)
    at Function.MethodWithException (https://deck.net/RunHandler.ashx?h=1035154033:28:27)
    at u.proceed (https://deck.net/resources/js/run.min.js?16.5.0:1:2471)
    at Object.proceedArgs [as proceed] (https://deck.net/resources/js/run.min.js?16.5.0:1:2762)
    at Function.MethodWithException (https://deck.net/resources/js/run.min.js?16.5.0:1:3227)
    at Function.Main (https://deck.net/RunHandler.ashx?h=1035154033:9:22)
    at https://deck.net/resources/js/bridge/bridge.min.js?16.5.0:7:38586
    at HTMLDocument.i (https://deck.net/resources/js/bridge/bridge.min.js?16.5.0:7:5163)
    at i (https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js:2:27151)
```

``` Exception (red) output
System.Exception: Uncaught System.Exception: There was a problem
Error: There was a problem
    at new ctor (https://deck.net/resources/js/bridge/bridge.min.js?16.5.0:7:86604)
    at u.onException (https://deck.net/RunHandler.ashx?h=1035154033:58:23)
    at Function.MethodWithException (https://deck.net/resources/js/run.min.js?16.5.0:1:3505)
    at Function.Main (https://deck.net/RunHandler.ashx?h=1035154033:9:22)
    at https://deck.net/resources/js/bridge/bridge.min.js?16.5.0:7:38586
    at HTMLDocument.i (https://deck.net/resources/js/bridge/bridge.min.js?16.5.0:7:5163)
    at i (https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js:2:27151)
    at Object.add [as done] (https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js:2:27450)
    at n.fn.init.n.fn.ready (https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js:2:29515)
    at new n.fn.init (https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js:2:24945)
```

## Performance Auditing

Runs a performance check using a Stopwatch instance against method invocation.

```csharp Example ([Deck.NET](https://deck.net/2fcfb64c475601da9f69ff61db345641))
using System.Diagnostics;
using Bridge.Aspect;

namespace Demo
{
    public class App
    {
        [ProfilerAspect]
        public static void Main()
        {
            System.Threading.Thread.Sleep(1500);
        }
    }

    public class ProfilerAspect : MethodAspectAttribute
    {
        public override void OnEntry(MethodAspectEventArgs args)
        {
            args.Tag = Stopwatch.StartNew();
        }

        public override void OnExit(MethodAspectEventArgs args)
        {
            Stopwatch sw = (Stopwatch)args.Tag;
            sw.Stop();

            string output = string.Format("{0} Executed in {1} milliseconds",
                                args.MethodName, sw.ElapsedMilliseconds);

            Debug.WriteLine(output);
        }
    }
}
```

``` Output
Main Executed in 1499 milliseconds
```

## Catching Exception

Catch any Exceptions thrown and do not re-throw. Useful for catching, then logging exceptions into another process or system.

```csharp Example ([Deck.NET](https://deck.net/8feb35578c84c8e37eeb90b204af7e26))
using System;
using Bridge.Aspect;

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            Console.WriteLine("Start of Main");
            MethodWithException();
            Console.WriteLine("End of Main");
        }

        [DemoAspect]
        public static void MethodWithException()
        {
            throw new Exception();
        }
    }

    public class DemoAspect : MethodAspectAttribute
    {
        public override void OnException(MethodAspectEventArgs args)
        {
            Console.WriteLine("OnException");
            args.Flow = AspectFlow.Continue;
        }
    }
}
```

``` Output
Start of Main
OnException
End of Main
```

## Cache - Flow Control

The following samples demonstrates how implement flow control for a method. In this sample, the method aspect will cache method result and return it (without recalculation) if the method is invoked with such arguments already

```csharp Example ([Deck.NET](https://deck.net/16c908f82029fcbffc1a623dac4749f4))
public class Program
{
    [MethodCache]
    public static int Factorial(int numberInt)
    {
        int result = numberInt;

        for (int i = 1; i < numberInt; i++)
        {
          result = result * i;
        }
        
        return result;
    }
    
    public static void Main()
    {
        Console.WriteLine(Factorial(3));
        Console.WriteLine(Factorial(4));
        
        Console.WriteLine(Factorial(3));
        Console.WriteLine(Factorial(4));
    }
}

public class MethodCacheAttribute: MethodAspectAttribute
{
      List<Tuple<object[], object>> cache = new List<Tuple<object[], object>>();

      public override void OnEntry(MethodAspectEventArgs eventArgs)
      {
          var cachedValue = this.Get(eventArgs.Arguments);
          
          if (cachedValue != null)
          {
              eventArgs.ReturnValue = cachedValue;
              eventArgs.Flow = AspectFlow.Return;
              Console.WriteLine("Cached value is used");
          }
          else
          {
              eventArgs.Flow = AspectFlow.Continue;
              Console.WriteLine("Value will be calculated");
          }
      }
      
      public override void OnSuccess(MethodAspectEventArgs args)
      {
          this.cache.Add(new Tuple<object[], object>(args.Arguments, args.ReturnValue));
      }
      
      private object Get(object[] args)
      {
         var tuple = cache.FirstOrDefault(item => item.Item1.Length == args.Length && item.Item1.SequenceEqual(args));
         
         return tuple?.Item2;
      }
}
```

``` Output
Value will be calculated
6
Value will be calculated
24
Cached value is used
6
Cached value is used
24
```