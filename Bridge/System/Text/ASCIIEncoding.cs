using Bridge;

namespace System.Text
{
    [External]
    [Reflectable]
    public class ASCIIEncoding : Encoding
    {
        public extern ASCIIEncoding();

        public override extern int GetByteCount(char[] chars, int index, int count);

        public override extern int GetBytes(char[] chars, int charIndex, int charCount, byte[] bytes, int byteIndex);

        public override extern int GetCharCount(byte[] bytes, int index, int count);

        public override extern int GetChars(byte[] bytes, int byteIndex, int byteCount, char[] chars, int charIndex);

        public override extern int GetMaxByteCount(int charCount);

        public override extern int GetMaxCharCount(int byteCount);
    }
}