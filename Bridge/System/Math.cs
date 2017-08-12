﻿using Bridge;

namespace System
{
    [External]
    [Name("Math")]
    public static class Math
    {
        [Convention]
        public const double E = 2.71828182845905;

        [Convention]
        public const double PI = 3.14159265358979;

        /// <summary>Returns the absolute value of a 32-bit signed integer.</summary>
        ///       <param name="value">A number that is greater than <see cref="F:System.Int32.MinValue" />, but less than or equal to <see cref="F:System.Int32.MaxValue" />.</param>
        ///       <returns>A 32-bit signed integer, x, such that 0 ≤ x ≤<see cref="F:System.Int32.MaxValue" />.</returns>
        ///       <exception cref="T:System.OverflowException">
        ///         <paramref name="value" /> equals <see cref="F:System.Int32.MinValue" />. </exception>
        public static extern int Abs(int value);

        /// <summary>Returns the absolute value of a single-precision floating-point number.</summary>
        ///       <param name="value">A number that is greater than or equal to <see cref="F:System.Single.MinValue" />, but less than or equal to <see cref="F:System.Single.MaxValue" />.</param>
        ///       <returns>A single-precision floating-point number, x, such that 0 ≤ x ≤<see cref="F:System.Single.MaxValue" />.</returns>
        public static extern float Abs(float value);

        /// <summary>Returns the absolute value of a double-precision floating-point number.</summary>
        ///       <param name="value">A number that is greater than or equal to <see cref="F:System.Double.MinValue" />, but less than or equal to <see cref="F:System.Double.MaxValue" />.</param>
        ///       <returns>A double-precision floating-point number, x, such that 0 ≤ x ≤<see cref="F:System.Double.MaxValue" />.</returns>
        public static extern double Abs(double value);

        /// <summary>Returns the absolute value of a 64-bit signed integer.</summary>
        ///       <param name="value">A number that is greater than <see cref="F:System.Int64.MinValue" />, but less than or equal to <see cref="F:System.Int64.MaxValue" />.</param>
        ///       <returns>A 64-bit signed integer, x, such that 0 ≤ x ≤<see cref="F:System.Int64.MaxValue" />.</returns>
        ///       <exception cref="T:System.OverflowException">
        ///         <paramref name="value" /> equals <see cref="F:System.Int64.MinValue" />. </exception>
        [Template("{0}.abs()")]
        public static extern long Abs(long value);

        ///    <summary>Returns the absolute value of a <see cref="T:System.Decimal" /> number.</summary>
        /// <param name="value">A number that is greater than or equal to <see cref="F:System.Decimal.MinValue" />, but less than or equal to <see cref="F:System.Decimal.MaxValue" />. </param>
        /// <returns>A decimal number, x, such that 0 ≤ x ≤<see cref="F:System.Decimal.MaxValue" />.</returns>
        [Template("{0}.abs()")]
        public static extern Decimal Abs(Decimal value);

        /// <summary>Returns the absolute value of a 16-bit signed integer.</summary>
        ///       <param name="value">A number that is greater than <see cref="F:System.Int16.MinValue" />, but less than or equal to <see cref="F:System.Int16.MaxValue" />.</param>
        ///       <returns>A 16-bit signed integer, x, such that 0 ≤ x ≤<see cref="F:System.Int16.MaxValue" />.</returns>
        ///       <exception cref="T:System.OverflowException">
        ///         <paramref name="value" /> equals <see cref="F:System.Int16.MinValue" />. </exception>
        public static extern short Abs(short value);

        /// <summary>Returns the absolute value of an 8-bit signed integer.</summary>
        ///       <param name="value">A number that is greater than <see cref="F:System.SByte.MinValue" />, but less than or equal to <see cref="F:System.SByte.MaxValue" />.</param>
        ///       <returns>An 8-bit signed integer, x, such that 0 ≤ x ≤<see cref="F:System.SByte.MaxValue" />.</returns>
        ///       <exception cref="T:System.OverflowException">
        ///         <paramref name="value" /> equals <see cref="F:System.SByte.MinValue" />. </exception>
        public static extern sbyte Abs(sbyte value);

        public static extern double Acos(double x);

        public static extern double Asin(double x);

        public static extern double Atan(double x);

        public static extern double Atan2(double y, double x);

        [Template("{d}.ceil()")]
        public static extern Decimal Ceiling(Decimal d);

        [Name("ceil")]
        public static extern double Ceiling(double d);

        public static extern double Cos(double x);

        [Template("Bridge.Math.cosh({value})")]
        public static extern double Cosh(double value);

        [Template("Bridge.Math.divRem({a}, {b}, {result})")]
        public static extern int DivRem(int a, int b, out int result);

        [Template("System.Int64.divRem({a}, {b}, {result})")]
        public static extern long DivRem(long a, long b, out long result);

        public static extern double Exp(double x);

        [Template("{x}.exponential()")]
        public static extern Decimal Exp(Decimal x);

        public static extern double Floor(double x);

