namespace Bridge.Contract.Constants
{
    using System.Collections.Generic;

    public class JS
    {
        public class NS
        {
            public const string BRIDGE = "Bridge";
        }

        public class Fields
        {
            public const string ENTRY_POINT = "$entryPoint";
            public const string MAIN = "$main";
            public const string KIND = "$kind";
            public const string LITERAL = "$literal";
            public const string VARIANCE = "$variance";
            public const string FLAGS = "$flags";
            public const string UNDERLYINGTYPE = "$utype";
            public const string ENUM = "$enum";
            public const string INHERITS = "inherits";
            public const string ENUMERABLE = "enumerable";
            public const string STRUCT = "$struct";
            public const string CONFIG = "config";
            public const string EVENTS = "events";
            public const string PROPERTIES = "props";
            public const string FIELDS = "fields";
            public const string METHODS = "methods";
            public const string STATICS = "statics";
            public const string CTORS = "ctors";

            public const string ASYNC_TASK = "task";
            public const string PROTOTYPE = "prototype";
            public const string CURRENT = "current";
        }

        public class Funcs
        {
            public const string BRIDGE_AUTO_STARTUP_METHOD_TEMPLATE = "Bridge.ready(this.{0});";
            public const string BRIDGE_BIND = "Bridge.fn.bind";
            public const string BRIDGE_CACHE_BIND = "Bridge.fn.cacheBind";
            public const string BRIDGE_BIND_SCOPE = "Bridge.fn.bindScope";
            public const string BRIDGE_CAST = "Bridge.cast";
            public const string BRIDGE_CREATEINSTANCE = "Bridge.createInstance";
            public const string BRIDGE_COMBINE = "Bridge.fn.combine";
            public const string BRIDGE_REMOVE = "Bridge.fn.remove";
            public const string BRIDGE_MERGE = "Bridge.merge";
            public const string BRIDGE_IS_DEFINED = "Bridge.isDefined";
            public const string BRIDGE_GET_ENUMERATOR = "Bridge.getEnumerator";
            public const string BRIDGE_GET_TYPE = "Bridge.getType";
            public const string BRIDGE_GET_I = "Bridge.geti";
            public const string BRIDGE_NS = "Bridge.ns";
            public const string BRIDGE_EQUALS = "Bridge.equals";
            public const string BRIDGE_GETHASHCODE = "Bridge.getHashCode";
            public const string BRIDGE_ADDHASH = "Bridge.addHash";
            public const string BRIDGE_REFERENCEEQUALS = "Bridge.referenceEquals";
            public const string BRIDGE_REF = "Bridge.ref";
            public const string BRIDGE_GETDEFAULTVALUE = "Bridge." + GETDEFAULTVALUE;
            public const string BRIDGE_EVENT = "Bridge.event";
            public const string BRIDGE_PROPERTY = "Bridge.property";
            public const string BRIDGE_TOPLAIN = "Bridge.toPlain";
            public const string BRIDGE_HASVALUE = "Bridge.hasValue";
            public const string BRIDGE_LITERAL = "Bridge.literal";

            public const string INITIALIZE = "$initialize";
            public const string INIT = "init";
            public const string CLONE = "$clone";
            public const string MOVE_NEXT = "moveNext";
            public const string GET_CURRENT = "Current";
            public const string TOSTIRNG = "toString";
            public const string EQUALS = "equals";
            public const string GETHASHCODE = "getHashCode";
            public const string GETDEFAULTVALUE = "getDefaultValue";
            public const string STRING_FROMCHARCODE = "String.fromCharCode";
            public const string TOJSON = "toJSON";
            public const string GET_TYPE = "$getType";

            public const string ASYNC_BODY = "$asyncBody";
            public const string ASYNC_YIELD_BODY = "moveNext";
            public const string GET_AWAITED_RESULT = "getAwaitedResult";
            public const string CONTINUE_WITH = "continueWith";
            public const string SET_RESULT = "setResult";
            public const string SET_EXCEPTION = "setException";

            public const string CONSTRUCTOR = "ctor";
            public const string ENTRY_POINT_NAME = "main";
            public const string APPLY = "apply";
            public const string CALL = "call";
            public const string DEFINE = "define";
            public const string DISPOSE = "System$IDisposable$dispose";

            public const string SLICE = "slice";

