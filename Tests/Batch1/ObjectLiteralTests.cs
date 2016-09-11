using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest
{
    public class ObjectLiteralTests
    {
        [Category(Constants.MODULE_OBJECTLITERAL)]
        [TestFixture(TestNameFormat = "ObjectCreateMode - {0}")]
        public class CreateModeTests
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

            [ObjectLiteral(ObjectCreateMode.Plain)]
            public class Config4
            {
                public int Val1 = 4;
                public int Val2 = 104;

                public Config4()
                {
                    this.Val2 = 14;
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
                Assert.AreEqual(3, config3.Val1, "config3 Val1");
                Assert.AreEqual(0, config3.Val2, "config3 Val2");

                var config4 = new Config4 { };
                Assert.NotNull(config4, "Plain Mode config4 created");
                Assert.AreEqual(4, config4.Val1, "config4 Val1");
                Assert.AreEqual(104, config4.Val2, "config4 Val2");
            }
        }

        [Category(Constants.MODULE_OBJECTLITERAL)]
        [TestFixture(TestNameFormat = "ObjectInitializationMode - {0}")]
        public class InitializationModeTests
        {
            [ObjectLiteral]
            public class Config1
            {
                public int Val1 = 1;
                public int Val2;
            }


            [ObjectLiteral(ObjectInitializationMode.DefaultValue)]
            public class Config2
            {
                public int Val1 = 2;
                public int Val2;
            }

            [ObjectLiteral(ObjectInitializationMode.Initializer)]
            public class Config3
            {
                public int Val1 = 3;
                public int Val2;
            }

            [ObjectLiteral(ObjectInitializationMode.Ignore)]
            public class Config4
            {
                public int Val1 = 4;
                public int Val2;
            }

            [Test]
            public void Test()
            {
                var config1 = new Config1 { };
                Assert.NotNull(config1, "Default Mode config1 created");
                Assert.Null(config1.Val1, "config1 Val1");
                Assert.Null(config1.Val2, "config1 Val2");

                var config2 = new Config2 { };
                Assert.NotNull(config2, "DefaultValue Mode config2 created");
                Assert.AreEqual(2, config2.Val1, "config2 Val1");
                Assert.AreEqual(0, config2.Val2, "config2 Val2");

                var config3 = new Config3 { };
                Assert.NotNull(config3, "Initializer Mode config3 created");
                Assert.AreEqual(3, config3.Val1, "config3 Val1");
                Assert.Null(config3.Val2, "config3 Val2");

                var config4 = new Config4 { };
                Assert.NotNull(config4, "Ignore Mode config4 created");
                Assert.Null(config4.Val1, "config4 Val1");
                Assert.Null(config4.Val2, "config4 Val2");
            }
        }

        [Category(Constants.MODULE_OBJECTLITERAL)]
        [TestFixture(TestNameFormat = "CreateAndInitializationModes - {0}")]
        public class CreateAndInitializationModesTests
        {
            [ObjectLiteral(ObjectInitializationMode.DefaultValue, ObjectCreateMode.Constructor)]
            public class Config1
            {
                public int Val1 = 1;
                public int Val2;

                public Config1()
                {
                    this.Val2 = 11;
                }
            }

            [ObjectLiteral(ObjectInitializationMode.DefaultValue, ObjectCreateMode.Plain)]
            public class Config2
            {
                public int Val1 = 2;
                public int Val2;

                public Config2()
                {
                    this.Val2 = 12;
                }
            }

            [ObjectLiteral(ObjectInitializationMode.Ignore, ObjectCreateMode.Constructor)]
            public class Config3
            {
                public int Val1 = 3;
                public int Val2;

                public Config3()
                {
                    this.Val2 = 13;
                }
            }

            [ObjectLiteral(ObjectInitializationMode.Ignore, ObjectCreateMode.Plain)]
            public class Config4
            {
                public int Val1 = 4;
                public int Val2;

                public Config4()
                {
                    this.Val2 = 14;
                }
            }

            [ObjectLiteral(ObjectInitializationMode.Initializer, ObjectCreateMode.Constructor)]
            public class Config5
            {
                public int Val1 = 5;
                public int Val2;

                public Config5()
                {
                    this.Val2 = 15;
                }
            }

            [ObjectLiteral(ObjectInitializationMode.Initializer, ObjectCreateMode.Plain)]
            public class Config6
            {
                public int Val1 = 6;
                public int Val2;

                public Config6()
                {
                    this.Val2 = 16;
                }
            }


            [Test]
            public void Test()
            {
                var config1 = new Config1 { };
                Assert.NotNull(config1, "DefaultValue and Construtor Modes config1 created");
                Assert.AreEqual(1, config1.Val1, "config1 Val1");
                Assert.AreEqual(11, config1.Val2, "config1 Val2");

                var config2 = new Config2 { };
                Assert.NotNull(config2, "DefaultValue and Plain Modes config2 created");
                Assert.AreEqual(2, config2.Val1, "config2 Val1");
                Assert.AreEqual(0, config2.Val2, "config2 Val2");

                var config3 = new Config3 { };
                Assert.NotNull(config3, "Ignore and Construtor Modes config3 created");
                Assert.AreEqual(3, config3.Val1, "config3 Val1");
                Assert.AreEqual(13, config3.Val2, "config3 Val2");

                var config4 = new Config4 { };
                Assert.NotNull(config4, "Ignore and Plain Modes config4 created");
                Assert.Null(config4.Val1, "config4 Val1");
                Assert.Null(config4.Val2, "config4 Val2");

                var config5 = new Config5 { };
                Assert.NotNull(config5, "Initializer and Construtor Modes config5 created");
                Assert.AreEqual(5, config5.Val1, "config5 Val1");
                Assert.AreEqual(15, config5.Val2, "config5 Val2");

                var config6 = new Config6 { };
                Assert.NotNull(config6, "Initializer and Plain Modes config6 created");
                Assert.AreEqual(6, config6.Val1, "config6 Val1");
                Assert.Null(config6.Val2, "config6 Val2");
            }
        }
    }
}
