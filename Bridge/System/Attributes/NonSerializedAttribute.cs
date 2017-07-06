using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;

namespace System
{
    [AttributeUsage(AttributeTargets.Field, Inherited = false)]
    [ComVisible(true)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class NonSerializedAttribute : Attribute
    {

    }
}
