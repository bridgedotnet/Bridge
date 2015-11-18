using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Bridge559A1
    {
        public string result = "";
        public Bridge559A1()
        {
            result += " -> Bridge559A1";
        }

        public Bridge559A1(int a)
            : this()
        {
            result += " -> Bridge559A1$1";
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge559B1 : Bridge559A1
    {
        public Bridge559B1()
        {
            result += " -> Bridge559B1 -- unexpected!";
        }

        public Bridge559B1(int a)
            : base(a)
        {
            result += " -> Bridge559B1$1";
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge559A2
    {
        public string result = "";
        public Bridge559A2()
        {
            result += " ClassA";
        }

        public Bridge559A2(int a) : this()
        {
            result += " ClassA$1";
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge559B2 : Bridge559A2
    {
        public Bridge559B2()
        {
            result += " ClassB -- unexpected!";
        }

        public Bridge559B2(int a) : base(a)
        {
            result += " ClassB$1";
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge559A3
    {
        public Bridge559A3(string value)
        {
            Data = value;
        }

        public Bridge559A3(int value)
            : this(value.ToString())
        {
        }

        public string Data { get; set; }
    }


    // Bridge[#559]
    [FileName("testBridgeIssues.js")]
    internal class Bridge559
    {
        public static void TestUseCase1(Assert assert)
        {
            var b = new Bridge559B1(1);

            assert.Expect(1);

            assert.Equal(b.result, " -> Bridge559A1 -> Bridge559A1$1 -> Bridge559B1$1", "Bridge559 TestUseCase1");
        }

        public static void TestUseCase2(Assert assert)
        {
            var b = new Bridge559B2(1);

            assert.Expect(1);

            assert.Equal(b.result, " ClassA ClassA$1 ClassB$1", "Bridge559 TestUseCase2");
        }

        public static void TestUseCase3(Assert assert)
        {
            var a = new Bridge559A3(1);
            var b = new Bridge559A3(2);

            assert.Expect(1);

            var r = a.Data + "|" + b.Data;
            assert.Equal(r, "1|2", "Bridge559 TestUseCase3");
        }
    }
}