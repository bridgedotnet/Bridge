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

        public class Class3
        {
            public Class1 Property3
            {
                get;
            } = new Class1();
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

            var c3 = new Class3()
            {
                Property3 =
                {
                    SubProperty1 =
                    {
                        Property1 = "test3",
                        Property2 = 7
                    },

                    SubProperty2 =
                    {
                        Property1 = "test4",
                        Property2 = 8
                    }
                }
            };

            Assert.AreEqual("test3", c3.Property3.SubProperty1.Property1);
            Assert.AreEqual(7, c3.Property3.SubProperty1.Property2);
            Assert.AreEqual("test4", c3.Property3.SubProperty2.Property1);
            Assert.AreEqual(8, c3.Property3.SubProperty2.Property2);
        }
    }
}