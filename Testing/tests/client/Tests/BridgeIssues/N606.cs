using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public static class Bridge606A
    {

        public static string Example2(this string source, string x, string y)
        {
            return source + " - " + x + " - " + y;
        }
    }

    [FileName("testBridgeIssues.js")]
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

    [FileName("testBridgeIssues.js")]
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
    [FileName("testBridgeIssues.js")]
    internal class Bridge606
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(5);

            var c = new Bridge606C();
            c.Example1(y: "a", x: "b");
            assert.Equal(c.X, "b", "Bridge606 C X");
            assert.Equal(c.Y, "a", "Bridge606 C Y");

            var b = new Bridge606B(y: "a", x: "b");
            assert.Equal(b.X, "b", "Bridge606 B X");
            assert.Equal(b.Y, "a", "Bridge606 B Y");

            var s = "123".Example2(y: "a", x: "b");
            assert.Equal(s, "123 - b - a", "Bridge606 123");
        }
    }
}