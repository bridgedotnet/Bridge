using System;

namespace Bridge.Html5
{
    [External]
    [Name("DataTransferItem")]
    public class DataTransferItem
    {
        extern DataTransferItem();

        /// <summary>
        /// The kind of drag data item such as a string or a file.
        /// </summary>
        public readonly string Kind;

        /// <summary>
        /// The drag data item's type, typically a MIME type.
        /// </summary>
        public readonly string Type;

        /// <summary>
        /// Returns the File object associated with the drag data item (or null if the drag item is not a file).
        /// </summary>
        /// <returns></returns>
        public extern File GetAsFile();

        /// <summary>
        /// Invokes the specified callback with the drag data item string as its argument.
        /// </summary>
        /// <param name="callback"></param>
        public extern void GetAsString(Action<string> callback);
    }
}