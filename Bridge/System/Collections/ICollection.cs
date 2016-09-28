using Bridge;

namespace System.Collections
{
    [External]
    public interface ICollection : IEnumerable, IBridgeClass
    {
        /// <summary>
        /// Gets the number of elements contained in the ICollection.
        /// </summary>
        int Count
        {
            [Template("System.Array.getCount({this})")]
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the ICollection is read-only.
        /// </summary>
        bool IsReadOnly
        {
            [Template("System.Array.getIsReadOnly({this})")]
            get;
        }
    }
}