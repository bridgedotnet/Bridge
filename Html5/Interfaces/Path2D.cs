// The documentation for this class (on <summary> tags) was extracted from:
// https://developer.mozilla.org/en-US/docs/Web/API/Path2D

// TODO: Implement Path2D itself.

namespace Bridge.Html5
{
    /// <summary>
    /// The Path2D interface of the Canvas 2D API is used to declare paths that are then later used on
    /// CanvasRenderingContext2D objects. The path methods of the CanvasRenderingContext2D interface
    /// are present on this interface as well and are allowing you to create paths that you can retain
    /// and replay as required on a canvas.
    /// </summary>
    /// <remarks>This is experimental API that should not be used in production code.</remarks>
    [External]
    [Namespace(false)]
    public class Path2D : SVGOperations
    {
        /// <summary>
        /// Creates a new Path2D object.
        /// </summary>
        public extern Path2D();

        /// <summary>
        /// Creates a new Path2D object from an specified Path2D object.
        /// </summary>
        public extern Path2D(Path2D path);

        /// <summary>
        /// Creates a new Path2D object from an specified string consisting of SVG path data.
        /// </summary>
        /// <param name="d"></param>
        public extern Path2D(string d);

        /// <summary>
        /// Adds a path to the current path.
        /// </summary>
        /// <param name="path"></param>
        /// <param name="transform"></param>
        public extern void AddPath(Path2D path, SVGMatrix transform = null);

        // The remaining methods are all inherited from SVGOperations, which is common to CanvasRenderingContext2D.
    }
}