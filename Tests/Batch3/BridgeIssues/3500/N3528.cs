using Bridge.Html5;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Ensures GetIndexerVal implementation on classes carry on to indexer
    /// methods in inherited, mapped and external classes.
    /// </summary>
    [TestFixture(TestNameFormat = "#3528 - {0}")]
    public class Bridge3528
    {
        [Init(InitPosition.Top)]
        public static void Init()
        {
            /*@
    var Bridge3528_A = (function () {
        function Bridge3528_A() {
            this[1] = "one";
            this[2] = "two";
        }
        return Bridge3528_A;
    }());
            */
        }

        [External]
        [Name("Bridge3528_A")]
        public class A
        {
            public virtual extern string this[int n] { get; }
        }

        class B : A
        {
            public string GetIndexerVal(int n) => base[n];
        }

        [Test]
        public static void TestExternalBaseIndexer()
        {
            var b = new B();
            Assert.AreEqual("one", b[1], "Value by bracket indexer can be fetched.");
            Assert.AreEqual("one", b.GetIndexerVal(1), "Value by indexer method can be fetched.");
        }
    }
}