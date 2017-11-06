using System;
using Bridge.Test.NUnit;
using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3226 - {0}")]
    public class Bridge3226
    {        
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

            Assert.AreEqual("100010001", s); 
        }
    }
}