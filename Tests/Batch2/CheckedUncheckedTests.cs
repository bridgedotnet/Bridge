using Bridge.Test.NUnit;
using Bridge.ClientTestHelper;

using System;

namespace Bridge.ClientTest.Batch2
{
    // Bridge[#1092]
    // "overflowMode":  "Javascript" bridge.json option
    public class CheckedUncheckedTests
    {
        private static object Bypass(object o)
        {
            return o;
        }

        [Category(Constants.MODULE_CHECKED_UNCKECKED)]
        [TestFixture(TestNameFormat = "Checked - " + Constants.BATCH_NAME + " {0}")]
        public class CheckedTests
        {
            [Test]
            public static void TestInt32()
            {
                checked
                {
                    var max = Int32.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier +");
                    Assert.Throws<OverflowException>(() => { var r = max2++; }, "Through identifier post++");
                    Assert.Throws<OverflowException>(() => { var r = ++max3; }, "Through identifier ++pre");
                    Assert.Throws<OverflowException>(() => { var r = 2 * max; }, "Through identifier *");

                    Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter +");
                    Assert.Throws<OverflowException>(() => { Bypass(max3++); }, "Through parameter post++");
                    Assert.Throws<OverflowException>(() => { Bypass(++max4); }, "Through parameter ++pre");
                    Assert.Throws<OverflowException>(() => { Bypass(2 * max); }, "Through parameter *");

                    var min = Int32.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier -");
                    Assert.Throws<OverflowException>(() => { var r = min1--; }, "Through identifier post--");
                    Assert.Throws<OverflowException>(() => { var r = --min2; }, "Through identifier pre--");
                    Assert.Throws<OverflowException>(() => { var r = -min; }, "Through identifier unary -");

                    Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter -");
                    Assert.Throws<OverflowException>(() => { Bypass(min3--); }, "Through parameter post--");
                    Assert.Throws<OverflowException>(() => { Bypass(--min4); }, "Through parameter --pre");
                    Assert.Throws<OverflowException>(() => { Bypass(-min); }, "Through parameter unary -");
                }
            }

            [Test]
            public static void TestUInt32()
            {
                checked
                {
                    var max = UInt32.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier +");
                    Assert.Throws<OverflowException>(() => { var r = max1++; }, "Through identifier post++");
                    Assert.Throws<OverflowException>(() => { var r = ++max2; }, "Through identifier ++pre");
                    Assert.Throws<OverflowException>(() => { var r = 2 * max; }, "Through identifier *");

                    Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter +");
                    Assert.Throws<OverflowException>(() => { Bypass(max3++); }, "Through parameter post++");
                    Assert.Throws<OverflowException>(() => { Bypass(++max4); }, "Through parameter ++pre");
                    Assert.Throws<OverflowException>(() => { Bypass(2 * max); }, "Through parameter *");

                    var min = UInt32.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier -");
                    Assert.Throws<OverflowException>(() => { var r = min1--; }, "Through identifier post--");
                    Assert.Throws<OverflowException>(() => { var r = --min2; }, "Through identifier pre--");

                    Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter -");
                    Assert.Throws<OverflowException>(() => { Bypass(min3--); }, "Through parameter post--");
                    Assert.Throws<OverflowException>(() => { Bypass(--min4); }, "Through parameter --pre");
                }
            }

            [Test]
            public static void TestLong()
            {
                checked
                {
                    var max = long.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier +");
                    Assert.Throws<OverflowException>(() => { var r = max1++; }, "Through identifier post++");
                    Assert.Throws<OverflowException>(() => { var r = ++max2; }, "Through identifier ++pre");
                    Assert.Throws<OverflowException>(() => { var r = 2 * max; }, "Through identifier *");

                    Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter +");
                    Assert.Throws<OverflowException>(() => { Bypass(max3++); }, "Through parameter post++");
                    Assert.Throws<OverflowException>(() => { Bypass(++max4); }, "Through parameter ++pre");
                    Assert.Throws<OverflowException>(() => { Bypass(2 * max); }, "Through parameter *");

                    var min = long.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier -");
                    Assert.Throws<OverflowException>(() => { var r = min1--; }, "Through identifier post--");
                    Assert.Throws<OverflowException>(() => { var r = --min2; }, "Through identifier pre--");
                    Assert.Throws<OverflowException>(() => { var r = -min; }, "Through identifier unary -");

                    Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter -");
                    Assert.Throws<OverflowException>(() => { Bypass(min3--); }, "Through parameter post--");
                    Assert.Throws<OverflowException>(() => { Bypass(--min4); }, "Through parameter --pre");
                    Assert.Throws<OverflowException>(() => { Bypass(-min); }, "Through parameter unary -");
                }
            }

