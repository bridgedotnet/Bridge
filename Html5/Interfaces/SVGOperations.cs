/*
 * This interface was written so that both Path2D and CanvasRenderingContext2D could inherit their methods
 * (which are the exact same).
 *
 * The definitions here can be found both on:
 * https://developer.mozilla.org/en-US/docs/Web/API/Path2D
 * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
 */

namespace Bridge.Html5
{
    /// <summary>
    /// This interface was written so that both Path2D and CanvasRenderingContext2D could inherit their
    /// methods (which are the exact same).
    /// </summary>
    [External]
    [Name("Object")]
    public abstract class SVGOperations
    {
        /// <summary>
        /// Causes the point of the pen to move back to the start of the current sub-path. It tries
        /// to draw a straight line from the current point to the start. If the shape has already been
        /// closed or has only one point, this function does nothing.
        /// </summary>
        public extern virtual void ClosePath();

        /// <summary>
        /// Moves the starting point of a new sub-path to the (x, y) coordinates.
        /// </summary>
        /// <param name="x">The x axis of the point</param>
        /// <param name="y">The y axis of the point</param>
        public extern virtual void MoveTo(uint x, uint y);

        /// <summary>
        /// Moves the starting point of a new sub-path to the (x, y) coordinates.
        /// </summary>
        /// <param name="x">The x axis of the point</param>
        /// <param name="y">The y axis of the point</param>
        public extern virtual void MoveTo(int x, int y);

        /// <summary>
        /// Moves the starting point of a new sub-path to the (x, y) coordinates.
        /// </summary>
        /// <param name="x">The x axis of the point</param>
        /// <param name="y">The y axis of the point</param>
        public extern virtual void MoveTo(double x, double y);

        /// <summary>
        /// Connects the last point in the subpath to the x, y coordinates with a straight line.
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the end of the line.</param>
        /// <param name="y">The y axis of the coordinate for the end of the line.</param>
        public extern virtual void LineTo(uint x, uint y);

        /// <summary>
        /// Connects the last point in the subpath to the x, y coordinates with a straight line.
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the end of the line.</param>
        /// <param name="y">The y axis of the coordinate for the end of the line.</param>
        public extern virtual void LineTo(int x, int y);

        /// <summary>
        /// Connects the last point in the subpath to the x, y coordinates with a straight line.
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the end of the line.</param>
        /// <param name="y">The y axis of the coordinate for the end of the line.</param>
        public extern virtual void LineTo(double x, double y);

        /// <summary>
        /// Adds a cubic Bézier curve to the path. It requires three points. The first two points are control points and the third one is the end point. The starting point is the last point in the current path, which can be changed using moveTo() before creating the Bézier curve.
        /// </summary>
        /// <param name="cp1x">The x axis of the coordinate for the first control point.</param>
        /// <param name="cp1y">The y axis of the coordinate for first control point.</param>
        /// <param name="cp2x">The x axis of the coordinate for the second control point.</param>
        /// <param name="cp2y">The y axis of the coordinate for the second control point.</param>
        /// <param name="x">The x axis of the coordinate for the end point.</param>
        /// <param name="y">The y axis of the coordinate for the end point.</param>
        public extern virtual void BezierCurveTo(uint cp1x, uint cp1y, uint cp2x, uint cp2y, uint x, uint y);

        /// <summary>
        /// Adds a cubic Bézier curve to the path. It requires three points. The first two points are control points and the third one is the end point. The starting point is the last point in the current path, which can be changed using moveTo() before creating the Bézier curve.
        /// </summary>
        /// <param name="cp1x">The x axis of the coordinate for the first control point.</param>
        /// <param name="cp1y">The y axis of the coordinate for first control point.</param>
        /// <param name="cp2x">The x axis of the coordinate for the second control point.</param>
        /// <param name="cp2y">The y axis of the coordinate for the second control point.</param>
        /// <param name="x">The x axis of the coordinate for the end point.</param>
        /// <param name="y">The y axis of the coordinate for the end point.</param>
        public extern virtual void BezierCurveTo(int cp1x, int cp1y, int cp2x, int cp2y, int x, int y);

