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
                Value = 130 + a + b;
            }
        }

        public class SomeClass2
        {
            public int Value;

            protected SomeClass2(bool b)
            {
                Value = 1007;
            }

            public SomeClass2(params int[] a)
            {
                Value = 1130;

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
                var r = 1130;

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
        public void TestOverloadedConstructorCallWithOptionalParameters()
        {
            var o1 = new SomeClass1();
            Assert.AreEqual(130, o1.Value, "o1 #1");

            var o12 = new SomeClass1(1);
            Assert.AreEqual(131, o12.Value, "o1 #2");

            var o13 = new SomeClass1(1, 2);
            Assert.AreEqual(133, o13.Value, "o1 #3");

            var o14 = new SomeClass1(a:2);
            Assert.AreEqual(132, o14.Value, "o1 #4");

            var o15 = new SomeClass1(a: 2, b: 3);
            Assert.AreEqual(135, o15.Value, "o1 #5");

            var o16 = new SomeClass1(b: 3, a: 4);
            Assert.AreEqual(137, o16.Value, "o1 #6");

            var o2 = new SomeClass2();
            Assert.AreEqual(1130, o2.Value, "o2 #1");

            var o22 = new SomeClass2(1);
            Assert.AreEqual(1131, o22.Value, "o2 #2");

            var o23 = new SomeClass2(1, 2);
            Assert.AreEqual(1133, o23.Value, "o2 #3");
        }
    }
}
