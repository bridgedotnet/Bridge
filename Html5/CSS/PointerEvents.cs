namespace Bridge.Html5
{
    /// <summary>
    /// The CSS property pointer-events allows authors to control under what circumstances (if any) a particular graphic element can become the target of mouse events. When this property is unspecified, the same characteristics of the visiblePainted value apply to SVG content.
    /// </summary>
    [External]
    [Enum(Emit.StringName)]
    [Name("String")]
    public enum PointerEvents
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// The element behaves as it would if the pointer-events property was not specified. In SVG content, this value and the value visiblePainted have the same effect.
        /// </summary>
        Auto,

        /// <summary>
        /// The element is never the target of mouse events; however, mouse events may target its descendant elements if those descendants have pointer-events set to some other value. In these circumstances, mouse events will trigger event listeners on this parent element as appropriate on their way to/from the descendant during the event capture/bubble phases.
        /// </summary>
        None,

        /// <summary>
        /// SVG only. The element can only be the target of a mouse event when the visibility property is set to visible and when the mouse cursor is over the interior (i.e., 'fill') of the element and the fill property is set to a value other than none, or when the mouse cursor is over the perimeter (i.e., 'stroke') of the element and the stroke property is set to a value other than none.
        /// </summary>
        VisiblePainted,

        /// <summary>
        /// SVG only. The element can only be the target of a mouse event when the visibility property is set to visible and when the mouse cursor is over the interior (i.e., fill) of the element. The value of the fill property does not effect event processing.
        /// </summary>
        VisibleFill,

        /// <summary>
        /// SVG only. The element can only be the target of a mouse event when the visibility property is set to visible and when the mouse cursor is over the perimeter (i.e., stroke) of the element. The value of the stroke property does not effect event processing.
        /// </summary>
        VisibleStroke,

        /// <summary>
        /// SVG only. The element can be the target of a mouse event when the visibility property is set to visible and the mouse cursor is over either the interior (i.e., fill) or the perimeter (i.e., stroke) of the element. The values of the fill and stroke do not effect event processing.
        /// </summary>
        Visible,

        /// <summary>
        /// SVG only. The element can only be the target of a mouse event when the mouse cursor is over the interior (i.e., 'fill') of the element and the fill property is set to a value other than none, or when the mouse cursor is over the perimeter (i.e., 'stroke') of the element and the stroke property is set to a value other than none. The value of the visibility property does not effect event processing.
        /// </summary>
        Painted,

        /// <summary>
        /// SVG only. The element can only be the target of a mouse event when the pointer is over the interior (i.e., fill) of the element. The values of the fill and visibility properties do not effect event processing.
        /// </summary>
        Fill,

        /// <summary>
        /// SVG only. The element can only be the target of a mouse event when the pointer is over the perimeter (i.e., stroke) of the element. The values of the stroke and visibility properties do not effect event processing.
        /// </summary>
        Stroke,

        /// <summary>
        /// SVG only. The element can only be the target of a mouse event when the pointer is over the interior (i.e., fill) or the perimeter (i.e., stroke) of the element. The values of the fill, stroke and visibility properties do not effect event processing.
        /// </summary>
        All
    }
}
