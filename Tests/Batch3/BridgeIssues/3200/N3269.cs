using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists on checking whether type inference for generic
    /// classes works when feeding dynamic parameters to the class.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3269 - {0}")]
    public class Bridge3269
    {
        /// <summary>
        /// Base interface that will be both the static method parameter and
        /// the actual passed parameter class' base.
        /// </summary>
        /// <typeparam name="P"></typeparam>
        public interface IFactory<P> where P : Animal
        {
            string FactoryName { get; }

            /// <summary>
            /// Generate a new object of type P for use by external JS library
            /// </summary>
            /// <returns></returns>
            Func<P> Builder();
        }

        /// <summary>
        /// A base class from which the parameter will be based.
        /// </summary>
        public class Animal
        {
        }

        /// <summary>
        /// Generic type to base the parameter class.
        /// </summary>
        public class Cavy : Animal
        {
        }

        /// <summary>
        /// Parameter class, that implements the base interface above
        /// specifying it as the generic type 'Cavy'.
        /// </summary>
        class CavyFactory : IFactory<Cavy>
        {
            /// <summary>
            /// Just a string to check value against in the assertion.
            /// </summary>
            public string FactoryName
            {
                get
                {
                    return "Guinea Pig Factory";
                }
            }

            /// <summary>
            /// Just to implement the interface's
            /// </summary>
            /// <returns></returns>
            public Func<Cavy> Builder()
            {
                return () => new Cavy();
            }
        }

        /// <summary>
        /// For the elaborate test, this will follow several levels and
        /// concepts of inheritance.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="factory"></param>
        /// <param name="registry"></param>
        /// <returns></returns>
        public static string RegisterFactory<T>(IFactory<T> factory, dynamic registry) where T : Animal
        {
            return typeof(T).FullName;
        }

        /// <summary>
        /// Minimal test case required to reproduce the issue (this is a test
        /// isolated from the rest)
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="simple"></param>
        /// <returns></returns>
        public static bool Simplistic<T>(T simple)
        {
            return true;
        }

        /// <summary>
        /// Checks whether both the simplistic and elaborate implementations works.
        /// </summary>
        [Test]
        public static void TestTypeParameterInference()
        {
            dynamic registry = Script.Get("{}").ToDynamic();
            Assert.AreEqual(typeof(Cavy).FullName, RegisterFactory(new CavyFactory(), registry), "Elaborate dynamic-typed static generic emits correctly.");

            Assert.True(Simplistic(1.ToDynamic()), "Simple dynamic-typed static generic emits correctly.");

        }
    }
}