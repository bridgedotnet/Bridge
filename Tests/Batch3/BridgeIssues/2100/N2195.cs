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
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine(ex.Message);
            }

            Assert.AreEqual(1, i);
        }
    }
}
