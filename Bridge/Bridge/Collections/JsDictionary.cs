using System.Collections;
using System.Collections.Generic;
using Bridge.Collections.Generic;

namespace Bridge.Collections
{
	/// <summary>
	/// The JsDictionary data type which is mapped to the Object type in Javascript.
	/// </summary>
	[External]
	[Name("Object")]
    public sealed class JsDictionary: IEnumerable
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

        public new extern ICollection<string> Keys
        {
            [Template("Object.keys({this})")]
            get;
        }

		[Template("Bridge.ObjectEnumerator.clearKeys({this})")]
		public extern void Clear();

		[Template("({this}[{key}] !== undefined)")]
		public extern bool ContainsKey(string key);

		[Template("{o}")]
		public static extern JsDictionary GetDictionary(object o);

		[Template("new Bridge.ObjectEnumerator({this})")]
		public extern ObjectEnumerator<string, object> GetEnumerator();

        [Template("new Bridge.ObjectEnumerator({this})")]
        extern IEnumerator IEnumerable.GetEnumerator();

		[Template("delete {this}[{key}]")]
		public extern void Remove(string key);

		[Template("{this}[{key}] = {value}")]
		public extern void Add(string key, object value);

        [Template("{value}")]
        public static extern implicit operator JsDictionary<string, object>(JsDictionary value);

        [Template("{value}")]
        public static extern implicit operator JsDictionary(JsDictionary<string, object> value);
	}

    [Namespace("Bridge")]
    [IgnoreGeneric]
    [External]
    public sealed class ObjectEnumerator<TKey, TValue> : IEnumerator<KeyValuePair<TKey, TValue>>
    {
        public extern KeyValuePair<TKey, TValue> Current { get; }
        extern object IEnumerator.Current { get; }

        public extern bool MoveNext();
        public extern void Reset();
        public extern void Dispose();
    }

}
