using Bridge.Test.NUnit;

namespace Bridge.ClientTest
{
    public class ObjectLiteralTests
    {
        [Category(Constants.MODULE_OBJECTLITERAL)]
        [TestFixture(TestNameFormat = "Methods and properties - {0}")]
        public class Bridge1529
        {
            [ObjectLiteral]
            public class Config
            {
                public string Temp
                {
                    get;
                    set;
                }

                public string GetTmp(Config config)
                {
                    return "1: " + config.Temp;
                }
            }

            [ObjectLiteral(ObjectCreateMode.Constructor)]
            public class BS
            {
                public int field1;
                public string field2;

                public BS()
                {
                    this.field1 = 10;
                    this.field2 = "test";
                }

                public BS(int i) : this()
                {
                    this.field1 = i;
                }

                public BS(string s) : this()
                {
                    this.field2 = s;
                }

                public int GetField1()
                {
                    return this.field1;
                }

                public string GetField2()
                {
                    return this.field2;
                }

                [Template("{this}.Prop1")]
                public extern int GetProp1();

                public static BS Create(int i, string s)
                {
                    return new BS { field1 = i, field2 = s };
                }

                public int Prop1
                {
                    get; set;
                }

                public string Prop2
                {
                    get; set;
                }

                public int ProxyField1
                {
                    get
                    {
                        return this.field1;
                    }
                    set
                    {
                        this.field1 = value;
                    }
                }

                public string ProxyField2
                {
                    get
                    {
                        return this.field2;
                    }
                    set
                    {
                        this.field2 = value;
                    }
                }

                public static int StaticProp
                {
                    get
                    {
                        return 11;
                    }
                }
            }

            [ObjectLiteral(ObjectCreateMode.Constructor)]
            public class DS : BS
            {
                public int field;
            }

            [ObjectLiteral(ObjectCreateMode.Constructor)]
            public class TS : BS
            {
                public TS() : base(8)
                {
                }
            }

#pragma warning disable CS0626 // Method, operator, or accessor is marked external and has no attributes on it

            [Template("Bridge.isPlainObject({o})")]
            public static extern bool IsPlainObject(object o);

#pragma warning restore CS0626 // Method, operator, or accessor is marked external and has no attributes on it

            [Test]
            public void TestObjectLiteral()
            {
                var c = new Config { Temp = "Frank" };
                var tempFrank = new Config { }.GetTmp(c);
                Assert.AreEqual("1: Frank", tempFrank, "Check call works");

                var options = new Bridge.ClientTestHelperExternal.AjaxOptions { Data = new { Name = c.Temp } };
                Assert.AreEqual("Frank", options.Data["Name"], "External referenced default ObjectLiteral works");

                var bs = new BS();
                Assert.True(Bridge1529.IsPlainObject(bs));
                Assert.AreEqual(10, bs.field1);
                Assert.AreEqual("test", bs.field2);
                Assert.AreEqual(10, bs.GetField1());
                Assert.AreEqual("test", bs.GetField2());
                Assert.AreEqual(0, bs.GetProp1());
                Assert.AreEqual(10, bs.ProxyField1);
                Assert.AreEqual("test", bs.ProxyField2);
                Assert.AreEqual(0, bs.Prop1);
                Assert.Null(bs.Prop2);
                Assert.AreEqual(11, BS.StaticProp);

                var bs1 = BS.Create(3, "test3");
                Assert.True(Bridge1529.IsPlainObject(bs1));
                Assert.AreEqual(3, bs1.field1);
                Assert.AreEqual("test3", bs1.field2);

                var bs2 = new BS(5);
                Assert.True(Bridge1529.IsPlainObject(bs2));
                Assert.AreEqual(5, bs2.field1);
                Assert.AreEqual("test", bs2.field2);

                var bs3 = new BS("test5");
                Assert.True(Bridge1529.IsPlainObject(bs3));
                Assert.AreEqual(10, bs3.field1);
                Assert.AreEqual("test5", bs3.field2);

                var ds1 = new DS { field = 9 };
                Assert.True(Bridge1529.IsPlainObject(ds1));
                Assert.AreEqual(9, ds1.field);
                Assert.AreEqual(10, ds1.field1);
                Assert.AreEqual("test", ds1.field2);
                Assert.AreEqual(0, ds1.Prop1);

                var ts = new TS();
                Assert.True(Bridge1529.IsPlainObject(ts));
                Assert.AreEqual(8, ts.field1);
            }
        }

