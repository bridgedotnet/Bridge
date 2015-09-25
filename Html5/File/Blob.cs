using Bridge;

namespace Bridge.Html5
{
    /// <summary>
    /// A Blob object represents a file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system.
    /// An easy way to construct a Blob is by invoking the Blob constuctor. Another way is to use the slice() method to create a blob that contains a subset of another blob's data.
    /// </summary>
    [Ignore]
    [Name("Blob")]
    public class Blob
    {
        /// <summary>
        ///
        /// </summary>
        public Blob()
        {
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="parts">An Array of data objects to put into the new Blob object. This can be any number of ArrayBuffer, ArrayBufferView (typed array), Blob, or strings, in any order.</param>
        public Blob(Any<ArrayBuffer, ArrayBufferView, Blob, string>[] parts)
        {
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="parts">An Array of data objects to put into the new Blob object. This can be any number of ArrayBuffer, ArrayBufferView (typed array), Blob, or strings, in any order.</param>
        /// <param name="properties">A BlobPropertyBag object that provides the properties for the new Blob object.</param>
        public Blob(Any<ArrayBuffer, ArrayBufferView, Blob, string>[] parts, BlobPropertyBag properties)
        {
        }

        /// <summary>
        /// The size, in bytes, of the data contained in the Blob object.
        /// </summary>
        public readonly ulong Size;

        /// <summary>
        /// A string indicating the MIME type of the data contained in the Blob. If the type is unknown, this string is empty.
        /// </summary>
        public readonly string Type;

        /// <summary>
        /// Returns a new Blob object containing the data in the specified range of bytes of the source Blob.
        /// </summary>
        /// <returns>A new Blob object containing the specified data from the source Blob.</returns>
        public virtual Blob Slice()
        {
            return null;
        }

        /// <summary>
        /// Returns a new Blob object containing the data in the specified range of bytes of the source Blob.
        /// </summary>
        /// <param name="start">An index into the Blob indicating the first byte to copy into the new Blob. If you specify a negative value, it's treated as an offset from the end of the string toward the beginning. For example, -10 would be the 10th from last byte in the Blob. The default value is 0. If you specify a value for start that is larger than the size of the source Blob, the returned Blob has size 0 and contains no data.</param>
        /// <returns>A new Blob object containing the specified data from the source Blob.</returns>
        public virtual Blob Slice(long start)
        {
            return null;
        }

        /// <summary>
        /// Returns a new Blob object containing the data in the specified range of bytes of the source Blob.
        /// </summary>
        /// <param name="start">An index into the Blob indicating the first byte to copy into the new Blob. If you specify a negative value, it's treated as an offset from the end of the string toward the beginning. For example, -10 would be the 10th from last byte in the Blob. The default value is 0. If you specify a value for start that is larger than the size of the source Blob, the returned Blob has size 0 and contains no data.</param>
        /// <param name="end">An index into the Blob indicating the last byte to copy into the new Blob. If you specify a negative value, it's treated as an offset from the end of the string toward the beginning. For example, -10 would be the 10th from last byte in the Blob. The default value is size.</param>
        /// <returns>A new Blob object containing the specified data from the source Blob.</returns>
        public virtual Blob Slice(long start, long end)
        {
            return null;
        }

        /// <summary>
        /// Returns a new Blob object containing the data in the specified range of bytes of the source Blob.
        /// </summary>
        /// <param name="start">An index into the Blob indicating the first byte to copy into the new Blob. If you specify a negative value, it's treated as an offset from the end of the string toward the beginning. For example, -10 would be the 10th from last byte in the Blob. The default value is 0. If you specify a value for start that is larger than the size of the source Blob, the returned Blob has size 0 and contains no data.</param>
        /// <param name="end">An index into the Blob indicating the last byte to copy into the new Blob. If you specify a negative value, it's treated as an offset from the end of the string toward the beginning. For example, -10 would be the 10th from last byte in the Blob. The default value is size.</param>
        /// <param name="contentType">The content type to assign to the new Blob; this will be the value of its type property. The default value is an empty string.</param>
        /// <returns>A new Blob object containing the specified data from the source Blob.</returns>
        public virtual Blob Slice(long start, long end, string contentType)
        {
            return null;
        }
    }
}
