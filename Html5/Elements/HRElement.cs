using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLHRElement interface provides special properties (beyond those of the HTMLElement interface it also has available to it by inheritance) for manipulating &lt;hr&gt; elements.
    /// </summary>
    [External]
    [Name("HTMLHRElement")]
    public class HRElement : Element<HRElement>
    {
        [Template("document.createElement('hr')")]
        public HRElement()
        {
        }

        /// <summary>
        /// The name of the color of the rule.
        /// </summary>
        public string Color;

        /// <summary>
        /// Sets the rule to have no shading.
        /// </summary>
        [Name("noshade")]
        public Boolean NoShade;

        /// <summary>
        /// The height of the rule.
        /// </summary>
        public string Size;

        /// <summary>
        /// The width of the rule on the page.
        /// </summary>
        public string Width;
    }
}