            [Test]
            public static void TestULong()
            {
                checked
                {
                    var max = ulong.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier +");
                    Assert.Throws<OverflowException>(() => { var r = max1++; }, "Through identifier post++");
                    Assert.Throws<OverflowException>(() => { var r = ++max2; }, "Through identifier ++pre");
                    Assert.Throws<OverflowException>(() => { var r = 2 * max; }, "Through identifier *");

                    Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter +");
                    Assert.Throws<OverflowException>(() => { Bypass(max3++); }, "Through parameter post++");
                    Assert.Throws<OverflowException>(() => { Bypass(++max4); }, "Through parameter ++pre");
                    Assert.Throws<OverflowException>(() => { Bypass(2 * max); }, "Through parameter *");

                    var min = ulong.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier -");
                    Assert.Throws<OverflowException>(() => { var r = min1--; }, "Through identifier post--");
                    Assert.Throws<OverflowException>(() => { var r = --min2; }, "Through identifier pre--");

                    Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter -");
                    Assert.Throws<OverflowException>(() => { Bypass(min3--); }, "Through parameter post--");
                    Assert.Throws<OverflowException>(() => { Bypass(--min4); }, "Through parameter --pre");
                }
            }
        }

        [Category(Constants.MODULE_CHECKED_UNCKECKED)]
        [TestFixture(TestNameFormat = "CheckedInsideUnchecked - " + Constants.BATCH_NAME + " {0}")]
        public class CheckedInsideUncheckedTests
        {
            [Test]
            public static void TestInt32()
            {
                unchecked
                {
                    checked
                    {
                        var max = Int32.MaxValue;

                        var max1 = max;
                        var max2 = max;
                        var max3 = max;
                        var max4 = max;

                        Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier +");
                        Assert.Throws<OverflowException>(() => { var r = max2++; }, "Through identifier post++");
                        Assert.Throws<OverflowException>(() => { var r = ++max3; }, "Through identifier ++pre");
                        Assert.Throws<OverflowException>(() => { var r = 2 * max; }, "Through identifier *");

                        Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter +");
                        Assert.Throws<OverflowException>(() => { Bypass(max3++); }, "Through parameter post++");
                        Assert.Throws<OverflowException>(() => { Bypass(++max4); }, "Through parameter ++pre");
                        Assert.Throws<OverflowException>(() => { Bypass(2 * max); }, "Through parameter *");

                        var min = Int32.MinValue;

                        var min1 = min;
                        var min2 = min;
                        var min3 = min;
                        var min4 = min;

                        Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier -");
                        Assert.Throws<OverflowException>(() => { var r = min1--; }, "Through identifier post--");
                        Assert.Throws<OverflowException>(() => { var r = --min2; }, "Through identifier pre--");
                        Assert.Throws<OverflowException>(() => { var r = -min; }, "Through identifier unary -");

                        Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter -");
                        Assert.Throws<OverflowException>(() => { Bypass(min3--); }, "Through parameter post--");
                        Assert.Throws<OverflowException>(() => { Bypass(--min4); }, "Through parameter --pre");
                        Assert.Throws<OverflowException>(() => { Bypass(-min); }, "Through parameter unary -");
                    }
                }
            }

            [Test]
            public static void TestUInt32()
            {
                unchecked
                {
                    checked
                    {
                        var max = UInt32.MaxValue;

                        var max1 = max;
                        var max2 = max;
                        var max3 = max;
                        var max4 = max;

                        Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier +");
                        Assert.Throws<OverflowException>(() => { var r = max1++; }, "Through identifier post++");
                        Assert.Throws<OverflowException>(() => { var r = ++max2; }, "Through identifier ++pre");
                        Assert.Throws<OverflowException>(() => { var r = 2 * max; }, "Through identifier *");

                        Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter +");
                        Assert.Throws<OverflowException>(() => { Bypass(max3++); }, "Through parameter post++");
                        Assert.Throws<OverflowException>(() => { Bypass(++max4); }, "Through parameter ++pre");
                        Assert.Throws<OverflowException>(() => { Bypass(2 * max); }, "Through parameter *");

                        var min = UInt32.MinValue;

                        var min1 = min;
                        var min2 = min;
                        var min3 = min;
                        var min4 = min;

                        Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier -");
                        Assert.Throws<OverflowException>(() => { var r = min1--; }, "Through identifier post--");
                        Assert.Throws<OverflowException>(() => { var r = --min2; }, "Through identifier pre--");

                        Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter -");
                        Assert.Throws<OverflowException>(() => { Bypass(min3--); }, "Through parameter post--");
                        Assert.Throws<OverflowException>(() => { Bypass(--min4); }, "Through parameter --pre");
                    }
                }
            }

