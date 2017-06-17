using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.Translator.Constants
{
    public class Messages
    {
        public class Exceptions
        {
            public const string FIELD_PROPERTY_MARKED_ADVISE = "{0} is marked with [Field] attribute but implements {1}{2}. To fix the problem either remove [Field] or add [External]/[Template] attributes";

            public const string OBJECT_LITERAL_NO_VIRTUAL_METHODS = "[ObjectLiteral] does not support virtual methods: {0}";
            public const string OBJECT_LITERAL_PLAIN_NO_CREATE_MODE_CUSTOM_CONSTRUCTOR = "[ObjectLiteral] class (plain mode) does not support Bridge.ObjectCreateMode parameter in a custom constructor: {0}";
            public const string OBJECT_LITERAL_PLAIN_CUSTOM_CONSTRUCTOR = "[ObjectLiteral] class (plain mode) does not support custom constructors with parameters other than with ObjectLiteralAttribute properties: {0}";
            public const string OBJECT_LITERAL_PLAIN_INHERITANCE = "[ObjectLiteral] with Plain mode cannot be inherited from [ObjectLiteral] with Constructor mode: {0}";
            public const string OBJECT_LITERAL_CONSTRUCTOR_INHERITANCE = "[ObjectLiteral] with Constructor mode should be inherited from a class with the same options: {0}";
            public const string OBJECT_LITERAL_INTERFACE_NO_OVERLOAD_METHODS = "[ObjectLiteral] interface does not support overloaded methods: {0}";
            public const string OBJECT_LITERAL_INTERFACE_NO_EVENTS = "[ObjectLiteral] interface does not support events: {0}";
            public const string OBJECT_LITERAL_INTERFACE_NO_EXPLICIT_IMPLEMENTATION = "[ObjectLiteral] does not support explicit interface member implementation: {0}";
            public const string OBJECT_LITERAL_INTERFACE_INHERITANCE = "[ObjectLiteral] should implement an interface which must be object literal also: {0}";

            public const string DYNAMIC_INVOCATION_TOO_MANY_OVERLOADS = "Cannot compile this dynamic invocation because there are two or more method overloads with the same parameter count. To work around this limitation, assign the dynamic value to a non-dynamic variable before use or call a method with different parameter count";

            public const string VIRTUAL_CLASS_NO_NESTED_TYPES = "Virtual class {0} cannot have nested types";

            public const string DUPLICATE_BRIDGE_TYPE = "Cannot add nested type as the type '{0}:{1}' is duplicated with '{2}:{3}'";
        }
    }
}