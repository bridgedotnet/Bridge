// The documentation for this class (on <summary> tags) was extracted from:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

using System.Collections.Generic;

namespace Bridge.Html5
{
    /// <summary>
    /// The CanvasRenderingContext2D interface provides the 2D rendering context for the drawing surface of a
    /// &lt;canvas> element.
    /// To get an object of this interface, call getContext() on a &lt;canvas>, supplying
    /// "CanvasContext2DType.CanvasRenderingContext2D" as the argument.
    /// </summary>
    [External]
    [Namespace(false)]
    public class CanvasRenderingContext2D : SVGOperations
    {
        // There are three methods that immediately draw rectangles to the bitmap.

        #region Drawing Rectangles

        // TODO: Review summary to include parameters' info. From this point down to createPattern (~390)
        /// <summary>
        /// Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height)
        /// to transparent black, erasing any previously drawn content.
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the rectangle starting point.</param>
        /// <param name="y">The y axis of the coordinate for the rectangle starting point.</param>
        /// <param name="width">The rectangle's width.</param>
        /// <param name="height">The rectangle's height.</param>
        public extern virtual void ClearRect(Union<uint, int> x, Union<uint, int> y, Union<uint, int> width, Union<uint, int> height);

        /// <summary>
        /// Draws a filled rectangle at (x, y) position whose size is determined by width and height.
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the rectangle starting point.</param>
        /// <param name="y">The y axis of the coordinate for the rectangle starting point.</param>
        /// <param name="width">The rectangle's width.</param>
        /// <param name="height">The rectangle's height.</param>
        public extern virtual void FillRect(Union<uint, int> x, Union<uint, int> y, Union<uint, int> width, Union<uint, int> height);

        /// <summary>
        /// Paints a rectangle which has a starting point at (x, y) and has a w width and an h height
        /// onto the canvas, using the current stroke style.
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the rectangle starting point.</param>
        /// <param name="y">The y axis of the coordinate for the rectangle starting point.</param>
        /// <param name="width">The rectangle's width.</param>
        /// <param name="height">The rectangle's height.</param>
        public extern virtual void StrokeRect(Union<uint, int> x, Union<uint, int> y, Union<uint, int> width, Union<uint, int> height);

        #endregion Drawing Rectangles

        // The following methods are provided for drawing text. See also the TextMetrics object for
        // text properties.

        #region Drawing Text

        /// <summary>
        /// Draws (fills) a given text at the given (x,y) position.
        /// </summary>
        /// <param name="text">
        /// The text to render using the current font, textAlign, textBaseline, and direction values.
        /// </param>
        /// <param name="x">The x axis of the coordinate for the text starting point.</param>
        /// <param name="y">The y axis of the coordinate for the text starting point.</param>
        public extern virtual void FillText(string text, Union<uint, int> x, Union<uint, int> y);

        /// <summary>
        /// Draws (fills) a given text at the given (x,y) position.
        /// </summary>
        /// <param name="text">
        /// The text to render using the current font, textAlign, textBaseline, and direction values.
        /// </param>
        /// <param name="x">The x axis of the coordinate for the text starting point.</param>
        /// <param name="y">The y axis of the coordinate for the text starting point.</param>
        /// <param name="maxWidth">
        /// The maximum width to draw. If specified, and the string is computed to be wider than
        /// this width, the font is adjusted to use a more horizontally condensed font (if one is
        /// available or if a reasonably readable one can be synthesized by scaling the current
        /// font horizontally) or a smaller font.
        /// </param>
        public extern virtual void FillText(string text, Union<uint, int> x, Union<uint, int> y, Union<uint?, int?> maxWidth);

        /// <summary>
        /// Draws (strokes) a given text at the given (x, y) position.
        /// </summary>
        /// <param name="text">
        /// The text to render using the current font, textAlign, textBaseline, and direction values.
        /// </param>
        /// <param name="x">The x axis of the coordinate for the text starting point.</param>
        /// <param name="y">The y axis of the coordinate for the text starting point.</param>
        public extern virtual void StrokeText(string text, Union<uint, int> x, Union<uint, int> y);

