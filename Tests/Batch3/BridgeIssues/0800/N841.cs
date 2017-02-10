using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#841]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#841 - {0}")]
    public class Bridge841
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            List<int> testListA = new List<int> { 1, 2 };

            int result = 0;
            foreach (var item in testListA)
            {
                Action fn = delegate { };

                switch (item)
                {
                    case 1:
                        result += 1;
                        break;

                    case 2:
                        result += 2;
                        break;
                }
            }

            Assert.AreEqual(3, result, "Bridge841");
        }
    }
}