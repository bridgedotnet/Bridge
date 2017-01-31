using Bridge.Contract;
using System.Text;

namespace Bridge.Translator
{
    public class ExternalInterface : IExternalInterface
    {
        public bool IsVirtual
        {
            get;
            set;
        }

        public bool IsNativeImplementation
        {
            get;
            set;
        }

        public bool IsSimpleImplementation
        {
            get;
            set;
        }

        public bool IsDualImplementation
        {
            get
            {
                return !this.IsNativeImplementation && !this.IsSimpleImplementation;
            }
        }
    }
}