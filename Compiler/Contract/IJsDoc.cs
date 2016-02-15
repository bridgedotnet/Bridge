using System.Collections.Generic;

namespace Bridge.Contract
{
    public interface IJsDoc
    {
        List<string> Namespaces
        {
            get;
            set;
        }

        List<string> Callbacks
        {
            get;
            set;
        }

        void Init();
    }
}