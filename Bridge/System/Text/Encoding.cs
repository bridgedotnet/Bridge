using Bridge;

namespace System.Text
{
    /// <summary>
    /// Represents a character encoding.
    /// </summary>
    [Reflectable]
    [FileName("system\\text\\encoding.js")]
    public abstract class Encoding : IBridgeClass
    {
        /// <summary>
        /// When overridden in a derived class, gets the code page identifier of the current Encoding.
        /// </summary>
        public virtual int CodePage => 0;

        /// <summary>
        /// When overridden in a derived class, gets the human-readable description of the current encoding.
        /// </summary>
        public virtual string EncodingName => null;

        protected char fallbackCharacter = '?';

        /// <summary>
        /// Gets an encoding for the operating system's current ANSI code page.
        /// </summary>
        public static Encoding Default { get; } = new System.Text.UnicodeEncoding(false, true);

        /// <summary>
        /// Gets an encoding for the UTF-16 format using the little endian byte order.
        /// </summary>
        public static Encoding Unicode { get; } = new System.Text.UnicodeEncoding(false, true);

        /// <summary>
        /// Gets an encoding for the ASCII (7-bit) character set.
        /// </summary>
        public static Encoding ASCII { get; } = new System.Text.ASCIIEncoding();

        /// <summary>
        /// Gets an encoding for the UTF-16 format that uses the big endian byte order.
        /// </summary>
        public static Encoding BigEndianUnicode { get; } = new System.Text.UnicodeEncoding(true, true);

        /// <summary>
        /// Gets an encoding for the UTF-7 format.
        /// </summary>
        public static Encoding UTF7 { get; } = new System.Text.UTF7Encoding();

        /// <summary>
        /// Gets an encoding for the UTF-8 format.
        /// </summary>
        public static Encoding UTF8 { get; } = new System.Text.UTF8Encoding();

        /// <summary>
        /// Gets an encoding for the UTF-32 format using the little endian byte order.
        /// </summary>
        public static Encoding UTF32 { get; } = new System.Text.UTF32Encoding(false, true);

        /// <summary>
        /// Converts an entire byte array from one encoding to another.
        /// </summary>
        /// <param name="srcEncoding">The encoding format of bytes.</param>
        /// <param name="dstEncoding">The target encoding format.</param>
        /// <param name="bytes">The bytes to convert.</param>
        /// <returns>An array of type Byte containing the results of converting bytes from srcEncoding to dstEncoding.</returns>
        public static byte[] Convert(Encoding srcEncoding, Encoding dstEncoding, byte[] bytes)
        {
            return Convert(srcEncoding, dstEncoding, bytes, 0, bytes.Length);
        }

        /// <summary>
        /// Converts a range of bytes in a byte array from one encoding to another.
        /// </summary>
        /// <param name="srcEncoding">The encoding format of bytes.</param>
        /// <param name="dstEncoding">The target encoding format.</param>
        /// <param name="bytes">The bytes to convert.</param>
        /// <param name="index">The index of the first element of bytes to convert.</param>
        /// <param name="count">The number of bytes to convert.</param>
        /// <returns>An array of type Byte containing the result of converting a range of bytes in bytes from srcEncoding to dstEncoding.</returns>
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

        /// <summary>
        /// Returns the encoding associated with the specified code page identifier.
        /// </summary>
        /// <param name="codepage">The code page identifier of the preferred encoding. Possible values are listed in the Code Page column of the table that appears in the Encoding class topic -or- 0 (zero), to use the default encoding.</param>
        /// <returns>The encoding that is associated with the specified code page.</returns>
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

