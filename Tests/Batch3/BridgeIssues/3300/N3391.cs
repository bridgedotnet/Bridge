using Bridge.Html5;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3391 - {0}")]
    public class Bridge3391
    {
        public enum BindingConst
        {
            Nulloid = 1
        }

        [Test]
        public static void TestBoxedEnumEquals()
        {
            object a = BindingConst.Nulloid;
            object b = a;

            Assert.True(a == b);
            Assert.True(a.Equals(b));
        }
    }
}