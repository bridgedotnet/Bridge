// The documentation for this class (on <summary> tags) was extracted from:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern

namespace Bridge.Html5
{
    /// <summary>
    /// The CanvasPattern interface represents an opaque object describing a pattern, based on a image,
    /// a canvas or a video, created by the CanvasRenderingContext2D.createPattern() method.
    /// </summary>
    [External]
    [Namespace(false)]
    public class CanvasPattern
    {
        /// <summary>
        /// This method uses an SVGMatrix object as the pattern's transformation matrix and invokes
        /// it on the pattern.
        /// </summary>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public extern virtual void SetTransform(SVGMatrix matrix);
    }
}