using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Test2954_1
{
    class Person
    {
        public static string Name
        {
            get; set;
        }
    }

    [Category(Bridge.ClientTest.Batch3.Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2954 - {0}")]
    public class Bridge2954
    {
        [Test]
        public static void TestLoopIndexRenaming()
        {
            // Bridge.NET will rename to $Test2954_1 to avoid conflict with root of namespace Test2954_1
            var Test2954_1 = 1;

            for (var Test2954_ = 0; Test2954_ < 1; Test2954_++)
            {
            }

            Person.Name = "Sally";

            // The following line was failing in javascript, because there is a generated local variable named Test2954_1 which
            // is hiding the global variable Test2954_1 corresponding to the root of namespace Test2954_1
            for (var Test2954_ = 0; Test2954_ < 1; Test2954_++)
            {
            }

            Assert.AreEqual(1, Test2954_1);
            Assert.AreEqual("Sally", Person.Name);
        }
    }
}