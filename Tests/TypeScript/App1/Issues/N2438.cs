using System.Collections.Generic;

namespace TypeScript.Issues
{
    public class N2438
    {
        public bool isDefaultCtor;
        public N2438()
        {
            isDefaultCtor = true;
        }

        public N2438(int arg)
        {
            Attribute = arg;
        }

        public int Attribute { get; set; }
    }
}