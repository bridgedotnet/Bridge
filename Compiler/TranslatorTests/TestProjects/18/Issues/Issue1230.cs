using System;

namespace TestIssue1230
{
    public class Issue1230
    {
        public static void TestLong()
        {
            // Conversions should not have duplicated Bridge.Long: Bridge.Long(Bridge.Long(v))
            int v = 7;
            long l = (long)v;
            l = v;

            Console.WriteLine((long)v);
            Console.WriteLine((long)(v));
            Console.WriteLine((long)(1 + 1));
            Console.WriteLine((long)(2));
            Console.WriteLine((long)7);
            MethodLong(v);
            MethodLong((long)v);
        }

        public static void MethodLong(long l)
        {
        }

        public static void MethodDecimal(decimal l)
        {
        }

        public static void MethodInt(int l)
        {
        }

        public static void TestDecimal()
        {
            // Conversions should not have duplicated Bridge.Decimal: Bridge.Decimal(Bridge.Decimal(v))
            int v = 7;
            decimal l = (decimal)v;
            l = v;

            Console.WriteLine((decimal)v);
            Console.WriteLine((decimal)(v));
            Console.WriteLine((decimal)(1 + 1));
            Console.WriteLine((decimal)(2));
            Console.WriteLine((decimal)7);
            MethodDecimal(v);
            MethodDecimal((decimal)v);
        }

        public static void TestInt()
        {
            byte v = 7;
            int l = (int)v;
            l = v;

            Console.WriteLine((int)v);
            Console.WriteLine((int)(v));
            Console.WriteLine((int)(1 + 1));
            Console.WriteLine((int)(2));
            Console.WriteLine((int)7);
            MethodInt(v);
            MethodInt((int)v);
        }
    }
}
