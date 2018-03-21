namespace System.Collections.Generic
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Immutable]
    [Bridge.Reflectable]
    public struct KeyValuePair<TKey, TValue> : Bridge.IBridgeClass
    {
        public extern KeyValuePair(TKey key, TValue value);

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern TKey Key
        {
            get;
        }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern TValue Value
        {
            get;
        }

        [Bridge.Convention(Bridge.Notation.None)]
        public extern void Deconstruct(out TKey key, out TValue value);
    }
}