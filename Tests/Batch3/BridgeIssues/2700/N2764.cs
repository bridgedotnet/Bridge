using System;
using System.Collections.Generic;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2764 - {0}")]
    public class Bridge2764
    {
        [Test]
        public static void TestNonGenericClassName()
        {
            //@ var Bridge2764Generic = function () {};
            var c = new Bridge2764Generic<int>();
            Assert.NotNull(c);
        }
    }

    [External]
    [IgnoreGeneric]
    [Namespace(false)]
    public class Bridge2764Generic<T>
    {
    }
}