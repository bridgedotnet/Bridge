using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2203 - {0}")]
    public class Bridge2203
    {
        [Test]
        public static void TestLocalVarsRenaming()
        {
#pragma warning disable 219
#pragma warning disable 162
            for (var n = 0; false;) ;
#pragma warning restore 162
#pragma warning restore 219

            for (var n = 1; n < 2; n++)
                for (var n1 = 2; n1 < 3; n1++)
                {
                    Assert.AreEqual(1, Script.Write<int>("n1"));
                    Assert.AreEqual(2, Script.Write<int>("n11"));
                    Assert.AreEqual(1, n);
                    Assert.AreEqual(2, n1);
                }

            var counter = 0;
            for (var n = 1; n < 2; n++)
            {
                for (var n1 = 2; n1 < 4; n1++)
                {
                    counter++;
                }
            }

            Assert.AreEqual(2, counter);
        }
    }
}