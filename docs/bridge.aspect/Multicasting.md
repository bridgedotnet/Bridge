# Multicasting

Adding Aspects to Multiple Declarations Using Attributes

## Multicasting

Apply one Aspect to multiple targets using Multicasting.

```csharp Example ([Deck.NET](https://deck.net/eda4e00c72fc16ee76daf4dc32d9a2ed))
using System;
using System.Diagnostics;
using Bridge.Aspect;

namespace Demo
{
    /// <summary>
    /// Instead of applying the aspect manually to every method, we can apply the aspect only once, on the class. 
    /// Bridge.Aspect will automatically apply the aspect to all methods in the class.
    /// </summary>
    [MethodTraceAspect]
    public class App
    {
        public static void Method1()
        {
        }

        public static void Method2()
        {
            App.Method3();
        }

        public static void Method3()
        {
        }

        public static void Main()
        {
            App.Method1();
            App.Method2();
        }
    }

    public class MethodTraceAspect : MethodAspectAttribute
    {
        public override void OnEntry(MethodAspectEventArgs args)
        {
            Debug.WriteLine(args.MethodName + " started");
        }

        public override void OnExit(MethodAspectEventArgs args)
        {
            Debug.WriteLine(args.MethodName + " finished");
        }
    }
}
```

``` Output
Main started
Method1 started
Method1 finished
Method2 started
Method3 started
Method3 finished
Method2 finished
Main finished
```

## Applying Multiple Instances Of The Same Aspect

Apply one Aspect to multiple targets

```csharp Example ([Deck.NET](https://deck.net/f164e85bc38923da6bdb8de51fb280ad))
using System;
using Bridge;
using Bridge.Aspect;

[assembly: DemoAspects.Trace(TargetTypes = "Demo.App*", Category = "A")]
[assembly: DemoAspects.Trace(TargetTypes = "Demo.App*", TargetMembersAttributes = MulticastAttributes.Public, Category = "B")]
[assembly: FileName("demo.js")]

namespace Demo
{
    public class App
    {
        // This method will have 1 Trace aspect with Category set to A.
        private void Method1()
        {
        }

        // This method will have 2 Trace aspects with Category set to A, B
        public void Method2()
        {
            this.Method3();
        }

        // This method will have 3 Trace aspects with Category set to A, B, C.
        [DemoAspects.Trace(Category = "C")]
        public void Method3()
        {
        }

        public static void Main()
        {
            var app = new App();

            app.Method1();
            app.Method2();
        }
    }
}

namespace DemoAspects
{
    public class TraceAttribute : MethodAspectAttribute
    {
        public string Category { get; set; }

        public override void OnEntry(MethodAspectEventArgs eventArgs)
        {
            Console.WriteLine("Entry to {0}, category {1}", eventArgs.MethodName, this.Category);
        }
    }
}
```

``` Output
Entry to method1, category A
Entry to method2, category B
Entry to method2, category A
Entry to method3, category B
Entry to method3, category A
Entry to method3, category C
```

## Apply To All Methods In A Class

Apply one Aspect to all methods inside a specified class

```csharp Example ([Deck.NET](https://deck.net/2c4f15d90670e6f7e37b5d1a71dbfa1a))
using System;
using Bridge.Aspect;

/*
  If a MethodAspect is applied to a class, the aspect will be automatically applied to all methods of that class
*/

namespace Demo
{
    [TraceAspect]
    public class App
    {
        public static void Main()
        {
            var app = new Foo();
            
            app.PublicMethod();
        }
    }
    
    [TraceAspect]
    public class Foo
    {
        public void PublicMethod()
        {
            Console.WriteLine("In Foo.PublicMethod");
            
            this.ProtectedMethod();
        }

        protected void ProtectedMethod()
        {
            Console.WriteLine("In Foo.ProtectedMethod");
            
            this.PrivateMethod();
        }

        private void PrivateMethod()
        {
            Console.WriteLine("In Foo.PrivateMethod");
        }
    }

    public class TraceAspectAttribute : MethodAspectAttribute
    {
        public override void OnEntry(MethodAspectEventArgs eventArgs)
        {
            Console.WriteLine("Entry to {0} of {1}", eventArgs.MethodName, eventArgs.Scope.GetType().FullName);
        }
    }
}
```

``` Output
Entry to Main of Function
Entry to PublicMethod of Demo.Foo
In Foo.PublicMethod
Entry to ProtectedMethod of Demo.Foo
In Foo.ProtectedMethod
Entry to PrivateMethod of Demo.Foo
In Foo.PrivateMethod
```

