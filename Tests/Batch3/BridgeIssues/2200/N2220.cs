using System;
using System.Reflection;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2220 - {0}")]
    [Reflectable]
    public class Bridge2220
    {
        public void Test(int[] arr, int x)
        {
        }

        [Test]
        public static void TestHasElementType()
        {
            int[] nums = { 1, 1, 2, 3, 5, 8, 13 };
            Type t = nums.GetType();

            Assert.True(t.HasElementType);

            t = typeof(Bridge2220[]);
            Assert.True(t.HasElementType);

            MethodInfo mi = typeof(Bridge2220).GetMethod("Test");
            ParameterInfo[] parms = mi.GetParameters();

            t = parms[0].ParameterType;
            Assert.True(t.HasElementType);

            t = parms[1].ParameterType;
            Assert.False(t.HasElementType);
        }
    }
}