using System.Collections.Generic;
using Bridge;
using System.Linq;
using System.Text.RegularExpressions;

namespace System
{
    /// <summary>
    /// The Guid data type which is mapped to the string type in Javascript.
    /// </summary>
    [Immutable]
    public struct Guid : IEquatable<Guid>, IComparable<Guid>, IFormattable
    {
        private const string error1 = "Byte array for GUID must be exactly {0} bytes long";

        private static readonly Regex Valid = new Regex("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$", RegexOptions.IgnoreCase);
        private static readonly Regex Split = new Regex("^(.{8})(.{4})(.{4})(.{4})(.{12})$");
        private static readonly Regex NonFormat = new Regex("^[{(]?([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})[)}]?$", RegexOptions.IgnoreCase);
        private static readonly Regex Replace = new Regex("-");
        private static readonly Random Rnd = new Random();

        /// <summary>
        /// A read-only instance of the Guid structure whose value is all zeros.
        /// </summary>
        public static readonly Guid Empty = new Guid();

        private int _a;
        private short _b;
        private short _c;
        private byte _d;
        private byte _e;
        private byte _f;
        private byte _g;
        private byte _h;
        private byte _i;
        private byte _j;
        private byte _k;

        /// <summary>
        /// Initializes a new instance of the Guid structure by using the value represented by the specified string.
        /// </summary>
        /// <param name="uuid">A string that contains a GUID</param>
        public Guid(string uuid)
        {
            this = new Guid();

            ParseInternal(uuid, null, true);
        }

        /// <summary>
        /// Initializes a new instance of the Guid structure by using the specified array of bytes.
        /// </summary>
        /// <param name="b">A 16-element byte array containing values with which to initialize the GUID.</param>
        public Guid(byte[] b)
        {
            if (b == null)
            {
                throw new ArgumentNullException("b");
            }

            if (b.Length != 16)
            {
                throw new ArgumentException(string.Format(error1, 16));
            }

            _a = ((int)b[3] << 24) | ((int)b[2] << 16) | ((int)b[1] << 8) | b[0];
            _b = (short)(((int)b[5] << 8) | b[4]);
            _c = (short)(((int)b[7] << 8) | b[6]);
            _d = b[8];
            _e = b[9];
            _f = b[10];
            _g = b[11];
            _h = b[12];
            _i = b[13];
            _j = b[14];
            _k = b[15];
        }

        /// <summary>
        /// Initializes a new instance of the Guid structure by using the specified unsigned integers and bytes.
        /// </summary>
        /// <param name="a">The first 4 bytes of the GUID.</param>
        /// <param name="b">The next 2 bytes of the GUID.</param>
        /// <param name="c">The next 2 bytes of the GUID.</param>
        /// <param name="d">The next byte of the GUID.</param>
        /// <param name="e">The next byte of the GUID.</param>
        /// <param name="f">The next byte of the GUID.</param>
        /// <param name="g">The next byte of the GUID.</param>
        /// <param name="h">The next byte of the GUID.</param>
        /// <param name="i">The next byte of the GUID.</param>
        /// <param name="j">The next byte of the GUID.</param>
        /// <param name="k">The next byte of the GUID.</param>
        public Guid(uint a, ushort b, ushort c, byte d, byte e, byte f, byte g, byte h, byte i, byte j, byte k)
        {
            _a = (int)a;
            _b = (short)b;
            _c = (short)c;
            _d = d;
            _e = e;
            _f = f;
            _g = g;
            _h = h;
            _i = i;
            _j = j;
            _k = k;
        }

        /// <summary>
        /// Initializes a new instance of the Guid structure by using the specified integers and byte array.
        /// </summary>
        /// <param name="a">The first 4 bytes of the GUID.</param>
        /// <param name="b">The next 2 bytes of the GUID.</param>
        /// <param name="c">The next 2 bytes of the GUID.</param>
        /// <param name="d">The remaining 8 bytes of the GUID.</param>
        public Guid(int a, short b, short c, byte[] d)
        {
            if (d == null)
            {
                throw new ArgumentNullException("d");
            }

            if (d.Length != 8)
            {
                throw new ArgumentException(string.Format(error1, 8));
            }

            _a = a;
            _b = b;
            _c = c;
            _d = d[0];
            _e = d[1];
            _f = d[2];
            _g = d[3];
            _h = d[4];
            _i = d[5];
            _j = d[6];
            _k = d[7];
        }