        /// <summary>
        /// Draws (strokes) a given text at the given (x, y) position.
        /// </summary>
        /// <param name="text">
        /// The text to render using the current font, textAlign, textBaseline, and direction values.
        /// </param>
        /// <param name="x">The x axis of the coordinate for the text starting point.</param>
        /// <param name="y">The y axis of the coordinate for the text starting point.</param>
        /// <param name="maxWidth">
        /// The maximum width to draw. If specified, and the string is computed to be wider than
        /// this width, the font is adjusted to use a more horizontally condensed font (if one is
        /// available or if a reasonably readable one can be synthesized by scaling the current
        /// font horizontally) or a smaller font.
        /// </param>
        public extern virtual void StrokeText(string text, Union<uint, int> x, Union<uint, int> y, Union<uint?, int?> maxWidth);

        /// <summary>
        /// Returns a TextMetrics object.
        /// </summary>
        /// <param name="text">The text to measure.</param>
        /// <returns>A TextMetrics object.</returns>
        public virtual extern TextMetrics MeasureText(string text);

        #endregion Drawing Text

        // The following methods and properties control how lines are drawn.

        #region Line Styles

        /// <summary>
        /// Width of lines. Default 1.0
        /// </summary>
        public double LineWidth;

        /// <summary>
        /// Type of endings on the end of lines. Possible values: butt (default), round, square.
        /// </summary>
        public CanvasTypes.CanvasLineCapType LineCap;

        /// <summary>
        /// Defines the type of corners where two lines meet. Possible values: round, bevel, miter (default).
        /// </summary>
        public CanvasTypes.CanvasLineJoinType LineJoin;

        /// <summary>
        /// Miter limit ratio. Default 10.
        /// </summary>
        public double MiterLimit;

        /// <summary>
        /// Gets the current line dash pattern.
        /// </summary>
        /// <returns>
        /// An Array. A list of numbers that specifies distances to alternately draw a line and a gap
        /// (in coordinate space units). If the number, when setting the elements, was odd, the elements
        /// of the array get copied and concatenated.
        /// For example, setting the line dash to [5, 15, 25] will result in getting back
        /// [5, 15, 25, 5, 15, 25].
        /// </returns>
        public virtual extern double[] GetLineDash();

        /// <summary>
        /// Sets the current line dash pattern.
        /// </summary>
        /// <param name="segments">
        /// An Array. A list of numbers that specifies distances to alternately draw a line and a gap
        /// (in coordinate space units). If the number of elements in the array is odd, the elements
        /// of the array get copied and concatenated.
        /// For example, [5, 15, 25] will become [5, 15, 25, 5, 15, 25].
        /// </param>
        public extern virtual void SetLineDash(Union<double[], uint[], int[], IEnumerable<Union<double, uint, int>>> segments);

        /// <summary>
        /// Specifies where to start a dash array on a line.
        /// </summary>
        public float LineDashOffset;

        #endregion Line Styles

        // The following properties control how text is laid out.

        #region Text Styles

        /// <summary>
        /// Font setting. Default value 10px sans-serif.
        /// </summary>
        public string Font;

        /// <summary>
        /// Text alignment setting. Possible values: start (default), end, left, right or center.
        /// </summary>
        public CanvasTypes.CanvasTextAlign TextAlign;

        /// <summary>
        /// Baseline alignment setting. Possible values: top, hanging, middle, alphabetic (default),
        /// ideographic, bottom.
        /// </summary>
        public CanvasTypes.CanvasTextBaselineAlign TextBaseline;

        /// <summary>
        /// Directionality. Possible values: ltr, rtl, inherit (default).
        /// </summary>
        public CanvasTypes.CanvasTextDirection Direction;

        #endregion Text Styles

        // Fill styling is used for colors and styles inside shapes and stroke styling is used for
        // the lines around shapes.

        #region Fill and Stroke Styles

        /// <summary>
        /// Color or style to use inside shapes. Default #000 (black).
        /// </summary>
        public Union<string, CanvasGradient, CanvasPattern> FillStyle;

        /// <summary>
        /// Color or style to use for the lines around shapes. Default #000 (black).
        /// </summary>
        public Union<string, CanvasGradient, CanvasPattern> StrokeStyle;

        #endregion Fill and Stroke Styles

        #region Gradients and Patterns

