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

        protected IList<Mono.Cecil.TypeDefinition> GetCecilTypesToTest(string parentType)
        {
            return MonoCecilTypeSystemHelper.GetNestedTypes(TestAssembly, parentType);
        }

        protected IList<ICSharpCode.NRefactory.TypeSystem.ITypeDefinition> GetNRefactoryTypesToTest(string parentType)
        {
            return NRefactoryTypeSystemHelper.GetNestedTypes(TestAssembly, parentType);
        }

        protected void ShouldFailTest(string parentType, Action<Mono.Cecil.TypeDefinition> testMethod, Func<Mono.Cecil.TypeDefinition, string> expectedMessageMethod)
        {
            var types = GetCecilTypesToTest(parentType);

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

        protected void ShouldFailTest(string parentType, Action<ICSharpCode.NRefactory.TypeSystem.ITypeDefinition> testMethod, Func<ICSharpCode.NRefactory.TypeSystem.ITypeDefinition, string> expectedMessageMethod)
        {
            var types = GetNRefactoryTypesToTest(parentType);

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

        protected void CheckTypeResultTest(string parentType, Func<Mono.Cecil.TypeDefinition, object> testMethod, object expectedResult, Func<Mono.Cecil.TypeDefinition, string> message = null)
        {
            var types = GetCecilTypesToTest(parentType);

            if (types.Count == 0)
            {
                Assert.Fail("Did not found types to test: " + parentType);
            }

            foreach (var type in types)
            {
                string testMessage = message != null ? message(type) : string.Empty;

                var result = testMethod(type);

                Assert.AreEqual(expectedResult, result, testMessage);
            }
        }

        protected void CheckTypeResultTest(string parentType, Func<ICSharpCode.NRefactory.TypeSystem.ITypeDefinition, object> testMethod, object expectedResult, Func<ICSharpCode.NRefactory.TypeSystem.ITypeDefinition, string> message = null)
        {
            var types = GetNRefactoryTypesToTest(parentType);

            if (types.Count == 0)
            {
                Assert.Fail("Did not found types to test: " + parentType);
            }

            foreach (var type in types)
            {
                string testMessage = message != null ? message(type) : string.Empty;

                var result = testMethod(type);

                Assert.AreEqual(expectedResult, result, testMessage);
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

                protected void IsVirtualTypeShouldFailTest(string parentType, string expectedMessageFormat)
                {
                    ShouldFailTest(
                        parentType,
                        (ICSharpCode.NRefactory.TypeSystem.ITypeDefinition type) =>
                        {
                            var v = new Validator();
                            v.IsVirtualType(type);
                        },
                        (type) =>
                        {
                            return string.Format(expectedMessageFormat, type.FullName);
                        }
                    );
                }

                protected void IsExternalTypeTest(string parentType, bool expected)
                {
                    CheckTypeResultTest(
                        parentType,
                        (Mono.Cecil.TypeDefinition type) =>
                        {
                            var v = new Validator();
                            return v.IsExternalType(type);
                        },
                        expected,
                        (type) => string.Format("Type {0} should {1}be recognized as external", type, expected ? "" : "not ")
                    );
                }

                protected void IsVirtualTypeTest(string parentType, bool expected)
                {
                    CheckTypeResultTest(
                        parentType,
                        (ICSharpCode.NRefactory.TypeSystem.ITypeDefinition type) =>
                        {
                            var v = new Validator();
                            return v.IsVirtualType(type);
                        },
                        expected,
                        (type) => string.Format("Type {0} should be {1}recognized as [Virtual]", type, expected ? "" : "not ")
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

            [TestFixture]
            class CheckVirtualClass : CheckTypeTests
            {
                [Test]
                public void VirtualClassShouldFailWhenNestedClassesTest()
                {
                    IsVirtualTypeShouldFailTest(
                        TestAssemblyHelper.TestClassNames.Issues.N2795.ShouldFail.NO_NESTED_TYPES,
                        Constants.Messages.Exceptions.VIRTUAL_CLASS_NO_NESTED_TYPES
                    );
                }

                [Test]
                public void VirtualClassIsVirtualTest()
                {
                    IsVirtualTypeTest(TestAssemblyHelper.TestClassNames.Issues.N2795.ShouldNotFail.VIRTUAL_TYPES, true);
                }

                [Test]
                public void VirtualClassIsNonVirtualTest()
                {
                    IsVirtualTypeTest(TestAssemblyHelper.TestClassNames.Issues.N2795.ShouldNotFail.NON_VIRTUAL_TYPES, false);
                }

                [Test]
                public void VirtualClassIsExternalTest()
                {
                    IsExternalTypeTest(TestAssemblyHelper.TestClassNames.Issues.N2795.ShouldNotFail.VIRTUAL_TYPES, true);
                }

                [Test]
                public void VirtualClassIsNonExternalTest()
                {
                    IsExternalTypeTest(TestAssemblyHelper.TestClassNames.Issues.N2795.ShouldNotFail.NON_VIRTUAL_TYPES, false);
                }
            }
        }
    }
}
