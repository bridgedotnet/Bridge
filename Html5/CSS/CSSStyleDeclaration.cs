using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5
{
    /// <summary>
    /// A CSSStyleDeclaration is an interface to the declaration block returned by the style property of a cssRule in a stylesheet, when the rule is a CSSStyleRule.
    /// </summary>
    [External]
    [Name("CSSStyleDeclaration")]
    public class CSSStyleDeclaration : IEnumerable<string>
    {
        protected internal CSSStyleDeclaration()
        {
        }

        /// <summary>
        /// The CSS align-content property aligns a flex container's lines within the flex container when there is extra space on the cross-axis. This property has no effect on single line flexible boxes.
        /// </summary>
        public Union<string, AlignContent> AlignContent;

        /// <summary>
        /// The CSS align-items property aligns flex items of the current flex line the same way as justify-content but in the perpendicular direction.
        /// </summary>
        public Union<string, AlignItems> AlignItems;

        /// <summary>
        /// The align-self CSS property aligns flex items of the current flex line overriding the align-items value. If any of the flex item's cross-axis margin is set to auto, then align-self is ignored.
        /// </summary>
        public Union<string, AlignItems> AlignSelf;

        /// <summary>
        /// The CSS all shorthand property resets all properties, but unicode-bidi and direction to their initial or inherited value.
        /// </summary>
        public Union<string, All> All;

        /// <summary>
        /// The animation CSS property is a shorthand property for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction and animation-fill-mode.
        /// </summary>
        public string Animation;

        /// <summary>
        /// The animation-delay CSS property specifies when the animation should start. This lets the animation sequence begin some time after it's applied to an element.
        /// </summary>
        public string AnimationDelay;

        /// <summary>
        /// The animation-direction CSS property indicates whether the animation should play in reverse on alternate cycles.
        /// </summary>
        public Union<string, AnimationDirection> AnimationDirection;

        /// <summary>
        /// The animation-duration CSS property specifies the length of time that an animation should take to complete one cycle.
        /// </summary>
        public string AnimationDuration;

        /// <summary>
        /// The animation-fill-mode CSS property specifies how a CSS animation should apply styles to its target before and after it is executing.
        /// </summary>
        public Union<string, AnimationFillMode> AnimationFillMode;

        /// <summary>
        /// The animation-iteration-count CSS property defines the number of times an animation cycle should be played before stopping.
        /// </summary>
        public string AnimationIterationCount;

        /// <summary>
        /// The animation-name CSS property specifies a list of animations that should be applied to the selected element. Each name indicates a @keyframes at-rule that defines the property values for the animation sequence.
        /// </summary>
        public string AnimationName;

        /// <summary>
        /// The animation-play-state CSS property determines whether an animation is running or paused. You can query this property's value to determine whether or not the animation is currently running; in addition, you can set its value to pause and resume playback of an animation.
        /// </summary>
        public Union<string, AnimationPlayState> AnimationPlayState;

        /// <summary>
        /// The CSS animation-timing-function property specifies how a CSS animation should progress over the duration of each cycle.
        /// </summary>
        public Union<string, TimingFunction> AnimationTimingFunction;

        /// <summary>
        /// The CSS backface-visibility property determines whether or not the back face of the element is visible when facing the user. The back face of an element always is a transparent background, letting, when visible, a mirror image of the front face be displayed.
        /// </summary>
        public Union<string, BackfaceVisibility> BackfaceVisibility;

        /// <summary>
        /// The background CSS property is a shorthand for setting the individual background values in a single place in the style sheet. background can be used to set the values for one or more of: background-clip, background-color, background-image, background-origin, background-position, background-repeat, background-size, and background-attachment.
        /// </summary>
        public string Background;

        /// <summary>
        /// If a background-image is specified, the background-attachment CSS property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block.
        /// </summary>
        public string BackgroundAttachment;

        /// <summary>
        /// The background-blend-mode CSS property describes how a background should blend with the element's background that is below it and the element's background color. Background elements should be blended while content appearance should be kept unchanged.
        /// </summary>
        public Union<string, BackgroundBlendMode> BackgroundBlendMode;

        /// <summary>
        /// The background-clip CSS property specifies whether an element's background, either the color or image, extends underneath its border.
        /// </summary>
        public Union<string, BackgroundClip> BackgroundClip;

        /// <summary>
        /// The background-color CSS property sets the background color of an element, either through a color value or the keyword transparent.
        /// </summary>
        public string BackgroundColor;

        /// <summary>
        /// The CSS background-image property sets one or several background images for an element. The images are drawn on successive stacking context layers, with the first specified being drawn as if it is the closest to the user. The borders of the element are then drawn on top of them, and the background-color is drawn beneath them.
        /// </summary>
        public string BackgroundImage;

        /// <summary>
        /// The background-origin CSS property determines the background positioning area, that is the position of the origin of an image specified using the background-image CSS property.
        /// </summary>
        public Union<string, BackgroundClip> BackgroundOrigin;

        /// <summary>
        /// The background-position CSS property sets the initial position, relative to the background position layer defined by background-origin for each defined background image.
        /// </summary>
        public string BackgroundPosition;

        /// <summary>
        /// The background-repeat CSS property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both, or not repeated at all. When the repetition of the image tiles doesn't let them exactly cover the background, the way adjustments are done can be controlled by the author: by default, the last image is clipped, but the different tiles can instead be re-sized, or space can be inserted between the tiles.
        /// </summary>
        public Union<string, BackgroundRepeat> BackgroundRepeat;

        /// <summary>
        /// The background-size CSS property specifies the size of the background images. The size of the image can be fully constrained or only partially in order to preserve its intrinsic ratio.
        /// </summary>
        public string BackgroundSize;

        /// <summary>
        /// The border CSS property is a shorthand property for setting the individual border property values in a single place in the style sheet. border can be used to set the values for one or more of: border-width, border-style, border-color.
        /// </summary>
        public string Border;

        /// <summary>
        /// The border-bottom CSS property is a shorthand that sets the values of border-bottom-color, border-bottom-style, and border-bottom-width. These properties describe the bottom border of elements.
        /// </summary>
        public string BorderBottom;

        /// <summary>
        /// The border-bottom-color CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties border-color or border-bottom are more convenient and preferable.
        /// </summary>
        public string BorderBottomColor;

        /// <summary>
        /// The border-bottom-left-radius CSS property sets the rounding of the bottom-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0 no rounding is done and the corner is square.
        /// </summary>
        public string BorderBottomLeftRadius;

        /// <summary>
        /// The border-bottom-right-radius CSS property sets the rounding of the bottom-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0 no rounding is done and the corner is square.
        /// </summary>
        public string BorderBottomRightRadius;

        /// <summary>
        /// The border-bottom-style CSS property sets the line style of the bottom border of a box.
        /// </summary>
        public Union<string, BorderStyle> BorderBottomStyle;

        /// <summary>
        /// The border-bottom-width CSS property sets the width of the bottom border of a box.
        /// </summary>
        public Union<string, BorderWidth> BorderBottomWidth;

        /// <summary>
        /// The border-collapse CSS property selects a table's border model. This has a big influence on the look and style of the table cells.
        /// </summary>
        public Union<string, BorderCollapse> BorderCollapse;

        /// <summary>
        /// The border-color CSS property is a shorthand for setting the color of the four sides of an element's border: border-top-color, border-right-color, border-bottom-color, border-left-color
        /// </summary>
        public string BorderColor;

        /// <summary>
        /// The border-image CSS property allows drawing an image on the borders of elements. This makes drawing complex looking widgets much simpler than it has been and removes the need for nine boxes in some cases.
        /// </summary>
        public string BorderImage;

        /// <summary>
        /// The border-image-outset property describes, by which amount the border image area extends beyond the border box.
        /// </summary>
        public string BorderImageOutset;

        /// <summary>
        /// The border-image-repeat CSS property defines how the middle part of a border image is handled so that it can match the size of the border. It has a one-value syntax which describes the behavior of all the sides, and a two-value syntax that sets a different value for the horizontal and vertical behavior.
        /// </summary>
        public Union<string, BorderImageRepeat> BorderImageRepeat;

        /// <summary>
        /// The border-image-slice CSS property divides the image specified by border-image-source in nine regions: the four corners, the four edges and the middle. It does this by specifying 4 inwards offsets.
        /// </summary>
        public string BorderImageSlice;

        /// <summary>
        /// The border-image-source CSS property defines the &lt;image&gt; to use instead of the style of the border. If this property is set to none, the style defined by border-style is used instead.
        /// </summary>
        public string BorderImageSource;

        /// <summary>
        /// The border-image-width CSS property defines the offset to use for dividing the border image in nine parts, the top-left corner, central top edge, top-right-corner, central right edge, bottom-right corner, central bottom edge, bottom-left corner, and central right edge. They represent inward distance from the top, right, bottom, and left edges.
        /// </summary>
        public string BorderImageWidth;

        /// <summary>
        /// The border-left CSS property is a shorthand that sets the values of border-left-color, border-left-style, and border-left-width. These properties describe the left border of elements.
        /// </summary>
        public string BorderLeft;

        /// <summary>
        /// The border-left-color CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties border-color or border-left are more convenient and preferable.
        /// </summary>
        public string BorderLeftColor;

        /// <summary>
        /// The border-left-style CSS property sets the line style of the left border of a box.
        /// </summary>
        public Union<string, BorderStyle> BorderLeftStyle;

        /// <summary>
        /// The border-left-width CSS property sets the width of the left border of a box.
        /// </summary>
        public Union<string, BorderWidth> BorderLeftWidth;

        /// <summary>
        /// The border-radius CSS property allows Web authors to define how rounded border corners are. The curve of each corner is defined using one or two radii, defining its shape: circle or ellipse.
        /// </summary>
        public string BorderRadius;

        /// <summary>
        /// The border-right CSS property is a shorthand that sets the values of border-right-color, border-right-style, and border-right-width. These properties describe the right border of elements.
        /// </summary>
        public string BorderRight;

        /// <summary>
        /// The border-right-color CSS property sets the color of the right border of an element. Note that in many cases the shorthand CSS properties  border-color or border-right are more convenient and preferable.
        /// </summary>
        public string BorderRightColor;

        /// <summary>
        /// The border-right-style CSS property sets the line style of the right border of a box.
        /// </summary>
        public Union<string, BorderStyle> BorderRightStyle;

        /// <summary>
        /// The border-right-width CSS property sets the width of the right border of a box.
        /// </summary>
        public Union<string, BorderWidth> BorderRightWidth;

        /// <summary>
        /// The border-spacing CSS property specifies the distance between the borders of adjacent cells (only for the separated borders model). This is equivalent to the cellspacing attribute in presentational HTML, but an optional second value can be used to set different horizontal and vertical spacing.
        /// </summary>
        public string BorderSpacing;

        /// <summary>
        /// The border-style CSS property is a shorthand property for setting the line style for all four sides of the elements border.
        /// </summary>
        public Union<string, BorderStyle> BorderStyle;

        /// <summary>
        /// The border-top CSS property is a shorthand that sets the values of border-top-color, border-top-style, and border-top-width. These properties describe the top border of elements.
        /// </summary>
        public string BorderTop;

        /// <summary>
        /// The border-top-color CSS property sets the color of the top border of an element. Note that in many cases the shorthand CSS properties border-color or border-top are more convenient and preferable.
        /// </summary>
        public string BorderTopColor;

        /// <summary>
        /// The border-top-left-radius CSS property sets the rounding of the top-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0 no rounding is done and the corner is square.
        /// </summary>
        public string BorderTopLeftRadius;

        /// <summary>
        /// The border-top-right-radius CSS property sets the rounding of the top-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is 0 no rounding is done and the corner is square.
        /// </summary>
        public string BorderTopRightRadius;

        /// <summary>
        /// The border-top-style CSS property sets the line style of the top border of a box.
        /// </summary>
        public Union<string, BorderStyle> BorderTopStyle;

        /// <summary>
        /// The border-top-width CSS property sets the width of the top border of a box.
        /// </summary>
        public Union<string, BorderWidth> BorderTopWidth;

        /// <summary>
        /// The border-width CSS property sets the width of the border of a box. Using the shorthand property border is often more convenient.
        /// </summary>
        public Union<string, BorderWidth> BorderWidth;

        /// <summary>
        /// The bottom CSS property participates in specifying the position of positioned elements.
        /// For absolutely positioned elements, that is those with position: absolute or position: fixed, it specifies the distance between the bottom margin edge of the element and the bottom edge of its containing block.
        /// For relatively positioned elements, that is those with position: relative, it specifies the distance the element is moved above its normal position.
        /// </summary>
        public string Bottom;

        /// <summary>
        /// Allows to specify what happens to an element when it is broken due to a page break or column break, or for inline elements, a line break.
        /// </summary>
        public Union<string, BoxDecorationBreak> BoxDecorationBreak;

        /// <summary>
        /// The box-shadow CSS property describes one or more shadow effects as a comma-separated list. It allows casting a drop shadow from the frame of almost any element.
        /// </summary>
        public string BoxShadow;

        /// <summary>
        /// The box-sizing CSS property is used to alter the default CSS box model used to calculate widths and heights of elements.
        /// </summary>
        public Union<string, BoxSizing> BoxSizing;

        /// <summary>
        /// The caption-side CSS property positions the content of a table's &lt;caption&gt; on the specified side.
        /// </summary>
        public Union<string, CaptionSide> CaptionSide;

        /// <summary>
        /// The clear CSS property specifies whether an element can be next to floating elements that precede it or must be moved down (cleared) below them.
        /// </summary>
        public Union<string, Clear> Clear;

        /// <summary>
        /// The clip CSS property defines what portion of an element is visible. The clip property applies only to elements with position:absolute.
        /// </summary>
        public string Clip;

        /// <summary>
        ///
        /// </summary>
        public string ClipPath;

        /// <summary>
        /// The CSS color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called text-color and would have been named so, save for historical reasons and its appearance in CSS Level 1.
        /// </summary>
        public string Color;

        /// <summary>
        /// The columns CSS property is a shorthand property allowing to set both the column-width and the column-count properties at the same time.
        /// </summary>
        public string Columns;

        /// <summary>
        /// The column-count CSS property describes the number of columns of the element.
        /// </summary>
        public string ColumnCount;

        /// <summary>
        /// The column-fill CSS property controls how contents are partitioned into columns. Contents are either balanced, which means that contents in all columns will have the same height or, when using auto, just take up the room the content needs.
        /// </summary>
        public Union<string, ColumnFill> ColumnFill;

        /// <summary>
        /// The column-gap CSS property sets the size of the gap between columns for elements which are specified to display as a multi-column element.
        /// </summary>
        public string ColumnGap;

        /// <summary>
        /// In multi-column layouts, the column-rule CSS property specifies a straight line, or "rule", to be drawn between each column. It is a convenient shorthand to avoid setting each of the individual column-rule-* properties separately : column-rule-width, column-rule-style and column-rule-color.
        /// </summary>
        public string ColumnRule;

        /// <summary>
        /// The column-rule-color CSS property lets you set the color of the rule drawn between columns in multi-column layouts.
        /// </summary>
        public string ColumnRuleColor;

        /// <summary>
        /// The column-rule-style CSS property lets you set the style of the rule drawn between columns in multi-column layouts.
        /// </summary>
        public Union<string, BorderStyle> ColumnRuleStyle;

        /// <summary>
        /// The column-rule-width CSS property lets you set the width of the rule drawn between columns in multi-column layouts.
        /// </summary>
        public Union<string, BorderWidth> ColumnRuleWidth;

        /// <summary>
        /// The column-span CSS property makes it possible for an element to span across all columns when its value is set to all. An element that spans more than one column is called a spanning element.
        /// </summary>
        public Union<string, ColumnSpan> ColumnSpan;

        /// <summary>
        /// The column-width CSS property suggests an optimal column width. This is not a absolute value but a mere hint. Browser will adjust the width of the column around that suggested value, allowing to achieve scalable designs that fit different screen size. Especially in presence of the column-count CSS property which has precedence, to set an exact column width, all length values must be specified. In horizontal text these are width, column-width, column-gap, and column-rule-width.
        /// </summary>
        public string ColumnWidth;

        /// <summary>
        /// The content CSS property is used with the ::before and ::after pseudo-elements to generate content in an element. Objects inserted using the content property are anonymous replaced elements.
        /// </summary>
        public string Content;

        /// <summary>
        /// The counter-increment CSS property is used to increase the value of CSS Counters by a given value. The counter's value can be reset using the counter-reset CSS property.
        /// </summary>
        public string CounterIncrement;

        /// <summary>
        /// The counter-reset CSS property is used to reset CSS Counters to a given value.
        /// </summary>
        public string CounterReset;

        /// <summary>
        /// The float CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it. A floating element is one where the computed value of float is not none.
        /// </summary>
        public Union<string, Float> CssFloat;

        /// <summary>
        /// The cssText property sets or returns the contents of a style declaration as a string.
        /// </summary>
        public string CssText;

        /// <summary>
        /// The cursor CSS property specifies the mouse cursor displayed when the mouse pointer is over an element.
        /// </summary>
        public Union<string, Cursor> Cursor;

        /// <summary>
        /// Set the direction CSS property to match the direction of the text: rtl for Hebrew or Arabic text and ltr for other scripts. This is typically done as part of the document (e.g., using the dir attribute in HTML) rather than through direct use of CSS.
        /// </summary>
        public Union<string, Direction> Direction;

        /// <summary>
        /// The display CSS property specifies the type of rendering box used for an element. In HTML, default display property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is inline.
        /// </summary>
        public Union<string, Display> Display;

        /// <summary>
        /// The dominant-baseline property is used to determine or re-determine a scaled-baseline-table.
        /// </summary>
        public Union<string, DominantBaseline> DominantBaseline;

        /// <summary>
        ///
        /// </summary>
        public Union<string, EmptyCells> EmptyCells;

        /// <summary>
        /// Sets or retrieves a value that indicates the color to paint the interior of the given graphical element.
        /// </summary>
        public string Fill;

        /// <summary>
        /// Sets or retrieves a value that specifies the opacity of the painting operation that is used to paint the interior of the current object.
        /// </summary>
        public string FillOpacity;

        /// <summary>
        /// Sets or retrieves a value that indicates the algorithm that is to be used to determine what parts of the canvas are included inside the shape.
        /// </summary>
        public string FillRule;

        /// <summary>
        /// The CSS filter property provides for effects like blurring or color shifting on an element’s rendering before the element is displayed. Filters are commonly used to adjust the rendering of an image, a background, or a border.
        /// </summary>
        public string Filter;

        /// <summary>
        /// The flex CSS property is a shorthand property specifying the ability of a flex item to alter its dimensions to fill available space. Flex items can be stretched to use available space proportional to their flex grow factor or their flex shrink factor to prevent overflow.
        /// </summary>
        public string Flex;

        /// <summary>
        /// The CSS flex-basis property specifies the flex basis which is the initial main size of a flex item.
        /// </summary>
        public string FlexBasis;

        /// <summary>
        /// The CSS flex-direction property specifies how flex items are placed in t
        /// </summary>
        public Union<string, FlexDirection> FlexDirection;

        /// <summary>
        /// The CSS flex-flow property is a shorthand property for flex-direction and flex-wrap individual properties.
        /// </summary>
        public string FlexFlow;

        /// <summary>
        /// The CSS flex-grow property specifies the flex grow factor of a flex item.
        /// </summary>
        public string FlexGrow;

        /// <summary>
        /// The CSS flex-shrink property specifies the flex shrink factor of a flex item.
        /// </summary>
        public string FlexShrink;

        /// <summary>
        /// The CSS flex-wrap property specifies whether the children are forced into a single line or if the items can be flowed on multiple lines.
        /// </summary>
        public Union<string, FlexWrap> FlexWrap;

        /// <summary>
        /// The flood-color attribute indicates what color to use to flood the current filter primitive subregion defined through the &lt;feflood&gt; element. The keyword currentColor and ICC colors can be specified in the same manner as within a &lt;paint&gt; specification for the fill and stroke attributes.
        /// </summary>
        public string FloodColor;

        /// <summary>
        /// The flood-opacity attribute indicates the opacity value to use across the current filter primitive subregion defined through the &lt;feflood&gt; element.
        /// </summary>
        public string FloodOpacity;

        /// <summary>
        /// The font CSS property is either a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height and font-family, or a way to set the element's font to a system font, using specific keywords.
        /// </summary>
        public string Font;

        /// <summary>
        /// The font-family CSS property allows for a prioritized list of font family names and/or generic family names to be specified for the selected element. Unlike most other CSS properties, values are separated by a comma to indicate that they are alternatives. The browser will select the first font on the list that is installed on the computer, or that can be downloaded using the information provided by a @font-face at-rule.
        /// </summary>
        public string FontFamily;

        /// <summary>
        /// The font-feature-settings CSS property allows control over advanced typographic features in OpenType fonts.
        /// </summary>
        public string FontFeatureSettings;

        /// <summary>
        /// The font-kerning property allows contextual adjustment of inter-glyph spacing, i.e. the spaces between the characters in text. This property controls <bold>metric kerning</bold> - that utilizes adjustment data contained in the font.
        /// </summary>
        public Union<string, FontKerning> FontKerning;

        /// <summary>
        /// The ‘font-language-override’ property allows authors to explicitly specify the language system of the font, overriding the language system implied by the content language.
        /// </summary>
        public string FontLanguageOverride;

        /// <summary>
        /// The font-size CSS property specifies the size of the font – specifically the desired height of glyphs from the font. Setting the font size may, in turn, change the size of other items, since it is used to compute the value of em and ex length units.
        /// </summary>
        public string FontSize;

        /// <summary>
        /// The font-size-adjust CSS property specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters.
        /// </summary>
        public string FontSizeAdjust;

        /// <summary>
        /// The font-stretch CSS property selects a normal, condensed, or expanded face from a font.
        /// </summary>
        public Union<string, FontStretch> FontStretch;

        /// <summary>
        /// The font-style CSS property allows italic or oblique faces to be selected within a font-family.
        /// </summary>
        public Union<string, FontStyle> FontStyle;

        /// <summary>
        /// This value specifies whether the user agent is allowed to synthesize bold or oblique font faces when a font family lacks bold or italic faces.
        /// </summary>
        public Union<string, FontSynthesis> FontSynthesis;

        /// <summary>
        /// The font-variant CSS property selects a normal, or small-caps face from a font family. Setting font-variant is also possible by using the font shorthand.
        /// </summary>
        public Union<string, FontVariant> FontVariant;

        /// <summary>
        /// Fonts can provide alternate glyphs in addition to default glyph for a character. This property provides control over the selection of these alternate glyphs.
        /// </summary>
        public string FontVariantAlternates;

        /// <summary>
        /// The font-variant-caps property allows the selection of alternate glyphs used for small or petite capitals or for titling. These glyphs are specifically designed to blend well with the surrounding normal glyphs, to maintain the weight and readability which suffers when text is simply resized to fit this purpose.
        /// </summary>
        public Union<string, FontVariantCaps> FontVariantCaps;

        /// <summary>
        /// The font-variant-east-asian property allows control of glyph substitution and sizing in East Asian text.
        /// </summary>
        public string FontVariantEastAsian;

        /// <summary>
        /// font-variant-ligatures is a CSS property to control ligatures in text.
        /// </summary>
        public Union<string, FontVariantLigatures> FontVariantLigatures;

        /// <summary>
        /// The font-variant-numeric property specifies control over numerical forms. Within normal paragraph text, proportional numbers are used while tabular numbers are used so that columns of numbers line up properly
        /// </summary>
        public string FontVariantNumeric;

        /// <summary>
        /// The font-variant-position property is used to enable typographic subscript and superscript glyphs. These are alternate glyphs designed within the same em-box as default glyphs and are intended to be laid out on the same baseline as the default glyphs, with no resizing or repositioning of the baseline. They are explicitly designed to match the surrounding text and to be more readable without affecting the line height.
        /// </summary>
        public Union<string, FontVariantPosition> FontVariantPosition;

        /// <summary>
        /// The font-weight CSS property specifies the weight or boldness of the font. However, some fonts are not available in all weights; some are available only on normal and bold.
        /// </summary>
        public string FontWeight;

        /// <summary>
        /// The grid property in CSS is the foundation of Grid Layout.
        /// </summary>
        public string Grid;

        /// <summary>
        /// Lays out one or more grid items bound by 4 grid lines. Shorthand for setting grid-column-start, grid-column-end, grid-row-start, and grid-row-end in a single declaration.
        /// </summary>
        public string GridArea;

        /// <summary>
        /// hanges default size of columns. Creates implicit grid tracks when a grid item is placed into a row or column that is not explicitly sized (by grid-template-rows or grid-template-columns). This property (with grid-auto-rows) specifies the default size of such implicitly-created tracks.
        /// </summary>
        public string GridAutoColumns;

        /// <summary>
        /// Automatically places grid elements into the grid layout if an explicit location is not designated. Designates the direction of the the flow and whether rows or columns must be added to accommodate the element.
        /// </summary>
        public Union<string, GridAutoFlow> GridAutoFlow;

        /// <summary>
        /// Specifies the automatic default location if a grid container does not specify automatic-placement strategy via grid-auto-flow.
        /// </summary>
        public string GridAutoPosition;

        /// <summary>
        /// Changes default size of grid rows. Creates implicit grid tracks when a grid item is placed into a row that is not explicitly sized (by grid-template-rows ) or when the auto-placement algorithm has generated additional rows. This property (with grid-auto-columns) specifies the size of such implicitly-created tracks.
        /// </summary>
        public string GridAutoRows;

        /// <summary>
        /// The grid-columns property specifies the width of each column in the grid.
        /// </summary>
        public string GridColumn;

        /// <summary>
        /// Determines a grid item's placement by specifying the starting grid lines of a grid item's grid area . A grid item's placement in a grid area consists of a grid position and a grid span.
        /// </summary>
        public string GridColumnStart;

        /// <summary>
        /// Controls a grid item's placement in a grid area as well as grid position and a grid span. The grid-column-end property (with grid-row-start, grid-row-end, and grid-column-start) determines a grid item's placement by specifying the grid lines of a grid item's grid area.
        /// </summary>
        public string GridColumnEnd;

        /// <summary>
        /// Gets or sets a value that indicates which row an element within a Grid should appear in. Shorthand for setting grid-row-start and grid-row-end in a single declaration.
        /// </summary>
        public string GridRow;

        /// <summary>
        /// A grid item's placement in a grid area consists of a grid position and a grid span. The grid-row-start property (with grid-row-end, grid-column-start, and grid-column-end) determines a grid item's placement by specifying the grid lines of a grid item's grid area.
        /// </summary>
        public string GridRowStart;

        /// <summary>
        /// Determines a grid item’s placement by specifying the block-end. A grid item's placement in a grid area consists of a grid position and a grid span. The grid-row-end property (with grid-row-start, grid-column-start, and grid-column-end) determines a grid item's placement by specifying the grid lines of a grid item's grid area.
        /// </summary>
        public string GridRowEnd;

        /// <summary>
        /// Shorthand for setting grid-template-columns, grid-template-rows, and grid-template-areas in a single declaration.
        /// </summary>
        public string GridTemplate;

        /// <summary>
        /// Specifies named grid areas which are not associated with any particular grid item, but can be referenced from the grid-placement properties. The syntax of the grid-template-areas property also provides a visualization of the structure of the grid, making the overall layout of the grid container easier to understand.
        /// </summary>
        public string GridTemplateAreas;

        /// <summary>
        /// Specifies (with grid-template-columns) the line names and track sizing functions of the grid. Each sizing function can be specified as a length, a percentage of the grid container’s size, a measurement of the contents occupying the column or row, or a fraction of the free space in the grid.
        /// </summary>
        public string GridTemplateRows;

        /// <summary>
        /// Specifies (with grid-template-rows) the line names and track sizing functions of the grid. Each sizing function can be specified as a length, a percentage of the grid container’s size, a measurement of the contents occupying the column or row, or a fraction of the free space in the grid.
        /// </summary>
        public string GridTemplateColumns;

        /// <summary>
        /// The height CSS property specifies the height of the content area of an element. The content area is inside the padding, border, and margin of the element.
        /// </summary>
        public string Height;

        /// <summary>
        /// The hyphens CSS property tells the browser how to go about splitting words to improve the layout of text when line-wrapping.
        /// </summary>
        public Union<string, Hyphens> Hyphens;

        /// <summary>
        /// The icon property provides the author the ability to style an element with an iconic equivalent.
        /// </summary>
        public string Icon;

        /// <summary>
        /// The image-rendering CSS property provides a hint to the user agent about how to handle its image rendering.
        /// </summary>
        public Union<string, ImageRendering> ImageRendering;

        /// <summary>
        /// The image-resolution property specifies the intrinsic resolution of all raster images used in or on the element. It affects both content images (e.g. replaced elements and generated content) and decorative images (such as 'background-image'). The intrinsic resolution of an image is used to determine the image's intrinsic dimensions.
        /// </summary>
        public string ImageResolution;

        /// <summary>
        /// The image-orientation CSS property describes how to correct the default orientation of an image.
        /// </summary>
        public string ImageOrientation;

        /// <summary>
        /// The ime-mode CSS property controls the state of the input method editor for text fields.
        /// </summary>
        public Union<string, ImeMode> ImeMode;

        /// <summary>
        /// The CSS justify-content property defines how a browser distributes available space between and around elements when aligning flex items in the main-axis of the current line.
        /// </summary>
        public Union<string, JustifyContent> JustifyContent;

        /// <summary>
        /// The left CSS property specifies part of the position of positioned elements.
        /// </summary>
        public string Left;

        /// <summary>
        ///
        /// </summary>
        public int Length;

        /// <summary>
        /// The letter-spacing CSS property specifies spacing behavior between text characters.
        /// </summary>
        public string LetterSpacing;

        /// <summary>
        /// The ‘lighting-color’ property defines the color of the light source for filter primitives ‘feDiffuseLighting’ and ‘feSpecularLighting’.
        /// </summary>
        public string LightingColor;

        /// <summary>
        /// On block level elements, the line-height CSS property specifies the minimal height of line boxes within the element.
        /// On non-replaced inline elements, line-height specifies the height that is used in the calculation of the line box height.
        /// On replaced inline elements, like buttons or other input element, line-height has no effect.
        /// </summary>
        public string LineHeight;

        /// <summary>
        /// The list-style CSS property is a shorthand property for setting list-style-type, list-style-image and list-style-position.
        /// </summary>
        public string ListStyle;

        /// <summary>
        /// The list-style-image CSS property sets the image that will be used as the list item marker. It is often more convenient to use the shorthand list-style.
        /// </summary>
        public string ListStyleImage;

        /// <summary>
        /// The list-style-position CSS property specifies the position of the marker box in the principal block box. It is often more convenient to use the shortcut list-style.
        /// </summary>
        public Union<string, ListStylePosition> ListStylePosition;

        /// <summary>
        /// The list-style-type CSS property specifies appearance of a list item element. As it is the only one who defaults to display:list-item, this is usually a &lt;li&lt; element, but can be any element with this display value.
        /// </summary>
        public Union<string, ListStyleType> ListStyleType;

        /// <summary>
        /// The margin CSS property sets the margin for all four sides. It is a shorthand to avoid setting each side separately with the other margin properties: margin-top, margin-right, margin-bottom and margin-left.
        /// </summary>
        public string Margin;

        /// <summary>
        /// The margin-bottom CSS property of an element sets the margin space required on the bottom of an element. A negative value is also allowed.
        /// </summary>
        public string MarginBottom;

        /// <summary>
        /// The margin-left CSS property of an element sets the margin space required on the left side of a box associated with an element. A negative value is also allowed.
        /// </summary>
        public string MarginLeft;

        /// <summary>
        /// The margin-right CSS property of an element sets the margin space required on the right side of an element. A negative value is also allowed.
        /// </summary>
        public string MarginRight;

        /// <summary>
        /// The margin-top CSS property of an element sets the margin space required on the top of an element. A negative value is also allowed.
        /// </summary>
        public string MarginTop;

        /// <summary>
        /// The marks CSS property adds crop and/or cross marks to the presentation of the document. Crop marks indicate where the page should be cut. Cross marks are used to align sheets.
        /// </summary>
        public string Marks;

        /// <summary>
        ///
        /// </summary>
        public string Mask;

        /// <summary>
        /// The CSS mask-type properties defines if a SVG &lt;mask&gt; element is a luminance or an alpha mask.
        /// </summary>
        public Union<string, MaskType> MaskType;

        /// <summary>
        /// The max-height CSS property is used to set the maximum height of a given element. It prevents the used value of the height property from becoming larger than the value specified for max-height.
        /// </summary>
        public string MaxHeight;

        /// <summary>
        /// The max-width CSS property is used to set the maximum width of a given element. It prevents the used value of the width property from becoming larger than the value specified for max-width.
        /// </summary>
        public string MaxWidth;

        /// <summary>
        /// The min-height CSS property is used to set the minimum height of a given element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.
        /// </summary>
        public string MinHeight;

        /// <summary>
        /// The min-width CSS property is used to set the minimum width of a given element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.
        /// </summary>
        public string MinWidth;

        /// <summary>
        /// The mix-blend-mode CSS property describes how an element content should blend with the content of the element that is below it and the element's background.
        /// </summary>
        public string MixBlendMode;

        /// <summary>
        /// The nav-down property specifies where to navigate when using the arrow-down navigation key.
        /// </summary>
        public string NavDown;

        /// <summary>
        /// The nav-index property specifies the sequential navigation order ("tabbing order") for an element.
        /// </summary>
        public string NavIndex;

        /// <summary>
        /// The nav-left property specifies where to navigate when using the arrow-left navigation key.
        /// </summary>
        public string NavLeft;

        /// <summary>
        /// The nav-right property specifies where to navigate when using the arrow-right navigation key.
        /// </summary>
        public string NavRight;

        /// <summary>
        /// The nav-up property specifies where to navigate when using the arrow-up navigation key.
        /// </summary>
        public string NavUp;

        /// <summary>
        /// The ‘object-fit’ property specifies how the contents of a replaced element should be fitted to the box established by its used height and width.
        /// </summary>
        public Union<string, ObjectFit> ObjectFit;

        /// <summary>
        /// The ‘object-position’ property determines the alignment of the replaced element inside its box
        /// </summary>
        public string ObjectPosition;

        /// <summary>
        /// The opacity CSS property specifies the transparency of an element, that is, the degree to which the background behind the element is overlaid.
        /// </summary>
        public string Opacity;

        /// <summary>
        /// The CSS order property specifies the order used to lay out flex items in their flex container. Elements are laid out by ascending order of the order value. Elements with the same order value are laid out in the order they appear in the source code.
        /// </summary>
        public string Order;

        /// <summary>
        /// The orphans CSS property refers to the minimum number of lines in a block container that must be left at the bottom of the page. This property is normally used to control how page breaks occur.
        /// </summary>
        public string Orphans;

        /// <summary>
        /// The CSS outline property is a shorthand property for setting one or more of the individual outline properties outline-style, outline-width and outline-color in a single rule. In most cases the use of this shortcut is preferable and more convenient.
        /// </summary>
        public string Outline;

        /// <summary>
        /// The outline-color CSS property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.
        /// </summary>
        public string OutlineColor;

        /// <summary>
        /// The outline-offset CSS property is used to set space between an outline and the edge or border of an element. An outline is a line that is drawn around elements, outside the border edge.
        /// </summary>
        public string OutlineOffset;

        /// <summary>
        /// The outline-style CSS property is used to set the style of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.
        /// </summary>
        public Union<string, BorderStyle> OutlineStyle;

        /// <summary>
        /// The outline-width CSS property is used to set the width of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out:
        /// </summary>
        public Union<string, BorderWidth> OutlineWidth;

        /// <summary>
        /// The overflow CSS property specifies whether to clip content, render scroll bars or display overflow content of a block-level element.
        /// </summary>
        public Union<string, Overflow> Overflow;

        /// <summary>
        /// The word-wrap CSS property is used to specify whether or not the browser may break lines within words in order to prevent overflow (in other words, force wrapping) when an otherwise unbreakable string is too long to fit in its containing box.
        /// </summary>
        public string OverflowWrap;

        /// <summary>
        /// The overflow-x CSS property specifies whether to clip content, render a scroll bar or display overflow content of a block-level element, when it overflows at the left and right edges.
        /// </summary>
        public Union<string, Overflow> OverflowX;

        /// <summary>
        /// The overflow-y CSS property specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the top and bottom edges.
        /// </summary>
        public Union<string, Overflow> OverflowY;

        /// <summary>
        ///
        /// </summary>
        public string OverflowClipBox;

        /// <summary>
        /// The padding CSS property sets the required padding space on all sides of an element. The padding area is the space between the content of the element and its border. Negative values are not allowed.
        /// </summary>
        public string Padding;

        /// <summary>
        /// The padding-bottom CSS property of an element sets the height of the padding area at the bottom of an element. The padding area is the space between the content of the element and it's border. Contrary to margin-bottom values, negative values of padding-bottom are invalid.
        /// </summary>
        public string PaddingBottom;

        /// <summary>
        /// The padding-left CSS property of an element sets the padding space required on the left side of an element. The padding area is the space between the content of the element and it's border. A negative value is not allowed.
        /// </summary>
        public string PaddingLeft;

        /// <summary>
        /// The padding-right CSS property of an element sets the padding space required on the right side of an element. The padding area is the space between the content of the element and its border. Negative values are not allowed.
        /// </summary>
        public string PaddingRight;

        /// <summary>
        /// The padding-top CSS property of an element sets the padding space required on the top of an element. The padding area is the space between the content of the element and its border. Contrary to margin-top values, negative values of padding-top are invalid.
        /// </summary>
        public string PaddingTop;

        /// <summary>
        /// The page-break-after CSS property adjusts page breaks after the current element.
        /// </summary>
        public Union<string, PageBreak> PageBreakAfter;

        /// <summary>
        /// The page-break-before CSS property adjusts page breaks before the current element.
        /// </summary>
        public Union<string, PageBreak> PageBreakBefore;

        /// <summary>
        /// The page-break-inside CSS property adjusts page breaks inside the current element.
        /// </summary>
        public Union<string, PageBreakInside> PageBreakInside;

        /// <summary>
        /// The perspective CSS property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective.
        /// </summary>
        public string Perspective;

        /// <summary>
        /// The perspective CSS property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective.
        /// </summary>
        public string PerspectiveOrigin;

        /// <summary>
        /// The CSS property pointer-events allows authors to control under what circumstances (if any) a particular graphic element can become the target of mouse events. When this property is unspecified, the same characteristics of the visiblePainted value apply to SVG content.
        /// </summary>
        public Union<string, PointerEvents> PointerEvents;

        /// <summary>
        /// The position CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects.
        /// </summary>
        public Union<string, Position> Position;

        /// <summary>
        /// The quotes CSS property indicates how user agents should render quotation marks.
        /// </summary>
        public string Quotes;

        /// <summary>
        /// The resize CSS property lets you control the resizability of an element.
        /// </summary>
        public Union<string, Resize> Resize;

        /// <summary>
        /// The right CSS property specifies part of the position of positioned elements.
        /// </summary>
        public string Right;

        /// <summary>
        /// The table-layout CSS property defines the algorithm to be used to layout the table cells, rows, and columns.
        /// </summary>
        public Union<string, TableLayout> TableLayout;

        /// <summary>
        /// The tab-size CSS property is used to customize the width of a tab (U+0009) character.
        /// </summary>
        public string TabSize;

        /// <summary>
        /// The text-align CSS property describes how inline content like text is aligned in its parent block element. text-align does not control the alignment of block elements itself, only their inline content.
        /// </summary>
        public Union<string, TextAlign> TextAlign;

        /// <summary>
        /// The text-align-last CSS property describes how the last line of a block or a line, right before a forced line break, is aligned.
        /// </summary>
        public Union<string, TextAlign> TextAlignLast;

        /// <summary>
        ///
        /// </summary>
        public string TextCombineHorizontal;

        /// <summary>
        /// The text-decoration CSS property is used to set the text formatting to underline, overline, line-through or blink.
        /// </summary>
        public Union<string, TextDecoration> TextDecoration;

        /// <summary>
        /// The text-decoration-color CSS property sets the color used when drawing underlines, overlines, or strike-throughs specified by text-decoration-line.
        /// </summary>
        public string TextDecorationColor;

        /// <summary>
        /// The text-decoration-line CSS property sets what kind of line decorations are added to an element.
        /// </summary>
        public Union<string, TextDecorationLine> TextDecorationLine;

        /// <summary>
        /// The text-decoration-style CSS property defines the style of the lines specified by text-decoration-line. The style applies to all lines, there is no way to define different style for each of the line defined by text-decoration-line.
        /// </summary>
        public Union<string, TextDecorationStyle> TextDecorationStyle;

        /// <summary>
        /// The text-indent CSS property specifies how much horizontal space should be left before the beginning of the first line of the text content of an element. Horizontal spacing is with respect to the left (or right, for right-to-left layout) edge of the containing block element's box.
        /// </summary>
        public string TextIndent;

        /// <summary>
        ///
        /// </summary>
        public string TextOrientation;

        /// <summary>
        /// The text-overflow CSS property determines how overflowed content that is not displayed is signaled to the users. It can be clipped, or display an ellipsis ('…', U+2026 HORIZONTAL ELLIPSIS) or a Web author-defined string.
        /// </summary>
        public Union<string, TextOverflow> TextOverflow;

        /// <summary>
        /// The text-rendering CSS property provides information to the rendering engine about what to optimize for when rendering text.
        /// </summary>
        public Union<string, TextRendering> TextRendering;

        /// <summary>
        /// The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and text-decorations of the element.
        /// </summary>
        public string TextShadow;

        /// <summary>
        /// The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.
        /// </summary>
        public Union<string, TextTransform> TextTransform;

        /// <summary>
        /// The CSS text-underline-position property specifies the position of the underline which is set using the text-decoration property underline value.
        /// </summary>
        public Union<string, TextUnderlinePosition> TextUnderlinePosition;

        /// <summary>
        /// The top CSS property specifies part of the position of positioned elements. It has no effect on non-positioned elements.
        /// </summary>
        public string Top;

        /// <summary>
        /// Determines whether touch input may trigger default behavior supplied by the user agent, such as panning or zooming.
        /// </summary>
        public Union<string, TouchAction> TouchAction;

        /// <summary>
        /// The CSS transform property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed according to the values set.
        /// </summary>
        public string Transform;

        /// <summary>
        /// The transform-origin CSS property lets you modify the origin for transformations of an element.
        /// </summary>
        public string TransformOrigin;

        /// <summary>
        /// The transform-style CSS property determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.
        /// </summary>
        public Union<string, TransformStyle> TransformStyle;

        /// <summary>
        /// The CSS transition property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.
        /// </summary>
        public string Transition;

        /// <summary>
        /// The transition-delay CSS property specifies the amount of time to wait between a change being requested to a property that is to be transitioned and the start of the transition effect.
        /// </summary>
        public string TransitionDelay;

        /// <summary>
        /// The transition-duration CSS property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.
        /// </summary>
        public string TransitionDuration;

        /// <summary>
        /// The transition-property CSS property is used to specify the names of CSS properties to which a transition effect should be applied.
        /// </summary>
        public string TransitionProperty;

        /// <summary>
        /// The CSS transition-timing-function property is used to describe how the intermediate values of the CSS properties being affected by a transition effect are calculated. This in essence lets you establish an acceleration curve, so that the speed of the transition can vary over its duration.
        /// </summary>
        public Union<string, TimingFunction> TransitionTimingFunction;

        /// <summary>
        /// The unicode-bidi CSS property together with the direction property relates to the handling of bidirectional text in a document.
        /// </summary>
        public Union<string, UnicodeBidi> UnicodeBidi;

        /// <summary>
        /// The unicode-range CSS descriptor sets the specific range of characters to be downloaded from a font defined by @font-face and made available for use on the current page.
        /// </summary>
        public string UnicodeRange;

        /// <summary>
        /// The vertical-align CSS property specifies the vertical alignment of an inline or table-cell box.
        /// </summary>
        public Union<string, VerticalAlign> VerticalAlign;

        /// <summary>
        ///
        /// </summary>
        public Union<string, Visibility> Visibility;

        /// <summary>
        /// The white-space CSS property is used to to describe how whitespace inside the element is handled.
        /// </summary>
        public Union<string, WhiteSpace> WhiteSpace;

        /// <summary>
        /// The widows CSS property defines how many minimum lines must be left on top of a new page, on a paged media.
        /// </summary>
        public string Widows;

        /// <summary>
        /// The width CSS property specifies the width of the content area of an element. The content area is inside the padding, border, and margin of the element.
        /// </summary>
        public string Width;

        /// <summary>
        /// The will-change property provides a rendering hint to the user agent, stating what kinds of changes the author expects to perform on the element.
        /// </summary>
        public string WillChange;

        /// <summary>
        /// The word-break CSS property is used to specify how (or if) to break lines within words.
        /// </summary>
        public Union<string, WordBreak> WordBreak;

        /// <summary>
        /// The word-spacing CSS property specifies spacing behavior between tags and words.
        /// </summary>
        public string WordSpacing;

        /// <summary>
        /// The word-wrap CSS property is used to specify whether or not the browser may break lines within words in order to prevent overflow (in other words, force wrapping) when an otherwise unbreakable string is too long to fit in its containing box.
        /// </summary>
        public Union<string, WordWrap> WordWrap;

        /// <summary>
        /// CSS Writing Modes Level 3 defines CSS features to support various international script modes, such as left-to-right (e.g., Latin and Indic), right-to-left (e.g., Hebrew and Arabic), bidirectional (e.g., mixed Latin and Arabic) and vertical (e.g., Asian). This article is about the CSS writing-mode property.
        /// </summary>
        public Union<string, WritingMode> WritingMode;

        /// <summary>
        /// The z-index CSS property specifies the z-order of an element and its descendants. When elements overlap, z-order determines which one covers the other. An element with a larger z-index generally covers an element with a lower one.
        /// </summary>
        public string ZIndex;

        public virtual extern IEnumerator<string> GetEnumerator();

        /// <summary>
        /// Returns the optional priority, "important". Example: priString= styleObj.getPropertyPriority('color')
        /// </summary>
        /// <param name="property"></param>
        /// <returns></returns>
        public virtual extern string GetPropertyPriority(string property);

        /// <summary>
        /// Returns the property value. Example: valString= styleObj.getPropertyValue('color')
        /// </summary>
        /// <param name="property"></param>
        /// <returns></returns>
        public virtual extern string GetPropertyValue(string property);

        /// <summary>
        /// Returns a property name. Example: nameString= styleObj.item(0) Alternative: nameString= styleObj[0]
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public virtual extern string Item(int index);

        /// <summary>
        ///
        /// </summary>
        public virtual CSSRule ParentRule
        {
            get
            {
                return default(CSSRule);
            }
        }

        /// <summary>
        /// Returns the value deleted. Example: valString= styleObj.removeProperty('color')
        /// </summary>
        /// <param name="property"></param>
        /// <returns></returns>
        public virtual extern string RemoveProperty(string property);

        /// <summary>
        /// No return. Example: styleObj.setProperty('color', 'red', 'important')
        /// </summary>
        /// <param name="property"></param>
        /// <param name="value"></param>
        public virtual extern void SetProperty(string property, string value);

        /// <summary>
        /// No return. Example: styleObj.setProperty('color', 'red', 'important')
        /// </summary>
        /// <param name="property"></param>
        /// <param name="value"></param>
        /// <param name="priority"></param>
        public virtual extern void SetProperty(string property, string value, string priority);

        extern IEnumerator IEnumerable.GetEnumerator();
    }
}