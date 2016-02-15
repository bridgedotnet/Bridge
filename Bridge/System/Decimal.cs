using Bridge;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace System
{
    /// <summary>
    /// The decimal data type.
    /// http://mikemcl.github.io/decimal.js/
    /// </summary>
    [External]
    [Name("Bridge.Decimal")]
    [Constructor("Bridge.Decimal")]
    public struct Decimal : IComparable, IComparable<Decimal>, IEquatable<Decimal>, IFormattable
    {
        [Name(false)]
        public static readonly decimal Zero = 0;

        [Name(false)]
        public static readonly decimal One = 1;

        [Name(false)]
        public static readonly decimal MinusOne = -1;

        [Name(false)]
        public static readonly decimal MaxValue = 0;

        [Name(false)]
        public static readonly decimal MinValue = 0;

        [Template("Bridge.Decimal(0)")]
        private extern Decimal(DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor _);

        [Template("Bridge.Decimal({d})")]
        public extern Decimal(double d);

        [Template("Bridge.Decimal({i})")]
        public extern Decimal(int i);

        [Template("Bridge.Decimal({i})")]
        public extern Decimal(uint i);

        [Template("Bridge.Decimal({f})")]
        public extern Decimal(float f);

        [Template("Bridge.Decimal({n})")]
        public extern Decimal(long n);

        [Template("Bridge.Decimal({n})")]
        public extern Decimal(ulong n);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public extern Decimal(int lo, int mid, int hi, bool isNegative, byte scale);

        [Template("Bridge.Int.format({this}, {format})")]
        public extern string Format(string format);

        [Template("Bridge.Int.format({this}, {format}, {provider})")]
        public extern string Format(string format, IFormatProvider provider);

        [Template("Bridge.Int.format({this}, {format})")]
        public string ToString(string format)
        {
            return null;
        }

        [Template("Bridge.Int.format({this}, {format}, {provider})")]
        public string ToString(string format, IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.Int.format({this}, 'G', {provider})")]
        public string ToString(IFormatProvider provider)
        {
            return null;
        }

        [Template("Bridge.Int.format({this}, 'G')")]
        public override string ToString()
        {
            return null;
        }

        public extern decimal Abs();

        [Name("ceil")]
        public extern decimal Ceiling();

        public extern int ComparedTo(decimal d);

        [Template("Bridge.Decimal.lift({value})")]
        public static extern implicit operator decimal(byte value);

        [Template("Bridge.Decimal.lift({value})")]
        public static extern implicit operator decimal(sbyte value);

        [Template("Bridge.Decimal.lift({value})")]
        public static extern implicit operator decimal(short value);

        [Template("Bridge.Decimal.lift({value})")]
        public static extern implicit operator decimal(ushort value);

        [Template("Bridge.Decimal.lift({value})")]
        public static extern implicit operator decimal(char value);

        [Template("Bridge.Decimal.lift({value})")]
        public static extern implicit operator decimal(int value);

        [Template("Bridge.Decimal.lift({value})")]
        public static extern implicit operator decimal(uint value);

        [Template("Bridge.Decimal.lift({value})")]
        public static extern implicit operator decimal(long value);

        [Template("Bridge.Decimal.lift({value})")]
        public static extern implicit operator decimal(ulong value);

        [Template("Bridge.Decimal.lift({value})")]
        public static extern explicit operator decimal(float value);

        [Template("Bridge.Decimal.lift({value})")]
        public static extern explicit operator decimal(double value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator byte(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator sbyte(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator char(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator short(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator ushort(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator int(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator uint(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator long(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern explicit operator ulong(decimal value);

        [Template("Bridge.Decimal.toFloat({value})")]
        public static extern explicit operator float(decimal value);

        [Template("Bridge.Decimal.toFloat({value})")]
        public static extern explicit operator double(decimal value);

        [Template("{d}.clone()")]
        public static extern decimal operator +(decimal d);

        [Template("{d}.neg()")]
        public static extern decimal operator -(decimal d);

        [Template("{d1}.add({d2})")]
        public static extern decimal operator +(decimal d1, decimal d2);

        [Template("{d1}.sub({d2})")]
        public static extern decimal operator -(decimal d1, decimal d2);

        [Template("{d}.add(1)")]
        public static extern decimal operator ++(decimal d);

        [Template("{d}.sub(1)")]
        public static extern decimal operator --(decimal d);

        [Template("{d1}.mul({d2})")]
        public static extern decimal operator *(decimal d1, decimal d2);

        [Template("{d1}.div({d2})")]
        public static extern decimal operator /(decimal d1, decimal d2);

        [Template("{d1}.mod({d2})")]
        public static extern decimal operator %(decimal d1, decimal d2);

        [Template("{d1}.equalsT({d2})")]
        public static extern bool operator ==(decimal d1, decimal d2);

        [Template("{d1}.ne({d2})")]
        public static extern bool operator !=(decimal d1, decimal d2);

        [Template("{d1}.gt({d2})")]
        public static extern bool operator >(decimal d1, decimal d2);

        [Template("{d1}.gte({d2})")]
        public static extern bool operator >=(decimal d1, decimal d2);

        [Template("{d1}.lt({d2})")]
        public static extern bool operator <(decimal d1, decimal d2);

        [Template("{d1}.lte({d2})")]
        public static extern bool operator <=(decimal d1, decimal d2);

        [Template("{d1}.add({d2})")]
        public static extern decimal Add(decimal d1, decimal d2);

        [Template("Bridge.Decimal.exp({d})")]
        public static extern decimal Exp(decimal d);

        [Template("Bridge.Decimal.ln({d})")]
        public static extern decimal Ln(decimal d);

        [Template("Bridge.Decimal.log({d}, {logBase})")]
        public static extern decimal Log(decimal d, decimal logBase);

        [Template("Bridge.Decimal.pow({d}, {exponent})")]
        public static extern decimal Pow(decimal d, decimal exponent);

        [Template("Bridge.Decimal.sqrt({d})")]
        public static extern decimal Sqrt(decimal d);

        [Template("{d}.ceil()")]
        public static extern decimal Ceiling(decimal d);

        [Template("{d1}.div({d2})")]
        public static extern decimal Divide(decimal d1, decimal d2);

        [Template("{d}.floor()")]
        public static extern decimal Floor(decimal d);

        [Template("{d1}.mod({d2})")]
        public static extern decimal Remainder(decimal d1, decimal d2);

        [Template("{d1}.mul({d2})")]
        public static extern decimal Multiply(decimal d1, decimal d2);

        [Template("Bridge.Decimal(0).sub({d})")]
        public static extern decimal Negate(decimal d);

        [Template("Bridge.Decimal({s})")]
        public static extern decimal Parse(string s);

        [Template("Bridge.Decimal({s}, {provider})")]
        public static extern decimal Parse(string s, IFormatProvider provider);

        [Template("Bridge.Decimal.tryParse({s}, null, {result})")]
        public static extern bool TryParse(string s, out decimal result);

        [Template("Bridge.Decimal.tryParse({s}, {provider}, {result})")]
        public static extern bool TryParse(string s, IFormatProvider provider, out decimal result);

        [Template("Bridge.Decimal.round({d}, 6)")]
        public static extern decimal Round(decimal d);

        [Template("Bridge.Decimal.toDecimalPlaces({d}, {decimals}, 6)")]
        public static extern decimal Round(decimal d, int decimals);

        [Template("Bridge.Decimal.toDecimalPlaces({d}, {decimals}, {mode})")]
        public static extern decimal Round(decimal d, int decimals, MidpointRounding mode);

        [Template("Bridge.Decimal.round({d}, {mode})")]
        public static extern decimal Round(decimal d, MidpointRounding mode);

        [Template("{d}.trunc()")]
        public static extern decimal Truncate(decimal d);

        [Template("{d1}.sub({d2})")]
        public static extern decimal Subtract(decimal d1, decimal d2);

        [Template("{this}.compareTo({other})")]
        public extern int CompareTo(decimal other);

        [Template("{d1}.compareTo({d2})")]
        public static extern int Compare(decimal d1, decimal d2);

        public extern bool Equals(decimal other);

        [Template("{d1}.equals({d2})")]
        public static extern bool Equals(decimal d1, decimal d2);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern byte ToByte(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern sbyte ToSByte(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern char ToChar(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern short ToInt16(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern ushort ToUInt16(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern int ToInt32(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern uint ToUInt32(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern long ToInt64(decimal value);

        [Template("Bridge.Decimal.toInt({value})")]
        public static extern ulong ToUInt64(decimal value);

        [Template("Bridge.Decimal.toFloat({value})")]
        public static extern float ToSingle(decimal value);

        [Template("Bridge.Decimal.toFloat({value})")]
        public static extern double ToDouble(decimal value);

        [Template("{this}.compareTo({obj})")]
        public extern int CompareTo(object obj);

        public extern int DecimalPlaces();

        public extern decimal DividedToIntegerBy(decimal d);

        public extern decimal Exponential();

        public extern decimal Floor();

        public extern bool IsFinite();

        public extern bool IsInteger();

        public extern bool IsNaN();

        public extern bool IsNegative();

        public extern bool IsZero();

        public extern decimal Log(decimal logBase);

        public extern decimal Ln();

        public extern int Precision();

        public extern decimal Round();

        public extern decimal Sqrt();

        public extern decimal ToDecimalPlaces(int dp, MidpointRounding rm);

        public extern string ToExponential(int dp, MidpointRounding rm);

        public extern string ToFixed(int dp, MidpointRounding rm);

        public extern decimal Pow(double n);

        public extern string ToPrecision(int sd, MidpointRounding rm);

        public extern decimal ToSignificantDigits(int sd, MidpointRounding rm);

        public static decimal Max(params decimal[] values)
        {
            return 0;
        }

        public static decimal Min(params decimal[] values)
        {
            return 0;
        }

        /// <summary>
        /// Returns a new Decimal with a pseudo-random value equal to or greater than 0 and less than 1.
        /// </summary>
        /// <param name="dp">The return value will have dp decimal places (or less if trailing zeros are produced). If dp is omitted then the number of decimal places will default to the current precision setting.</param>
        /// <returns></returns>
        public static decimal Random(int dp)
        {
            return 0m;
        }

        /// <summary>
        /// Configures the 'global' settings for this particular Decimal constructor.
        /// </summary>
        /// <param name="config"></param>
        public static void SetConfig(DecimalConfig config)
        {
        }

        public extern string ToFormat();

        public extern string ToFormat(int dp);

        public extern string ToFormat(int dp, MidpointRounding rm);

        public extern string ToFormat(int dp, MidpointRounding rm, IFormatProvider provider);

        public extern string ToFormat(int dp, MidpointRounding rm, DecimalFormatConfig config);

        [Template("toFormat(null, null,{config})")]
        public extern string ToFormat(DecimalFormatConfig config);
    }

    [Name("Object")]
    [Constructor("{ }")]
    [External]
    public class DecimalConfig
    {
        /// <summary>
        /// Default value: 20
        /// The maximum number of significant digits of the result of a calculation or base conversion.
        /// </summary>
        public int Precision;

        /// <summary>
        /// The default rounding mode used when rounding the result of a calculation or base conversion to precision significant digits, and when rounding the return value of the round, toDecimalPlaces, toExponential, toFixed, toFormat, toNearest, toPrecision and toSignificantDigits methods.
        /// </summary>
        public int Rounding;

        /// <summary>
        /// The negative exponent value at and below which toString returns exponential notation. Default value: -7
        /// </summary>
        public int ToExpNeg;

        /// <summary>
        /// The positive exponent value at and above which toString returns exponential notation. Default value: 20
        /// </summary>
        public int ToExpPos;

        /// <summary>
        /// The negative exponent limit, i.e. the exponent value below which underflow to zero occurs. Default value: -9e15
        /// </summary>
        public int MinE;

        /// <summary>
        /// The positive exponent limit, i.e. the exponent value above which overflow to Infinity occurs. Default value: 9e15
        /// </summary>
        public double MaxE;

        /// <summary>
        /// The value that determines whether Decimal Errors are thrown. If errors is false, this library will not throw errors.
        /// </summary>
        public bool Errors;

        /// <summary>
        /// The value that determines whether cryptographically-secure pseudo-random number generation is used. Default value: false
        /// </summary>
        public bool Crypto;

        /// <summary>
        /// The modulo mode used when calculating the modulus: a mod n.
        /// </summary>
        public int Modulo;

        /// <summary>
        /// The format object configures the format of the string returned by the toFormat method.
        /// </summary>
        public DecimalFormatConfig Format;
    }

    [Name("Object")]
    [Constructor("{ }")]
    [External]
    public class DecimalFormatConfig
    {
        /// <summary>
        /// the decimal separator
        /// </summary>
        public string DecimalSeparator;

        /// <summary>
        /// the grouping separator of the integer part of the number
        /// </summary>
        public string GroupSeparator;

        /// <summary>
        /// the primary grouping size of the integer part of the number
        /// </summary>
        public int GroupSize;

        /// <summary>
        /// the secondary grouping size of the integer part of the number
        /// </summary>
        public int SecondaryGroupSize;

        /// <summary>
        /// the grouping separator of the fraction part of the number
        /// </summary>
        public string FractionGroupSeparator;

        /// <summary>
        /// the grouping size of the fraction part of the number
        /// </summary>
        public int FractionGroupSize;
    }
}