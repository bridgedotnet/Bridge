using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2146 - {0}")]
    public class Bridge2146
    {
        public static char TokenTerminator { get; set; }

        public static T GetDefault<T>()
        {
            return default(T);
        }

        [Test]
        public static void TestCharDefaultValue()
        {
            Assert.AreEqual(0, default(char));
            Assert.AreEqual(0, GetDefault<char>());
            Assert.AreEqual(0, TokenTerminator);
        }
    }
}