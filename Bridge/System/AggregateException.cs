using Bridge;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace System
{
    [External]
    public class AggregateException : Exception
    {
        public extern AggregateException();

        [Template("new System.AggregateException(null, {innerExceptions})")]
        public extern AggregateException(IEnumerable<Exception> innerExceptions);

        [Template("new System.AggregateException(null, {innerExceptions:array})")]
        public extern AggregateException(params Exception[] innerExceptions);

        public extern AggregateException(string message);

        public extern AggregateException(string message, IEnumerable<Exception> innerExceptions);

        [Template("new System.AggregateException({message}, {innerExceptions:array})")]
        public extern AggregateException(string message, params Exception[] innerExceptions);

        [Field]
        public extern ReadOnlyCollection<Exception> InnerExceptions
        {
            get;
        }

        public extern AggregateException Flatten();

        public extern void Handle(Func<Exception, bool> predicate);
    }
}