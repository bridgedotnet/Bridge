namespace Bridge.Html5
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
    public class ArrayBufferView
    {
        public static implicit operator ArrayBufferView(Int8Array t)
        {
            return null;
        }

        public static implicit operator ArrayBufferView(Uint8Array t)
        {
            return null;
        }

        public static implicit operator ArrayBufferView(Uint8ClampedArray t)
        {
            return null;
        }

        public static implicit operator ArrayBufferView(Int16Array t)
        {
            return null;
        }

        public static implicit operator ArrayBufferView(Uint16Array t)
        {
            return null;
        }

        public static implicit operator ArrayBufferView(Int32Array t)
        {
            return null;
        }

        public static implicit operator ArrayBufferView(Uint32Array t)
        {
            return null;
        }

        public static implicit operator ArrayBufferView(Float32Array t)
        {
            return null;
        }

        public static implicit operator ArrayBufferView(Float64Array t)
        {
            return null;
        }

        public static implicit operator ArrayBufferView(DataView t)
        {
            return null;
        }



        public static explicit operator Int8Array(ArrayBufferView value)
        {
            return default(Int8Array);
        }

        public static explicit operator Uint8Array(ArrayBufferView value)
        {
            return default(Uint8Array);
        }

        public static explicit operator Uint8ClampedArray(ArrayBufferView value)
        {
            return default(Uint8ClampedArray);
        }

        public static explicit operator Int16Array(ArrayBufferView value)
        {
            return default(Int16Array);
        }

        public static explicit operator Uint16Array(ArrayBufferView value)
        {
            return default(Uint16Array);
        }

        public static explicit operator Int32Array(ArrayBufferView value)
        {
            return default(Int32Array);
        }

        public static explicit operator Uint32Array(ArrayBufferView value)
        {
            return default(Uint32Array);
        }

        public static explicit operator Float32Array(ArrayBufferView value)
        {
            return default(Float32Array);
        }

        public static explicit operator Float64Array(ArrayBufferView value)
        {
            return default(Float64Array);
        }

        public static explicit operator DataView(ArrayBufferView value)
        {
            return default(DataView);
        }
    }
}
