using System;
using System.Diagnostics.CodeAnalysis;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2330 - {0}")]
    public class Bridge2330
    {
        [Test]
        public static void TestMultipleTryCatchBlocks()
        {
#pragma warning disable 0168
            bool catched = false;
            string message = null;

            try
            {
                try
                {
                }
                catch (Exception e)
                {
                    throw;
                }

                try
                {
                    throw new Exception("Second try block");
                }
                catch (Exception e)
                {
                    throw;
                }
            }
            catch (Exception e)
            {
                message = e.Message;
                catched = true;
            }

            Assert.True(catched);
            Assert.AreEqual("Second try block", message);
#pragma warning restore 0168
        }
    }
}