using Bridge;
using Bridge.Internal.Html5;

namespace System.Text
{
    [Reflectable]
    [FileName("system\\text\\encoding.js")]
    public class UnicodeEncoding : Encoding
    {
        private bool bigEndian;
        private bool byteOrderMark;
        private bool throwOnInvalid;

        public UnicodeEncoding() : this(false, true)
        {
        }

        public UnicodeEncoding(bool bigEndian, bool byteOrderMark) : this(bigEndian, byteOrderMark, false)
        {
        }

        public UnicodeEncoding(bool bigEndian, bool byteOrderMark, bool throwOnInvalidBytes)
        {
            this.bigEndian = bigEndian;
            this.byteOrderMark = byteOrderMark;
            this.throwOnInvalid = throwOnInvalidBytes;
            this.fallbackCharacter = '\uFFFD';
        }

        public override int CodePage => this.bigEndian ? 1201 : 1200;
        public override string EncodingName => this.bigEndian ? "Unicode (Big-Endian)" : "Unicode";

        protected override byte[] Encode(string s, byte[] outputBytes, int outputIndex, out int writtenBytes)
        {
            var hasBuffer = outputBytes != null;
            var recorded = 0;
            char surrogate_1st = '\u0000';
            var fallbackCharacterCode = this.fallbackCharacter;

            Action<byte> write = ch =>
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

            Action<byte, byte> writePair = (a, b) =>
            {
                write(a);
                write(b);
            };

            Func<char, char> swap = ch => (char)(((ch & 0xFF) << 8) | ((ch >> 8) & 0xFF));

            Action fallback = () =>
            {
                if (this.throwOnInvalid)
                {
                    throw new System.Exception("Invalid character in UTF16 text");
                }

                writePair((byte)fallbackCharacterCode, (byte)(fallbackCharacterCode >> 8));
            };

            if (!hasBuffer)
            {
                outputBytes = new byte[0];
            }

            if (this.bigEndian)
            {
                fallbackCharacterCode = swap(fallbackCharacterCode);
            }

            for (var i = 0; i < s.Length; i++)
            {
                var ch = s[i];

                if (surrogate_1st != 0)
                {
                    if (ch >= 0xDC00 && ch <= 0xDFFF)
                    {
                        if (this.bigEndian)
                        {
                            surrogate_1st = swap(surrogate_1st);
                            ch = swap(ch);
                        }
                        writePair((byte)surrogate_1st, (byte)(surrogate_1st >> 8));
                        writePair((byte)ch, (byte)(ch >> 8));
                        surrogate_1st = '\u0000';
                        continue;
                    }
                    fallback();
                    surrogate_1st = '\u0000';
                }

                if (0xD800 <= ch && ch <= 0xDBFF)
                {
                    surrogate_1st = ch;
                    continue;
                }
                else if (0xDC00 <= ch && ch <= 0xDFFF)
                {
                    fallback();
                    surrogate_1st = '\u0000';
                    continue;
                }

                if (ch < 0x10000)
                {
                    if (this.bigEndian)
                    {
                        ch = swap(ch);
                    }
                    writePair((byte)ch, (byte)(ch >> 8));
                }
                else if (ch <= 0x10FFFF)
                {
                    ch = Script.Write<char>("ch - 0x10000"); //?????

                    char lowBits = (char)((ch & 0x3FF) | 0xDC00);
                    char highBits = (char)(((ch >> 10) & 0x3FF) | 0xD800);

                    if (this.bigEndian)
                    {
                        highBits = swap(highBits);
                        lowBits = swap(lowBits);
                    }
                    writePair((byte)highBits, (byte)(highBits >> 8));
                    writePair((byte)lowBits, (byte)(lowBits >> 8));
                }
                else
                {
                    fallback();
                }
            }

            if (surrogate_1st != 0)
            {
                fallback();
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
                    throw new System.Exception("Invalid character in UTF16 text");
                }

                result += this.fallbackCharacter;
            };

            Func<char, char> swap = ch => (char)(((byte)ch << 8) | (byte)(ch >> 8));

            Func<char?> readPair = () =>
            {
                if ((position + 2) > endpoint)
                {
                    position = position + 2;
                    return null;
                }

                var a = bytes[position++];
                var b = bytes[position++];

                var point = (char)((a << 8) | b);
                if (!this.bigEndian)
                {
                    point = swap(point);
                }

                return point;
            };

            while (position < endpoint)
            {
                var firstWord = readPair();

                if (!firstWord.HasValue)
                {
                    fallback();
                }
                else if ((firstWord < 0xD800) || (firstWord > 0xDFFF))
                {
                    result += Encoding.FromCharCode(firstWord.Value);
                }
                else if ((firstWord >= 0xD800) && (firstWord <= 0xDBFF))
                {
                    var end = position >= endpoint;
                    var secondWord = readPair();
                    if (end)
                    {
                        fallback();
                    }
                    else if (!secondWord.HasValue)
                    {
                        fallback();
                        fallback();
                    }
                    else if ((secondWord >= 0xDC00) && (secondWord <= 0xDFFF))
                    {
                        var highBits = firstWord & 0x3FF;
                        var lowBits = secondWord & 0x3FF;

                        var charCode = ((highBits << 10) | lowBits) + 0x10000;

                        result += Encoding.FromCharCode(charCode.Value);
                    }
                    else
                    {
                        fallback();
                        position = position - 2;
                    }
                }
                else
                {
                    fallback();
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
            byteCount <<= 1;

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

            var charCount = (long)(byteCount >> 1) + (byteCount & 1) + 1;

            if (charCount > 0x7fffffff)
            {
                throw new System.ArgumentOutOfRangeException("byteCount");
            }

            return (int)charCount;
        }
    }
}