        [Template("{d}.floor()")]
        public static extern Decimal Floor(Decimal d);

        [Template("{x} - ({y} * Math.round({x} / {y}))")]
        public static extern double IEEERemainder(double x, double y);

        [Template("Math.round({d})")]
        public static extern double JsRound(double d);

        [Template("Bridge.Math.log({x})")]
        public static extern double Log(double x);

        [Template("Bridge.Math.logWithBase({x}, {logBase})")]
        public static extern double Log(double x, double logBase);

        [Template("Bridge.Math.logWithBase({x}, 10.0)")]
        public static extern double Log10(double x);

        /// <summary>
        /// Returns the larger of two 8-bit unsigned integers.
        /// </summary>
        /// <param name="val1">The first of two 8-bit unsigned integers to compare.</param>
        /// <param name="val2">The second of two 8-bit unsigned integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is larger.</returns>
        public static extern byte Max(byte val1, byte val2);

        /// <summary>
        /// Returns the larger of two 8-bit signed integers.
        /// </summary>
        /// <param name="val1">The first of two 8-bit signed integers to compare.</param>
        /// <param name="val2">The second of two 8-bit signed integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is larger.</returns>
        public static extern sbyte Max(sbyte val1, sbyte val2);

        /// <summary>
        /// Returns the larger of two 16-bit signed integers.
        /// </summary>
        /// <param name="val1">The first of two 16-bit signed integers to compare.</param>
        /// <param name="val2">The second of two 16-bit signed integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is larger.</returns>
        public static extern short Max(short val1, short val2);

        /// <summary>
        /// Returns the larger of two 16-bit unsigned integers.
        /// </summary>
        /// <param name="val1">The first of two 16-bit unsigned integers to compare.</param>
        /// <param name="val2">The second of two 16-bit unsigned integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is larger.</returns>
        public static extern ushort Max(ushort val1, ushort val2);

        /// <summary>
        /// Returns the larger of two single-precision floating-point numbers.
        /// </summary>
        /// <param name="val1">The first of two single-precision floating-point numbers to compare.</param>
        /// <param name="val2">The second of two single-precision floating-point numbers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is larger.</returns>
        public static extern float Max(float val1, float val2);

        /// <summary>
        /// Returns the larger of two 32-bit signed integers.
        /// </summary>
        /// <param name="val1">The first of two 32-bit signed integers to compare.</param>
        /// <param name="val2">The second of two 32-bit signed integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is larger.</returns>
        public static extern int Max(int val1, int val2);

        /// <summary>
        /// Returns the larger of two 32-bit unsigned integers.
        /// </summary>
        /// <param name="val1">The first of two 32-bit unsigned integers to compare.</param>
        /// <param name="val2">The second of two 32-bit unsigned integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is larger.</returns>
        public static extern uint Max(uint val1, uint val2);

        /// <summary>
        /// Returns the larger of two double-precision floating-point numbers.
        /// </summary>
        /// <param name="val1">The first of two double-precision floating-point numbers to compare.</param>
        /// <param name="val2">The second of two double-precision floating-point numbers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is larger.</returns>
        public static extern double Max(double val1, double val2);

        /// <summary>
        /// Returns the larger of two 64-bit signed integers.
        /// </summary>
        /// <param name="val1">The first of two 64-bit signed integers to compare.</param>
        /// <param name="val2">The second of two 64-bit signed integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is larger.</returns>
        [Template("System.Int64.max({val1}, {val2})")]
        public static extern long Max(long val1, long val2);

        /// <summary>
        /// Returns the larger of two 64-bit unsigned integers.
        /// </summary>
        /// <param name="val1">The first of two 64-bit unsigned integers to compare.</param>
        /// <param name="val2">The second of two 64-bit unsigned integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is larger.</returns>
        [Template("System.UInt64.max({val1}, {val2})")]
        public static extern ulong Max(ulong val1, ulong val2);

        /// <summary>
        /// Returns the larger of two decimal numbers.
        /// </summary>
        /// <param name="val1">The first of two decimal numbers to compare.</param>
        /// <param name="val2">The second of two decimal numbers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is larger.</returns>
        [Template("System.Decimal.max({val1}, {val2})")]
        public static extern Decimal Max(Decimal val1, Decimal val2);

        /// <summary>
        /// Returns the smaller of two 8-bit unsigned integers.
        /// </summary>
        /// <param name="val1">The first of two 8-bit unsigned integers to compare.</param>
        /// <param name="val2">The second of two 8-bit unsigned integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is smaller.</returns>
        public static extern byte Min(byte val1, byte val2);

        /// <summary>
        /// Returns the smaller of two 8-bit signed integers.
        /// </summary>
        /// <param name="val1">The first of two 8-bit signed integers to compare.</param>
        /// <param name="val2">The second of two 8-bit signed integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is smaller.</returns>
        public static extern sbyte Min(sbyte val1, sbyte val2);

