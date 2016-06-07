using System;

namespace Bridge.Html5
{
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum DropEffect
    {
        None,
        Copy,
        Link,
        Move
    }
}
