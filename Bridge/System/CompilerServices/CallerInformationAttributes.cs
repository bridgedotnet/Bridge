using Bridge;

namespace System.Runtime.CompilerServices
{
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Parameter, Inherited = false)]
    public class CallerLineNumberAttribute : Attribute
    {
    }

    [NonScriptable]
    [AttributeUsage(AttributeTargets.Parameter, Inherited = false)]
    public class CallerFilePathAttribute : Attribute
    {
    }

    [NonScriptable]
    [AttributeUsage(AttributeTargets.Parameter, Inherited = false)]
    public class CallerMemberNameAttribute : Attribute
    {
    }
}