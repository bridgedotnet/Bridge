using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TestProject.Issues
{
    // #2262 Support Assembly target for ExternalInterfaceAttribute.
    class N2262
    {
        public void DoSomething()
        {
            I2262 i = new CI2262();

            // [ExternalInterface(true)] should be applied on Assembly level
            i.Count = 1;
        }

        class CI2262 : I2262
        {
            public int Count
            {
                get; set;
            }
        }


        interface I2262
        {
            int Count
            {
                get; set;
            }
        }
    }
}
