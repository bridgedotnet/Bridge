using Bridge.Test.NUnit;
using System;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Await in catch and finally - {0}")]
    public class TestAwaitInCatchFinally
    {
        [Test]
        public static async void TestBasic()
        {
            var done = Assert.Async();
            StringBuilder sb = new StringBuilder();

            sb.Append("1");
            try
            {
                sb.Append("2");
                throw new Exception();
            }
            catch (Exception)
            {
                sb.Append("3");
                await Task.Delay(1);
                sb.Append("4");
            }
            finally
            {
                sb.Append("5");
                await Task.Delay(1);
                sb.Append("6");
            }
            sb.Append("7");

            Assert.AreEqual("1234567", sb.ToString());
            done();
        }
    }
}