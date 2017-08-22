using System.Text.RegularExpressions;
using Bridge;
using Bridge.Internal.Html5;

namespace System.Text
{
    [Reflectable]
    [FileName("system\\text\\encoding.js")]
    public class UTF7Encoding : Encoding
    {
        private bool allowOptionals;

        public UTF7Encoding() : this(false)
        {
        }

        public UTF7Encoding(bool allowOptionals)
        {
            this.allowOptionals = allowOptionals;
            this.fallbackCharacter = '\uFFFD';
        }

        public override int CodePage => 65000;
        public override string EncodingName => "Unicode (UTF-7)";

        private static string Escape(string chars)
        {
            return Script.Write<string>("chars.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, '\\\\$&')");
        }

        protected override byte[] Encode(string s, byte[] outputBytes, int outputIndex, out int writtenBytes)
        {
            var setD = "A-Za-z0-9" + Escape("'(),-./:?");

            Func<string, string> encode = (str) =>
            {
                var b = new byte[str.Length * 2];
                var bi = 0;
                for (var i = 0; i < str.Length; i++)
                {
                    var c = str[i];
                    b[bi++] = (c >> 8).As<byte>();
                    b[bi++] = (c & 0xFF).As<byte>();
                }
                var base64Str = System.Convert.ToBase64String(b);
                return Script.Write<string>("base64Str.replace(/=+$/, '')");
            };

            var setO = Escape("!\"#$%&*;<=>@[]^_`{|}");
            var setW = Escape(" \r\n\t");

            s = Script.Write<string>("s.replace(new RegExp(\"[^\" + setW + setD + (this.allowOptionals ? setO : \"\") + \"]+\", 'g'), function(chunk) {return '+' + (chunk === '+' ? '' : encode(chunk)) + '-';})");

            var arr = s.ToCharArray();

            if (outputBytes != null)
            {
                var recorded = 0;

                if (arr.Length > (outputBytes.Length - outputIndex))
                {
                    throw new System.ArgumentException("bytes");
                }

                for (var j = 0; j < arr.Length; j++)
                {
                    outputBytes[j + outputIndex] = arr[j].As<byte>();
                    recorded++;
                }

                writtenBytes = recorded;
                return null;
            }

            writtenBytes = arr.Length;

            return new Uint8Array(arr).As<byte[]>();
        }

        protected override string Decode(byte[] bytes, int index, int count, char[] chars, int charIndex)
        {
            Func<string, char[]> _base64ToArrayBuffer = (base64) =>
            {
                try
                {
                    var binary_string = Script.Write<string>("window.atob(base64)");
                    var len = binary_string.Length;
                    var arr = new char[len];

                    if (len == 1 && binary_string[0] == 0)
                    {
                        return new char[0];
                    }

                    for (var i = 0; i < len; i++)
                    {
                        arr[i] = binary_string[i];
                    }
                    return arr;
                }
                catch (Exception)
                {
                    return new char[0];
                }
            };

            Func<string, string> decode = (s) =>
            {
                var b = _base64ToArrayBuffer(s);
                var r = new char[0];
                for (var i = 0; i < b.Length;)
                {
                    r.Push((char)(b[i++] << 8 | b[i++]));
                }
                return new string(r);
            };

            var str = new string(bytes.As<char[]>(), index, count);
            return Script.Write<string>(@"str.replace(/\+([A-Za-z0-9\/]*)-?/gi, function (_, chunk) {if (chunk === '') {return _ == '+-' ? '+' : '';}return decode(chunk);})");
        }

        public override int GetMaxByteCount(int charCount)
        {
            if (charCount < 0)
            {
                throw new System.ArgumentOutOfRangeException("charCount");
            }

            var byteCount = (long)charCount * 3 + 2;

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

            var charCount = byteCount;
            if (charCount == 0)
            {
                charCount = 1;
            }

            return charCount | 0;
        }
    }
}