        /// <summary>
        /// Creates a linear gradient along the line given by the coordinates represented by the parameters.
        /// </summary>
        /// <param name="x0">The x axis of the coordinate of the start point.</param>
        /// <param name="y0">The y axis of the coordinate of the start point.</param>
        /// <param name="x1">The x axis of the coordinate of the end point.</param>
        /// <param name="y1">The y axis of the coordinate of the end point.</param>
        /// <returns>A linear CanvasGradient initialized with the specified line.</returns>
        public virtual extern CanvasGradient CreateLinearGradient(Union<uint, int, double> x0, Union<uint, int, double> y0,
                                                           Union<uint, int, double> x1, Union<uint, int, double> y1);

        /// <summary>
        /// Creates a radial gradient along the line given by the coordinates represented by the parameters.
        /// </summary>
        /// <param name="x0">The x axis of the coordinate of the start circle.</param>
        /// <param name="y0">The y axis of the coordinate of the start circle.</param>
        /// <param name="r0">The radius of the start circle.</param>
        /// <param name="x1">The x axis of the coordinate of the end circle.</param>
        /// <param name="y1">The y axis of the coordinate of the end circle.</param>
        /// <param name="r1">The radius of the end circle.</param>
        /// <returns>A radial CanvasGradient initialized with the two specified circles.</returns>
        public virtual extern CanvasGradient CreateRadialGradient(
            Union<uint, int, double> x0, Union<uint, int, double> y0, Union<uint, int, double> r0,
            Union<uint, int, double> x1, Union<uint, int, double> y1, Union<uint, int, double> r1);

        /// <summary>
        /// Creates a pattern using the specified image (a CanvasImageSource). It repeats the source in the
        /// directions specified by the repetition argument. This method returns a CanvasPattern.
        /// </summary>
        /// <param name="image">
        /// A CanvasImageSource to be used as image to repeat. It can either be a:
        /// • HTMLImageElement (&lt;img>),
        /// • HTMLVideoElement (&lt;video>),
        /// • HTMLCanvasElement (&lt;canvas>),
        /// • CanvasRenderingContext2D,
        /// • ImageBitmap (c# object for now),
        /// • ImageData, or a
        /// • Blob.
        /// </param>
        /// <param name="repetition"></param>
        /// <returns>An opaque CanvasPattern object describing a pattern.</returns>
        /// <remarks>
        /// At the time of implementation, ImageBitmap had no documentation and Bridge.NET did not have
        /// it defined inside.
        /// </remarks>
        public virtual extern CanvasPattern CreatePattern(
            Union<HTMLImageElement, HTMLVideoElement, HTMLCanvasElement, CanvasRenderingContext2D, object, ImageData, Blob> image,
            CanvasTypes.CanvasRepetitionTypes repetition);

        #endregion Gradients and Patterns

        #region Shadows

        /// <summary>
        /// Specifies the blurring effect. Default 0
        /// </summary>
        public float ShadowBlur;

        /// <summary>
        /// Color of the shadow. Default fully-transparent black.
        /// </summary>
        public string ShadowColor;

        /// <summary>
        /// Horizontal distance the shadow will be offset. Default 0.
        /// </summary>
        public float ShadowOffsetX;

        /// <summary>
        /// Vertical distance the shadow will be offset. Default 0.
        /// </summary>
        public float ShadowOffsetY;

        #endregion Shadows

        // The following methods can be used to manipulate paths of objects.

        #region Paths

        /// <summary>
        /// Starts a new path by emptying the list of sub-paths. Call this method when you want
        /// to create a new path.
        /// </summary>
        public extern virtual void BeginPath();

        // All remaining methods here are inherited from SVGOperations, which are common to the Path2D interface.

        #endregion Paths

        #region Drawing Paths

        /// <summary>
        /// Fills the subpaths with the current fill style.
        /// </summary>
        public extern virtual void Fill();

        /// <summary>
        /// Fills the subpaths with the specified fill rule.
        /// </summary>
        /// <param name="fillRule">
        /// The algorithm by which to determine if a point is inside a path or outside a path.
        /// </param>
        public extern virtual void Fill(CanvasTypes.CanvasFillRule fillRule);

        /// <summary>
        /// Fills the specified path with the specified fill rule.
        /// </summary>
        /// <param name="path">A Path2D path to fill.</param>
        /// <param name="fillRule">
        /// The algorithm by which to determine if a point is inside a path or outside a path.
        /// </param>
        public extern virtual void Fill(Path2D path, CanvasTypes.CanvasFillRule fillRule);
        /// <summary>
        /// Strokes the subpaths with the current stroke style.
        /// </summary>
        public extern virtual void Stroke();

