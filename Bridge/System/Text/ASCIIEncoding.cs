using Bridge;
using Bridge.Internal.Html5;

namespace System.Text
{
    [Reflectable]
    [FileName("system\\text\\encoding.js")]
    public class ASCIIEncoding : Encoding
    {
        public override int CodePage => 20127;

        public override string EncodingName => "US-ASCII";

        protected override byte[] Encode(string s, byte[] outputBytes, int outputIndex, out int writtenBytes)
        {
            var hasBuffer = outputBytes != null;

            if (!hasBuffer)
            {
                outputBytes = new byte[0];
            }

            var recorded = 0;
            for (var i = 0; i < s.Length; i++)
            {
                var ch = s[i];
                var byteCode = (byte)(ch <= 127 ? ch : this.fallbackCharacter);

                if (hasBuffer)
                {
                    if ((i + outputIndex) >= outputBytes.Length)
                    {
                        throw new System.ArgumentException("bytes");
                    }
                    outputBytes[i + outputIndex] = byteCode;
                }
                else
                {
                    outputBytes.Push(byteCode);
                }
                recorded++;
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

            for (; position < endpoint; position++)
            {
                var byteCode = bytes[position];

                if (byteCode > 127)
                {
                    result += this.fallbackCharacter;
                }
                else
                {
                    result += ((char)byteCode).ToString();
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

            long byteCount = (long)charCount + 1;

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

            long charCount = (long)byteCount;

            if (charCount > 0x7fffffff)
            {
                throw new System.ArgumentOutOfRangeException("byteCount");
            }

            return (int)charCount;
        }
    }
}