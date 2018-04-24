using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.CSharp7
{
    /// <summary>
    /// Tests related to the reference return value and reference local value
    /// C#7 functionality.
    /// </summary>
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Ref return and ref local - {0}")]
    public class TestRefReturnAndLocal
    {
        class Score
        {
            public int value = 5;

            public ref int Get()
            {
                return ref this.value;
            }
        }

        private static void Change(int value)
        {
            value = 30;
        }

        /// <summary>
        /// General tests on the 'ref' functionality.
        /// </summary>
        [Test]
        public static void TestBasic()
        {
            var score = new Score();

            ref int highscore = ref score.Get();
            int anotherScore = score.Get();

            Assert.AreEqual(5, score.value, "Direct variable value is reachable.");
            Assert.AreEqual(5, highscore, "Returned reference value correctly points to the referenced variable.");
            Assert.AreEqual(5, anotherScore, "Returned reference can be assigned to non-reference variables.");

            highscore = 10;
            Assert.AreEqual(10, score.value, "Assigning a value to the referencing variable reflects in referenced variables.");

            anotherScore = 20;
            Assert.AreEqual(10, score.value, "Assigning a value to a non-referencing variable does not affect referenceable variables.");

            Change(highscore);

            Assert.AreEqual(10, highscore, "Changing the referenceable variable reflects in variables referencing it.");
            Assert.AreEqual(20, anotherScore, "Changing the referenceable variable does not affect non-referencing variabel.");
        }

        private static ref int ThirdElement(int[] array)
        {
            return ref array[2];
        }

        /// <summary>
        /// Tests changing an array contents by referencing its index entry.
        /// </summary>
        [Test]
        public static void TestBasic2()
        {
            int[] values = { 1, 2, 3, 4, 5 };

            Assert.AreEqual("1,2,3,4,5", string.Join(",", values), "The initial array values are the expected ones.");

            ref int value = ref ThirdElement(values);
            value = 10;

            Assert.AreEqual(10, value, "Value can be assigned to a reference variable pointing to an array's entry.");
            Assert.AreEqual(10, values[2], "The value modification is reflected in the referenced array entry.");
            Assert.AreEqual("1,2,10,4,5", string.Join(",", values), "The final modified array reflects the modification in the reference variable.");
        }

        /// <summary>
        /// Tests referencing a variable to another (pointer)-like.
        /// </summary>
        [Test]
        public static void TestBasic3()
        {
            int i = 5;

            ref int j = ref i;

            j = 10;

            Assert.AreEqual(10, i, "The non-reference variable has the expected queried value.");
            Assert.AreEqual(10, j, "The referenced variable inherited the value from the one it references.");
        }

        private static ref int Max(ref int first, ref int second)
        {
            if (first > second)
                return ref first;

            return ref second;
        }

        /// <summary>
        /// Tests reference-returning method as a way to select a variable
        /// conditionally.
        /// </summary>
        [Test]
        public static void TestBasic4()
        {
            int i = 5;
            int j = 10;

            Assert.AreEqual(5, i, "Non-reference-assigned value for i works.");
            Assert.AreEqual(10, j, "Non-reference-assigned value for j works.");

            // This should assign '20' to the variable with the bigger value (j).
            Max(ref i, ref j) = 20;

            Assert.AreEqual(5, i, "Reference returning method did not return the wrong value.");
            Assert.AreEqual(20, j, "Reference returning method assigned the expected variable.");
        }


        public struct Point3D
        {
            public double X { get; set; }
            public double Y { get; set; }
            public double Z { get; set; }

            private static Point3D origin = new Point3D();
            public static ref readonly Point3D Origin => ref origin;
        }

        readonly ref struct ReadOnlyRefPoint2D
        {
            public int X { get; }
            public int Y { get; }

            public ReadOnlyRefPoint2D(int x, int y) => (X, Y) = (x, y);
        }

        private static double CalculateDistance(in Point3D point1, in Point3D point2)
        {
            double xDifference = point1.X - point2.X;
            double yDifference = point1.Y - point2.Y;
            double zDifference = point1.Z - point2.Z;

            return Math.Sqrt(xDifference * xDifference + yDifference * yDifference + zDifference * zDifference);
        }

        /// <summary>
        /// This tests the 'in' parameters by just calling a static method
        /// which signature has it specified in its parameters' list.
        /// Also, the arguments passed reference a ref struct.
        /// </summary>
        [Test]
        public static void TestBasic5()
        {
            var distance = CalculateDistance(in Point3D.Origin, in Point3D.Origin);
            Assert.AreEqual(0, distance, "Method using the 'in' parameter modifier from ref struct works.");
        }
    }
}