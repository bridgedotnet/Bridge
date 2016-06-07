using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1448 - {0}")]
    public class Bridge1448
    {
        class A
        {
            public int Data;
            public int DoSomething()
            {
                return Data;
            }
        }

        class Plainer
        {
            [Template("{o:plain}")]
            public static extern T ToPlainObject<T>(T o);
        }

        [ObjectLiteral]
        class Literal
        {
            public object V { get; set; }
        }

        [Test(ExpectedCount = 7)]
        public static void TestPlainForNonAnonymous()
        {
            var a = new A() { Data = 5 };

            var plainee = Plainer.ToPlainObject(a);

            Assert.NotNull(plainee, "plainee not null");
            Assert.NotNull(plainee["data"], "plainee has data");
            Assert.AreEqual(5, plainee.Data, "plainee.Data == 5");
            Assert.Null(plainee["getHashCode"], "plainee has no getHashCode");
            Assert.Null(plainee["toJSON"], "plainee has no toJSON");
            Assert.Null(plainee["$constructor"], "plainee has no $constructor");
            Assert.Null(plainee["equals"], "plainee has no equals");
        }

        [Test(ExpectedCount = 7)]
        public static void TestObjectLiteralProperty()
        {
            var a = new A() { Data = 5 };

            var l = new Literal() { V = new { Data = 5 } };

            var plainee = l.V;

            Assert.NotNull(plainee, "plainee not null");
            Assert.NotNull(plainee["data"], "plainee has data");
            Assert.AreEqual(5, plainee["data"], "plainee.Data == 5");
            Assert.Null(plainee["getHashCode"], "plainee has no getHashCode");
            Assert.Null(plainee["toJSON"], "plainee has no toJSON");
            Assert.Null(plainee["$constructor"], "plainee has no $constructor");
            Assert.Null(plainee["equals"], "plainee has no equals");
        }

        [Test(ExpectedCount = 7)]
        public static void TestToObjectLiteralAlias()
        {
            var o1 = Script.ToObjectLiteral(new { A = 1 });
            Assert.NotNull(o1, "o1 not null");
            Assert.AreEqual(1, o1.A, "o1.A == 1");

            Assert.Null(o1["getHashCode"], "o1 has no getHashCode");
            Assert.Null(o1["toJSON"], "o1 has no toJSON");
            Assert.Null(o1["$constructor"], "o1 has no $constructor");
            Assert.Null(o1["equals"], "o1 has no equals");
            Assert.NotNull(o1["a"], "o1 has a");
        }
    }
}
