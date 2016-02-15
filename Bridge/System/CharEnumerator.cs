using Bridge;
using System.Collections;
using System.Collections.Generic;

namespace System
{
    [External]
    [Name("Bridge.CharEnumerator")]
    public sealed class CharEnumerator : IEnumerator, /*ICloneable,*/ IEnumerator<char>, IDisposable
    {
        private string str;
        private int index;
        private char currentElement;

        object IEnumerator.Current
        {
            get
            {
                if (this.index == -1)
                    throw new InvalidOperationException("InvalidOperation_EnumNotStarted");
                if (this.index >= this.str.Length)
                    throw new InvalidOperationException("InvalidOperation_EnumEnded");
                return (object)this.currentElement;
            }
        }

        public char Current
        {
            get
            {
                if (this.index == -1)
                    throw new InvalidOperationException("InvalidOperation_EnumNotStarted");
                if (this.index >= this.str.Length)
                    throw new InvalidOperationException("InvalidOperation_EnumEnded");
                return this.currentElement;
            }
        }

        internal CharEnumerator(string str)
        {
            this.str = str;
            this.index = -1;
        }

        public bool MoveNext()
        {
            if (this.index < this.str.Length - 1)
            {
                this.index = this.index + 1;
                this.currentElement = this.str[this.index];
                return true;
            }
            this.index = this.str.Length;
            return false;
        }

        public void Dispose()
        {
            if (this.str != null)
                this.index = this.str.Length;
            this.str = (string)null;
        }

        public void Reset()
        {
            this.currentElement = char.MinValue;
            this.index = -1;
        }
    }
}