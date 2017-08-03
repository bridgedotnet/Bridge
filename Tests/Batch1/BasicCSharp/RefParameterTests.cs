using Bridge.ClientTestHelper;
using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.BasicCSharp
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
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

        [Test]
        public void CanUseReferenceToLocalVariables()
        {
            int i = 14;
            RefTestMethod(ref i, 14, 17, 21, 24, () =>
            {
                Assert.AreEqual(17, i);
                i = 21;
            });
            Assert.AreEqual(24, i);
        }

        private class C
        {
            public int i;
        }

        [Test]
        public void CanUseReferenceToField()
        {
            var c1 = new C
            {
                i = 14
            };
            var c2 = c1;
            RefTestMethod(ref c1.i, 14, 17, 21, 24, () =>
            {
                Assert.AreEqual(17, c1.i);
                c1.i = 21;
                c1 = new C
                {
                    i = 10
                };
            });
            Assert.AreEqual(24, c2.i);
            Assert.AreEqual(10, c1.i);
        }

        [Test]
        public void CanUseReferenceToOneDimensionalArray()
        {
            var a1 = new[] { 3, 7, 14, 1 };
            var a2 = a1;
            RefTestMethod(ref a1[2], 14, 17, 21, 24, () =>
            {
                Assert.AreEqual(17, a1[2]);
                a1[2] = 21;
                a1 = new[] { 8, 9, 10, 11, 12 };
            });
            Assert.AreEqual(24, a2[2]);
            Assert.AreEqual(10, a1[2]);
        }

        [Test]
        public void CanUseReferenceToMultiDimensionalArray()
        {
            var a1 = new[,] { { 1, 3, 7 }, { 1, 2, 3 }, { 1, 14, 1 } };
            var a2 = a1;
            RefTestMethod(ref a1[2, 1], 14, 17, 21, 24, () =>
            {
                Assert.AreEqual(17, a1[2, 1]);
                a1[2, 1] = 21;
                a1 = new[,] { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
            });
            Assert.AreEqual(24, a2[2, 1]);
            Assert.AreEqual(8, a1[2, 1]);
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
                CommonHelper.Safe(() => r1 = copy.i);
                Assert.AreEqual(11, r1);

                int r2 = 0;
                CommonHelper.Safe(() => r2 = copy.j);
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
                CommonHelper.Safe(() => r3 = copy2.i);
                Assert.AreEqual(42, r3);

                int r4 = 0;
                CommonHelper.Safe(() => r4 = copy2.j);
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