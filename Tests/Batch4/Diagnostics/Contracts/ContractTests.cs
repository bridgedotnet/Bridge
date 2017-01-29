#define CONTRACTS_FULL

using Bridge.Test.NUnit;
using System;
using System.Diagnostics.Contracts;

namespace Bridge.ClientTest.Batch4.Diagnostics.Contracts
{
    [TestFixture(TestNameFormat = "ContractTests - {0}")]
    public class ContractTests
    {
        private void AssertNoExceptions(Action block)
        {
            try
            {
                block();
                Bridge.Test.NUnit.Assert.True(true, "No Exception thrown.");
            }
            catch (Exception ex)
            {
                Bridge.Test.NUnit.Assert.Fail("Unexpected Exception " + ex);
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
                    Bridge.Test.NUnit.Assert.Fail("Unexpected Exception");

                Bridge.Test.NUnit.Assert.True(cex.Kind == expectedKind, "Kind");
                Bridge.Test.NUnit.Assert.True(cex.Message == expectedMessage, "Message");
                Bridge.Test.NUnit.Assert.True(cex.UserMessage == expectedUserMessage, "UserMessage");
                if (cex.InnerException != null)
                    Bridge.Test.NUnit.Assert.True(cex.InnerException.Equals(expectedInnerException), "InnerException");
                else if (cex.InnerException == null && expectedInnerException != null)
                    Bridge.Test.NUnit.Assert.Fail("InnerException");
            }
        }

        [Test]
        public void Assume()
        {
            int a = 0;
            Bridge.Test.NUnit.Assert.Throws<ContractException>(() => Contract.Assume(a != 0), "ContractException");
            AssertNoExceptions(() => Contract.Assume(a == 0));
            AssertException(() => Contract.Assume(a == 99), ContractFailureKind.Assume, "Contract 'a === 99' failed", null, null);
        }

        [Test]
        public void AssumeWithUserMessage()
        {
            int a = 0;
            Bridge.Test.NUnit.Assert.Throws<ContractException>(() => Contract.Assume(a != 0, "is not zero"), "ContractException");
            AssertNoExceptions(() => Contract.Assume(a == 0, "is zero"));
            AssertException(() => Contract.Assume(a == 99, "is 99"), ContractFailureKind.Assume, "Contract 'a === 99' failed: is 99", "is 99", null);
        }

        [Test]
        public void Assert()
        {
            int a = 0;
            Bridge.Test.NUnit.Assert.Throws<ContractException>(() => Contract.Assert(a != 0), "ContractException");
            AssertNoExceptions(() => Contract.Assert(a == 0));
            AssertException(() => Contract.Assert(a == 99), ContractFailureKind.Assert, "Contract 'a === 99' failed", null, null);
        }

        [Test]
        public void AssertWithUserMessage()
        {
            int a = 0;
            Bridge.Test.NUnit.Assert.Throws<ContractException>(() => Contract.Assert(a != 0, "is not zero"), "ContractException");
            AssertNoExceptions(() => Contract.Assert(a == 0, "is zero"));
            AssertException(() => Contract.Assert(a == 99, "is 99"), ContractFailureKind.Assert, "Contract 'a === 99' failed: is 99", "is 99", null);
        }

        [Test]
        public void Requires()
        {
            int a = 0;
            Bridge.Test.NUnit.Assert.Throws<ContractException>(() => Contract.Requires(a != 0), "ContractException");
            AssertNoExceptions(() => Contract.Requires(a == 0));
            AssertException(() => Contract.Requires(a == 99), ContractFailureKind.Precondition, "Contract 'a === 99' failed", null, null);
        }

        [Test]
        public void RequiresWithUserMessage()
        {
            int a = 0;
            Bridge.Test.NUnit.Assert.Throws<ContractException>(() => Contract.Requires(a != 0, "must not be zero"), "ContractException");
            AssertNoExceptions(() => Contract.Requires(a == 0, "can only be zero"));
            AssertException(() => Contract.Requires(a == 99, "can only be 99"), ContractFailureKind.Precondition, "Contract 'a === 99' failed: can only be 99", "can only be 99", null);
        }

        [Test]
        public void RequiresWithTypeException()
        {
            int a = 0;
            Bridge.Test.NUnit.Assert.Throws<Exception>(() => Contract.Requires<Exception>(a != 0), "Exception");
            AssertNoExceptions(() => Contract.Requires<Exception>(a == 0));
        }

        [Test]
        public void RequiredWithTypeExceptionAndUserMessage()
        {
            int a = 0;
            Bridge.Test.NUnit.Assert.Throws<Exception>(() => Contract.Requires<Exception>(a != 0, "must not be zero"), "Exception");
            AssertNoExceptions(() => Contract.Requires<Exception>(a == 0, "can only be zero"));
        }

        [Test]
        public void ForAll()
        {
            Bridge.Test.NUnit.Assert.Throws<ArgumentNullException>(() => Contract.ForAll(2, 5, null), "ArgumentNullException");
            AssertNoExceptions(() => Contract.ForAll(2, 5, s => s != 3));
            Bridge.Test.NUnit.Assert.False(Contract.ForAll(2, 5, s => s != 3));
            Bridge.Test.NUnit.Assert.True(Contract.ForAll(2, 5, s => s != 6));
        }

        [Test]
        public void ForAllWithCollection()
        {
            Bridge.Test.NUnit.Assert.Throws<ArgumentNullException>(() => Contract.ForAll(new[] { 1, 2, 3 }, null), "ArgumentNullException");
            AssertNoExceptions(() => Contract.ForAll(new[] { 1, 2, 3 }, s => s != 3));
            Bridge.Test.NUnit.Assert.False(Contract.ForAll(new[] { 1, 2, 3 }, s => s != 3));
            Bridge.Test.NUnit.Assert.True(Contract.ForAll(new[] { 1, 2, 3 }, s => s != 6));
        }

        [Test]
        public void Exists()
        {
            Bridge.Test.NUnit.Assert.Throws<ArgumentNullException>(() => Contract.Exists(1, 5, null), "ArgumentNullException");
            AssertNoExceptions(() => Contract.Exists(1, 5, s => s == 3));
            Bridge.Test.NUnit.Assert.True(Contract.Exists(1, 5, s => s == 3));
            Bridge.Test.NUnit.Assert.False(Contract.Exists(1, 5, s => s == 6));
        }

        [Test]
        public void ExistsWithCollection()
        {
            Bridge.Test.NUnit.Assert.Throws<ArgumentNullException>(() => Contract.Exists(new[] { 1, 2, 3 }, null), "ArgumentNullException");
            AssertNoExceptions(() => Contract.Exists(new[] { 1, 2, 3 }, s => s == 3));
            Bridge.Test.NUnit.Assert.True(Contract.Exists(new[] { 1, 2, 3 }, s => s == 3));
            Bridge.Test.NUnit.Assert.False(Contract.Exists(new[] { 1, 2, 3 }, s => s == 6));
        }
    }
}