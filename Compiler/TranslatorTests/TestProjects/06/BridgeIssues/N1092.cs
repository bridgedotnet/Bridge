namespace Test.BridgeIssues.N1092
{
    using System;

    public class App
    {
        public static void Main1()
        {
            // Should contain instruction to check data type range as cspoj contains <CheckForOverflowUnderflow>true</CheckForOverflowUnderflow>
            var maxInt32 = Int32.MaxValue;
            var rInt32Max = maxInt32 + 1;

            var maxUInt32 = UInt32.MaxValue;
            var rUInt32Max = maxUInt32 + 1;

            var maxLong = long.MaxValue;
            var rLongMax = maxLong + 1;

            var maxULong = ulong.MaxValue;
            var rUlongMax = maxULong + 1;
        }
    }
}