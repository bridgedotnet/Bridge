using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1892 - {0}")]
    public class Bridge1892
    {
        public class Obj
        {
            private object value;
            public int length { get; set; }

            public Obj()
            {
            }


            static public bool operator false(Obj o)
            {
                return o == null;
            }


            static public bool operator true(Obj o)
            {
                return o != null;
            }

            static public implicit operator Obj(bool v)
            {
                return new Obj() { value = v };
            }

            static public implicit operator bool(Obj v)
            {
                return v.value.As<bool>();
            }

            static public implicit operator int(Obj v)
            {
                return v.value.As<int>();
            }

            public Obj this[object key] { get { return new Obj(); } set { } }

            static public implicit operator Obj(int v)
            {
                return new Obj() { value = v };
            }

            static public Obj operator |(Obj left, Obj right)
            {
                if (left == null)
                    return right;

                if (right == null)
                    return left;

                return left;
            }

            static public Obj operator &(Obj left, Obj right)
            {
                if (left == null)
                    return null;

                if (right == null)
                    return null;

                return right;
            }

            public override string ToString()
            {
                return value.ToString();
            }
        }

        [Test]
        public void TestCase()
        {
            var data = new Obj();
            data = data && data.length > 0 && (data[0]["key"] == 1);
            Assert.NotNull(data);
            object o = data;
            Assert.True(o is Obj);
        }
    }
}