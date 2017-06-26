#if CORE
namespace Bridge.Internal.Html5
#else
namespace Bridge.Html5
#endif

{
#pragma warning disable 649 // CS0649  Field is never assigned to, and will always have its default value

    /// <summary>
    /// The ArrayBuffer is a data type that is used to represent a generic, fixed-length binary data buffer. You can't directly manipulate the contents of an ArrayBuffer; instead, you create an ArrayBufferView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.
    /// </summary>
    [External]
    [Name("ArrayBuffer")]
#if CORE
    internal
#else
    public
#endif
    class ArrayBuffer
    {
        /// <summary>
        ///  The empty constuctor
        /// </summary>
        public extern ArrayBuffer();

        /// <summary>
        /// The constructor accepts as input a byte length for the new buffer, and returns the newly-created ArrayBuffer object.
        /// </summary>
        /// <param name="length">The size, in bytes, of the array buffer to create.</param>
        public extern ArrayBuffer(int length);

        /// <summary>
        /// The size, in bytes, of the array. This is established when the array is constructed and cannot be changed. Read only.
        /// </summary>
        public readonly int ByteLength;

        /// <summary>
        /// Returns a new ArrayBuffer whose contents are a copy of this ArrayBuffer's bytes from begin, inclusive, up to end, exclusive. If either begin or end is negative, it refers to an index from the end of the array, as opposed to from the beginning.
        /// </summary>
        /// <param name="begin">Byte index to start slicing.</param>
        /// <returns>A new ArrayBuffer object.</returns>
        public virtual extern ArrayBuffer Slice(int begin);

        /// <summary>
        /// Returns a new ArrayBuffer whose contents are a copy of this ArrayBuffer's bytes from begin, inclusive, up to end, exclusive. If either begin or end is negative, it refers to an index from the end of the array, as opposed to from the beginning.
        /// </summary>
        /// <param name="begin">Byte index to start slicing.</param>
        /// <param name="end">Byte index to end slicing. If end is unspecified, the new ArrayBuffer contains all bytes from begin to the end of this ArrayBuffer.</param>
        /// <returns>A new ArrayBuffer object.</returns>
        public virtual extern ArrayBuffer Slice(int begin, int end);
    }
}