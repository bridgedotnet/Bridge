//#883
namespace Test.BridgeIssues.N883A
{
    public static class Globals
    {
        public static int myVar;
        public static TextBox myTextBox;
    }

    public class Control
    {
        static int test = Globals.myVar;
    }

    public class Button : Control { }

    public class TextBox : Control { }
}
