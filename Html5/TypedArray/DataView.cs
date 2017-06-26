#if CORE
namespace Bridge.Internal.Html5
#else
namespace Bridge.Html5
#endif
{
#pragma warning disable 649 // CS0649  Field is never assigned to, and will always have its default value null

    /// <summary>
    /// An ArrayBuffer is a useful object for representing an arbitrary chunk of data. In many cases, such data will be read from disk or from the network, and will not follow the alignment restrictions that are imposed on the Typed Array Views described earlier. In addition, the data will often be heterogeneous in nature and have a defined byte order.
    /// The DataView view provides a low-level interface for reading such data from and writing it to an ArrayBuffer.
    /// </summary>
    [External]
    [Name("DataView")]
#if CORE
    internal
#else
    public
#endif
    class DataView
    {
        /// <summary>
        /// Returns a new DataView object using the passed ArrayBuffer for its storage.
        /// </summary>
        /// <param name="buffer">An existing ArrayBuffer to use as the storage for the new DataView object.</param>
        public extern DataView(ArrayBuffer buffer);

        /// <summary>
        /// Returns a new DataView object using the passed ArrayBuffer for its storage.
        /// </summary>
        /// <param name="buffer">An existing ArrayBuffer to use as the storage for the new DataView object.</param>
        /// <param name="byteOffset">The offset, in bytes, to the first byte in the specified buffer for the new view to reference. If not specified, the view of the buffer will start with the first byte.</param>
        public extern DataView(ArrayBuffer buffer, int byteOffset);

        /// <summary>
        /// Returns a new DataView object using the passed ArrayBuffer for its storage.
        /// </summary>
        /// <param name="buffer">An existing ArrayBuffer to use as the storage for the new DataView object.</param>
        /// <param name="byteOffset">The offset, in bytes, to the first byte in the specified buffer for the new view to reference. If not specified, the view of the buffer will start with the first byte.</param>
        /// <param name="byteLength">The number of elements in the byte array. If unspecified, length of the view will match the buffer's length.</param>
        public extern DataView(ArrayBuffer buffer, int byteOffset, int byteLength);

        /// <summary>
        /// The buffer this view references. Read only.
        /// </summary>
        public readonly ArrayBuffer Buffer;

        /// <summary>
        /// The length, in bytes, of the view. Read only.
        /// </summary>
        public readonly int ByteLength;

        /// <summary>
        /// The offset, in bytes, to the first byte of the view within the ArrayBuffer. Read only.
        /// </summary>
        public readonly int ByteOffset;

        /// <summary>
        /// Gets a signed 8-bit integer at the specified byte offset from the start of the view.
        /// </summary>
        /// <param name="byteOffset">The offset, in byte, from the start of the view where to read the data.</param>
        /// <returns></returns>
        public virtual extern sbyte GetInt8(int byteOffset);

        /// <summary>
        /// Gets an unsigned 8-bit integer at the specified byte offset from the start of the view.
        /// </summary>
        /// <param name="byteOffset">The offset, in byte, from the start of the view where to read the data.</param>
        /// <returns></returns>
        public virtual extern byte GetUint8(int byteOffset);

        /// <summary>
        /// Gets a signed 16-bit integer at the specified byte offset from the start of the view.
        /// </summary>
        /// <param name="byteOffset">The offset, in byte, from the start of the view where to read the data.</param>
        /// <returns></returns>
        public virtual extern short GetInt16(int byteOffset);

        /// <summary>
        /// Gets a signed 16-bit integer at the specified byte offset from the start of the view.
        /// </summary>
        /// <param name="byteOffset">The offset, in byte, from the start of the view where to read the data.</param>
        /// <param name="littleEndian">Indicates whether the 16-bit int is stored in little- or big-endian format. If false or undefined, a big-endian value is read.</param>
        /// <returns></returns>
        public virtual extern short GetInt16(int byteOffset, bool littleEndian);

        /// <summary>
        /// Gets an unsigned 16-bit integer at the specified byte offset from the start of the view.
        /// </summary>
        /// <param name="byteOffset">The offset, in byte, from the start of the view where to read the data.</param>
        /// <returns></returns>
        public virtual extern ushort GetUint16(int byteOffset);

        /// <summary>
        /// Gets an unsigned 16-bit integer at the specified byte offset from the start of the view.
        /// </summary>
        /// <param name="byteOffset">The offset, in byte, from the start of the view where to read the data.</param>
        /// <param name="littleEndian">Indicates whether the 16-bit int is stored in little- or big-endian format. If false or undefined, a big-endian value is read.</param>
        /// <returns></returns>
        public virtual extern ushort GetUint16(int byteOffset, bool littleEndian);

        /// <summary>
        /// Gets an signed 32-bit integer at the specified byte offset from the start of the view.
        /// </summary>
        /// <param name="byteOffset">The offset, in byte, from the start of the view where to read the data.</param>
        /// <returns></returns>
        public virtual extern int GetInt32(int byteOffset);

        /// <summary>
        /// Gets an signed 32-bit integer at the specified byte offset from the start of the view.
        /// </summary>
        /// <param name="byteOffset">The offset, in byte, from the start of the view where to read the data.</param>
        /// <param name="littleEndian">Indicates whether the 32-bit int is stored in little- or big-endian format. If false or undefined, a big-endian value is read.</param>
        /// <returns></returns>
        public virtual extern int GetInt32(int byteOffset, bool littleEndian);

        /// <summary>
        /// Gets an unsigned 32-bit integer at the specified byte offset from the start of the view.
        /// </summary>
        /// <param name="byteOffset">The offset, in byte, from the start of the view where to read the data.</param>
        /// <returns></returns>
        public virtual extern uint GetUint32(int byteOffset);

        /// <summary>
        /// Gets an unsigned 32-bit integer at the specified byte offset from the start of the view.
        /// </summary>
        /// <param name="byteOffset">The offset, in byte, from the start of the view where to read the data.</param>
        /// <param name="littleEndian">Indicates whether the 32-bit int is stored in little- or big-endian format. If false or undefined, a big-endian value is read.</param>
        /// <returns></returns>
        public virtual extern uint GetUint32(int byteOffset, bool littleEndian);

        public virtual extern float GetFloat32(int byteOffset);

        public virtual extern float GetFloat32(int byteOffset, bool littleEndian);

        public virtual extern double GetFloat64(int byteOffset);

        public virtual extern double GetFloat64(int byteOffset, bool littleEndian);

        public virtual extern void SetInt8(int byteOffset, sbyte value);

        public virtual extern void SetUint8(int byteOffset, byte value);

        public virtual extern void SetInt16(int byteOffset, short value);

        public virtual extern void SetInt16(int byteOffset, short value, bool littleEndian);

        public virtual extern void SetUint16(int byteOffset, ushort value);

        public virtual extern void SetUint16(uint byteOffset, ushort value, bool littleEndian);

        public virtual extern void SetInt32(int byteOffset, int value);

        public virtual extern void SetInt32(int byteOffset, int value, bool littleEndian);

        public virtual extern void SetUint32(int byteOffset, uint value);

        public virtual extern void SetUint32(uint byteOffset, uint value, bool littleEndian);

        public virtual extern void SetFloat32(int byteOffset, float value);

        public virtual extern void SetFloat32(int byteOffset, float value, bool littleEndian);

        public virtual extern void SetFloat64(int byteOffset, double value);

        public virtual extern void SetFloat64(int byteOffset, double value, bool littleEndian);
    }
}