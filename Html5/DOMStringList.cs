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
        extern internal DOMStringList();

        /// <summary>
        /// returns a DOMString (a string)
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public virtual extern string this[int index] { get; }

        /// <summary>
        ///  Returns true/false depending on whether the given string is in the list
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public virtual extern bool Contains(string str);

        /// <summary>
        ///  returns a DOMString (a string)
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [Name("item")]
        public virtual extern string GetItem(int index);

        /// <summary>
        /// Gives length of the list
        /// </summary>
        public readonly int Length;

        public virtual extern IEnumerator<string> GetEnumerator();

        extern IEnumerator IEnumerable.GetEnumerator();
    }
}