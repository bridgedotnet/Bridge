using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1812 - {0}")]
    public class Bridge1812
    {
        public class _Object
        {
            int value;
            public _Object(int value)
            {
                this.value = value;
            }

            public static implicit operator _Object(int d)
            {
                return new _Object(d);
            }

            public static _Object operator +(_Object left, _Object right)
            {
                return new _Object(left.value + right.value);
            }

            public static implicit operator int(_Object d)
            {
                return d.value;
            }

            public static _Object Identity(_Object o)
            {
                return o;
            }
        }

        [Test]
        public void TestDoubleConversion()
        {
            _Object a = 1;
            a++;
            Assert.AreEqual(2, (int)a);
            Assert.AreEqual(2, (int)_Object.Identity(a++));
            Assert.AreEqual(4, (int)_Object.Identity(++a));
        }
    }
}