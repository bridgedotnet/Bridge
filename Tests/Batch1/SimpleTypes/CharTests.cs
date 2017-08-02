using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_CHAR)]
    [TestFixture(TestNameFormat = "Char - {0}")]
    public class CharTests
    {
        [Test]
        public void TypePropertiesAreInt32()
        {
            Assert.False((object)0 is char);
            Assert.False((object)0.5 is char);
            Assert.False((object)-1 is char);
            Assert.False((object)65536 is char);
            Assert.AreEqual("System.Char", typeof(char).FullName);
            Assert.False(typeof(char).IsClass);
            Assert.False(typeof(IComparable<byte>).IsAssignableFrom(typeof(char)));
            Assert.False(typeof(IEquatable<byte>).IsAssignableFrom(typeof(char)));
        }

        [Test]
        public void CastsWork()
        {
            int i1 = -1, i2 = 0, i3 = 234, i4 = 65535, i5 = 65536;
            int? ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 65535, ni5 = 65536, ni6 = null;

            unchecked
            {
                Assert.AreEqual(65535, (int)(char)i1, "-1 unchecked");
                Assert.AreEqual(0, (int)(char)i2, "0 unchecked");
                Assert.AreEqual(234, (int)(char)i3, "234 unchecked");
                Assert.AreEqual(65535, (int)(char)i4, "65535 unchecked");
                Assert.AreEqual(0, (int)(char)i5, "65536 unchecked");

                Assert.AreEqual(65535, (int?)(char?)ni1, "nullable -1 unchecked");
                Assert.AreEqual(0, (int?)(char?)ni2, "nullable 0 unchecked");
                Assert.AreEqual(234, (int?)(char?)ni3, "nullable 234 unchecked");
                Assert.AreEqual(65535, (int?)(char?)ni4, "nullable 65535 unchecked");
                Assert.AreEqual(0, (int?)(char?)ni5, "nullable 65536 unchecked");
                Assert.AreEqual(null, (int?)(char?)ni6, "null unchecked");
            }

            checked
            {
                Assert.Throws<OverflowException>(() => { var b = (int)(char)i1; });
                Assert.AreEqual(0, (int?)(char)i2, "0 checked");
                Assert.AreEqual(234, (int?)(char)i3, "234 checked");
                Assert.AreEqual(65535, (int?)(char)i4, "65535 checked");
                Assert.Throws<OverflowException>(() => { var b = (int)(char)i5; });

                Assert.Throws<OverflowException>(() => { var b = (int?)(char?)ni1; });
                Assert.AreEqual(0, (int?)(char?)ni2, "nullable 0 checked");
                Assert.AreEqual(234, (int?)(char?)ni3, "nullable 234 checked");
                Assert.AreEqual(65535, (int?)(char?)ni4, "nullable 65535 checked");
                Assert.Throws<OverflowException>(() => { var b = (int?)(char?)ni5; });
                Assert.AreEqual(null, (int?)(char?)ni6, "null checked");
            }
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueWorks()
        {
            Assert.AreEqual(0, (int)GetDefaultValue<char>());
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreEqual(0, (int)new char());
        }

        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreEqual(0, Activator.CreateInstance<char>());
        }

        [Test]
        public void ConstantsWork()
        {
            Assert.AreEqual(0, (int)char.MinValue);
            Assert.AreEqual(65535, (int)char.MaxValue);
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
            Assert.AreEqual('a', char.Parse("a"), "Parse 1");
            Assert.Throws<ArgumentNullException>(() => char.Parse(null), "Parse 2");
            Assert.Throws<FormatException>(() => char.Parse(""), "Parse 3");
            Assert.Throws<FormatException>(() => char.Parse("ab"), "Parse 4");
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual("0023", '\x23'.Format("x4"));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("0023", '\x23'.ToString("x4"));
        }

        // Not C# API
        //[Test]
        //public void LocaleFormatWorks()
        //{
        //    Assert.AreEqual('\x23'.LocaleFormat("x4"), "0023");
        //}

        [Test]
        public void ToStringWorks()
        {
            Assert.AreEqual("A", 'A'.ToString());
        }

        // Not C# API
        //[Test]
        //public void ToLocaleStringWorks()
        //{
        //    Assert.AreEqual('A'.ToLocaleString(), "A");
        //}

        // Not C# API
        //[Test]
        //public void CastCharToStringWorks()
        //{
        //    Assert.AreEqual((string)'c', "c");
        //}

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual('0'.GetHashCode(), '0'.GetHashCode());
            Assert.AreEqual('1'.GetHashCode(), '1'.GetHashCode());
            Assert.AreNotEqual('1'.GetHashCode(), '0'.GetHashCode());
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.False('0'.Equals((int)'0'));
            Assert.False('1'.Equals((int)'0'));
            Assert.False('0'.Equals((int)'1'));
            Assert.False('1'.Equals((int)'1'));

            object charZero = '0';
            object charOne = '1';
            Assert.True('0'.Equals(charZero));
            Assert.False('1'.Equals(charZero));
            Assert.False('0'.Equals(charOne));
            Assert.True('1'.Equals(charOne));
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

            string val = "Ab1#Z";

            Assert.Throws<ArgumentOutOfRangeException>(() => char.IsUpper(val, -1), "throws an ArgumentOutOfRangeException");

            Assert.True(char.IsUpper(val, 0), "A is uppercase");
            Assert.False(char.IsUpper(val, 1), "b is not uppercase");
            Assert.False(char.IsUpper(val, 2), "1 is not uppercase");
            Assert.False(char.IsUpper(val, 3), "# is not uppercase");
            Assert.True(char.IsUpper(val, 4), "Z is uppercase");

            Assert.Throws<ArgumentOutOfRangeException>(() => char.IsUpper(val, 5), "throws an ArgumentOutOfRangeException");
            Assert.Throws<ArgumentNullException>(() => char.IsUpper(null, 0), "null throws an ArgumentNullException");
        }

        [Test]
        public void ToLowerWorks()
        {
            Assert.AreEqual((int)'a', (int)char.ToLower('A'));
            Assert.AreEqual((int)'a', (int)char.ToLower('a'));
            Assert.AreEqual((int)'3', (int)char.ToLower('3'));
        }

        [Test]
        public void ToUpperWorks()
        {
            Assert.AreEqual((int)'A', (int)char.ToUpper('A'));
            Assert.AreEqual((int)'A', (int)char.ToUpper('a'));
            Assert.AreEqual((int)'3', (int)char.ToUpper('3'));
        }

        [Test]
        public void IsDigitWorks()
        {
            Assert.True(char.IsDigit('0'), "#1");
            Assert.False(char.IsDigit('.'), "#2");
            Assert.False(char.IsDigit('A'), "#3");
            Assert.False(char.IsDigit('\u0100'), "#4");
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
            Assert.False(char.IsDigit("012.345", 3), "#8");
            Assert.False(char.IsDigit("0"+ '\u0100', 1), "#9");
        }

        [Test]
        public void IsWhiteSpaceWorks()
        {
            Assert.True(char.IsWhiteSpace(' '), "#1");
            Assert.True(char.IsWhiteSpace('\n'), "#2");
            Assert.False(char.IsWhiteSpace('A'), "#3");
            Assert.False(char.IsWhiteSpace('\u0100'), "#4");
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
            Assert.False(char.IsWhiteSpace(" " + '\u0100', 1), "#8");
            Assert.True(char.IsWhiteSpace(" " + '\u0100', 0), "#9");
        }

        [Test]
        public void IsPunctuationWorks()
        {
            Assert.False(char.IsPunctuation('a'));
            Assert.True(char.IsPunctuation('-'));
            Assert.False(char.IsPunctuation('b'));
            Assert.True(char.IsPunctuation(','));
            Assert.False(char.IsPunctuation('\u0100'));
        }

        [Test]
        public void IsPunctuationWithStringAndIndexWorks()
        {
            var s = "a-b," + '\u0100';
            Assert.False(char.IsPunctuation(s, 0), "0");
            Assert.True(char.IsPunctuation(s, 1), "1");
            Assert.False(char.IsPunctuation(s, 2), "2");
            Assert.True(char.IsPunctuation(s, 3), "3");
            Assert.False(char.IsPunctuation(s, 4), "4");
        }

        [Test]
        public void IsLetterWorks()
        {
            Assert.False(char.IsLetter('0'), "#1");
            Assert.False(char.IsLetter('.'), "#2");
            Assert.True(char.IsLetter('A'), "#3");
            Assert.True(char.IsLetter('\u0100'), "#4");
        }

        [Test]
        public void IsLetterWithStringAndIndexWorks()
        {
            Assert.False(char.IsLetter("abc0def", 3), "#1");
            Assert.False(char.IsLetter("1", 0), "#2");
            Assert.False(char.IsLetter("abcdef5", 6), "#3");
            Assert.True(char.IsLetter("9abcdef", 1), "#4");
            Assert.False(char.IsLetter(".012345", 0), "#5");
            Assert.False(char.IsLetter("012345.", 6), "#6");
            Assert.False(char.IsLetter("012.345", 3), "#7");
            Assert.False(char.IsLetter("012.345", 3), "#8");
            Assert.True(char.IsLetter("0" + '\u0100', 1), "#9");
            Assert.False(char.IsLetter("0" + '\u0100', 0), "#10");
        }
    }
}