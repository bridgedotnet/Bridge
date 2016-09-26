using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1863 - {0}")]
    public class Bridge1863
    {
        private static StringBuilder sb;

        public class Obj
        {
            private string _v;
            public string v
            {
                get
                {
                    return _v;
                }
                set
                {
                    _v = value;
                }
            }

            public Obj(string v)
            {
                this.v = v;
                Bridge1863.sb.Append("c:" + v + ";");
            }


            public static bool operator false(Obj o)
            {
                Bridge1863.sb.Append("f:" + o.v + ";");
                return o == null;
            }


            public static bool operator true(Obj o)
            {
                Bridge1863.sb.Append("t:" + o.v + ";");
                return o != null;
            }

            public static Obj operator |(Obj left, Obj right)
            {
                if (left == null)
                    return right;

                if (right == null)
                    return left;

                return left;
            }

            public static Obj operator &(Obj left, Obj right)
            {
                if (left == null)
                    return null;

                if (right == null)
                    return null;

                return right;
            }

            public override string ToString()
            {
                return v;
            }
        }

        [Test]
        public void TestTrueFalseOperators()
        {
            Bridge1863.sb = new StringBuilder();
            var o1 = new Obj("left") || new Obj("right");
            Assert.AreEqual("c:left;t:left;", Bridge1863.sb.ToString());
            Assert.AreEqual("left", o1.v);

            Bridge1863.sb = new StringBuilder();
            o1 = new Obj("left") && new Obj("right");
            Assert.AreEqual("c:left;f:left;c:right;", Bridge1863.sb.ToString());
            Assert.AreEqual("right", o1.v);
        }
    }
}