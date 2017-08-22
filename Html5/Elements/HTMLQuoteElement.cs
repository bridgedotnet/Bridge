using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLQuoteElement interface provides special properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating quoting elements, like &lt;blockquote&gt; and &lt;q&gt;, but not the &lt;cite&gt; element.
    /// </summary>
    [External]
    [Name("HTMLQuoteElement")]
    public sealed class HTMLQuoteElement : HTMLElement<HTMLQuoteElement>
    {
        [Template("document.createElement(\"blockquote\")")]
        public extern HTMLQuoteElement();

        [Template("document.createElement({0})")]
        public HTMLQuoteElement(QuoteType type)
        {
        }

        /// <summary>
        /// Reflects the cite HTML attribute, containing a URL for the source of the quotation.
        /// </summary>
        public string Cite;
    }

    /// <summary>
    /// Specifies the type of quote: &lt;blockquote&gt; or &lt;q&gt;
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum QuoteType
    {
        /// <summary>
        /// &lt;blockquote&gt;&lt;/blockquote&gt;
        /// </summary>
        BlockQuote,

        /// <summary>
        /// &lt;q&gt;&lt;/q&gt;
        /// </summary>
        Q
    }
}