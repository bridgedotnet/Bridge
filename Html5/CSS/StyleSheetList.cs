using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5
{
    /// <summary>
    /// The StyleSheetList interface provides the abstraction of an ordered collection of style sheets.
    /// The items in the StyleSheetList are accessible via an integral index, starting from 0.
    /// </summary>
    [External]
    [Name("StyleSheetList")]
    public class StyleSheetList : IEnumerable<StyleSheet>
    {
        internal StyleSheetList()
        {
        }

        public virtual StyleSheet this[int index]
        {
            get
            {
                return null;
            }
        }

        [Name("item")]
        public virtual StyleSheet GetItem(int index)
        {
            return null;
        }

        public readonly int Length;

        public virtual IEnumerator<StyleSheet> GetEnumerator()
        {
            return null;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return null;
        }
    }
}
