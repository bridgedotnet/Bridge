using System;
using Bridge.Test;
using System.ComponentModel;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    public static class Bridge1653_Extensions
    {
        public static string GetSomething1<T>(T value)
        {
            return value.ToString();
        }

        public static string GetSomething<T>(this T value)
        {
            return value.ToString();
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1653 - {0}")]
    public class Bridge1653
    {
        public class Table<U, V>
        {
            public void Test()
            {
                var values = new[] { default(U) };

                var v1 = values.Select(value => value + " " + value.GetSomething());
                var v2 = values.Select(value => value + " " + Bridge1653_Extensions.GetSomething(value));
                var v3 = values.Select(value => value + " " + Bridge1653_Extensions.GetSomething1(value));
                var v4 = values.Select(value => value + "_" + Bridge1653_Extensions.GetSomething1("v4"));
            }
        }

        [Test]
        public void TestLiftedFunctionsWithGenericInvocation()
        {
            dynamic scope = Script.Get("$asm.$.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1653.Table$2");
            Assert.NotNull(scope.f1, "scope.f1 should exists");
            Assert.Null(scope.f2, "scope.f2 should be null");
            Assert.AreEqual(scope.f1(1), "1_v4", "scope.f1(1) should be 1_v4");
        }
    }
}