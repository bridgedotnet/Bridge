# App Initialization

`Main()` will be automatically called upon initial page load. Within the body of your `Main()` Method, you can call additional methods and instantiate other classes.

```csharp Example ([Deck.NET](https://deck.net/af17727256ef60c2c76206837a6c6eac))
public class App
{
    public static void Main()
    {
        // Start your app code here
        Window.Alert("Success");
    }
}
```