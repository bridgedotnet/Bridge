namespace System.Collections
{
    [Bridge.External]
    [Bridge.Convention(Target = Bridge.ConventionTarget.Member, Member = Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.Reflectable]
    public interface ICollection : IEnumerable, Bridge.IBridgeClass
    {
        /// <summary>
        /// Gets the number of elements contained in the ICollection.
        /// </summary>
        int Count
        {
            [Bridge.Template("System.Array.getCount({this})")]
            get;
        }

        [Bridge.Template("System.Array.copyTo({this}, {array}, {arrayIndex})")]
        void CopyTo(Array array, int arrayIndex);

        /// <summary>
        /// Gets an object that can be used to synchronize access to the System.Collections.ICollection.
        /// </summary>
        /// <returns>
        /// An object that can be used to synchronize access to the System.Collections.ICollection.
        /// </returns>
        object SyncRoot { get; }

        /// <summary>
        /// Gets a value indicating whether access to the System.Collections.ICollection
        /// is synchronized (thread safe).
        /// </summary>
        /// <returns>
        /// true if access to the System.Collections.ICollection is synchronized (thread
        /// safe); otherwise, false.
        /// </returns>
        bool IsSynchronized { get; }
    }
}