using Bridge;
using System;

namespace System
{
    /// <summary>
    /// The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. The Error object can also be used as a base objects for user-defined exceptions. See below for standard built-in error types.
    /// </summary>
    [Ignore]
    [Name("Error")]
    public class Error
    {
        public string Message;
        public string Name;
        public string Stack;

        public string FileName;
        public int LineNumber;
        public int ColumnNumber;
    }
}
