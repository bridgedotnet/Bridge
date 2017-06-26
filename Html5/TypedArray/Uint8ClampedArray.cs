// The documentation for this class (on <summary> tags) was extracted from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray

#if CORE
namespace Bridge.Internal.Html5
#else
namespace Bridge.Html5
#endif
{
    // FIXME: This structure should accept integers and other types. Values above 255 are truncated to 255, and
    //        values below 0 are truncated to zero (this is done in JavaScript/browser level).
    /// <summary>
    /// Represents an array of twos-complement 8-bit unsigned integers clamped to 0-255. The contents are
    /// initialized to 0. Once established, you can reference elements in the array using the object's
    /// methods, or using standard array index syntax (that is, using bracket notation).
    /// </summary>
    [External]
    [Namespace(false)]
    #if CORE
    internal
#else
    public
#endif
    class Uint8ClampedArray : TypedArray.Prototype<Uint8ClampedArray, byte>
    {
        /// <summary>
        /// Creates a new Uint8ClampedArray of the specified length.
        /// </summary>
        /// <param name="length">Length of array to create</param>
        public extern Uint8ClampedArray(Union<int, uint> length);

        // FIXME: Make overloads for other types, as this one is supposed to clamp values?
        /// <summary>
        /// Creates a new Uint8ClampedArray out of the specified Uint8ClampedArray.
        /// </summary>
        /// <param name="typedArray">Uint8ClampedArray to use as initial contents to the new array.</param>
        public extern Uint8ClampedArray(Uint8ClampedArray typedArray);

        /// <summary>
        /// Creates a new Uint8ClampedArray out of the specified object.
        /// </summary>
        /// <param name="objectInstance">Object to be converted into the new array.</param>
        public extern Uint8ClampedArray(object objectInstance);

        /// <summary>
        /// Creates a new Uint8ClampedArray out of the specified buffer and byteOffset with the specified length.
        /// </summary>
        /// <param name="buffer">Arraybuffer to use as base for contents.</param>
        /// <param name="byteOffset">Optional. Position in the buffer to start reading data from.</param>
        /// <param name="length">Optional. Number of elements to consider while creating the array.</param>
        public extern Uint8ClampedArray(ArrayBuffer buffer, uint byteOffset = 0, uint length = 0);

        // FIXME: Make overloads for other types, as this one is supposed to clamp values?
        /// <summary>
        /// Allows index operations on the array.
        /// </summary>
        /// <param name="i">Index position in the array.</param>
        /// <returns>The element in the specified position.</returns>
        public extern byte this[Union<int, uint> i] { get; set; }

        #region Properties

        /// <summary>
        /// Returns a number value of the element size. 1 in the case of an Uint8ClampedArray.
        /// </summary>
        public const short BYTES_PER_ELEMENT = 1;

        /// <summary>
        /// Length property whose value is 3.
        /// </summary>
        public const short length = 3;

        /// <summary>
        /// Returns the string value of the constructor name. In the case of the Uint8ClampedArray type: "Uint8ClampedArray".
        /// </summary>
        public const string name = "Uint8ClampedArray";

        #endregion Properties

        #region Methods

        // Uint8ClampedArray.from() and Uint8ClampedArray.of() are work in progress for ES6 and, at the time of the writing,
        // were not ready for production environment. Thus, their definitions are not present here.

        #endregion Methods
    }
}