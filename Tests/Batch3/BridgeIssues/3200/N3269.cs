using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3269 - {0}")]
    public class Bridge3269
    {
        public interface IFactory<P> where P : Animal
        {
            string FactoryName { get; }

            /// <summary>
            /// Generate a new object of type P for use by external JS library
            /// </summary>
            /// <returns></returns>
            Func<P> Builder();
        }

        public class Animal
        {
        }

        public class Cavy : Animal
        {
        }

        class CavyFactory : IFactory<Cavy>
        {
            public string FactoryName
            {
                get
                {
                    return "Guinea Pig Factory";
                }
            }

            public Func<Cavy> Builder()
            {
                return () => new Cavy();
            }
        }

        public static string RegisterFactory<T>(IFactory<T> factory, dynamic registry) where T : Animal
        {
            return typeof(T).FullName;
        }

        [Test]
        public static void TestTypeParameterInference()
        {
            dynamic registry = Script.Get("{}").ToDynamic();
            Assert.AreEqual(typeof(Cavy).FullName, RegisterFactory(new CavyFactory(), registry));
        }
    }
}