using System;
using Bridge.Test.NUnit;
using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This test consists in checking whether the append operator works with
    /// multi dimensional arrays in Bridge the same way it does in .NET.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3226 - {0}")]
    public class Bridge3226
    {
        /// <summary>
        /// Build a simple, static integer two-dimensional array and iterate
        /// throught it incrementing a cell with a previous one's value.
        /// </summary>
        [Test]
        public static void TestAssignAddMultiDimArray()
        {
            var a = new int[3, 3];

            a[0, 0] = 1;

            for (var y = 0; y < (a.GetLength(1) - 1); y++)
            {
                for (var x = 0; x < (a.GetLength(0) - 1); x++)
                {
                    a[x + 1, y + 1] += a[x, y];
                }
            }

            List<int> list = new List<int>();
            string s = "";

            foreach (var i in a)
            {
                s += i;
            }

            // By the time it was broken, (bridgedotnet/Bridge#3226) the result
            // was wrong: 100010011
            Assert.AreEqual("100010001", s, "Result matches '100010001'");
        }
    }
}