## Apply To All Types In A Namespace

Apply one Aspect to all Classes within a Namespace.

```csharp Example ([Deck.NET](https://deck.net/609643579a2818920fe9eecae1baae6b))
using System;
using Bridge;
using Bridge.Aspect;

[assembly: DemoAspects.TraceAspect(TargetTypes = "Demo.*")]
[assembly: FileName("demo.js")]
/*
    Assembly level aspect can be applied to all classes which are matched by criteria​
    When setting the TargetTypes you can use wildcards (*) to indicate that all sub-namespaces
    should have the aspect applied to them.

    It is also possible to indicate the targets of the aspect using regex.
    Add "regex:" as a prefix to the pattern you wish to use for matching.
*/

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            var foo = new Foo();

            foo.PublicMethod();

            var bar = new Bar();

            bar.PublicMethod();
        }
    }

    public class Foo
    {
        public void PublicMethod()
        {
            Console.WriteLine("In Foo.PublicMethod");

            this.ProtectedMethod();
        }

        protected void ProtectedMethod()
        {
            Console.WriteLine("In Foo.ProtectedMethod");

            this.PrivateMethod();
        }

        private void PrivateMethod()
        {
            Console.WriteLine("In Foo.PrivateMethod");
        }
    }

    public class Bar
    {
        public void PublicMethod()
        {
            Console.WriteLine("In Bar.PublicMethod");

            this.ProtectedMethod();
        }

        protected void ProtectedMethod()
        {
            Console.WriteLine("In Bar.ProtectedMethod");

            this.PrivateMethod();
        }

        private void PrivateMethod()
        {
            Console.WriteLine("In Bar.PrivateMethod");
        }
    }
}

namespace DemoAspects
{
    public class TraceAspectAttribute : MethodAspectAttribute
    {
        public override void OnEntry(MethodAspectEventArgs eventArgs)
        {
            Console.WriteLine("Entry to {0} of {1}", eventArgs.MethodName, eventArgs.Scope.GetType().FullName);
        }
    }
}
```

``` Output
Entry to Main of Function
Entry to PublicMethod of Demo.Foo
In Foo.PublicMethod
Entry to ProtectedMethod of Demo.Foo
In Foo.ProtectedMethod
Entry to PrivateMethod of Demo.Foo
In Foo.PrivateMethod
Entry to PublicMethod of Demo.Bar
In Bar.PublicMethod
Entry to ProtectedMethod of Demo.Bar
In Bar.ProtectedMethod
Entry to PrivateMethod of Demo.Bar
In Bar.PrivateMethod
```

## Apply To Overridden Members Only In A Subclass

Apply one aspect to all methods inside particular class and overridden methods in its subclasses

```csharp Example ([Deck.NET](https://deck.net/3de28621bc67ad6f2e2faa8b0178c14f))
using System;
using Bridge;
using Bridge.Aspect;

[assembly: FileName("demo.js")]
/*
   By default, Aspects are not inherited.
   Using Strict inheritance, only overridden methods will inherit aspect
*/

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            var page = new MultiPage();

            page.Render();
        }
    }

    [DemoAspects.TraceAspect(Inheritance = MulticastInheritance.Strict)]
    public class Document
    {
        // This method will be traced.
        public virtual void Render()
        {
            Console.WriteLine("Document.Render");
        }
    }

    public class MultiPage : Document
    {
        // This method will be traced.
        public override void Render()
        {
            base.Render();
            Console.WriteLine("MultiPage.Render");
        }

        // This method will NOT be traced.
        public void Render(int pageIndex)
        {
            Console.WriteLine("MultiPage.Render(pageIndex)");
        }
    }
}

namespace DemoAspects
{
    public class TraceAspectAttribute : MethodAspectAttribute
    {
        public override void OnEntry(MethodAspectEventArgs eventArgs)
        {
            Console.WriteLine("Entry to {0} of {1}", eventArgs.MethodName, eventArgs.Scope.GetType().FullName);
        }
    }
}
```

``` Output
Entry to Render of Demo.MultiPage
Entry to Render of Demo.MultiPage
Document.Render
MultiPage.Render
```

## Apply To All Members In A Subclass

Apply one Aspect to all Methods inside particular class and its subclasses

