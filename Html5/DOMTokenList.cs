using System.Collections.Generic;

using Bridge;
using System.Collections;

namespace Bridge.Html5
{
    /// <summary>
    /// This type represents a set of space-separated tokens.
    /// </summary>
    [Ignore]
    [Name("DOMTokenList")]
    public class DOMTokenList : IEnumerable<string>
    {
        protected internal DOMTokenList()
        {
        }

        /// <summary>
        /// Returns an item in the list by its index (or undefined if the number is greater than or equal to the length of the list, prior to Gecko 7.0 returned null)
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
        /// Returns an item in the list by its index (or undefined if the number is greater than or equal to the length of the list, prior to Gecko 7.0 returned null)
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [Name("item")]
        public virtual string GetItem(int index)
        {
            return null;
        }

        /// <summary>
        ///  return true if the underlying string contains token, otherwise false
        /// </summary>
        /// <param name="token"></param>
        /// <returns></returns>
        public virtual bool Contains(string token)
        {
            return false;
        }

        /// <summary>
        /// adds token to the underlying string
        /// </summary>
        /// <param name="token"></param>
        public virtual void Add(string token)
        {
        }

        /// <summary>
        /// Remove token from the underlying string
        /// </summary>
        /// <param name="token"></param>
        public virtual void Remove(string token)
        {
        }

        /// <summary>
        /// Removes token from string and returns false. If token doesn't exist it's added and the function returns true
        /// </summary>
        /// <param name="token"></param>
        /// <returns></returns>
        public virtual bool Toggle(string token)
        {
            return false;
        }

        /// <summary>
        /// Removes token from string and returns false. If token doesn't exist it's added and the function returns true
        /// </summary>
        /// <param name="token"></param>
        /// <param name="force"></param>
        /// <returns></returns>
        public virtual bool Toggle(string token, bool force)
        {
            return false;
        }

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
