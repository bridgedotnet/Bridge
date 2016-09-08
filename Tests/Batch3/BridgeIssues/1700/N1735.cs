using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1735 - {0}")]
    public class Bridge1735
    {
        private delegate void PropertySetter(object source);

        [Test]
        public void TestTryGetValueOutDelegateParameter()
        {
            var a = 1;

            var delegateCache = new Dictionary<string, PropertySetter>()
            {
                { "test", (source) => { a++; } }
            };

            PropertySetter setter;
            bool result = delegateCache.TryGetValue("test", out setter);

            Assert.True(result, "Get a setter from dictionary");

            setter(null);
            Assert.AreEqual(2, a, "Get the right setter from dictionary");
        }

        [Test]
        public void TestOutDelegateParameter()
        {
            var b = new Container() { Value = 7 };

            PropertySetter setter;

            var result = OutDelegateMethod(out setter);

            Assert.True(result, "Get a setter from OutDelegateMethod");

            setter(b);
            Assert.AreEqual(8, b.Value, "Get the right setter from OutDelegateMethod");
        }

        [Test]
        public void TestReferenceDelegateParameter()
        {
            var c = 9;

            PropertySetter setter = (source) => { c = c + 3; };

            var result = ReferenceDelegateMethod(ref setter);

            Assert.NotNull(result, "Get a setter from ReferenceDelegateMethod");

            setter(null);
            Assert.AreEqual(12, c, "Get the right setter from ReferenceDelegateMethod");
        }

        private static bool OutDelegateMethod(out PropertySetter setter)
        {
            setter = (source) => { ((Container)source).Value++; };

            return true;
        }

        private static PropertySetter ReferenceDelegateMethod(ref PropertySetter setter)
        {
            return setter;
        }

        private class Container
        {
            public int Value;
        }
    }
}