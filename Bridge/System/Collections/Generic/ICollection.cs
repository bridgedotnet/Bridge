namespace System.Collections.Generic
{
    [Bridge.External]
    [Bridge.Reflectable]
    [Bridge.Convention(Target = Bridge.ConventionTarget.Member, Member = Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    public interface ICollection<T> : IEnumerable<T>, Bridge.IBridgeClass
    {
        /// <summary>
        /// Gets the number of elements contained in the ICollection.
        /// </summary>
        int Count
        {
            [Bridge.Template("System.Array.getCount({this}, {T})")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the ICollection is read-only.
        /// </summary>
        bool IsReadOnly
        {
            [Bridge.Template("System.Array.getIsReadOnly({this}, {T})")]
            get;
        }

        /// <summary>
        /// Adds an item to the ICollection.
        /// </summary>
        /// <param name="item">The object to add to the ICollection</param>
        [Bridge.Template("System.Array.add({this}, {item}, {T})")]
        void Add(T item);

        /// <summary>
        /// Copies the elements of the ICollection to an Array, starting at a particular Array index.
        /// </summary>
        /// <param name="array">The one-dimensional Array that is the destination of the elements copied from ICollection.</param>
        /// <param name="arrayIndex">The zero-based index in array at which copying begins.</param>
        [Bridge.Template("System.Array.copyTo({this}, {array}, {arrayIndex}, {T})")]
        void CopyTo(T[] array, int arrayIndex);

        /// <summary>
        /// Removes all items from the ICollection.
        /// </summary>
        [Bridge.Template("System.Array.clear({this}, {T})")]
        void Clear();

        /// <summary>
        /// Determines whether the ICollection contains a specific value.
        /// </summary>
        /// <param name="item">The object to locate in the ICollection.</param>
        /// <returns>true if item is found in the ICollection; otherwise, false.</returns>
        [Bridge.Template("System.Array.contains({this}, {item}, {T})")]
        bool Contains(T item);

        /// <summary>
        /// Removes the first occurrence of a specific object from the ICollection.
        /// </summary>
        /// <param name="item">The object to remove from the ICollection.</param>
        /// <returns>true if item was successfully removed from the ICollection; otherwise, false. This method also returns false if item is not found in the original ICollection.</returns>
        [Bridge.Template("System.Array.remove({this}, {item}, {T})")]
        bool Remove(T item);
    }
}