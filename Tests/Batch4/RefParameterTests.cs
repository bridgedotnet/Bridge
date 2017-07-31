using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "RefParameterTests - {0}")]
    public class RefParameterTests
    {
        private void RefTestMethod(ref int r, int expectBefore, int write, int expectAfter, int writeAfter, Action a)
        {
            Assert.AreEqual(expectBefore, r);
            r = write;
            Assert.AreEqual(write, r);
            a();
            Assert.AreEqual(expectAfter, r);
            r = writeAfter;
        }

        private struct S
        {
            public int i, j;

            public S(int i, int j)
            {
                this.i = i;
                this.j = j;
            }

            public void RefThisTest()
            {
                i = 11;
                j = 12;
                M(ref this);
                Assert.AreEqual(42, i);
                Assert.AreEqual(43, j);
            }

            private static void M(ref S s)
            {
                // Test restructure to keep assertion count correct (prevent uncaught test exception)
                // copy var required as C# cannot use ref vars in lambdas
                S copy;
                try
                {
                    copy = s;
                }
                catch
                {
                    copy = default(S);
                }

                int r1 = 0;
                TestHelper.Safe(() => r1 = copy.i);
                Assert.AreEqual(11, r1);

                int r2 = 0;
                TestHelper.Safe(() => r2 = copy.j);
                Assert.AreEqual(12, r2);

                s = new S(42, 43);

                var copy2 = default(S);
                try
                {
                    copy2 = s;
                }
                catch
                {
                    copy2 = default(S);
                }

                int r3 = 0;
                TestHelper.Safe(() => r3 = copy2.i);
                Assert.AreEqual(42, r3);

                int r4 = 0;
                TestHelper.Safe(() => r4 = copy2.j);
                Assert.AreEqual(43, r4);
            }
        }

        [Test]
        public void CanUseReferenceToThis_SPI_1569()
        {
            // #1569
            new S().RefThisTest();
        }
    }
}