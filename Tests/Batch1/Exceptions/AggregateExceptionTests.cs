using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_ARGUMENTEXCEPTION)]
    [TestFixture(TestNameFormat = "AggregateException - {0}")]
    public class AggregateExceptionTests
    {
        private const string DefaultMessage = "One or more errors occurred.";

        private IEnumerable<T> MakeEnumerable<T>(params T[] arr)
        {
            foreach (var x in arr)
                yield return x;
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.AggregateException", typeof(AggregateException).FullName, "Name");
            Assert.True(typeof(AggregateException).IsClass, "IsClass");
            Assert.AreEqual(typeof(Exception), typeof(AggregateException).BaseType, "BaseType");
            object d = new AggregateException();
            Assert.True(d is AggregateException);
            Assert.True(d is Exception);

            var interfaces = typeof(AggregateException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length);
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new AggregateException();
            Assert.True((object)ex is AggregateException, "is AggregateException");
            Assert.True((object)ex.InnerExceptions is ReadOnlyCollection<Exception>, "InnerExceptions is ReadOnlyCollection");
            Assert.AreEqual(0, ex.InnerExceptions.Count, "InnerExceptions.Length");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual(DefaultMessage, ex.Message, "Message");
        }

        [Test]
        public void ConstructorWithIEnumerableInnerExceptionsWorks()
        {
            var inner1 = new Exception("a");
            var inner2 = new Exception("b");

            var ex1 = new AggregateException(MakeEnumerable<Exception>());
            Assert.True((object)ex1 is AggregateException, "ex1 is AggregateException");
            Assert.True(ex1.InnerException == null, "ex1 InnerException");
            Assert.True((object)ex1.InnerExceptions is ReadOnlyCollection<Exception>, "ex1 InnerExceptions is ReadOnlyCollection");
            Assert.AreEqual(0, ex1.InnerExceptions.Count, "ex1 InnerExceptions.Length");
            Assert.AreEqual(DefaultMessage, ex1.Message, "ex1 Message");

            var ex2 = new AggregateException(MakeEnumerable(inner1));
            Assert.True((object)ex2 is AggregateException, "ex2 is AggregateException");
            Assert.True(ReferenceEquals(ex2.InnerException, inner1), "ex2 InnerException");
            Assert.True((object)ex2.InnerExceptions is ReadOnlyCollection<Exception>, "ex2 InnerExceptions is ReadOnlyCollection");
            Assert.AreEqual(1, ex2.InnerExceptions.Count, "ex2 InnerExceptions.Length");
            Assert.True(ReferenceEquals(ex2.InnerExceptions[0], inner1), "ex2 InnerExceptions[0]");
            Assert.AreEqual(DefaultMessage, ex2.Message, "ex2 Message");

            var ex3 = new AggregateException(MakeEnumerable(inner1, inner2));
            Assert.True((object)ex3 is AggregateException, "ex3 is AggregateException");
            Assert.True(ReferenceEquals(ex3.InnerException, inner1), "ex3 InnerException");
            Assert.True((object)ex3.InnerExceptions is ReadOnlyCollection<Exception>, "ex3 InnerExceptions is ReadOnlyCollection");
            Assert.AreEqual(2, ex3.InnerExceptions.Count, "ex3 InnerExceptions.Length");
            Assert.True(ReferenceEquals(ex3.InnerExceptions[0], inner1), "ex3 InnerExceptions[0]");
            Assert.True(ReferenceEquals(ex3.InnerExceptions[1], inner2), "ex3 InnerExceptions[1]");
            Assert.AreEqual(DefaultMessage, ex3.Message, "ex3 Message");
        }

        [Test]
        public void ConstructorWithInnerExceptionArrayWorks()
        {
            var inner1 = new Exception("a");
            var inner2 = new Exception("b");

            var ex1 = new AggregateException(new Exception[0]);
            Assert.True((object)ex1 is AggregateException, "ex1 is AggregateException");
            Assert.True(ex1.InnerException == null, "ex1 InnerException");
            Assert.True((object)ex1.InnerExceptions is ReadOnlyCollection<Exception>, "ex1 InnerExceptions is ReadOnlyCollection");
            Assert.AreEqual(0, ex1.InnerExceptions.Count, "ex1 InnerExceptions.Length");
            Assert.AreEqual(DefaultMessage, ex1.Message, "ex1 Message");

            var ex2 = new AggregateException(inner1);
            Assert.True((object)ex2 is AggregateException, "ex2 is AggregateException");
            Assert.True(ReferenceEquals(ex2.InnerException, inner1), "ex2 InnerException");
            Assert.True((object)ex2.InnerExceptions is ReadOnlyCollection<Exception>, "ex2 InnerExceptions is ReadOnlyCollection");
            Assert.AreEqual(1, ex2.InnerExceptions.Count, "ex2 InnerExceptions.Length");
            Assert.True(ReferenceEquals(ex2.InnerExceptions[0], inner1), "ex2 InnerExceptions[0]");
            Assert.AreEqual(DefaultMessage, ex2.Message, "ex2 Message");

            var ex3 = new AggregateException(inner1, inner2);
            Assert.True((object)ex3 is AggregateException, "ex3 is AggregateException");
            Assert.True(ReferenceEquals(ex3.InnerException, inner1), "ex3 InnerException");
            Assert.True((object)ex3.InnerExceptions is ReadOnlyCollection<Exception>, "ex3 InnerExceptions is ReadOnlyCollection");
            Assert.AreEqual(2, ex3.InnerExceptions.Count, "ex3 InnerExceptions.Length");
            Assert.True(ReferenceEquals(ex3.InnerExceptions[0], inner1), "ex3 InnerExceptions[0]");
            Assert.True(ReferenceEquals(ex3.InnerExceptions[1], inner2), "ex3 InnerExceptions[1]");
            Assert.AreEqual(DefaultMessage, ex3.Message, "ex3 Message");
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new AggregateException("Some message");
            Assert.True((object)ex is AggregateException, "is AggregateException");
            Assert.True((object)ex.InnerExceptions is ReadOnlyCollection<Exception>, "ex1 InnerExceptions is ReadOnlyCollection");
            Assert.AreEqual(0, ex.InnerExceptions.Count, "InnerExceptions.Length");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("Some message", ex.Message, "Message");
        }

        [Test]
        public void ConstructorWithMessageAndIEnumerableInnerExceptionsWorks()
        {
            var inner1 = new Exception("a");
            var inner2 = new Exception("b");

            var ex1 = new AggregateException("Message #1", MakeEnumerable<Exception>());
            Assert.True((object)ex1 is AggregateException, "ex1 is AggregateException");
            Assert.True(ex1.InnerException == null, "ex1 InnerException");
            Assert.True((object)ex1.InnerExceptions is ReadOnlyCollection<Exception>, "ex1 InnerExceptions is ReadOnlyCollection");
            Assert.AreEqual(0, ex1.InnerExceptions.Count, "ex1 InnerExceptions.Length");
            Assert.AreEqual("Message #1", ex1.Message, "ex1 Message");

            var ex2 = new AggregateException("Message #2", MakeEnumerable(inner1));
            Assert.True((object)ex2 is AggregateException, "ex2 is AggregateException");
            Assert.True(ReferenceEquals(ex2.InnerException, inner1), "ex2 InnerException");
            Assert.True((object)ex2.InnerExceptions is ReadOnlyCollection<Exception>, "ex2 InnerExceptions is ReadOnlyCollection");
            Assert.AreEqual(1, ex2.InnerExceptions.Count, "ex2 InnerExceptions.Length");
            Assert.True(ReferenceEquals(ex2.InnerExceptions[0], inner1), "ex2 InnerExceptions[0]");
            Assert.AreEqual("Message #2", ex2.Message, "ex2 Message");

            var ex3 = new AggregateException("Message #3", MakeEnumerable(inner1, inner2));
            Assert.True((object)ex3 is AggregateException, "ex3 is AggregateException");
            Assert.True(ReferenceEquals(ex3.InnerException, inner1), "ex3 InnerException");
            Assert.True((object)ex3.InnerExceptions is ReadOnlyCollection<Exception>, "ex3 InnerExceptions is ReadOnlyCollection");
            Assert.AreEqual(2, ex3.InnerExceptions.Count, "ex3 InnerExceptions.Length");
            Assert.True(ReferenceEquals(ex3.InnerExceptions[0], inner1), "ex3 InnerExceptions[0]");
            Assert.True(ReferenceEquals(ex3.InnerExceptions[1], inner2), "ex3 InnerExceptions[1]");
            Assert.AreEqual("Message #3", ex3.Message, "ex3 Message");
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionArrayWorks()
        {
            var inner1 = new Exception("a");
            var inner2 = new Exception("b");

            var ex1 = new AggregateException("Message #1", new Exception[0]);
            Assert.True((object)ex1 is AggregateException, "ex1 is AggregateException");
            Assert.True(ex1.InnerException == null, "ex1 InnerException");
            Assert.True((object)ex1.InnerExceptions is ReadOnlyCollection<Exception>, "ex1 InnerExceptions is ReadOnlyCollection");
            Assert.AreEqual(0, ex1.InnerExceptions.Count, "ex1 InnerExceptions.Length");
            Assert.AreEqual("Message #1", ex1.Message, "ex1 Message");

            var ex2 = new AggregateException("Message #2", inner1);
            Assert.True((object)ex2 is AggregateException, "ex2 is AggregateException");
            Assert.True(ReferenceEquals(ex2.InnerException, inner1), "ex2 InnerException");
            Assert.AreEqual(1, ex2.InnerExceptions.Count, "ex2 InnerExceptions.Length");
            Assert.True((object)ex2.InnerExceptions is ReadOnlyCollection<Exception>, "ex2 InnerExceptions is ReadOnlyCollection");
            Assert.True(ReferenceEquals(ex2.InnerExceptions[0], inner1), "ex2 InnerExceptions[0]");
            Assert.AreEqual("Message #2", ex2.Message, "ex2 Message");

            var ex3 = new AggregateException("Message #3", inner1, inner2);
            Assert.True((object)ex3 is AggregateException, "ex3 is AggregateException");
            Assert.True(ReferenceEquals(ex3.InnerException, inner1), "ex3 InnerException");
            Assert.True((object)ex3.InnerExceptions is ReadOnlyCollection<Exception>, "ex3 InnerExceptions is ReadOnlyCollection");
            Assert.AreEqual(2, ex3.InnerExceptions.Count, "ex3 InnerExceptions.Length");
            Assert.True(ReferenceEquals(ex3.InnerExceptions[0], inner1), "ex3 InnerExceptions[0]");
            Assert.True(ReferenceEquals(ex3.InnerExceptions[1], inner2), "ex3 InnerExceptions[1]");
            Assert.AreEqual("Message #3", ex3.Message, "ex3 Message");
        }

        [Test]
        public void FlattenWorks()
        {
            Exception ex0 = new Exception("ex0"),
    ex1 = new Exception("ex1"),
    ex2 = new Exception("ex2"),
    ex3 = new Exception("ex3"),
    ex4 = new Exception("ex4"),
    ex5 = new Exception("ex5"),
    ex6 = new Exception("ex6");

            var ae = new AggregateException("The message",
                ex0,
                ex1,
                new AggregateException(ex2, new AggregateException(new AggregateException("X"), new AggregateException(ex3, ex4))),
                new AggregateException(ex5, ex6));

            var actual = ae.Flatten();

            Assert.True((object)actual is AggregateException, "is AggregateException");
            Assert.AreEqual("The message", actual.Message, "message");
            Assert.AreEqual(7, actual.InnerExceptions.Count, "Count");
            Assert.True(ReferenceEquals(actual.InnerExceptions[0], ex0), "0");
            Assert.True(ReferenceEquals(actual.InnerExceptions[1], ex1), "1");
            Assert.True(ReferenceEquals(actual.InnerExceptions[2], ex2), "2");
            Assert.True(ReferenceEquals(actual.InnerExceptions[3], ex5), "5");
            Assert.True(ReferenceEquals(actual.InnerExceptions[4], ex6), "6");
            Assert.True(ReferenceEquals(actual.InnerExceptions[5], ex3), "3");
            Assert.True(ReferenceEquals(actual.InnerExceptions[6], ex4), "4");
        }
    }
}