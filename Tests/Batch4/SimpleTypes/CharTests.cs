using Bridge.Test;
using System;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "CharTests - {0}")]
    public class CharTests
    {
        [Test]
        public void TypePropertiesAreInt32_SPI_1603()
        {
            Assert.True((object)0 is char);
            Assert.False((object)0.5 is char);
            Assert.False((object)-1 is char);
            Assert.False((object)65536 is char);
            Assert.AreEqual("System.Char", typeof(char).FullName);
            Assert.False(typeof(char).IsClass);
            Assert.False(typeof(IComparable<byte>).IsAssignableFrom(typeof(char)));
            Assert.False(typeof(IEquatable<byte>).IsAssignableFrom(typeof(char)));
            // #1603
            Assert.False(typeof(IFormattable).IsAssignableFrom(typeof(char)));
            var interfaces = typeof(char).GetInterfaces();
            Assert.AreEqual(5, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<char>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<char>)));
            Assert.False(interfaces.Contains(typeof(IFormattable)));
        }

        [Test]
        public void CastsWork()
        {
            int i1 = -1, i2 = 0, i3 = 234, i4 = 65535, i5 = 65536;
            int? ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 65535, ni5 = 65536, ni6 = null;

            unchecked
            {
                Assert.AreStrictEqual(65535, (int)(char)i1, "-1 unchecked");
                Assert.AreStrictEqual(0, (int)(char)i2, "0 unchecked");
                Assert.AreStrictEqual(234, (int)(char)i3, "234 unchecked");
                Assert.AreStrictEqual(65535, (int)(char)i4, "65535 unchecked");
                Assert.AreStrictEqual(0, (int)(char)i5, "65536 unchecked");

                Assert.AreStrictEqual(65535, (int?)(char?)ni1, "nullable -1 unchecked");
                Assert.AreStrictEqual(0, (int?)(char?)ni2, "nullable 0 unchecked");
                Assert.AreStrictEqual(234, (int?)(char?)ni3, "nullable 234 unchecked");
                Assert.AreStrictEqual(65535, (int?)(char?)ni4, "nullable 65535 unchecked");
                Assert.AreStrictEqual(0, (int?)(char?)ni5, "nullable 65536 unchecked");
                Assert.AreStrictEqual(null, (int?)(char?)ni6, "null unchecked");
            }

            checked
            {
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (char)i1;
                }, "-1 checked");
                Assert.AreStrictEqual(0, (int?)(char)i2, "0 checked");
                Assert.AreStrictEqual(234, (int?)(char)i3, "234 checked");
                Assert.AreStrictEqual(65535, (int?)(char)i4, "65535 checked");
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (char)i5;
                }, "65536 checked");

                Assert.Throws<OverflowException>(() =>
                {
                    var x = (char?)ni1;
                }, "nullable -1 checked");
                Assert.AreStrictEqual(0, (int?)(char?)ni2, "nullable 0 checked");
                Assert.AreStrictEqual(234, (int?)(char?)ni3, "nullable 234 checked");
                Assert.AreStrictEqual(65535, (int?)(char?)ni4, "nullable 65535 checked");
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (char?)ni5;
                }, "nullable 65536 checked");
                Assert.AreStrictEqual(null, (int?)(char?)ni6, "null checked");
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
            Assert.AreStrictEqual(0, (int)new char());
        }

        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreStrictEqual(0, (int)Activator.CreateInstance<char>());
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

        // #SPI
        //[Test]
        //public void TryParseWorks_SPI_1630()
        //{
        //    // #1630
        //    char charResult;
        //    bool result = char.TryParse("a", out charResult);
        //    Assert.True(result);
        //    Assert.AreEqual((int)charResult, (int)'a');

        //    result = char.TryParse("", out charResult);
        //    Assert.False(result);
        //    Assert.AreEqual((int)charResult, 0);

        //    result = char.TryParse("ab", out charResult);
        //    Assert.False(result);
        //    Assert.AreEqual((int)charResult, 0);
        //}

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual((int)'a', (int)char.Parse("a"));
            Assert.Throws<ArgumentNullException>(() => char.Parse(null));
            Assert.Throws<FormatException>(() => char.Parse(""));
            Assert.Throws<FormatException>(() => char.Parse("ab"));
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