```csharp Example ([Deck.NET](https://deck.net/ea3b39f7e1578ab00e7c1daf45838334))
using System;
using Bridge;
using Bridge.Aspect;

[assembly: FileName("demo.js")]
/*
 If set Inheritance = MulticastInheritance.All then all methods in subclasses will inherit the aspect
*/

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            var page = new MultiPage();

            page.Render();
            page.Render(1);
        }
    }

    [DemoAspects.TraceAspect(Inheritance = MulticastInheritance.All)]
    public class Document
    {
        // This method will be traced.
        public virtual void Render()
        {
            Console.WriteLine("Document.Render");
        }
    }

    public class MultiPage : Document
    {
        // This method will be traced.
        public override void Render()
        {
            base.Render();
            Console.WriteLine("MultiPage.Render");
        }

        // This method will ALSO be traced.
        public void Render(int pageIndex)
        {
            Console.WriteLine("MultiPage.Render(pageIndex)");
        }
    }
}

namespace DemoAspects
{
    public class TraceAspectAttribute : MethodAspectAttribute
    {
        public override void OnEntry(MethodAspectEventArgs eventArgs)
        {
            Console.WriteLine("Entry to {0} of {1}", eventArgs.MethodName, eventArgs.Scope.GetType().FullName);
        }
    }
}
```

``` Output
Entry to Render of Demo.MultiPage
Entry to Render of Demo.MultiPage
Document.Render
MultiPage.Render
Entry to Render$1 of Demo.MultiPage
MultiPage.Render(pageIndex)
```

## Override An Aspect Instance

Override other multicast aspects (assembly level aspects) on particular method.

```csharp Example ([Deck.NET](https://deck.net/51afc5c6fc396fb5e6a4c24771c4dfd1))
using System;
using Bridge;
using Bridge.Aspect;

[assembly: DemoAspects.Trace(TargetTypes = "Demo.Foo*", Category = "A")]
[assembly: DemoAspects.Trace(TargetTypes = "Demo.Foo*", TargetMembersAttributes = MulticastAttributes.Public, Category = "B")]
[assembly: FileName("demo.js")]

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            var foo = new Foo();

            foo.Method1();
        }
    }

    public class Foo
    {
        // This method will have 2 Trace aspects with Category set to A, B
        public void Method1()
        {
            this.Method2();
        }

        // This method will have 1 Trace aspect with Category set to A.
        private void Method2()
        {
            this.Method3();
        }

        // This method will have 1 Trace aspects with Category set to C.
        [DemoAspects.Trace(Category = "C", Replace = true)]
        public void Method3()
        {
        }
    }
}

namespace DemoAspects
{
    public class TraceAttribute : MethodAspectAttribute
    {
        public string Category { get; set; }

        public override void OnEntry(MethodAspectEventArgs eventArgs)
        {
            Console.WriteLine("Entry to {0}, category {1}", eventArgs.MethodName, this.Category);
        }
    }
}
```

``` Output
Entry to Method1, category B
Entry to Method1, category A
Entry to Method2, category A
Entry to Method3, category C
```

## Delete An Aspect Instance

Delete aspect from particular method.

```csharp Example ([Deck.NET](https://deck.net/ddb0c5c145c74cc3ebbf29199560cd87))
using System;
using Bridge;
using Bridge.Aspect;

[assembly: DemoAspects.Trace(TargetTypes = "Demo.Foo*")]
[assembly: FileName("demo.js")]

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            var foo = new Foo();

            foo.Method1();
        }
    }

    public class Foo
    {
        // This method will be traced.
        public void Method1()
        {
            this.Method2();
        }

        // This method will be traced.
        private void Method2()
        {
            this.Method3();
        }

        // This method will not be traced.
        [DemoAspects.Trace(Exclude = true)]
        public void Method3()
        {
        }
    }
}

namespace DemoAspects
{
    public class TraceAttribute : MethodAspectAttribute
    {
        public override void OnEntry(MethodAspectEventArgs eventArgs)
        {
            Console.WriteLine("Entry to {0}", eventArgs.MethodName);
        }
    }
}
```

``` Output
Entry to Method1
Entry to Method2
```

## Overriding An Aspect Instance Automatically

Override other multicast aspects (assembly level aspects) automatically by setting `Multiple=false`