            public class Event
            {
                public const string ADD = "add";
                public const string REMOVE = "remove";
            }

            public class Property
            {
                public const string GET = "get";
                public const string SET = "set";
            }

            public class Math
            {
                public const string LIFT = "lift";
                public const string LIFT1 = "lift1";
                public const string LIFT2 = "lift2";

                public const string LIFTCMP = "liftcmp";
                public const string LIFTEQ = "lifteq";
                public const string LIFTNE = "liftne";
                public const string GT = "gt";
                public const string GTE = "gte";
                public const string EQUALS = "equals";
                public const string NE = "ne";
                public const string LT = "lt";
                public const string LTE = "lte";
                public const string ADD = "add";
                public const string SUB = "sub";
                public const string MUL = "mul";
                public const string DIV = "div";
                public const string TO_NUMBER_DIVIDED = "toNumberDivided";
                public const string MOD = "mod";
                public const string AND = "and";
                public const string OR = "or";
                public const string XOR = "xor";
                public const string SHL = "shl";
                public const string SHRU = "shru";
                public const string SHR = "shr";
                public const string BAND = "band";
                public const string BOR = "bor";
                public const string SL = "sl";
                public const string SRR = "srr";
                public const string SR = "sr";
                public const string DEC = "dec";
                public const string INC = "inc";
                public const string NEG = "neg";
                public const string EQ = "eq";
            }
        }

        public class Types
        {
            public const string SYSTEM_UInt64 = "System.UInt64";
            public const string SYSTEM_DECIMAL = "System.Decimal";
            public const string SYSTEM_NULLABLE = "System.Nullable";
            public const string TASK_COMPLETION_SOURCE = "System.Threading.Tasks.TaskCompletionSource";
            public const string BRIDGE_IBridgeClass = "Bridge.IBridgeClass";
            public const string BRIDGE_INT = "Bridge.Int";
            public const string BRIDGE_ANONYMOUS = "$AnonymousType$";

            public const string BOOLEAN = "Boolean";
            public const string ARRAY = "Array";
            public const string FUNCTION = "Function";
            public const string Uint8Array = "Uint8Array";
            public const string Int8Array = "Int8Array";
            public const string Int16Array = "Int16Array";
            public const string Uint16Array = "Uint16Array";
            public const string Int32Array = "Int32Array";
            public const string Uint32Array = "Uint32Array";
            public const string Float32Array = "Float32Array";
            public const string Float64Array = "Float64Array";
            public const string TypeRef = "Bridge.TypeRef";

            public class Number
            {
                public const string NaN = "NaN";
                public const string Infinity = "Infinity";
                public const string InfinityNegative = "-Infinity";
            }

            public class Object
            {
                public const string NAME = "Object";
                private const string DOTNAME = NAME + ".";

                public const string DEFINEPROPERTY = DOTNAME + "defineProperty";
            }

            public class System
            {
                private const string DOTNAME = "System.";

                public class Object
                {
                    public const string NAME = System.DOTNAME + "Object";
                }

                public class IDisposable
                {
                    private const string DOTNAME = NAME + ".";
                    public const string NAME = System.DOTNAME + "IDisposable";

                    public const string DISPOSE = "dispose";
                    public const string INTERFACE_DISPOSE = "System$IDisposable$dispose";
                }

                public class Array
                {
                    private const string DOTNAME = System.DOTNAME + "Array.";

                    public const string CREATE = DOTNAME + "create";
                    public const string INDEX = DOTNAME + "index";
                    public const string INIT = DOTNAME + "init";
                    public const string MIN = DOTNAME + "min";
                    public const string TYPE = DOTNAME + "type";
                    public const string TO_ENUMERATOR = DOTNAME + "toEnumerator";
                    public const string TO_ENUMERABLE = DOTNAME + "toEnumerable";
                }

                public class DateTime
                {
                    public const string NAME = System.DOTNAME + "DateTime";
                    private const string DOTNAME = NAME + ".";

                    public const string GET_DEFAULT_VALUE = DOTNAME + "getDefaultValue";

                }

                public class Exception
                {
                    public const string NAME = System.DOTNAME + "Exception";
                    private const string DOTNAME = NAME + ".";

                    public const string CREATE = DOTNAME + "create";
                }

                public class String
                {
                    private const string DOTNAME = System.DOTNAME + "String.";

