// The documentation for this class (on <summary> tags) was extracted from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

#if CORE
namespace Bridge.Internal.Html5
#else
namespace Bridge.Html5
#endif
{
    /// <summary>
    /// Represents an array of 64-bit floating point numbers (corresponding to the C 'double' data type)
    /// in the platform byte order. If control over byte order is needed, use DataView instead.
    /// The contents are initialized to 0. Once established, you can reference elements in the array
    /// using the object's methods, or using standard array index syntax (that is, using bracket
    /// notation).
    /// </summary>
    [External]
    [Namespace(false)]
#if CORE
    internal
#else
    public
#endif
    class Float64Array : TypedArray.Prototype<Float64Array, double>
    {
        /// <summary>
        /// Creates a new Float64Array of the specified length.
        /// </summary>
        /// <param name="length">Length of array to create</param>
        public extern Float64Array(Union<int, uint> length);

        /// <summary>
        /// Creates a new Float64Array out of the specified Float64Array.
        /// </summary>
        /// <param name="typedArray">Float64Array to use as initial contents to the new array.</param>
        public extern Float64Array(Float64Array typedArray);

        /// <summary>
        /// Creates a new Float64Array out of the specified object.
        /// </summary>
        /// <param name="objectInstance">Object to be converted into the new array.</param>
        public extern Float64Array(object objectInstance);

        /// <summary>
        /// Creates a new Float64Array out of the specified buffer and byteOffset with the specified length.
        /// </summary>
        /// <param name="buffer">Arraybuffer to use as base for contents.</param>
        /// <param name="byteOffset">Optional. Position in the buffer to start reading data from.</param>
        /// <param name="length">Optional. Number of elements to consider while creating the array.</param>
        public extern Float64Array(ArrayBuffer buffer, uint byteOffset = 0, uint length = 0);

        /// <summary>
        /// Allows index operations on the array.
        /// </summary>
        /// <param name="i">Index position in the array.</param>
        /// <returns>The element in the specified position.</returns>
        public extern double this[Union<int, uint> i] { get; set; }

        #region Properties

        /// <summary>
        /// Returns a number value of the element size. 1 in the case of an Float64Array.
        /// </summary>
        public const short BYTES_PER_ELEMENT = 1;

        /// <summary>
        /// Length property whose value is 3.
        /// </summary>
        public const short length = 3;

        /// <summary>
        /// Returns the string value of the constructor name. In the case of the Float64Array type: "Float64Array".
        /// </summary>
        public const string name = "Float64Array";

        #endregion Properties

        #region Methods

        // Float64Array.from() and Float64Array.of() are work in progress for ES6 and, at the time of the writing,
        // were not ready for production environment. Thus, their definitions are not present here.

        #endregion Methods
    }
}