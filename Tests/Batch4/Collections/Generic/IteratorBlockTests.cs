using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

#pragma warning disable 162	// CS0162: Unreachable code detected. Disable because we want to assert that code does not reach unreachable parts

namespace Bridge.ClientTest.Batch4.Collections.Generic
{
    [TestFixture(TestNameFormat = "IteratorBlockTests - {0}")]
    public class IteratorBlockTests
    {
        public class C
        {
            private StringBuilder _sb;

            public C(StringBuilder sb)
            {
                _sb = sb;
            }

            public IEnumerator<int> GetEnumerator(int n)
            {
                try
                {
                    for (int i = 0; i < n; i++)
                    {
                        _sb.AppendLine("yielding " + i);
                        yield return i;
                    }
                    _sb.AppendLine("yielding -1");
                    yield return -1;
                }
                finally
                {
                    _sb.AppendLine("in finally");
                }
            }

            public IEnumerator<int> GetEnumeratorThrows()
            {
                try
                {
                    _sb.AppendLine("yielding 1");
                    yield return 1;
                    _sb.AppendLine("yielding 2");
                    yield return 2;
                    _sb.AppendLine("throwing");
                    throw new Exception("test");
                    _sb.AppendLine("yielding 3");
                    yield return 3;
                }
                finally
                {
                    _sb.AppendLine("in finally");
                }
            }

            public IEnumerable<int> GetEnumerable(int n)
            {
                try
                {
                    for (int i = 0; i < n; i++)
                    {
                        _sb.AppendLine("yielding " + i);
                        yield return i;
                    }
                    _sb.AppendLine("yielding -1");
                    yield return -1;
                }
                finally
                {
                    _sb.AppendLine("in finally");
                }
                n = 0; // Just to verify that the value of 'n' is not reused in the next call
            }

            public IEnumerable<int> GetEnumerableThrows(int n)
            {
                try
                {
                    _sb.AppendLine("yielding 1");
                    yield return 1;
                    _sb.AppendLine("yielding 2");
                    yield return 2;
                    _sb.AppendLine("throwing");
                    throw new Exception("test");
                    _sb.AppendLine("yielding 3");
                    yield return 3;
                }
                finally
                {
                    _sb.AppendLine("in finally");
                }
            }

            public IEnumerable<int> GetEnumerableMutateParameter(int n)
            {
                for (; n > 0; n--)
                {
                    yield return n;
                }
            }

            public IEnumerable<int> GetEnumerableSimple(int n)
            {
                for (int i = 0; i < n; i++)
                {
                    yield return i;
                }
                yield return -1;
            }
        }

        private void AssertEqual(string actual, string expected, string message = null)
        {
            Assert.AreEqual(expected.Replace("\r\n", "\n"), actual.Replace("\r\n", "\n"), message);
        }

        [Test]
        public void TypeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable_SPI_1554()
        {
            IEnumerator<int> enm = null;

            // #1554
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            TestHelper.Safe(() => enm = new C(null).GetEnumerator(0));
            Assert.True((object)enm is IEnumerator<int>);
            Assert.True((object)enm is IEnumerator);
            Assert.True((object)enm is IDisposable);
        }

        [Test]
        public void EnumeratingIEnumeratorIteratorToEndWorks_SPI_1555()
        {
            // #1555
            var sb = new StringBuilder();
            var enm = new C(sb).GetEnumerator(2);

            while (enm.MoveNext())
            {
                sb.AppendLine("got " + enm.Current);
            }

            AssertEqual(sb.ToString(), "yielding 0\ngot 0\nyielding 1\ngot 1\nyielding -1\ngot -1\nin finally\n");
        }

        [Test]
        public void PrematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks_SPI_1555()
        {
            // #1555
            var sb = new StringBuilder();
            var enm = new C(sb).GetEnumerator(5);

            for (int i = 0; i < 2; i++)
            {
                enm.MoveNext();
                sb.AppendLine("got " + enm.Current);
            }
            enm.Dispose();

            AssertEqual(sb.ToString(), "yielding 0\ngot 0\nyielding 1\ngot 1\nin finally\n");
        }

