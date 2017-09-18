using System;
using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3142 - {0}")]
    public class Bridge3142
    {
        [Reflectable]
        public class Class1
        {
            public extern string Prop
            {
                [Template("getProp()")]
                get;
            }

            private string getProp()
            {
                return "test";
            }
        }

        [Test]
        public static void TestTemplateInMetadata()
        {
            var pi = typeof(Class1).GetProperty("Prop");
            Assert.AreEqual("test", pi.GetValue(new Class1()));
        }
    }
}