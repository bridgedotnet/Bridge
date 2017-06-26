using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2855 - {0}")]
    public class Bridge2855
    {
        [Virtual]
        public class BaseClass
        {
            public class Sub1
            {
            }

            public interface I1
            {
            }
        }

        [Virtual]
        public class Person: Person.IPerson
        {
            public interface IPerson
            {
            }
        }

        [Test]
        public static void TestVirtualNestedClasses()
        {
            object sub1 = new BaseClass.Sub1();
            object b = new BaseClass();
            object sub1_1 = new BaseClass.Sub1();

            Assert.True(b is BaseClass);
            Assert.True(sub1 is BaseClass.Sub1);
            Assert.False(sub1 is BaseClass.I1);
            Assert.True(sub1_1 is BaseClass.Sub1);
            Assert.False(sub1_1 is BaseClass.I1);

            object p = new Person();
            Assert.True(p is Person);
            Assert.False(p is Person.IPerson);
            Assert.False(p is BaseClass);
            Assert.False(p is BaseClass.I1);

        }
    }
}