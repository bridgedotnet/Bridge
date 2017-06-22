using System;
using System.Collections.Generic;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2792 - {0}")]
    public class Bridge2792
    {
        public class A
        {
            public virtual string Name { get; }

            public A()
            {
                Name = "Fail";
            }
        }

        public class B : A
        {
            public override string Name => "Pass";
            public string BaseName => base.Name;
        }

        [Test]
        public static void TestOverridenReadOnlyProperty()
        {
            var b = new B();
            Assert.AreEqual("Pass", b.Name);
            Assert.AreEqual("Fail", b.BaseName);
        }
    }
}