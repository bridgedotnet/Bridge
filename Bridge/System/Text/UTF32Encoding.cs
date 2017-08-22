using Bridge;
using Bridge.Internal.Html5;

namespace System.Text
{
    [Reflectable]
    [FileName("system\\text\\encoding.js")]
    public class UTF32Encoding : Encoding
    {
        private bool bigEndian;
        private bool byteOrderMark;
        private bool throwOnInvalid;

        public UTF32Encoding() : this(false, true, false)
        {
        }

        public UTF32Encoding(bool bigEndian, bool byteOrderMark) : this(bigEndian, byteOrderMark, false)
        {
        }

        public UTF32Encoding(bool bigEndian, bool byteOrderMark, bool throwOnInvalidBytes)
        {
            this.bigEndian = bigEndian;
            this.byteOrderMark = byteOrderMark;
            this.throwOnInvalid = throwOnInvalidBytes;
            this.fallbackCharacter = '\uFFFD';
        }

        public override int CodePage => this.bigEndian ? 1201 : 1200;
        public override string EncodingName => this.bigEndian ? "Unicode (UTF-32 Big-Endian)" : "Unicode (UTF-32)";

        private char[] ToCodePoints(string str)
        {
            char surrogate_1st = '\u0000';
            char[] unicode_codes = new char[0];
            Action fallback = () =>
            {
                if (this.throwOnInvalid)
                {
                    throw new System.Exception("Invalid character in UTF32 text");
                }
                unicode_codes.Push(this.fallbackCharacter);
            };

            for (var i = 0; i < str.Length; ++i)
            {
                var utf16_code = str[i];

                if (surrogate_1st != 0)
                {
                    if (utf16_code >= 0xDC00 && utf16_code <= 0xDFFF)
                    {
                        var surrogate_2nd = utf16_code;
                        var unicode_code = (surrogate_1st - 0xD800) * (1 << 10) + (1 << 16) +
                                           (surrogate_2nd - 0xDC00);
                        unicode_codes.Push(unicode_code.As<char>());
                    }
                    else
                    {
                        fallback();
                        i--;
                    }
                    surrogate_1st = '\u0000';
                }
                else if (utf16_code >= 0xD800 && utf16_code <= 0xDBFF)
                {
                    surrogate_1st = utf16_code;
                }
                else if ((utf16_code >= 0xDC00) && (utf16_code <= 0xDFFF))
                {
                    fallback();
                }
                else
                {
                    unicode_codes.Push(utf16_code);
                }
            }

            if (surrogate_1st != 0)
            {
                fallback();
            }

            return unicode_codes;
        }

        protected override byte[] Encode(string s, byte[] outputBytes, int outputIndex, out int writtenBytes)
        {
            var hasBuffer = outputBytes != null;
            var recorded = 0;

            Action<byte> write = (ch) =>
            {
                if (hasBuffer)
                {
                    if (outputIndex >= outputBytes.Length)
                    {
                        throw new System.ArgumentException("bytes");
                    }

                    outputBytes[outputIndex++] = ch;
                }
                else
                {
                    outputBytes.Push(ch);
                }
                recorded++;
            };

            Action<uint> write32 = (a) =>
            {
                var r = new byte[4];
                r[0] = (a & 0xFF).As<byte>();
                r[1] = ((a & 0xFF00) >> 8).As<byte>();
                r[2] = ((a & 0xFF0000) >> 16).As<byte>();
                r[3] = ((a & 0xFF000000) >> 24).As<byte>();

                if (this.bigEndian)
                {
                    r.Reverse();
                }

                write(r[0]);
                write(r[1]);
                write(r[2]);
                write(r[3]);
            };

            if (!hasBuffer)
            {
                outputBytes = new byte[0];
            }

            var unicode_codes = this.ToCodePoints(s);
            for (var i = 0; i < unicode_codes.Length; ++i)
            {
                write32(unicode_codes[i]);
            }

            writtenBytes = recorded;

            if (hasBuffer)
            {
                return null;
            }

            return new Uint8Array(outputBytes).As<byte[]>();
        }

        protected override string Decode(byte[] bytes, int index, int count, char[] chars, int charIndex)
        {
            var position = index;
            var result = "";
            var endpoint = position + count;

            Action fallback = () =>
            {
                if (this.throwOnInvalid)
                {
                    throw new System.Exception("Invalid character in UTF32 text");
                }

                result += this.fallbackCharacter.ToString();
            };

            Func<uint?> read32 = () =>
            {
                if ((position + 4) > endpoint)
                {
                    position = position + 4;
                    return null;
                }

                var a = bytes[position++];
                var b = bytes[position++];
                var c = bytes[position++];
                var d = bytes[position++];

                if (this.bigEndian)
                {
                    var tmp = b;
                    b = c;
                    c = tmp;

                    tmp = a;
                    a = d;
                    d = tmp;
                }

                return ((d << 24) | (c << 16) | (b << 8) | a).As<uint>();
            };

            while (position < endpoint)
            {
                var unicode_code = read32();

                if (unicode_code == null)
                {
                    fallback();
                    continue;
                }

                if (unicode_code < 0x10000 || unicode_code > 0x10FFFF)
                {
                    if (unicode_code < 0 || unicode_code > 0x10FFFF || (unicode_code >= 0xD800 && unicode_code <= 0xDFFF))
                    {
                        fallback();
                    }
                    else
                    {
                        result += unicode_code.As<char>().ToString();
                    }
                }
                else
                {
                    result += (((unicode_code - (1 << 16)) / (1 << 10)) + 0xD800).As<char>().ToString();
                    result += ((unicode_code % (1 << 10)) + 0xDC00).As<char>().ToString();
                }
            }

            return result;
        }

        public override int GetMaxByteCount(int charCount)
        {
            if (charCount < 0)
            {
                throw new System.ArgumentOutOfRangeException("charCount");
            }

            var byteCount = (long)charCount + 1;
            byteCount *= 4;

            if (byteCount > 0x7fffffff)
            {
                throw new System.ArgumentOutOfRangeException("charCount");
            }

            return (int)byteCount;
        }

        public override int GetMaxCharCount(int byteCount)
        {
            if (byteCount < 0)
            {
                throw new System.ArgumentOutOfRangeException("byteCount");
            }

            var charCount = byteCount / 2 + 2;

            if (charCount > 0x7fffffff)
            {
                throw new System.ArgumentOutOfRangeException("byteCount");
            }

            return charCount;
        }
    }
}