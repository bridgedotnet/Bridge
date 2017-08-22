using System;
using Bridge.Test.NUnit;
using Bridge.Html5;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3076 - {0}")]
    public class Bridge3076
    {
        [Test]
        public static void TestGuidStringify()
        {
            var guid = Guid.NewGuid();
            Assert.AreEqual("\"" + guid.ToString() + "\"", JSON.Stringify(guid));

            var obj = Script.ToPlainObject(new { guid });
            Assert.AreEqual($"{{\"guid\":\"{guid.ToString()}\"}}", JSON.Stringify(obj));
        }
    }
}