using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1600 - {0}")]
    public class Bridge1600
    {
        [Test]
        public void TestOutInAsync()
        {
            float inf = 1.0f / 0.0f;
            Assert.True(float.IsPositiveInfinity(inf));

            double dinf = 1.0 / 0.0;
            Assert.True(double.IsPositiveInfinity(dinf));
        }
    }
}