using Bridge.Test;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1203 - {0}")]
    public class Bridge1203
    {
        [Init]
        public static void InitMethod1()
        {
            Action Bridge1203_a1 = () => { };
        }

        [Init(InitPosition.Before)]
        public static void InitMethod2()
        {
            Action Bridge1203_a2 = () => { };
        }

        [Test]
        public static void TestLiftedFunctionsInsideInitMethod()
        {
            dynamic scope = Script.Get("$asm.$.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1203");
            Assert.Null(scope, "scope should not exists");
        }
    }
}