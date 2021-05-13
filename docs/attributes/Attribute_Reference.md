# Attribute Reference

This page contains the list of C# Attributes for Bridge.NET and their respective usage. The scope of each Attribute is listed, such as only being able to apply the attribute to a `Namespace`, `Class`, `Method`, `Property` or `Field`.

## Constructor

Specifies a customer constructor value which will be emitted to the compiled JavaScript for this type.

**Applies to:** `Class` and `Struct`
    
| Constructor | Description |
| --- | --- |
| `[Constructor(string value)]` | Specifies the JavaScript code that should be emitted when calling the type's constructor |
    
The scenario below demonstrates how to replace the Constructor with a custom value. The value set in the `[Contructor]` Attribute will be directly emitted into the compiled JavaScript. No `new` keyword will be included, unless that is specified as the Attribute string value, such as `[Constructor("new $d")]`.

```csharp Example ([Deck.NET](https://deck.net/504d0d21b54557d4885df2de0fd61193))
public class App
{
    public static void Main()
    {
        // This will throw a JavaScript
        // error since $d does not exist
        var data = new Data();
    }
}

[Constructor("$d")]
public class Data { }
```

```js Output
Bridge.define("Demo.App", {
    main: function Main() {
        var data = $d();
    }
});

Bridge.define("Demo.Data");
```

## Convention

The `[Convention]` attribute is used to configure the naming convention of entities within a Project.

The default naming convention policy is **What-You-See-Is-What-You-Get** (WYSIWYG). If the member is configured as `PascalCase` in C#, the Bridge compiler will create the member as `PascalCase` in JavaScript.

