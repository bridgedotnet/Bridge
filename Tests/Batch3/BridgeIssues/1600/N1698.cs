using System;
using Bridge;
using Bridge.Test.NUnit;

[assembly: Reflectable("System.Console")]

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1698 - {0}")]
    public class Bridge1698
    {
        private static string Output
        {
            get
            {
                return Bridge.Utils.Console.Instance.BufferedOutput;
            }

            set
            {
                Bridge.Utils.Console.Instance.BufferedOutput = value;
            }
        }

        [SetUp]
        public static void ClearOutput()
        {
            Output = "";
        }

        [TearDown]
        public static void ResetOutput()
        {
            Output = null;
            Bridge.Utils.Console.Hide();
        }

        [Test(ExpectedCount = 14)]
        public void TestReflectionForNativeTypes()
        {
            var t = typeof(System.Console).GetMethod("WriteLine", new[] { typeof(string) });

            Assert.NotNull(t, "Not null");
            Assert.True(t.IsPublic, "IsPublic");
            Assert.False(t.IsPrivate, "IsPrivate");
            Assert.False(t.IsConstructor, "IsConstructor");
            Assert.True(t.IsStatic, "IsStatic");
            Assert.AreEqual("WriteLine", t.Name, "Name");
            Assert.NotNull(t.ReturnType, "ReturnType not null");
            Assert.AreEqual("System.Void", t.ReturnType.FullName, "ReturnType");

            var parameters = t.GetParameters();
            Assert.NotNull(parameters, "parameters not null");
            Assert.AreEqual(1, parameters.Length, "parameters length");
            Assert.AreEqual("value", parameters[0].Name, "parameters[0] Name");
            Assert.False(parameters[0].IsOut, "parameters[0] IsOut");
            Assert.False(parameters[0].IsOptional, "parameters[0] IsOptional");

            try
            {
                t.Invoke(null, new[] { "Test #1698" });
                Assert.True(true, "Method executed");
            }
            catch (Exception ex)
            {
                Assert.Fail(ex.ToString());
            }
        }
    }
}