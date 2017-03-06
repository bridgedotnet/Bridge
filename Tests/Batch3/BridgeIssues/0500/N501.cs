using Bridge.Html5;
using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Reflectable]
    public class Bridge501A : List<int>
    {
        // internal List<> uses items, conflict here
        public string Items = "12";
    }

    [Reflectable]
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
            var z = Bridge.Json.Serialize(list); // this is ok
            Assert.AreEqual("[7]", z, "List<int>");

            var b = new Bridge501B() { 1, 2 };
            var y = Bridge.Json.Serialize(b); // wrong, missing items
            Assert.AreEqual("[1,2]", y, "Bridge501B");

            var a = new Bridge501A() { 7 }; // sine items is defined as member, push fails
            var x = Bridge.Json.Serialize(a);
            Assert.AreEqual("[7]", x, "Bridge501A");

            var c = Json.Deserialize<Bridge501A>(x);
            Assert.AreEqual("12", c.Items, "Bridge501A Parse c.Items");
            Assert.AreEqual(7, c[0], "Bridge501A Parse c[0]");
        }
    }
}