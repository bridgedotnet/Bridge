using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_NOTIMPLEMENTEDEXCEPTION)]
    [TestFixture(TestNameFormat = "NotImplementedException - {0}")]
    public class NotImplementedExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(NotImplementedException).GetClassName(), "Bridge.NotImplementedException", "Name");
            object d = new NotImplementedException();
            Assert.True(d is NotImplementedException, "is NotImplementedException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new NotImplementedException();
            Assert.True((object)ex is NotImplementedException, "is NotImplementedException");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "The method or operation is not implemented.");
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new NotImplementedException("The message");
            Assert.True((object)ex is NotImplementedException, "is NotImplementedException");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new NotImplementedException("The message", inner);
            Assert.True((object)ex is NotImplementedException, "is NotImplementedException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }
    }
}
