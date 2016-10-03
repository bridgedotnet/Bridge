using Bridge;

using System.Runtime.CompilerServices;

namespace System
{
    /// <summary>
    /// The Guid data type which is mapped to the string type in Javascript.
    /// </summary>
    public struct Guid : IEquatable<Guid>, IComparable<Guid>, IFormattable
    {
        private const string error1 = "Byte array for GUID must be exactly {0} bytes long";

        private static readonly Bridge.Text.RegularExpressions.Regex Valid = new Bridge.Text.RegularExpressions.Regex("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$", "ig");
        private static readonly Bridge.Text.RegularExpressions.Regex Split = new Bridge.Text.RegularExpressions.Regex("^(.{8})(.{4})(.{4})(.{4})(.{12})$");
        private static readonly Bridge.Text.RegularExpressions.Regex NonFormat = new Bridge.Text.RegularExpressions.Regex("^[{(]?([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})[)}]?$", "ig");
        private static readonly Bridge.Text.RegularExpressions.Regex Replace = new Bridge.Text.RegularExpressions.Regex("-", "g");
        private static readonly Random Rnd = new Random();

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

        [Template("System.Guid.empty")]
        private extern Guid(DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor _);

        public Guid(string uuid)
        {
            this = new Guid();

            var s = ParseInternal(uuid, null, true);
        }

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

        [Template("Bridge.equalsT({this}, {other})")]
        public extern bool Equals(Guid other);

        [Template("Bridge.compare({this}, {other})")]
        public extern int CompareTo(Guid other);

        public override string ToString()
        {
            return Format(null);
        }

        public string ToString(string format)
        {
            return Format(format);
        }

        public string ToString(string format, IFormatProvider formatProvider)
        {
            return Format(format);
        }

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

        public static Guid Parse(string input)
        {
            return ParseExact(input, null);
        }

        public static Guid ParseExact(string input, string format)
        {
            var r = new Guid();
            r.ParseInternal(input, format, true);
            return r;
        }

        public static bool TryParse(string input, out Guid result)
        {
            return TryParseExact(input, null, out result);
        }

        public static bool TryParseExact(string input, string format, out Guid result)
        {
            result = new Guid();
            return result.ParseInternal(input, format, false);
        }

        public static Guid NewGuid()
        {
            var a = new byte[16];

            Rnd.NextBytes(a);

            a[6] = (byte)(a[6] & 0x0f | 0x40);
            a[8] = (byte)(a[8] & 0xbf | 0x80);

            return Parse(FromBytes(a));
        }

        [Template("{a} === {b}")]
        public static extern bool operator ==(Guid a, Guid b);

        [Template("{a} !== {b}")]
        public static extern bool operator !=(Guid a, Guid b);

        private bool ParseInternal(string input, string format, bool check)
        {
            string r = null;

            if (string.IsNullOrEmpty(input))
            {
                throw new System.ArgumentNullException("input");
            }

            if (string.IsNullOrEmpty(format))
            {
                var m = NonFormat.Exec(input);

                if (m != null)
                {
                    r = m.Slice(1).Join("-").ToLower();
                }
            }
            else
            {
                format = format.ToUpper();

                if (format == "N")
                {
                    var m = Split.Exec(input);

                    if (m != null)
                    {
                        input = m.Slice(1).Join("-");
                    }
                }
                else if (format == "B" || format == "P")
                {
                    var b = format == "B" ? '{' : '(';

                    if ((input[0] == b) && (input[input.Length - 1] == b))
                    {
                        input = input.Substr(1, input.Length - 2);
                    }
                }

                if (input.Match(Valid) != null)
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
            var uuid = FromBytes(ToByteArray());

            switch (format)
            {
                case "n":
                case "N":
                    return uuid.Replace(Replace, "");
                case "b":
                case "B":
                    return '{' + uuid + '}';
                case "p":
                case "P":
                    return '(' + uuid + ')';
                default:
                    return uuid;
            }
        }

        private static string FromBytes(byte[] b)
        {
            if (b == null || b.Length != 16)
            {
                throw new ArgumentException(string.Format(error1, 16));
            }

            var s = b.Map(MakeBinary).Join("");

            return Split.Exec(s).Slice(1).Join("-");
        }

        private static string MakeBinary(byte x)
        {
            return (x & 0xff).Format("x2");
        }

        private void FromString(string s)
        {
            if (string.IsNullOrEmpty(s))
            {
                return;
            }

            s = s.Replace(Replace, "");

            var r = new byte[16];

            for (var i = 0; i < 16; i++)
            {
                r[i] = byte.Parse(s.Substr(i * 2, 2), 16);
            }

            _a = ((int)r[3] << 24) | ((int)r[2] << 16) | ((int)r[1] << 8) | r[0];
            _b = (short)(((int)r[5] << 8) | r[4]);
            _c = (short)(((int)r[7] << 8) | r[6]);
            _d = r[8];
            _e = r[9];
            _f = r[10];
            _g = r[11];
            _h = r[12];
            _i = r[13];
            _j = r[14];
            _k = r[15];
        }
    }
}