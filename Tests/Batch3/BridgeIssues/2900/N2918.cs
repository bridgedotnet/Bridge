using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2918 - {0}")]
    public class Bridge2918
    {
#pragma warning disable 1998
        static async Task<Bridge2918> P() => new Bridge2918();
#pragma warning restore 1998

        [Test]
        public static async void TestAsyncEquals()
        {
            var done = Assert.Async();
            Assert.False(new Bridge2918() == await P());
            done();
        }

        private static Bridge2918 instance = new Bridge2918();

#pragma warning disable 1998
        static async Task<Bridge2918> GetInstance() => instance;
#pragma warning restore 1998

        [Test]
        public static async void TestAsyncEquals2()
        {
            var done = Assert.Async();
            Assert.True(instance == await GetInstance());
            done();
        }
    }
}