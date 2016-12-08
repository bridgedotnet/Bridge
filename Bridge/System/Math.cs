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

        public static extern int Abs(int x);

        public static extern double Abs(double x);

        [Template("{l}.abs()")]
        public static extern long Abs(long l);

        [Template("{l}.abs()")]
        public static extern decimal Abs(decimal l);

        public static extern int Max(params int[] values);

        public static extern int Max(params uint[] values);

        public static extern double Max(params double[] values);

        [Template("System.Int64.max({*values})")]
        public static extern long Max(params long[] values);

        [Template("System.UInt64.max({*values})")]
        public static extern ulong Max(params ulong[] values);

        [Template("System.Decimal.max({*values})")]
        public static extern decimal Max(params decimal[] values);

        public static extern int Min(params int[] values);

        public static extern int Min(params uint[] values);

        public static extern double Min(params double[] values);

        [Template("System.Int64.min({*values})")]
        public static extern long Min(params long[] values);

        [Template("System.UInt64.min({*values})")]
        public static extern ulong Min(params ulong[] values);

        [Template("System.Decimal.min({*values})")]
        public static extern decimal Min(params decimal[] values);

        public static extern double Random();

        public static extern double Sqrt(int x);

        public static extern double Sqrt(double x);

        [Template("{d}.ceil()")]
        public static extern decimal Ceiling(decimal d);

        [Name("ceil")]
        public static extern double Ceiling(double d);

        public static extern double Floor(double x);

        [Template("{d}.floor()")]
        public static extern decimal Floor(decimal d);

        [Template("System.Decimal.round({x}, 6)")]
        public static extern decimal Round(decimal x);

        [Template("Bridge.Math.round({d}, 0, 6)")]
        public static extern double Round(double d);

        [Template("Math.round({d})")]
        public static extern double JsRound(double d);

        [Template("System.Decimal.toDecimalPlaces({d}, {digits}, 6)")]
        public static extern decimal Round(decimal d, int digits);

        [Template("Bridge.Math.round({d}, {digits}, 6)")]
        public static extern double Round(double d, int digits);

        [Template("System.Decimal.round({d}, {method})")]
        public static extern decimal Round(decimal d, MidpointRounding method);

        [Template("Bridge.Math.round({d}, 0, {method})")]
        public static extern double Round(double d, MidpointRounding method);

        [Template("System.Decimal.toDecimalPlaces({d}, {digits}, {method})")]
        public static extern decimal Round(decimal d, int digits, MidpointRounding method);

        [Template("Bridge.Math.round({d}, {digits}, {method})")]
        public static extern double Round(double d, int digits, MidpointRounding method);

        [Template("{x} - ({y} * Math.round({x} / {y}))")]
        public static extern double IEEERemainder(double x, double y);

        public static extern double Exp(double x);

        [Template("{x}.exponential()")]
        public static extern decimal Exp(decimal x);

        [Template("{x}.ln()")]
        public static extern decimal Ln(decimal x);

        [Template("{x}.log({logBase})")]
        public static extern decimal Log(decimal x, decimal logBase);

        [Template("{x}.pow({y})")]
        public static extern decimal Pow(decimal x, decimal y);

        [Template("{x}.sqrt()")]
        public static extern decimal Sqrt(decimal x);

        public static extern double Log(double x);

        public static extern double Pow(double x, double y);

        public static extern double Pow(int x, int y);

        public static extern double Acos(double x);

        public static extern double Asin(double x);

        public static extern double Atan(double x);

        public static extern double Atan2(double y, double x);

        public static extern double Cos(double x);

        public static extern double Sin(double x);

        public static extern double Tan(double x);

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

        [Template("System.Int64.divRem({a}, {b}, {result})")]
        public static extern long DivRem(long a, long b, out long result);

        [Template("Bridge.Math.sinh({value})")]
        public static extern double Sinh(double value);

        [Template("Bridge.Math.cosh({value})")]
        public static extern double Cosh(double value);

        [Template("Bridge.Math.tanh({value})")]
        public static extern double Tanh(double value);
    }
}