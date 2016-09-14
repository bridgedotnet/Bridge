using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1821 - {0}")]
    public class Bridge1821
    {
        public interface IInterface<T>
        {
            T Act(T value);
        }

        [Immutable]
        public struct TT<T>
        {
            public T A;
            public T B;
        }

        public interface IClass<T> : IInterface<TT<T>> { }

        public class CClass<T> : IClass<T>
        {
            public TT<T> Act(TT<T> v)
            {
                return v;
            }
        }

        public class AAnother
        {
            public static IClass<T> Create<T>()
            {
                IClass<T> x;
                x = new CClass<T>();
                x.Act(new TT<T>());

                return x;
            }
        }

        interface IBar<T>
        {

            T Value { get; }
        }


        class Bar<T> : IBar<T>
        {
            T v;
            public T Value
            {
                get
                {
                    return v;
                }
            }

            public Bar(T v)
            {
                this.v = v;
            }
        }

        struct Xxx
        {
            public int field;

            public Xxx(int f)
            {
                this.field = f;
            }
        }

        class Foo
        {
            public IBar<Xxx?> A { get { return new Bar<Xxx?>(new Xxx(5)); } }
        }

        [Test]
        public void TestInterfaceMember1()
        {
            var ic = AAnother.Create<int>();
            Assert.NotNull(ic);
            Assert.True(ic is CClass<int>);
        }

        [Test]
        public void TestInterfaceMember2()
        {
            Foo foo = new Foo();
            var x = foo.A.Value;

            Assert.NotNull(x);
            Assert.AreEqual(5, x.Value.field);
        }
    }
}