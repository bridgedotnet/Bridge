using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether replacing a value in a given
    /// position in a two-dimensional array does not touch the remaining of the
    /// array.
    /// </summary>
    [TestFixture(TestNameFormat = "#3396 - {0}")]
    public class Bridge3396
    {
        /// <summary>
        /// The array requires to be an array of a custom structure.
        /// </summary>
        private struct TestStructure
        {
            public bool Foo { set; get; }
        }

        /// <summary>
        /// There's also a different implementation involving the ObjectLiteral
        /// concept.
        /// </summary>
        [ObjectLiteral]
        private struct TestStructureObjectLiteral
        {
            public bool Foo { set; get; }
        }

        /// <summary>
        /// Build a two-dimensional array (5x5), replace one value and check
        /// whether another element in the array was not changed.
        /// </summary>
        [Test]
        public static void TestMultiDimArrayDefValue()
        {
            var map2d = new TestStructure[5, 5];
            map2d[1, 1].Foo = true;
            Assert.True(map2d[1, 1].Foo, "Changed array element has the expected value.");
            Assert.False(map2d[2, 2].Foo, "Other array element is untouched.");

            int truecount = 0;
            for (var i = 0; i < 5; i++)
            {
                for (var j = 0; j < 5; j++)
                {
                    if (map2d[i, j].Foo)
                    {
                        truecount++;
                    }
                }
            }

            Assert.AreEqual(1, truecount, "One and only one element in the whole matrix is set to true.");
        }

        /// <summary>
        /// Repeat the test above for the ObjectLiteral class.
        /// </summary>
        [Test]
        public static void TestMultiDimArrayObjectLiteralDefValue()
        {
            var map2d = new TestStructureObjectLiteral[5, 5];
            map2d[1, 1].Foo = true;
            Assert.True(map2d[1, 1].Foo, "Changed array element has been changed.");
            Assert.Null(map2d[2, 2].Foo, "Other array element is untouched.");

            int truecount = 0;
            for (var i = 0; i < 5; i++)
            {
                for (var j = 0; j < 5; j++)
                {
                    if (map2d[i, j].Foo)
                    {
                        truecount++;
                    }
                }
            }

            Assert.AreEqual(1, truecount, "One and only one element in the whole matrix is set to true.");
        }
    }
}