using System;

namespace Bridge.Html5
{
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum EffectAllowed
    {
        None,
        Copy,
        CopyLink,
        CopyMove,
        Link,
        LinkMove,
        Move,
        All,
        Uninitialized
    }
}
