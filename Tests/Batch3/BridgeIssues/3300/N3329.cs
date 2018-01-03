using System;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3329 - {0}")]
    public class Bridge3329
    {
        enum MyEnum
        {
            One,
            Two
        }

        struct MyStruct
        {
        }

        [Test]
        public static void TestIsValueType()
        {
            Assert.True(MyEnum.One.GetType().IsValueType);
            Assert.True(typeof(MyStruct).IsValueType);
            Assert.True(typeof(System.Byte).IsValueType);
            Assert.True(typeof(System.SByte).IsValueType);
            Assert.True(typeof(System.Int16).IsValueType);
            Assert.True(typeof(System.UInt16).IsValueType);
            Assert.True(typeof(System.Int32).IsValueType);
            Assert.True(typeof(System.UInt32).IsValueType);
            Assert.True(typeof(System.Int64).IsValueType);
            Assert.True(typeof(System.UInt64).IsValueType);
            Assert.True(typeof(System.Decimal).IsValueType);
            Assert.True(typeof(System.Single).IsValueType);
            Assert.True(typeof(System.Double).IsValueType);
            Assert.True(typeof(System.Boolean).IsValueType);
            Assert.True(typeof(System.DateTime).IsValueType);

            Assert.False(typeof(System.String).IsValueType);
            Assert.False(typeof(System.Enum).IsValueType);
            Assert.False(typeof(System.Object).IsValueType);
        }
    }
}