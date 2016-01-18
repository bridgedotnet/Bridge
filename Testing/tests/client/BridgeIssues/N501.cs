using Bridge;
using Bridge.Html5;
using Bridge.Test;

using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    public class Bridge501A : List<int>
    {
        // internal List<> uses items, conflict here
        public string Items = "12";
    }
    public class Bridge501B : List<int>
    {
        // just empty
    }

    // Bridge[#501]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#501 - {0}")]
    public class Bridge501
    {
        [Test(ExpectedCount = 5)]
        public static void TestUseCase()
        {
            var list = new List<int> { 7 };
            var z = JSON.Stringify(list); // this is ok
            Assert.AreEqual(z, "{\"items\":[7]}", "List<int>");

            var b = new Bridge501B() { 1, 2 };
            var y = JSON.Stringify(b); // wrong, missing items
            Assert.AreEqual(y, "{\"items\":[1,2]}", "Bridge501B");

            var a = new Bridge501A() { 7 }; // sine items is defined as member, push fails
            var x = JSON.Stringify(a);
            Assert.AreEqual(x, "{\"items\":[7]}", "Bridge501A");

            var c = JSON.Parse<Bridge501A>(x);
            Assert.AreEqual(c.Items, "12", "Bridge501A Parse c.Items");
            Assert.AreEqual(c[0], 7, "Bridge501A Parse c[0]");
        }
    }
}
