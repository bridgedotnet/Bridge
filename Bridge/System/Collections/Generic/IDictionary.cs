namespace System.Collections.Generic
{
    /// <summary>
    /// Represents a generic collection of key/value pairs.
    /// </summary>
    /// <typeparam name="TKey">
    /// The type of keys in the dictionary.
    /// </typeparam>
    /// <typeparam name="TValue">
    /// The type of values in the dictionary.
    /// </typeparam>
    [Bridge.External]
    [Bridge.Reflectable]
    [Bridge.Convention(Target = Bridge.ConventionTarget.Member, Member = Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    public interface IDictionary<TKey, TValue> : ICollection<KeyValuePair<TKey, TValue>>, Bridge.IBridgeClass
    {
        /// <summary>
        /// Gets or sets the element with the specified key.
        /// </summary>
        /// <param name="key">
        /// The key of the element to get or set.
        /// </param>
        /// <returns>
        /// The element with the specified key.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// key is null.
        /// </exception>
        /// <exception cref="System.Collections.Generic.KeyNotFoundException">
        /// The property is retrieved and key is not found.
        /// </exception>
        /// <exception cref="System.NotSupportedException">
        /// The property is set and the System.Collections.Generic.IDictionary`2 is read-only.
        /// </exception>
        [Bridge.AccessorsIndexer]
        TValue this[TKey key]
        {
            [Bridge.Name("getItem")]
            get;
            [Bridge.Name("setItem")]
            set;
        }

        /// <summary>
        /// Gets an System.Collections.Generic.ICollection`1 containing the keys of the System.Collections.Generic.IDictionary`2.
        /// </summary>
        /// <returns>
        /// An System.Collections.Generic.ICollection`1 containing the keys of the object
        /// that implements System.Collections.Generic.IDictionary`2.
        /// </returns>
        ICollection<TKey> Keys { get; }

        /// <summary>
        /// Gets an System.Collections.Generic.ICollection`1 containing the values in the
        /// System.Collections.Generic.IDictionary`2.
        /// </summary>
        /// <returns>
        /// An System.Collections.Generic.ICollection`1 containing the values in the object
        /// that implements System.Collections.Generic.IDictionary`2.
        /// </returns>
        ICollection<TValue> Values { get; }

        /// <summary>
        /// Adds an element with the provided key and value to the System.Collections.Generic.IDictionary`2.
        /// </summary>
        /// <param name="key">
        /// The object to use as the key of the element to add.
        /// </param>
        /// <param name="value">
        /// The object to use as the value of the element to add.
        /// </param>
        /// <exception cref="System.ArgumentNullException">
        /// key is null.
        /// </exception>
        /// <exception cref="System.ArgumentException">
        /// An element with the same key already exists in the System.Collections.Generic.IDictionary`2.
        /// </exception>
        /// <exception cref="System.NotSupportedException">
        /// The System.Collections.Generic.IDictionary`2 is read-only.
        /// </exception>
        void Add(TKey key, TValue value);

        /// <summary>
        /// Determines whether the System.Collections.Generic.IDictionary`2 contains an element
        /// with the specified key.
        /// </summary>
        /// <param name="key">
        /// The key to locate in the System.Collections.Generic.IDictionary`2.
        /// </param>
        /// <returns>
        /// true if the System.Collections.Generic.IDictionary`2 contains an element with
        /// the key; otherwise, false.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// key is null.
        /// </exception>
        bool ContainsKey(TKey key);

        /// <summary>
        /// Removes the element with the specified key from the System.Collections.Generic.IDictionary`2.
        /// </summary>
        /// <param name="key">
        /// The key of the element to remove.
        /// </param>
        /// <returns>
        /// true if the element is successfully removed; otherwise, false. This method also
        /// returns false if key was not found in the original System.Collections.Generic.IDictionary`2.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// key is null.
        /// </exception>
        /// <exception cref="System.NotSupportedException">
        /// The System.Collections.Generic.IDictionary`2 is read-only.
        /// </exception>
        bool Remove(TKey key);

        /// <summary>
        /// Gets the value associated with the specified key.
        /// </summary>
        /// <param name="key">
        /// The key whose value to get.
        /// </param>
        /// <param name="value">
        /// When this method returns, the value associated with the specified key, if the
        /// key is found; otherwise, the default value for the type of the value parameter.
        /// This parameter is passed uninitialized.
        /// </param>
        /// <returns>
        /// true if the object that implements System.Collections.Generic.IDictionary`2 contains
        /// an element with the specified key; otherwise, false.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// key is null.
        /// </exception>
        bool TryGetValue(TKey key, out TValue value);
    }
}