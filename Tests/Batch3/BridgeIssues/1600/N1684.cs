using Bridge.Test;

using System.ComponentModel;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1684 - {0}")]
    public class Bridge1684
    {
        public sealed class MessageEditState { }

        public sealed class MessageEditState2 { }

        public sealed class MessageTable : PureComponent<Set<MessageEditState>> { }

        public abstract class PureComponent<T> { }

        public sealed class Set<T>
        {
            private static readonly Set<T> _empty = new Set<T>();
            public static Set<T> Empty { get { return _empty; } }

            private Set() { }

            public Set<T> Add(T value) { return this; }

            public int Count { get { return 1; } }
        }

        [Test]
        public void TestStaticInitializationForGenericClass()
        {
            var setOfMessageEditState2 = Set<MessageEditState2>.Empty.Add(new MessageEditState2());
            Assert.AreEqual(1, setOfMessageEditState2.Count);

            var setOfMessageEditState = Set<MessageEditState>.Empty.Add(new MessageEditState());
            Assert.AreEqual(1, setOfMessageEditState.Count);
        }
    }
}