```csharp Example ([Deck.NET](https://deck.net/becb586f1e21cd028ca233d271bcd718))
using System;
using Bridge;
using Bridge.Aspect;

[assembly: DemoAspects.Trace(TargetTypes = "Demo.Foo*", Category = "A")]
[assembly: DemoAspects.Trace(TargetTypes = "Demo.Foo*", TargetMembersAttributes = MulticastAttributes.Public, Category = "B")]
[assembly: FileName("demo.js")]

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            var foo = new Foo();

            foo.Method1();
        }
    }

    public class Foo
    {
        // This method will have 1 Trace aspects with Category set to B.
        public void Method1()
        {
            this.Method2();
        }

        // This method will have 1 Trace aspect with Category set to A.
        private void Method2()
        {
            this.Method3();
        }

        // This method will have 1 Trace aspects with Category set to C.
        [DemoAspects.Trace(Category = "C")]
        public void Method3()
        {
        }
    }
}

namespace DemoAspects
{
    [MulticastOptions(Multiple = false)]
    public class TraceAttribute : MethodAspectAttribute
    {
        public string Category { get; set; }

        public override void OnEntry(MethodAspectEventArgs eventArgs)
        {
            Console.WriteLine("Entry to {0}, category {1}", eventArgs.MethodName, this.Category);
        }
    }
}
```

``` Output
Entry to Method1, category B
Entry to Method2, category A
Entry to Method3, category C
```

## Excluding An Aspect From Some Members

Exclude applying the Aspect to some members given the conditions.

```csharp Example ([Deck.NET](https://deck.net/477b0e040b8358dd4f5e3b6909d384c5))
using System;
using Bridge;
using Bridge.Aspect;

[assembly: DemoAspects.TraceAspect(TargetTypes = "Demo.*")]
[assembly: DemoAspects.TraceAspect(TargetMembers = "PrivateMethod", Exclude = true)]
[assembly: FileName("demo.js")]
/*
It is possible to use Exclude to restrict where the aspect is attached.
In the example below, the first multicast line indicates that the TraceAspect should be attached to all methods in the Demo namespace. The second multicast line indicates that the TraceAspect should not be applied to any method named PrivateMethod.
*/

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            var foo = new Foo();

            foo.PublicMethod();

            var bar = new Bar();

            bar.PublicMethod();
        }
    }

    public class Foo
    {
        public void PublicMethod()
        {
            Console.WriteLine("Foo.PublicMethod");

            this.ProtectedMethod();
        }

        protected void ProtectedMethod()
        {
            Console.WriteLine("Foo.ProtectedMethod");

            this.PrivateMethod();
        }

        private void PrivateMethod()
        {
            Console.WriteLine("Foo.PrivateMethod");
        }
    }

    public class Bar
    {
        public void PublicMethod()
        {
            Console.WriteLine("Bar.PublicMethod");

            this.ProtectedMethod();
        }

        protected void ProtectedMethod()
        {
            Console.WriteLine("Bar.ProtectedMethod");

            this.PrivateMethod();
        }

        private void PrivateMethod()
        {
            Console.WriteLine("Bar.PrivateMethod");
        }
    }
}

namespace DemoAspects
{
    public class TraceAspectAttribute : MethodAspectAttribute
    {
        public override void OnEntry(MethodAspectEventArgs eventArgs)
        {
            Console.WriteLine("Entry to {0} of {1}", eventArgs.MethodName, eventArgs.Scope.GetType().FullName);
        }
    }
}
```

``` Output
Entry to Main of Function
Entry to PublicMethod of Demo.Foo
Foo.PublicMethod
Entry to ProtectedMethod of Demo.Foo
Foo.ProtectedMethod
Foo.PrivateMethod
Entry to PublicMethod of Demo.Bar
Bar.PublicMethod
Entry to ProtectedMethod of Demo.Bar
Bar.ProtectedMethod
Bar.PrivateMethod
```

## Runtime Filter

Exclude an Aspect during runtime when some condition is met. 

```csharp Example ([Deck.NET](https://deck.net/7aa37761b28e208be8294b8419d48aed))
using System;
using Bridge.Aspect;

/*
  Override RunTimeValidate method to apply own logic for filtering in runtime
*/

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            var foo = new Foo();

            foo.PublicMethod();
        }
    }

    [TraceAspect]
    public class Foo
    {
        public void PublicMethod()
        {
            Console.WriteLine("Foo.PublicMethod");

            this.ProtectedMethod();
        }

        protected virtual void ProtectedMethod()
        {
            Console.WriteLine("Foo.ProtectedMethod");

            this.PrivateMethod();
        }

        private void PrivateMethod()
        {
            Console.WriteLine("Foo.PrivateMethod");
        }
    }

    public class TraceAspectAttribute : MethodAspectAttribute
    {
        public override void OnEntry(MethodAspectEventArgs eventArgs)
        {
            Console.WriteLine("Entry to {0} of {1}", eventArgs.MethodName, eventArgs.Scope.GetType().FullName);
        }

        protected override bool RunTimeValidate(string methodName, object scope)
        {
            return methodName == "PublicMethod";
        }
    }
}
```

