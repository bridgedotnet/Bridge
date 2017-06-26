namespace Bridge.Html5
{
    [External]
    [Name("CSSValue")]
    public class CSSValue
    {
        protected extern internal CSSValue();

        /// <summary>
        /// The value is a custom value.
        /// </summary>
        public const ushort CSS_CUSTOM = 3;

        /// <summary>
        /// The value is inherited and the cssText contains "inherit".
        /// </summary>
        public const ushort CSS_INHERIT = 0;

        /// <summary>
        /// The value is a primitive value and an instance of the CSSPrimitiveValue interface can be obtained by using binding-specific casting methods on this instance of the CSSValue interface.
        /// </summary>
        public const ushort CSS_PRIMITIVE_VALUE = 1;

        /// <summary>
        /// The value is a CSSValue list and an instance of the CSSValueList interface can be obtained by using binding-specific casting methods on this instance of the CSSValue interface.
        /// </summary>
        public const ushort CSS_VALUE_LIST = 2;

        /// <summary>
        /// A string representation of the current value.
        /// </summary>
        public string CssText;

        /// <summary>
        /// A code defining the type
        /// </summary>
        public readonly ushort CssValueType;
    }
}