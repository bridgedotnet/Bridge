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
            TestAssembly = MonoCecilAssemblyHelper.GetTestAssemlyDefinition();
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

        protected void ShouldFailTest(string parentType, Action<Mono.Cecil.TypeDefinition> testMethod, Func<Mono.Cecil.TypeDefinition, string> expectedMessageMethod)
        {
            var types = GetTypesToTest(parentType);

            if (types.Count == 0)
            {
                Assert.Fail("Did not found types to test: " + parentType);
            }

            string expectedMessage = null;

            foreach (var type in types)
            {
                Exception caughtException = null;

                try
                {
                    expectedMessage = expectedMessageMethod(type);
                    testMethod(type);

                    Assert.Fail("Did not throw exception. " + type.Name + " should have failed with error message: " + expectedMessage);
                }
                catch (AssertionException)
                {
                    throw;
                }
                catch (Exception ex)
                {
                    caughtException = ex;
                }

                Assert.AreEqual(expectedMessage, caughtException.Message);
            }
        }

        class ValidatorTests
        {
            class CheckTypeTests : AssemblyDefinitionTests
            {
                protected void CheckTypeShouldFailTest(string parentType, Func<Mono.Cecil.TypeDefinition, string> expectedMessageMethod)
                {
                    ShouldFailTest(
                        parentType,
                        (type) =>
                        {
                            var v = new Validator();
                            v.CheckType(type, null);
                        },
                        expectedMessageMethod
                    );
                }

                protected void CheckTypeShouldFailTest(string parentType, string expectedMessageFormat)
                {
                    ShouldFailTest(
                        parentType,
                        (type) =>
                        {
                            var v = new Validator();
                            v.CheckType(type, null);
                        },
                        (type) =>
                        {
                            return string.Format(expectedMessageFormat, type);
                        }
                    );
                }
            }

            [TestFixture]
            class CheckObjectLiteralTests : CheckTypeTests
            {
                [Test]
                public void ObjectLiteralShouldFailNoVirtualMethodsTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2276.ShouldFail.NO_VIRTUAL_METHODS,
                        Constants.Messages.Exceptions.OBJECT_LITERAL_NO_VIRTUAL_METHODS
                    );
                }

                [Test]
                public void ObjectLiteralShouldFailPlainNoCreateModeConstructorTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2276.ShouldFail.PLAIN_NO_CREATE_MODE_CUSTOM_CONSTRUCTOR,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_PLAIN_NO_CREATE_MODE_CUSTOM_CONSTRUCTOR
                    );
                }

                [Test]
                public void ObjectLiteralShouldFailPlainCustomConstructorTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2276.ShouldFail.PLAIN_CUSTOM_CONSTRUCTOR,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_PLAIN_CUSTOM_CONSTRUCTOR
                    );
                }

                [Test]
                public void ObjectLiteralShouldFailPlainInheritanceTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2276.ShouldFail.PLAIN_INHERITANCE,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_PLAIN_INHERITANCE
                    );
                }

                [Test]
                public void ObjectLiteralShouldFailConstructorInheritanceTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2276.ShouldFail.CONSTRUCTOR_INHERITANCE,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_CONSTRUCTOR_INHERITANCE
                    );
                }

                [Test]
                public void ObjectLiteralShouldFailInterfaceNoOverloadMethodsTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2276.ShouldFail.INTERFACE_NO_OVERLOAD_METHODS,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_INTERFACE_NO_OVERLOAD_METHODS
                    );
                }

                [Test]
                public void ObjectLiteralShouldFailInterfaceNoEventsTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2276.ShouldFail.INTERFACE_NO_EVENTS,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_INTERFACE_NO_EVENTS
                    );
                }

                [Test]
                public void ObjectLiteralShouldFailInterfaceNoExplicitImplementationTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2276.ShouldFail.INTERFACE_NO_EXPLICIT_IMPLEMENTATION,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_INTERFACE_NO_EXPLICIT_IMPLEMENTATION
                    );
                }

                [Test]
                public void ObjectLiteralShouldFailInterfaceInheritanceTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2276.ShouldFail.INTERFACE_INHERITANCE,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_INTERFACE_INHERITANCE
                    );
                }
            }

            [TestFixture]
            class CheckExternalObjectLiteralTests : CheckTypeTests
            {
                [Test]
                public void ExternalObjectLiteralShouldFailNoVirtualMethodsTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2710.ShouldFail.NO_VIRTUAL_METHODS,
                        Constants.Messages.Exceptions.OBJECT_LITERAL_NO_VIRTUAL_METHODS
                    );
                }

                [Test]
                public void ExternalObjectLiteralShouldFailPlainNoCreateModeConstructorTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2710.ShouldFail.PLAIN_NO_CREATE_MODE_CUSTOM_CONSTRUCTOR,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_PLAIN_NO_CREATE_MODE_CUSTOM_CONSTRUCTOR
                    );
                }

                [Test]
                public void ExternalObjectLiteralShouldFailPlainCustomConstructorTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2710.ShouldFail.PLAIN_CUSTOM_CONSTRUCTOR,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_PLAIN_CUSTOM_CONSTRUCTOR
                    );
                }

                [Test]
                public void ExternalObjectLiteralShouldFailPlainInheritanceTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2710.ShouldFail.PLAIN_INHERITANCE,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_PLAIN_INHERITANCE
                    );
                }

                [Test]
                public void ExternalObjectLiteralShouldFailConstructorInheritanceTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2710.ShouldFail.CONSTRUCTOR_INHERITANCE,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_CONSTRUCTOR_INHERITANCE
                    );
                }

                [Test]
                public void ExternalObjectLiteralShouldFailInterfaceNoOverloadMethodsTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2710.ShouldFail.INTERFACE_NO_OVERLOAD_METHODS,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_INTERFACE_NO_OVERLOAD_METHODS
                    );
                }

                [Test]
                public void ExternalObjectLiteralShouldFailInterfaceNoEventsTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2710.ShouldFail.INTERFACE_NO_EVENTS,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_INTERFACE_NO_EVENTS
                    );
                }

                [Test]
                public void ExternalObjectLiteralShouldFailInterfaceNoExplicitImplementationTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2710.ShouldFail.INTERFACE_NO_EXPLICIT_IMPLEMENTATION,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_INTERFACE_NO_EXPLICIT_IMPLEMENTATION
                    );
                }

                [Test]
                public void ExternalObjectLiteralShouldFailInterfaceInheritanceTest()
                {
                    CheckTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2710.ShouldFail.INTERFACE_INHERITANCE,
                        Bridge.Translator.Constants.Messages.Exceptions.OBJECT_LITERAL_INTERFACE_INHERITANCE
                    );
                }
            }
        }
    }
}
