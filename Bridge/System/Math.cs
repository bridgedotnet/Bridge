using Bridge;

namespace System
{
    [External]
    [Name("Math")]
    public static class Math
    {
        [Name(false)]
        public static readonly double E = 0;

        [Name(false)]
        public static readonly double LN10 = 0;

        [Name(false)]
        public static readonly double LN2 = 0;

        [Name(false)]
        public static readonly double LOG2E = 0;

        [Name(false)]
        public static readonly double LOG10E = 0;

        [Name(false)]
        public static readonly double PI = 0;

        [Name(false)]
        public static readonly double SQRT1_2 = 0;

        [Name(false)]
        public static readonly double SQRT2 = 0;

        public static int Abs(int x)
        {
            return 0;
        }

        public static double Abs(double x)
        {
            return 0;
        }

        public static double Abs(long x)
        {
            return 0;
        }

        [Template("{l}.abs()")]
        public static extern decimal Abs(decimal l);

        public static int Max(params int[] values)
        {
            return 0;
        }

        public static double Max(params double[] values)
        {
            return 0;
        }

        public static double Max(params long[] values)
        {
            return 0;
        }

        public static double Max(params ulong[] values)
        {
            return 0;
        }

        [Template("Bridge.Decimal.max({*values})")]
        public static extern decimal Max(params decimal[] values);

        public static int Min(params int[] values)
        {
            return 0;
        }

        public static double Min(params double[] values)
        {
            return 0;
        }

        public static double Min(params long[] values)
        {
            return 0;
        }

        public static double Min(params ulong[] values)
        {
            return 0;
        }

        [Template("Bridge.Decimal.min({*values})")]
        public static extern decimal Min(params decimal[] values);

        public static double Random()
        {
            return 0;
        }

        public static double Sqrt(int x)
        {
            return 0;
        }

        public static double Sqrt(double x)
        {
            return 0;
        }

        [Template("{d}.ceil()")]
        public static extern decimal Ceiling(decimal d);

        [Name("ceil")]
        public static extern double Ceiling(double d);

        public static double Floor(double x)
        {
            return 0;
        }

        [Template("{d}.floor()")]
        public static extern decimal Floor(decimal d);

        [Template("Bridge.Decimal.round({x}, 6)")]
        public static decimal Round(decimal x)
        {
            return 0;
        }


        [Template("Bridge.Math.round({d}, 0, 6)")]
        public static extern double Round(double d);

        [Template("Math.round({d})")]
        public static extern double JsRound(double d);

        [Template("Bridge.Decimal.toDecimalPlaces({d}, {digits}, 6)")]
        public static extern decimal Round(decimal d, int digits);

        [Template("Bridge.Math.round({d}, {digits}, 6)")]
        public static extern double Round(double d, int digits);

        [Template("Bridge.Decimal.round({d}, {method})")]
        public static extern decimal Round(decimal d, MidpointRounding method);

        [Template("Bridge.Math.round({d}, 0, {method})")]
        public static extern double Round(double d, MidpointRounding method);

        [Template("Bridge.Decimal.toDecimalPlaces({d}, {digits}, {method})")]
        public static extern decimal Round(decimal d, int digits, MidpointRounding method);

        [Template("Bridge.Math.round({d}, {digits}, {method})")]
        public static extern double Round(double d, int digits, MidpointRounding method);

        [Template("{x} - ({y} * Math.round({x} / {y}))")]
        public static extern double IEEERemainder(double x, double y);

        public static double Exp(double x)
        {
            return 0;
        }

        [Template("{x}.exponential()")]
        public static decimal Exp(decimal x)
        {
            return 0;
        }

        [Template("{x}.ln()")]
        public static decimal Ln(decimal x)
        {
            return 0;
        }

        [Template("{x}.log({logBase})")]
        public static decimal Log(decimal x, decimal logBase)
        {
            return 0;
        }

        [Template("{x}.pow({y})")]
        public static decimal Pow(decimal x, decimal y)
        {
            return 0;
        }

        [Template("{x}.sqrt()")]
        public static decimal Sqrt(decimal x)
        {
            return 0;
        }

        public static double Log(double x)
        {
            return 0;
        }

        public static double Pow(double x, double y)
        {
            return 0;
        }

        public static double Pow(int x, int y)
        {
            return 0;
        }

        public static double Acos(double x)
        {
            return 0;
        }

        public static double Asin(double x)
        {
            return 0;
        }

        public static double Atan(double x)
        {
            return 0;
        }

        public static double Atan2(double y, double x)
        {
            return 0;
        }

        public static double Cos(double x)
        {
            return 0;
        }

        public static double Sin(double x)
        {
            return 0;
        }

        public static double Tan(double x)
        {
            return 0;
        }

        [Template("Bridge.Int.trunc({d})")]
        public static extern double Truncate(double d);

        [Template("{d}.trunc()")]
        public static extern decimal Truncate(decimal d);

        [Template("Bridge.Int.sign({value})")]
        public static extern int Sign(double value);

        [Template("{value}.sign()")]
        public static extern int Sign(decimal value);

        [Template("Bridge.Math.divRem({a}, {b}, {result})")]
        public static extern int DivRem(int a, int b, out int result);

        [Template("Bridge.Math.divRem({a}, {b}, {result})")]
        public static extern long DivRem(long a, long b, out long result);
    }
}
