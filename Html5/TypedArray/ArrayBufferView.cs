using Bridge;

namespace Bridge.Html5
{
    /// <summary>
    /// The ArrayBufferView type describes a particular view on the contents of an ArrayBuffer's data.
    /// Of note is that you may create multiple views into the same buffer, each looking at the buffer's contents starting at a particular offset. This makes it possible to set up views of different data types to read the contents of a buffer based on the types of data at specific offsets into the buffer.
    /// </summary>
    [Ignore]
    [Name("ArrayBufferView")]
    public class ArrayBufferView
    {
        protected ArrayBufferView()
        {
        }

        /// <summary>
        /// The buffer this view references. Read only.
        /// </summary>
        public readonly ArrayBuffer Buffer;

        /// <summary>
        /// The length, in bytes, of the view. Read only.
        /// </summary>
        public readonly long ByteLength;

        /// <summary>
        /// The offset, in bytes, to the first byte of the view within the ArrayBuffer. Read only.
        /// </summary>
        public readonly long ByteOffset;
    }
}
