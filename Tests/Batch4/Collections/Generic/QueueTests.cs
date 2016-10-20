using Bridge.Test;
using System.Collections.Generic;
using Bridge.Collections.Generic;

namespace Bridge.ClientTest.Batch4.Collections.Generic
{
    [TestFixture(TestNameFormat = "QueueTests - {0}")]
    public class QueueTests
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
            Assert.AreEqual("Array", typeof(Queue<int>).FullName, "FullName should be Array");
            Assert.True(typeof(Queue<int>).IsClass, "IsClass should be true");
            object list = new Queue<int>();
            Assert.True(list is Queue<int>, "is Queue<int> should be true");
        }

        [Test]
        public void CountWorks()
        {
            var q = new Queue<int>();
            Assert.AreEqual(0, q.Count);
            q.Enqueue(1);
            Assert.AreEqual(1, q.Count);
            q.Enqueue(10);
            Assert.AreEqual(2, q.Count);
        }

        [Test]
        public void EnqueueAndDequeueWork()
        {
            var q = new Queue<int>();
            q.Enqueue(10);
            q.Enqueue(2);
            q.Enqueue(4);
            Assert.AreEqual(10, q.Dequeue());
            Assert.AreEqual(2, q.Dequeue());
            Assert.AreEqual(4, q.Dequeue());
        }

        [Test]
        public void PeekWorks()
        {
            var q = new Queue<int>();
            q.Enqueue(10);
            Assert.AreEqual(10, q.Peek());
            q.Enqueue(2);
            Assert.AreEqual(10, q.Peek());
            q.Dequeue();
            Assert.AreEqual(2, q.Peek());
        }

        [Test]
        public void ContainsWorks()
        {
            var q = new Queue<int>();
            q.Enqueue(10);
            q.Enqueue(2);
            q.Enqueue(4);
            Assert.True(q.Contains(10));
            Assert.True(q.Contains(2));
            Assert.False(q.Contains(11));
        }

        [Test]
        public void ContainsUsesEqualsMethod()
        {
            var q = new Queue<C>();
            q.Enqueue(new C(1));
            q.Enqueue(new C(2));
            q.Enqueue(new C(3));
            Assert.True(q.Contains(new C(2)));
            Assert.False(q.Contains(new C(4)));
        }

        [Test]
        public void ClearWorks()
        {
            var q = new Queue<int>();
            q.Enqueue(10);
            q.Enqueue(2);
            q.Enqueue(4);
            q.Clear();
            Assert.AreEqual(0, q.Count);
        }
    }
}
