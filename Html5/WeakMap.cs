namespace Bridge.Html5
{
    /// <summary>
    /// HTML5 WeakMap. Keys must be object (primitives and string are not allowed). Values can be any type (inc. primitives)
    /// <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap">MDN</a>
    /// </summary>
    [External]
    [Name("WeakMap")]
    public class WeakMap
    {
        /// <summary>
        ///  Default constructor
        /// </summary>
        public extern WeakMap();

        /// <summary>
        ///  Initialize WeakMap using items that are expected to be an array of the two-element-arrays. Each two-element-array is key and value respecively
        /// Beware that it is not widely implemented (2016-05)
        /// </summary>
        public extern WeakMap(object[][] items);

        /// <summary>
        /// gets contained element OR returns null.
        /// </summary>
        public virtual extern object Get<T>(T key) where T : class;

        /// <summary>
        /// Sets value. Neither key nor value can be null
        /// </summary>
        public virtual extern void Set<T>(T key, object value) where T : class;

        /// <summary>
        /// Deletes element. Returns true if element was contained in the map. Returns false when it wasn't
        /// </summary>
        public virtual extern bool Delete<T>(T key) where T : class;

        /// <summary>
        /// Checks whether element with given key is present in map.
        /// </summary>
        public virtual extern bool Has<T>(T key) where T : class;
    }
}