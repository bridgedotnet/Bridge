using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public struct Bridge660Optional<T>
    {
        private static Bridge660Optional<T> _missing = new Bridge660Optional<T>(default(T), false);

        private readonly T value;
        private readonly bool isDefined;

        public Bridge660Optional(T value) : this(value, value != null) { }
        private Bridge660Optional(T value, bool isDefined)
        {
            this.isDefined = (value != null);
            this.value = value;
        }

        public static Bridge660Optional<T> Missing { get { return _missing; } }

        public bool IsDefined { get { return this.isDefined; } }
    }
    public sealed class Bridge660MessageStore
    {
        // If this static field is removed then it works, otherwise there's a runtime error:
        //   "Cannot read property '$clone' of undefined"
        public static readonly Bridge660MessageEditState _initialEditState = new Bridge660MessageEditState(new Bridge660TextInputState("Message"));
    }
    public class Bridge660MessageEditState
    {
        public Bridge660MessageEditState(Bridge660TextInputState content)
        {
            Content = content;
        }
        public Bridge660TextInputState Content { get; private set; }
    }
    public class Bridge660TextInputState
    {
        public string Text { get; set; }

        public Bridge660TextInputState(string text) : this(text, Bridge660Optional<string>.Missing)
        {
        }

        public Bridge660TextInputState(string text, Bridge660Optional<string> validationError)
        {
            this.Text = text;
        }
    }


    // Bridge[#660]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#660 - {0}")]
    public class Bridge660
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            Assert.AreEqual("Message", Bridge660MessageStore._initialEditState.Content.Text, "Bridge660 Initialize static members before first access to the class");
        }
    }
}