        /// <summary>
        /// Adds a cubic Bézier curve to the path. It requires three points. The first two points are control points and the third one is the end point. The starting point is the last point in the current path, which can be changed using moveTo() before creating the Bézier curve.
        /// </summary>
        /// <param name="cp1x">The x axis of the coordinate for the first control point.</param>
        /// <param name="cp1y">The y axis of the coordinate for first control point.</param>
        /// <param name="cp2x">The x axis of the coordinate for the second control point.</param>
        /// <param name="cp2y">The y axis of the coordinate for the second control point.</param>
        /// <param name="x">The x axis of the coordinate for the end point.</param>
        /// <param name="y">The y axis of the coordinate for the end point.</param>
        public extern virtual void BezierCurveTo(double cp1x, double cp1y, double cp2x, double cp2y, double x, double y);

        /// <summary>
        /// Adds a quadratic Bézier curve to the current path.
        /// </summary>
        /// <param name="cpx">The x axis of the coordinate for the control point.</param>
        /// <param name="cpy">The y axis of the coordinate for the control point.</param>
        /// <param name="x">The x axis of the coordinate for the end point.</param>
        /// <param name="y">The y axis of the coordinate for the end point.</param>
        public extern virtual void QuadraticCurveTo(uint cpx, uint cpy, uint x, uint y);

        /// <summary>
        /// Adds a quadratic Bézier curve to the current path.
        /// </summary>
        /// <param name="cpx">The x axis of the coordinate for the control point.</param>
        /// <param name="cpy">The y axis of the coordinate for the control point.</param>
        /// <param name="x">The x axis of the coordinate for the end point.</param>
        /// <param name="y">The y axis of the coordinate for the end point.</param>
        public extern virtual void QuadraticCurveTo(int cpx, int cpy, int x, int y);

        /// <summary>
        /// Adds a quadratic Bézier curve to the current path.
        /// </summary>
        /// <param name="cpx">The x axis of the coordinate for the control point.</param>
        /// <param name="cpy">The y axis of the coordinate for the control point.</param>
        /// <param name="x">The x axis of the coordinate for the end point.</param>
        /// <param name="y">The y axis of the coordinate for the end point.</param>
        public extern virtual void QuadraticCurveTo(double cpx, double cpy, double x, double y);

        /// <summary>
        /// Adds an arc to the path which is centered at (x, y) position with radius r starting at
        /// startAngle and ending at endAngle going in the given direction by anticlockwise
        /// (defaulting to clockwise).
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the arc's center.</param>
        /// <param name="y">The y axis of the coordinate for the arc's center.</param>
        /// <param name="radius">The arc's radius.</param>
        /// <param name="startAngle">
        /// The starting point, measured from the x axis, from which it will be drawn, expressed in radians.
        /// </param>
        /// <param name="endAngle">The end arc's angle to which it will be drawn, expressed in radians.</param>
        /// <param name="anticlockwise">
        /// An optional Boolean which, if true, draws the arc anticlockwise (counter-clockwise), otherwise
        /// in a clockwise direction.
        /// </param>
        public extern virtual void Arc(uint x, uint y, uint radius, double startAngle, double endAngle, bool anticlockwise = false);

        /// <summary>
        /// Adds an arc to the path which is centered at (x, y) position with radius r starting at
        /// startAngle and ending at endAngle going in the given direction by anticlockwise
        /// (defaulting to clockwise).
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the arc's center.</param>
        /// <param name="y">The y axis of the coordinate for the arc's center.</param>
        /// <param name="radius">The arc's radius.</param>
        /// <param name="startAngle">
        /// The starting point, measured from the x axis, from which it will be drawn, expressed in radians.
        /// </param>
        /// <param name="endAngle">The end arc's angle to which it will be drawn, expressed in radians.</param>
        /// <param name="anticlockwise">
        /// An optional Boolean which, if true, draws the arc anticlockwise (counter-clockwise), otherwise
        /// in a clockwise direction.
        /// </param>
        public extern virtual void Arc(int x, int y, int radius, double startAngle, double endAngle, bool anticlockwise = false);

