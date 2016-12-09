using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1430 - {0}")]
    public class Bridge1430
    {
        [Test]
        public static void TestNestedNamespaceSupport()
        {
            Assert.AreEqual("Hi from inner Level1", Inner1430_Level1.Constants.TestConst);

            var d1 = new Inner1430_Level1.Do();
            Assert.AreEqual(4, d1.GetFour());

            Assert.AreEqual("Hi from inner Level3", Inner1430_Level1.Inner1430_Level2.Constants.TestConst);

            var d2 = new Inner1430_Level1.Inner1430_Level2.Do();
            Assert.AreEqual(5, d2.GetFive());
        }
    }

    namespace Inner1430_Level1
    {
        public class Constants
        {
            public const string TestConst = "Hi from inner Level1";
        }

        class Do
        {
            public int GetFour()
            {
                return 4;
            }
        }

        namespace Inner1430_Level2
        {
            public class Constants
            {
                public const string TestConst = "Hi from inner Level3";
            }

            class Do
            {
                public int GetFive()
                {
                    return 5;
                }
            }
        }
    }
}