        [Test]
        public void ExceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks_SPI_1554()
        {
            var sb = new StringBuilder();
            IEnumerator<int> enm = null;

            // #1554
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            TestHelper.Safe(() => enm = new C(sb).GetEnumeratorThrows());

            try
            {
                for (int i = 0; i < 100; i++)
                {
                    enm.MoveNext();
                    sb.AppendLine("got " + enm.Current);
                }
                Assert.Fail("Should have thrown an exception in the loop");
            }
            catch (Exception)
            {
                sb.AppendLine("caught exception");
            }

            AssertEqual(sb.ToString(), "yielding 1\ngot 1\nyielding 2\ngot 2\nthrowing\nin finally\ncaught exception\n");
        }

        [Test]
        public void TypeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface_SPI_1554()
        {
            IEnumerable<int> enm = null;
            // #1554
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            TestHelper.Safe(() => enm = new C(null).GetEnumerable(0));

            Assert.True((object)enm is IEnumerable<int>);
            Assert.True((object)enm is IEnumerable);
        }

        [Test]
        public void EnumeratingIEnumerableIteratorToEndWorks_SPI_1555()
        {
            // #1555
            var sb = new StringBuilder();
            var enm = new C(sb).GetEnumerable(2);

            foreach (var i in enm)
                sb.AppendLine("got " + i);
            sb.AppendLine("-");
            foreach (var i in enm)
                sb.AppendLine("got " + i);

            AssertEqual(sb.ToString(), "yielding 0\ngot 0\nyielding 1\ngot 1\nyielding -1\ngot -1\nin finally\n"
                + "-\nyielding 0\ngot 0\nyielding 1\ngot 1\nyielding -1\ngot -1\nin finally\n");
        }

        [Test]
        public void PrematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks_SPI_1555()
        {
            // #1555
            var sb = new StringBuilder();
            int n = 0;
            foreach (var i in new C(sb).GetEnumerable(5))
            {
                sb.AppendLine("got " + i);
                if (++n == 2)
                    break;
            }

            AssertEqual(sb.ToString(), "yielding 0\ngot 0\nyielding 1\ngot 1\nin finally\n");
        }

        [Test]
        public void ExceptionInIEnumerableIteratorBodyExecutesFinallyBlocks_SPI_1554()
        {
            var sb = new StringBuilder();
            IEnumerable<int> enumerable = null;

            // #1554
            // Test restructure to keep assertion count correct (prevent uncaught test exception)
            TestHelper.Safe(() => enumerable = new C(sb).GetEnumerableThrows(5));

            try
            {
                var enumerator = enumerable.GetEnumerator();
                for (int i = 0; i < 100; i++)
                {
                    enumerator.MoveNext();
                    sb.AppendLine("got " + enumerator.Current);
                }
                Assert.Fail("Should have thrown");
            }
            catch (Exception)
            {
                sb.AppendLine("caught exception");
            }

            AssertEqual(sb.ToString(), "yielding 1\ngot 1\nyielding 2\ngot 2\nthrowing\nin finally\ncaught exception\n");
        }

        [Test]
        public void EnumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters()
        {
            var sb = new StringBuilder();

            var enm = new C(sb).GetEnumerableMutateParameter(3);
            foreach (int i in enm)
                sb.AppendLine(i.ToString());
            foreach (int i in enm)
                sb.AppendLine(i.ToString());

            AssertEqual(sb.ToString(), "3\n2\n1\n3\n2\n1\n");
        }

        [Test]
        public void DifferentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals()
        {
            var sb = new StringBuilder();

            var enumerable = new C(sb).GetEnumerableSimple(3);
            var enm1 = enumerable.GetEnumerator();
            var enm2 = enumerable.GetEnumerator();

            while (enm1.MoveNext())
            {
                enm2.MoveNext();
                sb.AppendLine(enm1.Current.ToString());
                sb.AppendLine(enm2.Current.ToString());
            }

            AssertEqual(sb.ToString(), "0\n0\n1\n1\n2\n2\n-1\n-1\n");
        }
    }
}