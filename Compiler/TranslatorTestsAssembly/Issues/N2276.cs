using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.Translator.Tests.Assembly.Issues
{
    class N2276
    {
        class ShouldFail
        {
            [ObjectLiteral]
            class ObjectLiteralNoVirtualMethods1
            {
                public virtual void VirtualMethod()
                {
                }
            }

            [ObjectLiteral(ObjectCreateMode.Plain)]
            class ObjectLiteralNoVirtualMethods2
            {
                public virtual void VirtualMethod()
                {
                }
            }

            [ObjectLiteral(ObjectInitializationMode.Ignore)]
            class ObjectLiteralNoVirtualMethods3
            {
                public virtual void VirtualMethod()
                {
                }
            }
        }
    }
}
