// The documentation for this class (on <summary> tags) was extracted from:
// https://developer.mozilla.org/en-US/docs/Web/API/ImageData

namespace Bridge.Html5
{
    /// <summary>
    /// The ImageData interface represents the underlying pixel data of an area of a &lt;canvas> element.
    /// It is created using the ImageData() constructor or creator methods on the CanvasRenderingContext2D
    /// object associated with a canvas: createImageData() and getImageData(). It can also be used to set
    /// a part of the canvas by using putImageData().
    /// </summary>
    [External]
    [Namespace(false)]
    public class ImageData
    {
        /// <summary>
        /// Creates an ImageData object.
        /// </summary>
        public extern ImageData();

        /// <summary>
        /// Creates an ImageData object from a given Uint8ClampedArray and the size of the image it contains.
        /// Note that this is the most common way to create such an object in workers as createImageData()
        /// is not available there.
        /// </summary>
        /// <param name="array">A Uint8ClampedArray containing the underlying pixel representation of theimage.</param>
        /// <param name="width">An unsigned number representing the width of the represented image.</param>
        /// <param name="height">
        /// An unsigned number representing the height of the represented image. This value is optional
        /// if an array is given: it will be inferred from its size and the given width.
        /// </param>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public extern ImageData(Uint8ClampedArray array, uint width, uint? height = null);

        /// <summary>
        /// Creates an ImageData object from the size of the image. Without specifying the array, an image of
        /// a black rectangle is created. Note that this is the most common way to create such an object in
        /// workers as createImageData() is not available there.
        /// </summary>
        /// <param name="width">An unsigned number representing the width of the represented image.</param>
        /// <param name="height">An unsigned number representing the height of the represented image.</param>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public extern ImageData(uint width, uint height);

        // TODO: implement Uint8ClampedArray following the link on the top of this source file!
        /// <summary>
        /// A Uint8ClampedArray representing a one-dimensional array containing the data in the RGBA order,
        /// with integer values between 0 and 255 (included).
        /// </summary>
        public readonly Uint8ClampedArray Data;

        /// <summary>
        /// An unsigned number representing the actual height, in pixels, of the ImageData.
        /// </summary>
        public readonly uint Height;

        /// <summary>
        /// An unsigned number representing the actual width, in pixels, of the ImageData.
        /// </summary>
        public readonly uint Width;
    }
}