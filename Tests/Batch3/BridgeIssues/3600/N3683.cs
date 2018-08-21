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
            Type abstractType = typeof(Type);
            Assert.True(abstractType.IsAbstract, "Abstract type's 'IsAbstract' is true.");

            Type concreteType = typeof(Bridge3683);
            Assert.False(concreteType.IsAbstract, "Concrete type's 'IsAbstract' is false.");
        }
    }
}