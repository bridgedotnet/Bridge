namespace System.ComponentModel
{
    using System;

    /// <summary>
    /// Specifies whether a property or event should be displayed in a Properties window.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.All)]
    public sealed class BrowsableAttribute : Attribute
    {
        /// <summary>
        /// Specifies that a property or event can be modified at design time. This field is read-only.
        /// </summary>
        public static readonly BrowsableAttribute Yes = new BrowsableAttribute(true);

        /// <summary>
        /// Specifies that a property or event cannot be modified at design time. This field is read-only.
        /// </summary>
        public static readonly BrowsableAttribute No = new BrowsableAttribute(false);

        /// <summary>
        /// Specifies the default value for the BrowsableAttribute, which is BrowsableAttribute.Yes. This field is read-only.
        /// </summary>
        public static readonly BrowsableAttribute Default = Yes;

        private bool browsable = true;

        /// <summary>
        /// Initializes a new instance of the BrowsableAttribute class.
        /// </summary>
        /// <param name="browsable"></param>
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

        public override bool Equals(object obj)
        {
            if (obj == this)
            {
                return true;
            }

            BrowsableAttribute other = obj as BrowsableAttribute;

            return (other != null) && other.Browsable == browsable;
        }

        public override int GetHashCode()
        {
            return browsable.GetHashCode();
        }
    }
}