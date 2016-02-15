using Bridge;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public class AggregateException : Exception
    {
        public extern AggregateException();

        [Template("new Bridge.AggregateException(null, {innerExceptions})")]
        public extern AggregateException(IEnumerable<Exception> innerExceptions);

        [Template("new Bridge.AggregateException(null, {innerExceptions:array})")]
        public extern AggregateException(params Exception[] innerExceptions);

        public extern AggregateException(string message);

        public extern AggregateException(string message, IEnumerable<Exception> innerExceptions);

        [Template("new Bridge.AggregateException({message}, {innerExceptions:array})")]
        public extern AggregateException(string message, params Exception[] innerExceptions);

        [FieldProperty]
        public extern ReadOnlyCollection<Exception> InnerExceptions
        {
            get;
        }

        public extern AggregateException Flatten();

        public extern void Handle(Func<Exception, bool> predicate);
    }
}