        /// <summary>
        /// Returns the encoding associated with the specified code page name.
        /// </summary>
        /// <param name="codepage">The code page name of the preferred encoding. Any value returned by the WebName property is valid. Possible values are listed in the Name column of the table that appears in the Encoding class topic.</param>
        /// <returns>The encoding associated with the specified code page.</returns>
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
        /// <summary>
        /// Returns an array that contains all encodings.
        /// </summary>
        /// <returns>An array that contains all encodings.</returns>
        public static EncodingInfo[] GetEncodings()
        {
            if (System.Text.Encoding._encodings != null)
            {
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

        /// <summary>
        /// When overridden in a derived class, calculates the number of bytes produced by encoding all the characters in the specified character array.
        /// </summary>
        /// <param name="chars">The character array containing the characters to encode.</param>
        /// <returns>The number of bytes produced by encoding all the characters in the specified character array.</returns>
        public virtual int GetByteCount(char[] chars)
        {
            return this.GetByteCount(chars, 0, chars.Length);
        }

        /// <summary>
        /// When overridden in a derived class, calculates the number of bytes produced by encoding the characters in the specified string.
        /// </summary>
        /// <param name="s">The string containing the set of characters to encode.</param>
        /// <returns>The number of bytes produced by encoding the specified characters.</returns>
        public virtual int GetByteCount(string s)
        {
            return this.Encode(s).Length;
        }

        /// <summary>
        /// When overridden in a derived class, calculates the number of bytes produced by encoding a set of characters from the specified character array.
        /// </summary>
        /// <param name="chars">The character array containing the set of characters to encode.</param>
        /// <param name="index">The index of the first character to encode.</param>
        /// <param name="count">The number of characters to encode.</param>
        /// <returns>The number of bytes produced by encoding the specified characters.</returns>
        public virtual int GetByteCount(char[] chars, int index, int count)
        {
            return this.Encode(chars, index, count).Length;
        }

        /// <summary>
        /// When overridden in a derived class, encodes all the characters in the specified character array into a sequence of bytes.
        /// </summary>
        /// <param name="chars">The character array containing the characters to encode.</param>
        /// <returns>A byte array containing the results of encoding the specified set of characters.</returns>
        public virtual byte[] GetBytes(char[] chars)
        {
            return this.GetBytes(chars, 0, chars.Length);
        }

        /// <summary>
        /// When overridden in a derived class, encodes a set of characters from the specified character array into a sequence of bytes.
        /// </summary>
        /// <param name="chars">The character array containing the set of characters to encode.</param>
        /// <param name="index">The index of the first character to encode.</param>
        /// <param name="count">The number of characters to encode.</param>
        /// <returns>A byte array containing the results of encoding the specified set of characters.</returns>
        public virtual byte[] GetBytes(char[] chars, int index, int count)
        {
            return this.Encode(new string(chars, index, count));
        }

        /// <summary>
        /// When overridden in a derived class, encodes a set of characters from the specified character array into the specified byte array.
        /// </summary>
        /// <param name="chars">The character array containing the set of characters to encode.</param>
        /// <param name="charIndex">The index of the first character to encode.</param>
        /// <param name="charCount">The number of characters to encode.</param>
        /// <param name="bytes">The byte array to contain the resulting sequence of bytes.</param>
        /// <param name="byteIndex">The index at which to start writing the resulting sequence of bytes.</param>
        /// <returns>The actual number of bytes written into bytes.</returns>
        public virtual int GetBytes(char[] chars, int charIndex, int charCount, byte[] bytes, int byteIndex)
        {
            return this.Encode(chars, charIndex, charCount, bytes, byteIndex);
        }

        /// <summary>
        /// When overridden in a derived class, encodes all the characters in the specified string into a sequence of bytes.
        /// </summary>
        /// <param name="s">The string containing the characters to encode.</param>
        /// <returns>A byte array containing the results of encoding the specified set of characters.</returns>
        public virtual byte[] GetBytes(string s)
        {
            return this.Encode(s);
        }

        /// <summary>
        /// When overridden in a derived class, encodes a set of characters from the specified string into the specified byte array.
        /// </summary>
        /// <param name="s">The string containing the set of characters to encode.</param>
        /// <param name="charIndex">The index of the first character to encode.</param>
        /// <param name="charCount">The number of characters to encode.</param>
        /// <param name="bytes">The byte array to contain the resulting sequence of bytes.</param>
        /// <param name="byteIndex">The index at which to start writing the resulting sequence of bytes.</param>
        /// <returns>The actual number of bytes written into bytes.</returns>
        public virtual int GetBytes(string s, int charIndex, int charCount, byte[] bytes, int byteIndex)
        {
            return this.Encode(s, charIndex, charCount, bytes, byteIndex);
        }

        /// <summary>
        /// When overridden in a derived class, calculates the number of characters produced by decoding all the bytes in the specified byte array.
        /// </summary>
        /// <param name="bytes">The byte array containing the sequence of bytes to decode.</param>
        /// <returns>The number of characters produced by decoding the specified sequence of bytes.</returns>
        public virtual int GetCharCount(byte[] bytes)
        {
            return this.Decode(bytes).Length;
        }

        /// <summary>
        /// When overridden in a derived class, calculates the number of characters produced by decoding a sequence of bytes from the specified byte array.
        /// </summary>
        /// <param name="bytes">The byte array containing the sequence of bytes to decode.</param>
        /// <param name="index">The index of the first byte to decode.</param>
        /// <param name="count">The number of bytes to decode.</param>
        /// <returns>The number of characters produced by decoding the specified sequence of bytes.</returns>
        public int GetCharCount(byte[] bytes, int index, int count)
        {
            return this.Decode(bytes, index, count).Length;
        }

        /// <summary>
        /// When overridden in a derived class, decodes all the bytes in the specified byte array into a set of characters.
        /// </summary>
        /// <param name="bytes">The byte array containing the sequence of bytes to decode.</param>
        /// <returns>A character array containing the results of decoding the specified sequence of bytes.</returns>
        public virtual char[] GetChars(byte[] bytes)
        {
            return this.Decode(bytes).ToCharArray();
        }

        /// <summary>
        /// When overridden in a derived class, decodes a sequence of bytes from the specified byte array into a set of characters.
        /// </summary>
        /// <param name="bytes">The byte array containing the sequence of bytes to decode.</param>
        /// <param name="index">The index of the first byte to decode.</param>
        /// <param name="count">The number of bytes to decode.</param>
        /// <returns>A character array containing the results of decoding the specified sequence of bytes.</returns>
        public virtual char[] GetChars(byte[] bytes, int index, int count)
        {
            return this.Decode(bytes, index, count).ToCharArray();
        }

        /// <summary>
        /// When overridden in a derived class, decodes a sequence of bytes from the specified byte array into the specified character array.
        /// </summary>
        /// <param name="bytes">The byte array containing the sequence of bytes to decode.</param>
        /// <param name="byteIndex">The index of the first byte to decode.</param>
        /// <param name="byteCount">The number of bytes to decode.</param>
        /// <param name="chars">The character array to contain the resulting set of characters.</param>
        /// <param name="charIndex">The index at which to start writing the resulting set of characters.</param>
        /// <returns>The actual number of characters written into chars.</returns>
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

        /// <summary>
        /// When overridden in a derived class, decodes all the bytes in the specified byte array into a string.
        /// </summary>
        /// <param name="bytes">The byte array containing the sequence of bytes to decode.</param>
        /// <returns>A string that contains the results of decoding the specified sequence of bytes.</returns>
        public virtual string GetString(byte[] bytes)
        {
            return this.Decode(bytes);
        }

        /// <summary>
        /// When overridden in a derived class, decodes a sequence of bytes from the specified byte array into a string.
        /// </summary>
        /// <param name="bytes">The byte array containing the sequence of bytes to decode.</param>
        /// <param name="index">The index of the first byte to decode.</param>
        /// <param name="count">The number of bytes to decode.</param>
        /// <returns>A string that contains the results of decoding the specified sequence of bytes.</returns>
        public virtual string GetString(byte[] bytes, int index, int count)
        {
            return this.Decode(bytes, index, count);
        }

        /// <summary>
        /// When overridden in a derived class, calculates the maximum number of bytes produced by encoding the specified number of characters.
        /// </summary>
        /// <param name="charCount">The number of characters to encode.</param>
        /// <returns>The maximum number of bytes produced by encoding the specified number of characters.</returns>
        public abstract int GetMaxByteCount(int charCount);

        /// <summary>
        /// When overridden in a derived class, calculates the maximum number of characters produced by decoding the specified number of bytes.
        /// </summary>
        /// <param name="byteCount">The number of bytes to decode.</param>
        /// <returns>The maximum number of characters produced by decoding the specified number of bytes.</returns>
        public abstract int GetMaxCharCount(int byteCount);

        [Template("System.String.fromCharCode({code})")]
        internal static extern string FromCharCode(int code);
    }
}