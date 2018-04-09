using System;

namespace Bridge
{
    [NonScriptable]
    [AttributeUsage(AttributeTargets.All)]
    public sealed class PrivateProtectedAttribute : Attribute
    {
    }
}