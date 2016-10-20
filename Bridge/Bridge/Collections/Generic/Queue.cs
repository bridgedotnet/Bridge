namespace Bridge.Collections.Generic
{
	/// <summary>
	/// The Queue data type which is mapped to the Array type in Javascript.
	/// </summary>
	[External]
	[Name("Array")]
	[IgnoreGeneric]
	public sealed class Queue<T>
    {
	    [FieldProperty]
	    [Name("length")]
	    public extern int Count
	    {
	        get;
	    }

        [Template("{this}.length = 0")]
        public extern void Clear();

        [Template("System.Array.contains({this}, {item}, {T})")]
        public extern bool Contains(T item);

		[Name("shift")]
		public extern T Dequeue();

		[Name("push")]
		public extern void Enqueue(T item);

		[Template("System.Array.peekFront({this})")]
		public extern T Peek();
	}
}
