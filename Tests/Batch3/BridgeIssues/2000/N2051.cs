using System;
using System.Reflection;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2051 - {0}")]
    [Reflectable]
    public class Bridge2051
    {
        public void Test(int[] arr, int x)
        {
        }

        [Test]
        public static void TestGetElementType()
        {
            int[] array = { 1, 2, 3 };
            Type t = array.GetType();
            Type t2 = t.GetElementType();
            Assert.AreEqual(typeof(int[]), t);
            Assert.AreEqual(typeof(int), t2);
            Bridge2051 newMe = new Bridge2051();
            t = newMe.GetType();
            t2 = t.GetElementType();
            Assert.Null(t2);
        }

        [Test]
        public static void TestHasElementType()
        {
            int[] nums = { 1, 1, 2, 3, 5, 8, 13 };
            Type t = nums.GetType();
            Assert.True(t.HasElementType);

            t = typeof(Bridge2051[]);
            Assert.True(t.HasElementType);

            t = typeof(Bridge2051).MakeArrayType();
            Assert.True(t.HasElementType);

            MethodInfo mi = typeof(Bridge2051).GetMethod("Test");
            ParameterInfo[] parms = mi.GetParameters();
            t = parms[0].ParameterType;
            Assert.True(t.HasElementType);
            t = parms[1].ParameterType;
            Assert.False(t.HasElementType);
        }

        [Test]
        public static void TestMakeArrayType()
        {
            Type t = typeof(Bridge2051).MakeArrayType();
            Assert.AreEqual(typeof(Bridge2051[]), t);

            t = typeof(Bridge2051).MakeArrayType(2);
            Assert.AreEqual(typeof(Bridge2051[,]), t);
        }
    }
}