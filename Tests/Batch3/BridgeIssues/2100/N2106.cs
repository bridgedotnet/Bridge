using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2003 - {0}")]
    public class Bridge2106
    {
        [ObjectLiteral]
        public class c1<TA>
        {
            public TB m1<TB>(object p1)
            {
                return default(TB);
            }

            public bool m2<TB>(object p1)
            {
                c1<TA> oThis = this;
                return oThis.Is<c1<TA>>();
            }
        }

        public static void TestGenericMethodInObjectLiteral()
        {
            c1<string> o1 = new c1<string>();
            object o2 = new object();
            object o3 = o1.m1<int>(o2);

            Assert.AreEqual(0, o3);
            Assert.True(o1.Is<c1<string>>());
            Assert.True(o1.m2<int>(o2));
        }
    }
}
