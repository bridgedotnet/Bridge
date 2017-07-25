using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_ACTIVATOR)]
    [TestFixture(TestNameFormat = "ActivatorTests - {0}")]
    public class ActivatorTests
    {
        private class C1
        {
            public int i;

            public C1()
            {
                i = 42;
            }
        }

        private class C2
        {
            public int i;

            public C2(int i)
            {
                this.i = i;
            }
        }

        private class C3
        {
            public int i, j;

            public C3(int i, int j)
            {
                this.i = i;
                this.j = j;
            }
        }

        public class C4
        {
            public int i;

            //[Name("named")]
            public C4()
            {
                i = 42;
            }

            //[Name("")]
            public C4(int i)
            {
                this.i = 1;
            }
        }

        public class C5
        {
            public int i;

            [Template("{ i: 42 }")]
            public C5()
            {
            }
        }

        //[Serializable]
        public class C6
        {
            public int i;

            public C6()
            {
                i = 42;
            }
        }

        //[Serializable]
        [ObjectLiteral]
        private class C7
        {
            public C7()
            {
            }
        }

        public class C8<T>
        {
            public int I;

            //[Name("named")]
            public C8()
            {
                I = 42;
            }

            //[Name("")]
            public C8(T t)
            {
                I = 1;
            }
        }

        [Test]
        public void NonGenericCreateInstanceWithoutArgumentsWorks()
        {
            C1 c = (C1)Activator.CreateInstance(typeof(C1));
            Assert.AreNotEqual(null, c);
            Assert.AreEqual(42, c.i);
        }

        [Test]
        public void NonGenericCreateInstanceWithOneArgumentWorks_SPI_1540()
        {
            var c = (C2)Activator.CreateInstance(typeof(C2), 3);
            Assert.AreNotEqual(null, c);
            Assert.AreEqual(3, c.i);

            // #1540
            var arr = new object[] { 3 };
            c = (C2)Activator.CreateInstance(typeof(C2), arr);
            Assert.AreNotEqual(null, c);
            Assert.AreEqual(3, c.i);
        }

        [Test]
        public void NonGenericCreateInstanceWithTwoArgumentsWorks_SPI_1541()
        {
            var c = (C3)Activator.CreateInstance(typeof(C3), 7, 8);
            Assert.AreNotEqual(null, c);
            Assert.AreEqual(7, c.i);
            Assert.AreEqual(8, c.j);

            // #1541
            var arr = new object[] { 7, 8 };
            c = (C3)Activator.CreateInstance(typeof(C3), arr);
            Assert.AreNotEqual(null, c);
            Assert.AreEqual(7, c.i);
            Assert.AreEqual(8, c.j);
        }

        [Test]
        public void GenericCreateInstanceWithoutArgumentsWorks()
        {
            C1 c = Activator.CreateInstance<C1>();
            Assert.AreNotEqual(null, c);
            Assert.AreEqual(42, c.i);
        }

        [Test]
        public void GenericCreateInstanceWithOneArgumentWorks_SPI_1542()
        {
            C2 c = Activator.CreateInstance<C2>(3);
            Assert.AreNotEqual(null, c);
            Assert.AreEqual(3, c.i);

            // #1542
            var arr = new object[] { 3 };
            c = Activator.CreateInstance<C2>(arr);
            Assert.AreNotEqual(null, c);
            Assert.AreEqual(3, c.i);
        }

        [Test]
        public void GenericCreateInstanceWithTwoArgumentsWorks_SPI_1543()
        {
            C3 c = Activator.CreateInstance<C3>(7, 8);
            Assert.AreNotEqual(null, c);
            Assert.AreEqual(7, c.i);
            Assert.AreEqual(8, c.j);

            // #1543
            var arr = new object[] { 7, 8 };
            c = Activator.CreateInstance<C3>(arr);
            Assert.AreNotEqual(null, c);
            Assert.AreEqual(7, c.i);
            Assert.AreEqual(8, c.j);
        }

        private T Instantiate<T>() where T : new()
        {
            return new T();
        }

        [Test]
        public void InstantiatingTypeParameterWithDefaultConstructorConstraintWorks_SPI_1544()
        {
            var c = Instantiate<C1>();
            Assert.AreEqual(42, c.i);
            // #1544
            Assert.AreStrictEqual(0, Instantiate<int>());
        }

        [Test]
        public void CreateInstanceWithNoArgumentsWorksForClassWithUnnamedDefaultConstructor()
        {
            var c1 = Activator.CreateInstance<C1>();
            var c2 = (C1)Activator.CreateInstance(typeof(C1));
            var c3 = Instantiate<C1>();

            Assert.AreEqual(42, c1.i);
            Assert.AreEqual(42, c2.i);
            Assert.AreEqual(42, c3.i);
        }

        [Test]
        public void CreateInstanceWithNoArgumentsWorksForClassWithNamedDefaultConstructor()
        {
            var c1 = Activator.CreateInstance<C4>();
            var c2 = (C4)Activator.CreateInstance(typeof(C4));
            var c3 = Instantiate<C4>();

            Assert.AreEqual(42, c1.i);
            Assert.AreEqual(42, c2.i);
            Assert.AreEqual(42, c3.i);
        }

        [Test]
        public void CreateInstanceWithNoArgumentsWorksForClassWithInlineCodeDefaultConstructor_SPI_1545()
        {
            var c1 = Activator.CreateInstance<C5>();
            var c2 = Activator.CreateInstance(typeof(C5)).As<C5>();
            var c3 = Instantiate<C5>();

            // #1545
            Assert.AreEqual(42, c1.i);
            Assert.AreEqual(42, c2.i);
            Assert.AreEqual(42, c3.i);
        }

        [Test]
        public void CreateInstanceWithNoArgumentsWorksForClassWithStaticMethodDefaultConstructor()
        {
            var c1 = Activator.CreateInstance<C6>();
            var c2 = (C6)Activator.CreateInstance(typeof(C6));
            var c3 = (C6)Instantiate<C6>();

            Assert.AreEqual(42, c1.i);
            Assert.AreEqual(42, c2.i);
            Assert.AreEqual(42, c3.i);
        }

        //[Test]
        //public void CreateInstanceWithNoArgumentsWorksForClassWithJsonDefaultConstructor()
        //{
        //    var c1 = Activator.CreateInstance<C7>();
        //    var c2 = (C7)Activator.CreateInstance(typeof(C7));
        //    var c3 = Instantiate<C7>();

        //    Assert.AreEqual(Script.ToDynamic().Object, ((dynamic)c1).constructor);
        //    Assert.AreEqual(Script.ToDynamic().Object, ((dynamic)c2).constructor);
        //    Assert.AreEqual(Script.ToDynamic().Object, ((dynamic)c3).constructor);
        //}

        [Test]
        public void CreateInstanceWithNoArgumentsWorksForGenericClassWithNamedDefaultConstructor()
        {
            var c1 = Activator.CreateInstance<C8<int>>();
            var c2 = (C8<int>)Activator.CreateInstance(typeof(C8<int>));
            var c3 = Instantiate<C8<int>>();

            Assert.AreEqual(42, c1.I);
            Assert.AreEqual(typeof(int), c1.GetType().GetGenericArguments()[0]);
            Assert.AreEqual(42, c2.I);
            Assert.AreEqual(typeof(int), c2.GetType().GetGenericArguments()[0]);
            Assert.AreEqual(42, c3.I);
            Assert.AreEqual(typeof(int), c3.GetType().GetGenericArguments()[0]);
        }
    }
}