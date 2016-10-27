using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1899 - {0}")]
    public class Bridge1899
    {
        public interface IItem
        {
            int Value
            {
                get;
            }
            void SetValue();
        }

        public class Item : IItem
        {
            public int Value
            {
                get
                {
                    return 1; // getter
                }
            }

            public int GetValue()
            {
                return 2; // function
            }

            public void SetValue()
            {

            }
        }

        public class A
        {
            public int GetValue()
            {
                return 0;
            }
        }

        public class B : A
        {
            public B()
            {
                Value = 1;
            }

            public B(int i)
            {
                SetValue(i);
            }

            private int value;
            private int Value
            {
                get { return value; }
                set
                {

                    this.value = value;
                }
            }

            private void SetValue(int value)
            {
                this.value = value + 10;
            }

            public int GetResult()
            {
                return this.value;
            }
        }

        public class C
        {
            public C()
            {
                Value = 1;
            }

            public C(int i)
            {
                SetValue(i);
            }

            private int getValue;
            private int Value
            {
                get { return getValue; }
                set
                {
                    this.getValue = value;
                }
            }

            private void SetValue(int value)
            {
                this.getValue = value + 10;
            }

            public int GetResult()
            {
                return this.getValue;
            }
        }

        public class Item2
        {
            private int value;
            private int Value
            {
                get { return value; }
                set
                {
                    this.value = value;
                }
            }

            public Item2()
            {
                Value = 1;
            }

            public Item2(int i)
            {
                SetValue(i);
            }

            public int GetValue()
            {
                return Value;
            }

            private void SetValue(int value)
            {
                this.value = value + 10;
            }

            public int GetResult()
            {
                return this.value;
            }
        }

        public class Item3
        {
            private int value;
            private int Value
            {
                get;
                set;
            }

            public Item3()
            {
                Value = 1;
            }

            public Item3(int i)
            {
                SetValue(i);
            }

            public int GetValue()
            {
                return Value;
            }

            private void SetValue(int value)
            {
                this.value = value + 10;
            }

            public int GetResult(bool prop)
            {
                return prop ? this.Value : this.value;
            }
        }

        [Test]
        public void TestPropertyAndMethodNameConflict()
        {
            var item = new Item();
            Assert.AreEqual(1, item.Value);
            Assert.AreEqual(2, item.GetValue());

            var b = new B();
            Assert.AreEqual(1, b.GetResult());

            b = new B(5);
            Assert.AreEqual(15, b.GetResult());

            var c = new C();
            Assert.AreEqual(1, c.GetResult());

            c = new C(5);
            Assert.AreEqual(15, c.GetResult());

            var item2 = new Item2();
            Assert.AreEqual(1, item2.GetResult());

            item2 = new Item2(5);
            Assert.AreEqual(15, item2.GetResult());

            var item3 = new Item3();
            Assert.AreEqual(1, item3.GetResult(true));

            item3 = new Item3(5);
            Assert.AreEqual(15, item3.GetResult(false));
        }
    }
}