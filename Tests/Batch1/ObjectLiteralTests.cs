using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest
{
    public class ObjectLiteralTests
    {
        [Category(Constants.MODULE_OBJECTLITERAL)]
        [TestFixture(TestNameFormat = "ObjectInitializationMode - {0}")]
        public class ObjectInitializationMode
        {
            [ObjectLiteral]
            public class Config1
            {
                public int Val1 = 1;
                public int Val2;

                public Config1()
                {
                    this.Val2 = 11;
                }
            }

            [ObjectLiteral(ObjectCreateMode.Constructor)]
            public class Config2
            {
                public int Val1 = 2;
                public int Val2;

                public Config2()
                {
                    this.Val2 = 12;
                }
            }

            [ObjectLiteral(ObjectCreateMode.Plain)]
            public class Config3
            {
                public int Val1 = 3;
                public int Val2;

                public Config3()
                {
                    this.Val2 = 13;
                }
            }

            [Test]
            public void Test()
            {
                var config1 = new Config1 { };
                Assert.NotNull(config1, "Default Mode config1 created");
                Assert.AreEqual(1, config1.Val1, "config1 Val1");
                Assert.AreEqual(11, config1.Val2, "config1 Val2");

                var config2 = new Config2 { };
                Assert.NotNull(config2, "Constructor Mode config2 created");
                Assert.AreEqual(2, config2.Val1, "config2 Val1");
                Assert.AreEqual(12, config2.Val2, "config2 Val2");

                var config3 = new Config3 { };
                Assert.NotNull(config3, "Plain Mode config3 created");
                Assert.Null(config3.Val1, "config3 Val1");
                Assert.Null(config3.Val2, "config3 Val2");

            }
        }
    }
}
