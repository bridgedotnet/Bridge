# C# Coding Style Guide

These coding standards are generally applied to both C# and JavaScript unless otherwise noted.

The [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) is a great resource for detailed JavaScript coding standards.

Another excellent JavaScript resource is the [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript) for coding style guidelines.

###  Instance members prefixed with `this`

This includes `public`, `private` and `protected` properties, fields, methods, and events.

```csharp
public int Size { get; set; }

// Bad
Size = 55;

// Good
this.Size = 55;
````

### Static members prefixed with the Class name

```csharp
public static void DoSomething() { }

public void MyTask()
{
    // Bad
    DoSomething();

    // Good
    App.DoSomething();
}
```

### Use `{ }` for blocks (like `if` or `for`)

To be used even if a block contains the only operator

```csharp
// Bad 
if (test) alert(message);

// Good
if (test)
{ 
     this.Notify(message);
}
```

### No cryptic abbreviated parameter names

```csharp
// Bad
public Rectangle(int wd, int ht) { }

// Good
public Rectangle(int width, int height) { }
```

### Methods names UpperCamelCased

```csharp
// Bad
private void doSomething() { }

// Good
private void DoSomething() { }
```

### Public Properties and Fields UpperCamelCased

```csharp
// Bad
public string name;

// Good
public string Name;



// Bad
public string name { get; set; }

// Good
public string Name { get; set; }
```

### Private Properties and Fields lowerCamelCased

```csharp
// Bad
private string Name;

// Good
private string name;



// Bad
private string Name { get; set; }

// Good
private string name { get; set; }
```

# Formatting

## Line Breaks

### Blocks on new lines

```csharp
// Bad
var test = this.IsValid;
if (test)
{
}

// Good
var test = this.IsValid;

if (test)
{
}
```

```csharp
// Bad
var test = this.IsValid;
while (test)
{
}


// Good
var test = this.IsValid;

while (test)
{
}
```

### Return on new line

The return statement should always be on a new line.

```csharp
// Bad
public string GetMessage()
{
    var msg = "Hello";
    return msg;
}

// Good
public string GetMessage()
{
    var msg = "Hello";

    return msg;
}
```

### The Exception

There is an exception that applies to many of the **new line** code formatting guidelines. Basically, if the scenario immediately follows the opening `{` of a block, the rule does not apply. The opening `{` is considered the **new line**.

For example, a return statement is always on a new line... **except** when it follows the opening `{` of a block. 

### Example

```csharp
// Bad
public string GetMessage()
{
                 <-- New line is not required here
    return msg;
}

// Good
public string GetMessage()
{                <-- This is considered the new line
    return msg;
}
```