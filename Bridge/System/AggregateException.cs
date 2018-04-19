using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    public class AggregateException : Exception
    {
        public extern AggregateException();

        [Bridge.Template("new System.AggregateException(null, {innerExceptions})")]
        public extern AggregateException(IEnumerable<Exception> innerExceptions);

        [Bridge.Template("new System.AggregateException(null, {innerExceptions:array})")]
        public extern AggregateException(params Exception[] innerExceptions);

        public extern AggregateException(string message);

        public extern AggregateException(string message, IEnumerable<Exception> innerExceptions);

        [Bridge.Template("new System.AggregateException({message}, {innerExceptions:array})")]
        public extern AggregateException(string message, params Exception[] innerExceptions);

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern ReadOnlyCollection<Exception> InnerExceptions
        {
            get;
        }

        public extern AggregateException Flatten();

        public extern void Handle(Func<Exception, bool> predicate);
    }
}