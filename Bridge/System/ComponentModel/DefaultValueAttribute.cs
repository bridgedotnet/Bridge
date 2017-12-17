using Bridge;

namespace System.ComponentModel
{
    using System;

    /// <summary>
    /// Specifies the default value for a property.
    /// </summary>
    [AttributeUsage(AttributeTargets.All)]
    public class DefaultValueAttribute : Attribute
    {
        private object value;

        public DefaultValueAttribute(object value)
        {
            this.value = value;
        }

        public virtual object Value
        {
            get
            {
                return value;
            }
        }

        public override bool Equals(object obj)
        {
            if (obj == this)
            {
                return true;
            }

            DefaultValueAttribute other = obj as DefaultValueAttribute;

            if (other != null)
            {
                if (Value != null)
                {
                    return Value.Equals(other.Value);
                }
                else
                {
                    return (other.Value == null);
                }
            }
            return false;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        protected void SetValue(object value)
        {
            this.value = value;
        }
    }
}