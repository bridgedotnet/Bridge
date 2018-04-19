using Bridge.Test.NUnit;
using System;
using System.Reflection;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in ensuring the GtetNestedTypes() and
    /// GetNetstedType() methods work as expected.
    /// </summary>
    /// <remarks>Dotnet fiddle: https://dotnetfiddle.net/Ii3wig </remarks>
    [TestFixture(TestNameFormat = "#3373 - {0}")]
    public class Bridge3373
    {
        /// <summary>
        /// A set of reflectable classes with subclasses also reflectable.
        /// </summary>
        [Reflectable]
        public class MyTypeClass
        {
            [Reflectable]
            public class MyClass1
            {
            }

            [Reflectable]
            public class MyClass2
            {
            }

            [Reflectable]
            protected class MyClass3
            {
            }

            [Reflectable]
            protected class MyClass4
            {
            }
        }

        /// <summary>
        /// Checks whether GetNestedTypes() produces the expected result.
        /// </summary>
        [Test]
        public static void TestGetNestedTypes()
        {
            Type myType = (typeof(MyTypeClass));
            Type[] myTypeArray = myType.GetNestedTypes(BindingFlags.Public);
            Assert.AreEqual(2, myTypeArray.Length, "The array of types with public bindings has the expected length.");
            Assert.AreEqual(typeof(MyTypeClass.MyClass1), myTypeArray[0], "The first entry in the array reflects the expected type.");
            Assert.AreEqual(typeof(MyTypeClass.MyClass2), myTypeArray[1], "The second entry in the array reflects the expected type.");

            Type[] myTypeArray1 = myType.GetNestedTypes(BindingFlags.NonPublic | BindingFlags.Instance);
            Assert.AreEqual(2, myTypeArray1.Length, "The array of types with instance and non-public bindings has the expected length.");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge3373+MyTypeClass+MyClass3", myTypeArray1[0].FullName, "The first element reflects to the expected type name.");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge3373+MyTypeClass+MyClass4", myTypeArray1[1].FullName, "The second element reflects to the expected type name.");
        }

        /// <summary>
        /// Checks whether GetNestedType() produces the expected result.
        /// </summary>
        [Test]
        public static void TestGetNestedType()
        {
            Type myType = (typeof(MyTypeClass));
            Type type = myType.GetNestedType("MyClass1");
            Assert.NotNull(type, "It was possible to get the nested type from the class reference.");
            Assert.AreEqual(typeof(MyTypeClass.MyClass1), type, "The returned type matches the expected result.");

            type = myType.GetNestedType("MyClass3", BindingFlags.NonPublic);
            Assert.NotNull(type, "It was possible to get the nested type from the class reference.");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge3373+MyTypeClass+MyClass3", type.FullName, "The returned type name matches the expected result.");
        }
    }
}