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
            public const string FLAGS = "$flags";
            public const string ENUM = "$enum";
            public const string INHERITS = "inherits";
            public const string STRUCT = "$struct";
            public const string CONFIG = "config";
            public const string EVENTS = "events";
            public const string PROPERTIES = "properties";
            public const string INTERFACE = "$interface";

            public const string ASYNC_TASK = "task";
            public const string PROTOTYPE = "prototype";
        }

        public class Funcs
        {
            public const string BRIDGE_AUTO_STARTUP_METHOD_TEMPLATE = "Bridge.ready(this.{0});";
            public const string BRIDGE_APPLY = "Bridge.apply";
            public const string BRIDGE_BIND = "Bridge.fn.bind";
            public const string BRIDGE_BIND_SCOPE = "Bridge.fn.bindScope";
            public const string BRIDGE_COMBINE = "Bridge.fn.combine";
            public const string BRIDGE_REMOVE = "Bridge.fn.remove";
            public const string BRIDGE_MERGE = "Bridge.merge";
            public const string BRIDGE_DEFINE = "Bridge.define";
            public const string BRIDGE_IS = "Bridge.is";
            public const string BRIDGE_IS_DEFINED = "Bridge.isDefined";
            public const string BRIDGE_GET_ENUMERATOR = "Bridge.getEnumerator";
            public const string BRIDGE_GET_TYPE = "Bridge.getType";
            public const string BRIDGE_NS = "Bridge.ns";
            public const string BRIDGE_EQUALS = "Bridge.equals";
            public const string BRIDGE_GETHASHCODE = "Bridge.getHashCode";
            public const string BRIDGE_REFERENCEEQUALS = "Bridge.referenceEquals";
            public const string BRIDGE_EVENT = "Bridge.event";
            public const string BRIDGE_PROPERTY = "Bridge.property";

            public const string DCONSTRUCTOR = "$constructor";
            public const string CLONE = "$clone";
            public const string TO_ENUMERATOR = "toEnumerator";
            public const string TO_ENUMERABLE = "toEnumerable";
            public const string MOVE_NEXT = "moveNext";
            public const string GET_CURRENT = "getCurrent";
            public const string TOSTIRNG = "toString";
            public const string EQUALS = "equals";
            public const string GETHASHCODE = "getHashCode";
            public const string STRING_FROMCHARCODE = "String.fromCharCode";            

            public const string ASYNC_BODY = "$asyncBody";
            public const string GET_AWAITED_RESULT = "getAwaitedResult";
            public const string CONTINUE_WITH = "continueWith";
            public const string SET_RESULT = "setResult";
            public const string SET_EXCEPTION = "setException";

            public const string CONSTRUCTOR = "constructor";
            public const string APPLY = "apply";
            public const string CALL = "call";
            public const string DEFINE = "define";

            public const string SLICE = "slice";

            public class Event
            {
                public const string ADD = "add";
                public const string REMOVE = "remove";
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
                public const string BOR =  "bor";
                public const string SL =   "sl";
                public const string SRR =  "srr";
                public const string SR =   "sr";
                public const string DEC = "dec";
                public const string INC = "inc";
                public const string NEG = "neg";
            }
        }

        public class Types
        {
            public const string SYSTEM_UInt64 = "System.UInt64";
            public const string SYSTEM_INT64 = "System.Int64";
            public const string SYSTEM_DECIMAL = "System.Decimal";
            public const string SYSTEM_ARRAY = "System.Array";
            public const string SYSTEM_NULLABLE = "System.Nullable";
            public const string TASK_COMPLETION_SOURCE = "System.Threading.Tasks.TaskCompletionSource";
            public const string SYSTEM_EXCEPTION = "System.Exception";
            public const string BRIDGE_IBridgeClass = "Bridge.IBridgeClass";
            public const string BRIDGE_INT = "Bridge.Int";
            public const string BRIDGE_ANONYMOUS = "$AnonymousType$";

            public const string BOOLEAN = "Boolean";
            public const string ARRAY = "Array";
            public const string OBJECT = "Object";
            public const string FUNCTION = "Function";
            public const string Uint8Array = "Uint8Array";
            public const string Int8Array = "Int8Array";
            public const string Int16Array = "Int16Array";
            public const string Uint16Array = "Uint16Array";
            public const string Int32Array = "Int32Array";
            public const string Uint32Array = "Uint32Array";
            public const string Float32Array = "Float32Array";
            public const string Float64Array = "Float64Array";
        }

        public class Vars
        {
            public const char D = '$';
            public const string D_ = "$_";

            public const string T = "$t";
            public const string E = "$e";
            public const string YIELD = "$yield";
            public const string EXPORTS = "exports";
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
            public static readonly List<string> StaticNames = new List<string> { "__proto__", "Name", "Arguments", "Caller", "Length", "Prototype" };
            public static readonly string[] Words = new string[] { "abstract", "arguments", "as", "boolean", "break", "byte", "case", "catch", "char", "class", "continue", "const", "constructor", "debugger", "default", "delete", "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "namespace", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "use", "var", "void", "volatile", "while", "window", "with", "yield" };
        }
    }
}
