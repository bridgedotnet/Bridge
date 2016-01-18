using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.Exceptions
{
    [Category(Constants.MODULE_NULLREFERENCEEXCEPTION)]
    [TestFixture(TestNameFormat = "NullReferenceException - {0}")]
    public class NullReferenceExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(NullReferenceException).GetClassName(), "Bridge.NullReferenceException", "Name");
            object d = new NullReferenceException();
            Assert.True(d is NullReferenceException, "is NullReferenceException");
            Assert.True(d is Exception, "is Exception");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new NullReferenceException();
            Assert.True((object)ex is NullReferenceException, "is NullReferenceException");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "Object is null.");
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new NullReferenceException("The message");
            Assert.True((object)ex is NullReferenceException, "is NullReferenceException");
            Assert.AreEqual(ex.InnerException, Script.Undefined, "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new NullReferenceException("The message", inner);
            Assert.True((object)ex is NullReferenceException, "is NullReferenceException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual(ex.Message, "The message");
        }

        [Test(Name = "NullReferenceException - {0}", ExpectedCount = 1)]
        public void AccessingAFieldOnANullObjectCausesANullReferenceException()
        {
            try
            {
                dynamic d = null;
#pragma warning disable 219
                int x = d.someField;
#pragma warning restore 219
                Assert.Fail("A NullReferenceException should have been thrown");
            }
            catch (NullReferenceException ex)
            {
                Exception inner = ex.InnerException;
                Assert.NotNull(inner, "Inner Exception");
            }
            catch (Exception ex)
            {
                Assert.Fail("Expected NullReferenceException, got type " + ex.GetType());
            }
        }
    }
}