        /// <summary>
        /// Initializes a new instance of the Guid structure by using the specified integers and bytes.
        /// </summary>
        /// <param name="a">The first 4 bytes of the GUID.</param>
        /// <param name="b">The next 2 bytes of the GUID.</param>
        /// <param name="c">The next 2 bytes of the GUID.</param>
        /// <param name="d">The next byte of the GUID.</param>
        /// <param name="e">The next byte of the GUID.</param>
        /// <param name="f">The next byte of the GUID.</param>
        /// <param name="g">The next byte of the GUID.</param>
        /// <param name="h">The next byte of the GUID.</param>
        /// <param name="i">The next byte of the GUID.</param>
        /// <param name="j">The next byte of the GUID.</param>
        /// <param name="k">The next byte of the GUID.</param>
        public Guid(int a, short b, short c, byte d, byte e, byte f, byte g, byte h, byte i, byte j, byte k)
        {
            _a = a;
            _b = b;
            _c = c;
            _d = d;
            _e = e;
            _f = f;
            _g = g;
            _h = h;
            _i = i;
            _j = j;
            _k = k;
        }

        /// <summary>
        /// Returns the hash code for this instance.
        /// </summary>
        /// <returns>The hash code for this instance.</returns>
        public override int GetHashCode()
        {
            return this._a ^ (((int)this._b << 16) | (int)(ushort)this._c) ^ (((int)this._f << 24) | this._k);
        }

        /// <summary>
        /// Returns a value indicating whether this instance and a specified Guid object represent the same value.
        /// </summary>
        /// <param name="o">An object to compare to this instance.</param>
        /// <returns>true if o is equal to this instance; otherwise, false.</returns>
        public override bool Equals(Object o)
        {
            if (!(o is Guid))
            {
                return false;
            }

            return this.Equals((Guid)o);
        }

        /// <summary>
        /// Returns a value indicating whether this instance and a specified Guid object represent the same value.
        /// </summary>
        /// <param name="o">An object to compare to this instance.</param>
        /// <returns>true if o is equal to this instance; otherwise, false.</returns>
        public bool Equals(Guid o)
        {
            if ((this._a != o._a) || (this._b != o._b) || (this._c != o._c) || (this._d != o._d)
                || (this._e != o._e) || (this._f != o._f) || (this._g != o._g) || (this._h != o._h)
                || (this._i != o._i) || (this._j != o._j) || (this._k != o._k))
            {
                return false;
            }

            return true;
        }

        /// <summary>
        /// Compares this instance to a specified Guid object and returns an indication of their relative values.
        /// </summary>
        /// <param name="value">An object to compare to this instance.</param>
        /// <returns>A signed number indicating the relative values of this instance and value.</returns>
        public int CompareTo(Guid value)
        {
            return this.ToString().CompareTo(value.ToString());
        }

        /// <summary>
        /// Returns a string representation of the value of this instance in registry format.
        /// </summary>
        /// <returns>The value of this Guid, formatted by using the "D" format specifier.</returns>
        public override string ToString()
        {
            return Format(null);
        }

        /// <summary>
        /// Returns a string representation of the value of this Guid instance, according to the provided format specifier.
        /// </summary>
        /// <param name="format">A single format specifier that indicates how to format the value of this Guid. The format parameter can be "N", "D", "B", "P". If format is null or an empty string (""), "D" is used.</param>
        /// <returns>The value of this Guid, represented as a series of lowercase hexadecimal digits in the specified format.</returns>
        public string ToString(string format)
        {
            return Format(format);
        }

