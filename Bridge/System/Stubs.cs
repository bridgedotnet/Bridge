using System.ComponentModel;

namespace System
{
    [Bridge.External]
    public abstract class ValueType
    {
    }

    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public struct IntPtr
    {
    }

    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public struct UIntPtr
    {
    }

    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public class ParamArrayAttribute
    {
    }

    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public struct RuntimeTypeHandle
    {
    }

    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public struct RuntimeFieldHandle
    {
    }

    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.NonScriptable]
    public struct RuntimeMethodHandle
    {
    }
}