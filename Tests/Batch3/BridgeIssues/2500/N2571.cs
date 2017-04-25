using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2571 - {0}")]
    public class Bridge2571
    {
        [Test]
        public static void TestContainsFunction()
        {
            List<Type> types = new List<Type>()
            {
                typeof(Int32),
                typeof(Double)
            };

            Assert.True(types.Contains(typeof(Double)));
            Assert.False(types.Contains(typeof(Int16)));
        }
    }
}