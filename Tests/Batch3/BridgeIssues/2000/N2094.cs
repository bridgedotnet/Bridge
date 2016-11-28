using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2094 - {0}")]
    public class Bridge2094
    {
        private static string Outer1<T1>(T1 value)
        {
            return DoSomething(123, GetName);
        }

        private static string Outer2<T1>(T1 value)
        {
            return Bridge2094.DoSomething(value, Bridge2094.GetName);
        }

        private static T2 DoSomething<T1, T2>(T1 value, Func<T1, T2> work)
        {
            return work(value);
        }

        private static string GetName<T>(T value)
        {
            return value.GetType().Name;
        }

        [Test]
        public static void TestGenericMethodAsDelegate()
        {
            Assert.AreEqual("Int32", Outer1(123));
            Assert.AreEqual("Int32", Outer2(123));
        }
    }
}