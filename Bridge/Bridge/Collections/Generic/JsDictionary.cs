using System.Collections;
using System.Collections.Generic;

namespace Bridge.Collections.Generic
{
	/// <summary>
	/// The JsDictionary data type which is mapped to the Object type in Javascript.
	/// </summary>
	[External]
	[IgnoreGeneric]
	[Name("Object")]
    public sealed class JsDictionary<TKey, TValue> : IEnumerable
	{
		[Template("{}")]
		public extern JsDictionary();

        [Template("Bridge.ObjectEnumerator.mkdict({nameValuePairs})")]
        public extern JsDictionary(params object[] nameValuePairs);

        public extern int Count
        {
            [Template("Object.keys({this}).length")]
            get;
        }

        public new extern ICollection<TKey> Keys
        {
            [Template("Object.keys({this})")]
            get;
        }

	    public extern TValue this[TKey key]
	    {
	        get;
            set;
	    }

        [Template("Bridge.ObjectEnumerator.clearKeys({this})")]
        public extern void Clear();

        [Template("({this}[{key}] !== undefined)")]
        public extern bool ContainsKey(TKey key);

        [Template("{o}")]
		public static extern JsDictionary<TKey, TValue> GetDictionary(object o);

        [Template("new Bridge.ObjectEnumerator({this})")]
        public extern ObjectEnumerator<TKey, TValue> GetEnumerator();

        [Template("new Bridge.ObjectEnumerator({this})")]
        extern IEnumerator IEnumerable.GetEnumerator();

        [Template("delete {this}[{key}]")]
		public extern void Remove(TKey key);

		[Template("{this}[{key}] = {value}")]
		public extern void Add(TKey key, TValue value);
	}
}
