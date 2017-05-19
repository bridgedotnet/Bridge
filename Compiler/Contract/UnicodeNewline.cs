namespace Bridge.Contract
{
    public enum UnicodeNewline
    {
        Unknown,

        /// <summary>
        /// Line Feed, U+000A
        /// </summary>
        LF = 0x0A,


        CRLF = 0x0D0A,

        /// <summary>
        /// Carriage Return, U+000D
        /// </summary>
        CR = 0x0D,

        /// <summary>
        /// Next Line, U+0085
        /// </summary>
        NEL = 0x85,

        /// <summary>
        /// Vertical Tab, U+000B
        /// </summary>
        VT = 0x0B,

        /// <summary>
        /// Form Feed, U+000C
        /// </summary>
        FF = 0x0C,

        /// <summary>
        /// Line Separator, U+2028
        /// </summary>
        LS = 0x2028,

        /// <summary>
        /// Paragraph Separator, U+2029
        /// </summary>
        PS = 0x2029
    }
}