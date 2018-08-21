using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    public static class Bridge3678Extensions
    {
        /// <summary>
        /// Implements the scenario required to reproduce a potential malformed
        /// javascript output by exploring nested using statements within a
        /// yield resumable method.
        /// </summary>
        /// <typeparam name="A"></typeparam>
        /// <typeparam name="B"></typeparam>
        /// <typeparam name="T"></typeparam>
        /// <param name="seqA"></param>
        /// <param name="seqB"></param>
        /// <param name="func"></param>
        /// <returns></returns>
        public static IEnumerable<T> Zipper<A, B, T>(
            this IEnumerable<A> seqA, IEnumerable<B> seqB, Func<A, B, T> func)
        {
            using (var iteratorA = seqA.GetEnumerator())
            {
                using (var iteratorB = seqB.GetEnumerator())
                {
                    while (true)
                    {
                        bool isDoneA = !iteratorA.MoveNext();
                        bool isDoneB = !iteratorB.MoveNext();



                        if (isDoneA || isDoneB)
                        {
                            break;
                        }

                        yield return func(iteratorA.Current, iteratorB.Current);
                    }
                }
            }
        }
    }

    /// <summary>
    /// Ensures nested using works in a yield resumable method.
    /// </summary>
    [TestFixture(TestNameFormat = "#3678 - {0}")]
    public class Bridge3678
    {
        [Test]
        public static void TestNestedUsing()
        {
            var a = new string[] { "1", "2", "3" };
            var b = new string[] { "4", "5", "6" };
            Func<string, string, string> fn = (s1, s2) => {
                return s1 + s2;
            };
            var result = a.Zipper(b, fn);
            Assert.AreEqual("14.25.36", string.Join(".", result.ToArray()), "Nested usings in a yield resumable method produces valid javascript code.");
        }
    }
}