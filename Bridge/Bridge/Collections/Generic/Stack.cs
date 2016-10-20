namespace Bridge.Collections.Generic
{
    /// <summary>
    /// The Stack data type which is mapped to the Array type in Javascript.
    /// </summary>
    [External]
    [Name("Array")]
    [IgnoreGeneric]
    public sealed class Stack<T>
    {
        [FieldProperty]
        [Name("length")]
        public extern int Count { get; }

        [Template("{this}.length = 0")]
        public extern void Clear();

        [Template("System.Array.contains({this}, {item}, {T})")]
        public extern bool Contains(T item);

        [Template("System.Array.peekBack({this})")]
		public extern T Peek();

		public extern T Pop();

		public extern void Push(T item);
	}
}
