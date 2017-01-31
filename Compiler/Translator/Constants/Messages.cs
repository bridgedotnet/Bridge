using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.Translator.Constants
{
    internal class Messages
    {
        public class Exceptions
        {
            public const string FIELD_PROPERTY_MARKED = "The property {0} is marked with [Field] or [FieldProperty] but the interface member being implemented has no such attribute";
            public const string FIELD_PROPERTY_NOT_MARKED = "The property {0} is not marked with [Field] or [FieldProperty] but the interface member being implemented has this attribute";
            public const string FIELD_PROPERTY_MARKED_ADVISE = "{0} is marked with [Field] or [FieldProperty] attributes but implements {1}{2}. To fix the problem either remove [Field] (swith off bridge.json option `autoPropertyToField`) or add [External]/[Template] attributes";
        }
    }
}
