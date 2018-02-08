using Bridge;

namespace System.Collections
{
    // This interface represents an enumerator that allows sequential access to the
    // elements of a dictionary. Upon creation, an enumerator is conceptually
    // positioned before the first element of the enumeration. The first call to the
    // MoveNext method brings the first element of the enumeration into view,
    // and each successive call to MoveNext brings the next element into
    // view until MoveNext returns false, indicating that there are no more
    // elements to enumerate. Following each call to MoveNext, the
    // Key and Value methods are used to obtain the key and
    // value of the element currently in view. The values returned by calls to
    // Key and Value are undefined before the first call to
    // MoveNext and following a call to MoveNext that returned false.
    // Enumerators are typically used in while loops of the form
    // 
    // IDictionaryEnumerator e = ...;
    // while (e.MoveNext()) {
    //     Object key = e.Key;
    //     Object value = e.Value;
    //     ...
    // }
    // 
    // The IDictionaryEnumerator interface extends the IEnumerator
    // inerface and can thus be used as a regular enumerator. The Current 
    // method of an IDictionaryEnumerator returns a DictionaryEntry containing
    // the current key and value pair.  However, the GetEntry method will
    // return the same DictionaryEntry and avoids boxing the DictionaryEntry (boxing
    // is somewhat expensive).

    /// <summary>
    /// This interface represents an enumerator that allows sequential access to the
    /// elements of a dictionary.
    /// </summary>
    [Reflectable]
    public interface IDictionaryEnumerator : IEnumerator
    {
        /// <summary>
        /// Gets the key of the current dictionary entry.
        /// </summary>
        /// <returns>
        /// The key of the current element of the enumeration.
        /// </returns>
        /// <exception cref="System.InvalidOperationException">
        /// The System.Collections.IDictionaryEnumerator is positioned before the first entry
        /// of the dictionary or after the last entry.
        /// </exception>
        object Key { get; }

        /// <summary>
        /// Gets the value of the current dictionary entry.
        /// </summary>
        /// <returns>
        /// The value of the current element of the enumeration.
        /// </returns>
        /// <exception cref="System.InvalidOperationException">
        /// The System.Collections.IDictionaryEnumerator is positioned before the first entry
        /// of the dictionary or after the last entry.
        /// </exception>
        object Value { get; }

        /// <summary>
        /// Gets both the key and the value of the current dictionary entry.
        /// </summary>
        /// <returns>
        /// A System.Collections.DictionaryEntry containing both the key and the value of
        /// the current dictionary entry.
        /// </returns>
        /// <exception cref="System.InvalidOperationException">
        /// The System.Collections.IDictionaryEnumerator is positioned before the first entry
        /// of the dictionary or after the last entry.
        /// </exception>
        DictionaryEntry Entry { get; }
    }
}