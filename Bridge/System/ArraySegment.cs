namespace System
{
    /// <summary>
    /// Delimits a section of a one-dimensional array.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    [Bridge.Name("System.ArraySegment")]
    [Bridge.Reflectable]
    public struct ArraySegment<T>
    {
        public extern ArraySegment(T[] array);

        public extern ArraySegment(T[] array, int offset, int count);

        /// <summary>
        /// Gets the original array containing the range of elements that the array segment delimits.
        /// </summary>
        public extern T[] Array
        {
            [Bridge.Template("getArray()")]
            get;
        }

        /// <summary>
        /// Gets the number of elements in the range delimited by the array segment.
        /// </summary>
        public extern int Count
        {
            [Bridge.Template("getCount()")]
            get;
        }

        /// <summary>
        /// Gets the position of the first element in the range delimited by the array segment,
        /// relative to the start of the original array.
        /// </summary>
        public extern int Offset
        {
            [Bridge.Template("getOffset()")]
            get;
        }
    }
}