using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5
{
    /// <summary>
    /// This type represents a set of space-separated tokens.
    /// </summary>
    [External]
    [Name("DOMTokenList")]
    public class DOMTokenList : IEnumerable<string>
    {
        protected extern internal DOMTokenList();

        /// <summary>
        /// Returns an item in the list by its index (or undefined if the number is greater than or equal to the length of the list, prior to Gecko 7.0 returned null)
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public virtual extern string this[int index] { get; }

        /// <summary>
        /// Returns an item in the list by its index (or undefined if the number is greater than or equal to the length of the list, prior to Gecko 7.0 returned null)
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [Name("item")]
        public virtual extern string GetItem(int index);

        /// <summary>
        ///  return true if the underlying string contains token, otherwise false
        /// </summary>
        /// <param name="token"></param>
        /// <returns></returns>
        public virtual extern bool Contains(string token);

        /// <summary>
        /// adds token to the underlying string
        /// </summary>
        /// <param name="token"></param>
        public virtual extern void Add(string token);

        /// <summary>
        /// Remove token from the underlying string
        /// </summary>
        /// <param name="token"></param>
        public virtual extern void Remove(string token);

        /// <summary>
        /// Removes token from string and returns false. If token doesn't exist it's added and the function returns true
        /// </summary>
        /// <param name="token"></param>
        /// <returns></returns>
        public virtual extern bool Toggle(string token);

        /// <summary>
        /// Removes token from string and returns false. If token doesn't exist it's added and the function returns true
        /// </summary>
        /// <param name="token"></param>
        /// <param name="force"></param>
        /// <returns></returns>
        public virtual extern bool Toggle(string token, bool force);

        public readonly int Length;

        public virtual extern IEnumerator<string> GetEnumerator();

        extern IEnumerator IEnumerable.GetEnumerator();
    }
}