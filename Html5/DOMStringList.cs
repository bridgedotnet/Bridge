using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5
{
    /// <summary>
    /// A type returned by some APIs which contains a list of DOMString (strings).
    /// </summary>
    [External]
    [Name("DOMStringList")]
    public class DOMStringList : IEnumerable<string>
    {
        internal DOMStringList()
        {
        }

        /// <summary>
        /// returns a DOMString (a string)
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public virtual string this[int index]
        {
            get
            {
                return null;
            }
        }

        /// <summary>
        ///  Returns true/false depending on whether the given string is in the list
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public virtual bool Contains(string str)
        {
            return false;
        }

        /// <summary>
        ///  returns a DOMString (a string)
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [Name("item")]
        public virtual string GetItem(int index)
        {
            return null;
        }

        /// <summary>
        /// Gives length of the list
        /// </summary>
        public readonly int Length;

        public virtual IEnumerator<string> GetEnumerator()
        {
            return null;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return null;
        }
    }
}
