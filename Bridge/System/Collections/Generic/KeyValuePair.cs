using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Immutable]
    public struct KeyValuePair<TKey, TValue> : IBridgeClass
    {
        public extern KeyValuePair(TKey key, TValue value);

        [Name(true)] //[Field]
        public extern TKey Key
        {
            get;
        }

        [Name(true)] //[Field]
        public extern TValue Value
        {
            get;
        }
    }
}