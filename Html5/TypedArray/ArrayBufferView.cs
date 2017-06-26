#if CORE
namespace Bridge.Internal.Html5
#else
namespace Bridge.Html5
#endif
{
    /// <summary>
    /// ArrayBufferView is a helper type representing any of the following JavaScript TypedArray types:
    ///
    ///     Int8Array,
    ///     Uint8Array,
    ///     Uint8ClampedArray,
    ///     Int16Array,
    ///     Uint16Array,
    ///     Int32Array,
    ///     Uint32Array,
    ///     Float32Array,
    ///     Float64Array or
    ///     DataView.
    ///
    /// This is a helper type to simplify the specification, it isn't an interface and there are no objects implementing it.
    /// </summary>
    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
#if CORE
    internal
#else
    public
#endif
    class ArrayBufferView
    {
        public extern static implicit operator ArrayBufferView(Int8Array t);

        public extern static implicit operator ArrayBufferView(Uint8Array t);

        public extern static implicit operator ArrayBufferView(Uint8ClampedArray t);

        public extern static implicit operator ArrayBufferView(Int16Array t);

        public extern static implicit operator ArrayBufferView(Uint16Array t);

        public extern static implicit operator ArrayBufferView(Int32Array t);

        public extern static implicit operator ArrayBufferView(Uint32Array t);

        public extern static implicit operator ArrayBufferView(Float32Array t);

        public extern static implicit operator ArrayBufferView(Float64Array t);

        public extern static implicit operator ArrayBufferView(DataView t);

        public static extern explicit operator Int8Array(ArrayBufferView value);

        public static extern explicit operator Uint8Array(ArrayBufferView value);

        public extern static explicit operator Uint8ClampedArray(ArrayBufferView value);

        public extern static explicit operator Int16Array(ArrayBufferView value);

        public static extern explicit operator Uint16Array(ArrayBufferView value);

        public extern static explicit operator Int32Array(ArrayBufferView value);

        public extern static explicit operator Uint32Array(ArrayBufferView value);

        public extern static explicit operator Float32Array(ArrayBufferView value);

        public extern static explicit operator Float64Array(ArrayBufferView value);

        public extern static explicit operator DataView(ArrayBufferView value);
    }
}