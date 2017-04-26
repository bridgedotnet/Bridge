using System;
using System.Text.RegularExpressions;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2610 - {0}")]
    public class Bridge2610
    {
        public sealed class OptionalTest<T>
        {
            public static OptionalTest<T> Missing { get; } = new OptionalTest<T>(default(T), false);
            private OptionalTest(T value, bool isDefined)
            {
                Value = value;
                IsDefined = isDefined;
            }
            public bool IsDefined { get; }
            public T Value { get; }

            public static implicit operator OptionalTest<T>(T value)
            {
                return (value == null) ? Missing : new OptionalTest<T>(value, true);
            }
        }

        public sealed class ResultOrErrorTest<T>
        {
            public ResultOrErrorTest(T result) : this(result, null) { }
            public ResultOrErrorTest(Exception error) : this(OptionalTest<T>.Missing, error) { }

            private readonly OptionalTest<T> _result;
            private readonly OptionalTest<Exception> _error;
            private ResultOrErrorTest(OptionalTest<T> result, OptionalTest<Exception> error)
            {
                _result = result;
                _error = error;
            }

            public TResult Match<TResult>(Func<T, TResult> handleResult, Func<Exception, TResult> handleError)
            {
                return _result.IsDefined ? handleResult(_result.Value) : handleError(_error.Value);
            }
        }

        private static OptionalTest<T> TryToGetResult<T>(ResultOrErrorTest<T> value)
        {
            // The "handleResult" lambda gets lifted into an anonymous method but it shouldn't be allowed to because
            // it relies on the generic type param T because there is an implicit cast from T on to OptionalTest<T>
            return value.Match(
                handleError: error => OptionalTest<T>.Missing,
                handleResult: result => result
            );
        }

        [Test]
        public static void TestLambdaLifting()
        {
            var myValue = new ResultOrErrorTest<string>("WOOOO");
            try
            {
                var result = Bridge2610.TryToGetResult(myValue);
                Assert.AreEqual("WOOOO", result.Value);
            }
            catch (Exception e)
            {
                Assert.Fail(e.Message);
            }
        }
    }
}