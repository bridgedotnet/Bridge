using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1217 - {0}")]
    public class Bridge1217
    {
        [Test]
        public static void TestTypeInferenceWithNamedArguments()
        {
            var r1 = GetNavigatorToTest1(
                initialUrl: "",
                navigatorGenerator: () => (DemoNavigator)null,
                assert: ""
            );
            Assert.AreEqual(typeof(DemoNavigator).FullName, r1);

            var r2 = GetNavigatorToTest1(
                initialUrl: "",
                assert: "",
                navigatorGenerator: () => (DemoNavigator)null
            );
            Assert.AreEqual(typeof(DemoNavigator).FullName, r2);

            var r3 = GetNavigatorToTest2(
               initialUrl: "",
               navigatorGenerator: (DemoNavigator)null,
               assert: ""
           );
            Assert.AreEqual(typeof(DemoNavigator).FullName, r3);

            var r4 = GetNavigatorToTest2(
               initialUrl: "",
               assert: "",
               navigatorGenerator: (DemoNavigator)null
           );
            Assert.AreEqual(typeof(DemoNavigator).FullName, r4);
        }

        private static string GetNavigatorToTest1<TNavigator>(
            string initialUrl,
            string assert,
            Func<TNavigator> navigatorGenerator)
                where TNavigator : Navigator
        {
            return typeof(TNavigator).FullName;
        }

        private static string GetNavigatorToTest2<TNavigator>(
            string initialUrl,
            string assert,
            TNavigator navigatorGenerator)
            where TNavigator : Navigator
        {
            return typeof(TNavigator).FullName;
        }

        public class Navigator { }

        public class DemoNavigator : Navigator { }
    }
}