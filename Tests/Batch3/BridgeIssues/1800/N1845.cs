using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1845 - {0}")]
    public class Bridge1845
    {
        public class Base1
        {
            public Base1(object target)
            {
                ctor();
                Ctor();
            }

            public int ctor()
            {
                return 1;
            }

            public int Ctor()
            {
                return 2;
            }
        }

        public class Base2
        {
            public Base2(object target)
            {
                var r1 = ctor;
                var r2 = Ctor;
            }

            public int ctor
            {
                get
                {
                    return 1;
                }
            }

            public int Ctor
            {
                get
                {
                    return 2;
                }
            }
        }

        [Test]
        public void TestCtorMemberName()
        {
            var b1 = new Base1(null);
            Assert.NotNull(b1, "b1");
            Assert.AreEqual(1, b1.ctor(), "b1.ctor()");
            Assert.AreEqual(2, b1.Ctor(), "b1.Ctor()");

            var b2 = new Base2(null);
            Assert.NotNull(b2, "b2");
            Assert.AreEqual(1, b2.ctor, "b2.ctor");
            Assert.AreEqual(2, b2.Ctor, "b2.Ctor");

            var ctor = 3;
            Assert.AreEqual(3, ctor, "var ctor");
        }
    }
}