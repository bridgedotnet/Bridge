using System.Collections.Generic;

namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    public class Exception : Bridge.IBridgeClass
    {
        /// <summary>
        /// Gets a collection of key/value pairs that provide additional user-defined information about the exception.
        /// </summary>
        public virtual extern IDictionary<object, object> Data
        {
            get;
        }

        /// <summary>
        /// Gets a message that describes the current exception.
        /// </summary>
        public virtual extern string Message
        {
            get;
        }

        /// <summary>
        /// Gets the Exception instance that caused the current exception.
        /// </summary>
        public virtual extern Exception InnerException
        {
            get;
        }

        /// <summary>
        /// Retrieves the lowest exception (inner most) for the given Exception.
        /// This will traverse exceptions using the innerException property.
        /// </summary>
        /// <returns>The first exception thrown in a chain of exceptions. If the InnerException property of the current exception is a null reference</returns>
        public virtual extern Exception GetBaseException();

        /// <summary>
        /// Gets a string representation of the immediate frames on the call stack.
        /// </summary>
        public virtual extern string StackTrace
        {
            get;
        }

        public extern int HResult
        {
            get;
            protected set;
        }

        public extern Exception();

        public extern Exception(string message);

        public extern Exception(string message, Exception innerException);
    }
}