        /// <summary>
        /// Adds an arc to the path which is centered at (x, y) position with radius r starting at
        /// startAngle and ending at endAngle going in the given direction by anticlockwise
        /// (defaulting to clockwise).
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the arc's center.</param>
        /// <param name="y">The y axis of the coordinate for the arc's center.</param>
        /// <param name="radius">The arc's radius.</param>
        /// <param name="startAngle">
        /// The starting point, measured from the x axis, from which it will be drawn, expressed in radians.
        /// </param>
        /// <param name="endAngle">The end arc's angle to which it will be drawn, expressed in radians.</param>
        /// <param name="anticlockwise">
        /// An optional Boolean which, if true, draws the arc anticlockwise (counter-clockwise), otherwise
        /// in a clockwise direction.
        /// </param>
        public extern virtual void Arc(double x, double y, double radius, double startAngle, double endAngle, bool anticlockwise = false);

        /// <summary>
        /// Adds an arc to the path with the given control points and radius, connected to the previous point
        /// by a straight line.
        /// </summary>
        /// <param name="x1">The x axis of the coordinate for the first control point.</param>
        /// <param name="y1">The y axis of the coordinate for the first control point.</param>
        /// <param name="x2">The x axis of the coordinate for the second control point.</param>
        /// <param name="y2">The y axis of the coordinate for the second control point.</param>
        /// <param name="radius">The arc's radius.</param>
        public extern virtual void ArcTo(uint x1, uint y1, uint x2, uint y2, double radius);

        /// <summary>
        /// Adds an arc to the path with the given control points and radius, connected to the previous point
        /// by a straight line.
        /// </summary>
        /// <param name="x1">The x axis of the coordinate for the first control point.</param>
        /// <param name="y1">The y axis of the coordinate for the first control point.</param>
        /// <param name="x2">The x axis of the coordinate for the second control point.</param>
        /// <param name="y2">The y axis of the coordinate for the second control point.</param>
        /// <param name="radius">The arc's radius.</param>
        public extern virtual void ArcTo(int x1, int y1, int x2, int y2, double radius);

        /// <summary>
        /// Adds an arc to the path with the given control points and radius, connected to the previous point
        /// by a straight line.
        /// </summary>
        /// <param name="x1">The x axis of the coordinate for the first control point.</param>
        /// <param name="y1">The y axis of the coordinate for the first control point.</param>
        /// <param name="x2">The x axis of the coordinate for the second control point.</param>
        /// <param name="y2">The y axis of the coordinate for the second control point.</param>
        /// <param name="radius">The arc's radius.</param>
        public extern virtual void ArcTo(double x1, double y1, double x2, double y2, double radius);

        /// <summary>
        /// Adds an ellipse to the path which is centered at (x, y) position with the radii radiusX and
        /// radiusY starting at startAngle and ending at endAngle going in the given direction by
        /// anticlockwise (defaulting to clockwise).
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the ellipse's center.</param>
        /// <param name="y">The y axis of the coordinate for the ellipse's center.</param>
        /// <param name="radiusX">The ellipse's major-axis radius.</param>
        /// <param name="radiusY">The ellipse's minor-axis radius.</param>
        /// <param name="rotation">The rotation for this ellipse, expressed in degrees.</param>
        /// <param name="startAngle">
        /// The starting point, measured from the x axis, from which it will be drawn, expressed in radians.
        /// </param>
        /// <param name="endAngle">The end ellipse's angle to which it will be drawn, expressed in radians.</param>
        /// <param name="anticlockwise">
        /// An optional Boolean which, if true, draws the ellipse anticlockwise (counter-clockwise),
        /// otherwise in a clockwise direction.
        /// </param>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public extern virtual void Ellipse(uint x, uint y, uint radiusX, uint radiusY, double rotation, double startAngle, double endAngle, bool anticlockwise = false);