        /// <summary>
        /// Returns a string representation of the value of this instance of the Guid class, according to the provided format specifier and culture-specific format information.
        /// </summary>
        /// <param name="format">A single format specifier that indicates how to format the value of this Guid. The format parameter can be "N", "D", "B", "P". If format is null or an empty string (""), "D" is used.</param>
        /// <param name="formatProvider">(Reserved) An object that supplies culture-specific formatting information.</param>
        /// <returns>The value of this Guid, represented as a series of lowercase hexadecimal digits in the specified format.</returns>
        public string ToString(string format, IFormatProvider formatProvider)
        {
            return Format(format);
        }

        /// <summary>
        /// Returns a 16-element byte array that contains the value of this instance.
        /// </summary>
        /// <returns>A 16-element byte array.</returns>
        public byte[] ToByteArray()
        {
            byte[] g = new byte[16];

            g[0] = (byte)(_a);
            g[1] = (byte)(_a >> 8);
            g[2] = (byte)(_a >> 16);
            g[3] = (byte)(_a >> 24);
            g[4] = (byte)(_b);
            g[5] = (byte)(_b >> 8);
            g[6] = (byte)(_c);
            g[7] = (byte)(_c >> 8);
            g[8] = _d;
            g[9] = _e;
            g[10] = _f;
            g[11] = _g;
            g[12] = _h;
            g[13] = _i;
            g[14] = _j;
            g[15] = _k;

            return g;
        }

        /// <summary>
        /// Converts the string representation of a GUID to the equivalent Guid structure.
        /// </summary>
        /// <param name="input">The string to convert.</param>
        /// <returns>A structure that contains the value that was parsed.</returns>
        public static Guid Parse(string input)
        {
            return ParseExact(input, null);
        }

        /// <summary>
        /// Converts the string representation of a GUID to the equivalent Guid structure, provided that the string is in the specified format.
        /// </summary>
        /// <param name="input">The GUID to convert.</param>
        /// <param name="format">One of the following specifiers that indicates the exact format to use when interpreting input: "N", "D", "B", "P".</param>
        /// <returns></returns>
        public static Guid ParseExact(string input, string format)
        {
            var r = new Guid();
            r.ParseInternal(input, format, true);
            return r;
        }

        /// <summary>
        /// Converts the string representation of a GUID to the equivalent Guid structure.
        /// </summary>
        /// <param name="input">The GUID to convert.</param>
        /// <param name="result">The structure that will contain the parsed value. If the method returns true, result contains a valid Guid. If the method returns false, result equals Guid.Empty.</param>
        /// <returns></returns>
        public static bool TryParse(string input, out Guid result)
        {
            return TryParseExact(input, null, out result);
        }

        /// <summary>
        /// Converts the string representation of a GUID to the equivalent Guid structure, provided that the string is in the specified format.
        /// </summary>
        /// <param name="input">The GUID to convert.</param>
        /// <param name="format">One of the following specifiers that indicates the exact format to use when interpreting input: "N", "D", "B", "P".</param>
        /// <param name="result">The structure that will contain the parsed value. If the method returns true, result contains a valid Guid. If the method returns false, result equals Guid.Empty.</param>
        /// <returns></returns>
        public static bool TryParseExact(string input, string format, out Guid result)
        {
            result = new Guid();
            return result.ParseInternal(input, format, false);
        }

        /// <summary>
        /// Initializes a new instance of the Guid structure.
        /// </summary>
        /// <returns>A new GUID object.</returns>
        public static Guid NewGuid()
        {
            var a = new byte[16];

            Rnd.NextBytes(a);

            a[7] = (byte)(a[7] & 0x0f | 0x40);
            a[8] = (byte)(a[8] & 0xbf | 0x80);

            return new Guid(a);
        }

        /// <summary>
        /// Indicates whether the values of two specified Guid objects are equal.
        /// </summary>
        /// <param name="a">The first object to compare.</param>
        /// <param name="b">The second object to compare.</param>
        /// <returns>true if a and b are equal; otherwise, false.</returns>
        public static bool operator ==(Guid a, Guid b)
        {
            if (Object.ReferenceEquals(a, null))
            {
                return Object.ReferenceEquals(b, null);
            }

            return a.Equals(b);
        }

