using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4.Exceptions
{
    [TestFixture(TestNameFormat = "ErrorExceptionTests - {0}")]
    public class ErrorExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect_SPI_1564()
        {
            Assert.AreEqual("Bridge.ErrorException", typeof(ErrorException).FullName, "Name");
            Assert.True(typeof(ErrorException).IsClass, "IsClass");
            Assert.AreEqual(typeof(Exception), typeof(ErrorException).BaseType, "BaseType");
            // #1564
            object d = null;
            TestHelper.Safe(() => d = new ErrorException());
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            bool b1 = false;
            TestHelper.Safe(() => b1 = d is ErrorException);
            Assert.True(b1, "is InvalidOperationException");
            bool b2 = false;
            TestHelper.Safe(() => b2 = d is Exception);
            Assert.True(b2, "is Exception");

            var interfaces = typeof(ErrorException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void ErrorOnlyConstructorWorks_SPI_1564()
        {
            //var err = new Error
            //{
            //    Message = "Some message"
            //};
            Error err = null;
            var ex = new ErrorException("Some message");
            Assert.True((object)ex is ErrorException, "is ErrorException");
            Assert.True(ex.InnerException == null, "InnerException");
            // #1564
            Assert.True(ReferenceEquals(ex.Error, err), "Error");
            Assert.AreEqual("Some message", ex.Message, "Message");
            Assert.AreEqual(err.Stack, ex.StackTrace, "Stack");
        }

        //[Test]
        //public void ErrorAndMessageConstructorWorks()
        //{
        //    var err = new Error
        //    {
        //        Message = "Some message"
        //    };
        //    var ex = new ErrorException(err, "Overridden message");
        //    Assert.True((object)ex is ErrorException, "is ErrorException");
        //    Assert.True(ex.InnerException == null, "InnerException");
        //    Assert.True(ReferenceEquals(ex.Error, err), "Error");
        //    Assert.AreEqual(ex.Message, "Overridden message", "Message");
        //    Assert.AreEqual(ex.StackTrace, err.Stack, "Stack");
        //}

        [Test]
        public void ErrorAndMessageAndInnerExceptionConstructorWorks_SPI_1564()
        {
            var inner = new Exception("a");
            //var err = new Error
            //{
            //    Message = "Some message"
            //};
            Error err = null;
            var ex = new ErrorException(/*err,*/ "Overridden message", inner);
            Assert.True((object)ex is ErrorException, "is ErrorException");
            // #1564
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.True(ReferenceEquals(ex.Error, err), "Error");
            Assert.AreEqual("Overridden message", ex.Message, "Message");
            Assert.AreEqual(err.Stack, ex.StackTrace, "Stack");
        }
    }
}