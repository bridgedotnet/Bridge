using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "ActivatorTests - {0}")]
    public class ActivatorTests
    {
        //[Serializable]
        [ObjectLiteral]
        private class C7
        {
            public C7()
            {
            }
        }

        private T Instantiate<T>() where T : new()
        {
            return new T();
        }

        [Test]
        public void CreateInstanceWithNoArgumentsWorksForClassWithJsonDefaultConstructor()
        {
            var c1 = Activator.CreateInstance<C7>();
            var c2 = (C7)Activator.CreateInstance(typeof(C7));
            var c3 = Instantiate<C7>();

            Assert.AreEqual(Script.ToDynamic().Object, ((dynamic)c1).constructor);
            Assert.AreEqual(Script.ToDynamic().Object, ((dynamic)c2).constructor);
            Assert.AreEqual(Script.ToDynamic().Object, ((dynamic)c3).constructor);
        }
    }
}