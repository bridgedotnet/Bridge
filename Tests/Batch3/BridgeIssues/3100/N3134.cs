using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3134 - {0}")]
    public class Bridge3134
    {
        public interface ISomeWork
        {
            string Exec<T>(Action<float> progress = null);
        }

        public class SomeWork : ISomeWork
        {
            public string Exec<T>(Action<float> progress = null)
            {
                return (progress != null) ? "not empty" : "empty";
            }
        }

        [Test]
        public static void TestInterfaceOptionalParams()
        {
            ISomeWork work = new SomeWork();

            var result = work.Exec<bool>();

            Assert.AreEqual("empty", result);

            Action<float> af = (f) => { };
            var result1 = work.Exec<bool>(af);

            Assert.AreEqual("not empty", result1);
        }
    }
}