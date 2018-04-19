using System;
using System.Linq;

namespace Test.BridgeIssues.N694
{
    public class Bridge694
    {
        public static void Test1()
        {
            var fruits = new object[3];
            fruits[0] = "mango";
            fruits[1] = "apple";
            fruits[2] = "lemon";

            var list = fruits.Cast<string>().OrderBy(fruit => fruit).Select(fruit => fruit).ToList();
        }
    }
}
