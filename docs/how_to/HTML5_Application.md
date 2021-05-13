# HTML5 Application

Let's see how easy it is to build [HTML5](http://www.w3.org/TR/html5/) applications with Bridge.NET. This example will show you how to:

1. Work with HTML5 elements and the HTML5 local storage
1. Handle events
1. Use the `Ready` attribute
1. Applying CSS styles

The sample code is located at [HTML5 Application](https://github.com/bridgedotnet/Demos/tree/master/Html5/Html5Application).

## Create HTML5 Elements

Using Bridge you can create and manipulate HTML5 elements from your C# code. The **Bridge.Html5** namespace defines the available element classes. Here, we will create:

* An **HTMLInputElement** of type `InputType.Text` to accept user input
* Two buttons expressed as instances of the **HTMLButtonElement** class
* A **HTMLDivElement** which maps to a `<div>` HTML tag to act as the containing element

```csharp
public static void Main()
{            
    var div = new HTMLDivElement();

    var input = new HTMLInputElement() 
    { 
        Id = "number",
        Type = InputType.Text,
        Placeholder = "Enter a number to store...",
        Style =
        {
            Margin = "5px"
        }
    };

    var buttonSave = new HTMLButtonElement() 
    { 
        Id = "b",
        InnerHTML = "Save"
    };

    var buttonRestore = new HTMLButtonElement() 
    { 
        Id = "r",
        InnerHTML = "Restore",
        Style =
        {
            Margin = "5px"
        }
    };

    div.AppendChild(input);
    div.AppendChild(buttonSave);
    div.AppendChild(buttonRestore);
}
```

## Customize Elements

In the code snippet above note how the various properties of each element are set. You can change the look and feel of an element by defining properties applicable to all elements such as `Style`, `ClassName` and `InnerHTML` or using more specialized properties such as `Placeholder`. For example, we set the element's margin to `5px` through the `Style` property. The rest of the styles is in `demo.css`.

## The HTML5 Local Storage

With local storage, web applications can store data locally within the user's browser. Before HTML5, application data had to be stored in cookies, included in every server request. Local storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server. Local storage is per domain. All pages, from one domain, can store and access the same data.

The API is very similar to writing to and reading from Cookies:

```csharp
// writing to local storage
Window.LocalStorage.SetItem(KEY, VALUE);

// reading from local storage
var o = Window.LocalStorage[KEY];
if (o != null)
{
     string value = o.ToString();
}
```

## Event Handling

You can use the `AddEventListener` method to add event handling methods to various events exposed by the HTML5 elements.

```csharp
input.AddEventListener(EventType.KeyPress, InputKeyPress);
buttonSave.AddEventListener(EventType.Click, Save);
buttonRestore.AddEventListener(EventType.Click, Restore);
```

Here, we use two different types of events: the `KeyPress` event to listen to keyboard input and take special action when the `ENTER` key is pressed and the `Click` event to execute code when the buttons are clicked.

Please note how the `Event` object is type casted to `KeyboardEvent` in order to use the specialized `KeyCode` property.

```csharp
if (e.IsKeyboardEvent() && e.As<KeyboardEvent>().KeyCode == 13)
```

For more information on type conversion see <a target="_blank" href="../how_to/Type_Casting.md">Type casting</a>

## Build The Example

Below you can find all pieces of the code example put together. The generated JavaScript file will be named `simpleHtml5.js` after the project's `Namespace`. You can control output file naming by using the <a target="_blank" href="../attributes/Attribute_Reference.md">FileName attribute</a>.

```csharp
using Bridge;
using Bridge.Html5;
using System;

namespace SimpleHtml5
{
    class Storage
    {
        private const string KEY = "KEY";

        public static void Main()
        {            
            // A root container for the elements we will use in this example -
            // text input and two buttons
            var div = new Bridge.Html5.HTMLDivElement();

            // Create an input element, with Placeholder text
            // and KeyPress listener to call Save method after Enter key pressed
            var input = new Bridge.Html5.HTMLInputElement() 
            { 
                Id = "number",
                Type = InputType.Text,
                Placeholder = "Enter a number to store...",
                Style =
                {
                    Margin = "5px"
                }
            };

            input.AddEventListener(EventType.KeyPress, InputKeyPress);
            div.AppendChild(input);

            // Add a Save button to save entered number into Storage
            var buttonSave = new Bridge.Html5.HTMLButtonElement() 
            { 
                Id = "b",
                InnerHTML = "Save"
            };

            buttonSave.AddEventListener(EventType.Click, Save);
            div.AppendChild(buttonSave);

            // Add a Restore button to get saved number and populate 
            // the text input with its value
            var buttonRestore = new Bridge.Html5.HTMLButtonElement() 
            { 
                Id = "r",
                InnerHTML = "Restore",
                Style =
                {
                    Margin = "5px"
                }
            };

            buttonRestore.AddEventListener(EventType.Click, Restore);
            div.AppendChild(buttonRestore);

            // Do not forget add the elements on the page
            Document.Body.AppendChild(div);

            // It is good to get the text element focused
            input.Focus();
        }

        private static void InputKeyPress(Event e)
        {
            // We added the listener to EventType.KeyPress so it should be a KeyboardEvent
            if (e.IsKeyboardEvent() && e.As<KeyboardEvent>().KeyCode == 13)
            {
                Save();
            }
        }

        private static void Save()
        {
            var input = Document.GetElementById<HTMLInputElement>("number");
            int i = Window.ParseInt(input.Value);

            if (!Window.IsNaN(i))
            {
                Window.LocalStorage.SetItem(KEY, i);
                Window.Alert(string.Format("Stored {0}", i));
                input.Value = string.Empty;
            }
            else
            {
                Window.Alert("Incorrect value. Please enter a number.");
            }
        }

        private static void Restore()
        {
            var input = Document.GetElementById<HTMLInputElement>("number");
            var o = Window.LocalStorage[KEY];

            if (o != null)
            {
                input.Value = o.ToString();
            }
            else
            {
                input.Value = string.Empty;
            }
        }
    }
}
```

```html
<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8" />
    <title>Html5 Application Sample</title>

    <link rel="stylesheet" type="text/css" href="demo.css">

    <script src="../output/bridge.min.js"></script>
    <script src="../output/simpleHtml5.js"></script>
</head>
<body>

</body>
</html>
```

![HTML5 Application](../static/html5-application-img-01.png)