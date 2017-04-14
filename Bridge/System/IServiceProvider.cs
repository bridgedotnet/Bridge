using Bridge;

namespace System
{
    [External]
    [NonScriptable]
    public interface IServiceProvider
    {
        Object GetService(Type serviceType);
    }
}