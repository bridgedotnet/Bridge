using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2935 - {0}")]
    public class Bridge2935
    {
        [Test]
        public static void TestStringAsEnumerableChar()
        {
            var s = "Hello";
            var numerable = s as IEnumerable<char>;

            Assert.NotNull(numerable);

            var i = 0;
            foreach (var c in numerable)
            {
                Assert.AreEqual(s[i], c);
                i++;
            }
        }
    }
}