using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3540 - {0}")]
    public class Bridge3540
    {
        [Reflectable]
        public class Test
        {
            public int a;

            [Template("{a: 1}")]
            public extern Test();
        }

        static T TemplateMethod<T>() where T : class, new()
        {
            return new T();
        }

        [Test]
        public static void TestTemplateCtor()
        {
            var test = TemplateMethod<Test>();

            Assert.AreEqual(1, test.a);
        }
    }
}