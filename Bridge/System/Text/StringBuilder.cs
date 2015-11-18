using Bridge;

namespace System.Text
{
    [External]
    [Namespace("Bridge.Text")]
    public class StringBuilder : IBridgeClass
    {
        public StringBuilder()
            : this(string.Empty)
        {
        }

        public StringBuilder(string value)
            : this(value, 0, ((value != null) ? value.Length : 0))
        {
        }

        public StringBuilder(string value, int startIndex, int length)
        {
        }

        public StringBuilder(string value, int capacity)
        {
        }

        [Template("new Bridge.Text.StringBuilder(\"\", {capacity})")]
        public StringBuilder(int capacity)
            : this(string.Empty, capacity)
        {
        }

        public override string ToString()
        {
            return null;
        }

        public string ToString(int startIndex, int length)
        {
            return null;
        }

        /// <summary>
        /// Gets or sets the length of the current StringBuilder object.
        /// </summary>
        public int Length
        {
            get;
            set;
        }

        public int Capacity
        {
            get;
            set;
        }

        public StringBuilder Append(bool value)
        {
            return new StringBuilder();
        }

        public StringBuilder Append(byte value)
        {
            return new StringBuilder();
        }

        [Template("append(String.fromCharCode({value}))")]
        public StringBuilder Append(char value)
        {
            return new StringBuilder();
        }

        public StringBuilder Append(decimal value)
        {
            return new StringBuilder();
        }

        public StringBuilder Append(double value)
        {
            return new StringBuilder();
        }

        public StringBuilder Append(float value)
        {
            return new StringBuilder();
        }

        public StringBuilder Append(int value)
        {
            return new StringBuilder();
        }

        public StringBuilder Append(long value)
        {
            return new StringBuilder();
        }

        public StringBuilder Append(object value)
        {
            return new StringBuilder();
        }

        public StringBuilder Append(string value)
        {
            return new StringBuilder();
        }

        public StringBuilder Append(uint value)
        {
            return new StringBuilder();
        }

        public StringBuilder Append(ulong value)
        {
            return new StringBuilder();
        }

        [Template("append(String.fromCharCode({value}), {repeatCount})")]
        public StringBuilder Append(char value, int repeatCount)
        {
            return new StringBuilder();
        }

        public StringBuilder Append(string value, int startIndex, int count)
        {
            return new StringBuilder();
        }

        public StringBuilder AppendFormat(string format, params object[] args)
        {
            return new StringBuilder();
        }

        public StringBuilder AppendLine()
        {
            return new StringBuilder();
        }

        public StringBuilder AppendLine(string value)
        {
            return new StringBuilder();
        }

        public StringBuilder Clear()
        {
            return new StringBuilder();
        }

        public bool Equals(StringBuilder sb)
        {
            return false;
        }

        public StringBuilder Insert(int index, bool value)
        {
            return new StringBuilder();
        }

        [Template("insert({index}, String.fromCharCode({value}))")]
        public StringBuilder Insert(int index, char value)
        {
            return new StringBuilder();
        }

        public StringBuilder Insert(int index, decimal value)
        {
            return new StringBuilder();
        }

        public StringBuilder Insert(int index, double value)
        {
            return new StringBuilder();
        }

        public StringBuilder Insert(int index, float value)
        {
            return new StringBuilder();
        }

        public StringBuilder Insert(int index, int value)
        {
            return new StringBuilder();
        }

        public StringBuilder Insert(int index, long value)
        {
            return new StringBuilder();
        }

        public StringBuilder Insert(int index, object value)
        {
            return new StringBuilder();
        }

        public StringBuilder Insert(int index, string value)
        {
            return new StringBuilder();
        }

        public StringBuilder Insert(int index, uint value)
        {
            return new StringBuilder();
        }

        public StringBuilder Insert(int index, ulong value)
        {
            return new StringBuilder();
        }

        public StringBuilder Insert(int index, string value, int count)
        {
            return new StringBuilder();
        }

        public StringBuilder Remove(int startIndex, int length)
        {
            return new StringBuilder();
        }

        [Template("replace(String.fromCharCode({oldChar}), String.fromCharCode({newChar}))")]
        public StringBuilder Replace(char oldChar, char newChar)
        {
            return new StringBuilder();
        }

        public StringBuilder Replace(string oldValue, string newValue)
        {
            return new StringBuilder();
        }

        [Template("replace(String.fromCharCode({oldChar}), String.fromCharCode({newChar}), {startIndex}, {count})")]
        public StringBuilder Replace(char oldChar, char newChar, int startIndex, int count)
        {
            return new StringBuilder();
        }

        public StringBuilder Replace(string oldValue, string newValue, int startIndex, int count)
        {
            return new StringBuilder();
        }
    }
}
