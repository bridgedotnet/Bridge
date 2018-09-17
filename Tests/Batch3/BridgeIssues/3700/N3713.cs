using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3713 - {0}")]
    public class Bridge3713
    {
        [Test]
        public static void TestValueType()
        {
            int test = 123;
            object o = test;
            ValueType vt = (ValueType)test;

            Assert.AreEqual(123, (int)vt);
            Assert.AreEqual("123", vt.ToString());
            Assert.True(o is ValueType);
        }
    }
}