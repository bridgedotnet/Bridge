using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1722 - {0}")]
    public class Bridge1722
    {
        private class ClassA
        {
            public ClassA()
            {
            }

            public override string ToString()
            {
                return "7";
            }
        }

        private static void Foo<T>() where T : new()
        {
            Assert.AreEqual("7", new T().ToString());
        }

        [Test]
        public void TestDelegateCreationOfGenericMethods()
        {
            var foo = new Action(Foo<ClassA>);
            foo();
        }

        [Test]
        public void TestDelegateCreationOfGenericMethodsWithLambda()
        {
            var foo = new Action(() => Foo<ClassA>());
            foo();
        }
    }
}