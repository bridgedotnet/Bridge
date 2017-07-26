using Bridge.Test.NUnit;
using System;
using System.Diagnostics.Contracts;

namespace Bridge.ClientTest.Batch4.Exceptions
{
    // There is no ContractException type in .Net
    [TestFixture(TestNameFormat = "ContractExceptionTests - {0}")]
    public class ContractExceptionTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Diagnostics.Contracts.ContractException", typeof(ContractException).FullName, "Name");
            Assert.True(typeof(ContractException).IsClass, "IsClass");
            Assert.AreEqual(typeof(Exception), typeof(ContractException).BaseType, "BaseType");
            object d = new ContractException(ContractFailureKind.Assert, "Contract failed", null, null, null);
            Assert.True(d is ContractException, "is ContractException");
            Assert.True(d is Exception, "is Exception");

            var interfaces = typeof(ContractException).GetInterfaces();
            Assert.AreEqual(0, interfaces.Length, "Interfaces length");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var ex = new ContractException(ContractFailureKind.Assert, "Contract failed", null, null, null);
            Assert.True((object)ex is ContractException, "is ContractException");
            Assert.True(ex.Kind == ContractFailureKind.Assert, "ContractFailureKind");
            Assert.True(ex.InnerException == null, "InnerException");
            Assert.True(ex.Condition == null, "Condition");
            Assert.True(ex.UserMessage == null, "UserMessage");
            Assert.AreEqual("Contract failed", ex.Message);
        }
    }
}