using System.Collections.Generic;

using Bridge;

namespace Bridge.Html5
{
    /// <summary>
    /// The class that extends DOMTokenList with settable .Value property
    /// </summary>
    [Ignore]
    [Name("DOMSettableTokenList")]
    public class DOMSettableTokenList : DOMTokenList
    {
        protected internal DOMSettableTokenList()
        {
        }

        /// <summary>
        /// Gets or sets the underlying string.
        /// </summary>
        public string Value;
    }
}
