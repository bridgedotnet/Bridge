using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#772]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#772 - {0}")]
    public class Bridge772
    {
        [Test(ExpectedCount = 10)]
        public static void TestUseCase()
        {
            //These arrays depend on "useTypedArray" bridge.json option
            var byteArray = new byte[1];
            var sbyteArray = new sbyte[2];
            var shortArray = new short[3];
            var ushortArray = new ushort[4];
            var intArray = new int[5];
            var uintArray = new uint[6];
            var floatArray = new float[7];
            var doubleArray = new double[8];

            //These arrays do not depend on "useTypedArray" bridge.json option
            var stringArray = new string[9];
            var decimalArray = new decimal[10];

            byteArray[0] = 1;
            sbyteArray[0] = 2;
            shortArray[0] = 3;
            ushortArray[0] = 4;
            intArray[0] = 5;
            uintArray[0] = 6;
            floatArray[0] = 7;
            doubleArray[0] = 8;

            stringArray[0] = "9";
            decimalArray[0] = 10m;

            Assert.AreEqual(1, byteArray[0], "get byteArray[0]");
            Assert.AreEqual(2, sbyteArray[0], "get sbyteArray[0]");
            Assert.AreEqual(3, shortArray[0], "get shortArray[0]");
            Assert.AreEqual(4, ushortArray[0], "get ushortArray[0]");
            Assert.AreEqual(5, intArray[0], "get intArray[0]");
            Assert.AreEqual(6, uintArray[0], "get uintArray[0]");
            Assert.AreEqual(7, floatArray[0], "get floatArray[0]");
            Assert.AreEqual(8, doubleArray[0], "get doubleArray[0]");

            Assert.AreEqual("9", stringArray[0], "get stringArray[0]");
            Assert.AreEqual(10m, decimalArray[0], "get decimalArray[0]");
        }
    }
}

