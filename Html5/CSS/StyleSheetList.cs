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
        extern internal StyleSheetList();

        public extern virtual StyleSheet this[int index] { get; }

        [Name("item")]
        public virtual extern StyleSheet GetItem(int index);

        public readonly int Length;

        public virtual extern IEnumerator<StyleSheet> GetEnumerator();

        extern IEnumerator IEnumerable.GetEnumerator();
    }
}