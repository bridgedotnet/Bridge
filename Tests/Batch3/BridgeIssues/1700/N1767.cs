using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1767 - {0}")]
    public class Bridge1767
    {
        public class Base<T>
        {
            public virtual int this[int i]
            {
                get
                {
                    return i;
                }
            }

            public virtual int Method()
            {
                return 2;
            }
        }

        public class Child : Base<object>
        {
            public override int Method()
            {
                return base.Method();
            }

            public override int this[int i]
            {
                get
                {
                    return base[i];
                }
            }

        }

        [Test]
        public void TestBaseIndexer()
        {
            var child = new Child();
            Assert.AreEqual(1, child[1]);
            Assert.AreEqual(2, child.Method());
        }
    }
}