        /// <summary>
        /// Strokes the subpaths with the current stroke style.
        /// </summary>
        /// <param name="path">A Path2D path to stroke.</param>
        public extern virtual void Stroke(Path2D path);

        /// <summary>
        /// If a given element is focused, this method draws a focus ring around the current path.
        /// </summary>
        /// <param name="element">The element to check whether it is focused or not.</param>
        public extern virtual void DrawFocusIfNeeded(HTMLElement element);

        /// <summary>
        /// If a given element is focused, this method draws a focus ring around the current path.
        /// </summary>
        /// <param name="path">A Path2D path to use.</param>
        /// <param name="element">The element to check whether it is focused or not.</param>
        public extern virtual void DrawFocusIfNeeded(Path2D path, HTMLElement element);

        /// <summary>
        /// Scrolls the current path or a given path into the view.
        /// </summary>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public extern virtual void ScrollPathIntoView();

        /// <summary>
        /// Scrolls the current path or a given path into the view.
        /// </summary>
        /// <param name="path">A Path2D path to use.</param>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public extern virtual void ScrollPathIntoView(Path2D path);

        /// <summary>
        /// Creates a clipping path from the current sub-paths. Everything drawn after clip() is
        /// called appears inside the clipping path only. For an example, see Clipping paths in
        /// the Canvas tutorial.
        /// </summary>
        public extern virtual void Clip();

        /// <summary>
        /// Creates a clipping path from the current sub-paths. Everything drawn after clip() is
        /// called appears inside the clipping path only. For an example, see Clipping paths in
        /// the Canvas tutorial.
        /// </summary>
        /// <param name="fillRule">
        /// The algorithm by which to determine if a point is inside a path or outside a path.
        /// </param>
        public extern virtual void Clip(CanvasTypes.CanvasFillRule fillRule);

        /// <summary>
        /// Creates a clipping path from the current sub-paths. Everything drawn after clip() is
        /// called appears inside the clipping path only. For an example, see Clipping paths in
        /// the Canvas tutorial.
        /// </summary>
        /// <param name="path">A Path2D path to clip.</param>
        /// <param name="fillRule">
        /// The algorithm by which to determine if a point is inside a path or outside a path.
        /// </param>
        public extern virtual void Clip(Path2D path, CanvasTypes.CanvasFillRule fillRule);

        /// <summary>
        /// Reports whether or not the specified point is contained in the current path.
        /// </summary>
        /// <param name="x">The X coordinate of the point to check.</param>
        /// <param name="y">The Y coordinate of the point to check.</param>
        /// <returns>
        /// A Boolean, which is true if the specified point is contained in the current or specfied path,
        /// otherwise false.
        /// </returns>
        public virtual extern bool IsPointInPath(Union<uint, int, double> x, Union<uint, int, double> y);

        /// <summary>
        /// Reports whether or not the specified point is contained in the current path.
        /// </summary>
        /// <param name="x">The X coordinate of the point to check.</param>
        /// <param name="y">The Y coordinate of the point to check.</param>
        /// <param name="fillRule">
        /// The algorithm by which to determine if a point is inside a path or outside a path.
        /// </param>
        /// <returns>
        /// A Boolean, which is true if the specified point is contained in the current or specfied path,
        /// otherwise false.
        /// </returns>
        public virtual extern bool IsPointInPath(Union<uint, int, double> x, Union<uint, int, double> y,
                                          CanvasTypes.CanvasFillRule? fillRule);

        /// <summary>
        /// Reports whether or not the specified point is contained in the current path.
        /// </summary>
        /// <param name="path">A Path2D path to use.</param>
        /// <param name="x">The X coordinate of the point to check.</param>
        /// <param name="y">The Y coordinate of the point to check.</param>
        /// <returns>
        /// A Boolean, which is true if the specified point is contained in the current or specfied path,
        /// otherwise false.
        /// </returns>
        public virtual extern bool IsPointInPath(Path2D path, Union<uint, int, double> x, Union<uint, int, double> y);

        /// <summary>
        /// Reports whether or not the specified point is contained in the current path.
        /// </summary>
        /// <param name="path">A Path2D path to use.</param>
        /// <param name="x">The X coordinate of the point to check.</param>
        /// <param name="y">The Y coordinate of the point to check.</param>
        /// <param name="fillRule">
        /// The algorithm by which to determine if a point is inside a path or outside a path.
        /// </param>
        /// <returns>
        /// A Boolean, which is true if the specified point is contained in the current or specfied path,
        /// otherwise false.
        /// </returns>
        public virtual extern bool IsPointInPath(Path2D path, Union<uint, int, double> x, Union<uint, int, double> y,
                                          CanvasTypes.CanvasFillRule? fillRule);

