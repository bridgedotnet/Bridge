namespace Bridge.Translator.Tests.Assembly.Issues
{
    class N2795
    {
        class ShouldFail
        {
            class NoNestedTypesInVirtualClass
            {
                [Virtual]
                class NestedClassInVirtualClass
                {
                    class NestedClass
                    {
                    }
                }

                [Virtual]
                class NestedInterfaceInVirtualClass
                {
                    class NestedInterface
                    {
                    }
                }

                [Virtual]
                class NestedEnumInVirtualClass
                {
                    class NestedEnum
                    {
                    }
                }
            }
        }

        class ShouldNotFail
        {
            class VirtualTypes
            {
                [Virtual]
                class VirtualClass1
                {
                }

                [Virtual(VirtualTarget.Class)]
                class VirtualClass2
                {
                }

                [Virtual(VirtualTarget.All)]
                class VirtualClass4
                {
                }

                [Virtual]
                interface VirtualInterface1
                {
                }

                [Virtual(VirtualTarget.Interface)]
                interface VirtualInterface3
                {
                }

                [Virtual(VirtualTarget.All)]
                interface VirtualInterface4
                {
                }

                [Virtual]
                enum VirtualEnum1
                {
                }

                [Virtual(VirtualTarget.Class)]
                enum VirtualEnum2
                {
                }

                [Virtual(VirtualTarget.All)]
                enum VirtualEnum4
                {
                }
            }

            class NonVirtualTypes
            {
                [Virtual(VirtualTarget.Interface)]
                class VirtualClass3
                {
                }

                [Virtual(VirtualTarget.Class)]
                interface VirtualInterface2
                {
                }

                [Virtual(VirtualTarget.Interface)]
                enum VirtualEnum3
                {
                }
            }
        }
    }
}
