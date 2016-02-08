#define CONTRACTS_FULL

using System;
using System.Diagnostics;
using System.Diagnostics.Contracts;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.Diagnostics.Contracts
{
    [Category(Constants.MODULE_DIAGNOSTICS)]
    [TestFixture(TestNameFormat = "Contract - {0}")]
    public class ContractTests
    {
        private void AssertNoExceptions(Action block)
        {
            try
            {
                block();
                Assert.True(true, "No Exception thrown.");
            }
            catch (Exception ex)
            {
                Assert.Fail("Unexpected Exception " + ex);
            }
        }

        private void AssertException(Action block, ContractFailureKind expectedKind, string expectedMessage, string expectedUserMessage, Exception expectedInnerException)
        {
            try
            {
                block();
            }
            catch (Exception ex)
            {
                var cex = ex as ContractException;
                if (cex == null)
                    Assert.Fail("Unexpected Exception");

                Assert.True(cex.Kind == expectedKind, "Kind");
                Assert.True(cex.Message == expectedMessage, "Message");
                Assert.True(cex.UserMessage == expectedUserMessage, "UserMessage");
                if (cex.InnerException != null)
                    Assert.True(cex.InnerException.Equals(expectedInnerException), "InnerException");
                else if (cex.InnerException == null && expectedInnerException != null)
                    Assert.Fail("InnerException");
            }
        }

        [Test]
        public void Assume()
        {
            int a = 0;
            Assert.Throws(() => Contract.Assume(a != 0), error => error is ContractException, "ContractException");
            AssertNoExceptions(() => Contract.Assume(a == 0));
            AssertException(() => Contract.Assume(a == 99), ContractFailureKind.Assume, "Contract 'a === 99' failed", null, null);
        }

        [Test]
        public void AssumeWithUserMessage()
        {
            int a = 0;
            Assert.Throws(() => Contract.Assume(a != 0, "is not zero"), error => error is ContractException, "ContractException");
            AssertNoExceptions(() => Contract.Assume(a == 0, "is zero"));
            AssertException(() => Contract.Assume(a == 99, "is 99"), ContractFailureKind.Assume, "Contract 'a === 99' failed: is 99", "is 99", null);
        }

        [Test]
        public void _Assert()
        {
            int a = 0;
            Assert.Throws(() => Contract.Assert(a != 0), error => error is ContractException, "ContractException");
            AssertNoExceptions(() => Contract.Assert(a == 0));
            AssertException(() => Contract.Assert(a == 99), ContractFailureKind.Assert, "Contract 'a === 99' failed", null, null);
        }

        [Test]
        public void AssertWithUserMessage()
        {
            int a = 0;
            Assert.Throws(() => Contract.Assert(a != 0, "is not zero"), error => error is ContractException, "ContractException");
            AssertNoExceptions(() => Contract.Assert(a == 0, "is zero"));
            AssertException(() => Contract.Assert(a == 99, "is 99"), ContractFailureKind.Assert, "Contract 'a === 99' failed: is 99", "is 99", null);
        }

        [Test]
        public void Requires()
        {
            int a = 0;
            Assert.Throws(() => Contract.Requires(a != 0), error => error is ContractException, "ContractException");
            AssertNoExceptions(() => Contract.Requires(a == 0));
            AssertException(() => Contract.Requires(a == 99), ContractFailureKind.Precondition, "Contract 'a === 99' failed", null, null);
        }

        [Test]
        public void RequiresWithUserMessage()
        {
            int a = 0;
            Assert.Throws(() => Contract.Requires(a != 0, "must not be zero"), error => error is ContractException, "ContractException");
            AssertNoExceptions(() => Contract.Requires(a == 0, "can only be zero"));
            AssertException(() => Contract.Requires(a == 99, "can only be 99"), ContractFailureKind.Precondition, "Contract 'a === 99' failed: can only be 99", "can only be 99", null);
        }

        [Test]
        public void RequiresWithTypeException()
        {
            int a = 0;
            Assert.Throws(() => Contract.Requires<Exception>(a != 0), "Exception");
            AssertNoExceptions(() => Contract.Requires<Exception>(a == 0));
        }

        [Test]
        public void RequiredWithTypeExceptionAndUserMessage()
        {
            int a = 0;
            Assert.Throws(() => Contract.Requires<Exception>(a != 0, "must not be zero"), "Exception");
            AssertNoExceptions(() => Contract.Requires<Exception>(a == 0, "can only be zero"));
        }

        [Test]
        public void ForAll()
        {
            Assert.Throws(() => Contract.ForAll(2, 5, null), error => error is ArgumentNullException, "ArgumentNullException");
            AssertNoExceptions(() => Contract.ForAll(2, 5, s => s != 3));
            Assert.False(Contract.ForAll(2, 5, s => s != 3));
            Assert.True(Contract.ForAll(2, 5, s => s != 6));
        }

        [Test]
        public void ForAllWithCollection()
        {
            Assert.Throws(() => Contract.ForAll(new[] { 1, 2, 3 }, null), error => error is ArgumentNullException, "ArgumentNullException");
            AssertNoExceptions(() => Contract.ForAll(new[] { 1, 2, 3 }, s => s != 3));
            Assert.False(Contract.ForAll(new[] { 1, 2, 3 }, s => s != 3));
            Assert.True(Contract.ForAll(new[] { 1, 2, 3 }, s => s != 6));
        }

        [Test]
        public void Exists()
        {
            Assert.Throws(() => Contract.Exists(1, 5, null), error => error is ArgumentNullException, "ArgumentNullException");
            AssertNoExceptions(() => Contract.Exists(1, 5, s => s == 3));
            Assert.True(Contract.Exists(1, 5, s => s == 3));
            Assert.False(Contract.Exists(1, 5, s => s == 6));
        }

        [Test]
        public void ExistsWithCollection()
        {
            Assert.Throws(() => Contract.Exists(new[] { 1, 2, 3 }, null), error => error is ArgumentNullException, "ArgumentNullException");
            AssertNoExceptions(() => Contract.Exists(new[] { 1, 2, 3 }, s => s == 3));
            Assert.True(Contract.Exists(new[] { 1, 2, 3 }, s => s == 3));
            Assert.False(Contract.Exists(new[] { 1, 2, 3 }, s => s == 6));
        }
    }
}
