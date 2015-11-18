using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    internal class Bridge603Class
    {
        public object Data { get; set; }
    }

    [FileName("testBridgeIssues.js")]
    internal struct Bridge603A
    {
        public string value;

        public Bridge603A(string value)
        {
            this.value = value;
        }

        public static implicit operator Bridge603A(string value)
        {
            value = value ?? "[Null]";
            return new Bridge603A(value);
        }
    }

    [FileName("testBridgeIssues.js")]
    internal struct Bridge603B
    {
        public string value;
        public int intValue;

        public Bridge603B(string value)
        {
            this.value = value;
            this.intValue = 0;
        }

        public Bridge603B(int value)
        {
            this.value = null;
            this.intValue = value;
        }

        public Bridge603B(Bridge603Class value)
        {
            this.value = value.Data.ToString();
            this.intValue = 0;
        }

        public static implicit operator Bridge603B(string value)
        {
            value = value ?? "[Null]";
            return new Bridge603B(value);
        }

        public static implicit operator Bridge603B(int value)
        {
            return new Bridge603B(value);
        }

        public static implicit operator Bridge603B(Bridge603Class value)
        {
            value = value ?? new Bridge603Class() { Data = "[Null]" };
            return new Bridge603B(value);
        }
    }

    // Bridge[#603]
    [FileName("testBridgeIssues.js")]
    internal class Bridge603
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(2);

            Bridge603A c = null;
            assert.Equal(c.value, "[Null]", "Bridge603A TestUseCase Null");

            c = "Test";
            assert.Equal(c.value, "Test", "Bridge603A TestUseCase String");
        }

        public static void TestRelated(Assert assert)
        {
            assert.Expect(5);

            Bridge603B b = 12345;
            assert.Equal(b.intValue, 12345, "Bridge603B TestRelated Int");

            Bridge603B c = (string)null;
            assert.Equal(c.value, "[Null]", "Bridge603B TestRelated String Null");

            c = "Test";
            assert.Equal(c.value, "Test", "Bridge603B TestRelated String");

            Bridge603B d = (Bridge603Class)null;
            assert.Equal(d.value, "[Null]", "Bridge603B TestRelated Bridge603Class Null");

            d = new Bridge603Class() { Data = "Test 603B" };
            assert.Equal(d.value, "Test 603B", "Bridge603B TestRelated Bridge603Class");
        }
    }
}