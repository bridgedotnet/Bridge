using System;
using System.Text.RegularExpressions;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2635 - {0}")]
    public class Bridge2635
    {
        public class Class1
        {
            public Class2 SubProperty1
            {
                get;
            } = new Class2();

            public Class2 SubProperty2
            {
                get;
                set;
            } = new Class2();
        }

        public class Class2
        {
            public string Property1
            {
                get;
                set;
            }

            public int Property2
            {
                get;
                set;
            }
        }

        [Test]
        public static void TestInitializers()
        {
            var c = new Class1
            {
                SubProperty1 =
                {
                    Property1 = "test",
                    Property2 = 5
                },

                SubProperty2 =
                {
                    Property1 = "test2",
                    Property2 = 6
                }
            };

            Assert.AreEqual("test", c.SubProperty1.Property1);
            Assert.AreEqual(5, c.SubProperty1.Property2);
            Assert.AreEqual("test2", c.SubProperty2.Property1);
            Assert.AreEqual(6, c.SubProperty2.Property2);
        }
    }
}