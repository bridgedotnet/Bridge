using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in instantiating a class using an interface
    /// reference and ensure it is, client-side, reaching the type it
    /// refers to.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3292 - {0}")]
    public class Bridge3292
    {
        #region Base classes set up

        /// <summary>
        /// Basic interface used as base of all.
        /// </summary>
        public interface IInterfaceProbe { }

        /// <summary>
        /// A class to use the interface
        /// </summary>
        public sealed class ClassProbe : IInterfaceProbe { }

        /// <summary>
        /// A class implementing generics that will use the class samples
        /// above in order to trigger the issue.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        public struct GenericsClass<T>
        {
            public GenericsClass(T value)
            {
                Value = value;
            }

            public T Value { get; }

            public static implicit operator GenericsClass<T>(T source)
            {
                return new GenericsClass<T>(source);
            }
        }

        #endregion Base classes set up

        #region Driver classes

        /// <summary>
        /// Driver class that works by referencing the actual class.
        /// </summary>
        public sealed class ClassDriver
        {
            public bool Consistent { get; }

            public ClassDriver(GenericsClass<ClassProbe> errorIfFailed)
            {
                object probe = errorIfFailed;

                // We check here whether the object initializing it is of
                // ClassProbe. We don't check against IInterfaceProbe here
                // even though it inherits due to covariance-related
                // limitations
                Consistent = probe is GenericsClass<ClassProbe>;
            }
        }

        /// <summary>
        /// Driver class that breaks by referencing the interface.
        /// </summary>
        public sealed class InterfaceDriver
        {
            public bool Consistent { get; }

            public InterfaceDriver(GenericsClass<IInterfaceProbe> errorIfFailed)
            {
                object probe = errorIfFailed;

                // We check here whether the object initializing it is of
                // ClassProbe. We don't check against ClassProbe here
                // even though it inherits due to covariance-related
                // limitations
                Consistent = probe is GenericsClass<IInterfaceProbe>;
            }
        }

        #endregion Driver classes

        /// <summary>
        /// Tests whether instantiating the driver classes sets their
        /// 'consistent' state to true.
        /// </summary>
        [Test]
        public static void TestImplicitOpCallForInterfaces()
        {
            Assert.True(new ClassDriver(new ClassProbe()).Consistent, "Implicit generics operator works with class referencing.");
            Assert.True(new InterfaceDriver(new ClassProbe()).Consistent, "Implicit generics operator works with interface referencing.");
        }
    }
}