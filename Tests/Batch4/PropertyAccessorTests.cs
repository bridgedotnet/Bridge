using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "PropertyAccessorTests - {0}")]
    public class PropertyAccessorTests
    {
#pragma warning disable 649

        [Convention]
        public class C1
        {
            public int F1, F2, F3;

            //[FieldProperty]
            public int P1
            {
                get
                {
                    return F1 + 1;
                }
                set
                {
                    F1 = value - 1;
                }
            }

            //[FieldProperty]
            public int P2
            {
                get
                {
                    return F2 + 1;
                }
            }

            //[FieldProperty]
            public int P3
            {
                set
                {
                    F3 = value - 1;
                }
            }

            public static int FS1, FS2, FS3;

            //[FieldProperty]
            public static int PS1
            {
                get
                {
                    return FS1 + 1;
                }
                set
                {
                    FS1 = value - 1;
                }
            }

            //[FieldProperty]
            public static int PS2
            {
                get
                {
                    return FS2 + 1;
                }
            }

            //[FieldProperty]
            public static int PS3
            {
                set
                {
                    FS3 = value - 1;
                }
            }
        }

        [Convention]
        public class C2<T>
        {
            public T F1, F2, F3;

            //[FieldProperty]
            public int P1
            {
                get
                {
                    return (dynamic)F1 + 1;
                }
                set
                {
                    F1 = (dynamic)value - 1;
                }
            }

            //[FieldProperty]
            public int P2
            {
                get
                {
                    return (dynamic)F2 + 1;
                }
            }

            //[FieldProperty]
            public int P3
            {
                set
                {
                    F3 = (dynamic)value - 1;
                }
            }

            public static T FS1, FS2, FS3;

            //[FieldProperty]
            public static int PS1
            {
                get
                {
                    return (dynamic)FS1 + 1;
                }
                set
                {
                    FS1 = (dynamic)value - 1;
                }
            }

            //[FieldProperty]
            public static int PS2
            {
                get
                {
                    return (dynamic)FS2 + 1;
                }
            }

            //[FieldProperty]
            public static int PS3
            {
                set
                {
                    FS3 = (dynamic)value - 1;
                }
            }
        }

        [Convention]
        public class B3
        {
            public int F1, F2, F3;

            //[FieldProperty]
            public virtual int P1
            {
                get
                {
                    return F1;
                }
                set
                {
                    F1 = value;
                }
            }

            //[FieldProperty]
            public virtual int P2
            {
                get
                {
                    return F2;
                }
            }

            //[FieldProperty]
            public virtual int P3
            {
                set
                {
                    F3 = value;
                }
            }
        }

        [Convention]
        public class D3 : B3
        {
            public override int P1
            {
                get
                {
                    return base.P1 + 1;
                }
                set
                {
                    base.P1 = value - 1;
                }
            }

            public override int P2
            {
                get
                {
                    return base.P2 + 1;
                }
            }

            public override int P3
            {
                set
                {
                    base.P3 = value - 1;
                }
            }
        }

        [Convention]
        public class B4<T>
        {
            public T F1, F2, F3;

            //[FieldProperty]
            public virtual T P1
            {
                get
                {
                    return F1;
                }
                set
                {
                    F1 = value;
                }
            }

            //[FieldProperty]
            public virtual T P2
            {
                get
                {
                    return F2;
                }
            }

            //[FieldProperty]
            public virtual T P3
            {
                set
                {
                    F3 = value;
                }
            }
        }

        [Convention]
        public class D4<T> : B4<T>
        {
            public override T P1
            {
                get
                {
                    return (dynamic)base.P1 + 1;
                }
                set
                {
                    base.P1 = (dynamic)value - 1;
                }
            }

            public override T P2
            {
                get
                {
                    return (dynamic)base.P2 + 1;
                }
            }

            public override T P3
            {
                set
                {
                    base.P3 = (dynamic)value - 1;
                }
            }
        }

#pragma warning restore 649

        // TODO Fix test NEWCI Run client tests to see the test errors
        [Test]
        public void AccessorsCanBeInvokedInstance()
        {
            var c = new C1();

            c.P1 = 42;
            Assert.AreEqual(41, c.F1, "F1 value");

            c.F1 = 15;
            Assert.AreEqual(16, c.P1, "P1 value");

            c.F2 = 17;
            Assert.AreEqual(18, c.P2, "P2 value");

            c.P3 = 12;
            Assert.AreEqual(11, c.F3, "F3 value");
        }

        // TODO Fix test NEWCI Run client tests to see the test errors
        [Test]
        public void AccessorsCanBeInvokedStatic()
        {
            C1.PS1 = 42;
            Assert.AreEqual(41, C1.FS1, "FS1 value");

            C1.FS1 = 15;
            Assert.AreEqual(16, C1.PS1, "PS1 value");

            C1.FS2 = 17;
            Assert.AreEqual(18, C1.PS2, "PS2 value");

            C1.PS3 = 12;
            Assert.AreEqual(11, C1.FS3, "FS3 value");
        }

        // TODO Fix test NEWCI Run client tests to see the test errors
        [Test]
        public void AccessorsCanBeInvokedGeneric()
        {
            var c = new C2<int>();

            c.P1 = 42;
            Assert.AreEqual(41, c.F1, "F1 value");

            c.F1 = 15;
            Assert.AreEqual(16, c.P1, "P1 value");

            c.F2 = 17;
            Assert.AreEqual(18, c.P2, "P2 value");

            c.P3 = 12;
            Assert.AreEqual(11, c.F3, "F3 value");
        }

        // TODO Fix test NEWCI Run client tests to see the test errors
        [Test]
        public void AccessorsCanBeInvokedGenericStatic()
        {
            C2<int>.PS1 = 42;
            Assert.AreEqual(41, C2<int>.FS1, "FS1 value");

            C2<int>.FS1 = 15;
            Assert.AreEqual(16, C2<int>.PS1, "PS1 value");

            C2<int>.FS2 = 17;
            Assert.AreEqual(18, C2<int>.PS2, "PS2 value");

            C2<int>.PS3 = 12;
            Assert.AreEqual(11, C2<int>.FS3, "FS3 value");
        }

        // TODO Fix test NEWCI Run client tests to see the test errors
        [Test]
        public void BaseAccessorsCanBeInvoked()
        {
            var d = new D3();

            d.P1 = 42;
            Assert.AreEqual(41, d.F1, "F1 value");

            d.F1 = 15;
            Assert.AreEqual(16, d.P1, "P1 value");

            d.F2 = 17;
            Assert.AreEqual(18, d.P2, "P2 value");

            d.P3 = 12;
            Assert.AreEqual(11, d.F3, "F3 value");
        }

        // TODO Fix test NEWCI Run client tests to see the test errors
        [Test]
        public void BaseAccessorsCanBeInvokedGeneric()
        {
            var d = new D4<int>();

            d.P1 = 42;
            Assert.AreEqual(41, d.F1, "F1 value");

            d.F1 = 15;
            Assert.AreEqual(16, d.P1, "P1 value");

            d.F2 = 17;
            Assert.AreEqual(18, d.P2, "P2 value");

            d.P3 = 12;
            Assert.AreEqual(11, d.F3, "F3 value");
        }
    }
}