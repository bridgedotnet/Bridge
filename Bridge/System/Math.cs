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

		public static extern float Max(params float[] values);

        [Template("Bridge.Long.max({*values})")]
        public static extern long Max(params long[] values);

        [Template("Bridge.ULong.max({*values})")]
        public static extern ulong Max(params ulong[] values);

        [Template("Bridge.Decimal.max({*values})")]
        public static extern decimal Max(params decimal[] values);

        public static extern int Min(params int[] values);

        public static extern int Min(params uint[] values);

        public static extern double Min(params double[] values);

		public static extern float Min(params float[] value);

        [Template("Bridge.Long.min({*values})")]
        public static extern long Min(params long[] values);

        [Template("Bridge.ULong.min({*values})")]
        public static extern ulong Min(params ulong[] values);

        [Template("Bridge.Decimal.min({*values})")]
        public static extern decimal Min(params decimal[] values);

        public static extern double Random();

        public static extern double Sqrt(int x);

        public static extern double Sqrt(double x);

        [Template("{d}.ceil()")]
        public static extern decimal Ceiling(decimal d);

        [Name("ceil")]
        public static extern double Ceiling(double d);

		public static extern float Ceiling(float f);

        public static extern double Floor(double x);

		public static extern float Floor(float f);

        [Template("{d}.floor()")]
        public static extern decimal Floor(decimal d);

        [Template("Bridge.Decimal.round({x}, 6)")]
        public static extern decimal Round(decimal x);

		public static extern float Round(float f);

        [Template("Bridge.Math.round({d}, 0, 6)")]
        public static extern double Round(double d);

        [Template("Math.round({d})")]
        public static extern double JsRound(double d);

		public static extern float JsRound(float f);

        [Template("Bridge.Decimal.toDecimalPlaces({d}, {digits}, 6)")]
        public static extern decimal Round(decimal d, int digits);

        [Template("Bridge.Math.round({d}, {digits}, 6)")]
        public static extern double Round(double d, int digits);

		public static extern float Round(float f, int digits);

        [Template("Bridge.Decimal.round({d}, {method})")]
        public static extern decimal Round(decimal d, MidpointRounding method);

        [Template("Bridge.Math.round({d}, 0, {method})")]
        public static extern double Round(double d, MidpointRounding method);

		public static extern float Round(float f, MidpointRounding method);

        [Template("Bridge.Decimal.toDecimalPlaces({d}, {digits}, {method})")]
        public static extern decimal Round(decimal d, int digits, MidpointRounding method);

        [Template("Bridge.Math.round({d}, {digits}, {method})")]
        public static extern double Round(double d, int digits, MidpointRounding method);

		public static extern float Round(float f, int digits, MidpointRounding method);

        [Template("{x} - ({y} * Math.round({x} / {y}))")]
        public static extern double IEEERemainder(double x, double y);

        public static extern double Exp(double x);

		public static extern double Exp(float x);

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

		public static extern double Log(float x);

        public static extern double Pow(double x, double y);

        public static extern double Pow(int x, int y);

		public static extern double Pow(float x, float y);

        public static extern double Acos(double x);

		public static extern double Acos(float x);

        public static extern double Asin(double x);

		public static extern double Asin(float x);

        public static extern double Atan(double x);

		public static extern double Atan(float f);

        public static extern double Atan2(double y, double x);

		public static extern float Atan2(float y, float x);

        public static extern double Cos(double x);

		public static extern double Cos(float f);

        public static extern double Sin(double x);

		public static extern double Sin(float x);

        public static extern double Tan(double x);

		public static extern double Tan(float f);

        [Template("Bridge.Int.trunc({d})")]
        public static extern double Truncate(double d);

		public static extern float Truncate(float f);

        [Template("{d}.trunc()")]
        public static extern decimal Truncate(decimal d);

        [Template("Bridge.Int.sign({value})")]
        public static extern int Sign(double value);

        [Template("{value}.sign()")]
        public static extern int Sign(decimal value);

        [Template("Bridge.Math.divRem({a}, {b}, {result})")]
        public static extern int DivRem(int a, int b, out int result);

        [Template("Bridge.Long.divRem({a}, {b}, {result})")]
        public static extern long DivRem(long a, long b, out long result);
    }
}