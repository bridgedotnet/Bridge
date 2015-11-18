using Bridge;
using Bridge.QUnit;

using System;

namespace ClientTestLibrary
{
    // Bridge[#565]
    [FileName("testBridgeIssues.js")]
    internal class Bridge565
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(7);

            var t1 = new Type();
            assert.Ok(t1 != null, "#565 t1");

            var t2 = new ValueType();
            assert.Ok(t2 != null, "#565 t2");

            var t3 = new IntPtr();
            assert.Ok(t3.GetType() == typeof(IntPtr) , "#565 t3");

            var t4 = new UIntPtr();
            assert.Ok(t4.GetType() == typeof(UIntPtr), "#565 t4");

            var t5 = new ParamArrayAttribute();
            assert.Ok(t5 != null, "#565 t5");

            var t6 = new RuntimeTypeHandle();
            assert.Ok(t6.GetType() == typeof(RuntimeTypeHandle), "#565 t6");

            var t7 = new RuntimeFieldHandle();
            assert.Ok(t7.GetType() == typeof(RuntimeFieldHandle), "#565 t7");
        }
    }
}