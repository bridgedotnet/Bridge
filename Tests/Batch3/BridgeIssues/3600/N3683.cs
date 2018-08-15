using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3683 - {0}")]
    public class Bridge3683
    {
        [Test]
        public static void TestIsAbstract()
        {
            Type type = typeof(Type);
            Assert.True(type.IsAbstract);
        }
    }
}