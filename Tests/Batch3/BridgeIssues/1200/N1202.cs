using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1202 - {0}")]
    public class Bridge1202
    {
        private static decimal decimalField;
        private static int intField;
        private static int[] array;

        private static void OutMethod(out int value)
        {
            value = 3;
        }

        private static void RefMethod(ref int value)
        {
            value++;
        }

        private static void OutMethod(out decimal value)
        {
            value = 7;
        }

        private static void RefMethod(ref decimal value)
        {
            value++;
        }

        [Test]
        public static void TestRefOutStaticIntField()
        {
            intField = 0;

            OutMethod(out intField);
            Assert.AreEqual(3, intField);

            RefMethod(ref intField);
            Assert.AreEqual(4, intField);
        }

        [Test]
        public static void TestRefOutLocal1DIntArray()
        {
            int[] localArr = new int[] { 0, 0 };

            OutMethod(out localArr[0]);
            Assert.AreEqual(3, localArr[0]);

            RefMethod(ref localArr[0]);
            Assert.AreEqual(4, localArr[0]);

            OutMethod(out localArr[localArr[1]]);
            Assert.AreEqual(3, localArr[localArr[1]]);

            RefMethod(ref localArr[localArr[1]]);
            Assert.AreEqual(4, localArr[localArr[1]]);
        }

        [Test]
        public static void TestRefOutStatic1DIntArray()
        {
            array = new int[] { 0, 0 };

            OutMethod(out array[0]);
            Assert.AreEqual(3, array[0]);

            RefMethod(ref array[0]);
            Assert.AreEqual(4, array[0]);

            OutMethod(out array[array[1]]);
            Assert.AreEqual(3, array[array[1]]);

            RefMethod(ref array[array[1]]);
            Assert.AreEqual(4, array[array[1]]);
        }

        [Test]
        public static void TestRefOutLocal2DIntArray()
        {
            int[,] array2D = new int[,] { { 0, 0 } };

            OutMethod(out array2D[0, 0]);
            Assert.AreEqual(3, array2D[0, 0]);

            RefMethod(ref array2D[0, 0]);
            Assert.AreEqual(4, array2D[0, 0]);

            OutMethod(out array2D[array2D[0, 1], array2D[0, 1]]);
            Assert.AreEqual(3, array2D[array2D[0, 1], array2D[0, 1]]);

            RefMethod(ref array2D[array2D[0, 1], array2D[0, 1]]);
            Assert.AreEqual(4, array2D[array2D[0, 1], array2D[0, 1]]);
        }

        [Test]
        public static void TestRefOutStaticDecimalField()
        {
            decimalField = 0;

            OutMethod(out decimalField);
            Assert.AreEqual("7", decimalField.ToString());

            RefMethod(ref decimalField);
            Assert.AreEqual("8", decimalField.ToString());
        }

        [Test]
        public static void TestRefOutLocal1DDecimalArray()
        {
            decimal[] localArr = new decimal[] { 0, 0 };

            OutMethod(out localArr[0]);
            Assert.AreEqual("7", localArr[0].ToString());

            RefMethod(ref localArr[0]);
            Assert.AreEqual("8", localArr[0].ToString());
        }

        [Test]
        public static void TestRefOutLocal2DDecimalArray()
        {
            decimal[,] array2D = new decimal[,] { { 0, 0 } };

            OutMethod(out array2D[0, 0]);
            Assert.AreEqual("7", array2D[0, 0].ToString());

            RefMethod(ref array2D[0, 0]);
            Assert.AreEqual("8", array2D[0, 0].ToString());
        }

        [Test]
        public static void TestInlineOutStaticIntField()
        {
            string s = "1";
            int i;
            intField = 0;

            Assert.True(int.TryParse(s, out i));
            Assert.AreEqual(1, i);

            Assert.True(int.TryParse(s, out intField));
            Assert.AreEqual(1, intField);
        }

        [Test]
        public static void TestInlineOutStatic1DIntArray()
        {
            string s = "1";
            array = new[] { 0, 0 };

            Assert.True(int.TryParse(s, out array[0]));
            Assert.AreEqual(1, array[0]);

            Assert.True(int.TryParse(s, out array[array[1]]));
            Assert.AreEqual(1, array[array[1]]);
        }

        [Test]
        public static void TestInlineOutLocal2DIntArray()
        {
            string s = "1";
            int[,] array2D = new int[,] { { 0, 0 } };

            Assert.True(int.TryParse(s, out array2D[0, 0]));
            Assert.AreEqual(1, array2D[0, 0]);

            Assert.True(int.TryParse(s, out array2D[array2D[0, 1], array2D[0, 1]]));
            Assert.AreEqual(1, array2D[array2D[0, 1], array2D[0, 1]]);
        }
    }
}