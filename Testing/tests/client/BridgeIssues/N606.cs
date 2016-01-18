using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public static class Bridge606A
    {

        public static string Example2(this string source, string x, string y)
        {
            return source + " - " + x + " - " + y;
        }
    }
    public class Bridge606B
    {
        public string X { get; set; }
        public string Y { get; set; }

        public Bridge606B(string x, string y)
        {
            X = x;
            Y = y;
        }
    }
    public class Bridge606C
    {
        public string X { get; set; }
        public string Y { get; set; }

        public void Example1(string x, string y)
        {
            X = x;
            Y = y;
        }
    }

    // Bridge[#606]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#606 - {0}")]
    public class Bridge606
    {
        [Test(ExpectedCount = 5)]
        public static void TestUseCase()
        {
            var c = new Bridge606C();
            c.Example1(y: "a", x: "b");
            Assert.AreEqual(c.X, "b", "Bridge606 C X");
            Assert.AreEqual(c.Y, "a", "Bridge606 C Y");

            var b = new Bridge606B(y: "a", x: "b");
            Assert.AreEqual(b.X, "b", "Bridge606 B X");
            Assert.AreEqual(b.Y, "a", "Bridge606 B Y");

            var s = "123".Example2(y: "a", x: "b");
            Assert.AreEqual(s, "123 - b - a", "Bridge606 123");
        }
    }
}