using System.Diagnostics;

namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    public static class Convert
    {
        #region ToBoolean

        /// <summary>
        /// Converts the value of a specified object to an equivalent Boolean value.
        /// Note: Calling this method for <see cref="char"/> and <see cref="DateTime"/> values always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toBoolean({value})")]
        public static extern bool ToBoolean(object value);

        /// <summary>
        /// Converts the value of the specified object to an equivalent Boolean value, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="char"/> and <see cref="DateTime"/> values always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toBoolean({value}, {provider})")]
        public static extern bool ToBoolean(object value, IFormatProvider provider);

        #endregion ToBoolean

        #region ToChar

        /// <summary>
        /// Converts the value of the specified object to a Unicode character.
        /// Note: Calling this method for <see cref="bool"/>, <see cref="float"/>, <see cref="double"/>, <see cref="decimal"/> and <see cref="DateTime"/> values always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.Object + ")")]
        public static extern char ToChar(object value);

        /// <summary>
        /// Converts the value of the specified object to its equivalent Unicode character, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="bool"/>, <see cref="float"/>, <see cref="double"/>, <see cref="decimal"/> and <see cref="DateTime"/> values always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, {provider}, " + TypeCodeValues.Object + ")")]
        public static extern char ToChar(object value, IFormatProvider provider);

        /// <summary>
        /// Calling this method always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.Boolean + ")")]
        public static extern char ToChar(bool value);

        /// <summary>
        /// Returns the specified Unicode character value; no actual conversion is performed.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.Char + ")")]
        public static extern char ToChar(char value);

        /// <summary>
        /// Converts the value of the specified 8-bit signed integer to its equivalent Unicode character.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.SByte + ")")]
        [CLSCompliant(false)]
        public static extern char ToChar(sbyte value);

        /// <summary>
        /// Converts the value of the specified 8-bit unsigned integer to its equivalent Unicode character.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.Byte + ")")]
        public static extern char ToChar(byte value);

        /// <summary>
        /// Converts the value of the specified 16-bit signed integer to its equivalent Unicode character.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.Int16 + ")")]
        public static extern char ToChar(short value);

        /// <summary>
        /// Converts the value of the specified 16-bit unsigned integer to its equivalent Unicode character.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.UInt16 + ")")]
        [CLSCompliant(false)]
        public static extern char ToChar(ushort value);

        /// <summary>
        /// Converts the value of the specified 32-bit signed integer to its equivalent Unicode character.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.Int32 + ")")]
        public static extern char ToChar(int value);

        /// <summary>
        /// Converts the value of the specified 32-bit unsigned integer to its equivalent Unicode character.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.UInt32 + ")")]
        [CLSCompliant(false)]
        public static extern char ToChar(uint value);

        /// <summary>
        /// Converts the value of the specified 64-bit signed integer to its equivalent Unicode character.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.Int64 + ")")]
        public static extern char ToChar(long value);

        /// <summary>
        /// Converts the value of the specified 64-bit unsigned integer to its equivalent Unicode character.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.UInt64 + ")")]
        [CLSCompliant(false)]
        public static extern char ToChar(ulong value);

        /// <summary>
        /// Converts the value of the specified object to a Unicode character.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.String + ")")]
        public static extern char ToChar(string value);

        /// <summary>
        /// Converts the value of the specified object to its equivalent Unicode character, using the specified culture-specific formatting information.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, {provider}, " + TypeCodeValues.String + ")")]
        public static extern char ToChar(string value, IFormatProvider provider);

        /// <summary>
        /// Calling this method always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.Single + ")")]
        public static extern char ToChar(float value);

        /// <summary>
        /// Calling this method always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.Double + ")")]
        public static extern char ToChar(double value);

        /// <summary>
        /// Calling this method always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.Decimal + ")")]
        public static extern char ToChar(decimal value);

        /// <summary>
        /// Calling this method always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toChar({value}, null, " + TypeCodeValues.DateTime + ")")]
        public static extern char ToChar(DateTime value);

        #endregion ToChar

        #region ToSByte

        /// <summary>
        /// Converts the value of the specified object to an 8-bit signed integer.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toSByte({value})")]
        [CLSCompliant(false)]
        public static extern sbyte ToSByte(object value);

        /// <summary>
        /// Converts the value of the specified object to an 8-bit signed integer, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toSByte({value}, {provider})")]
        [CLSCompliant(false)]
        public static extern sbyte ToSByte(object value, IFormatProvider provider);

        /// <summary>
        /// Converts the value of the specified object to an 8-bit signed integer.
        /// </summary>
        [Bridge.Template("System.Convert.toSByte({value}, null, " + TypeCodeValues.String + ")")]
        [CLSCompliant(false)]
        public static extern sbyte ToSByte(string value);

        /// <summary>
        /// Converts the value of the specified object to an 8-bit signed integer, using the specified culture-specific formatting information.
        /// </summary>
        [Bridge.Template("System.Convert.toSByte({value}, {provider}, " + TypeCodeValues.String + ")")]
        [CLSCompliant(false)]
        public static extern sbyte ToSByte(string value, IFormatProvider provider);

        #endregion ToSByte

        #region ToByte

        /// <summary>
        /// Converts the value of the specified object to an 8-bit unsigned integer.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toByte({value})")]
        public static extern byte ToByte(object value);

        /// <summary>
        /// Converts the value of the specified object to an 8-bit unsigned integer, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toByte({value}, {provider})")]
        public static extern byte ToByte(object value, IFormatProvider provider);

        #endregion ToByte

        #region ToInt16

        /// <summary>
        /// Converts the value of the specified object to a 16-bit signed integer.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toInt16({value})")]
        public static extern short ToInt16(object value);

        /// <summary>
        /// Converts the value of the specified object to a 16-bit signed integer, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toInt16({value}, {provider})")]
        public static extern short ToInt16(object value, IFormatProvider provider);

        #endregion ToInt16

        #region ToUInt16

        /// <summary>
        /// Converts the value of the specified object to a 16-bit unsigned integer.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toUInt16({value})")]
        [CLSCompliant(false)]
        public static extern ushort ToUInt16(object value);

        /// <summary>
        /// Converts the value of the specified object to a 16-bit unsigned integer, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toUInt16({value}, {provider})")]
        [CLSCompliant(false)]
        public static extern ushort ToUInt16(object value, IFormatProvider provider);

        #endregion ToUInt16

        #region ToInt32

        /// <summary>
        /// Converts the value of the specified object to a 32-bit signed integer.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toInt32({value})")]
        public static extern int ToInt32(object value);

        /// <summary>
        /// Converts the value of the specified object to a 32-bit signed integer, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toInt32({value}, {provider})")]
        public static extern int ToInt32(object value, IFormatProvider provider);

        #endregion ToInt32

        #region ToUInt32

        /// <summary>
        /// Converts the value of the specified object to a 32-bit unsigned integer.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toUInt32({value})")]
        [CLSCompliant(false)]
        public static extern uint ToUInt32(object value);

        /// <summary>
        /// Converts the value of the specified object to a 32-bit unsigned integer, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toUInt32({value}, {provider})")]
        [CLSCompliant(false)]
        public static extern uint ToUInt32(object value, IFormatProvider provider);

        #endregion ToUInt32

        #region ToInt64

        /// <summary>
        /// Converts the value of the specified object to a 64-bit signed integer.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toInt64({value})")]
        public static extern long ToInt64(object value);

        /// <summary>
        /// Converts the value of the specified object to a 64-bit signed integer, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toInt64({value}, {provider})")]
        public static extern long ToInt64(object value, IFormatProvider provider);

        #endregion ToInt64

        #region ToUInt64

        /// <summary>
        /// Converts the value of the specified object to a 64-bit unsigned integer.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toUInt64({value})")]
        [CLSCompliant(false)]
        public static extern ulong ToUInt64(object value);

        /// <summary>
        /// Converts the value of the specified object to a 64-bit unsigned integer, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toUInt64({value}, {provider})")]
        [CLSCompliant(false)]
        public static extern ulong ToUInt64(object value, IFormatProvider provider);

        #endregion ToUInt64

        #region ToSingle

        /// <summary>
        /// Converts the value of the specified object to a single-precision floating-point number.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toSingle({value})")]
        public static extern float ToSingle(object value);

        /// <summary>
        /// Converts the value of the specified object to an single-precision floating-point number, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toSingle({value}, {provider})")]
        public static extern float ToSingle(object value, IFormatProvider provider);

        #endregion ToSingle

        #region ToDouble

        /// <summary>
        /// Converts the value of the specified object to a double-precision floating-point number.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toDouble({value})")]
        public static extern double ToDouble(object value);

        /// <summary>
        /// Converts the value of the specified object to an double-precision floating-point number, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toDouble({value}, {provider})")]
        public static extern double ToDouble(object value, IFormatProvider provider);

        #endregion ToDouble

        #region ToDecimal

        /// <summary>
        /// Converts the value of the specified object to an equivalent decimal number.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toDecimal({value})")]
        public static extern decimal ToDecimal(object value);

        /// <summary>
        /// Converts the value of the specified object to an equivalent decimal number, using the specified culture-specific formatting information.
        /// Note: Calling this method for <see cref="DateTime"/> value always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toDecimal({value}, {provider})")]
        public static extern decimal ToDecimal(object value, IFormatProvider provider);

        #endregion ToDecimal

        #region ToDateTime

        /// <summary>
        /// Converts the value of the specified object to a <see cref="T:System.DateTime"/> object.
        /// Note: Calling this method for built-in types (except <see cref="DateTime"/>, <see cref="string"/>) always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toDateTime({value})")]
        public static extern DateTime ToDateTime(object value);

        /// <summary>
        /// Converts the value of the specified object to a <see cref="T:System.DateTime"/> object, using the specified culture-specific formatting information.
        /// Note: Calling this method for built-in types (except <see cref="DateTime"/>, <see cref="string"/>) always throws <see cref="T:System.InvalidCastException"/>.
        /// </summary>
        [Bridge.Template("System.Convert.toDateTime({value}, {provider})")]
        public static extern DateTime ToDateTime(object value, IFormatProvider provider);

        #endregion ToDateTime

        #region ToString

        /// <summary>
        /// Converts the value of the specified object to its equivalent string representation.
        /// </summary>
        [Bridge.Template("System.Convert.toString({value})")]
        public static extern string ToString(object value);

        /// <summary>
        /// Converts the value of the specified object to its equivalent string representation using the specified culture-specific formatting information.
        /// </summary>
        [Bridge.Template("System.Convert.toString({value}, {provider})")]
        public static extern string ToString(object value, IFormatProvider provider);

        /// <summary>
        /// Converts the value of the specified object to its equivalent string representation.
        /// </summary>
        [Bridge.Template("System.Convert.toString({value}, null, " + TypeCodeValues.Char + ")")]
        public static extern string ToString(char value);

        /// <summary>
        /// Converts the value of the specified object to its equivalent string representation using the specified culture-specific formatting information.
        /// </summary>
        [Bridge.Template("System.Convert.toString({value}, {provider}, " + TypeCodeValues.Char + ")")]
        public static extern string ToString(char value, IFormatProvider provider);

        #endregion ToString

        #region ToNumberFromBase

        /// <summary>
        /// Converts the string representation of a number in a specified base to an equivalent 8-bit unsigned integer.
        /// </summary>
        [Bridge.Template("System.Convert.toNumberInBase({value}, {fromBase}, " + TypeCodeValues.Byte + ")")]
        public static extern byte ToByte(string value, int fromBase);

        /// <summary>
        /// Converts the string representation of a number in a specified base to an equivalent 8-bit signed integer.
        /// </summary>
        [Bridge.Template("System.Convert.toNumberInBase({value}, {fromBase}, " + TypeCodeValues.SByte + ")")]
        [CLSCompliant(false)]
        public static extern sbyte ToSByte(string value, int fromBase);

        /// <summary>
        /// Converts the string representation of a number in a specified base to an equivalent 16-bit signed integer.
        /// </summary>
        [Bridge.Template("System.Convert.toNumberInBase({value}, {fromBase}, " + TypeCodeValues.Int16 + ")")]
        public static extern short ToInt16(string value, int fromBase);

        /// <summary>
        /// Converts the string representation of a number in a specified base to an equivalent 16-bit unsigned integer.
        /// </summary>
        [Bridge.Template("System.Convert.toNumberInBase({value}, {fromBase}, " + TypeCodeValues.UInt16 + ")")]
        [CLSCompliant(false)]
        public static extern ushort ToUInt16(string value, int fromBase);

        /// <summary>
        /// Converts the string representation of a number in a specified base to an equivalent 32-bit signed integer.
        /// </summary>
        [Bridge.Template("System.Convert.toNumberInBase({value}, {fromBase}, " + TypeCodeValues.Int32 + ")")]
        public static extern int ToInt32(string value, int fromBase);

        /// <summary>
        /// Converts the string representation of a number in a specified base to an equivalent 32-bit unsigned integer.
        /// </summary>
        [Bridge.Template("System.Convert.toNumberInBase({value}, {fromBase}, " + TypeCodeValues.UInt32 + ")")]
        [CLSCompliant(false)]
        public static extern uint ToUInt32(string value, int fromBase);

        /// <summary>
        /// Converts the string representation of a number in a specified base to an equivalent 64-bit signed integer.
        /// </summary>
        [Bridge.Template("System.Convert.toNumberInBase({value}, {fromBase}, " + TypeCodeValues.Int64 + ")")]
        public static extern long ToInt64(string value, int fromBase);

        /// <summary>
        /// Converts the string representation of a number in a specified base to an equivalent 64-bit unsigned integer.
        /// </summary>
        [Bridge.Template("System.Convert.toNumberInBase({value}, {fromBase}, " + TypeCodeValues.UInt64 + ")")]
        [CLSCompliant(false)]
        public static extern ulong ToUInt64(string value, int fromBase);

        #endregion ToNumberFromBase

        #region ToStringInBase

        /// <summary>
        /// Converts the value of an 8-bit unsigned integer to its equivalent string representation in a specified base.
        /// </summary>
        [Bridge.Template("System.Convert.toStringInBase({value}, {toBase}, " + TypeCodeValues.Byte + ")")]
        public static extern string ToString(byte value, int toBase);

        /// <summary>
        /// Converts the value of a 16-bit signed integer to its equivalent string representation in a specified base.
        /// </summary>
        [Bridge.Template("System.Convert.toStringInBase({value}, {toBase}, " + TypeCodeValues.Int16 + ")")]
        public static extern string ToString(short value, int toBase);

        /// <summary>
        /// Converts the value of a 32-bit signed integer to its equivalent string representation in a specified base.
        /// </summary>
        [Bridge.Template("System.Convert.toStringInBase({value}, {toBase}, " + TypeCodeValues.Int32 + ")")]
        public static extern string ToString(int value, int toBase);

        /// <summary>
        /// Converts the value of a 64-bit signed integer to its equivalent string representation in a specified base.
        /// </summary>
        [Bridge.Template("System.Convert.toStringInBase({value}, {toBase}, " + TypeCodeValues.Int64 + ")")]
        public static extern string ToString(long value, int toBase);

        #endregion ToStringInBase

        #region ToBase64String

        /// <summary>
        /// Converts an array of 8-bit unsigned integers to its equivalent string representation that is encoded with base-64 digits.
        /// </summary>
        [Bridge.Template("System.Convert.toBase64String({inArray}, null, null, null)")]
        public static extern string ToBase64String(byte[] inArray);

        /// <summary>
        /// Converts an array of 8-bit unsigned integers to its equivalent string representation that is encoded with base-64 digits. A parameter specifies whether to insert line breaks in the return value.
        /// </summary>
        /// <param name="inArray">An array of 8-bit unsigned integers. </param><param name="options"><see cref="F:System.Base64FormattingOptions.InsertLineBreaks"/> to insert a line break every 76 characters, or <see cref="F:System.Base64FormattingOptions.None"/> to not insert line breaks.</param><exception cref="T:System.ArgumentNullException"><paramref name="inArray"/> is null. </exception><exception cref="T:System.ArgumentException"><paramref name="options"/> is not a valid <see cref="T:System.Base64FormattingOptions"/> value. </exception><filterpriority>1</filterpriority>
        [Bridge.Template("System.Convert.toBase64String({inArray}, null, null, {options})")]
        public static extern string ToBase64String(byte[] inArray, Base64FormattingOptions options);

        /// <summary>
        /// Converts a subset of an array of 8-bit unsigned integers to its equivalent string representation that is encoded with base-64 digits. Parameters specify the subset as an offset in the input array, and the number of elements in the array to convert.
        /// </summary>
        [Bridge.Template("System.Convert.toBase64String({inArray}, {offset}, {length}, null)")]
        public static extern string ToBase64String(byte[] inArray, int offset, int length);

        /// <summary>
        /// Converts a subset of an array of 8-bit unsigned integers to its equivalent string representation that is encoded with base-64 digits. Parameters specify the subset as an offset in the input array, the number of elements in the array to convert, and whether to insert line breaks in the return value.
        /// </summary>
        [Bridge.Template("System.Convert.toBase64String({inArray}, {offset}, {length}, {options})")]
        public static extern string ToBase64String(byte[] inArray, int offset, int length, Base64FormattingOptions options);

        #endregion ToBase64String

        #region ToBase64CharArray

        /// <summary>
        /// Converts a subset of an 8-bit unsigned integer array to an equivalent subset of a Unicode character array encoded with base-64 digits. Parameters specify the subsets as offsets in the input and output arrays, and the number of elements in the input array to convert.
        /// </summary>
        ///
        /// <returns>
        /// A 32-bit signed integer containing the number of bytes in <paramref name="outArray"/>.
        /// </returns>
        [Bridge.Template("System.Convert.toBase64CharArray({inArray}, {offsetIn}, {length}, {outArray}, {offsetOut}, null)")]
        public static extern int ToBase64CharArray(byte[] inArray, int offsetIn, int length, char[] outArray, int offsetOut);

        /// <summary>
        /// Converts a subset of an 8-bit unsigned integer array to an equivalent subset of a Unicode character array encoded with base-64 digits. Parameters specify the subsets as offsets in the input and output arrays, the number of elements in the input array to convert, and whether line breaks are inserted in the output array.
        /// </summary>
        ///
        /// <returns>
        /// A 32-bit signed integer containing the number of bytes in <paramref name="outArray"/>.
        /// </returns>
        [Bridge.Template("System.Convert.toBase64CharArray({inArray}, {offsetIn}, {length}, {outArray}, {offsetOut}, {options})")]
        public static extern int ToBase64CharArray(byte[] inArray, int offsetIn, int length, char[] outArray, int offsetOut, Base64FormattingOptions options);

        #endregion ToBase64CharArray

        #region FromBase64String

        /// <summary>
        /// Converts the specified string, which encodes binary data as base-64 digits, to an equivalent 8-bit unsigned integer array.
        /// </summary>
        [Bridge.Template("System.Convert.fromBase64String({s})")]
        public static extern byte[] FromBase64String(string s);

        #endregion FromBase64String

        #region FromBase64CharArray

        /// <summary>
        /// Converts a subset of a Unicode character array, which encodes binary data as base-64 digits, to an equivalent 8-bit unsigned integer array. Parameters specify the subset in the input array and the number of elements to convert.
        /// </summary>
        [Bridge.Template("System.Convert.fromBase64CharArray({inArray}, {offset}, {length})")]
        public static extern byte[] FromBase64CharArray(char[] inArray, int offset, int length);

        #endregion FromBase64CharArray

        //A typeof operation is fairly expensive (does a system call), so we'll cache these here
        //statically.  These are exactly lined up with the TypeCode, eg. ConvertType[TypeCode.Int16]
        //will give you the type of an Int16.
        internal static readonly Type[] ConvertTypes = {
            typeof(System.Empty),
            typeof(Object),
            typeof(System.DBNull),
            typeof(Boolean),
            typeof(Char),
            typeof(SByte),
            typeof(Byte),
            typeof(Int16),
            typeof(UInt16),
            typeof(Int32),
            typeof(UInt32),
            typeof(Int64),
            typeof(UInt64),
            typeof(Single),
            typeof(Double),
            typeof(Decimal),
            typeof(DateTime),
            typeof(Object), //TypeCode is discontinuous so we need a placeholder.
            typeof(String)
        };

        // Need to special case Enum because typecode will be underlying type, e.g. Int32
        private static readonly Type EnumType = typeof(Enum);

        internal static Object DefaultToType(IConvertible value, Type targetType, IFormatProvider provider)
        {
            Debug.Assert(value != null, "[Convert.DefaultToType]value!=null");
            if (targetType == null)
            {
                throw new ArgumentNullException(nameof(targetType));
            }

            if (ReferenceEquals(value.GetType(), targetType))
            {
                return value;
            }

            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.Boolean]))
                return value.ToBoolean(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.Char]))
                return value.ToChar(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.SByte]))
                return value.ToSByte(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.Byte]))
                return value.ToByte(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.Int16]))
                return value.ToInt16(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.UInt16]))
                return value.ToUInt16(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.Int32]))
                return value.ToInt32(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.UInt32]))
                return value.ToUInt32(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.Int64]))
                return value.ToInt64(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.UInt64]))
                return value.ToUInt64(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.Single]))
                return value.ToSingle(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.Double]))
                return value.ToDouble(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.Decimal]))
                return value.ToDecimal(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.DateTime]))
                return value.ToDateTime(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.String]))
                return value.ToString(provider);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.Object]))
                return (Object)value;
            //  Need to special case Enum because typecode will be underlying type, e.g. Int32
            if (ReferenceEquals(targetType, EnumType))
                return (Enum)value;
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.DBNull]))
                throw new InvalidCastException("Object cannot be cast to DBNull.");
            // TODO: SR
            //throw new InvalidCastException(SR.InvalidCast_DBNull);
            if (ReferenceEquals(targetType, ConvertTypes[(int)TypeCode.Empty]))
                throw new InvalidCastException("Object cannot be cast to Empty.");
            // TODO: SR
            //throw new InvalidCastException(SR.InvalidCast_Empty);

            throw new InvalidCastException(string.Format("Invalid cast from '{0}' to '{1}'.", value.GetType().FullName, targetType.FullName));
            // TODO: SR
            //throw new InvalidCastException(string.Format(SR.InvalidCast_FromTo, value.GetType().FullName, targetType.FullName));
        }
    }
}