namespace Bridge.Contract.Constants
{
    public class CS
    {
        public class NS
        {
            public const string GLOBAL = "global::";
            public const string BRIDGE = "Bridge";
            public const string SYSTEM = "System";
        }

        public class Bridge
        {
            public const string DOTNAME = NS.BRIDGE + ".";
        }

        public class System
        {
            public const string DOTNAME = NS.SYSTEM + ".";
        }

        public class Attributes
        {
            public const string ACCESSORSINDEXER_ATTRIBUTE_NAME = "Bridge.AccessorsIndexerAttribute";
            public const string READY_ATTRIBUTE_NAME = "Bridge.Html5.ReadyAttribute";
            public const string FIELD_PROPERTY_NAME = "Bridge.FieldPropertyAttribute";
            public const string SERIALIZABLE_NAME = "Bridge.SerializableAttribute";
            public const string COMPILER_GENERATED_NAME = "System.Runtime.CompilerServices.CompilerGeneratedAttribute";

            public class Template
            {
                public const string PROPERTY_FN = "Fn";
            }
        }

        public class Methods
        {
            public const string AUTO_STARTUP_METHOD_NAME = "Main";
            public const string EQUALS = "Equals";
            public const string GETHASHCODE = "GetHashCode";
            public const string TOSTRING = "ToString";
        }

        public class Ops
        {
            public const string CAST = "cast";
            public const string AS = "as";
            public const string IS = "is";
        }

        public class Types
        {
            public const string System_Byte = "System.Byte";
            public const string System_SByte = "System.SByte";
            public const string System_Int16 = "System.Int16";
            public const string System_UInt16 = "System.UInt16";
            public const string System_Int32 = "System.Int32";
            public const string System_UInt32 = "System.UInt32";
            public const string System_Single = "System.Single";
            public const string System_Double = "System.Double";

            public class System
            {
                private const string DOTNAME = "System.";

                public class Exception
                {
                    public const string NAME = System.DOTNAME + "Exception";
                    private const string DOTNAME = NAME + ".";
                }
            }
        }

        public class Wrappers
        {
            public const string CONSTRUCTORWRAPPER = "$ctorWrapper";

            public class Params
            {
                public const string BODY = "{body}";
            }
        }
    }
}