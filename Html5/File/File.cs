namespace Bridge.Html5
{
    /// <summary>
    /// The File interface provides information about -- and access to the contents of -- files.
    /// These are generally retrieved from a FileList object returned as a result of a user selecting files using the &lt;input&gt; element, from a drag and drop operation's DataTransfer object, or from the mozGetAsFile() API on an HTMLCanvasElement.
    /// The file reference can be saved when the form is submitted while the user is offline, so that the data can be retrieved and uploaded when the Internet connection is restored.
    /// </summary>
    [External]
    [Name("File")]
    public class File : Blob
    {
        extern internal File();

        /// <summary>
        /// The last modified Date of the file referenced by the File object.
        /// </summary>
        public readonly Date LastModifiedDate;

        /// <summary>
        /// The name of the file referenced by the File object.
        /// </summary>
        public readonly string Name;
    }
}