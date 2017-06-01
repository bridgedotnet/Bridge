using Bridge.Test.NUnit;

using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.PREFIX_COLLECTIONS)]
    [TestFixture(TestNameFormat = "Stack - {0}")]
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

        private Stack<string> GetStack()
        {
            return new Stack<string>(new[] { "x", "y" });
        }

        private int[] GetArray()
        {
            return new[] { 8, 7, 4, 1 };
        }

        private int[] GetReversedArray()
        {
            return new[] { 1, 4, 7, 8 };
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Collections.Generic.List`1[[System.Int32, mscorlib]]", typeof(List<int>).FullName, "FullName");
            object stack = new Stack<int>();
            Assert.True(stack is Stack<int>, "is Stack<int> should be true");
            Assert.True(stack is ICollection, "is ICollection<int> should be true");
            Assert.True(stack is IEnumerable<int>, "is IEnumerable<int> should be true");
        }

        [Test]
        public void DefaultConstructorWorks()
        {
            var l = new Stack<int>();
            Assert.AreEqual(0, l.Count);
        }

        [Test]
        public void ConstructorWithCapacityWorks()
        {
            var l = new Stack<int>(12);
            Assert.AreEqual(0, l.Count);
        }

        [Test]
        public void ConstructingFromArrayWorks()
        {
            var arr = GetArray();
            var l = new Stack<int>(arr);
            Assert.False((object)l == (object)arr);
            Assert.AreDeepEqual(GetReversedArray(), l.ToArray());
        }

        [Test]
        public void ConstructingFromListWorks()
        {
            var arr = new Stack<int>(GetArray());
            var l = new Stack<int>(arr);
            Assert.False((object)l == (object)arr);
            Assert.AreDeepEqual(GetArray(), l.ToArray());
        }

        [Test]
        public void ConstructingFromIEnumerableWorks()
        {
            var enm = (IEnumerable<int>)new Stack<int>(GetArray());
            var l = new List<int>(enm);
            Assert.False((object)l == (object)enm);
            Assert.AreDeepEqual(GetReversedArray(), l.ToArray());
        }

        [Test]
        public void CountWorks()
        {
            Assert.AreEqual(0, new Stack<string>().Count);
            Assert.AreEqual(1, new Stack<string>(new[] { "x" }).Count);
            Assert.AreEqual(2, GetStack().Count);
        }

        [Test]
        public void ForeachWorks()
        {
            string result = "";
            foreach (var s in GetStack())
            {
                result += s;
            }
            Assert.AreEqual("yx", result);
        }

        //[Test]
        //public void GetEnumeratorWorks()
        //{
        //    var e = GetStack().GetEnumerator();
        //    Assert.True(e.MoveNext());
        //    Assert.AreEqual("x", e.Current);
        //    Assert.True(e.MoveNext());
        //    Assert.AreEqual("y", e.Current);
        //    Assert.False(e.MoveNext());
        //}

        [Test]
        public void PushWorks()
        {
            var l = GetStack();
            l.Push("a");
            Assert.AreDeepEqual(new[] { "a", "y", "x" }, l.ToArray());
        }

        [Test]
        public void ClearWorks()
        {
            var l = GetStack();
            l.Clear();
            Assert.AreEqual(l.Count, 0);
        }

        [Test]
        public void ContainsWorks()
        {
            var list = GetStack();
            Assert.True(list.Contains("x"));
            Assert.False(list.Contains("z"));
        }

        [Test]
        public void ContainsUsesEqualsMethod()
        {
            var l = new Stack<C>(new[] { new C(1), new C(2), new C(3) });
            Assert.True(l.Contains(new C(2)));
            Assert.False(l.Contains(new C(4)));
        }

        [Test]
        public void ForeachWithListItemCallbackWorks()
        {
            string result = "";
            new Stack<string>(new[] { "a", "b", "c" }).ToList().ForEach(s => result += s);
            Assert.AreEqual("cba", result);
        }

        [Test]
        public void PopWorks()
        {
            var list = GetStack();
            Assert.AreEqual("y", list.Pop());
            Assert.AreDeepEqual(new[] { "x" }, list.ToArray());
        }

        [Test]
        public void PeekWorks()
        {
            var list = GetStack();
            Assert.AreEqual("y", list.Peek());
            Assert.AreDeepEqual(new[] { "y", "x" }, list.ToArray());
        }

        [Test]
        public void ToArrayWorks()
        {
            var l = new Stack<string>();
            l.Push("a");
            l.Push("b");

            var actual = l.ToArray();

            Assert.False(ReferenceEquals(l, actual));
            Assert.True(actual is Array);
            Assert.AreDeepEqual(new[] { "b", "a" }, actual);
        }
    }
}