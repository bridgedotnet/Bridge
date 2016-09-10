using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1511 - {0}")]
    public class Bridge1511
    {
        public class SomeClass1
        {
            public int Value;

            protected SomeClass1(bool b)
            {
                Value = 7;
            }
            public SomeClass1(int a = 0, int b = 0)
            {
                Value = 130;
            }
        }

        public class SomeClass2
        {
            public int Value;

            protected SomeClass2(bool b)
            {
                Value = 9;
            }

            public SomeClass2(params int[] a)
            {
                Value = 135;
            }
        }

        [Test]
        public void TestOverloadedConstructorCallWithOptionalParameters()
        {
            var o1 = new SomeClass1();
            Assert.AreEqual(o1.Value, 130, "#1");

            var o2 = new SomeClass2();
            Assert.AreEqual(o2.Value, 135, "#2");
        }
    }
}
