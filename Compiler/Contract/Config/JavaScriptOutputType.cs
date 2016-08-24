namespace Bridge.Contract
{
    public enum JavaScriptOutputType
    {
        /// <summary>
        /// Output only the formatted (beautified) version of the JavaScript files. Good for debugging.
        /// </summary>
        Formatted = 1,

        /// <summary>
        /// Output only the minified (condensed) version of the JavaScript files. Good for production deploying.
        /// </summary>
        Minified = 2,

        /// <summary>
        /// Output both the beautified and minified versions of the JavaScript files. Good for choosing
        /// and interchanging between beautified and minified versions of the same code.
        /// </summary>
        Both = 3
    }
 }
