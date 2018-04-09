using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2135 - {0}")]
    public class Bridge2135
    {
        [Name("_Bridge2135_1")]
        public class Class1
        {
            public class Config
            {
                public string Msg { get; set; }
            }
        }

        [Name("_Bridge2135_2")]
        public class Class2
        {
            public class Class2_1<T>
            {
                [IgnoreGeneric]
                public class Config
                {
                    public string Msg { get; set; }
                }
            }
        }

        [Name("_Bridge2135_3")]
        public class Class3
        {
            public class Config<T>
            {
                public string Msg { get; set; }
            }
        }

        [Name("_Bridge2135_4")]
        public class Class4
        {
            public class Class4_1<T>
            {
                public class Config
                {
                    public string Msg
                    {
                        get; set;
                    }
                }
            }
        }

        [Test]
        public static void TestNestedTypesNames()
        {
            Assert.AreEqual("_Bridge2135_1+Config", typeof(Class1.Config).FullName);
            Assert.AreEqual("_Bridge2135_2.Class2_1$1+Config", typeof(Class2.Class2_1<int>.Config).FullName);
            Assert.AreEqual("_Bridge2135_3.Config$1", typeof(Class3.Config<>).FullName);
            Assert.AreEqual("_Bridge2135_4.Class4_1$1.Config[[System.Object, mscorlib]]", typeof(Class4.Class4_1<object>.Config).FullName);
        }
    }
}
