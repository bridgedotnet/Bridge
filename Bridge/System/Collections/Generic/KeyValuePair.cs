using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Namespace("Bridge")]
    public class KeyValuePair<TKey, TValue> : IBridgeClass
    {
        public extern KeyValuePair(TKey key, TValue value);

        [FieldProperty]
        public extern TKey Key
        {
            get;
        }

        [FieldProperty]
        public extern TValue Value
        {
            get;
        }
    }
}
