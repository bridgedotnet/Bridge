using Bridge;

namespace System.ComponentModel
{
    using System;

    /// <summary>
    /// Specifies whether a property or event should be displayed in a Properties window.
    /// </summary>
    [AttributeUsage(AttributeTargets.All)]
    [EditorBrowsable(EditorBrowsableState.Never)]
    [External]
    [NonScriptable]
    public sealed class BrowsableAttribute : Attribute
    {
        /// <summary>
        /// Specifies that a property or event can be modified at design time. This static field is read-only.
        /// </summary>
        public static readonly BrowsableAttribute Yes = new BrowsableAttribute(true);

        /// <summary>
        /// Specifies that a property or event cannot be modified at design time. This static field is read-only.
        /// </summary>
        public static readonly BrowsableAttribute No = new BrowsableAttribute(false);

        /// <summary>
        /// Specifies the default value for the BrowsableAttribute, which is Yes. This static field is read-only.
        /// </summary>
        public static readonly BrowsableAttribute Default = Yes;

        private bool browsable = true;

        /// <summary>
        /// Initializes a new instance of the BrowsableAttribute class.
        /// </summary>
        /// <param name="browsable">true if a property or event can be modified at design time; otherwise, false. The default is true.</param>
        public BrowsableAttribute(bool browsable)
        {
            this.browsable = browsable;
        }

        /// <summary>
        /// Gets a value indicating whether an object is browsable.
        /// </summary>
        public bool Browsable
        {
            get
            {
                return browsable;
            }
        }
    }
}