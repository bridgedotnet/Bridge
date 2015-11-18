using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using System.Linq;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Bridge501A : List<int>
    {
        // internal List<> uses items, conflict here
        public string Items = "12";
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge501B : List<int>
    {
        // just empty
    }

    // Bridge[#501]
    [FileName("testBridgeIssues.js")]
    internal class Bridge501
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(5);

            var list = new List<int> { 7 };
            var z = JSON.Stringify(list); // this is ok
            assert.Equal(z, "{\"items\":[7]}", "List<int>");

            var b = new Bridge501B() { 1, 2 };
            var y = JSON.Stringify(b); // wrong, missing items
            assert.Equal(y, "{\"items\":[1,2]}", "Bridge501B");

            var a = new Bridge501A() { 7 }; // sine items is defined as member, push fails
            var x = JSON.Stringify(a);
            assert.Equal(x, "{\"items\":[7]}", "Bridge501A");

            var c = JSON.Parse<Bridge501A>(x);
            assert.Equal(c.Items, "12", "Bridge501A Parse c.Items");
            assert.Equal(c[0], 7, "Bridge501A Parse c[0]");
        }
    }
}
