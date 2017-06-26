namespace Bridge.Html5
{
    /// <summary>
    /// A processing instruction provides an opportunity for application-specific instructions to be embedded within XML and which can be ignored by XML processors which do not support processing their instructions (outside of their having a place in the DOM).
    /// </summary>
    [External]
    [Name("ProcessingInstruction")]
    public class ProcessingInstruction : CharacterData
    {
        extern internal ProcessingInstruction();

        /// <summary>
        /// after the &lt;? and before whitespace delimiting it from data
        /// </summary>
        public readonly string Target;

        /// <summary>
        /// first non-whitespace character after target and before ?&gt;
        /// </summary>
        public new readonly string Data;
    }
}