            [Test]
            public static void TestLong()
            {
                unchecked
                {
                    checked
                    {
                        var max = long.MaxValue;

                        var max1 = max;
                        var max2 = max;
                        var max3 = max;
                        var max4 = max;

                        Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier +");
                        Assert.Throws<OverflowException>(() => { var r = max1++; }, "Through identifier post++");
                        Assert.Throws<OverflowException>(() => { var r = ++max2; }, "Through identifier ++pre");
                        Assert.Throws<OverflowException>(() => { var r = 2 * max; }, "Through identifier *");

                        Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter +");
                        Assert.Throws<OverflowException>(() => { Bypass(max3++); }, "Through parameter post++");
                        Assert.Throws<OverflowException>(() => { Bypass(++max4); }, "Through parameter ++pre");
                        Assert.Throws<OverflowException>(() => { Bypass(2 * max); }, "Through parameter *");

                        var min = long.MinValue;

                        var min1 = min;
                        var min2 = min;
                        var min3 = min;
                        var min4 = min;

                        Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier -");
                        Assert.Throws<OverflowException>(() => { var r = min1--; }, "Through identifier post--");
                        Assert.Throws<OverflowException>(() => { var r = --min2; }, "Through identifier pre--");
                        Assert.Throws<OverflowException>(() => { var r = -min; }, "Through identifier unary -");

                        Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter -");
                        Assert.Throws<OverflowException>(() => { Bypass(min3--); }, "Through parameter post--");
                        Assert.Throws<OverflowException>(() => { Bypass(--min4); }, "Through parameter --pre");
                        Assert.Throws<OverflowException>(() => { Bypass(-min); }, "Through parameter unary -");
                    }
                }
            }

            [Test]
            public static void TestULong()
            {
                unchecked
                {
                    checked
                    {
                        var max = ulong.MaxValue;

                        var max1 = max;
                        var max2 = max;
                        var max3 = max;
                        var max4 = max;

                        Assert.Throws<OverflowException>(() => { var r = max + 1; }, "Through identifier +");
                        Assert.Throws<OverflowException>(() => { var r = max1++; }, "Through identifier post++");
                        Assert.Throws<OverflowException>(() => { var r = ++max2; }, "Through identifier ++pre");
                        Assert.Throws<OverflowException>(() => { var r = 2 * max; }, "Through identifier *");

                        Assert.Throws<OverflowException>(() => { Bypass(max + 1); }, "Through parameter +");
                        Assert.Throws<OverflowException>(() => { Bypass(max3++); }, "Through parameter post++");
                        Assert.Throws<OverflowException>(() => { Bypass(++max4); }, "Through parameter ++pre");
                        Assert.Throws<OverflowException>(() => { Bypass(2 * max); }, "Through parameter *");

                        var min = ulong.MinValue;

                        var min1 = min;
                        var min2 = min;
                        var min3 = min;
                        var min4 = min;

                        Assert.Throws<OverflowException>(() => { var r = min - 1; }, "Through identifier -");
                        Assert.Throws<OverflowException>(() => { var r = min1--; }, "Through identifier post--");
                        Assert.Throws<OverflowException>(() => { var r = --min2; }, "Through identifier pre--");

                        Assert.Throws<OverflowException>(() => { Bypass(min - 1); }, "Through parameter -");
                        Assert.Throws<OverflowException>(() => { Bypass(min3--); }, "Through parameter post--");
                        Assert.Throws<OverflowException>(() => { Bypass(--min4); }, "Through parameter --pre");
                    }
                }
            }
        }

