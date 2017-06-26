using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2847 - {0}")]
    public class Bridge2847
    {
        public static async Task<int> Test1()
        {
            switch (1)
            {
                case 1:
#pragma warning disable 168
                    float a;
#pragma warning restore 168
                    await Task.Delay(1);
                    break;
            }

            switch (1)
            {
                case 1:
#pragma warning disable 168
                    float a;
#pragma warning restore 168
                    await Task.Delay(1);
                    break;
            }

            return 1;
        }

        public static int Test2()
        {
            switch (1)
            {
                case 1:
#pragma warning disable 168
                    float a;
#pragma warning restore 168
                    break;
            }

            switch (1)
            {
                case 1:
#pragma warning disable 168
                    float a;
#pragma warning restore 168
                    break;
            }

            return 1;
        }

        [Test]
        public static void TestCommonSwitch()
        {
            Assert.AreEqual(1, Bridge2847.Test2());
        }

        [Test]
        public static async void TestAsyncSwitch()
        {
            var done = Assert.Async();
            Assert.AreEqual(1, await Bridge2847.Test1());

            done();
        }
    }
}