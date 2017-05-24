using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2685 - {0}")]
    public class Bridge2685
    {
        partial class TestClass : IBase
        {
        }
        partial class TestClass : BaseClass, IBase
        {
            public int X
            {
                get;
            }

            public TestClass(int x, int y) : base(y)
            {
                X = x;
            }

            public override string ToString()
            {
                return $"{X} - {Y}";
            }
        }

        abstract class BaseClass
        {
            public BaseClass(int y)
            {
                Y = y;
            }

            public int Y
            {
                get;
            }
        }

        partial interface IBase
        {
        }

        [Test]
        public static void TestPartialClasses()
        {
            Assert.AreEqual("123 - 456", new TestClass(123, 456).ToString());
        }
    }
}