        /// <summary>
        /// Adds an ellipse to the path which is centered at (x, y) position with the radii radiusX and
        /// radiusY starting at startAngle and ending at endAngle going in the given direction by
        /// anticlockwise (defaulting to clockwise).
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the ellipse's center.</param>
        /// <param name="y">The y axis of the coordinate for the ellipse's center.</param>
        /// <param name="radiusX">The ellipse's major-axis radius.</param>
        /// <param name="radiusY">The ellipse's minor-axis radius.</param>
        /// <param name="rotation">The rotation for this ellipse, expressed in degrees.</param>
        /// <param name="startAngle">
        /// The starting point, measured from the x axis, from which it will be drawn, expressed in radians.
        /// </param>
        /// <param name="endAngle">The end ellipse's angle to which it will be drawn, expressed in radians.</param>
        /// <param name="anticlockwise">
        /// An optional Boolean which, if true, draws the ellipse anticlockwise (counter-clockwise),
        /// otherwise in a clockwise direction.
        /// </param>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public extern virtual void Ellipse(int x, int y, int radiusX, int radiusY, double rotation, double startAngle, double endAngle, bool anticlockwise = false);

        /// <summary>
        /// Adds an ellipse to the path which is centered at (x, y) position with the radii radiusX and
        /// radiusY starting at startAngle and ending at endAngle going in the given direction by
        /// anticlockwise (defaulting to clockwise).
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the ellipse's center.</param>
        /// <param name="y">The y axis of the coordinate for the ellipse's center.</param>
        /// <param name="radiusX">The ellipse's major-axis radius.</param>
        /// <param name="radiusY">The ellipse's minor-axis radius.</param>
        /// <param name="rotation">The rotation for this ellipse, expressed in degrees.</param>
        /// <param name="startAngle">
        /// The starting point, measured from the x axis, from which it will be drawn, expressed in radians.
        /// </param>
        /// <param name="endAngle">The end ellipse's angle to which it will be drawn, expressed in radians.</param>
        /// <param name="anticlockwise">
        /// An optional Boolean which, if true, draws the ellipse anticlockwise (counter-clockwise),
        /// otherwise in a clockwise direction.
        /// </param>
        /// <remarks>This is experimental API that should not be used in production code.</remarks>
        public extern virtual void Ellipse(double x, double y, double radiusX, double radiusY, double rotation, double startAngle, double endAngle, bool anticlockwise = false);

        /// <summary>
        /// Creates a path for a rectangle at position (x, y) with a size that is determined by width and height.
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the rectangle starting point.</param>
        /// <param name="y">The y axis of the coordinate for the rectangle starting point.</param>
        /// <param name="width">The rectangle's width.</param>
        /// <param name="height">The rectangle's height.</param>
        public extern virtual void Rect(uint x, uint y, uint width, uint height);

        /// <summary>
        /// Creates a path for a rectangle at position (x, y) with a size that is determined by width and height.
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the rectangle starting point.</param>
        /// <param name="y">The y axis of the coordinate for the rectangle starting point.</param>
        /// <param name="width">The rectangle's width.</param>
        /// <param name="height">The rectangle's height.</param>
        public extern virtual void Rect(int x, int y, int width, int height);

        /// <summary>
        /// Creates a path for a rectangle at position (x, y) with a size that is determined by width and height.
        /// </summary>
        /// <param name="x">The x axis of the coordinate for the rectangle starting point.</param>
        /// <param name="y">The y axis of the coordinate for the rectangle starting point.</param>
        /// <param name="width">The rectangle's width.</param>
        /// <param name="height">The rectangle's height.</param>
        public extern virtual void Rect(double x, double y, double width, double height);
    }
}