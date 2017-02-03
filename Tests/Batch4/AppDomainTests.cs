// #15
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "AppDomainTests - {0}")]
    public class AppDomainTests
    {
        [Test]
        public void GetAssembliesWorks_SPI_1646()
        {
            // #1646
            //var arr = AppDomain.CurrentDomain.GetAssemblies();
            //Assert.AreEqual(arr.Length, 2);
            //Assert.True(arr.Contains(typeof(int).Assembly), "#1");
            //Assert.True(arr.Contains(typeof(AppDomainTests).Assembly), "#2");
            // These tests below to preserve the test counter, uncomment the tests above when fixed
            Assert.AreEqual(2, 0);
            Assert.True(false, "#1");
            Assert.True(false, "#2");
        }
    }
}