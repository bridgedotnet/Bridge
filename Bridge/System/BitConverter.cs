using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace System
{
    [External]
    public static class BitConverter
    {
        public static extern byte[] GetBytes(bool value);

        public static extern byte[] GetBytes(char value);

        public static extern byte[] GetBytes(ushort value);

        public static extern byte[] GetBytes(short value);

        public static extern byte[] GetBytes(float value);

        public static extern byte[] GetBytes(double value);

        public static extern byte[] GetBytes(int value);

        public static extern byte[] GetBytes(uint value);

        public static extern byte[] GetBytes(long value);

        public static extern byte[] GetBytes(ulong value);

        public static extern bool ToBoolean(byte[] value, int index);

        public static extern double ToDouble(byte[] value, int index);

        public static extern float ToSingle(byte[] value, int index);

        public static extern string ToString(byte[] value, int startIndex = 0, int length = -1);

        public static extern long DoubleToInt64Bits(double value);

        public static extern double Int64BitsToDouble(long value);

        [Template("System.Int64([{0}, {1}])")]
        static extern long CreateLong(uint low, uint high);

        public static extern int ToInt32(byte[] value, int index);

        public static extern uint ToUInt32(byte[] value, int index);

        public static extern long ToInt64(byte[] value, int index);

        public static extern ulong ToUInt64(byte[] value, int index);

        public static extern short ToInt16(byte[] value, int index);

        public static extern ushort ToUInt16(byte[] value, int index);

        public static extern char ToChar(byte[] value, int index);

        [Template("({0}.shr({1} * 8).value.low & 255)")]
        public static extern byte ToByte(this long value, int bitRight = 0);

        [Template("({0}.shr({1} * 8).value.low & 255)")]
        public static extern byte ToByte(this ulong value, int bitRight = 0);
    }
}