        /// <summary>
        /// Returns the smaller of two 16-bit signed integers.
        /// </summary>
        /// <param name="val1">The first of two 16-bit signed integers to compare.</param>
        /// <param name="val2">The second of two 16-bit signed integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is smaller.</returns>
        public static extern short Min(short val1, short val2);

        /// <summary>
        /// Returns the smaller of two 16-bit unsigned integers.
        /// </summary>
        /// <param name="val1">The first of two 16-bit unsigned integers to compare.</param>
        /// <param name="val2">The second of two 16-bit unsigned integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is smaller.</returns>
        public static extern ushort Min(ushort val1, ushort val2);

        /// <summary>
        /// Returns the smaller of two single-precision floating-point numbers.
        /// </summary>
        /// <param name="val1">The first of two single-precision floating-point numbers to compare.</param>
        /// <param name="val2">The second of two single-precision floating-point numbers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is smaller.</returns>
        public static extern float Min(float val1, float val2);

        /// <summary>
        /// Returns the smaller of two 32-bit signed integers.
        /// </summary>
        /// <param name="val1">The first of two 32-bit signed integers to compare.</param>
        /// <param name="val2">The second of two 32-bit signed integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is smaller.</returns>
        public static extern int Min(int val1, int val2);

        /// <summary>
        /// Returns the smaller of two 32-bit unsigned integers.
        /// </summary>
        /// <param name="val1">The first of two 32-bit unsigned integers to compare.</param>
        /// <param name="val2">The second of two 32-bit unsigned integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is smaller.</returns>
        public static extern uint Min(uint val1, uint val2);

        /// <summary>
        /// Returns the smaller of two double-precision floating-point numbers.
        /// </summary>
        /// <param name="val1">The first of two double-precision floating-point numbers to compare.</param>
        /// <param name="val2">The second of two double-precision floating-point numbers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is smaller.</returns>
        public static extern double Min(double val1, double val2);

        /// <summary>
        /// Returns the smaller of two 64-bit signed integers.
        /// </summary>
        /// <param name="val1">The first of two 64-bit signed integers to compare.</param>
        /// <param name="val2">The second of two 64-bit signed integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is smaller.</returns>
        [Template("System.Int64.min({val1}, {val2})")]
        public static extern long Min(long val1, long val2);

        /// <summary>
        /// Returns the smaller of two 64-bit unsigned integers.
        /// </summary>
        /// <param name="val1">The first of two 64-bit unsigned integers to compare.</param>
        /// <param name="val2">The second of two 64-bit unsigned integers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is smaller.</returns>
        [Template("System.UInt64.min({val1}, {val2})")]
        public static extern ulong Min(ulong val1, ulong val2);

        /// <summary>
        /// Returns the smaller of two decimal numbers.
        /// </summary>
        /// <param name="val1">The first of two decimal numbers to compare.</param>
        /// <param name="val2">The second of two decimal numbers to compare.</param>
        /// <returns>Parameter val1 or val2, whichever is smaller.</returns>
        [Template("System.Decimal.min({val1}, {val2})")]
        public static extern Decimal Min(Decimal val1, Decimal val2);

        [Template("{x}.pow({y})")]
        public static extern Decimal Pow(Decimal x, Decimal y);

        public static extern double Pow(double x, double y);

        public static extern double Pow(int x, int y);

        public static extern double Random();

        [Template("System.Decimal.round({x}, 6)")]
        public static extern Decimal Round(Decimal x);

        [Template("Bridge.Math.round({d}, 0, 6)")]
        public static extern double Round(double d);

        [Template("System.Decimal.toDecimalPlaces({d}, {digits}, 6)")]
        public static extern Decimal Round(Decimal d, int digits);

        [Template("Bridge.Math.round({d}, {digits}, 6)")]
        public static extern double Round(double d, int digits);

        [Template("System.Decimal.round({d}, {method})")]
        public static extern Decimal Round(Decimal d, MidpointRounding method);

        [Template("Bridge.Math.round({d}, 0, {method})")]
        public static extern double Round(double d, MidpointRounding method);

        [Template("System.Decimal.toDecimalPlaces({d}, {digits}, {method})")]
        public static extern Decimal Round(Decimal d, int digits, MidpointRounding method);

        [Template("Bridge.Math.round({d}, {digits}, {method})")]
        public static extern double Round(double d, int digits, MidpointRounding method);

        [Template("Bridge.Int.sign({value})")]
        public static extern int Sign(double value);

        [Template("{value}.sign()")]
        public static extern int Sign(Decimal value);

        public static extern double Sin(double x);

        [Template("Bridge.Math.sinh({value})")]
        public static extern double Sinh(double value);

        public static extern double Sqrt(double x);

        public static extern double Tan(double x);

        [Template("Bridge.Math.tanh({value})")]
        public static extern double Tanh(double value);

        [Template("Bridge.Int.trunc({d})")]
        public static extern double Truncate(double d);

        [Template("{d}.trunc()")]
        public static extern Decimal Truncate(Decimal d);
    }
}