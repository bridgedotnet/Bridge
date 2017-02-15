using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#1001]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1001 - {0}")]
    public class Bridge1001
    {
        public static class Globals
        {
            public static int myVar = 2;
            public static int myVar1 = Control.test;
            public static int myVar2 = myVar1;
            public static TextBox myTextBox;
        }

        public class Control
        {
            public static int test = Globals.myVar;
        }

        //check ordering also
        public class Button : Control { }

        //check ordering also
        public class TextBox : Control { }

        [Test(ExpectedCount = 4)]
        public static void TestDefaultValues()
        {
            Assert.AreEqual(2, Control.test);
            Assert.AreEqual(2, Globals.myVar);
            Assert.AreEqual(0, Globals.myVar1);
            Assert.AreEqual(0, Globals.myVar2);
        }
    }
}