        /// <summary>
        /// Reports whether or not the specified point is inside the area contained by the stroking of a path.
        /// </summary>
        /// <param name="x">The X coordinate of the point to check.</param>
        /// <param name="y">The Y coordinate of the point to check.</param>
        /// <returns>
        /// A Boolean, which is true if the point is inside the area contained by the stroking of a path,
        /// otherwise false.
        /// </returns>
        public virtual extern bool IsPointInStroke(Union<uint, int, double> x, Union<uint, int, double> y);

        /// <summary>
        /// Reports whether or not the specified point is inside the area contained by the stroking of a path.
        /// </summary>
        /// <param name="path">A Path2D path to use.</param>
        /// <param name="x">The X coordinate of the point to check.</param>
        /// <param name="y">The Y coordinate of the point to check.</param>
        /// <returns>
        /// A Boolean, which is true if the point is inside the area contained by the stroking of a path,
        /// otherwise false.
        /// </returns>
        public virtual extern bool IsPointInStroke(Path2D path, Union<uint, int, double> x, Union<uint, int, double> y);

        #endregion Drawing Paths

        // Objects in the CanvasRenderingContext2D rendering context have a current transformation matrix
        // and methods to manipulate it. The transformation matrix is applied when creating the current
        // default path, painting text, shapes and Path2D objects. The methods listed below remain for
        // historical and compatibility reasons as SVGMatrix objects are used in most parts of the API
        // nowadays and will be used in the future instead.

        #region Transformations

        /// <summary>
        /// Current transformation matrix (SVGMatrix object).
        /// </summary>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public SVGMatrix CurrentTransform;

        /// <summary>
        /// Adds a rotation to the transformation matrix. The angle argument represents a clockwise rotation
        /// angle and is expressed in radians.
        /// </summary>
        /// <param name="angle">
        /// The angle to rotate clockwise in radians. You can use degree * Math.PI / 180 if you want to
        /// calculate from a degree value.
        /// </param>
        public extern virtual void Rotate(double angle);

        /// <summary>
        /// Adds a scaling transformation to the canvas units by x horizontally and by y vertically.
        /// </summary>
        /// <param name="x">Scaling factor in the horizontal direction.</param>
        /// <param name="y">Scaling factor in the vertical direction.</param>
        public extern virtual void Scale(Union<int, double> x, Union<int, double> y);

        /// <summary>
        /// Adds a translation transformation by moving the canvas and its origin x horizontally and
        /// y vertically on the grid.
        /// </summary>
        /// <param name="x">Distance to move in the horizontal direction.</param>
        /// <param name="y">Distance to move in the vertical direction.</param>
        public extern virtual void Translate(Union<int, double> x, Union<int, double> y);

        /*
         * Transformation matrix is described by:
         * [ a c e ]
         * [ b d f ]
         * [ 0 0 1 ]
         */

        /// <summary>
        /// Multiplies the current transformation matrix with the matrix described by its arguments.
        /// Matrix is described by a 3x3 [ a c e // b d f // 0 0 1 ] (// means a matrix line break).
        /// </summary>
        /// <param name="a">m11: Horizontal scaling.</param>
        /// <param name="b">m12: Horizontal skewing.</param>
        /// <param name="c">m21: Vertical skewing.</param>
        /// <param name="d">m22: Vertical scaling.</param>
        /// <param name="e">dx: Horizontal moving.</param>
        /// <param name="f">dy: Vertical moving.</param>
        public extern virtual void Transform(Union<int, double> a, Union<int, double> b, Union<int, double> c,
                                      Union<int, double> d, Union<int, double> e, Union<int, double> f);

        /// <summary>
        /// Resets the current transform to the identity matrix, and then invokes the transform()
        /// method with the same arguments.
        /// Matrix is described by a 3x3 [ a c e // b d f // 0 0 1 ] (// means a matrix line break).
        /// </summary>
        /// <param name="a">m11: Horizontal scaling.</param>
        /// <param name="b">m12: Horizontal skewing.</param>
        /// <param name="c">m21: Vertical skewing.</param>
        /// <param name="d">m22: Vertical scaling.</param>
        /// <param name="e">dx: Horizontal moving.</param>
        /// <param name="f">dy: Vertical moving.</param>
        public extern virtual void SetTransform(Union<int, double> a, Union<int, double> b, Union<int, double> c,
                                         Union<int, double> d, Union<int, double> e, Union<int, double> f);

