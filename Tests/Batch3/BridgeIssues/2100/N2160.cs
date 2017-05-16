using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2159 - {0}")]
    public class Bridge2159
    {
        public class Base<T, U> { }

        public class Derived<V> : Base<int, string> { }

        [Test]
        public static void TestBaseTypeForGenericDefinition()
        {
            Type derivedType = typeof(Derived<>);
            Assert.AreEqual(typeof(Base<int, string>), derivedType.BaseType);
        }
    }
}