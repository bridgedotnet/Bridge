namespace Bridge.Html5
{
    [External]
    [Name("DataTransfer")]
    public class DataTransfer
    {
        private extern DataTransfer();

        /// <summary>
        /// Type of drag-and-drop.
        /// </summary>
        public DropEffect DropEffect;

        /// <summary>
        /// Types of operations that are possible.
        /// </summary>
        public EffectAllowed EffectAllowed;

        /// <summary>
        /// List of all of the drag data.
        /// </summary>
        public readonly DataTransferItemList Items;

        /// <summary>
        /// Contains a list of all the local files available on the data transfer.
        /// </summary>
        public readonly FileList Files;

        /// <summary>
        /// formats that were set in the dragstart event.
        /// </summary>
        public readonly string[] Types;

        /// <summary>
        /// Remove the data associated with a given type. The type argument is optional. If the type is empty or not
        /// specified, the data associated with all types is removed. If data for the specified type does not exist,
        /// or the data transfer contains no data, this method will have no effect.
        /// </summary>
        /// <param name="format">A string representing the type of data to remove. (Optional)</param>
        public extern void ClearData(string format = null);

        /// <summary>
        /// Retrieves the data for a given type, or an empty string if data for that type does not exist or the data
        /// transfer contains no data.
        /// </summary>
        /// <param name="format">Type of data to retrieve. Example data types are text/plain and text/uri-list.</param>
        /// <returns>rag data for the specified format.</returns>
        public extern string GetData(string format);

        /// <summary>
        /// Set the data for a given type. If data for the type does not exist, it is added at the end, such that the
        /// last item in the types list will be the new format. If data for the type already exists, the existing data
        /// is replaced in the same position.
        /// </summary>
        /// <param name="format">Type of the drag data to add to the drag object.
        /// Example data types are text/plain and text/uri-list.</param>
        /// <param name="data">Data to add to the drag object.</param>
        public extern void SetData(string format, string data);

        /// <summary>
        /// Set the image to be used for dragging if a custom one is desired.
        /// </summary>
        /// <param name="img">An image Element element to use for the drag feedback image.</param>
        /// <param name="xOffset">A long indicating the horizontal offset within the image.</param>
        /// <param name="yOffset">A long indicating the vertical offset within the image.</param>
        public extern void SetDragImage(HTMLElement img, int xOffset, int yOffset);
    }
}