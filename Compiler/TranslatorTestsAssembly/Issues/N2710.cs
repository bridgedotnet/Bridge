using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.Translator.Tests.Assembly.Issues
{
    class N2710
    {
        class ShouldFail
        {
            #region Auxuliary types

            [External]
            [ObjectLiteral(ObjectCreateMode.Constructor)]
            class ObjectLiteralConstructorBase
            {
            }

            [External]
            [ObjectLiteral(ObjectCreateMode.Plain)]
            class ObjectLiteralPlainBase
            {
            }

            interface IMethods
            {
                void DoSomething();
            }

            interface IProperties
            {
                int Count
                {
                    get;
                }
            }

            interface INonObjectLiteral
            {
            }

            [External]
            [ObjectLiteral(ObjectCreateMode.Plain)]
            interface IObjectLiteralPlain
            {
            }

            [External]
            [ObjectLiteral(ObjectCreateMode.Constructor)]
            interface IObjectLiteralConstructor
            {
            }

            #endregion Auxuliary types

            class NoVirtualMethods
            {
                [External]
                [ObjectLiteral]
                class ObjectLiteralNoVirtualMethods1
                {
                    public virtual void VirtualMethod()
                    {
                    }
                }

                [External]
                [ObjectLiteral(ObjectCreateMode.Plain)]
                class ObjectLiteralNoVirtualMethods2
                {
                    public virtual void VirtualMethod()
                    {
                    }
                }

                [External]
                [ObjectLiteral(ObjectInitializationMode.Ignore)]
                class ObjectLiteralNoVirtualMethods3
                {
                    public virtual void VirtualMethod()
                    {
                    }
                }
            }

            class PlainNoCreateModeCustomConstructor
            {
                [External]
                [ObjectLiteral]
                class ObjectLiteralNoCreateModeCustomConstructor1
                {
                    public ObjectLiteralNoCreateModeCustomConstructor1(ObjectCreateMode mode)
                    {
                    }
                }

                [External]
                [ObjectLiteral(ObjectCreateMode.Plain)]
                class ObjectLiteralNoCreateModeCustomConstructor2
                {
                    public ObjectLiteralNoCreateModeCustomConstructor2(ObjectCreateMode mode)
                    {
                    }
                }

                [External]
                [ObjectLiteral(ObjectInitializationMode.Ignore)]
                class ObjectLiteralNoCreateModeCustomConstructor3
                {
                    public ObjectLiteralNoCreateModeCustomConstructor3(ObjectCreateMode mode)
                    {
                    }
                }
            }

            class PlainCustomConstructor
            {
                [External]
                [ObjectLiteral]
                class ObjectLiteralCustomConstructor1
                {
                    public ObjectLiteralCustomConstructor1(ObjectInitializationMode mode, int i)
                    {
                    }
                }

                [External]
                [ObjectLiteral(ObjectCreateMode.Plain)]
                class ObjectLiteralCustomConstructor2
                {
                    public ObjectLiteralCustomConstructor2(ObjectInitializationMode mode, string s)
                    {
                    }
                }

                [External]
                [ObjectLiteral(ObjectInitializationMode.Ignore)]
                class ObjectLiteralCustomConstructor3
                {
                    public ObjectLiteralCustomConstructor3(ObjectInitializationMode mode, object o)
                    {
                    }
                }
            }

            class PlainInheritance
            {
                [External]
                [ObjectLiteral(ObjectCreateMode.Plain)]
                class ObjectLiteralInherited1 : ObjectLiteralConstructorBase
                {
                }

                [External]
                [ObjectLiteral(ObjectInitializationMode.Ignore)]
                class ObjectLiteralInherited2 : ObjectLiteralConstructorBase
                {
                }
            }

            class ConstructorInheritance
            {
                [External]
                [ObjectLiteral(ObjectCreateMode.Constructor)]
                class ObjectLiteralInherited1 : ObjectLiteralPlainBase
                {
                }
            }

            class InterfaceNoOverloadMethods
            {
                [External]
                [ObjectLiteral]
                interface ObjectLiteralInterface1
                {
                    void DoSomething();
                    void DoSomething(int i);
                }

                [External]
                [ObjectLiteral(ObjectCreateMode.Constructor)]
                interface ObjectLiteralInterface2
                {
                    void DoSomething();
                    void DoSomething(int i);
                }
            }

            class InterfaceNoEvents
            {
                [External]
                [ObjectLiteral]
                interface ObjectLiteralInterface1
                {
                    event EventHandler SomeEvent;
                }

                [External]
                [ObjectLiteral(ObjectCreateMode.Constructor)]
                interface ObjectLiteralInterface2
                {
                    event EventHandler SomeEvent;
                }
            }

            class InterfaceNoExplicitImplementation
            {
                [External]
                [ObjectLiteral(ObjectCreateMode.Plain)]
                class ObjectLiteralInherited1 : IMethods
                {
                    void IMethods.DoSomething()
                    {
                    }
                }

                [External]
                [ObjectLiteral(ObjectCreateMode.Plain)]
                class ObjectLiteralInherited2 : IProperties
                {
                    int IProperties.Count
                    {
                        get;
                    }
                }

                [External]
                [ObjectLiteral(ObjectCreateMode.Constructor)]
                class ObjectLiteralInherited3 : IMethods
                {
                    void IMethods.DoSomething()
                    {
                    }
                }

                [External]
                [ObjectLiteral(ObjectCreateMode.Constructor)]
                class ObjectLiteralInherited4 : IProperties
                {
                    int IProperties.Count
                    {
                        get;
                    }
                }
            }

            class InterfaceInheritance
            {
                [External]
                [ObjectLiteral(ObjectCreateMode.Constructor)]
                class ObjectLiteralInherited1 : IObjectLiteralConstructor, INonObjectLiteral
                {

                }

                [External]
                [ObjectLiteral(ObjectCreateMode.Constructor)]
                class ObjectLiteralInherited2 : INonObjectLiteral
                {

                }

                [ObjectLiteral(ObjectCreateMode.Plain)]
                class ObjectLiteralInherited3 : IObjectLiteralConstructor, INonObjectLiteral
                {

                }

                [ObjectLiteral(ObjectCreateMode.Plain)]
                class ObjectLiteralInherited4 : INonObjectLiteral
                {

                }
            }
        }
    }
}