        [Category(Constants.MODULE_CHECKED_UNCKECKED)]
        [TestFixture(TestNameFormat = "Unchecked - " + Constants.BATCH_NAME + " {0}")]
        public class UncheckedTests
        {
            [Test]
            public static void TestInt32()
            {
                unchecked
                {
                    var max = Int32.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = max + 1;
                    var rMax2 = max1++;
                    var rMax3 = ++max2;
                    var rMax4 = 2 * max;
                    NumberHelper.AssertNumberByRepresentation("-2147483648", rMax1, "Through identifier +");
                    NumberHelper.AssertNumberByRepresentation("2147483647", rMax2, "Through identifier post++");
                    NumberHelper.AssertNumberByRepresentation("-2147483648", rMax3, "Through identifier ++pre");
                    NumberHelper.AssertNumberByRepresentation("-2", rMax4, "Through identifier *");

                    NumberHelper.AssertNumberByRepresentation("-2147483648", Bypass(max + 1), "Through parameter +");
                    NumberHelper.AssertNumberByRepresentation("2147483647", Bypass(max3++), "Through parameter post++");
                    NumberHelper.AssertNumberByRepresentation("-2147483648", Bypass(++max4), "Through parameter ++pre");
                    NumberHelper.AssertNumberByRepresentation("-2", Bypass(2 * max), "Through parameter *");

                    var min = Int32.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min - 1;
                    var rMin2 = min1--;
                    var rMin3 = --min2;
                    var rMin4 = -min;
                    NumberHelper.AssertNumberByRepresentation("2147483647", rMin1, "Through identifier -");
                    NumberHelper.AssertNumberByRepresentation("-2147483648", rMin2, "Through identifier post--");
                    NumberHelper.AssertNumberByRepresentation("2147483647", rMin3, "Through identifier --pre");
                    NumberHelper.AssertNumberByRepresentation("-2147483648", rMin4, "Through identifier unary -");

                    NumberHelper.AssertNumberByRepresentation("2147483647", Bypass(min - 1), "Through parameter -");
                    NumberHelper.AssertNumberByRepresentation("-2147483648", Bypass(min3--), "Through parameter post--");
                    NumberHelper.AssertNumberByRepresentation("2147483647", Bypass(--min4), "Through parameter --pre");
                    NumberHelper.AssertNumberByRepresentation("-2147483648", Bypass(-min), "Through parameter unary -");
                }
            }

            [Test]
            public static void TestUInt32()
            {
                unchecked
                {
                    var max = UInt32.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = max + 1;
                    var rMax2 = max1++;
                    var rMax3 = ++max2;
                    var rMax4 = 2 * max;
                    NumberHelper.AssertNumberByRepresentation("0", rMax1, "Through identifier +");
                    NumberHelper.AssertNumberByRepresentation("4294967295", rMax2, "Through identifier post++");
                    NumberHelper.AssertNumberByRepresentation("0", rMax3, "Through identifier ++pre");
                    NumberHelper.AssertNumberByRepresentation("4294967294", rMax4, "Through identifier *");

                    NumberHelper.AssertNumberByRepresentation("0", Bypass(max + 1), "Through parameter +");
                    NumberHelper.AssertNumberByRepresentation("4294967295", Bypass(max3++), "Through parameter post++");
                    NumberHelper.AssertNumberByRepresentation("0", Bypass(++max4), "Through parameter ++pre");
                    NumberHelper.AssertNumberByRepresentation("4294967294", Bypass(2 * max), "Through parameter *");

                    var min = UInt32.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min - 1;
                    var rMin2 = min1--;
                    var rMin3 = --min2;
                    var rMin4 = -min;
                    NumberHelper.AssertNumberByRepresentation("4294967295", rMin1, "Through identifier -");
                    NumberHelper.AssertNumberByRepresentation("0", rMin2, "Through identifier post--");
                    NumberHelper.AssertNumberByRepresentation("4294967295", rMin3, "Through identifier --pre");
                    NumberHelper.AssertNumberByRepresentation("0", rMin4, "Through identifier unary -");

                    NumberHelper.AssertNumberByRepresentation("4294967295", Bypass(min - 1), "Through parameter -");
                    NumberHelper.AssertNumberByRepresentation("0", Bypass(min3--), "Through parameter post--");
                    NumberHelper.AssertNumberByRepresentation("4294967295", Bypass(--min4), "Through parameter --pre");
                    NumberHelper.AssertNumberByRepresentation("0", Bypass(-min), "Through parameter unary -");
                }
            }

            [Test]
            public static void TestLong()
            {
                unchecked
                {
                    var max = long.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = max + 1;
                    var rMax2 = max1++;
                    var rMax3 = ++max2;
                    var rMax4 = 2 * max;
                    NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax1, "Through identifier +");
                    NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMax2, "Through identifier post++");
                    NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax3, "Through identifier ++pre");
                    NumberHelper.AssertNumberByRepresentation("-2", rMax4, "Through identifier *");

