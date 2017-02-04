using System;
using System.Linq;
using System.Collections.Generic;

using Bridge.Contract;
using Bridge.Translator.Tests.Helpers;


using NUnit.Framework;
using NSubstitute;

namespace Bridge.Translator.Tests
{
    class AssemblyDefinitionTests
    {
        protected Mono.Cecil.AssemblyDefinition TestAssembly
        {
            get; set;
        }

        [OneTimeSetUp]
        public void GetTestAssembly()
        {
            TestAssembly = MonoCecilTypeSystemHelper.GetTestAssemlyDefinition();
        }

        [SetUp]
        public void CheckAssemblyFound()
        {
            if (TestAssembly == null)
            {
                Assert.Fail("Did not find TestAssembly");
            }
        }

        protected IList<Mono.Cecil.TypeDefinition> GetTypesToTest(string parentType)
        {
            return MonoCecilTypeSystemHelper.GetNestedTypes(TestAssembly, parentType);
        }

        protected void ShouldFailTests(string parentType, string exceptionMessage)
        {
            var types = GetTypesToTest(parentType);

            if (types.Count == 0)
            {
                Assert.Fail("Did not found types to test: " + parentType);
            }

            var v = new Validator();

            foreach (var type in types)
            {
                var expectedMessage = string.Format(exceptionMessage, type);

                try
                {
                    v.CheckMethods(type, null);
                    Assert.Fail(type.Name + " should have failed with error message " + expectedMessage);
                }
                catch (Exception ex)
                {
                    Assert.True(ex is TranslatorException, "Failed with " + ex.GetType().Name);

                    Assert.AreEqual(expectedMessage, ex.Message);
                }
            }
        }

        class ValidatorTests
        {
            [TestFixture]
            class ObjectLiteralTests : AssemblyDefinitionTests
            {
                [Test]
                public void ObjectLiteralShouldFailNoVirtualMethodsTest()
                {
                    ShouldFailTests(TestAssemblyHelper.TestClassNames.ISSUES_N2276_SHOULD_FAIL, Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_NO_VIRTUAL_METHODS);
                }
            }
        }
    }
}
