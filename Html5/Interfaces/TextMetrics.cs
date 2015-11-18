// The documentation for this class (on <summary> tags) was extracted from:
// https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics

namespace Bridge.Html5
{
    /// <summary>
    /// The TextMetrics interface represents the dimension of a text in the canvas, as created by the
    /// CanvasRenderingContext2D.measureText() method.
    /// </summary>
    [External]
    [Namespace(false)]
    public class TextMetrics
    {
        /// <summary>
        /// A double giving the calculated width of a segment of inline text in CSS pixels.
        /// It takes into account the current font of the context.
        /// </summary>
        public readonly double Width;

        /// <summary>
        /// A double giving the distance parallel to the baseline from the alignment point given by the
        /// CanvasRenderingContext2D.textAlign property to the left side of the bounding rectangle of the
        /// given text, in CSS pixels.
        /// </summary>
        public readonly double ActualBoundingBoxLeft;

        /// <summary>
        /// A double giving the distance parallel to the baseline from the alignment point given by the
        /// CanvasRenderingContext2D.textAlign property to the right side of the bounding rectangle of the
        /// given text, in CSS pixels.
        /// </summary>
        public readonly double ActualBoundingBoxRight;

        /// <summary>
        /// A double giving the distance from the horizontal line indicated by the
        /// CanvasRenderingContext2D.textBaseline attribute to the top of the highest bounding rectangle
        /// of all the fonts used to render the text, in CSS pixels.
        /// </summary>
        public readonly double FontBoundingBoxAscent;

        /// <summary>
        /// A double giving the distance from the horizontal line indicated by the
        /// CanvasRenderingContext2D.textBaseline attribute to the top of the bounding rectangle of all the
        /// fonts used to render the text, in CSS pixels.
        /// </summary>
        public readonly double FontBoundingBoxDescent;

        /// <summary>
        /// A double giving the distance from the horizontal line indicated by the
        /// CanvasRenderingContext2D.textBaseline attribute to the top of the bounding rectangle used to
        /// render the text, in CSS pixels.
        /// </summary>
        public readonly double ActualBoundingBoxAscent;

        /// <summary>
        /// A double giving the distance from the horizontal line indicated by the
        /// CanvasRenderingContext2D.textBaseline attribute to the bottom of the bounding rectangle used
        /// to render the text, in CSS pixels.
        /// </summary>
        public readonly double ActualBoundingBoxDescent;

        /// <summary>
        /// A double giving the distance from the horizontal line indicated by the
        /// CanvasRenderingContext2D.textBaseline property to the top of the em square in the line box,
        /// in CSS pixels.
        /// </summary>
        public readonly double EmHeightAscent;

        /// <summary>
        /// A double giving the distance from the horizontal line indicated by the
        /// CanvasRenderingContext2D.textBaseline property to the bottom of the em square in the line box,
        /// in CSS pixels.
        /// </summary>
        public readonly double EmHeightDescent;

        /// <summary>
        /// A double giving the distance from the horizontal line indicated by the
        /// CanvasRenderingContext2D.textBaseline property to the hanging baseline of the line box,
        /// in CSS pixels.
        /// </summary>
        public readonly double HangingBaseLine;

        /// <summary>
        /// A double giving the distance from the horizontal line indicated by the
        /// CanvasRenderingContext2D.textBaseline property to the alphabetic baseline of the line box,
        /// in CSS pixels.
        /// </summary>
        public readonly double AlphabeticBaseline;

        /// <summary>
        /// A double giving the distance from the horizontal line indicated by the
        /// CanvasRenderingContext2D.textBaseline property to the ideographic baseline of the line box,
        /// in CSS pixels.
        /// </summary>
        public readonly double IdeographicBaseline;
    }
}
