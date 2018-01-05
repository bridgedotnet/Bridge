using System;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether the IsValueType boolean
    /// has the expected result for different types' querying.
    /// </summary>
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

        /// <summary>
        /// Test several variations of types whether they support the IsValueType property.
        /// </summary>
        [Test]
        public static void TestIsValueType()
        {
            // All these are supposed to be value types
            Assert.True(MyEnum.One.GetType().IsValueType, "MyEnum.One is value type.");
            Assert.True(typeof(byte).IsValueType, "'byte' ('" + typeof(byte).FullName + "') is value type");
            Assert.True(typeof(bool).IsValueType, "'bool' ('" + typeof(bool).FullName + "') is value type");
            Assert.True(typeof(short).IsValueType, "'short' ('" + typeof(short).FullName + "') is value type");
            Assert.True(typeof(int).IsValueType, "'int' ('" + typeof(int).FullName + "') is value type");
            Assert.True(typeof(long).IsValueType, "'long' ('" + typeof(long).FullName + "') is value type");
            Assert.True(typeof(float).IsValueType, "'float' ('" + typeof(float).FullName + "') is value type");
            Assert.True(typeof(double).IsValueType, "'double' ('" + typeof(double).FullName + "') is value type");
            Assert.True(typeof(byte?).IsValueType, "'byte?' ('" + typeof(byte?).FullName + "') is value type");
            Assert.True(typeof(bool?).IsValueType, "'bool?' ('" + typeof(bool?).FullName + "') is value type");
            Assert.True(typeof(short?).IsValueType, "'short?' ('" + typeof(short?).FullName + "') is value type");
            Assert.True(typeof(int?).IsValueType, "'int?' ('" + typeof(int?).FullName + "') is value type");
            Assert.True(typeof(long?).IsValueType, "'long?' ('" + typeof(long?).FullName + "') is value type");
            Assert.True(typeof(float?).IsValueType, "'float?' ('" + typeof(float?).FullName + "') is value type");
            Assert.True(typeof(double?).IsValueType, "'double?' ('" + typeof(double?).FullName + "') is value type");
            Assert.True(typeof(MyStruct).IsValueType, "'MyStruct' ('" + typeof(MyStruct).FullName + "') is value type");
            Assert.True(typeof(System.Byte).IsValueType, "'System.Byte' ('" + typeof(System.Byte).FullName + "') is value type");
            Assert.True(typeof(System.SByte).IsValueType, "'System.SByte' ('" + typeof(System.SByte).FullName + "') is value type");
            Assert.True(typeof(System.Int16).IsValueType, "'System.Int16' ('" + typeof(System.Int16).FullName + "') is value type");
            Assert.True(typeof(System.UInt16).IsValueType, "'System.UInt16' ('" + typeof(System.UInt16).FullName + "') is value type");
            Assert.True(typeof(System.Int32).IsValueType, "'System.Int32' ('" + typeof(System.Int32).FullName + "') is value type");
            Assert.True(typeof(System.UInt32).IsValueType, "'System.UInt32' ('" + typeof(System.UInt32).FullName + "') is value type");
            Assert.True(typeof(System.Int64).IsValueType, "'System.Int64' ('" + typeof(System.Int64).FullName + "') is value type");
            Assert.True(typeof(System.UInt64).IsValueType, "'System.UInt64' ('" + typeof(System.UInt64).FullName + "') is value type");
            Assert.True(typeof(System.Decimal).IsValueType, "'System.Decimal' ('" + typeof(System.Decimal).FullName + "') is value type");
            Assert.True(typeof(System.Single).IsValueType, "'System.Single' ('" + typeof(System.Single).FullName + "') is value type");
            Assert.True(typeof(System.Double).IsValueType, "'System.Double' ('" + typeof(System.Double).FullName + "') is value type");
            Assert.True(typeof(System.Boolean).IsValueType, "'System.Boolean' ('" + typeof(System.Boolean).FullName + "') is value type");
            Assert.True(typeof(System.DateTime).IsValueType, "'System.DateTime' ('" + typeof(System.DateTime).FullName + "') is value type");

            // These are not supposed to be value types.
            Assert.False(typeof(string).IsValueType, "'string' ('" + typeof(string).FullName + "') is value type");
            Assert.False(typeof(System.String).IsValueType, "'System.String' ('" + typeof(System.String).FullName + "') is value type");
            Assert.False(typeof(System.Enum).IsValueType, "'System.Enum' ('" + typeof(System.Enum).FullName + "') is value type");
            Assert.False(typeof(System.Object).IsValueType, "'System.Object' ('" + typeof(System.Object).FullName + "') is value type");
        }
    }
}