        /// <summary>
        /// Resets the current transform by the identity matrix.
        /// </summary>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public extern virtual void ResetTransform();

        #endregion Transformations

        #region Composing

        /// <summary>
        /// Alpha value that is applied to shapes and images before they are composited onto the canvas.
        /// Default 1.0 (opaque).
        /// </summary>
        public float GlobalAlpha;

        /// <summary>
        /// With globalAlpha applied this sets how shapes and images are drawn onto the existing bitmap.
        /// </summary>
        public CanvasTypes.CanvasCompositeOperationType GlobalCompositeOperation;

        #endregion Composing

        #region Drawing Images

        /// <summary>
        /// Draws the specified image. This method is available in multiple formats, providing a great
        /// deal of flexibility in its use.
        /// </summary>
        /// <param name="image">
        /// An element to draw into the context. The specification permits any canvas image source.
        /// </param>
        /// <param name="dx">
        /// The X coordinate in the destination canvas at which to place the top-left corner of the source image.
        /// </param>
        /// <param name="dy">
        /// The Y coordinate in the destination canvas at which to place the top-left corner of the source image.
        /// </param>
        public extern virtual void DrawImage(Union<HTMLImageElement, HTMLVideoElement, HTMLCanvasElement, CanvasRenderingContext2D> image,
                                      Union<int, uint, float, double> dx, Union<int, uint, float, double> dy);

        /// <summary>
        /// Draws the specified image. This method is available in multiple formats, providing a great
        /// deal of flexibility in its use.
        /// </summary>
        /// <param name="image">
        /// An element to draw into the context. The specification permits any canvas image source.
        /// </param>
        /// <param name="dx">
        /// The X coordinate in the destination canvas at which to place the top-left corner of the source image.
        /// </param>
        /// <param name="dy">
        /// The Y coordinate in the destination canvas at which to place the top-left corner of the source image.
        /// </param>
        /// <param name="dWidth">
        /// The width to draw the image in the destination canvas. This allows scaling of the drawn image.
        /// If null, the image is not scaled in height when drawn.
        /// </param>
        /// <param name="dHeight">
        /// The height to draw the image in the destination canvas. This allows scaling of the drawn image.
        /// If null, the image is not scaled in height when drawn.
        /// </param>
        public extern virtual void DrawImage(Union<HTMLImageElement, HTMLVideoElement, HTMLCanvasElement, CanvasRenderingContext2D> image,
                                      Union<int, uint, float, double> dx, Union<int, uint, float, double> dy,
                                      Union<int?, uint?, float?, double?> dWidth, Union<int?, uint?, float?, double?> dHeight);

        /// <summary>
        /// Draws the specified image. This method is available in multiple formats, providing a great
        /// deal of flexibility in its use.
        /// </summary>
        /// <param name="image">
        /// An element to draw into the context. The specification permits any canvas image source.
        /// </param>
        /// <param name="sx">
        /// The X coordinate of the top left corner of the sub-rectangle of the source image to draw into
        /// the destination context.
        /// </param>
        /// <param name="sy">
        /// The Y coordinate of the top left corner of the sub-rectangle of the source image to draw into
        /// the destination context.
        /// </param>
        /// <param name="sWidth">
        /// The width of the sub-rectangle of the source image to draw into the destination context.
        /// </param>
        /// <param name="sHeight">
        /// The height of the sub-rectangle of the source image to draw into the destination context.
        /// </param>
        /// <param name="dx">
        /// The X coordinate in the destination canvas at which to place the top-left corner of the source image.
        /// </param>
        /// <param name="dy">
        /// The Y coordinate in the destination canvas at which to place the top-left corner of the source image.
        /// </param>
        /// <param name="dWidth">
        /// The width to draw the image in the destination canvas. This allows scaling of the drawn image.
        /// If not specified or null, the image is not scaled in height when drawn.
        /// </param>
        /// <param name="dHeight">
        /// The height to draw the image in the destination canvas. This allows scaling of the drawn image.
        /// If not specified or null, the image is not scaled in height when drawn.
        /// </param>
        public extern virtual void DrawImage(Union<HTMLImageElement, HTMLVideoElement, HTMLCanvasElement, CanvasRenderingContext2D> image,
                                      Union<int, uint, float, double> sx, Union<int, uint, float, double> sy,
                                      Union<int?, uint?, float?, double?> sWidth,
                                      Union<int?, uint?, float?, double?> sHeight,
                                      Union<int, uint, float, double> dx, Union<int, uint, float, double> dy,
                                      Union<int?, uint?, float?, double?> dWidth,
                                      Union<int?, uint?, float?, double?> dHeight);

