using Bridge;

namespace System.Text
{
    [External]
    [Reflectable]
    public class StringBuilder : IBridgeClass
    {
        public extern StringBuilder();

        public extern StringBuilder(string value);

        public extern StringBuilder(string value, int startIndex, int length);

        public extern StringBuilder(string value, int startIndex, int length, int capacity);

        public extern StringBuilder(string value, int capacity);

        [Template("new System.Text.StringBuilder(\"\", {capacity})")]
        public extern StringBuilder(int capacity);

        public override extern string ToString();

        public extern string ToString(int startIndex, int length);

        /// <summary>
        /// Gets or sets the length of the current StringBuilder object.
        /// </summary>
        public extern int Length
        {
            [Template("getLength()")]
            get;
            [Template("setLength({0})")]
            set;
        }

        public extern int Capacity
        {
            [Template("getCapacity()")]
            get;
            [Template("setCapacity({0})")]
            set;
        }

        public extern StringBuilder Append(bool value);

        public extern StringBuilder Append(byte value);

        [Template("append(String.fromCharCode({value}))")]
        public extern StringBuilder Append(char value);

        public extern StringBuilder Append(decimal value);

        public extern StringBuilder Append(double value);

        public extern StringBuilder Append(float value);

        public extern StringBuilder Append(int value);

        [Template("{this}.append({value}.toString())")]
        public extern StringBuilder Append(long value);

        public extern StringBuilder Append(object value);

        public extern StringBuilder Append(string value);

        public extern StringBuilder Append(uint value);

        [Template("{this}.append({value}.toString())")]
        public extern StringBuilder Append(ulong value);

        [Template("append(String.fromCharCode({value}), {repeatCount})")]
        public extern StringBuilder Append(char value, int repeatCount);

        public extern StringBuilder Append(string value, int startIndex, int count);

        public extern StringBuilder AppendFormat(string format, params object[] args);

        public extern StringBuilder AppendLine();

        public extern StringBuilder AppendLine(string value);

        public extern StringBuilder Clear();

        public extern bool Equals(StringBuilder sb);

        public extern StringBuilder Insert(int index, bool value);

        [Template("insert({index}, String.fromCharCode({value}))")]
        public extern StringBuilder Insert(int index, char value);

        public extern StringBuilder Insert(int index, decimal value);

        public extern StringBuilder Insert(int index, double value);

        public extern StringBuilder Insert(int index, float value);

        public extern StringBuilder Insert(int index, int value);

        [Template("{this}.insert({index}, {value}.toString())")]
        public extern StringBuilder Insert(int index, long value);

        public extern StringBuilder Insert(int index, object value);

        public extern StringBuilder Insert(int index, string value);

        public extern StringBuilder Insert(int index, uint value);

        [Template("{this}.insert({index}, {value}.toString())")]
        public extern StringBuilder Insert(int index, ulong value);

        public extern StringBuilder Insert(int index, string value, int count);

        public extern StringBuilder Remove(int startIndex, int length);

        [Template("replace(String.fromCharCode({oldChar}), String.fromCharCode({newChar}))")]
        public extern StringBuilder Replace(char oldChar, char newChar);

        public extern StringBuilder Replace(string oldValue, string newValue);

        [Template("replace(String.fromCharCode({oldChar}), String.fromCharCode({newChar}), {startIndex}, {count})")]
        public extern StringBuilder Replace(char oldChar, char newChar, int startIndex, int count);

        public extern StringBuilder Replace(string oldValue, string newValue, int startIndex, int count);

        [Name("Char")]
        [AccessorsIndexer]
        public extern char this[int index]
        {
            get;
            set;
        }
    }
}