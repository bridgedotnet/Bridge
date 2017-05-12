using Bridge;

namespace System.Collections
{
    [External]
    [Convention(Target = ConventionTarget.Member, Member = ConventionMember.Method, Notation = Notation.LowerCamelCase)]
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

        [Template("System.Array.copyTo({this}, {array}, {arrayIndex})")]
        void CopyTo(Array array, int arrayIndex);
    }
}