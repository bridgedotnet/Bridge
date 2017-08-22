using Bridge;
using Bridge.Internal.Html5;

namespace System.Text
{
    [Reflectable]
    [FileName("system\\text\\encoding.js")]
    public class UTF8Encoding : Encoding
    {
        private bool encoderShouldEmitUTF8Identifier;
        private bool throwOnInvalid;

        public UTF8Encoding() : this(false)
        {
        }

        public UTF8Encoding(bool encoderShouldEmitUTF8Identifier) : this(encoderShouldEmitUTF8Identifier, false)
        {
        }

        public UTF8Encoding(bool encoderShouldEmitUTF8Identifier, bool throwOnInvalidBytes)
        {
            this.encoderShouldEmitUTF8Identifier = encoderShouldEmitUTF8Identifier;
            this.throwOnInvalid = throwOnInvalidBytes;
            this.fallbackCharacter = '\uFFFD';
        }

        public override int CodePage => 65001;
        public override string EncodingName => "Unicode (UTF-8)";

        protected override byte[] Encode(string s, byte[] outputBytes, int outputIndex, out int writtenBytes)
        {
            var hasBuffer = outputBytes != null;
            var record = 0;

            Action<byte[]> write = args =>
            {
                var len = args.Length;
                for (var j = 0; j < len; j++)
                {
                    var code = args[j];
                    if (hasBuffer)
                    {
                        if (outputIndex >= outputBytes.Length)
                        {
                            throw new System.ArgumentException("bytes");
                        }

                        outputBytes[outputIndex++] = code;
                    }
                    else
                    {
                        outputBytes.Push(code);
                    }
                    record++;
                }
            };

            Func<char> fallback = () =>
            {
                if (this.throwOnInvalid)
                {
                    throw new System.Exception("Invalid character in UTF8 text");
                }

                return this.fallbackCharacter;
            };

            if (!hasBuffer)
            {
                outputBytes = new byte[0];
            }

            for (var i = 0; i < s.Length; i++)
            {
                var charcode = s[i];

                if ((charcode >= 0xD800) && (charcode <= 0xDBFF))
                {
                    var next = s[i + 1];
                    if (!((next >= 0xDC00) && (next <= 0xDFFF)))
                    {
                        charcode = fallback();
                    }
                }
                else if ((charcode >= 0xDC00) && (charcode <= 0xDFFF))
                {
                    charcode = fallback();
                }

                if (charcode < 0x80)
                {
                    write(new[] { charcode.As<byte>() });
                }
                else if (charcode < 0x800)
                {
                    write(new[] { (0xc0 | (charcode >> 6)).As<byte>(), (0x80 | (charcode & 0x3f)).As<byte>() });
                }
                else if (charcode < 0xd800 || charcode >= 0xe000)
                {
                    write(new[]{(0xe0 | (charcode >> 12)).As<byte>(),
                                (0x80 | ((charcode >> 6) & 0x3f)).As<byte>(),
                                (0x80 | (charcode & 0x3f)).As<byte>()});
                }
                else
                {
                    i++;
                    var code = 0x10000 + (((charcode & 0x3ff) << 10) | (s[i] & 0x3ff));
                    write(new[]{(0xf0 | (code >> 18)).As<byte>(),
                              (0x80 | ((code >> 12) & 0x3f)).As<byte>(),
                              (0x80 | ((code >> 6) & 0x3f)).As<byte>(),
                              (0x80 | (code & 0x3f)).As<byte>()});
                }
            }

            writtenBytes = record;

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
            var surrogate1 = '\u0000';
            var addFallback = false;
            var endpoint = position + count;

            for (; position < endpoint; position++)
            {
                var accumulator = 0;
                var extraBytes = 0;
                var hasError = false;
                var firstByte = bytes[position];

                if (firstByte <= 0x7F)
                {
                    accumulator = firstByte;
                }
                else if ((firstByte & 0x40) == 0)
                {
                    hasError = true;
                }
                else if ((firstByte & 0xE0) == 0xC0)
                {
                    accumulator = firstByte & 31;
                    extraBytes = 1;
                }
                else if ((firstByte & 0xF0) == 0xE0)
                {
                    accumulator = firstByte & 15;
                    extraBytes = 2;
                }
                else if ((firstByte & 0xF8) == 0xF0)
                {
                    accumulator = firstByte & 7;
                    extraBytes = 3;
                }
                else if ((firstByte & 0xFC) == 0xF8)
                {
                    accumulator = firstByte & 3;
                    extraBytes = 4;
                    hasError = true;
                }
                else if ((firstByte & 0xFE) == 0xFC)
                {
                    accumulator = firstByte & 3;
                    extraBytes = 5;
                    hasError = true;
                }
                else
                {
                    accumulator = firstByte;
                    hasError = false;
                }

                while (extraBytes > 0)
                {
                    position++;

                    if (position >= endpoint)
                    {
                        hasError = true;
                        break;
                    }

                    var extraByte = bytes[position];
                    extraBytes--;

                    if ((extraByte & 0xC0) != 0x80)
                    {
                        position--;
                        hasError = true;
                        break;
                    }

                    accumulator = (accumulator << 6) | (extraByte & 0x3F);
                }

                /*if ((accumulator == 0xFFFE) || (accumulator == 0xFFFF)) {
                    hasError = true;
                }*/

                string characters = null;
                addFallback = false;
                if (!hasError)
                {
                    if (surrogate1 > 0 && !((accumulator >= 0xDC00) && (accumulator <= 0xDFFF)))
                    {
                        hasError = true;
                        surrogate1 = '\u0000';
                    }
                    else if ((accumulator >= 0xD800) && (accumulator <= 0xDBFF))
                    {
                        surrogate1 = (char)accumulator;
                    }
                    else if ((accumulator >= 0xDC00) && (accumulator <= 0xDFFF))
                    {
                        hasError = true;
                        addFallback = true;
                        surrogate1 = '\u0000';
                    }
                    else
                    {
                        characters = Encoding.FromCharCode(accumulator);
                        surrogate1 = '\u0000';
                    }
                }

                if (hasError)
                {
                    if (this.throwOnInvalid)
                    {
                        throw new System.Exception("Invalid character in UTF8 text");
                    }

                    result += this.fallbackCharacter;
                }
                else if (surrogate1 == 0)
                {
                    result += characters;
                }
            }

            if (surrogate1 > 0 || addFallback)
            {
                if (this.throwOnInvalid)
                {
                    throw new System.Exception("Invalid character in UTF8 text");
                }

                if (result.Length > 0 && result[result.Length - 1] == this.fallbackCharacter)
                {
                    result += this.fallbackCharacter;
                }
                else
                {
                    result += this.fallbackCharacter + this.fallbackCharacter;
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
            byteCount *= 3;

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

            var charCount = (long)byteCount + 1;

            if (charCount > 0x7fffffff)
            {
                throw new System.ArgumentOutOfRangeException("byteCount");
            }

            return (int)charCount;
        }
    }
}