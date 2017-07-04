using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2886 - {0}")]
    public class Bridge2886
    {
        class Class1
        {
        }

        [Test]
        public static void Test2DArrayDefValue()
        {
            foreach (var value in new int[1, 1])
            {
                Assert.AreEqual(0, value, "Default int[,]");
            }

            foreach (var value in new bool[1, 1])
            {
                Assert.AreEqual(false, value, "Default bool[,]");
            }

            foreach (var value in new long[1, 1])
            {
                object o = value;
                Assert.True(o is long, "Default long[,] is long");
                Assert.AreEqual(0L, value, "Default long[,] is 0L");
            }

            foreach (var value in new decimal[1, 1])
            {
                object o = value;
                Assert.True(o is decimal, "Default decimal[,] is decimal");
                Assert.AreEqual(0m, value, "Default decimal[,] is 0m");
            }

            foreach (var value in new DateTime[1, 1])
            {
                object o = value;
                Assert.True(o is DateTime, "Default DateTime[,] is DateTime");
                Assert.AreEqual(default(DateTime), value, "Default DateTime[,] is default(DateTime)");
            }

            foreach (var value in new Class1[1, 1])
            {
                object o = value;
                Assert.AreEqual(default(Class1), value, "Default Class1[,] is default(Class1)");
            }
        }
    }
}