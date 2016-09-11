using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1787 - {0}")]
    public class Bridge1787
    {
        public class SomeClass2
        {
            public int Value;

            public SomeClass2(params int[] a)
            {
                if (a != null)
                {
                    for (int i = 0; i < a.Length; i++)
                    {
                        Value += a[i];
                    }
                }
            }

            public int SumOfArray(params int[] a)
            {
                var r = 0;

                if (a != null)
                {
                    for (int i = 0; i < a.Length; i++)
                    {
                        r += a[i];
                    }
                }

                return r;
            }
        }

        [Test]
        public void TestNamedParams()
        {
            var p = 7;
            var expected = 7;
            int actual;

            actual = new SomeClass2(a: p).Value;
            Assert.AreEqual(expected, actual);

            actual = new SomeClass2(p).Value;
            Assert.AreEqual(expected, actual);

            actual = new SomeClass2().SumOfArray(a: p);
            Assert.AreEqual(expected, actual);

            actual = new SomeClass2().SumOfArray(p);
            Assert.AreEqual(expected, actual);
        }
    }
}