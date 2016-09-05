using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1529 - {0}")]
    public class Bridge1529
    {
        [ObjectLiteral]
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

            [Template("{this}.prop1")]
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

        [ObjectLiteral]
        public class DS : BS
        {
            public int field;
        }

        [ObjectLiteral]
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
}