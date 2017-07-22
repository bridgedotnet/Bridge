using Bridge;

namespace System.Text
{
    [External]
    [Reflectable]
    public abstract class Encoding : IBridgeClass
    {
        public static extern byte[] Convert(Encoding srcEncoding, Encoding dstEncoding, byte[] bytes);

        public static extern byte[] Convert(Encoding srcEncoding, Encoding dstEncoding, byte[] bytes, int index, int count);

        public static extern Encoding GetEncoding(int codepage);

        public static extern Encoding GetEncoding(string name);

        public virtual extern int CodePage { get; }

        public virtual extern int GetByteCount(char[] chars);

        public virtual extern int GetByteCount(string s);

        public abstract int GetByteCount(char[] chars, int index, int count);

        public virtual extern byte[] GetBytes(char[] chars);

        public virtual extern byte[] GetBytes(char[] chars, int index, int count);

        public abstract int GetBytes(char[] chars, int charIndex, int charCount, byte[] bytes, int byteIndex);

        public virtual extern byte[] GetBytes(string s);

        public virtual extern int GetBytes(string s, int charIndex, int charCount, byte[] bytes, int byteIndex);

        public virtual extern int GetCharCount(byte[] bytes);

        public abstract int GetCharCount(byte[] bytes, int index, int count);

        public virtual extern char[] GetChars(byte[] bytes);

        public virtual extern char[] GetChars(byte[] bytes, int index, int count);

        public abstract int GetChars(byte[] bytes, int byteIndex, int byteCount, char[] chars, int charIndex);

        public virtual extern string GetString(byte[] bytes);

        public virtual extern string GetString(byte[] bytes, int index, int count);

        public abstract int GetMaxByteCount(int charCount);

        public abstract int GetMaxCharCount(int byteCount);

        public static extern Encoding Default { get; }

        public static extern Encoding Unicode { get; }

        public static extern Encoding ASCII { get; }

        public static extern Encoding BigEndianUnicode { get; }

        public static extern Encoding UTF7 { get; }

        public static extern Encoding UTF8 { get; }

        public static extern Encoding UTF32 { get; }

        public virtual extern String EncodingName
        {
            get;
        }
    }
}