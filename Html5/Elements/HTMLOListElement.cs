using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLOListElement interface provides special properties (beyond those defined on the regular HTMLElement interface it also has available to it by inheritance) for manipulating ordered list elements.
    /// </summary>
    [External]
    [Name("HTMLOListElement")]
    public sealed class HTMLOListElement : HTMLElement<HTMLOListElement>
    {
        [Template("document.createElement(\"ol\")")]
        public extern HTMLOListElement();

        /// <summary>
        /// Is a Boolean value reflecting the reversed and defining if the numbering is descending, that is its value is true, or ascending (false).
        /// </summary>
        public bool Reversed;

        /// <summary>
        /// Is a long value reflecting the start and defining the value of the first number of the first element of the list.
        /// </summary>
        public int Start;

        /// <summary>
        /// Is a DOMString value reflecting the type and defining the kind of marker to be used to display. It can have the following values:
        /// '1' meaning that decimal numbers are used: 1, 2, 3, 4, 5, …
        /// 'a' meaning that the lowercase latin alphabet is used:  a, b, c, d, e, …
        /// 'A' meaning that the uppercase latin alphabet is used: A, B, C, D, E, …
        /// 'i' meaning that the lowercase latin numerals are used: i, ii, iii, iv, v, …
        /// 'I' meaning that the uppercase latin numerals are used: I, II, III, IV, V, …
        /// </summary>
        public OListType Type;
    }

    /// <summary>
    /// Defines the kind of marker to be used to display with an &lt;ol&gt;. Reflects to the &lt;ol&gt;'s type attribute.
    /// </summary>
    [External]
    [Enum(Emit.StringName)]
    [Name("String")]
    public enum OListType
    {
        /// <summary>
        /// Reflects to '1' value of the &lt;ol&gt;'s type attribute meaning that decimal numbers are used: 1, 2, 3, 4, 5, …
        /// </summary>
        [Name("1")]
        DecimalNumbers,

        /// <summary>
        /// Reflects to 'a' value of the &lt;ol&gt;'s type attribute meaning that the lowercase latin alphabet is used:  a, b, c, d, e, …
        /// </summary>
        [Name("a")]
        LowercaseLatinAlphabet,

        /// <summary>
        /// Reflects to 'A' value of the &lt;ol&gt;'s type attribute meaning that the uppercase latin alphabet is used: A, B, C, D, E, …
        /// </summary>
        [Name("A")]
        UppercaseLatinAlphabet,

        /// <summary>
        /// Reflects to 'i' value of the &lt;ol&gt;'s type attribute meaning that the lowercase latin numerals are used: i, ii, iii, iv, v, …
        /// </summary>
        [Name("i")]
        LowercaseLatinNumerals,

        /// <summary>
        /// Reflects to 'I' value of the &lt;ol&gt;'s type attribute meaning that the uppercase latin numerals are used: I, II, III, IV, V, …
        /// </summary>
        [Name("I")]
        UppercaseLatinNumerals
    }
}