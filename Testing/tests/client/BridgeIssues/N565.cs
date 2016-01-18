using Bridge;
using Bridge.Test;

using System;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#565]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#565 - {0}")]
    public class Bridge565
    {
        [Test(ExpectedCount = 7)]
        public static void TestUseCase()
        {
            var t1 = new Type();
            Assert.True(t1 != null, "#565 t1");

            var t2 = new ValueType();
            Assert.True(t2 != null, "#565 t2");

            var t3 = new IntPtr();
            Assert.True(t3.GetType() == typeof(IntPtr) , "#565 t3");

            var t4 = new UIntPtr();
            Assert.True(t4.GetType() == typeof(UIntPtr), "#565 t4");

            var t5 = new ParamArrayAttribute();
            Assert.True(t5 != null, "#565 t5");

            var t6 = new RuntimeTypeHandle();
            Assert.True(t6.GetType() == typeof(RuntimeTypeHandle), "#565 t6");

            var t7 = new RuntimeFieldHandle();
            Assert.True(t7.GetType() == typeof(RuntimeFieldHandle), "#565 t7");
        }
    }
}