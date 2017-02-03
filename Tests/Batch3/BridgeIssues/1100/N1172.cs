using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1172 - {0}")]
    public class Bridge1072
    {
        [Test]
        public static void TestNameForProperty()
        {
            var c = new Class1();

            Assert.NotNull(c["getAccessor"]);
            Assert.NotNull(c["setAccessor"]);

            c.Prop1 = 7;
            Assert.AreEqual(7, c.Prop1);
        }

        private class Class1
        {
            private int data;

            public int Prop1
            {
                [Name("getAccessor")]
                get
                {
                    return this.data;
                }
                [Name("setAccessor")]
                set
                {
                    this.data = value;
                }
            }
        }
    }
}