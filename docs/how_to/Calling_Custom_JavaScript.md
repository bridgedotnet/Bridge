# Calling Custom JavaScript

With Bridge, you can easily call custom JavaScript functions from other libraries directly from your C&#35; project.

Let's say you have an existing JavaScript library or just a few legacy functions that are required to be called in your new Bridge C# project. Those functions can be defined in an external `.js` file, such as the following:

```js
function doSomething (p1) {
    // Do some work here
};

function getSomething (p1, p2) {
    return p1 + p2;
};
```

Now within your Bridge C# code, the Method `Script.Write()` can be used to write directly to the generated JavaScript.

The method will emit a string literal exactly as you specify in the parameter. The generic version of `Script.Write()<T>` is to specify that JavaScript function has a return value so that it will be cast to the type `T` and can be used in C# code.

```csharp
using System;
using Bridge;

namespace Demo
{
    class App
    {
        public static void MyDoSomething(int p1)
        {
            // Please note the method takes only literal as a parameter
            Script.Write("doSomething(p1);");
        }

        public static int MyGetSomething(int p1, int p2)
        {
            // Generic version of Script.Write() is to specify that 
            // JavaScript function has a return value, the value will
            // be cast to the type and used in C# code.
            return Script.Write<int>("getSomething(p1, p2)");
        }

        // A method to call .getSomething() method from C#
        public static int Test()
        {
            int i = 70, 
                j = 100;

            return MyGetSomething(i, j);
        }
    }
}
```

```js
Bridge.Class.define('Demo.App', {
    statics: {
        myDoSomething: function (p1) {
            myFunc1(p1);
        },

        myGetSomething: function (p1, p2) {
            return myFunc2(p1, p2);
        },

        // A method to call myFunc2 JavaScript method from C#
        test: function () {
            var i = 70,
                j = 100;

            return Demo.App.myGetSomething(i, j);
        }
    }
});
```

A more interesting thing is that you can even pass C# callbacks into your JavaScript code:

```js
var test = {
    checkDescription: function (testFn, description) {
       if (description === "Call testFn") {        
          testFn(description);
       }
    }
};
```

Method `Window.Instance.ToDynamic()` allows you to specify any function and callback.

```csharp
using System;
using Bridge;
using Bridge.Html5;

namespace Demo
{
    class App
    {
        public static void CheckDescription(Action d, string description = null)
        {
            Window.Instance.ToDynamic().test.checkDescription(d, description);
        }

        public static void TestCheckDescription()
        {
            // A test method to call checkDescription JavaScript 
            // method with a callback from C#
            CheckDescription(CheckDescriptionDelegate, "Call testFn");
        }

        // A delegate function that will be passed as testFn parameter
        public static void CheckDescriptionDelegate()
        {
            Script.Write("alert('Called test function');");
        }
    }
}
```

```js
Bridge.Class.define('Demo.App', {
    statics: {
        checkDescription: function (d, description) {
            window.test.checkDescription(d, description);
        },

        testCheckDescription: function () {
            // A test method to call checkDescription JavaScript
            // method with a callback from C#
            Demo.App.checkDescription(Demo.App.checkDescriptionDelegate, "Call testFn");
        },

        // A delegate function that will be passed as testFn parameter
        checkDescriptionDelegate: function () {
            alert('Called test function');
        },       
    }
});
```

You can also evaluate any JavaScript expression by calling the method `Script.Eval()`. An expression to evaluate can be constructed on the fly.

An evaluated value can also be returned when the generic method `Script.Eval<T>` is used.

```csharp
public static void Evaluate(string data)
{
    // Build expression to evaluate dynamically
    var jsCode = "\"" + data + "\".toUpperCase();";

    // Evaluated string variable is returned
    var evalResult = Script.Eval(jsCode);

    Window.Alert(evalResult);
}
```

```js
evaluate: function (data) {
    // Build expression to evaluate dynamically
    var jsCode = "\"" + data + "\".toUpperCase();";

    // Evaluated string variable is returned
    var evalResult = eval(jsCode);

    window.alert(evalResult);
}
```