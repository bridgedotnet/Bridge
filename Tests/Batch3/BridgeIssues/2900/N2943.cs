using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2943 - {0}")]
    public class Bridge2943
    {
        public static bool passed = true;

        class A<T>
        {
            class B : A<T>
            {
            }

            static A()
            {
                Bridge2943.passed = false;
            }
        }

        class C
        {
            static C()
            {
                var msg = "Static ctor of Bridge2943.C should not be invoked";
                Assert.Fail(msg);
                throw new System.Exception(msg);
            }
        }

        [Test]
        public static void TestStaticCtorGenericClass()
        {
            Assert.True(Bridge2943.passed);
        }
    }
}