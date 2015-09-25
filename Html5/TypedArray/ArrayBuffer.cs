using Bridge;

namespace Bridge.Html5
{
    /// <summary>
    /// The ArrayBuffer is a data type that is used to represent a generic, fixed-length binary data buffer. You can't directly manipulate the contents of an ArrayBuffer; instead, you create an ArrayBufferView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.
    /// </summary>
    [Ignore]
    [Name("ArrayBuffer")]
    public class ArrayBuffer
    {
        /// <summary>
        ///  The empty constuctor
        /// </summary>
        public ArrayBuffer()
        {
        }

        /// <summary>
        /// The constructor accepts as input a byte length for the new buffer, and returns the newly-created ArrayBuffer object.
        /// </summary>
        /// <param name="length">The size, in bytes, of the array buffer to create.</param>
        public ArrayBuffer(long length)
        {
        }

        /// <summary>
        /// The size, in bytes, of the array. This is established when the array is constructed and cannot be changed. Read only.
        /// </summary>
        public readonly long ByteLength;

        /// <summary>
        /// Returns a new ArrayBuffer whose contents are a copy of this ArrayBuffer's bytes from begin, inclusive, up to end, exclusive. If either begin or end is negative, it refers to an index from the end of the array, as opposed to from the beginning.
        /// </summary>
        /// <param name="begin">Byte index to start slicing.</param>
        /// <returns>A new ArrayBuffer object.</returns>
        public virtual ArrayBuffer Slice(long begin)
        {
            return null;
        }

        /// <summary>
        /// Returns a new ArrayBuffer whose contents are a copy of this ArrayBuffer's bytes from begin, inclusive, up to end, exclusive. If either begin or end is negative, it refers to an index from the end of the array, as opposed to from the beginning.
        /// </summary>
        /// <param name="begin">Byte index to start slicing.</param>
        /// <param name="end">Byte index to end slicing. If end is unspecified, the new ArrayBuffer contains all bytes from begin to the end of this ArrayBuffer.</param>
        /// <returns>A new ArrayBuffer object.</returns>
        public virtual ArrayBuffer Slice(long begin, long end)
        {
            return null;
        }
    }
}
