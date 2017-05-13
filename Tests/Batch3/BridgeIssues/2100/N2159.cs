using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2160 - {0}")]
    public class Bridge2160
    {
        public class Base<T, U> { }

        public class Derived<V> : Base<int, string> { }

        [Test]
        public static void TestBaseTypeForGenericDefinition()
        {
            Type derivedType = typeof(Derived<>);
            var args = derivedType.GetGenericArguments().ToArray();
            Assert.AreEqual(1, args.Length);
            Assert.AreEqual("V", args[0].Name);
            Assert.True(args[0].IsGenericParameter);

            var baseArgs = derivedType.BaseType.GetGenericArguments();
            Assert.AreEqual(new[] { typeof(int), typeof(string) }, baseArgs);
        }
    }
}