``` Output
Entry to PublicMethod of Demo.Foo
Foo.PublicMethod
Foo.ProtectedMethod
Foo.PrivateMethod
```

## Class Filter

Exclude Aspect by class visibility

```csharp Example ([Deck.NET](https://deck.net/0d8ae471817f646d8e9e8bcaaa2a1587))
using System;
using Bridge;
using Bridge.Aspect;

[assembly: DemoAspects.TraceAspect(TargetTypes = "Demo.*", TargetTypesAttributes = MulticastAttributes.Public)]
[assembly: FileName("demo.js")]
/*
    Filtering by class visibility
*/

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            var foo = new Foo();

            foo.PublicMethod();

            var bar = new Bar();

            bar.PublicMethod();
        }
    }

    public class Foo
    {
        public void PublicMethod()
        {
            Console.WriteLine("Foo.PublicMethod");

            this.ProtectedMethod();
        }

        protected void ProtectedMethod()
        {
            Console.WriteLine("Foo.ProtectedMethod");

            this.PrivateMethod();
        }

        private void PrivateMethod()
        {
            Console.WriteLine("Foo.PrivateMethod");
        }
    }

    internal class Bar
    {
        public void PublicMethod()
        {
            Console.WriteLine("Bar.PublicMethod");
        }

        protected void ProtectedMethod()
        {
            Console.WriteLine("Bar.ProtectedMethod");
        }

        private void PrivateMethod()
        {
            Console.WriteLine("Bar.PrivateMethod");
        }
    }
}

namespace DemoAspects
{
    public class TraceAspectAttribute : MethodAspectAttribute
    {
        public override void OnEntry(MethodAspectEventArgs eventArgs)
        {
            Console.WriteLine("Entry to {0} of {1}", eventArgs.MethodName, eventArgs.Scope.GetType().FullName);
        }
    }
}
```

``` Output
Entry to Main of Function
Entry to PublicMethod of Demo.Foo
Foo.PublicMethod
Entry to ProtectedMethod of Demo.Foo
Foo.ProtectedMethod
Entry to PrivateMethod of Demo.Foo
Foo.PrivateMethod
Bar.PublicMethod
```

## Apply To Auto-Properties Only

Apply an Aspect to auto-properties only and exclude from applying to other properties and methods.

```csharp Example ([Deck.NET](https://deck.net/a699c2a69b805e67930b4a6064d76b41))
using System;
using Bridge.Aspect;

/*
    Apply to auto properties only
*/

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            var foo = new Foo();
            
            foo.Property1 = 1;
            
            Console.WriteLine(foo.Property1);
            Console.WriteLine(foo.Property2);
            
            foo.Method1();
        }
    }
    
    [TestAspect(TargetMembersAttributes = MulticastAttributes.CompilerGenerated)]
    public class Foo
    {
        public int Property1
        {
            get; set;
        }

        public int Property2
        {
            get { return 2; }
            set { }
        }

        public void Method1()
        {
            
        }
    }

    public class TestAspect : MethodAspectAttribute
    {
    }
}
```

``` Output
1
2
```

## Aspect Priority

Change the sequence of how Aspects are processed, if multiple Aspects are applied.

```csharp Example ([Deck.NET](https://deck.net/ed4260aa2e7fb0148702643d1ea9d818))
using System;
using Bridge.Aspect;

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            Method1();
            Method2();
        }

        /// <summary>
        /// Test2Aspect will be applied last therefore it will wrap Test1Aspect
        /// So, OnEntry of Test2Aspect will be called first
        /// </summary>
        [Test1Aspect(Priority = 1)]
        [Test2Aspect(Priority = 2)]
        public static void Method1()
        {
            
        }

        /// <summary>
        /// Test1Aspect will be applied last therefore it will wrap Test2Aspect
        /// So, OnEntry of Test1Aspect will be called first
        /// </summary>
        [Test1Aspect(Priority = 2)]
        [Test2Aspect(Priority = 1)]
        public static void Method2()
        {

        }
    }

    public class Test1Aspect : MethodAspectAttribute
    {
        public override void OnEntry(MethodAspectEventArgs eventArgs)
        {
            Console.WriteLine(eventArgs.MethodName + ": Test1 Entry");
        }
    }

    public class Test2Aspect : MethodAspectAttribute
    {
        public override void OnEntry(MethodAspectEventArgs eventArgs)
        {
            Console.WriteLine(eventArgs.MethodName + ": Test2 Entry");
        }
    }
}
```

``` Output
Method1: Test2 Entry
Method1: Test1 Entry
Method2: Test1 Entry
Method2: Test2 Entry
```