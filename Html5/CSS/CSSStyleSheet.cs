namespace Bridge.Html5
{
    /// <summary>
    /// An object implementing the CSSStyleSheet interface represents a single CSS style sheet.
    /// </summary>
    [External]
    [Name("CSSStyleSheet")]
    public partial class CSSStyleSheet : StyleSheet
    {
        protected extern internal CSSStyleSheet();

        /// <summary>
        /// Returns a CSSRuleList of the CSS rules in the style sheet.
        /// </summary>
        public readonly CSSRule[] CssRules;

        /// <summary>
        /// If this style sheet is imported into the document using an @import rule, the ownerRule property will return that CSSImportRule, otherwise it returns null.
        /// </summary>
        public readonly CSSRule OwnerRule;

        /// <summary>
        /// Deletes a rule from the style sheet.
        /// </summary>
        /// <param name="index"> is a number representing the position of the rule.</param>
        public virtual extern void DeleteRule(int index);

        /// <summary>
        /// Inserts a new style rule into the current style sheet.
        /// </summary>
        /// <param name="rule">is a DOMString containing the rule to be inserted (selector and declaration).</param>
        /// <param name="index">is a unsigned int representing the position to be inserted.</param>
        /// <returns>The index within the style sheet's rule collection of the newly inserted rule.</returns>
        public virtual extern int InsertRule(string rule, int index);
    }
}