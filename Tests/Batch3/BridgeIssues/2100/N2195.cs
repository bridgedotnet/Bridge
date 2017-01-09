using System;
using System.Linq;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2195 - {0}")]
    public class Bridge2195
    {
        static int Generic<T>()
        {
            return 1;
        }

        [Test]
        public static void TestGenericInvocationInTryBlock()
        {
            int i = 0;
            try
            {
                i = Generic<string>();
                Assert.AreEqual(1, i);
            }
            catch (ArgumentException ex)
            {
                Assert.Fail("Should not get into catch. However the test is to check the try/catch compiles successfully");
                Console.WriteLine(ex.Message);
            }
        }
    }
}
