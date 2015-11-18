using Bridge;

namespace System
{
    [External]
    [Name("Function")] 
    public class Type
    {
        public static Type GetTypeFromHandle(RuntimeTypeHandle typeHandle)
        {
            return null;
        }
    }

    [External]
    [Name("Object")] 
    public class ValueType
    {
    }

    [External]
    [Name("Object")] 
    public struct IntPtr
    {
    }

    [External]
    [Name("Object")] 
    public struct UIntPtr
    {
    }

    [External]
    [Name("Object")] 
    public class ParamArrayAttribute
    {
    }

    [External]
    [Name("Object")] 
    public struct RuntimeTypeHandle
    {
    }

    [External]
    [Name("Object")] 
    public struct RuntimeFieldHandle
    {
    }
}