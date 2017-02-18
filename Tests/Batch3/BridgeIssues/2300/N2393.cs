using System;
using System.Linq;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2393 - {0}")]
    public class Bridge2393
    {
        public class c1
        {
            public string p1 { get; set; }
        }

        [ObjectLiteral(ObjectInitializationMode.DefaultValue, ObjectCreateMode.Constructor)]
        public class c2
        {
            public c2()
            {
                m1 = x_ =>
                {
                    c1 o1 = a1.FirstOrDefault(i_ => i_.p1 == x_.p3);
                };
            }

            public c1[] a1 { get; set; }
            public Action<dynamic> m1 { get; private set; }
        }

        [Test]
        public static void TestLambdaInLiteral()
        {
            Assert.NotNull(new c2().m1);
        }
    }
}