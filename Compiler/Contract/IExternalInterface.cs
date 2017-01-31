namespace Bridge.Contract
{
    public interface IExternalInterface
    {
        bool IsVirtual
        {
            get;
            set;
        }

        bool IsNativeImplementation
        {
            get;
            set;
        }

        bool IsSimpleImplementation
        {
            get;
            set;
        }

        bool IsDualImplementation
        {
            get;
        }
    }
}