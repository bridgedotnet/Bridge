// #1623
//using Bridge.Test.NUnit;
//using System;

//namespace Bridge.ClientTest.Batch4
//{
//    [TestFixture]
//    public class LazyTests
//    {
//        [Test]
//        public void TypePropertiesAreCorrect()
//        {
//            Assert.AreEqual(typeof(Lazy<int>).FullName, "Bridge.Lazy");
//            //Assert.True(typeof(Lazy<int>).IsClass);
//            object s = new Lazy<int>();
//            Assert.True(s is Lazy<int>);
//        }

//        [Test]
//        public void WorksWithoutValueFactory()
//        {
//            var l = new Lazy<int>();
//            Assert.False(l.IsValueCreated);
//            Assert.AreEqual(l.Value, 0);
//            Assert.True(l.IsValueCreated);
//            Assert.AreEqual(l.Value, 0);
//        }

//        [Test]
//        public void WorksWithoutValueFactoryWithBooleanConstructor()
//        {
//            var l = new Lazy<int>(false);
//            Assert.False(l.IsValueCreated);
//            Assert.AreEqual(l.Value, 0);
//            Assert.True(l.IsValueCreated);
//            Assert.AreEqual(l.Value, 0);
//        }

//        [Test]
//        public void WorksWithValueFactory()
//        {
//            var o = new object();
//            int numCalls = 0;
//            var l = new Lazy<object>(() =>
//            {
//                numCalls++;
//                return o;
//            });
//            Assert.False(l.IsValueCreated);
//            Assert.AreStrictEqual(l.Value, o);
//            Assert.AreEqual(numCalls, 1);
//            Assert.True(l.IsValueCreated);
//            Assert.AreStrictEqual(l.Value, o);
//            Assert.AreEqual(numCalls, 1);
//        }

//        [Test]
//        public void WorksWithValueFactoryAndBooleanConstructor()
//        {
//            var o = new object();
//            int numCalls = 0;
//            var l = new Lazy<object>(() =>
//            {
//                numCalls++;
//                return o;
//            }, true);
//            Assert.False(l.IsValueCreated);
//            Assert.AreStrictEqual(l.Value, o);
//            Assert.AreEqual(numCalls, 1);
//            Assert.True(l.IsValueCreated);
//            Assert.AreStrictEqual(l.Value, o);
//            Assert.AreEqual(numCalls, 1);
//        }
//    }
//}