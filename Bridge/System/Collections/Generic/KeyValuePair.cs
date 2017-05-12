using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Immutable]
    public struct KeyValuePair<TKey, TValue> : IBridgeClass
    {
        public extern KeyValuePair(TKey key, TValue value);

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern TKey Key
        {
            get;
        }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern TValue Value
        {
            get;
        }
    }
}