        /// <summary>
        /// Indicates whether the values of two specified Guid objects are not equal.
        /// </summary>
        /// <param name="a">The first object to compare.</param>
        /// <param name="b">The second object to compare.</param>
        /// <returns>true if a and b are not equal; otherwise, false.</returns>
        public static bool operator !=(Guid a, Guid b)
        {
            return !(a == b);
        }

        private bool ParseInternal(string input, string format, bool check)
        {
            string r = null;

            if (string.IsNullOrEmpty(input))
            {
                throw new System.ArgumentNullException("input");
            }

            if (string.IsNullOrEmpty(format))
            {
                var m = NonFormat.Match(input);

                if (m.Success)
                {
                    List<string> list = new List<string>();
                    for (int i = 1; i <= m.Groups.Count; i++)
                    {
                        if (m.Groups[i].Success)
                        {
                            list.Add(m.Groups[i].Value);
                        }
                    }

                    r = list.ToArray().Join("-").ToLower();
                }
            }
            else
            {
                format = format.ToUpper();

                var p = false;

                if (format == "N")
                {
                    var m = Split.Match(input);

                    if (m.Success)
                    {
                        List<string> list = new List<string>();
                        for (int i = 1; i <= m.Groups.Count; i++)
                        {
                            if (m.Groups[i].Success)
                            {
                                list.Add(m.Groups[i].Value);
                            }
                        }

                        p = true;
                        input = list.ToArray().Join("-");
                    }
                }
                else if (format == "B" || format == "P")
                {
                    var b = format == "B" ? new[] { '{', '}' } : new[] { '(', ')' };

                    if ((input[0] == b[0]) && (input[input.Length - 1] == b[1]))
                    {
                        p = true;
                        input = input.Substring(1, input.Length - 2);
                    }
                }
                else
                {
                    p = true;
                }

                if (p && Guid.Valid.IsMatch(input))
                {
                    r = input.ToLower();
                }
            }

            if (r != null)
            {
                FromString(r);
                return true;
            }

            if (check)
            {
                throw new System.FormatException("input is not in a recognized format");
            }

            return false;
        }

        private string Format(string format)
        {
            var s = ((uint)_a).ToString("x8") + ((ushort)_b).ToString("x4") + ((ushort)_c).ToString("x4");
            s = s + (new[] { _d, _e, _f, _g, _h, _i, _j, _k }).Map(MakeBinary).Join("");

            var m = Guid.Split.Match(s);
            List<string> list = new List<string>();
            for (int i = 1; i <= m.Groups.Count; i++)
            {
                if (m.Groups[i].Success)
                {
                    list.Add(m.Groups[i].Value);
                }
            }
            s = list.ToArray().Join("-");

            switch (format)
            {
                case "n":
                case "N":
                    return Guid.Replace.Replace(s, "");

                case "b":
                case "B":
                    return '{' + s + '}';

                case "p":
                case "P":
                    return '(' + s + ')';

                default:
                    return s;
            }
        }

        private static string MakeBinary(byte x)
        {
            return (x & 0xff).ToString("x2");
        }

        private void FromString(string s)
        {
            if (string.IsNullOrEmpty(s))
            {
                return;
            }

            s = Guid.Replace.Replace(s, "");

            var r = new byte[8];

            _a = (int)uint.Parse(s.Substring(0, 8), 16);
            _b = (short)ushort.Parse(s.Substring(8, 4), 16);
            _c = (short)ushort.Parse(s.Substring(12, 4), 16);
            for (var i = 8; i < 16; i++)
            {
                r[i - 8] = byte.Parse(s.Substring(i * 2, 2), 16);
            }

            _d = r[0];
            _e = r[1];
            _f = r[2];
            _g = r[3];
            _h = r[4];
            _i = r[5];
            _j = r[6];
            _k = r[7];
        }

        private string toJSON()
        {
            return this.ToString();
        }
    }
}