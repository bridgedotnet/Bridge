using System;
using System.Linq;
using System.Collections.Generic;

using Bridge.Contract;

using Mono.Cecil;

using NSubstitute;

namespace Bridge.Translator.Tests.Helpers
{
    class TestAssemblyHelper
    {
        /// <summary>
        /// Contains classes names contained in Bridge.Translator.Tests.Assembly.dll with types to be tested
        /// </summary>
        public class TestClassNames
        {
            private const string PREFIX = "Bridge.Translator.Tests.Assembly.";

            public class Issues
            {
                private const string PREFIX = TestClassNames.PREFIX + "Issues.";

                public class N2276
                {
                    private const string PREFIX = Issues.PREFIX + "N2276.";

                    public class ShouldFail
                    {
                        private const string PREFIX = N2276.PREFIX + "ShouldFail.";

                        public const string NO_VIRTUAL_METHODS = PREFIX + "NoVirtualMethods";
                        public const string PLAIN_NO_CREATE_MODE_CUSTOM_CONSTRUCTOR = PREFIX + "PlainNoCreateModeCustomConstructor";
                        public const string PLAIN_CUSTOM_CONSTRUCTOR = PREFIX + "PlainCustomConstructor";
                        public const string PLAIN_INHERITANCE = PREFIX + "PlainInheritance";
                        public const string CONSTRUCTOR_INHERITANCE = PREFIX + "ConstructorInheritance";
                        public const string INTERFACE_NO_OVERLOAD_METHODS = PREFIX + "InterfaceNoOverloadMethods";
                        public const string INTERFACE_NO_EVENTS = PREFIX + "InterfaceNoEvents";
                        public const string INTERFACE_NO_EXPLICIT_IMPLEMENTATION = PREFIX + "InterfaceNoExplicitImplementation";
                        public const string INTERFACE_INHERITANCE = PREFIX + "InterfaceInheritance";
                    }
                }

                public class N2710
                {
                    private const string PREFIX = Issues.PREFIX + "N2710.";

                    public class ShouldFail
                    {
                        private const string PREFIX = N2710.PREFIX + "ShouldFail.";

                        public const string NO_VIRTUAL_METHODS = PREFIX + "NoVirtualMethods";
                        public const string PLAIN_NO_CREATE_MODE_CUSTOM_CONSTRUCTOR = PREFIX + "PlainNoCreateModeCustomConstructor";
                        public const string PLAIN_CUSTOM_CONSTRUCTOR = PREFIX + "PlainCustomConstructor";
                        public const string PLAIN_INHERITANCE = PREFIX + "PlainInheritance";
                        public const string CONSTRUCTOR_INHERITANCE = PREFIX + "ConstructorInheritance";
                        public const string INTERFACE_NO_OVERLOAD_METHODS = PREFIX + "InterfaceNoOverloadMethods";
                        public const string INTERFACE_NO_EVENTS = PREFIX + "InterfaceNoEvents";
                        public const string INTERFACE_NO_EXPLICIT_IMPLEMENTATION = PREFIX + "InterfaceNoExplicitImplementation";
                        public const string INTERFACE_INHERITANCE = PREFIX + "InterfaceInheritance";
                    }
                }

                public class N2795
                {
                    private const string PREFIX = Issues.PREFIX + "N2795.";

                    public class ShouldFail
                    {
                        private const string PREFIX = N2795.PREFIX + "ShouldFail.";

                        public const string NO_NESTED_TYPES = PREFIX + "NoNestedTypesInVirtualClass";
                    }


                    public class ShouldNotFail
                    {
                        private const string PREFIX = N2795.PREFIX + "ShouldNotFail.";

                        public const string VIRTUAL_TYPES = PREFIX + "VirtualTypes";
                        public const string NON_VIRTUAL_TYPES = PREFIX + "NonVirtualTypes";
                    }
                }
            }
        }
    }
}
