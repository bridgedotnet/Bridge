using Bridge;
using System.Collections.Generic;

namespace System
{
    [External]
    [Name("Bridge.Exception")]
    public class Exception : IBridgeClass
    {
        /// <summary>
        /// Gets a collection of key/value pairs that provide additional user-defined information about the exception.
        /// </summary>
        public virtual IDictionary<object, object> Data
        {
            get
            {
                return null;
            }
        }

        /// <summary>
        /// Gets a message that describes the current exception.
        /// </summary>
        public virtual string Message
        {
            get
            {
                return null;
            }
        }

        /// <summary>
        /// Gets the Exception instance that caused the current exception.
        /// </summary>
        public virtual Exception InnerException
        {
            get
            {
                return null;
            }
        }

        /// <summary>
        /// Gets a string representation of the immediate frames on the call stack.
        /// </summary>
        public virtual string StackTrace
        {
            get
            {
                return null;
            }
        }

        public Exception()
        {
        }

        public Exception(string message)
        {
        }

        public Exception(string message, Exception innerException)
        {
        }
    }
}