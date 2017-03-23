using Bridge;

namespace System.ComponentModel
{
    [EditorBrowsable(EditorBrowsableState.Never)]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Constructor | AttributeTargets.Method | AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Event | AttributeTargets.Delegate | AttributeTargets.Interface)]
    [External]
    [NonScriptable]
    public sealed class EditorBrowsableAttribute : Attribute
    {
        public extern EditorBrowsableAttribute(EditorBrowsableState state);

        public extern EditorBrowsableState State
        {
            get;
        }
    }

    [EditorBrowsable(EditorBrowsableState.Never)]
    [External]
    [NonScriptable]
    public enum EditorBrowsableState
    {
        Always = 0,
        Never = 1,
        Advanced = 2
    }
}