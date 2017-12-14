using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here checks whether a '-(i)' expression is correctly output
    /// to JavaScript.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3258 - {0}")]
    public class Bridge3258
    {
        /// <summary>
        /// Simple class implementing the implicit operator
        /// </summary>
        public class O
        {
            /// <summary>
            /// Implicit operator for type 'double'
            /// </summary>
            /// <param name="d"></param>
            [Bridge.Template("{d}")]
            static extern public implicit operator O(double d);

            /// <summary>
            /// Implicit operator for type 'int'
            /// </summary>
            /// <param name="i"></param>
            [Bridge.Template("{i}")]
            static extern public implicit operator O(int i);
        }

        /// <summary>
        /// Tests different alternations of -i, whether they produce a negative
        /// i value on client-side.
        /// </summary>
        [Test]
        public static void TestUnaryImplicitOperator()
        {
            double i = 1;
            O a = -i;
            O b = -(i);
            O c = (-(i));

            Assert.AreEqual(-1, a, "C# double '-i' evals on JS as '-i'");
            Assert.AreEqual(-1, b, "C# double '-(i)' evals on JS as '-i'");
            Assert.AreEqual(-1, c, "C# double '(-(i))' evals on JS as '-i'");

            int j = 1;
            O x = -j;
            O y = -(j);
            O z = (-(j));

            Assert.AreEqual(-1, x, "C# integer '-j' evals on JS as '-j'");
            Assert.AreEqual(-1, y, "C# integer '-(j)' evals on JS as '-j'");
            Assert.AreEqual(-1, z, "C# integer '(-(j))' evals on JS as '-j'");
        }
    }
}