        [Category(Constants.MODULE_OBJECTLITERAL)]
        [TestFixture(TestNameFormat = "ObjectCreateMode - {0}")]
        public class CreateModeTests
        {
            [ObjectLiteral(ObjectCreateMode.Constructor)]
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

            [ObjectLiteral]
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
                Assert.Null(config3.Val1, "config3 Val1");
                Assert.Null(config3.Val2, "config3 Val2");

                var config4 = new Config4 { };
                Assert.NotNull(config4, "Plain Mode config4 created");
                Assert.Null(config4.Val1, "config4 Val1");
                Assert.Null(config4.Val2, "config4 Val2");
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

        [Category(Constants.MODULE_OBJECTLITERAL)]
        [TestFixture(TestNameFormat = "Create<T> - {0}")]
        public class ObjectLiteralCreateTests
        {
            [ExternalInterface(false)]
            public interface Config1
            {
                int id
                {
                    get; set;
                }
            }

            [ExternalInterface(false)]
            public interface Config2: Config1
            {
                string Name
                {
                    get; set;
                }
            }

            public interface Config3
            {
                int id
                {
                    get; set;
                }
            }

            public interface Config4 : Config3
            {
                string Name
                {
                    get; set;
                }
            }

            [Test]
            public void TestExternalInterface()
            {
                var c = ObjectLiteral.Create<Config1>();
                c.id = 1;
                Assert.AreEqual(1, c.id);
                Assert.NotNull(c.GetHashCode());

                var c2 = ObjectLiteral.Create<Config2>();
                c2.id = 2;
                c2.Name = "Nancy";
                Assert.AreEqual(2, c2.id);
                Assert.AreEqual("Nancy", c2.Name);
                Assert.NotNull(c2.GetHashCode());

                var c21 = ObjectLiteral.Create<Config2>();
                c21.id = 2;
                c21.Name = "Nancy";
                Assert.False(c21 == c2);
                Assert.False(c21.Equals(c2));
                Assert.NotNull(c21.GetHashCode());

                c21.id = 21;
                Assert.False(c21 == c2);
                Assert.False(c21.Equals(c2));

                Config1 c3 = ObjectLiteral.Create<Config2>();
                c3.id = 3;
                Assert.AreEqual(3, c3.id);
                Assert.NotNull(c.GetHashCode());
            }

            [Test]
            public void TestClass()
            {
                var c = ObjectLiteral.Create<Config3>();
                c.id = 1;
                Assert.AreEqual(1, c.id);
                Assert.NotNull(c.GetHashCode());

                var c2 = ObjectLiteral.Create<Config4>();
                c2.id = 2;
                c2.Name = "Nancy";
                Assert.AreEqual(2, c2.id);
                Assert.AreEqual("Nancy", c2.Name);
                Assert.NotNull(c2.GetHashCode());

                var c21 = ObjectLiteral.Create<Config4>();
                c21.id = 2;
                c21.Name = "Nancy";
                Assert.False(c21 == c2);
                Assert.False(c21.Equals(c2));
                Assert.NotNull(c21.GetHashCode());

                c21.id = 21;
                Assert.False(c21 == c2);
                Assert.False(c21.Equals(c2));

                Config3 c3 = ObjectLiteral.Create<Config4>();
                c3.id = 3;
                Assert.AreEqual(3, c3.id);
                Assert.NotNull(c.GetHashCode());
            }
        }
    }
}