//#1499
namespace Test.BridgeIssues.N1499
{
    using System;

    public class App
    {
        public static void Main()
        {
            App app = null;
            // When option "useTypedArrays": false, the code below should use || - System.Console.log(app || new Demo.App());
            Console.WriteLine(app ?? new App());
        }
    }
}
