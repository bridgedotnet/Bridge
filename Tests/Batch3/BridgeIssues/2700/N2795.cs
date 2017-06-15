using System;
using System.Collections.Generic;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2795 - {0}")]
    public class Bridge2795
    {
        [Virtual]
        public class Person
        {
        }

        public class Student : Person
        {
        }

        [Test]
        public static void TestVirtualType()
        {
            object s = new Student();
            Assert.True(s is Person);
        }
    }
}