using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5
{
    /// <summary>
    /// The generic version of the HTMLCollection class.
    /// HTMLCollection is an class representing a generic collection (array) of elements (in document order) and offers methods and properties for selecting from the list.
    /// </summary>
    [External]
    [Name("HTMLCollection")]
    public class HTMLCollection<T> : IEnumerable<T> where T : Element
    {
        protected internal HTMLCollection()
        {
        }

        /// <summary>
        /// Returns the specific node at the given zero-based index into the list. Returns null if the index is out of range.
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public virtual T this[int index]
        {
            get
            {
                return null;
            }
        }

        /// <summary>
        /// Returns the specific node whose ID or, as a fallback, name matches the string specified by name. Matching by name is only done as a last resort, only in HTML, and only if the referenced element supports the name attribute. Returns null if no node exists by the given name.
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public new virtual T this[string name]
        {
            get
            {
                return null;
            }
        }

        /// <summary>
        /// Returns the specific node at the given zero-based index into the list. Returns null if the index is out of range.
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [Name("item")]
        public virtual T GetItem(int index)
        {
            return null;
        }

        /// <summary>
        /// Returns the specific node whose ID or, as a fallback, name matches the string specified by name. Matching by name is only done as a last resort, only in HTML, and only if the referenced element supports the name attribute. Returns null if no node exists by the given name.
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        [Name("namedItem")]
        public virtual T GetNamedItem(string name)
        {
            return null;
        }

        /// <summary>
        /// The number of items in the collection.
        /// </summary>
        public readonly int Length;

        public virtual IEnumerator<T> GetEnumerator()
        {
            return null;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return null;
        }
    }

    /// <summary>
    /// The non-generic version of the HTMLCollection class.
    /// HTMLCollection is an class representing a generic collection (array) of elements (in document order) and offers methods and properties for selecting from the list.
    /// </summary>
    [External]
    [Name("HTMLCollection")]
    public class HTMLCollection : HTMLCollection<Element>
    {
    }
}
