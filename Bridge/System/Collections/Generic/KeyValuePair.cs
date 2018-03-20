using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Immutable]
    [Reflectable]
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

        [Convention(Notation.None)]
        public extern void Deconstruct(out TKey key, out TValue value);
    }
}