!!!
Please see Issue [#2477](https://github.com/bridgedotnet/Bridge/issues/2477) for more information.
!!!

Convention attributes can be _stacked_ with a _last in wins_ policy. 

**Applies to:** `Assembly`, `Class` `Struct`, `Enum`, `Interface`, `Property`, `Field`, `Method`, and all other entities

### Constructors

```csharp
[Convention(Notation notation)]
[Convention(Notation notation, ConventionTarget target)]
```

### Properties

| Name | Type | Description |
| --- | --- | --- |
| `Notation` | `Notation` | Specifies notation to be applied by [Convention] attribute. |
| `Target` | `ConventionTarget` | Specifies target(s) to be filtered by [Convention] attribute. |
| `Member` | `ConventionMember` | Specifies type member(s) to be filtered by [Convention] attribute. |
| `Accessibility` | `ConventionAccessibility` | Specifies access modifiers to be filtered by [Convention] attribute. |
| `Filter` | `string` | Semicolon separated list of type paths (a type member's full name, for example) to be applied by [Convention] attribute. |
| `Priority` | `int` | Applied to assembly attributes only. |

```csharp Example
// Emit all members (Props, Methods, Fields) in CamelCase notation
[Convention(Target = ConventionTarget.Member, Notation = Notation.CamelCase)]

// Emit only Properties as CamelCase
[Convention(Member = ConventionMember.Property, Notation = Notation.CamelCase)]

// Emit all public Fields as lowercase
[Convention(Accessibility = ConventionAccessibility.Public, Member = ConventionMember.Field, Notation = Notation.LowerCase)]
```

The `[Convention]` attribute can also be applied at the assembly level. The `[assembly: Convention]` can be added to any .cs within your project, such as the `/Properties/AssemblyInfo.cs` file.

```csharp Example
[assembly: Convention(Target = ConventionTarget.Member, Notation = Notation.CamelCase)]
```

### Notation Enum

The following table details all **Notation** enum values and provides a sample output given a property with the identifier of `FirstName`.

| Value | Emit |
| --- | --- |
| `UpperCase` | FIRSTNAME |
| `LowerCase` | firstname |
| `CamelCase` | firstName |
| `PascalCase` | FirstName |

### ConventionTarget Enum

| Value |
| --- |
| `All` |
| `Class` |
| `Struct` |
| `Enum` |
| `Interface` |
| `ObjectLiteral` |
| `Anonymous` |
| `External` |
| `Member` |

### ConventionMember Enum

| Value |
| --- |
| `All` |
| `Method` |
| `Property` |
| `Field` |
| `Event` |
| `Const` |
| `EnumItem` |

### ConventionAccessibility Enum

| Value |
| --- |
| `All` |
| `Public` |
| `Protected` |
| `Private` |
| `Internal` |
| `ProtectedInternal` |

## Enum

Specifies how Enum values should be compiled into JavaScript.

**Applies to:** `Enum`
    
| Constructor | Description |
| --- | --- |
| `[Enum(Emit.Name)]` | Emits as its string representation. |
| `[Enum(Emit.StringName)]` | Emits as quoted string representation. |
| `[Enum(Emit.StringNamePreserveCase)]` | Emits as quoted string representation, preserving characters' case. |
| `[Enum(Emit.StringNameLowerCase)]` | Emits as quoted, lowercase string representation. |
| `[Enum(Emit.StringNameUpperCase)]` | Emits as quoted, uppercase string representation. |
| `[Enum(Emit.Value)]` | Emits as its ID value representation. |

The following sample demonstrates each of the `[Emit]` options for the **Enum** Attribute.

```csharp Example ([Deck.NET](https://deck.net/29cfd916a5926a61e889a62e1a14a088))
public class App
{
    public static void Main()
    {
        Console.WriteLine("One.First: " + One.First);
        Console.WriteLine("One.Second: " + One.Second);
        Console.WriteLine("Two.First: " + Two.First);
        Console.WriteLine("Two.Second: " + Two.Second);
        Console.WriteLine("Two.Second: " + Two.Second);
        Console.WriteLine("Three.First: " + Three.First);
        Console.WriteLine("Three.Second: " + Three.Second);
        Console.WriteLine("Four.First: " + Four.First);
        Console.WriteLine("Four.Second: " + Four.Second);
        Console.WriteLine("Five.First: " + Five.First);
        Console.WriteLine("Five.Second: " + Five.Second);
        Console.WriteLine("Six.First: " + Six.First);
        Console.WriteLine("Six.Second: " + Six.Second);
        Console.WriteLine("Seven.First: " + Seven.First);
        Console.WriteLine("Seven.Second: " + Seven.Second);
    }
    
    public enum One {
        First,
        Second
    };

    [Enum(Emit.Name)]
    public enum Two {
        First,
        Second
    };

    [Enum(Emit.StringName)]
    public enum Three {
        First,
        Second
    };

    [Enum(Emit.StringNameLowerCase)]
    public enum Four {
        First,
        Second
    };

    [Enum(Emit.StringNamePreserveCase)]
    public enum Five {
        First,
        Second
    };

    [Enum(Emit.StringNameUpperCase)]
    public enum Six {
        First,
        Second
    };

    [Enum(Emit.Value)]
    public enum Seven {
        First,
        Second
    };
}
```

## ExpandParams

**Applies to:** `Method`, `Constructor`, `Delegate`

The `[ExpandParams]` attribute can be applied to a method with a `params` parameter to emit the `params` as an array in JavaScript.

Methods with this attribute can only be invoked in the expanded form.

The following sample demonstrates defining two Methods; one with the `[ExpandParams]` attribute applied, and the other without. Each Method is called with the exact same parameters, and note the difference in the generated JavaScript. 

```csharp Example ([Deck.NET](https://deck.net/58361ec355f13019974d660596c5db07/vert))
public class App
{
    public static void Main() => new App().Init();
    
    public void Init()
    {
        // With ExpandParams, the params will be expanded
        this.WithExpandParams(1, 2, 3);
        
        // By default, params are emitted as an array
        this.WithoutExpandParams(1, 2, 3);
    }

    [ExpandParams]
    public void WithExpandParams(int a, params int[] b) { }
    
    public void WithoutExpandParams(int a, params int[] b) { }
}
```

```js Output (JS)
init: function () {
    // With ExpandParams, the params will be expanded
    this.withExpandParams(1, 2, 3);

    // By default, params are emitted as an array
    this.withoutExpandParams(1, [2, 3]);
},
withExpandParams: function (a, b) {
    b = Array.prototype.slice.call(arguments, 1);
},
withoutExpandParams: function (a, b) {
    if (b === void 0) { b = []; }
}
```

## External

Use of the `External` Attribute will instruct the Bridge Compiler to exclude this member or type definition from the compiled JavaScript file. Useful for stubbing out C# definition files to match an external JavaScript library. For example, if you have an existing JavaScript library and would like to create the Bridge C# definition files for that library, but not recreate the logic of the original library. 

**Applies to:** `Class`, `Delegate`, `Enum`, `Interface` and `Method`

The following sample demonstrates how to define a **Run** Method for a library that implements within a **MyLib** class. We assume the JavaScript library is included in the same page and the library takes care of defining the method and class.

```csharp Example ([Deck.NET](https://deck.net/e9bf16f44ed5598050b58324975075a8))
public class App
{
    public static void Main()
    {
        // The following would have been defined 
        // in an external JavaScript file.
        Custom.Run1();
        
        Custom.Run2();
    }
}

// Creation of the Custom Class is ignored by the Compiler. 
// An assumption is made that the definition of this
// code will be manually included as an external library.
[External]
public class Custom
{
    public static void Run1()
    {
        return;
    }
    
    public extern static void Run2();
}
```

```js Output
Bridge.define("Demo.App", {
    main: function Main() {
        // The following would have been defined 
        // in an external JavaScript file.
        Demo.Custom.Run1();

        Demo.Custom.Run2();
    }
});
```

## Field

Compiles a C# Property into a simple JavaScript field with no setter or getter, and also includes indexer access.

**Applies to:** `Assembly`, `Class`, `Interface`, `Property`

The following sample demonstrates how a Property with and without this attribute is compiled into JavaScript by Bridge.

```csharp Example ([Deck.NET](https://deck.net/0ead4a5ca2b33cd677a8bd2661b2ab12))
public class App
{
    public static void Main()
    {
        var sample = new Sample();

        sample.One = 1;
        sample.Two = 2;

        Console.WriteLine("One", sample.One);
        Console.WriteLine("Two", sample.Two);
    }
}

public class Sample
{
    public int One { get; set; }

    [Field]
    public int Two { get; set; }
}
```

```js Output
Bridge.define("Demo.App", {
    main: function Main() {
        var sample = new Demo.Sample();

        sample.One = 1;
        sample.Two = 2;

        System.Console.WriteLine(System.String.format("One", Bridge.box(sample.One, System.Int32)));
        System.Console.WriteLine(System.String.format("Two", Bridge.box(sample.Two, System.Int32)));
    }
});

Bridge.define("Demo.Sample", {
    fields: {
        Two: 0
    },
    props: {
        One: 0
    }
});
```

## FieldProperty

Removed in Bridge 16.0. Please use `[Field]` attribute.

Please see Issue [#2742](https://github.com/bridgedotnet/Bridge/issues/2742) and [#2234](https://github.com/bridgedotnet/Bridge/issues/2234) for more information.

## FileName

Set a custom file name to which the compiled JavaScript will be output to.

**Applies to:** `Assembly`, `Class`, `Enum`, `Interface` and `Struct`
    
| Constructor | Description |
| ---| --- |
| `[FileName(string fileName)]` | The name or relative path of the desired output file. Appends `.js` extension if missing |

```csharp Example ([Deck.NET](https://deck.net/475ffea5c5be786d9bde))
[FileName("custom-name")]
public class App
{
    public static void Main()
    {
        Console.WriteLine("Test");
    }
}
```

Apply the `[FileName]` Attribute at the Class level to customize the output file name of generated JavaScript file:

```csharp
[FileName("Foo.js")]
public class Foo() { }
```

By default, the `.js` extension is automatically assumed. The following is equivalent to the example above:

```csharp
[FileName("Foo")]
```

Separate classes could configure the same `[FileName]` and be combined into the same file:

```csharp
[FileName("pets")]
public class Dog { }

[FileName("pets")]
public class Cat { }
```

You can also pass the destination folder:

```csharp
[FileName("js/Foo")]
```

The above sample will create a `Foo.js` file inside the `output\js` folder (where the `output` folder is configured in the `bridge.json` file.

## GlobalTarget

Replaces any reference to the method or property whenever the static, global instance is used.

**Applies to:** `Method` and `Property`
    
| Constructor | Description |
| --- | --- |
| `[GlobalTarget(string name)]` | String to be output instead of the actual reference to the entity. An empty string can be set. |

The following sample demonstrates output of a `alert()` to JavaScript.

```csharp Example ([Deck.NET](https://deck.net/df264302e21e9940cbe0b7c96c7052ff))
public class App
{
    public static void Main()
    {
        // The following should compile to 
        // just a simple alert("Canada"),
        // ignoring the call to DoSomething()
        Test.DoSomething().alert("Canada");
    }
}

public class Global
{
    public void alert(string message)
    {
        return;
    }
}

public class Test
{
    [GlobalTarget("")]
    public static Global DoSomething()
    {
        Console.WriteLine("Australia");

        return null;
    }
}
```


```js Output
    Bridge.define("Demo.App", {
        main: function Main() {
            alert("Canada");
        }
    });

    Bridge.define("Demo.Global", {
        methods: {
            alert: function (message) {
                return;
            }
        }
    });

    Bridge.define("Demo.Test", {
        statics: {
            methods: {
                DoSomething: function () {
                    System.Console.WriteLine("Australia");

                    return null;
                }
            }
        }
    });
```

## Ignore

The `[Ignore]` Attribute is obsolete. Please use the [External](#External) Attribute.

## IgnoreCast

Any casting operation with this type will not be compiled to JavaScript.

**Applies to:** `Class`, `Delegate`, `Enum`, `Interface` and `Struct`

This is useful when JavaScript code would not require casting as the C# equivalent code does. The example below shows class-level binding for inherited classes with and without this Attribute applied.

```csharp Example ([Deck.NET](https://deck.net/56b5fe136b11259bcebc8f4b921b5763))
public class App
{
    public static void Main()
    {
        var base1 = new Base();
        var base2 = new Base();

        // Casting will be ignored
        var ignore = (Ignore)base1;

        // Default casting operation
        Console.WriteLine("throws Exception...");
        var dontIgnore = (DontIgnore)base2;
    }
}

public class Base { }

[IgnoreCast]
public class Ignore : Base { }

public class DontIgnore : Base { }
```

## IgnoreGeneric

Prevents emitting generic arguments to instances of the class or invocation of Methods.

**Applies to:** `Class` and `Delegate`

The following sample demonstrates the difference in compiled JavaScript code when instantiating a Class with and without this Attribute.

```csharp Example ([Deck.NET](https://deck.net/ec057a46fd6e3c6defc170225a53f520))
public class App
{
    public static void Main()
    {
        // Default
        var one = new Generic1<int>();

        // Generic type is ignored
        var second = new Generic2<string>();
    }
}

public class Generic1<T> { }

[IgnoreGeneric]
public class Generic2<T> { }
```

```js Output
Bridge.define("Demo.App", {
    main: function Main() {
        // Default
        var one = new (Demo.Generic1$1(System.Int32))();

        // Generic type is ignored
        var second = new Demo.Generic2$1();
    }
});

Bridge.define("Demo.Generic1$1", function (T) { return {

}; });

Bridge.define("Demo.Generic2$1");
```

## Immutable

Force a Struct to be Immutable. Can only apply to a Struct.

If a Stuct contains only Private fields and/or read-only properties than Bridge will automatically assume **Immutable** behaviour.

## Init

Specifies that the method should be run immediately when the script is loaded (not after page loading event is complete).

**Applies to:** `static Method`

| Constructor | Description |
| --- | --- |
| `[Init]` | Specifies that the method must be run as JavaScript file is parsed. |
| `[Init(InitPosition position)]` | Specifies that the method must be run as the JavaScript file is parsed and position in the file that it should be emitted. |
            
### InitPosition Enum

| Name | Description |
| --- | --- |
| `Before` | Call this Method before this class definition. |
| `After` | Call this Method after this class definition. (default) |
| `Top` | Emit the contents of this Method body directly to the Top of the file. |
| `Bottom` | Emit the contents of this Method body directly to the Bottom of the file. |

```csharp Example ([Deck.NET](https://deck.net/f3d5ac5a0f2493f6c6b5a511688fd20f))
using System;
using Bridge;

namespace Demo
{
    public class App
    {
        public static void Main()
        {
            Console.WriteLine("Startup");
        }

        [Init(InitPosition.Before)]
        public static void Before()
        {
            Console.WriteLine("Before Class is defined");
        }

        [Init(InitPosition.After)]
        public static void After()
        {
            Console.WriteLine("After Class is defined");
        }

        [Init(InitPosition.Top)]
        public static void Top()
        {
            Console.WriteLine("Absolute Top");
        }

        [Init(InitPosition.Bottom)]
        public static void Bottom()
        {
            Console.WriteLine("Absolute Bottom");
        }
    }
}
```

```js Output
System.Console.WriteLine("Absolute Top");

Bridge.assembly("Demo", function ($asm, globals) {
    "use strict";

    Bridge.init(function () {
        System.Console.WriteLine("Before Class is defined");
    });

    Bridge.define("Demo.App", {
        main: function Main() {
            System.Console.WriteLine("Startup");
        },
        statics: {
            methods: {
                After: function () {
                    System.Console.WriteLine("After Class is defined");
                }
            }
        }
    });

    Bridge.init(function () { Demo.App.After(); });
});

System.Console.WriteLine("Absolute Bottom");
```

## InlineConst

Specifies that the Field should emit its value and not a reference to the Field in the compiled JavaScript.

**Applies to:** `Field`

```csharp Example ([Deck.NET](https://deck.net/cd40df37e3f3b53e68abfed7360e1c66))
public class App
{
    public const int One = 1;

    [InlineConst]
    public const int Two = 2;

    public static void Main()
    {
        Console.WriteLine("One: " + One);
        Console.WriteLine("Two: " + Two);
    }
}
```

```js Output
Bridge.define("Demo.App", {
    main: function Main() {
        System.Console.WriteLine("One: " + Demo.App.One);
        System.Console.WriteLine("Two: " + 2);
    },
    statics: {
        fields: {
            One: 0
        },
        ctors: {
            init: function () {
                this.One = 1;
            }
        }
    }
});
```

## Mixin

Allows a prefix to be specified for the generated methods.

```csharp
[Mixin("$.fn")]
public static class MyStaticMethods
{
    public static void MyMethod()
    {
    }
} 
```

```js Output
Bridge.apply(_$.fn, {
    MyMethod: function () {
    }
});
```

## Module

Determines that the Class will be part of the Module with the specified name.

If configured without parameters, the compiler will not bind a name to the Module.

If set in `bridge.json`, the `OutputBy` is set to `Module`, the output filename will be the specified Module name.

**Applies to:** `Assembly`, `Class`, `Enum`, `Interface` and `Struct`

| Constructor | Description |
| --- | --- |
| `[Module]` | Defines the attributed code to a default module. |
| `[Module(string name)]` | Uses the specified parameter as module name. |

```csharp Example ([Deck.NET](https://deck.net/c443eefb8e2ad5686486adf1b4fa19a6))
public class One { }

[Module]
public class Two { }

[Module("MyApp")]
public class App { }
```

```js Output
Bridge.define("Demo.One");

define("MyApp", function () {
    var MyApp = { };
    Bridge.define("Demo.App", {
        $scope: MyApp
    });
    return MyApp;
});

define(function () {
    var $module1 = { };
    Bridge.define("Demo.Two", {
        $scope: $module1
    });
    return $module1;
});
```

Module Attribute [samples](Module_Attribute.md) for AMD, CommonJS, UMD, and ES6.

## Name

Allows specifying a custom full name for this entity. Takes precedence over the [Namespace](#Namespace) attribute.

**Applies to:** `Class`, `Delegate`, `Enum`, `Field`, `Interface`, `Method`, `Parameter`, `Property` and `Struct`

| Constructor | Description |
| --- | --- |
| `[Name(string value)]` | Specifies the desired full name of the entity. |

```csharp Example ([Deck.NET](https://deck.net/7dd4d3ff3eceea397fad87f08bfc121c))
public class One 
{
    // Name Attribute configured on a Method.
    // In C#, .DoSomething() is used, but the 
    // Bridge Compiler will now emit .doThat()
    [Name("doThat")]
    public void DoSomething() { }
}

// Name Attribute configured on a Class
[Name("ClassX")]
public class Two 
{ 
    // Name Attribute configured on a Property.
    // In C#, .Age is used, but the
    // Bridge Compiler will now emit .DOB
    [Name("DOB")]
    public int Age {get; set;}    
}

public class App
{
    public static void Main()
    {
        var one = new One();

        // Compiler will emit .doThat()
        one.DoSomething();

        // Compiler will emit new ClassX()
        var two = new Two();

        // compiler will emit .DOB
        two.Age = 55;
    }
}
```


```js Output
Bridge.define("Demo.App", {
    main: function Main() {
        var one = new Demo.One();

        // Compiler will emit .doThat()
        one.doThat();

        // Compiler will emit new ClassX()
        var two = new ClassX();

        // compiler will emit .DOB
        two.DOB = 55;
    }
});

Bridge.define("Demo.One", {
    methods: {
        doThat: function () { }
    }
});

Bridge.define("ClassX", {
    props: {
        DOB: 0
    }
});
```

The `{@}` token can be used within the `[Name]` value which will be replaced with the member name. For example, you would like to index a member without hard coding the member name in the value. 

```csharp Example
[Name("{@}$1")]
void DoSomething() { }
```

### Options

| Token | Description |
| --- | --- |
| `{@}` | The name of the member. |

## Namespace

Specifies a custom name for the Namespace in the compiled JavaScript. If `false` is set, the namespace will be suppressed. The [Name](#Name) attribute takes precedence over the Namespace attribute.

**Applies to:** `Class`, `Enum`, `Interface` and `Struct`

| Constructor | Description |
| --- | --- |
| `[Namespace(string ns)]` | Specifies the namespace. |
| `[Namespace(bool includeNamespace)]` | If `false`, the namespace will not be prefixed to the member or type. Default is `true`. |

```csharp Example ([Deck.NET](https://deck.net/6d5c7258a27ce582de91af3a94fe8d62))
// No changes, just emit default Namespace
public class One { }

// Custom Namespace
[Namespace("CustomX")]
public class Two { }

// Do not scope the class to a Namespace
[Namespace(false)]
public class Three { }

public class App
{
    public static void Main()
    {
        // Default, will be:
        // new Demo.One()
        var one = new One();
        
        // Custom Namespace, will be:
        // new CustomX.Two()
        var two = new Two();
        
        // No Namespace, will be:
        // new Three()
        var three = new Three();
    }
}
```


```js Output
Bridge.define("Demo.App", {
    main: function Main() {
        // Default, will be:
        // new Demo.One()
        var one = new Demo.One();

        // Custom Namespace, will be:
        // new CustomX.Two()
        var two = new CustomX.Two();

        // No Namespace, will be:
        // new Three()
        var three = new Three();
    }
});

Bridge.define("Demo.One");

Bridge.define("Three");

Bridge.define("CustomX.Two");
```

## ObjectLiteral

If `[ObjectLiteral]` is set on a Class, Bridge will emit the class as a simple JavaScript object literal, with no constructor defined. Applying this Attribute works well for defining configuration type objects in C# that do not require a `new` constructor in JavaScript.

**Applies to:** `Class`, `Enum`, `Interface` and `Struct`

| Constructor | Description |
| --- | --- |
| `[ObjectLiteral]` | Generate a plain JavaScript `{ }` object, instead of a full class definition. Only default class constructors are supported with this attribute configuration. |
| `[ObjectLiteral(ObjectInitializationMode initializationMode)]` | Determines how default values will be added to the plain object instance. |
| `[ObjectLiteral(ObjectCreateMode createMode)]` | Type information and Multiple class constructor definitions can be enabled in this mode. |
| `[ObjectLiteral(ObjectInitializationMode initializationMode, ObjectCreateMode createMode)]` | Configure both **ObjectInitializationMode** and **ObjectInitializationMode**. |

```csharp Example ([Deck.NET](https://deck.net/806198fcf60a6368dbc406209ea15295))
public class App
{
    public static void Main()
    {
        // Compiles to the default 'new' constructor syntax
        var one = new One 
        {
            Message = "Default Functionality"
        };
        
        // Compiles to a plain { } object literal
        var two = new Two 
        { 
            Message = "Emit as an Object Literal"
        };
    }
}

public class One
{
    public string Message { get; set; }
}

[ObjectLiteral]
public class Two
{
    public string Message { get; set; }
}
```

Only default constructors are supported with the basic `[ObjectLiteral]` mode. The Bridge compiler will throw a compile time exception if a custom constructor is defined.

By default, no Type information is included in the emitted object literal. To include Type info, please use `[ObjectLiteral(ObjectCreateMode.Constructor)]`.

Setting `[ObjectLiteral(ObjectCreateMode.Constructor)]` can also be used to support constructor overloads. 

As of Brige 16, including the `[External]` attribute is no longer required.

### ObjectInitializationMode Enum

| Value | Description |
| --- | --- |
| DefaultValue | Emit default values for all. |
| Initializer | Emit only values that have been explicitly initialized. |
| Ignore | Ignore default value. Emits an empty object literal. |

The following example demonstrates the generated output of each **ObjectInitializationMode** enum value.

```csharp Example ([Deck.NET](https://deck.net/c3d209c28b096b05bc81ea42480c48e5))
public class App
{
    public static void Main()
    {
        var person = new Student();
        
        Console.WriteLine(person);
    }
}

[ObjectLiteral]
// [ObjectLiteral(ObjectInitializationMode.DefaultValue)]
// [ObjectLiteral(ObjectInitializationMode.Initializer)]
// [ObjectLiteral(ObjectInitializationMode.Ignore)]
public class Student
{
    public int State = 444;
    
    public int Code { get; set; }
}
```

```js Output
// [ObjectLiteral]
var person = { };

// [ObjectLiteral(ObjectInitializationMode.DefaultValue)]
var person = { State: 444, Code: 0 };

// [ObjectLiteral(ObjectInitializationMode.Initializer)]
var person = { State: 444 };

// [ObjectLiteral(ObjectInitializationMode.Ignore)]
var person = { };
```

### ObjectCreateMode Enum

| Value | Description |
| --- | --- |
| Constructor | Create instance using constructor. |
| Plain | Create instance using plain object ({ } syntax). Default functionality is `Plain`. |

## Priority

Indicates the output priority order for the type. Defaults to zero, so any type with positive priority is output in JavaScript code before types with no `[Priority]` attribute, and negative ones are output after the default priority types.

**Applies to:** `Class`, `Delegate`, `Enum`, `Interface` and `Struct`
    
| Constructor | Description |
| --- | --- |
| `[Priority(int priority)]` | Sets output priority level. An integer denoting the priority level of the type. The output is emitted in descending priority order. |

```csharp Example ([Deck.NET](https://deck.net/c6cb7fa73e49c75bba60991849aa664d))
[Priority(-2)]
public class MinusTwo { }

[Priority(-1)]
public class MinusOne { }

// Default
public class Zero { }

[Priority(1)]
public class One { }
```


```js Output
Bridge.define("Demo.One");

Bridge.define("Demo.Zero");

Bridge.define("Demo.MinusOne");

Bridge.define("Demo.MinusTwo");
```

## Ready

Set a Method to be automatically called when all the JavaScript has been loaded and the Page is ready. If jQuery has been included in the Page, the jQuery `ready` handler is called, otherwise `DOMContentLoaded` is used.

**Applies to:** `Method`

```csharp Example ([Deck.NET](https://deck.net/fda915c2ea5375b1df17b384d1852468))
public class App
{
    [Ready]
    public static void AppStart()
    {
        // [Ready] is not required if
        // AppStart is renamed to Main
        
        Console.WriteLine("Ready");
    }
}
```

```js Output
Bridge.define("Demo.App", {
    statics: {
        ctors: {
            init: function () {
                Bridge.ready(this.AppStart);
            }
        },
        methods: {
            AppStart: function () {
                System.Console.WriteLine("Ready");
            }
        }
    },
    $entryPoint: true
});
```

## Reflectable

By default, reflection is enabled on all classes, but a separate `[app].meta.js` file is created and must be included in your html page after the `[app].js` file. 

Reflection can be disabled for the whole project by configuring the [reflection](../introduction/Global_Configuration.md#reflection) setting in your `bridge.json` file.

```json
"reflection": {
    "disabled": true
}
```

Once reflection has been disabled in a Project, you can re-enable reflection on specific Classes by adding the `[Reflectable]` attribute. Once marked with `[Reflectable]`, Bridge will output addition metadata into the JavaScript to enable reflection.

The `[Reflectable]` attribute can be applied to a member to indicate that metadata for the member should (or should not) be included in the compiled script.

The default reflectability can be changed with the `[DefaultMemberReflectability]` attribute.

#### Constructors

```csharp
[Reflectable(bool reflectable)]
[Reflectable(string filter)]
[Reflectable(params MemberAccessibility[] memberAccessibilities)]
[Reflectable(TypeAccessibility typeAccessibility)]
```

Setting `[Reflectable(Inherits = true)]` on a class instructs the Bridge compiler to include metadata for the class as well as all child classes ([more info](https://github.com/bridgedotnet/Bridge/issues/2489)).

Reflection metadata can also be generated from one Assembly for another external Assembly by including a filter string. The following sample demonstrates:

```csharp
[assembly:Reflectable("System.*")]
```

The filter string for `[assembly: Reflectable(string filter]` also support wildcard characters such as `*` and `?`.

The full name of a type will be matched with filter string. Multiple conditions can be defined by `;` as a separator. 

If `!` is set for a condition then it means _not_. For example, `"System.*;!System.CompilerService.*"` instructs the Bridge compiler to render metadata for all types from the `System` namespace except for types from `System.CompilerService.*` namespaces.

## Rules

The `[Rules]` attribute allows for refinement of the generated JavaScript syntax created by the Bridge compiler.

**Applies to:** `Method`, `Property`, `Class`, `Struct`, `Constructor`, `Interface`, and `Assembly`

!!!
Rules can also be configured in the [`bridge.json`](../introduction/Global_Configuration.md#rules) file.
!!!

By default, Bridge will manage the generated JavaScript, which at runtime will reproduce the expected .NET runtime result. While this JavaScript will execute efficiently and correctly, the developer may want to adjust the style of the generated syntax to create more of a _JavaScript style_ to the syntax. 

For example, creating an Anonymous Type in C# requires that additional meta data be available at runtime which would allow for proper reflection and type checking of results. When Bridge encounters an Anonymous Type, the compiler will generate a complete class definition in JavaScript.

Applying a `[Rules]` attribute within your Projects C# source will instruct the Bridge compiler to generate a plain `{ }` JavaScript object when it encounters an Anonymous Type.

```csharp A basic C# Anonymous Type:
[Rules(AnonymousType = AnonymousTypeRule.Plain)]
public static void DoSomething()
{
    var config = new { Id = 123 };
}
```

The above C# sample will generate the following simplified JavaScript object literal instead of a fully defined anonymous type class.

```js Output
var config = { Id = 123 };
```

Other **Rules** are supported, as outlined in the following options.

### Options

| Name | Options | Description
| --- | --- | ---
| `AnonymousType` | `Managed` or `Plain` | Set to `Plain` to generate an object literal when an anonymous type is defined. Default is `Managed`. [Sample](#anonymoustype). |
| `ArrayIndex` | `Managed` or `Plain` | Set to `Plain` to avoid array index validation. Default is `Managed`. [Sample](#arrayindex). |
| `AutoProperty` | `Managed` or `Plain` | Set to `Plain` to generate as simple field, or `Managed` to create as a JavaScript property with getter and setter. Default is `Managed`. [Sample](#autoproperty). |
| `Boxing` | `Managed` or `Plain` | Set to `Plain` to disable boxing. Default is `Managed`. [Sample](#boxing). |
| `ExternalCast` | `"Managed"` or `"Plain"` | Set to `Plain` to ignore casting external entities during run-time. See also `[IgnoreCast]` attribute. Compile-time type checking still occurs in both `Managed` and | `Plain` modes. Default is `Managed`. [Sample](#externalcast). |
| `InlineComment` | `Managed` or `Plain` | Set to Plain to remove inline comments from the output. Default is `Managed`. [Sample](#inlinecomment). |
| `Integer` | `Managed` or `Plain` | Set to `Plain` to treat [Integral](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/integral-types-table) types as simple numbers. Avoid having Bridge manage clipping, overflow checking, casting, and arithmetic operators. Default is `Managed`. [Sample](#integer). |
| `Lambda` | `Managed` or `Plain` | Set to `Plain` to avoid _lifting_ functions created by lambda methods into a higher scope. Default is `Managed`. [Sample](#lambda). |

### AnonymousType

```csharp Example
// C#
var config = new { Id = 123 };
```

```js Ouput
// AnonymousTypeRule.Managed
var config = new $asm.$AnonymousType$1(123);

// AnonymousTypeRule.Plain
var config = { Id: 123 };
```
        
### ArrayIndex

```csharp Example
// C#
var arr = new int[1]; 
arr[0] = 1;
```

```js Ouput
// ArrayIndexRule.Managed
var arr = System.Array.init(1, 0, System.Int32);
arr[System.Array.index(0, arr)] = 1;

// ArrayIndexRule.Plain
var arr = System.Array.init(1, 0, System.Int32);
arr[0] = 1;
```

### AutoProperty

```csharp Example
// AutoProperty | "autoProperty"
var app = new Program();
app.Name = "My App";
```

```js Output
// "Managed"
// Real JavaScript getter & setter are created
app.Name = "My App";

// "Plain"
// Just a plain JavaScript field
app.Name = "My App";
```

### ExternalCast

```csharp Example
var el = (HTMLButtonElement)document.createElement("button");
```

```js Output
// ExternalCast.Managed
var el = Bridge.cast(document.createElement("button"), HTMLButtonElement);

// ExternalCast.Plain
var el = document.createElement("button");
```

### Boxing

```csharp Example
Object o = 5;
```

```js Output
// BoxingRule.Managed
var o = Bridge.box(5, System.Int32);

// BoxingRule.Plain
var o = 5;
```

### InlineComment

```csharp Example
[Rules(InlineComment = InlineCommentRule.Managed)]
public static void InlineComment1()
{
    // Inline comments copied to .js
    var msg = "comment above";
}

[Rules(InlineComment = InlineCommentRule.Plain)]
public static void InlineComment2()
{
    // Comments not copied to .js
    var msg = "no comment above";
}
```

```js Output
// InineComment.Managed
InlineComment1: function () {
    // Inline comments copied to .js
    var msg = "comment above";
}

// InlineComment.Plain
InlineComment2: function () {
    var msg = "no comment above";
}
```

### Integer

```csharp Example
var val = 55;

var v1 = (sbyte)val;
var v2 = (byte)val;
var v3 = (char)val;
var v4 = (short)val;
var v5 = (ushort)val;
var v6 = (int)val;
var v7 = (uint)val;
var v8 = (long)val;
var v9 = (ulong)val;

int i = int.MaxValue; 
byte b1 = (byte)i;
```

#### JavaScript

```js Output
// IntegerRule.Managed
var v1 = Bridge.Int.sxb(val & 255);
var v2 = val & 255;
var v3 = val & 65535;
var v4 = Bridge.Int.sxs(val & 65535);
var v5 = val & 65535;
var v6 = val;
var v7 = val >>> 0;
var v8 = System.Int64(val);
var v9 = Bridge.Int.clipu64(val);

var max = 2147483647;
var j = (max + 1) | 0;

// IntegerRule.Plain
var v1 = val;
var v2 = val;
var v3 = val;
var v4 = val;
var v5 = val;
var v6 = val;
var v7 = val;
var v8 = val;
var v9 = val;

var max = 2147483647;
var j = max + 1;
```

### Lambda

```csharp Example
Action a = () => Console.WriteLine("lambda!");
```

```js Output
// LambdaRule.Managed
// A shared "lifted" function is generated.
var a = $asm.$.Demo.Program.f1;
...
f1: function () {
    System.Console.WriteLine("lambda!");
}

// LambdaRule.Plain
// A plain JavaScript function is generated.
var a = function () { 
    System.Console.WriteLine("lambda!");
};
```

## Script

Configure a custom Method body in JavaScript, ignoring the C# implementation.

This Attribute can be handy when trying to express a concept in JavaScript that cannot be expressed in C#.

**Applies to:** `Constructor` and `Method`

| Constructor | Description |
| --- | --- |
| `[Script(params string[] lines)]` | A comma-separated list of strings, each which will be emitted to the compiled JavaScript code unchanged. |

```csharp Example ([Deck.NET](https://deck.net/0cc381dbf7a86251a0632fb9bbaff8e1))
public class App
{
    public static void Main()
    {
        var app = new App();
        
        app.DoSomething();
    }
    
    [Script("alert('Working!');")]
    public void DoSomething()
    {
        // This Method body will be ignored by
        // the Bridge Compiler. The "Working!" message
        // should be emitted to the compiled js.
        Console.WriteLine("Hello World");
    }
}
```

```js Output
Bridge.define("Demo.App", {
    main: function Main() {
        var app = new Demo.App();

        app.DoSomething();
    },
    methods: {
        DoSomething: function () {
            alert('Working!');
        }
    }
});
```

## Template

Specifies how a call to the Method should be translated into JavaScript.

**Applies to:** `Constructor`, `Field`, `Method`

| Constructor | Description |
| --- | --- |
| `[Template(string format)]` | The format string, supporting several optional placeholder tokens. |

### Options

| Token | Description |
| --- | --- |
| `{this}` | The instance of the caller, or class name if static. |
| `{this:type}` | The Type of the caller. |
| `{name}` | A parameter name in the call statement with it's value emitted wrapped in quotes. |
| `{name:raw}` | The raw parameter value is emitted. No wrapping quotes. |
| `{name:plain}` | Convert the parameter to a plain object literal instance. |
| `{*name}` | Replaced by the list of parameters named `param`. |
| `{0}` | The zero-based index of the parameter value in the call statement is emitted wrapped in quotes. |
| `{@}` | The name of the member. |
| `{$}` | The name of the member accessed by instance of `{this}`. Equivalent to `{this}.{@}`. |
| `<self>` | Indicates whether an instance target is rendered. |

The following sample demonstrates how calling `ReplaceByNull()` in your C# application will trigger the compiler to emit`null` in the final JavaScript.

```csharp Example ([Deck.NET](https://deck.net/82ed518ebab39efc2c250438d10921f0))
public class App
{
    public static void Main()
    {
        var val = ReplaceByNull();
    }

    [Template("null")]
    public extern static string ReplaceByNull();
}
```

```js Output
Bridge.define("Demo.App", {
    main: function Main() {
        var val = null;
    }
});
```

Template formatting options are provided by using magic format tokens and flags.

```csharp Example ([Deck.NET](https://deck.net/aaa1a9b83e8c8ff9a70ff1106a1c3528))
public class App
{
    public static void Main()
    {
        ParameterTokens("one");

        RawFlag("55");

        CommaSeparatedList("One", "Two", "Three");

        IndexOfParameter("One", "Two", true);
    }

    // Reference the parameter names as a template token
    [Template("alert({message})")]
    public static void ParameterTokens(string message) { }

    // Force the parameter token to emitted as a raw value. 
    // No quotations are added if the parameter is a sting type.
    [Template("alert({message:raw})")]
    public static void RawFlag(string message) { }

    // 
    [Template("alert({*msgs})")]
    public static void CommaSeparatedList(params string[] msgs) { }

    // Reference the parameters by their index location (zero based)
    [Template("Bridge.Console.log({2:raw}, {1}, {0})")]
    public static void IndexOfParameter(string one, string two, bool flag) { }
}
```


```js Output
Bridge.define("Demo.App", {
    main: function Main() {
        alert("one");

        alert(55);

        alert("One", "Two", "Three");

        Bridge.Console.log(true, "Two", "One");
    }
});
```

The following sample demonstrates how `self` affects emitted JavaScript.

```csharp Example <self> ([Deck.NET](https://deck.net/ca8ba34a57c8ff766e604e9539ba4d5d))
public class App
{
    [Template("<self>Demo.App.DoSomething(\"Calling instance method for static template with <self>\")")]
    public extern int InstanceExtern();
    
    public static string DoSomething (string s) { return s; }

    public static void Main()
    {
        /* Without <self> it would be the following code
            var s = new Demo.App().Demo.App.DoSomething("Calling instance method for static template with <self>");  */
        var s = new App().InstanceExtern();
        Console.WriteLine(s);
    }
}
```

```js Output
Bridge.define("Demo.App", {
    main: function Main() {
        /* Without <self> it would be the following code
           var s = new Demo.App().Demo.App.DoSomething("Calling instance method for static template with <self>");  */
        var s = Demo.App.DoSomething("Calling instance method for static template with <self>");
        System.Console.WriteLine(s);
    },
    statics: {
        methods: {
            DoSomething: function (s) {
                return s;
            }
        }
    }
});
```

```csharp Example
[Template("{this}.{@:CamelCase}({msg})")]
public void DoSomething(string msg) { }

// JavaScript output
// obj.doSomething("test");
```

## Unbox

If a class or method is marked as `[External]` then Bridge will automatically unbox an argument (if the parameter type is an object). Bridge assumes that external libraries cannot work with boxed arguments. 

If such behaviour is not required for external classes or methods; that is if your external method can handle boxed arguments correctly, then apply the `[Unbox(false)]` attribute.

## Virtual

When a Class or Interface is marked with the `[Virtual]` attribute, the virtual type will be created during runtime if it does not already exist.

```csharp
[Virtual]
public class Person
{
}

public class Student : Person
{
}
```

The `[Virtual]` attribute is similar to the [`[External]`](#external) attribute, although they differ in one key feature; the `[Virtual]` attribute will first check if the type exists during runtime, and create if it does not exist. 

The `[External]` attribute always makes the assumption that the type exists.

Additionally, a class marked with `[Virtual]` attribute does not allow nested classes, a compiler error will be thrown.

```csharp Example ([Deck.NET](https://deck.net/082cbc16aed39e23f2646a018904cf14))
public class Program
{
    public static void Main()
    {
        object p = new Person();
        var isPerson = p is Person;
        
        Console.WriteLine("Is Person: " + isPerson);
    }
}

// Using [External] will fail during runtime
[Virtual]
public class Person
{
}
```