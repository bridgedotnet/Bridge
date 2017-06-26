// The documentation for this class (on <summary> tags) was extracted from:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient

namespace Bridge.Html5
{
    /// <summary>
    /// The CanvasGradient interface represents an opaque object describing a gradient.
    /// It is returned by the methods CanvasRenderingContext2D.createLinearGradient() or
    /// CanvasRenderingContext2D.createRadialGradient().
    /// </summary>
    [External]
    [Namespace(false)]
    public class CanvasGradient
    {
        /// <summary>
        /// Adds a new stop, defined by an offset and a color, to the gradient.
        /// If the offset is not between 0 and 1 an INDEX_SIZE_ERR is raised, if the color can't be parsed
        /// as a CSS &lt;color>, a SYNTAX_ERR is raised.
        /// </summary>
        public extern virtual void AddColorStop(double offset, string color);
    }
}