namespace Bridge.Html5
{
    /// <summary>
    /// The class that extends DOMTokenList with settable .Value property
    /// </summary>
    [External]
    [Name("DOMSettableTokenList")]
    public class DOMSettableTokenList : DOMTokenList
    {
        protected extern internal DOMSettableTokenList();

        /// <summary>
        /// Gets or sets the underlying string.
        /// </summary>
        public string Value;
    }
}