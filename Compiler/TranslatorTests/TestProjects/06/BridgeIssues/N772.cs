namespace Test.BridgeIssues.N772
{
    public class App
    {
        public static void Main1()
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
        }
    }
}