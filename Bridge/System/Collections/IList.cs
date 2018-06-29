namespace System.Collections
{
    /// <summary>
    /// Represents a non-generic collection of objects that can be individually accessed
    /// by index.
    /// </summary>
    [Bridge.External]
    [Bridge.Convention(Target = Bridge.ConventionTarget.Member, Member = Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.Reflectable]
    public interface IList : ICollection, IEnumerable
    {
        /// <summary>
        /// Gets or sets the element at the specified index.
        /// </summary>
        /// <param name="index">
        /// The zero-based index of the element to get or set.
        /// </param>
        /// <returns>
        /// The element at the specified index.
        /// </returns>
        /// <exception cref="System.ArgumentOutOfRangeException">
        /// index is not a valid index in the System.Collections.IList.
        /// </exception>
        /// <exception cref="System.NotSupportedException">
        /// The property is set and the System.Collections.IList is read-only.
        /// </exception>
        [Bridge.Unbox(false)]
        object this[int index]
        {
            [Bridge.Template("System.Array.getItem({this}, {index})")]
            get;
            [Bridge.Template("System.Array.setItem({this}, {index}, {value})")]
            set;
        }

        /// <summary>
        /// Gets a value indicating whether the System.Collections.IList is read-only.
        /// </summary>
        /// <returns>
        /// true if the System.Collections.IList is read-only; otherwise, false.
        /// </returns>
        bool IsReadOnly
        {
            [Bridge.Template("System.Array.getIsReadOnly({this}, Object)")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the System.Collections.IList has a fixed size.
        /// </summary>
        /// <returns>
        /// true if the System.Collections.IList has a fixed size; otherwise, false.
        /// </returns>
        bool IsFixedSize
        {
            [Bridge.Template("System.Array.isFixedSize({this})")]
            get;
        }

        /// <summary>
        /// Adds an item to the System.Collections.IList.
        /// </summary>
        /// <param name="value">
        /// The object to add to the System.Collections.IList.
        /// </param>
        /// <returns>
        /// The position into which the new element was inserted, or -1 to indicate that
        /// the item was not inserted into the collection.
        /// </returns>
        /// <exception cref="System.NotSupportedException">
        /// The System.Collections.IList is read-only.-or- The System.Collections.IList has
        /// a fixed size.
        /// </exception>
        [Bridge.Template("System.Array.add({this}, {value}, Object)")]
        [Bridge.Unbox(false)]
        int Add(object value);

        /// <summary>
        /// Removes all items from the System.Collections.IList.
        /// </summary>
        /// <exception cref="System.NotSupportedException">
        /// The System.Collections.IList is read-only.
        /// </exception>
        [Bridge.Template("System.Array.clear({this}, Object)")]
        void Clear();

        /// <summary>
        /// Determines whether the System.Collections.IList contains a specific value.
        /// </summary>
        /// <param name="value">
        /// The object to locate in the System.Collections.IList.
        /// </param>
        /// <returns>
        /// true if the System.Object is found in the System.Collections.IList; otherwise,
        /// false.
        /// </returns>
        [Bridge.Template("System.Array.contains({this}, {value})")]
        bool Contains(object value);

        /// <summary>
        /// Determines the index of a specific item in the System.Collections.IList.
        /// </summary>
        /// <param name="value">
        /// The object to locate in the System.Collections.IList.
        /// </param>
        /// <returns>
        /// The index of value if found in the list; otherwise, -1.
        /// </returns>
        [Bridge.Template("System.Array.indexOf({this}, {value}, 0, null)")]
        int IndexOf(object value);

        /// <summary>
        /// Inserts an item to the System.Collections.IList at the specified index.
        /// </summary>
        /// <param name="index">
        /// The zero-based index at which value should be inserted.
        /// </param>
        /// <param name="value">
        /// The object to insert into the System.Collections.IList.
        /// </param>
        /// <exception cref="System.ArgumentOutOfRangeException">
        /// index is not a valid index in the System.Collections.IList.
        /// </exception>
        /// <exception cref="System.NotSupportedException">
        /// The System.Collections.IList is read-only.-or- The System.Collections.IList has
        /// a fixed size.
        /// </exception>
        /// <exception cref="System.NullReferenceException">
        /// value is null reference in the System.Collections.IList.
        /// </exception>
        [Bridge.Template("System.Array.insert({this}, {index}, {value}, Object)")]
        [Bridge.Unbox(false)]
        void Insert(int index, object value);

        /// <summary>
        /// Removes the first occurrence of a specific object from the System.Collections.IList.
        /// </summary>
        /// <param name="value">
        /// The object to remove from the System.Collections.IList.
        /// </param>
        /// <exception cref="System.NotSupportedException">
        /// The System.Collections.IList is read-only.-or- The System.Collections.IList has
        /// a fixed size.
        /// </exception>
        [Bridge.Template("System.Array.remove({this}, {value}, Object)")]
        void Remove(object value);

        /// <summary>
        /// Removes the System.Collections.IList item at the specified index.
        /// </summary>
        /// <param name="index">
        /// The zero-based index of the item to remove.
        /// </param>
        /// <exception cref="System.ArgumentOutOfRangeException">
        /// index is not a valid index in the System.Collections.IList.
        /// </exception>
        /// <exception cref="System.NotSupportedException">
        /// The System.Collections.IList is read-only.-or- The System.Collections.IList has
        /// a fixed size.        [Bridge.Template("System.Array.removeAt({this}, {index})")]
        /// </exception>
        [Bridge.Template("System.Array.removeAt({this}, {index}, Object)")]
        void RemoveAt(int index);
    }
}