using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1775 - {0}")]
    public class Bridge1775
    {
        [Test]
        public void TestSumForEmpty()
        {
            var decimalList = new List<Decimal>();
            var decimalSum = decimalList.Sum();
            var lessThanOne = decimalSum < 1;
            Assert.True((Object)decimalSum is decimal);
            Assert.True(decimalSum == 0);
            Assert.True(lessThanOne);
        }
    }
}