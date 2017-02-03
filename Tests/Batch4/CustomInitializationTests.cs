// #1631
//using Bridge.Test.NUnit;
//using System;
//using Bridge;

//namespace Bridge.ClientTest.Batch4
//{
//    [TestFixture]
//    public class CustomInitializationTests
//    {
//#pragma warning disable 649

//        private class C<T>
//        {
//            [CustomInitialization(null)]
//            public int f1;

//            [CustomInitialization("")]
//            public int f2;

//            [CustomInitialization("42")]
//            public int f3;

//            [CustomInitialization("{$System.DateTime}")]
//            public Type f4;

//            [CustomInitialization("{T}")]
//            public Type f5;

//            [CustomInitialization("{this}")]
//            public C<T> f6;

//            [CustomInitialization("{value} + 1")]
//            public int f7 = 31;

//            [CustomInitialization(null)]
//            public int P1
//            {
//                get;
//                set;
//            }

//            [CustomInitialization("")]
//            public int P2
//            {
//                get;
//                set;
//            }

//            [CustomInitialization("42")]
//            public int P3
//            {
//                get;
//                set;
//            }

//            [CustomInitialization("{$System.DateTime}")]
//            public Type P4
//            {
//                get;
//                set;
//            }

//            [CustomInitialization("{T}")]
//            public Type P5
//            {
//                get;
//                set;
//            }

//            [CustomInitialization("{this}")]
//            public C<T> P6
//            {
//                get;
//                set;
//            }

//            [CustomInitialization("{value} + 1")]
//            public int P7
//            {
//                get;
//                set;
//            }
//        }

//#pragma warning restore 649

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void CustomInitializationWorksForFields()
//        {
//            var c = new C<string>();
//            Assert.Null(c.f1, "#1");
//            Assert.Null(c.f2, "#2");
//            Assert.AreStrictEqual(c.f3, 42, "#3");
//            Assert.AreStrictEqual(c.f4, typeof(DateTime), "#4");
//            Assert.AreStrictEqual(c.f5, typeof(string), "#5");
//            Assert.AreStrictEqual(c.f6, c, "#6");
//            Assert.AreStrictEqual(c.f7, 32, "#6");
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void CustomInitializationWorksForProperties()
//        {
//            var c = new C<string>();
//            Assert.Null(c.P1, "#1");
//            Assert.Null(c.P2, "#2");
//            Assert.AreStrictEqual(c.P3, 42, "#3");
//            Assert.AreStrictEqual(c.P4, typeof(DateTime), "#4");
//            Assert.AreStrictEqual(c.P5, typeof(string), "#5");
//            Assert.AreStrictEqual(c.P6, c, "#6");
//            Assert.AreStrictEqual(c.P7, 1, "#7");
//        }
//    }
//}