        #endregion Drawing Images

        // See also the ImageData object.

        #region Pixel Manipulation

        /// <summary>
        /// Creates a new, blank ImageData object with the specified dimensions. All of the pixels in the
        /// new object are transparent black.
        /// </summary>
        /// <param name="width">The width to give the new ImageData object.</param>
        /// <param name="height">The height to give the new ImageData object.</param>
        /// <returns>
        /// A new ImageData object with the specified width and height. The new object is filled with
        /// transparent black pixels.
        /// </returns>
        public virtual extern ImageData CreateImageData(Union<uint, int> width, Union<uint, int> height);

        /// <summary>
        /// Creates a new, blank ImageData object with the specified dimensions. All of the pixels in the
        /// new object are transparent black.
        /// </summary>
        /// <param name="imagedata">
        /// An existing ImageData object from which to copy the width and height. The image itself is not copied.
        /// </param>
        /// <returns>
        /// A new ImageData object with the specified width and height. The new object is filled with
        /// transparent black pixels.
        /// </returns>
        public virtual extern ImageData CreateImageData(ImageData imagedata);

        /// <summary>
        /// Returns an ImageData object representing the underlying pixel data for the area of the canvas
        /// denoted by the rectangle which starts at (sx, sy) and has an sw width and sh height.
        /// </summary>
        /// <param name="sx">
        /// The x axis of the coordinate for the rectangle startpoint from which the ImageData will be extracted.
        /// </param>
        /// <param name="sy">
        /// The y axis of the coordinate for the rectangle endpoint from which the ImageData will be extracted.
        /// </param>
        /// <param name="sw">
        /// The width of the rectangle from which the ImageData will be extracted.
        /// </param>
        /// <param name="sh">
        /// The height of the rectangle from which the ImageData will be extracted.
        /// </param>
        /// <returns></returns>
        public virtual extern ImageData GetImageData(Union<uint, int> sx, Union<uint, int> sy, Union<uint, int> sw, Union<uint, int> sh);

        /// <summary>
        /// Paints data from the given ImageData object onto the bitmap. If a dirty rectangle is provided,
        /// only the pixels from that rectangle are painted.
        /// </summary>
        /// <param name="imagedata">An imageData object containing the array of pixel values.</param>
        /// <param name="dx">
        /// Position offset in the target canvas context of the rectangle to be painted, relative to the
        /// rectangle in the origin image data.
        /// </param>
        /// <param name="dy">
        /// Position offset in the target canvas context of the rectangle to be painted, relative to the
        /// rectangle in the origin image data.
        /// </param>
        public extern virtual void PutImageData(ImageData imagedata, int dx, int dy);

        /// <summary>
        /// Paints data from the given ImageData object onto the bitmap. If a dirty rectangle is provided,
        /// only the pixels from that rectangle are painted.
        /// </summary>
        /// <param name="imagedata">An imageData object containing the array of pixel values.</param>
        /// <param name="dx">
        /// Position offset in the target canvas context of the rectangle to be painted, relative to the
        /// rectangle in the origin image data.
        /// </param>
        /// <param name="dy">
        /// Position offset in the target canvas context of the rectangle to be painted, relative to the
        /// rectangle in the origin image data.
        /// </param>
        /// <param name="dirtyX">
        /// Position of the top left point of the rectangle to be painted, in the origin image data.
        /// Defaults to the top left of the whole image data.
        /// </param>
        /// <param name="dirtyY">
        /// Position of the top left point of the rectangle to be painted, in the origin image data.
        /// Defaults to the top left of the whole image data.
        /// </param>
        /// <param name="dirtyWidth">
        /// Width of the rectangle to be painted, in the origin image data. Defaults to the width of the image data.
        /// </param>
        /// <param name="dirtyHeight">
        /// Height of the rectangle to be painted, in the origin image data. Defaults to the height of the image data.
        /// </param>
        public extern virtual void PutImageData(ImageData imagedata, int dx, int dy,
                                         Union<uint?, int?> dirtyX, Union<uint?, int?> dirtyY,
                                         Union<uint?, int?> dirtyWidth, Union<uint?, int?> dirtyHeight);

