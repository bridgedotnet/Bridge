using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2369 - {0}")]
    public class Bridge2369
    {
        public interface IBar
        {
        }

        public interface IFoo<T>
        {
            int Foo(T t);
        }

        public class G1<T> : IFoo<T>
        {
            public int Foo(T t)
            {
                return 1;
            }
        }

        public class G2 : IFoo<string>
        {
            public int Foo(string t)
            {
                return 2;
            }
        }

        public class G3 : IEquatable<IBar[]>, IEquatable<string[]>
        {
            public int tracker;

            public bool Equals(IBar[] other)
            {
                tracker = 1;
                return true;
            }

            bool IEquatable<string[]>.Equals(string[] other)
            {
                this.tracker = 2;
                return true;
            }
        }

        [Test]
        public static void TestArrayTypeAlias()
        {
            IFoo<IBar[]> foo = new G1<IBar[]>();
            Assert.AreEqual(1, foo.Foo(null));

            IFoo<string> foo1 = new G2();
            Assert.AreEqual(2, foo1.Foo(null));

            var g3 = new G3();
            IEquatable<IBar[]> ibar = g3;
            IEquatable<string[]> istr = g3;

            g3.tracker = 0;
            g3.Equals(new IBar[0]);
            Assert.AreEqual(1, g3.tracker);

            g3.tracker = 0;
            ibar.Equals(new IBar[0]);
            Assert.AreEqual(1, g3.tracker);

            g3.tracker = 0;
            istr.Equals(new string[0]);
            Assert.AreEqual(2, g3.tracker);
        }
    }
}