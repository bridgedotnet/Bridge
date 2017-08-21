using Bridge;

namespace System.Text
{
    [Reflectable]
    [FileName("system\\text\\encoding.js")]
    public abstract class Encoding : IBridgeClass
    {
        public virtual int CodePage => 0;

        public virtual string EncodingName => null;

        protected char fallbackCharacter = '?';

        public static Encoding Default { get; } = new System.Text.UnicodeEncoding(false, true);

        public static Encoding Unicode { get; } = new System.Text.UnicodeEncoding(false, true);

        public static Encoding ASCII { get; } = new System.Text.ASCIIEncoding();

        public static Encoding BigEndianUnicode { get; } = new System.Text.UnicodeEncoding(true, true);

        public static Encoding UTF7 { get; } = new System.Text.UTF7Encoding();

        public static Encoding UTF8 { get; } = new System.Text.UTF8Encoding();

        public static Encoding UTF32 { get; } = new System.Text.UTF32Encoding(false, true);

        public static byte[] Convert(Encoding srcEncoding, Encoding dstEncoding, byte[] bytes)
        {
            return Convert(srcEncoding, dstEncoding, bytes, 0, bytes.Length);
        }

        public static byte[] Convert(Encoding srcEncoding, Encoding dstEncoding, byte[] bytes, int index, int count)
        {
            if (srcEncoding == null || dstEncoding == null)
            {
                throw new System.ArgumentNullException(srcEncoding == null ? "srcEncoding" : "dstEncoding");
            }

            if (bytes == null)
            {
                throw new System.ArgumentNullException("bytes");
            }

            return dstEncoding.GetBytes(srcEncoding.GetChars(bytes, index, count));
        }

        public static Encoding GetEncoding(int codepage)
        {
            switch (codepage)
            {
                case 1200:
                    return System.Text.Encoding.Unicode;
                case 20127:
                    return System.Text.Encoding.ASCII;
                case 1201:
                    return System.Text.Encoding.BigEndianUnicode;
                case 65000:
                    return System.Text.Encoding.UTF7;
                case 65001:
                    return System.Text.Encoding.UTF8;
                case 12000:
                    return System.Text.Encoding.UTF32;

            }
            throw new NotSupportedException();
        }

        public static Encoding GetEncoding(string codepage)
        {
            switch (codepage)
            {
                case "utf-16":
                    return System.Text.Encoding.Unicode;
                case "us-ascii":
                    return System.Text.Encoding.ASCII;
                case "utf-16BE":
                    return System.Text.Encoding.BigEndianUnicode;
                case "utf-7":
                    return System.Text.Encoding.UTF7;
                case "utf-8":
                    return System.Text.Encoding.UTF8;
                case "utf-32":
                    return System.Text.Encoding.UTF32;

            }
            throw new NotSupportedException();
        }

        private static EncodingInfo[] _encodings;
        public static EncodingInfo[] GetEncodings()
        {
            if (System.Text.Encoding._encodings != null) {
                return System.Text.Encoding._encodings;
            }
            System.Text.Encoding._encodings = new EncodingInfo[6];
            var result = System.Text.Encoding._encodings;

            result[0] = new System.Text.EncodingInfo(20127, "us-ascii", "US-ASCII");
            result[1] = new System.Text.EncodingInfo(1200, "utf-16", "Unicode");
            result[2] = new System.Text.EncodingInfo(1201, "utf-16BE", "Unicode (Big-Endian)");
            result[3] = new System.Text.EncodingInfo(65000, "utf-7", "Unicode (UTF-7)");
            result[4] = new System.Text.EncodingInfo(65001, "utf-8", "Unicode (UTF-8)");
            result[5] = new System.Text.EncodingInfo(1200, "utf-32", "Unicode (UTF-32)");
            return result;
        }

        protected abstract byte[] Encode(string s, byte[] outputBytes, int outputIndex, out int writtenBytes);

        protected byte[] Encode(char[] chars, int index, int count)
        {
            int writtenCount;
            return this.Encode(new string(chars, index, count), null, 0, out writtenCount);
        }

        protected int Encode(string s, int index, int count, byte[] outputBytes, int outputIndex)
        {
            int writtenBytes;
            this.Encode(s.Substring(index, count), outputBytes, outputIndex, out writtenBytes);
            return writtenBytes;
        }

        protected int Encode(char[] chars, int index, int count, byte[] outputBytes, int outputIndex)
        {
            int writtenBytes;
            this.Encode(new string(chars, index, count), outputBytes, outputIndex, out writtenBytes);
            return writtenBytes;
        }

        protected byte[] Encode(char[] chars)
        {
            int count;
            return this.Encode(new string(chars), null, 0, out count);
        }

        protected byte[] Encode(string str)
        {
            int count;
            return this.Encode(str, null, 0, out count);
        }

        protected abstract string Decode(byte[] bytes, int index, int count, char[] chars, int charIndex);

        protected string Decode(byte[] bytes, int index, int count)
        {
            return this.Decode(bytes, index, count, null, 0);
        }

        protected string Decode(byte[] bytes)
        {
            return this.Decode(bytes, 0, bytes.Length, null, 0);
        }

        public virtual int GetByteCount(char[] chars)
        {
            return this.GetByteCount(chars, 0, chars.Length);
        }

        public virtual int GetByteCount(string s)
        {
            return this.Encode(s).Length;
        }

        public virtual int GetByteCount(char[] chars, int index, int count)
        {
            return this.Encode(chars, index, count).Length;
        }

        public virtual byte[] GetBytes(char[] chars)
        {
            return this.GetBytes(chars, 0, chars.Length);
        }

        public virtual byte[] GetBytes(char[] chars, int index, int count)
        {
            return this.Encode(new string(chars, index, count));
        }

        public virtual int GetBytes(char[] chars, int charIndex, int charCount, byte[] bytes, int byteIndex)
        {
            return this.Encode(chars, charIndex, charCount, bytes, byteIndex);
        }

        public virtual byte[] GetBytes(string s)
        {
            return this.Encode(s);
        }

        public virtual int GetBytes(string s, int charIndex, int charCount, byte[] bytes, int byteIndex)
        {
            return this.Encode(s, charIndex, charCount, bytes, byteIndex);
        }

        public virtual int GetCharCount(byte[] bytes)
        {
            return this.Decode(bytes).Length;
        }

        public int GetCharCount(byte[] bytes, int index, int count)
        {
            return this.Decode(bytes, index, count).Length;
        }

        public virtual char[] GetChars(byte[] bytes)
        {
            return this.Decode(bytes).ToCharArray();
        }

        public virtual char[] GetChars(byte[] bytes, int index, int count)
        {
            return this.Decode(bytes, index, count).ToCharArray();
        }

        public int GetChars(byte[] bytes, int byteIndex, int byteCount, char[] chars, int charIndex)
        {
            var s = this.Decode(bytes, byteIndex, byteCount);
            var arr = s.ToCharArray();

            if (chars.Length < (arr.Length + charIndex))
            {
                throw new System.ArgumentException(null, "chars");
            }

            for (var i = 0; i < arr.Length; i++)
            {
                chars[charIndex + i] = arr[i];
            }

            return arr.Length;
        }

        public virtual string GetString(byte[] bytes)
        {
            return this.Decode(bytes);
        }

        public virtual string GetString(byte[] bytes, int index, int count)
        {
            return this.Decode(bytes, index, count);
        }

        public abstract int GetMaxByteCount(int charCount);

        public abstract int GetMaxCharCount(int byteCount);

        [Template("System.String.fromCharCode({code})")]
        internal static extern string FromCharCode(int code);
    }
}