using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2056 - {0}")]
    public class Bridge2056
    {
        private class A
        {
        }

        private class B : A
        {
        }

        public class C
        {
        }

        [Test]
        public static void TestArrayCasting()
        {
            object arr1 = new string[0];
            object arr2 = new object[0];
            object arr3 = new string[1, 1];
            object arr4 = new object[1, 1];

            Assert.True(arr1 is string[]);
            Assert.True(arr1 is object[]);
            Assert.False(arr1 is int[]);
            Assert.False(arr1 is string[,]);

            Assert.False(arr2 is string[]);
            Assert.True(arr2 is object[]);
            Assert.False(arr2 is int[]);
            Assert.False(arr2 is string[,]);

            Assert.False(arr3 is string[]);
            Assert.False(arr3 is object[]);
            Assert.False(arr3 is int[]);
            Assert.True(arr3 is string[,]);

            Assert.False(arr4 is string[]);
            Assert.False(arr4 is object[]);
            Assert.False(arr4 is int[]);
            Assert.False(arr4 is string[,]);
            Assert.True(arr4 is object[,]);

            object arr5 = new B[0];
            object arr6 = new A[0];
            object arr7 = new B[1, 1];
            object arr8 = new A[1, 1];

            Assert.True(arr5 is B[]);
            Assert.True(arr5 is A[]);
            Assert.False(arr5 is C[]);
            Assert.False(arr5 is B[,]);

            Assert.False(arr6 is B[]);
            Assert.True(arr6 is A[]);
            Assert.False(arr6 is C[]);
            Assert.False(arr6 is B[,]);

            Assert.False(arr7 is B[]);
            Assert.False(arr7 is A[]);
            Assert.False(arr7 is C[]);
            Assert.True(arr7 is B[,]);

            Assert.False(arr8 is B[]);
            Assert.False(arr8 is A[]);
            Assert.False(arr8 is C[]);
            Assert.False(arr8 is B[,]);
            Assert.True(arr8 is A[,]);
        }

        [Test]
        public static void TestArrayTypeName()
        {
            Assert.AreEqual("Array", typeof(Array).FullName);
            Assert.AreEqual("System.Int32[]", typeof(int[]).FullName);
            Assert.AreEqual("System.Int32[,]", typeof(int[,]).FullName);
            Assert.AreEqual("System.Int32[,,]", typeof(int[,,]).FullName);
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056.B[]", typeof(B[]).FullName);
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge2056.B[,]", typeof(B[,]).FullName);
        }
    }
}