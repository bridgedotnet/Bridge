using Bridge;
using System;
using System.Collections.Generic;

namespace Test.BridgeIssues.N2318
{
    // #2318
    class N2318
    {
        enum JustEnum
        {
            Value = 1
        }


        public void ShouldBox()
        {
            object o;

            JustEnum box1 = JustEnum.Value;
            Boolean box2 = true;
            DateTime box3 = new DateTime();
            Char box4 = 'a';
            Byte box5 = byte.MinValue;
            Double box6 = double.MinValue;
            Single box7 = float.MinValue;
            Int16 box8 = short.MinValue;
            Int32 box9 = int.MinValue;
            SByte box10 = sbyte.MinValue;
            UInt16 box11 = ushort.MinValue;
            UInt32 box12 = uint.MinValue;

            // The code below SHOULD contain box calls for standart primitives (except custim long, ulong, decimal) and enums #2318
            o = box1;
            o = box2;
            o = box3;
            o = box4;
            o = box5;
            o = box6;
            o = box7;
            o = box8;
            o = box9;
            o = box10;
            o = box11;
            o = box12;
        }

        struct JustStruct
        {
        }

        public void ShouldNotBox()
        {
            object o;

            JustStruct box1 = new JustStruct();
            Int64 box2 = long.MinValue;
            UInt64 box3 = ulong.MinValue;
            Decimal box4 = decimal.MinValue;
            String box5 = string.Empty;

            // The code below should NOT contain box calls for custom Bridge implementations of long/ulong/decimal user's structs (it is class in JS)#2318
            o = box1;
            o = box2;
            o = box3;
            o = box4;
            o = box5;

            // The code below should NOT contain box calls for string concatenation #2318
            var s1 = "";
            var s2 = s1 + s1;
            var s3 = s1 + 2;
        }

        public void ShouldUnbox()
        {
            var objectArray = new object[] { 1 };
            var objectList = new List<object>(new object[] { 1 });

            // The code below SHOULD contain box calls for standart primitives (except custim long, ulong, decimal) and enums #2318
            var unboxArray1 = (int)objectArray[0];
            var unboxArray2 = (JustEnum)objectArray[0];
            var unboxArray3 = (JustStruct)objectArray[0];
            var unboxArray4 = (DateTime)objectArray[0];
            var unboxArray5 = (long)objectArray[0];
            var unboxArray6 = (ulong)objectArray[0];
            var unboxArray7 = (decimal)objectArray[0];

            var unboxList1 = (int)objectList[0];
            var unboxList2 = (JustEnum)objectList[0];
            var unboxList3 = (JustStruct)objectList[0];
            var unboxList4 = (DateTime)objectList[0];
            var unboxList5 = (long)objectList[0];
            var unboxList6 = (ulong)objectList[0];
            var unboxList7 = (decimal)objectList[0];
        }
    }
}