        #endregion Pixel Manipulation

        #region Image Smoothing

        /// <summary>
        /// Image smoothing mode; if disabled, images will not be smoothed if scaled.
        /// </summary>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public bool ImageSmoothingEnabled;

        #endregion Image Smoothing

        // The CanvasRenderingContext2D rendering context contains a variety of drawing style states
        // (attributes for line styles, fill styles, shadow styles, text styles). The following methods
        // help you to work with that state.

        #region Canvas State

        /// <summary>
        /// Saves the current drawing style state using a stack so you can revert any change you make to it
        /// using Restore().
        /// </summary>
        public extern virtual void Save();

        /// <summary>
        /// Restores the drawing style state to the last element on the 'state stack' saved by save().
        /// </summary>
        public extern virtual void Restore();

        /// <summary>
        /// A read-only back-reference to the HTMLCanvasElement.
        /// Might be null if it is not associated with a &lt;canvas> element.
        /// </summary>
        public readonly HTMLCanvasElement Canvas;

        #endregion Canvas State

        #region Hit Regions

        /// <summary>
        /// Adds a hit region to the canvas.
        /// </summary>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public extern virtual void AddHitRegion();

        /// <summary>
        /// Adds a hit region to the canvas.
        /// </summary>
        /// <param name="options">
        /// The options argument is optional. When provided, it is an CanvasHitRegionOptions
        /// object with one or more of its properties set.
        /// </param>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public extern virtual void AddHitRegion(CanvasHitRegionOptions options);

        /// <summary>
        /// Removes the hit region with the specified id from the canvas.
        /// </summary>
        /// <param name="id">A DOMString representing the id of the region that is to be removed.</param>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public extern virtual void RemoveHitRegion(string id);

        /// <summary>
        /// Removes all hit regions from the canvas.
        /// </summary>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public extern virtual void ClearHitRegions();

        #endregion Hit Regions

        #region Non-standard APIs

        // Non-standard APIs are not implemented on Bridge.NET.

        /// <summary>
        /// Most of these APIs are deprecated and will be removed in the future.
        /// </summary>

        #endregion Non-standard APIs

        // FIXME: Find a better place to define this class on. It is not an interface neither an element, but an
        //        auxiliary object, used only on CanvasRenderingContext2D.
        [External]
        [Name("Object")]
        public class CanvasHitRegionOptions
        {
            /// <summary>
            /// A Path2D object describing the area of the hit region. If not provided, the current path is used.
            /// </summary>
            public Path2D Path
            {
                get;
                set;
            }

            /// <summary>
            /// The fill rule to use (defaults to "nonzero").
            /// </summary>
            public CanvasTypes.CanvasFillRule fillRule
            {
                get;
                set;
            }

            /// <summary>
            /// The ID for this hit region to reference it for later use in events, for example.
            /// </summary>
            public string Id
            {
                get;
                set;
            }

            /// <summary>
            /// The ID of the parent region for cursor fallback and navigation by accessibility tools.
            /// </summary>
            public string ParentID
            {
                get;
                set;
            }

            /// <summary>
            /// The cursor to use when the mouse is over this region (defaults to "inherit").
            /// Inherits the cursor of the parent hit region, if any, or the canvas element's cursor.
            /// </summary>
            public Cursor Cursor
            {
                get;
                set;
            } // FIXME: CSS/Cursor.cs has no 'inherit' option!

            /// <summary>
            /// An element (descendant of the canvas) to which events are to be routed. Defaults to null.
            /// </summary>
            public HTMLElement Control
            {
                get;
                set;
            }

            /// <summary>
            /// A text label for accessibility tools to use as a description of the region,
            /// if there is no control. Defaults to null.
            /// </summary>
            public string Label
            {
                get;
                set;
            }

            /// <summary>
            /// An ARIA role for accessibility tools to determine how to represent this region,
            /// if there is no control. Defaults to null.
            /// </summary>
            public string role
            {
                get;
                set;
            }
        }
    }
}