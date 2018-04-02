using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Test whether constructor calls are correctly issued when instantiating
    /// classes that inherit from external classes.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3494 - {0}")]
    public class Bridge3494
    {
        [External]
        [Name("Bridge3494_A")]
        public class A
        {
            public static int InstancesCount { get; }
        }

        public class B : A
        {
        }

        [Init(InitPosition.Top)]
        public static void Init()
        {
            /*@
    var Bridge3494_A = (function () {
        function Bridge3494_A(s) {
            Bridge3494_A.InstancesCount++;
        }
        Bridge3494_A.InstancesCount = 0;
        return Bridge3494_A;
    }());
            */
        }

        /// <summary>
        /// Instantiate classes several times and checks the return types and
        /// values.
        /// </summary>
        [Test]
        public static void TestExtrenalClasCtor()
        {
            Assert.AreEqual(0, A.InstancesCount, "Amount of instances of a class are initially zero.");

            var a = new A();
            Assert.AreEqual(1, A.InstancesCount, "Amount if instances of a class are 1 after one instance of it is created.");
            Assert.True(((object)a) is A, "Casting to object once allows 'is' to infer it is relative to the class.");

            for (var i = 0; i < 10; i++)
            {
                var b = new B();
                Assert.True(((object)b) is A, "Casting to object " + (i + 1) + " time" + (i > 0 ? "s" : "") + " allows inferring its base class instance.");
            }
            Assert.AreEqual(11, A.InstancesCount, "Instantiating a class that inherits from the other counts as instance count of the base class.");
        }
    }
}