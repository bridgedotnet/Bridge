using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BasicCSharp
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Method parameters - {0}")]
    public class TestMethodParametersClass
    {
        private static int MethodDefault(int i = 5)
        {
            return i;
        }

        private static int MethodParams(params int[] n)
        {
            int sum = 0;
            for (int i = 0; i < n.Length; i++)
            {
                sum += n[i];
            }

            return sum;
        }

        [Test(ExpectedCount = 3)]
        public static void Test()
        {
            Assert.AreEqual(TestMethodParametersClass.MethodDefault(), 5, "Default parameter - 5");
            Assert.AreEqual(TestMethodParametersClass.MethodDefault(10), 10, "Default parameter - 10");

            Assert.AreEqual(TestMethodParametersClass.MethodParams(new[] { 1, 2, 3 }), 6, "params int[]");
        }
    }
}
