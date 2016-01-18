using Bridge;
using Bridge.Test;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#592]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#592 - {0}")]
    public class Bridge592
    {
        [Test(ExpectedCount = 6)]
        public static void TestUseCase()
        {
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

            Assert.AreEqual(i8_2, -1, "Bridge592 i8_2");
            Assert.AreEqual(u8_2, 0xF, "Bridge592 u8_2");
            Assert.AreEqual(i16_2, -1, "Bridge592 i16_2");
            Assert.AreEqual(u16_2, 0xFF, "Bridge592 u16_2");
            Assert.AreEqual(i32_2, -1, "Bridge592 i32_2");
            Assert.AreEqual(u32_2, 0xFFFF, "Bridge592 u32_2");
        }
    }
}