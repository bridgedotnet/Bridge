namespace Bridge.Html5
{
    /// <summary>
    /// XMLHttpRequest Level 2 adds support for the new FormData interface. FormData objects provide a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest send() method.
    /// It uses the same format a form would use if the encoding type were set to "multipart/form-data".
    /// </summary>
    [External]
    [Name("FormData")]
    public class FormData
    {
        /// <summary>
        ///
        /// </summary>
        public extern FormData();

        /// <summary>
        ///
        /// </summary>
        /// <param name="form">HTML Form Element to send for keys/values. It will also encode file input content.</param>
        public extern FormData(HTMLFormElement form);

        /// <summary>
        /// Appends a key/value pair to the FormData object.
        /// </summary>
        /// <param name="name">The name of the field whose data is contained in value.</param>
        /// <param name="value">The field's value. Can be a Blob, File, or a string, if neither, the value is converted to a string.</param>
        public virtual extern void Append(string name, string value);

        /// <summary>
        /// Appends a key/value pair to the FormData object.
        /// </summary>
        /// <param name="name">The name of the field whose data is contained in value.</param>
        /// <param name="value">The field's value. Can be a Blob, File, or a string, if neither, the value is converted to a string.</param>
        public virtual extern void Append(string name, Blob value);

        /// <summary>
        /// Appends a key/value pair to the FormData object.
        /// </summary>
        /// <param name="name">The name of the field whose data is contained in value.</param>
        /// <param name="value">The field's value. Can be a Blob, File, or a string, if neither, the value is converted to a string.</param>
        public virtual extern void Append(string name, File value);

        /// <summary>
        /// Appends a key/value pair to the FormData object.
        /// </summary>
        /// <param name="name">The name of the field whose data is contained in value.</param>
        /// <param name="value">The field's value. Can be a Blob, File, or a string, if neither, the value is converted to a string.</param>
        /// <param name="filename">The filename reported to the server, when a Blob or File is passed as second paramter. The default filename for Blob objects is "blob".</param>
        public virtual extern void Append(string name, Blob value, string filename);

        /// <summary>
        /// Appends a key/value pair to the FormData object.
        /// </summary>
        /// <param name="name">The name of the field whose data is contained in value.</param>
        /// <param name="value">The field's value. Can be a Blob, File, or a string, if neither, the value is converted to a string.</param>
        /// <param name="filename">The filename reported to the server, when a Blob or File is passed as second paramter. The default filename for Blob objects is "blob".</param>
        public virtual extern void Append(string name, File value, string filename);
    }
}