using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2469 - {0}")]
    public class Bridge2469
    {
        public class Class1<T>
        {
            private const string Hello = "Hello1";

            public static Func<string> Method()
            {
                return () => Hello;
            }
        }

        [IgnoreGeneric]
        public class Class2<T>
        {
            private const string Hello = "Hello2";

            public static Func<string> Method()
            {
                return () => Hello;
            }
        }

        [Test]
        public static void TestLambdaLiftingWithStaticGenericMember()
        {
            Assert.AreEqual("Hello1", Class1<int>.Method()());
            Assert.AreEqual("Hello2", Class2<int>.Method()());

            dynamic scope2 = Script.Get("$asm.$.Bridge.ClientTest.Batch3.BridgeIssues.Bridge2469.Class2$1");
            Assert.NotNull(scope2, "scope2 exists");
            Assert.NotNull(scope2.f1, "scope2.f1 exists");

            dynamic scope1 = Script.Get("$asm.$.Bridge.ClientTest.Batch3.BridgeIssues.Bridge2469.Class1$1");
            Assert.Null(scope1, "scope1 should not exist");
        }
    }
}