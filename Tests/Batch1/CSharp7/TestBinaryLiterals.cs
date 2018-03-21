using Bridge.Test.NUnit;

namespace Bridge.ClientTest.CSharp7
{
    /// <summary>
    /// The test here consists in ensuring C#7's binary literal expressions
    /// are supported by Bridge.
    /// </summary>
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Binary Literals - {0}")]
    public class TestBinaryLiterals
    {
        [Test]
        public static void TestBasic()
        {
            int c = 0B110010;
            int f = 0b110010 * 2;

            int binaryData = 0B0010_0111_0001_0000; // binary value of 10000   
            int hexaDecimalData = 0X2B_67; //HexaDecimal Value of 11,111   
            int decimalData = 104_567_789;
            int myCustomData = 1___________2__________3___4____5_____6;
            double realdata = 1_000.111_1e1_00;

            Assert.AreEqual(50, c, "'0B110010' can be parsed.");
            Assert.AreEqual(100, f, "'0b110010 * 2' can be parsed.");
            Assert.AreEqual(10000, binaryData, "'0B0010_0111_0001_0000' can be parsed.");
            Assert.AreEqual(11111, hexaDecimalData, "'0X2B_67' can be parsed.");
            Assert.AreEqual(104567789, decimalData, "'104_567_789' can be parsed.");
            Assert.AreEqual(123456, myCustomData, "'1___________2__________3___4____5_____6' can be parsed.");
            Assert.AreEqual(1.0001111E+103, realdata, "'1_000.111_1e1_00' can be parsed.");
        }
    }
}