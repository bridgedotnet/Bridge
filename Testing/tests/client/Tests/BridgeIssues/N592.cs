using Bridge;
using Bridge.QUnit;
using System;
using System.Collections.Generic;
using System.Text;

namespace ClientTestLibrary
{
    // Bridge[#592]
    [FileName("testBridgeIssues.js")]
    internal class Bridge592
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(6);

            SByte i8_1 = -2;
            SByte i8_2 = (SByte)(i8_1 >> 4);
            Byte u8_1 = 0xFE;
            Byte u8_2 = (Byte)(u8_1 >> 4);

            Int16 i16_1 = -2;
            Int16 i16_2 = (Int16)(i16_1 >> 8);
            UInt16 u16_1 = 0xFFFE;
            UInt16 u16_2 = (UInt16)(u16_1 >> 8);

            Int32 i32_1 = -2;
            Int32 i32_2 = i32_1 >> 16;
            UInt32 u32_1 = 0xFFFFFFFE;
            UInt32 u32_2 = u32_1 >> 16;

            assert.Equal(i8_2, -1, "Bridge592 i8_2");
            assert.Equal(u8_2, 0xF, "Bridge592 u8_2");
            assert.Equal(i16_2, -1, "Bridge592 i16_2");
            assert.Equal(u16_2, 0xFF, "Bridge592 u16_2");
            assert.Equal(i32_2, -1, "Bridge592 i32_2");
            assert.Equal(u32_2, 0xFFFF, "Bridge592 u32_2");
        }
    }
}