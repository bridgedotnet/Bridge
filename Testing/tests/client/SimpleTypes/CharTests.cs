using System;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_CHAR)]
    [TestFixture(TestNameFormat = "Char - {0}")]
    public class CharTests
    {
        [Test]
        public void TypePropertiesAreInt32()
        {
            Assert.True((object)0 is char);
            Assert.False((object)0.5 is char);
            Assert.True((object)-1 is char);
            Assert.True((object)65536 is char);
            Assert.AreEqual(typeof(char).GetClassName(), "Bridge.Int");
        }

        [Test]
        public void CastsWork()
        {
            int i1 = -1, i2 = 0, i3 = 234, i4 = 65535, i5 = 65536;
            int? ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 65535, ni5 = 65536, ni6 = null;

            //unchecked
            {
                Assert.AreStrictEqual((int)(char)i1, -1, "-1 unchecked");
                Assert.AreStrictEqual((int)(char)i2, 0, "0 unchecked");
                Assert.AreStrictEqual((int)(char)i3, 234, "234 unchecked");
                Assert.AreStrictEqual((int)(char)i4, 65535, "65535 unchecked");
                Assert.AreStrictEqual((int)(char)i5, 65536, "65536 unchecked");

                Assert.AreStrictEqual((int?)(char?)ni1, -1, "nullable -1 unchecked");
                Assert.AreStrictEqual((int?)(char?)ni2, 0, "nullable 0 unchecked");
                Assert.AreStrictEqual((int?)(char?)ni3, 234, "nullable 234 unchecked");
                Assert.AreStrictEqual((int?)(char?)ni4, 65535, "nullable 65535 unchecked");
                Assert.AreStrictEqual((int?)(char?)ni5, 65536, "nullable 65536 unchecked");
                Assert.AreStrictEqual((int?)(char?)ni6, null, "null unchecked");
            }

            //checked
            {
                Assert.AreStrictEqual((int?)(char)i2, 0, "0 checked");
                Assert.AreStrictEqual((int?)(char)i3, 234, "234 checked");
                Assert.AreStrictEqual((int?)(char)i4, 65535, "65535 checked");

                Assert.AreStrictEqual((int?)(char?)ni2, 0, "nullable 0 checked");
                Assert.AreStrictEqual((int?)(char?)ni3, 234, "nullable 234 checked");
                Assert.AreStrictEqual((int?)(char?)ni4, 65535, "nullable 65535 checked");
                Assert.AreStrictEqual((int?)(char?)ni6, null, "null checked");
            }
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueWorks()
        {
            Assert.AreEqual((int)GetDefaultValue<char>(), 0);
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreStrictEqual((int)new char(), 0);
        }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreStrictEqual(Activator.CreateInstance<char>(), 0);
        }

        [Test]
        public void ConstantsWork()
        {
            Assert.AreEqual((int)char.MinValue, 0);
            Assert.AreEqual((int)char.MaxValue, 65535);
        }

        [Test]
        public void CharComparisonWorks()
        {
            char a = 'a', a2 = 'a', b = 'b';
            Assert.True(a == a2);
            Assert.False(a == b);
            Assert.False(a != a2);
            Assert.True(a != b);
            Assert.False(a < a2);
            Assert.True(a < b);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(char.Parse("a"), 'a', "Parse 1");
            Assert.Throws(() => char.Parse(null), "Parse 2");
            Assert.Throws(() => char.Parse(""), "Parse 3");
            Assert.Throws(() => char.Parse("ab"), "Parse 4");
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual('\x23'.Format("x4"), "0023");
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual('\x23'.ToString("x4"), "0023");
        }

        [Test]
        public void ToStringWorks()
        {
            Assert.AreEqual('A'.ToString(), "A");
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual('0'.GetHashCode(), '0'.GetHashCode());
            Assert.AreEqual('1'.GetHashCode(), '1'.GetHashCode());
            Assert.AreNotEqual('0'.GetHashCode(), '1'.GetHashCode());
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.True('0'.Equals((int)'0'));
            Assert.False('1'.Equals((int)'0'));
            Assert.False('0'.Equals((int)'1'));
            Assert.True('1'.Equals((int)'1'));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True('0'.Equals('0'));
            Assert.False('1'.Equals('0'));
            Assert.False('0'.Equals('1'));
            Assert.True('1'.Equals('1'));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True('1'.CompareTo('0') > 0);
            Assert.True('0'.CompareTo('1') < 0);
            Assert.True('0'.CompareTo('0') == 0);
            Assert.True('1'.CompareTo('1') == 0);
        }

        [Test]
        public void IsLowerWorks()
        {
            Assert.True(char.IsLower('a'), "#1");
            Assert.False(char.IsLower('A'), "#2");
            Assert.False(char.IsLower('3'), "#3");
        }

        [Test]
        public void IsUpperWorks()
        {
            Assert.True(char.IsUpper('A'), "#1");
            Assert.False(char.IsUpper('a'), "#2");
            Assert.False(char.IsUpper('3'), "#3");
        }

        [Test]
        public void ToLowerWorks()
        {
            Assert.AreEqual((int)char.ToLower('A'), (int)'a');
            Assert.AreEqual((int)char.ToLower('a'), (int)'a');
            Assert.AreEqual((int)char.ToLower('3'), (int)'3');
        }

        [Test]
        public void ToUpperWorks()
        {
            Assert.AreEqual((int)char.ToUpper('A'), (int)'A');
            Assert.AreEqual((int)char.ToUpper('a'), (int)'A');
            Assert.AreEqual((int)char.ToUpper('3'), (int)'3');
        }

        [Test]
        public void IsDigitWorks()
        {
            Assert.True(char.IsDigit('0'), "#1");
            Assert.False(char.IsDigit('.'), "#2");
            Assert.False(char.IsDigit('A'), "#3");
        }

        [Test]
        public void IsWhiteSpaceWorks()
        {
            Assert.True(char.IsWhiteSpace(' '), "#1");
            Assert.True(char.IsWhiteSpace('\n'), "#2");
            Assert.False(char.IsWhiteSpace('A'), "#3");
        }

        [Test]
        public void IsDigitWithStringAndIndexWorks()
        {
            Assert.True(char.IsDigit("abc0def", 3), "#1");
            Assert.True(char.IsDigit("1", 0), "#2");
            Assert.True(char.IsDigit("abcdef5", 6), "#3");
            Assert.True(char.IsDigit("9abcdef", 0), "#4");
            Assert.False(char.IsDigit(".012345", 0), "#5");
            Assert.False(char.IsDigit("012345.", 6), "#6");
            Assert.False(char.IsDigit("012.345", 3), "#7");
        }

        [Test]
        public void IsWhiteSpaceWithStringAndIndexWorks()
        {
            Assert.True(char.IsWhiteSpace("abc def", 3), "#1");
            Assert.True(char.IsWhiteSpace("\t", 0), "#2");
            Assert.True(char.IsWhiteSpace("abcdef\r", 6), "#3");
            Assert.True(char.IsWhiteSpace("\nabcdef", 0), "#4");
            Assert.False(char.IsWhiteSpace(".\r\n     ", 0), "#5");
            Assert.False(char.IsWhiteSpace("\r\n    .", 6), "#6");
            Assert.False(char.IsWhiteSpace("\r  .\n  ", 3), "#7");
        }
    }
}
