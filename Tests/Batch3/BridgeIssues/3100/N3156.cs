using System;
using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3156 - {0}")]
    public class Bridge3156
    {
        [Mixin("_$$.fn")]
        public static class MyStaticMethods
        {
            public static int MyMethod()
            {
                return 10;
            }
        }

        [Init(InitPosition.Top)]
        private static void GlobalInit()
        {
            Script.Write("var _$$ = {fn: {}};");
        }

        [Test]
        public static void TestMixin()
        {
            Assert.AreEqual(10, MyStaticMethods.MyMethod());
            Assert.AreEqual(10, Script.Write<int>("_$$.fn.MyMethod()"));
        }
    }
}