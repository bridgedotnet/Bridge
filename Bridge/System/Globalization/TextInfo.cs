using Bridge;
using System.Runtime.InteropServices;

namespace System.Globalization
{
    /// <summary>
    /// Defines text properties and behaviors, such as casing, that are specific to a writing system.
    /// </summary>
    [Reflectable]
    public class TextInfo : ICloneable, IBridgeClass
    {
        private string listSeparator;

        /// <summary>
        /// Gets the American National Standards Institute (ANSI) code page used by the writing system represented by the current TextInfo.
        /// </summary>
        public virtual int ANSICodePage { get; }

        /// <summary>
        /// Gets the name of the culture associated with the current TextInfo object.
        /// </summary>
        [ComVisibleAttribute(false)]
        public string CultureName { get; }

        /// <summary>
        /// Gets the Extended Binary Coded Decimal Interchange Code (EBCDIC) code page used by the writing system represented by the current TextInfo.
        /// </summary>
        public virtual int EBCDICCodePage { get; }

        /// <summary>
        /// Gets a value indicating whether the current TextInfo object is read-only.
        /// </summary>
        [ComVisibleAttribute(false)]
        public bool IsReadOnly { get; }

        /// <summary>
        /// Gets a value indicating whether the current TextInfo object represents a writing system where text flows from right to left.
        /// </summary>
        [ComVisibleAttribute(false)]
        public bool IsRightToLeft { get; }

        /// <summary>
        /// Gets the culture identifier for the culture associated with the current TextInfo object.
        /// </summary>
        [ComVisibleAttribute(false)]
        public int LCID { get; }

        /// <summary>
        /// Gets or sets the string that separates items in a list.
        /// </summary>
        public virtual string ListSeparator
        {
            get
            {
                return this.listSeparator;
            }
            [ComVisibleAttribute(false)]
            set
            {
                VerifyWritable();

                this.listSeparator = value;
            }
        }

        /// <summary>
        /// Gets the Macintosh code page used by the writing system represented by the current TextInfo.
        /// </summary>
        public virtual int MacCodePage { get; }

        /// <summary>
        /// Gets the original equipment manufacturer (OEM) code page used by the writing system represented by the current TextInfo.
        /// </summary>
        public virtual int OEMCodePage { get; }

        /// <summary>
        /// Creates a new object that is a copy of the current TextInfo object.
        /// </summary>
        /// <returns>A new instance of System.Object that is the memberwise clone of the current TextInfo object.</returns>
        [ComVisibleAttribute(false)]
        public virtual object Clone()
        {
            return Script.Copy(new TextInfo(), this, new string[]
            {
                "ANSICodePage",
                "CultureName",
                "EBCDICCodePage",
                "IsRightToLeft",
                "LCID",
                "listSeparator",
                "MacCodePage",
                "OEMCodePage",
                "IsReadOnly"
            });
        }

        private void VerifyWritable()
        {
            if (this.IsReadOnly)
            {
                throw new InvalidOperationException("Instance is read-only.");
            }
        }
    }
}