                    NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bypass(max + 1), "Through parameter +");
                    NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bypass(max3++), "Through parameter post++");
                    NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bypass(++max4), "Through parameter ++pre");
                    NumberHelper.AssertNumberByRepresentation("-2", Bypass(2 * max), "Through parameter *");

                    var min = long.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min - 1;
                    var rMin2 = min1--;
                    var rMin3 = --min2;
                    var rMin4 = -min;
                    NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin1, "Through identifier -");
                    NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin2, "Through identifier post--");
                    NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin3, "Through identifier --pre");
                    NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin4, "Through identifier unary -");

                    NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bypass(min - 1), "Through parameter -");
                    NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bypass(min3--), "Through parameter post--");
                    NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bypass(--min4), "Through parameter --pre");
                    NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bypass(-min), "Through parameter unary -");
                }
            }

            [Test]
            public static void TestULong()
            {
                unchecked
                {
                    var max = ulong.MaxValue;

                    var max1 = max;
                    var max2 = max;
                    var max3 = max;
                    var max4 = max;

                    var rMax1 = max + 1;
                    var rMax2 = max1++;
                    var rMax3 = ++max2;
                    var rMax4 = 2 * max;
                    NumberHelper.AssertNumberByRepresentation("0", rMax1, "Through identifier +");
                    NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMax2, "Through identifier post++");
                    NumberHelper.AssertNumberByRepresentation("0", rMax3, "Through identifier ++pre");
                    NumberHelper.AssertNumberByRepresentation("18446744073709551614", rMax4, "Through identifier *");

                    NumberHelper.AssertNumberByRepresentation("0", Bypass(max + 1), "Through parameter +");
                    NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bypass(max3++), "Through parameter post++");
                    NumberHelper.AssertNumberByRepresentation("0", Bypass(++max4), "Through parameter ++pre");
                    NumberHelper.AssertNumberByRepresentation("18446744073709551614", Bypass(2 * max), "Through parameter *");

                    var min = ulong.MinValue;

                    var min1 = min;
                    var min2 = min;
                    var min3 = min;
                    var min4 = min;

                    var rMin1 = min - 1;
                    var rMin2 = min1--;
                    var rMin3 = --min2;
                    NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin1, "Through identifier -");
                    NumberHelper.AssertNumberByRepresentation("0", rMin2, "Through identifier post--");
                    NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin3, "Through identifier --pre");

                    NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bypass(min - 1), "Through parameter -");
                    NumberHelper.AssertNumberByRepresentation("0", Bypass(min3--), "Through parameter post--");
                    NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bypass(--min4), "Through parameter --pre");
                }
            }
        }

        [Category(Constants.MODULE_CHECKED_UNCKECKED)]
        [TestFixture(TestNameFormat = "UncheckedInsideChecked - " + Constants.BATCH_NAME + " {0}")]
        public class UncheckedInsideCheckedTests
        {
            [Test]
            public static void TestInt32()
            {
                checked
                {
                    unchecked
                    {
                        var max = Int32.MaxValue;

                        var max1 = max;
                        var max2 = max;
                        var max3 = max;
                        var max4 = max;

                        var rMax1 = max + 1;
                        var rMax2 = max1++;
                        var rMax3 = ++max2;
                        var rMax4 = 2 * max;
                        NumberHelper.AssertNumberByRepresentation("-2147483648", rMax1, "Through identifier +");
                        NumberHelper.AssertNumberByRepresentation("2147483647", rMax2, "Through identifier post++");
                        NumberHelper.AssertNumberByRepresentation("-2147483648", rMax3, "Through identifier ++pre");
                        NumberHelper.AssertNumberByRepresentation("-2", rMax4, "Through identifier *");

                        NumberHelper.AssertNumberByRepresentation("-2147483648", Bypass(max + 1), "Through parameter +");
                        NumberHelper.AssertNumberByRepresentation("2147483647", Bypass(max3++), "Through parameter post++");
                        NumberHelper.AssertNumberByRepresentation("-2147483648", Bypass(++max4), "Through parameter ++pre");
                        NumberHelper.AssertNumberByRepresentation("-2", Bypass(2 * max), "Through parameter *");

                        var min = Int32.MinValue;

                        var min1 = min;
                        var min2 = min;
                        var min3 = min;
                        var min4 = min;

                        var rMin1 = min - 1;
                        var rMin2 = min1--;
                        var rMin3 = --min2;
                        var rMin4 = -min;
                        NumberHelper.AssertNumberByRepresentation("2147483647", rMin1, "Through identifier -");
                        NumberHelper.AssertNumberByRepresentation("-2147483648", rMin2, "Through identifier post--");
                        NumberHelper.AssertNumberByRepresentation("2147483647", rMin3, "Through identifier --pre");
                        NumberHelper.AssertNumberByRepresentation("-2147483648", rMin4, "Through identifier unary -");

                        NumberHelper.AssertNumberByRepresentation("2147483647", Bypass(min - 1), "Through parameter -");
                        NumberHelper.AssertNumberByRepresentation("-2147483648", Bypass(min3--), "Through parameter post--");
                        NumberHelper.AssertNumberByRepresentation("2147483647", Bypass(--min4), "Through parameter --pre");
                        NumberHelper.AssertNumberByRepresentation("-2147483648", Bypass(-min), "Through parameter unary -");
                    }
                }
            }

            [Test]
            public static void TestUInt32()
            {
                checked
                {
                    unchecked
                    {
                        var max = UInt32.MaxValue;

                        var max1 = max;
                        var max2 = max;
                        var max3 = max;
                        var max4 = max;

                        var rMax1 = max + 1;
                        var rMax2 = max1++;
                        var rMax3 = ++max2;
                        var rMax4 = 2 * max;
                        NumberHelper.AssertNumberByRepresentation("0", rMax1, "Through identifier +");
                        NumberHelper.AssertNumberByRepresentation("4294967295", rMax2, "Through identifier post++");
                        NumberHelper.AssertNumberByRepresentation("0", rMax3, "Through identifier ++pre");
                        NumberHelper.AssertNumberByRepresentation("4294967294", rMax4, "Through identifier *");

                        NumberHelper.AssertNumberByRepresentation("0", Bypass(max + 1), "Through parameter +");
                        NumberHelper.AssertNumberByRepresentation("4294967295", Bypass(max3++), "Through parameter post++");
                        NumberHelper.AssertNumberByRepresentation("0", Bypass(++max4), "Through parameter ++pre");
                        NumberHelper.AssertNumberByRepresentation("4294967294", Bypass(2 * max), "Through parameter *");

                        var min = UInt32.MinValue;

                        var min1 = min;
                        var min2 = min;
                        var min3 = min;
                        var min4 = min;

                        var rMin1 = min - 1;
                        var rMin2 = min1--;
                        var rMin3 = --min2;
                        var rMin4 = -min;
                        NumberHelper.AssertNumberByRepresentation("4294967295", rMin1, "Through identifier -");
                        NumberHelper.AssertNumberByRepresentation("0", rMin2, "Through identifier post--");
                        NumberHelper.AssertNumberByRepresentation("4294967295", rMin3, "Through identifier --pre");
                        NumberHelper.AssertNumberByRepresentation("0", rMin4, "Through identifier unary -");

                        NumberHelper.AssertNumberByRepresentation("4294967295", Bypass(min - 1), "Through parameter -");
                        NumberHelper.AssertNumberByRepresentation("0", Bypass(min3--), "Through parameter post--");
                        NumberHelper.AssertNumberByRepresentation("4294967295", Bypass(--min4), "Through parameter --pre");
                        NumberHelper.AssertNumberByRepresentation("0", Bypass(-min), "Through parameter unary -");
                    }
                }
            }

            [Test]
            public static void TestLong()
            {
                checked
                {
                    unchecked
                    {
                        var max = long.MaxValue;

                        var max1 = max;
                        var max2 = max;
                        var max3 = max;
                        var max4 = max;

                        var rMax1 = max + 1;
                        var rMax2 = max1++;
                        var rMax3 = ++max2;
                        var rMax4 = 2 * max;
                        NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax1, "Through identifier +");
                        NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMax2, "Through identifier post++");
                        NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax3, "Through identifier ++pre");
                        NumberHelper.AssertNumberByRepresentation("-2", rMax4, "Through identifier *");

                        NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bypass(max + 1), "Through parameter +");
                        NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bypass(max3++), "Through parameter post++");
                        NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bypass(++max4), "Through parameter ++pre");
                        NumberHelper.AssertNumberByRepresentation("-2", Bypass(2 * max), "Through parameter *");

                        var min = long.MinValue;

                        var min1 = min;
                        var min2 = min;
                        var min3 = min;
                        var min4 = min;

                        var rMin1 = min - 1;
                        var rMin2 = min1--;
                        var rMin3 = --min2;
                        var rMin4 = -min;
                        NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin1, "Through identifier -");
                        NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin2, "Through identifier post--");
                        NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin3, "Through identifier --pre");
                        NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin4, "Through identifier unary -");

                        NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bypass(min - 1), "Through parameter -");
                        NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bypass(min3--), "Through parameter post--");
                        NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bypass(--min4), "Through parameter --pre");
                        NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bypass(-min), "Through parameter unary -");
                    }
                }
            }

            [Test]
            public static void TestULong()
            {
                checked
                {
                    unchecked
                    {
                        var max = ulong.MaxValue;

                        var max1 = max;
                        var max2 = max;
                        var max3 = max;
                        var max4 = max;

                        var rMax1 = max + 1;
                        var rMax2 = max1++;
                        var rMax3 = ++max2;
                        var rMax4 = 2 * max;
                        NumberHelper.AssertNumberByRepresentation("0", rMax1, "Through identifier +");
                        NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMax2, "Through identifier post++");
                        NumberHelper.AssertNumberByRepresentation("0", rMax3, "Through identifier ++pre");
                        NumberHelper.AssertNumberByRepresentation("18446744073709551614", rMax4, "Through identifier *");

                        NumberHelper.AssertNumberByRepresentation("0", Bypass(max + 1), "Through parameter +");
                        NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bypass(max3++), "Through parameter post++");
                        NumberHelper.AssertNumberByRepresentation("0", Bypass(++max4), "Through parameter ++pre");
                        NumberHelper.AssertNumberByRepresentation("18446744073709551614", Bypass(2 * max), "Through parameter *");

                        var min = ulong.MinValue;

                        var min1 = min;
                        var min2 = min;
                        var min3 = min;
                        var min4 = min;

                        var rMin1 = min - 1;
                        var rMin2 = min1--;
                        var rMin3 = --min2;
                        NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin1, "Through identifier -");
                        NumberHelper.AssertNumberByRepresentation("0", rMin2, "Through identifier post--");
                        NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin3, "Through identifier --pre");

                        NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bypass(min - 1), "Through parameter -");
                        NumberHelper.AssertNumberByRepresentation("0", Bypass(min3--), "Through parameter post--");
                        NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bypass(--min4), "Through parameter --pre");
                    }
                }
            }
        }

        [Category(Constants.MODULE_CHECKED_UNCKECKED)]
        [TestFixture(TestNameFormat = "WithNoUncheckedKeyword - " + Constants.BATCH_NAME + " {0}")]
        public class WithNoUncheckedKeywordTests
        {
            [Test]
            public static void TestInt32()
            {
                var max = Int32.MaxValue;

                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;

                var rMax1 = max + 1;
                var rMax2 = max1++;
                var rMax3 = ++max2;
                var rMax4 = 2 * max;
                NumberHelper.AssertNumberByRepresentation("2147483648", rMax1, "Through identifier +");
                NumberHelper.AssertNumberByRepresentation("2147483647", rMax2, "Through identifier post++");
                NumberHelper.AssertNumberByRepresentation("2147483648", rMax3, "Through identifier ++pre");
                NumberHelper.AssertNumberByRepresentation("4294967294", rMax4, "Through identifier *");

                NumberHelper.AssertNumberByRepresentation("2147483648", Bypass(max + 1), "Through parameter +");
                NumberHelper.AssertNumberByRepresentation("2147483647", Bypass(max3++), "Through parameter post++");
                NumberHelper.AssertNumberByRepresentation("2147483648", Bypass(++max4), "Through parameter ++pre");
                NumberHelper.AssertNumberByRepresentation("4294967294", Bypass(2 * max), "Through parameter *");

                var min = Int32.MinValue;

                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;

                var rMin1 = min - 1;
                var rMin2 = min1--;
                var rMin3 = --min2;
                var rMin4 = -min;
                NumberHelper.AssertNumberByRepresentation("-2147483649", rMin1, "Through identifier -");
                NumberHelper.AssertNumberByRepresentation("-2147483648", rMin2, "Through identifier post--");
                NumberHelper.AssertNumberByRepresentation("-2147483649", rMin3, "Through identifier --pre");
                NumberHelper.AssertNumberByRepresentation("2147483648", rMin4, "Through identifier unary -");

                NumberHelper.AssertNumberByRepresentation("-2147483649", Bypass(min - 1), "Through parameter -");
                NumberHelper.AssertNumberByRepresentation("-2147483648", Bypass(min3--), "Through parameter post--");
                NumberHelper.AssertNumberByRepresentation("-2147483649", Bypass(--min4), "Through parameter --pre");
                NumberHelper.AssertNumberByRepresentation("2147483648", Bypass(-min), "Through parameter unary -");
            }

            [Test]
            public static void TestUInt32()
            {
                var max = UInt32.MaxValue;

                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;

                var rMax1 = max + 1;
                var rMax2 = max1++;
                var rMax3 = ++max2;
                var rMax4 = 2 * max;
                NumberHelper.AssertNumberByRepresentation("4294967296", rMax1, "Through identifier +");
                NumberHelper.AssertNumberByRepresentation("4294967295", rMax2, "Through identifier post++");
                NumberHelper.AssertNumberByRepresentation("4294967296", rMax3, "Through identifier ++pre");
                NumberHelper.AssertNumberByRepresentation("8589934590", rMax4, "Through identifier *");

                NumberHelper.AssertNumberByRepresentation("4294967296", Bypass(max + 1), "Through parameter +");
                NumberHelper.AssertNumberByRepresentation("4294967295", Bypass(max3++), "Through parameter post++");
                NumberHelper.AssertNumberByRepresentation("4294967296", Bypass(++max4), "Through parameter ++pre");
                NumberHelper.AssertNumberByRepresentation("8589934590", Bypass(2 * max), "Through parameter *");

                var min = UInt32.MinValue;

                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;

                var rMin1 = min - 1;
                var rMin2 = min1--;
                var rMin3 = --min2;
                var rMin4 = -min;
                NumberHelper.AssertNumberByRepresentation("-1", rMin1, "Through identifier -");
                NumberHelper.AssertNumberByRepresentation("0", rMin2, "Through identifier post--");
                NumberHelper.AssertNumberByRepresentation("-1", rMin3, "Through identifier --pre");
                NumberHelper.AssertNumberByRepresentation("0", rMin4, "Through identifier unary -");

                NumberHelper.AssertNumberByRepresentation("-1", Bypass(min - 1), "Through parameter -");
                NumberHelper.AssertNumberByRepresentation("0", Bypass(min3--), "Through parameter post--");
                NumberHelper.AssertNumberByRepresentation("-1", Bypass(--min4), "Through parameter --pre");
                NumberHelper.AssertNumberByRepresentation("0", Bypass(-min), "Through parameter unary -");
            }

            [Test]
            public static void TestLong()
            {
                var max = long.MaxValue;

                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;

                var rMax1 = max + 1;
                var rMax2 = max1++;
                var rMax3 = ++max2;
                var rMax4 = 2 * max;
                NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax1, "Through identifier +");
                NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMax2, "Through identifier post++");
                NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMax3, "Through identifier ++pre");
                NumberHelper.AssertNumberByRepresentation("-2", rMax4, "Through identifier *");

                NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bypass(max + 1), "Through parameter +");
                NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bypass(max3++), "Through parameter post++");
                NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bypass(++max4), "Through parameter ++pre");
                NumberHelper.AssertNumberByRepresentation("-2", Bypass(2 * max), "Through parameter *");

                var min = long.MinValue;

                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;

                var rMin1 = min - 1;
                var rMin2 = min1--;
                var rMin3 = --min2;
                var rMin4 = -min;
                NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin1, "Through identifier -");
                NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin2, "Through identifier post--");
                NumberHelper.AssertNumberByRepresentation("9223372036854775807", rMin3, "Through identifier --pre");
                NumberHelper.AssertNumberByRepresentation("-9223372036854775808", rMin4, "Through identifier unary -");

                NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bypass(min - 1), "Through parameter -");
                NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bypass(min3--), "Through parameter post--");
                NumberHelper.AssertNumberByRepresentation("9223372036854775807", Bypass(--min4), "Through parameter --pre");
                NumberHelper.AssertNumberByRepresentation("-9223372036854775808", Bypass(-min), "Through parameter unary -");
            }

            [Test]
            public static void TestULong()
            {
                var max = ulong.MaxValue;

                var max1 = max;
                var max2 = max;
                var max3 = max;
                var max4 = max;

                var rMax1 = max + 1;
                var rMax2 = max1++;
                var rMax3 = ++max2;
                var rMax4 = 2 * max;
                NumberHelper.AssertNumberByRepresentation("0", rMax1, "Through identifier +");
                NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMax2, "Through identifier post++");
                NumberHelper.AssertNumberByRepresentation("0", rMax3, "Through identifier ++pre");
                NumberHelper.AssertNumberByRepresentation("18446744073709551614", rMax4, "Through identifier *");

                NumberHelper.AssertNumberByRepresentation("0", Bypass(max + 1), "Through parameter +");
                NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bypass(max3++), "Through parameter post++");
                NumberHelper.AssertNumberByRepresentation("0", Bypass(++max4), "Through parameter ++pre");
                NumberHelper.AssertNumberByRepresentation("18446744073709551614", Bypass(2 * max), "Through parameter *");

                var min = ulong.MinValue;

                var min1 = min;
                var min2 = min;
                var min3 = min;
                var min4 = min;

                var rMin1 = min - 1;
                var rMin2 = min1--;
                var rMin3 = --min2;
                NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin1, "Through identifier -");
                NumberHelper.AssertNumberByRepresentation("0", rMin2, "Through identifier post--");
                NumberHelper.AssertNumberByRepresentation("18446744073709551615", rMin3, "Through identifier --pre");

                NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bypass(min - 1), "Through parameter -");
                NumberHelper.AssertNumberByRepresentation("0", Bypass(min3--), "Through parameter post--");
                NumberHelper.AssertNumberByRepresentation("18446744073709551615", Bypass(--min4), "Through parameter --pre");
            }
        }
    }
}