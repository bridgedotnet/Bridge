using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1709 - {0}")]
    public class Bridge1709
    {
        public int MakeArguments<T>(params T[] args)
        {
            return args.Length;
        }

        [Test]
        public void TestGenericMethodWithoutTypeArgument()
        {
            object callback = null;
            var arguments = MakeArguments(null, callback);
            Assert.AreEqual(2, arguments);
        }
    }
}