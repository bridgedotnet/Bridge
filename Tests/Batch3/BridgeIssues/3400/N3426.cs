using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in ensuring Bridge gets the concrete class name
    /// when queried from a method implemented within an abstract class from
    /// which the class instance inherits from.
    /// </summary>
    /// <seealso cref="https://dotnetfiddle.net/cug8fj"/>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3426 - {0}")]
    public class Bridge3426
    {
        /// <summary>
        /// This abstract class will implement the Type querying means from
        /// which a class inheriting from it will call. It should return the
        /// actual class' name instead of 'AbstractClass'.
        /// </summary>
        public abstract class AbstractClass
        {
            public string TypeProp { get { return GetType().FullName; } }

            public string TypeMethod() { return GetType().FullName; }
        }

        /// <summary>
        /// This class will just inherit the Type() property from the abstract
        /// class above.
        /// </summary>
        public class ConcreteClass : AbstractClass
        {
        }

        /// <summary>
        /// This time, two ordinary classes will be involved. A super class
        /// implementing the means to query the name, and a sub class
        /// inheriting and calling them.
        /// </summary>
        public class SuperClass
        {
            public string TypeProp { get { return GetType().FullName; } }

            public string TypeMethod() { return GetType().FullName; }
        }

        public class SubClass : SuperClass
        {
        }

        /// <summary>
        /// Instantiate the class inheriting from abstract and check the
        /// results of the class type name queries.
        /// </summary>
        [Test]
        public static void TestGetTypeInAbstract()
        {
            ConcreteClass test = new ConcreteClass();
            Assert.AreEqual(
                "Bridge.ClientTest.Batch3.BridgeIssues.Bridge3426+ConcreteClass",
                test.TypeProp,
                "Property query for instance:abstract class returns the expected class name.");
            Assert.AreEqual(
                "Bridge.ClientTest.Batch3.BridgeIssues.Bridge3426+ConcreteClass",
                test.TypeMethod(),
                "Method query returns the expected class name.");
        }

        /// <summary>
        /// Instantiate the super and sub classes and check the results of the
        /// class type name queries in different set ups.
        /// </summary>
        [Test]
        public static void TestGetTypeInSuperClass()
        {
            ConcreteClass test = new ConcreteClass();
            Assert.AreEqual(
                "Bridge.ClientTest.Batch3.BridgeIssues.Bridge3426+ConcreteClass",
                test.TypeProp,
                "Property query for instance:abstract class returns the expected class name.");
            Assert.AreEqual(
                "Bridge.ClientTest.Batch3.BridgeIssues.Bridge3426+ConcreteClass",
                test.TypeMethod(),
                "Method query returns the expected class name.");

            SuperClass sup = new SuperClass();
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge3426+SuperClass",
                sup.TypeProp,
                "Property query for direct instance of super class returns the expected name.");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge3426+SuperClass",
                sup.TypeMethod(),
                "Method query for direct instance of super class returns the expected name.");

            SubClass sub = new SubClass();
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge3426+SubClass",
                sub.TypeProp,
                "Property query for instance of sub class returns the expected name.");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge3426+SubClass",
                sub.TypeMethod(),
                "Method query for instance of sub class returns the expected name.");

            SuperClass subCast = (SuperClass)sub;
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge3426+SubClass",
                subCast.TypeProp,
                "Property query for cast instance of super class returns the expected name.");
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge3426+SubClass",
                subCast.TypeMethod(),
                "Method query for cast instance of super class returns the expected name.");
        }
    }
}