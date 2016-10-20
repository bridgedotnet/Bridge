using Bridge.Test;
using System.Collections.Generic;
using Bridge.Collections.Generic;

namespace Bridge.ClientTest.Batch4.Collections.Generic
{
    [TestFixture(TestNameFormat = "StackTests - {0}")]
    public class StackTests
    {
        private class C
        {
            public readonly int i;

            public C(int i)
            {
                this.i = i;
            }

            public override bool Equals(object o)
            {
                return o is C && i == ((C)o).i;
            }

            public override int GetHashCode()
            {
                return i;
            }
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("Array", typeof(Stack<int>).FullName, "FullName should be Array");
            Assert.True(typeof(Stack<int>).IsClass, "IsClass should be true");
            object list = new Stack<int>();
            Assert.True(list is Stack<int>, "is Queue<int> should be true");
        }

        [Test]
        public void CountWorks()
        {
            var s = new Stack<int>();
            Assert.AreEqual(0, s.Count);
            s.Push(1);
            Assert.AreEqual(1, s.Count);
            s.Push(10);
            Assert.AreEqual(2, s.Count);
        }

        [Test]
        public void PushAndPopWork()
        {
            var s = new Stack<int>();
            s.Push(10);
            s.Push(2);
            s.Push(4);
            Assert.AreEqual(4, s.Pop());
            Assert.AreEqual(2, s.Pop());
            Assert.AreEqual(10, s.Pop());
        }

        [Test]
        public void PeekWorks()
        {
            var s = new Stack<int>();
            s.Push(10);
            Assert.AreEqual(10, s.Peek());
            s.Push(2);
            Assert.AreEqual(2, s.Peek());
            s.Push(4);
            Assert.AreEqual(4, s.Peek());
        }

        [Test]
        public void ContainsWorks()
        {
            var s = new Stack<int>();
            s.Push(10);
            s.Push(2);
            s.Push(4);
            Assert.True(s.Contains(10));
            Assert.True(s.Contains(2));
            Assert.False(s.Contains(11));
        }

        [Test]
        public void ContainsUsesEqualsMethod()
        {
            var s = new Stack<C>();
            s.Push(new C(1));
            s.Push(new C(2));
            s.Push(new C(3));
            Assert.True(s.Contains(new C(2)));
            Assert.False(s.Contains(new C(4)));
        }

        [Test]
        public void ClearWorks()
        {
            var s = new Stack<int>();
            s.Push(10);
            s.Push(2);
            s.Push(4);
            s.Clear();
            Assert.AreEqual(0, s.Count);
        }
    }
}
