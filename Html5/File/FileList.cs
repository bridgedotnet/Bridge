using System.Collections.Generic;
using Bridge;
using System.Collections;

namespace Bridge.Html5
{
    /// <summary>
    /// An object of this type is returned by the files property of the HTML input element; this lets you access the list of files selected with the &lt;input type="file"&gt; element. It's also used for a list of files dropped into web content when using the drag and drop API; see the DataTransfer object for details on this usage.
    /// </summary>
    [Ignore]
    [Name("FileList")]
    public class FileList : IEnumerable<File>
    {
        internal FileList()
        {
        }

        /// <summary>
        /// Returns a File object representing the file at the specified index in the file list.
        /// </summary>
        /// <param name="index">The zero-based index of the file to retrieve from the list.</param>
        /// <returns>The File representing the requested file.</returns>
        public virtual File this[int index]
        {
            get
            {
                return null;
            }
        }

        /// <summary>
        /// Returns a File object representing the file at the specified index in the file list.
        /// </summary>
        /// <param name="index">The zero-based index of the file to retrieve from the list.</param>
        /// <returns>The File representing the requested file.</returns>
        [Name("Item")]
        public virtual File GetItem(int index)
        {
            return default(File);
        }

        /// <summary>
        /// A read-only value indicating the number of files in the list.
        /// </summary>
        public readonly int Length;

        public virtual IEnumerator<File> GetEnumerator()
        {
            return null;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return null;
        }
    }
}
