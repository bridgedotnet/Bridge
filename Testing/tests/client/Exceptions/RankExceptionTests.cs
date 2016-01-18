using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_ARGUMENTEXCEPTION)]
    [TestFixture(TestNameFormat = "RankException - {0}")]
    public class RankExceptionTests
    {
        private const string DefaultMessage = "Attempted to operate on an array with the incorrect number of dimensions.";

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(RankException).GetClassName(), "Bridge.RankException", "Name");
            object d = new RankException();
            Assert.True(d is RankException);
            Assert.True(d is Exception);
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new RankException();
            Assert.True((object)ex is RankException, "is ArgumentException");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, DefaultMessage);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new RankException("The message");
            Assert.True((object)ex is RankException, "is RankException");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }
    }
}
