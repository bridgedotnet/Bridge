using Bridge.Test.NUnit;

namespace Bridge.ClientTest.CSharp7
{
    /// <summary>
    /// The test here consists in checking C# 7's 'is' syntax support.
    /// </summary>
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Is pattern - {0}")]
    public class TestIsPattern
    {
        /// <summary>
        /// Explores several 'is' pattern syntax variations, and fail if they
        /// do not behave the expected way.
        /// </summary>
        [Test]
        public static void IsPatternTests()
        {
            object o = "16"; 
            if (o is int i || (o is string s && int.TryParse(s, out i))) 
            {
                object o1 = "17";
                if (o1 is int i1 || (o1 is string s1 && int.TryParse(s1, out i1)))
                {
                    Assert.AreEqual(17, i1, "'is' expression may be bound to nested conditionals.");
                }
                else
                {
                    Assert.Fail("'is' expression can't reliably nest conditional expressions.");
                }

                Assert.AreEqual(16, i, "String-filled object can be inferred from composite 'is' conditional expression.");
            }
            else
            {
                Assert.Fail("String-filled object cannot be inferred from composite 'is' conditional expression.");
            }

            // Added after initial set of tests, checks against 'null' value matching.
            o = null;
            if (o is null)
            {
                Assert.Null(o, "Null can be used within 'is' expression.");
            }
            else
            {
                Assert.Fail("Null-bound variable evaluates to false when checked against 'is null'.");
            }

            if (!(o is int ii))
            {
                Assert.Null(o, "Null can be compared with non-nullable type within 'is' expression.");
            }
            else
            {
                Assert.Fail("Null-bound variable matched a non-nullable type within 'is' expression.");
            }

            o = double.NaN;
            const double value = double.NaN;
            if (o is value)
            {
                Assert.True(o.Equals(double.NaN), "'is' argument may be a variable.");
            }
            else
            {
                Assert.Fail("'is' argument as a variable does not resolve to the variable's type.");
            }
        }
    }
}