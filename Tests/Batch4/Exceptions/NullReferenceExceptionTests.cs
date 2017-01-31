using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4.Exceptions
{
    [TestFixture(TestNameFormat = "NullReferenceExceptionTests - {0}")]
    public class NullReferenceExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.NullReferenceException", typeof(NullReferenceException).FullName, "Name");
            Assert.True(typeof(NullReferenceException).IsClass, "IsClass");
            Assert.AreEqual(typeof(Exception), typeof(NullReferenceException).BaseType, "BaseType");
            object d = new NullReferenceException();
            Assert.True(d is NullReferenceException, "is NullReferenceException");
            Assert.True(d is Exception, "is Exception");

            var interfaces = typeof(NullReferenceException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new NullReferenceException();
            Assert.True((object)ex is NullReferenceException, "is NullReferenceException");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("Object is null.", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageWorks()
        {
            var ex = new NullReferenceException("The message");
            Assert.True((object)ex is NullReferenceException, "is NullReferenceException");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test]
        public void ConstructorWithMessageAndInnerExceptionWorks()
        {
            var inner = new Exception("a");
            var ex = new NullReferenceException("The message", inner);
            Assert.True((object)ex is NullReferenceException, "is NullReferenceException");
            Assert.True(ReferenceEquals(ex.InnerException, inner), "InnerException");
            Assert.AreEqual("The message", ex.Message);
        }

        [Test(ExpectedCount = 2)]
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
                Assert.True(inner is ErrorException, "Inner is ErrorException");
            }
            catch (Exception ex)
            {
                Assert.Fail("Expected NullReferenceException, got type " + ex.GetType());
            }
        }
    }
}