                    public const string CONCAT = DOTNAME + "concat";
                }

                public class Int64
                {
                    public const string NAME = System.DOTNAME + "Int64";
                    private const string DOTNAME = NAME + ".";

                    public const string TONUMBER = DOTNAME + "toNumber";
                    public const string CHECK = DOTNAME + "check";
                }

                public class Reflection
                {
                    public const string NAME = System.DOTNAME + "Reflection";
                    private const string DOTNAME = NAME + ".";

                    public class Assembly
                    {
                        public const string NAME = Reflection.DOTNAME + "Assembly";
                        private const string DOTNAME = NAME + ".";

                        public class Config
                        {
                            public const string NAME = "name";
                            public const string VERSION = "version";
                            public const string COMPILER = "compiler";

                            public const string DEFAULT_VERSION = "";
                        }
                    }
                }
            }

            public class Bridge
            {
                private const string DOTNAME = NS.BRIDGE + ".";

                public const string APPLY = DOTNAME + "apply";
                public const string ASSEMBLY = DOTNAME + "assembly";
                public const string ENSURE_BASE_PROPERTY = DOTNAME + "ensureBaseProperty";
                public const string IS = DOTNAME + "is";
                public const string SET_METADATA = DOTNAME + "setMetadata";
                public const string GET_TYPE_ALIAS = DOTNAME + "getTypeAlias";
                public const string DEFINE = DOTNAME + "define";
                public const string DEFINE_I = DOTNAME + "definei";
                public const string GET_INTERFACE = DOTNAME + "virtual";
                public const string GET_CLASS = DOTNAME + "virtualc";
                public const string INIT = DOTNAME + "init";
                public const string BOX = DOTNAME + "box";
                public const string UNBOX = DOTNAME + "unbox";
                public const string CLONE = DOTNAME + "clone";

                public class Generator
                {
                    public const string NAME = Bridge.DOTNAME + "GeneratorEnumerator";
                    public const string NAME_GENERIC = NAME + "$1";
                    private const string DOTNAME = NAME + ".";
                    private const string DOTNAME_GENERIC = NAME_GENERIC + ".";
                }

                public class Reflection
                {
                    public const string NAME = Bridge.DOTNAME + "Reflection";
                    private const string DOTNAME = NAME + ".";

                    public const string APPLYCONSTRUCTOR = DOTNAME + "applyConstructor";
                }
            }
        }

        public class Vars
        {
            public const string ASM = "$asm";

            public const char D = '$';
            public const string D_ = ASM + ".$";
            public const string DBOX_ = "$box_";
            public const string D_THIS = "$this";

            public const string T = "$t";
            public const string E = "$e";
            public const string YIELD = "$yield";
            public const string ENUMERATOR = "$enumerator";
            public const string EXPORTS = "$exports";
            public const string SCOPE = "$scope";
            public const string ITERATOR = "$i";

            public const string ASYNC_TASK = "$task";
            public const string ASYNC_TASK_RESULT = "$taskResult";
            public const string ASYNC_STEP = "$step";
            public const string ASYNC_TCS = "$tcs";
            public const string ASYNC_E = "$async_e";
            public const string ASYNC_E1 = "$async_e1";
            public const string ASYNC_JUMP = "$jumpFromFinally";
            public const string ASYNC_RETURN_VALUE = "$returnValue";

            public const string FIX_ARGUMENT_NAME = "__autofix__";
            public const string ARGUMENTS = "arguments";
        }

        public class Reserved
        {
            public static readonly List<string> StaticNames = new List<string> { "Name", "Arguments", "Caller", "Length", "Prototype", "ctor" };
            public static readonly string[] Words = new string[]
            {
                "Bridge", "__proto__", "abstract", "arguments", "as", "boolean", "break", "byte", "case", "catch", "char",
                "class", "continue", "const", "constructor", "ctor", "debugger", "default", "delete", "do", "double",
                "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function",
                "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "namespace",
                "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super",
                "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "use", "var",
                "void", "volatile", "while", "window", "with", "yield", "Array", "Date", "eval", "hasOwnProperty", "Infinity",
                "isFinite", "isNaN", "isPrototypeOf", "Math", "NaN", "Number", "Object", "prototype", "String", "toString",
                "undefined", "valueOf"
            };
        }
    }
}