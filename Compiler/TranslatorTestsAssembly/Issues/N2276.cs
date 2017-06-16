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
            #region Auxuliary types

            [ObjectLiteral(ObjectCreateMode.Constructor)]
            class ObjectLiteralConstructorBase
            {
            }

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

            [ObjectLiteral(ObjectCreateMode.Plain)]
            interface IObjectLiteralPlain
            {
            }

            [ObjectLiteral(ObjectCreateMode.Constructor)]
            interface IObjectLiteralConstructor
            {
            }

            #endregion Auxuliary types

            class NoVirtualMethods
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

            class PlainNoCreateModeCustomConstructor
            {
                [ObjectLiteral]
                class ObjectLiteralNoCreateModeCustomConstructor1
                {
                    public ObjectLiteralNoCreateModeCustomConstructor1(ObjectCreateMode mode)
                    {
                    }
                }

                [ObjectLiteral(ObjectCreateMode.Plain)]
                class ObjectLiteralNoCreateModeCustomConstructor2
                {
                    public ObjectLiteralNoCreateModeCustomConstructor2(ObjectCreateMode mode)
                    {
                    }
                }

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
                [ObjectLiteral]
                class ObjectLiteralCustomConstructor1
                {
                    public ObjectLiteralCustomConstructor1(ObjectInitializationMode mode, int i)
                    {
                    }
                }

                [ObjectLiteral(ObjectCreateMode.Plain)]
                class ObjectLiteralCustomConstructor2
                {
                    public ObjectLiteralCustomConstructor2(ObjectInitializationMode mode, string s)
                    {
                    }
                }

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
                [ObjectLiteral(ObjectCreateMode.Plain)]
                class ObjectLiteralInherited1: ObjectLiteralConstructorBase
                {
                }

                [ObjectLiteral(ObjectInitializationMode.Ignore)]
                class ObjectLiteralInherited2 : ObjectLiteralConstructorBase
                {
                }
            }

            class ConstructorInheritance
            {
                [ObjectLiteral(ObjectCreateMode.Constructor)]
                class ObjectLiteralInherited1 : ObjectLiteralPlainBase
                {
                }
            }

            class InterfaceNoOverloadMethods
            {
                [ObjectLiteral]
                interface ObjectLiteralInterface1
                {
                    void DoSomething();
                    void DoSomething(int i);
                }

                [ObjectLiteral(ObjectCreateMode.Constructor)]
                interface ObjectLiteralInterface2
                {
                    void DoSomething();
                    void DoSomething(int i);
                }
            }

            class InterfaceNoEvents
            {
                [ObjectLiteral]
                interface ObjectLiteralInterface1
                {
                    event EventHandler SomeEvent;
                }

                [ObjectLiteral(ObjectCreateMode.Constructor)]
                interface ObjectLiteralInterface2
                {
                    event EventHandler SomeEvent;
                }
            }

            class InterfaceNoExplicitImplementation
            {
                [ObjectLiteral(ObjectCreateMode.Plain)]
                class ObjectLiteralInherited1 : IMethods
                {
                    void IMethods.DoSomething()
                    {
                    }
                }

                [ObjectLiteral(ObjectCreateMode.Plain)]
                class ObjectLiteralInherited2 : IProperties
                {
                    int IProperties.Count
                    {
                        get;
                    }
                }

                [ObjectLiteral(ObjectCreateMode.Constructor)]
                class ObjectLiteralInherited3 : IMethods
                {
                    void IMethods.DoSomething()
                    {
                    }
                }

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
                [ObjectLiteral(ObjectCreateMode.Constructor)]
                class ObjectLiteralInherited1 : IObjectLiteralConstructor, INonObjectLiteral
                {

                }

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
