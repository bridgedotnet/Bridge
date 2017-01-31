using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions.Methods
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex.IsMatch - {0}")]
    public class RegexIsMatchTests
    {
        private readonly List<Tuple<string, bool>> _isMatchTestData = new List<Tuple<string, bool>>
        {
            new Tuple<string, bool>("1298-673-4192", true),
            new Tuple<string, bool>("1298-673-4192", true),
            new Tuple<string, bool>("A08Z-931-468A", true),
            new Tuple<string, bool>("_A90-123-129X", false),
            new Tuple<string, bool>("12345-KKA-1230", false),
            new Tuple<string, bool>("0919-2893-1256", false)
        };

        private readonly List<Tuple<string, bool>> _isMatchWithOffsetTestData = new List<Tuple<string, bool>>
        {
            new Tuple<string, bool>("ID: 1234-567-8901", true),
            new Tuple<string, bool>("Identifier: A170-222-777z", true),
            new Tuple<string, bool>("1234-567-8901 IDENTITY: 9287-5555-1233", false)
        };

        #region Instance methods

        [Test]
        public void IsMatchTest()
        {
            var rgx = new Regex(@"^[a-zA-Z0-9]\d{2}[a-zA-Z0-9](-\d{3}){2}[A-Za-z0-9]$");
            for (int i = 0; i < _isMatchTestData.Count; i++)
            {
                var testValue = _isMatchTestData[i].Item1;
                var exptected = _isMatchTestData[i].Item2;

                var actual = rgx.IsMatch(testValue);
                Assert.AreEqual(exptected, actual);
            }
        }

        [Test]
        public void IsMatchWithOffsetTest()
        {
            var rgx = new Regex(@"[a-zA-Z0-9]\d{2}[a-zA-Z0-9](-\d{3}){2}[A-Za-z0-9]");
            for (int i = 0; i < _isMatchWithOffsetTestData.Count; i++)
            {
                var testValue = _isMatchWithOffsetTestData[i].Item1;
                var exptected = _isMatchWithOffsetTestData[i].Item2;

                int startAt = testValue.IndexOf(':');
                var actual = rgx.IsMatch(testValue, startAt);
                Assert.AreEqual(exptected, actual);
            }
        }

        #endregion Instance methods

        #region Static methods

        [Test]
        public void IsMatchStaticTest()
        {
            var pattern = @"^[a-zA-Z0-9]\d{2}[a-zA-Z0-9](-\d{3}){2}[A-Za-z0-9]$";
            for (int i = 0; i < _isMatchTestData.Count; i++)
            {
                var testValue = _isMatchTestData[i].Item1;
                var exptected = _isMatchTestData[i].Item2;

                var actual = Regex.IsMatch(testValue, pattern);
                Assert.AreEqual(exptected, actual);
            }
        }

        [Test]
        public void IsMatchStaticWithOptionsTest()
        {
            var pattern = @"^[a-zA-Z0-9]\d{2}[a-zA-Z0-9](-\d{3}){2}[A-Za-z0-9]$";
            for (int i = 0; i < _isMatchTestData.Count; i++)
            {
                var testValue = _isMatchTestData[i].Item1;
                var exptected = _isMatchTestData[i].Item2;

                var actual = Regex.IsMatch(testValue, pattern, RegexOptions.None);
                Assert.AreEqual(exptected, actual);
            }
        }

        [Test]
        public void IsMatchStaticWithOptionsAndTimeoutTest()
        {
            var pattern = @"^[a-zA-Z0-9]\d{2}[a-zA-Z0-9](-\d{3}){2}[A-Za-z0-9]$";
            for (int i = 0; i < _isMatchTestData.Count; i++)
            {
                var testValue = _isMatchTestData[i].Item1;
                var exptected = _isMatchTestData[i].Item2;

                var actual = Regex.IsMatch(testValue, pattern, RegexOptions.None, TimeSpan.FromDays(1));
                Assert.AreEqual(exptected, actual);
            }
        }

        #endregion Static methods
    }
}