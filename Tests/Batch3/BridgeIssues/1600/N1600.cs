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
        public void TestPositiveInfinity()
        {
            float inf1 = 1.0f / 0.0f;
            Assert.True(float.IsPositiveInfinity(inf1));

            float inf2 = -1.0f / 0.0f;
            Assert.False(float.IsPositiveInfinity(inf2));

            double dinf1 = 1.0 / 0.0;
            Assert.True(double.IsPositiveInfinity(dinf1));

            double dinf2 = -1.0 / 0.0;
            Assert.False(double.IsPositiveInfinity(dinf2));
        }
    }
}