using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.PREFIX_SYSTEM_CLASSES)]
    [TestFixture(TestNameFormat = "Boolean - {0}")]
    public class BooleanTests
    {
        private class Counter
        {
            public int Count
            {
                get; set;
            }

            public bool Increment(bool r = true)
            {
                Count++;

                return r;
            }
        }

        [Test]
        public void TypePropertiesAreCorrect_SPI_1575()
        {
            Assert.True((object)true is bool);
            Assert.AreEqual("System.Boolean", typeof(bool).FullName);
            // #1575
            Assert.AreEqual(typeof(object), typeof(bool).BaseType);
            Assert.False(typeof(bool).IsClass);
            Assert.True(typeof(IComparable<bool>).IsAssignableFrom(typeof(bool)));
            Assert.True(typeof(IEquatable<bool>).IsAssignableFrom(typeof(bool)));

            object b = false;
            Assert.True(b is IComparable<bool>);
            Assert.True(b is IEquatable<bool>);

            var interfaces = typeof(bool).GetInterfaces();
            Assert.AreEqual(3, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<bool>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<bool>)));
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIsFalse()
        {
            Assert.AreEqual(false, GetDefaultValue<bool>());
        }

        [Test]
        public void CreatingInstanceReturnsFalse()
        {
            Assert.AreEqual(false, Activator.CreateInstance<bool>());
        }

        [Test]
        public void DefaultConstructorReturnsFalse_SPI_1576()
        {
            // #1576
            Assert.AreEqual(false, new bool());
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(true.GetHashCode(), true.GetHashCode());
            Assert.AreEqual(false.GetHashCode(), false.GetHashCode());
            Assert.AreNotEqual(true.GetHashCode(), false.GetHashCode());
        }

        [Test]
        public void ObjectEqualsWorks()
        {
            Assert.True(true.Equals((object)true));
            Assert.False(true.Equals((object)false));
            Assert.False(false.Equals((object)true));
            Assert.True(false.Equals((object)false));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True(true.Equals(true));
            Assert.False(true.Equals(false));
            Assert.False(false.Equals(true));
            Assert.True(false.Equals(false));

            Assert.True(((IEquatable<bool>)true).Equals(true));
            Assert.False(((IEquatable<bool>)true).Equals(false));
            Assert.False(((IEquatable<bool>)false).Equals(true));
            Assert.True(((IEquatable<bool>)false).Equals(false));
        }

        [Test]
        public void LogicalExclusiveOrWorks()
        {
            Assert.True(true ^ false);
            Assert.False(false ^ false);
            Assert.False(true ^ true);
            var t = true;
            var f = false;
            Assert.True(t ^ f);
            Assert.False(f ^ f);
            Assert.False(t ^ t);
        }

        [Test]
        public void LogicalAndWorks()
        {
            Assert.False(true & false);
            Assert.False(false & false);
            Assert.True(true & true);
            var t = true;
            var f = false;
            Assert.False(t & f);
            Assert.False(f & f);
            Assert.True(t & t);
        }

        [Test]
        public void LogicalNegationWorks()
        {
            Assert.False(!true);
            Assert.True(!false);
            var t = true;
            var f = false;
            Assert.False(!t);
            Assert.True(!f);
        }

        [Test]
        public void ConditionalOperatorWorks()
        {
            var t = true;
            var f = false;
            Assert.False(!t ? true : false);
            Assert.True(!f ? true : false);
        }

        [Test]
        public void ConditionalAndWorks()
        {
            var counterAnd = new Counter();

            Assert.True(counterAnd.Increment() && counterAnd.Increment());
            Assert.AreEqual(2, counterAnd.Count, "1. Counter 2");
            Assert.False(counterAnd.Increment() && counterAnd.Increment(false));
            Assert.AreEqual(4, counterAnd.Count, "2. Counter 4");

            Assert.False(counterAnd.Increment(false) && counterAnd.Increment());
            Assert.AreEqual(5, counterAnd.Count, "3. Counter 5");
            Assert.False(counterAnd.Increment(false) && counterAnd.Increment(false));
            Assert.AreEqual(6, counterAnd.Count, "4. Counter 6");

            var t = true;
            var f = false;

            Assert.True(t && counterAnd.Increment());
            Assert.AreEqual(7, counterAnd.Count, "5. Counter 7");
            Assert.False(t && counterAnd.Increment(false));
            Assert.AreEqual(8, counterAnd.Count, "6. Counter 8");

            Assert.False(f && counterAnd.Increment());
            Assert.AreEqual(8, counterAnd.Count, "7. Counter 8");
            Assert.False(f && counterAnd.Increment(false));
            Assert.AreEqual(8, counterAnd.Count, "8. Counter 8");
        }

        [Test]
        public void ConditionalOrWorks()
        {
            var counterOr = new Counter();

            Assert.True(counterOr.Increment() || counterOr.Increment());
            Assert.AreEqual(1, counterOr.Count, "1. Counter 1");
            Assert.True(counterOr.Increment() || counterOr.Increment(false));
            Assert.AreEqual(2, counterOr.Count, "2. Counter 2");

            Assert.True(counterOr.Increment(false) || counterOr.Increment());
            Assert.AreEqual(4, counterOr.Count, "3. Counter 4");
            Assert.False(counterOr.Increment(false) || counterOr.Increment(false));
            Assert.AreEqual(6, counterOr.Count, "4. Counter 6");

            var t = true;
            var f = false;

            Assert.True(t || counterOr.Increment());
            Assert.AreEqual(6, counterOr.Count, "5. Counter 6");
            Assert.True(t || counterOr.Increment(false));
            Assert.AreEqual(6, counterOr.Count, "6. Counter 6");

            Assert.True(f || counterOr.Increment());
            Assert.AreEqual(7, counterOr.Count, "7. Counter 7");
            Assert.False(f || counterOr.Increment(false));
            Assert.AreEqual(8, counterOr.Count, "8. Counter 8");
        }

        [Test]
        public void EqualityWorks()
        {
            Assert.True(true == true);
            Assert.False(true == false);
            Assert.False(false == true);
            Assert.True(false == false);

            var t = true;
            var t1 = true;
            var f = false;
            var f1 = false;
            Assert.True(t == t1);
            Assert.False(t == f);
            Assert.False(f == t);
            Assert.True(f == f1);
        }

        [Test]
        public void InequalityWorks()
        {
            Assert.False(true != true);
            Assert.True(true != false);
            Assert.True(false != true);
            Assert.False(false != false);

            var t = true;
            var t1 = true;
            var f = false;
            var f1 = false;
            Assert.False(t != t1);
            Assert.True(t != f);
            Assert.True(f != t);
            Assert.False(f != f1);
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(true.CompareTo(true) == 0);
            Assert.True(true.CompareTo(false) > 0);
            Assert.True(false.CompareTo(true) < 0);
            Assert.True(false.CompareTo(false) == 0);
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<bool>)true).CompareTo(true) == 0);
            Assert.True(((IComparable<bool>)true).CompareTo(false) > 0);
            Assert.True(((IComparable<bool>)false).CompareTo(true) < 0);
            Assert.True(((IComparable<bool>)false).CompareTo(false) == 0);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreStrictEqual(bool.Parse("true"), true, "true");
            Assert.AreStrictEqual(bool.Parse("TRue"), true, "TRue");
            Assert.AreStrictEqual(bool.Parse("TRUE"), true, "TRUE");
            Assert.AreStrictEqual(bool.Parse("  true\t"), true, "true with spaces");

            Assert.AreStrictEqual(bool.Parse("false"), false, "false");
            Assert.AreStrictEqual(bool.Parse("FAlse"), false, "FAlse");
            Assert.AreStrictEqual(bool.Parse("FALSE"), false, "FALSE");
            Assert.AreStrictEqual(bool.Parse("  false\t"), false, "false with spaces");

            Assert.Throws<ArgumentNullException>(() => { var b = Boolean.Parse(null); });
            Assert.Throws<FormatException>(() => { var b = Boolean.Parse(""); });
            Assert.Throws<FormatException>(() => { var b = Boolean.Parse(" "); });
            Assert.Throws<FormatException>(() => { var b = Boolean.Parse("Garbage"); });
            Assert.Throws<FormatException>(() => { var b = Boolean.Parse("True\0Garbage"); });
            Assert.Throws<FormatException>(() => { var b = Boolean.Parse("True\0True"); });
            Assert.Throws<FormatException>(() => { var b = Boolean.Parse("True True"); });
            Assert.Throws<FormatException>(() => { var b = Boolean.Parse("True False"); });
            Assert.Throws<FormatException>(() => { var b = Boolean.Parse("False True"); });
            Assert.Throws<FormatException>(() => { var b = Boolean.Parse("Fa lse"); });
            Assert.Throws<FormatException>(() => { var b = Boolean.Parse("T"); });
            Assert.Throws<FormatException>(() => { var b = Boolean.Parse("0"); });
            Assert.Throws<FormatException>(() => { var b = Boolean.Parse("1"); });
        }

        [Test]
        public void TryParseWorks()
        {
            // Success cases
            VerifyBooleanTryParse(1, "True", true, true);
            VerifyBooleanTryParse(2, "true", true, true);
            VerifyBooleanTryParse(3, "TRUE", true, true);
            VerifyBooleanTryParse(4, "tRuE", true, true);
            VerifyBooleanTryParse(5, "False", false, true);
            VerifyBooleanTryParse(6, "false", false, true);
            VerifyBooleanTryParse(7, "FALSE", false, true);
            VerifyBooleanTryParse(8, "fAlSe", false, true);
            VerifyBooleanTryParse(9, "  True  ", true, true);
            VerifyBooleanTryParse(10, "False  ", false, true);
            VerifyBooleanTryParse(11, "True\0", true, true);
            VerifyBooleanTryParse(12, "False\0", false, true);
            VerifyBooleanTryParse(13, "True\0    ", true, true);
            VerifyBooleanTryParse(14, " \0 \0  True   \0 ", true, true);
            VerifyBooleanTryParse(15, "  False \0\0\0  ", false, true);

            // Fail cases
            VerifyBooleanTryParse(16, null, false, false);
            VerifyBooleanTryParse(17, "", false, false);
            VerifyBooleanTryParse(18, " ", false, false);
            VerifyBooleanTryParse(19, "Garbage", false, false);
            VerifyBooleanTryParse(20, "True\0Garbage", false, false);
            VerifyBooleanTryParse(21, "True\0True", false, false);
            VerifyBooleanTryParse(22, "True True", false, false);
            VerifyBooleanTryParse(23, "True False", false, false);
            VerifyBooleanTryParse(24, "False True", false, false);
            VerifyBooleanTryParse(25, "Fa lse", false, false);
            VerifyBooleanTryParse(26, "T", false, false);
            VerifyBooleanTryParse(27, "0", false, false);
            VerifyBooleanTryParse(28, "1", false, false);
        }

        [Test] //#1405
        public void BoolStringWorks()
        {
            Assert.AreEqual("True", bool.TrueString);
            Assert.AreEqual("False", bool.FalseString);
        }

        private void VerifyBooleanTryParse(int i, string value, bool expectedResult, bool expectedReturn)
        {
            bool result;

            bool returnValue = Boolean.TryParse(value, out result);
            Assert.AreEqual(expectedReturn, returnValue, i + " Return value: " + value);
            Assert.AreEqual(expectedResult, result, i + " Result: " + value);
        }
    }
}