using System;
using Bridge.Test.NUnit;
#pragma warning disable 649
#pragma warning disable 169

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2430 - {0}")]
    public class Bridge2430
    {
        public static int IntProp = 2;

        [ObjectLiteral(ObjectInitializationMode.DefaultValue)]
        class Data2
        {
            public int Value1 { get; set; } = default(int);

            [Field]
            public int Value2 { get; set; } = default(int);
        }

        [ObjectLiteral(ObjectInitializationMode.Initializer)]
        class Data3
        {
            public int Value1 { get; set; } = Bridge2430.IntProp;
            public int Value2 { get; set; } = 1;
            public int Value3 { get; set; }
            [Field]
            public int Value4 { get; set; } = Bridge2430.IntProp;
            [Field]
            public int Value5 { get; set; } = 1;
            [Field]
            public int Value6 { get; set; }
            public int Value7 = Bridge2430.IntProp;
            public int Value8 = 1;
            public int Value9;
        }

        [ObjectLiteral(ObjectInitializationMode.DefaultValue)]
        class Data4
        {
            public int Value1 { get; set; } = Bridge2430.IntProp;
            public int Value2 { get; set; } = 1;
            public int Value3 { get; set; }
            [Field]
            public int Value4 { get; set; } = Bridge2430.IntProp;
            [Field]
            public int Value5 { get; set; } = 1;
            [Field]
            public int Value6 { get; set; }
            public int Value7 = Bridge2430.IntProp;
            public int Value8 = 1;
            public int Value9;
        }

        [Test]
        public static void TestPropertyInitializer()
        {
            var d2 = new Data2();
            Assert.AreEqual(0, d2.Value1);
            Assert.AreEqual(0, d2.Value2);

            var d3 = new Data3();
            Assert.AreEqual(2, d3.Value1);
            Assert.AreEqual(1, d3.Value2);
            Assert.Null(d3.Value3);
            Assert.AreEqual(2, d3.Value4);
            Assert.AreEqual(1, d3.Value5);
            Assert.Null(d3.Value6);
            Assert.AreEqual(2, d3.Value7);
            Assert.AreEqual(1, d3.Value8);
            Assert.Null(d3.Value9);

            var d4 = new Data4();
            Assert.AreEqual(2, d4.Value1);
            Assert.AreEqual(1, d4.Value2);
            Assert.AreEqual(0, d4.Value3);
            Assert.AreEqual(2, d4.Value4);
            Assert.AreEqual(1, d4.Value5);
            Assert.AreEqual(0, d4.Value6);
            Assert.AreEqual(2, d4.Value7);
            Assert.AreEqual(1, d4.Value8);
            Assert.AreEqual(0, d4.Value9);
        }
    }
}