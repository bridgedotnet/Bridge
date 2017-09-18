using System;
using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Immutable]
    public struct Bridge3145_Optional<T>
    {
        public Bridge3145_Optional(T value) : this(value, value != null) { }
        private Bridge3145_Optional(T value, bool isDefined)
        {
            IsDefined = isDefined && (value != null);
            Value = value;
        }

        public static Bridge3145_Optional<T> Missing { get { return _missing; } }
        private static Bridge3145_Optional<T> _missing = new Bridge3145_Optional<T>(default(T), false);

        public bool IsDefined { get; private set; }
        public T Value { get; private set; }
    }

    public sealed class Bridge3145_ResultOrError<T>
    {
        private readonly Bridge3145_Optional<T> _result;
        private readonly Bridge3145_Optional<string> _errorMessage;
        private Bridge3145_ResultOrError(Bridge3145_Optional<T> result, Bridge3145_Optional<string> errorMessage)
        {
            _result = result;
            _errorMessage = errorMessage;
        }

        public TResult Match<TResult>(Func<T, TResult> handleResult, Func<string, TResult> handleError)
        {
            return _result.IsDefined ? handleResult(_result.Value) : handleError(_errorMessage.Value);
        }
    }

    public static class Bridge3145_OptionalResultOrErrorExtensions
    {
        public static TResult Match<T, TResult>(this Bridge3145_Optional<Bridge3145_ResultOrError<T>> source, Func<TResult> handleNoValue, Func<T, TResult> handleResult, Func<string, TResult> handleError)
        {
            if (!source.IsDefined)
                return handleNoValue();

            return source.Value.Match(handleResult, handleError);
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3145 - {0}")]
    public class Bridge3145
    {
        [Test]
        public static void TestCloseCaptureFoldedCycle2()
        {
            var value = Bridge3145_Optional<Bridge3145_ResultOrError<string>>.Missing
                    .Match(
                    handleResult: items => new { Result = "abc" },
                    handleError: error => null,
                    handleNoValue: () => null
                );

            Assert.Null(value);
        }
    }
}