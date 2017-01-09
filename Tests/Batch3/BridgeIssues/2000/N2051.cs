using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2051 - {0}")]
    [Reflectable]
    public class Bridge2051
    {
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
    }
}