using Bridge.Test.NUnit;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex: Examples - {0}")]
    public class RegexExamplesTests : RegexTestBase
    {
        [Test]
        public void EmailParseTest()
        {
            const string pattern =
                @"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
            const string text = "user@bridge.net";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 15, "user@bridge.net", 1, true);

            ValidateGroup(m, 0, 0, 15, true, "user@bridge.net", 1);
            ValidateCapture(m, 0, 0, 0, 15, "user@bridge.net");
        }

        [Test]
        public void PhoneParseTest()
        {
            const string pattern = @"\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}";
            const string text = "+7-999-111-1111";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 15, "+7-999-111-1111", 1, true);

            ValidateGroup(m, 0, 0, 15, true, "+7-999-111-1111", 1);
            ValidateCapture(m, 0, 0, 0, 15, "+7-999-111-1111");
        }

        [Test]
        public void PasswordValidationTest()
        {
            const string pattern = @"^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$";
            const string text = "P@ssw0rd";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 8, "P@ssw0rd", 2, true);

            ValidateGroup(m, 0, 0, 8, true, "P@ssw0rd", 1);
            ValidateCapture(m, 0, 0, 0, 8, "P@ssw0rd");

            ValidateGroup(m, 1, 0, 7, true, "P@ssw0r", 1);
            ValidateCapture(m, 1, 0, 0, 7, "P@ssw0r");
        }

        [Test]
        public void WordSlplittingTest()
        {
            const string pattern = "([+-]?(?:'.+?'|\".+? \"|[^+\\- ]{1}[^ ]*))";
            const string text = "It's time to say: 'Hello world!'";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(5, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 4, "It's", 2, true);

            ValidateGroup(ms[0], 0, 0, 4, true, "It's", 1);
            ValidateCapture(ms[0], 0, 0, 0, 4, "It's");

            ValidateGroup(ms[0], 1, 0, 4, true, "It's", 1);
            ValidateCapture(ms[0], 1, 0, 0, 4, "It's");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 5, 4, "time", 2, true);

            ValidateGroup(ms[1], 0, 5, 4, true, "time", 1);
            ValidateCapture(ms[1], 0, 0, 5, 4, "time");

            ValidateGroup(ms[1], 1, 5, 4, true, "time", 1);
            ValidateCapture(ms[1], 1, 0, 5, 4, "time");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 10, 2, "to", 2, true);

            ValidateGroup(ms[2], 0, 10, 2, true, "to", 1);
            ValidateCapture(ms[2], 0, 0, 10, 2, "to");

            ValidateGroup(ms[2], 1, 10, 2, true, "to", 1);
            ValidateCapture(ms[2], 1, 0, 10, 2, "to");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 13, 4, "say:", 2, true);

            ValidateGroup(ms[3], 0, 13, 4, true, "say:", 1);
            ValidateCapture(ms[3], 0, 0, 13, 4, "say:");

            ValidateGroup(ms[3], 1, 13, 4, true, "say:", 1);
            ValidateCapture(ms[3], 1, 0, 13, 4, "say:");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 18, 14, "'Hello world!'", 2, true);

            ValidateGroup(ms[4], 0, 18, 14, true, "'Hello world!'", 1);
            ValidateCapture(ms[4], 0, 0, 18, 14, "'Hello world!'");

            ValidateGroup(ms[4], 1, 18, 14, true, "'Hello world!'", 1);
            ValidateCapture(ms[4], 1, 0, 18, 14, "'Hello world!'");
        }

        [Test]
        public void IpAddressValidationTest()
        {
            const string pattern = @"^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$";
            const string text = "192.168.1.1";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 11, "192.168.1.1", 5, true);

            ValidateGroup(m, 0, 0, 11, true, "192.168.1.1", 1);
            ValidateCapture(m, 0, 0, 0, 11, "192.168.1.1");

            ValidateGroup(m, 1, 0, 3, true, "192", 1);
            ValidateCapture(m, 1, 0, 0, 3, "192");

            ValidateGroup(m, 2, 4, 3, true, "168", 1);
            ValidateCapture(m, 2, 0, 4, 3, "168");

            ValidateGroup(m, 3, 8, 1, true, "1", 1);
            ValidateCapture(m, 3, 0, 8, 1, "1");

            ValidateGroup(m, 4, 10, 1, true, "1", 1);
            ValidateCapture(m, 4, 0, 10, 1, "1");
        }

        [Test]
        public void EscapeQuotedWordsTest()
        {
            const string pattern = "([\"'])((?:(?=(?:\\\\)*)\\.|.)*?)\\1";
            const string text = "Another 'te\\st' for several 'quo\"uted' words.";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 8, 7, "'te\\st'", 3, true);

            ValidateGroup(ms[0], 0, 8, 7, true, "'te\\st'", 1);
            ValidateCapture(ms[0], 0, 0, 8, 7, "'te\\st'");

            ValidateGroup(ms[0], 1, 8, 1, true, "'", 1);
            ValidateCapture(ms[0], 1, 0, 8, 1, "'");

            ValidateGroup(ms[0], 2, 9, 5, true, "te\\st", 1);
            ValidateCapture(ms[0], 2, 0, 9, 5, "te\\st");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 28, 10, "'quo\"uted'", 3, true);

            ValidateGroup(ms[1], 0, 28, 10, true, "'quo\"uted'", 1);
            ValidateCapture(ms[1], 0, 0, 28, 10, "'quo\"uted'");

            ValidateGroup(ms[1], 1, 28, 1, true, "'", 1);
            ValidateCapture(ms[1], 1, 0, 28, 1, "'");

            ValidateGroup(ms[1], 2, 29, 8, true, "quo\"uted", 1);
            ValidateCapture(ms[1], 2, 0, 29, 8, "quo\"uted");
        }

        [Test]
        public void CreditCardExpirationParsingTest()
        {
            const string pattern = @"^(0[1-9]|1[0-2])(\/|-)([0-9]{4})$";
            const string text = "09/2222";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 7, "09/2222", 4, true);

            ValidateGroup(m, 0, 0, 7, true, "09/2222", 1);
            ValidateCapture(m, 0, 0, 0, 7, "09/2222");

            ValidateGroup(m, 1, 0, 2, true, "09", 1);
            ValidateCapture(m, 1, 0, 0, 2, "09");

            ValidateGroup(m, 2, 2, 1, true, "/", 1);
            ValidateCapture(m, 2, 0, 2, 1, "/");

            ValidateGroup(m, 3, 3, 4, true, "2222", 1);
            ValidateCapture(m, 3, 0, 3, 4, "2222");
        }

        [Test]
        public void UrlParsingTest()
        {
            const string pattern = @"^((https?:)(\/\/\/?)([\w]*(?::[\w]*)?@)?([\d\w\.-]+)(?::(\d+))?)?([\/\\\w\.()-]*)?(?:([?][^#]*)?(#.*)?)*";
            const string text = "http://bridge.net/download/";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 27, "http://bridge.net/download/", 10, true);

            ValidateGroup(m, 0, 0, 27, true, "http://bridge.net/download/", 1);
            ValidateCapture(m, 0, 0, 0, 27, "http://bridge.net/download/");

            ValidateGroup(m, 1, 0, 17, true, "http://bridge.net", 1);
            ValidateCapture(m, 1, 0, 0, 17, "http://bridge.net");

            ValidateGroup(m, 2, 0, 5, true, "http:", 1);
            ValidateCapture(m, 2, 0, 0, 5, "http:");

            ValidateGroup(m, 3, 5, 2, true, "//", 1);
            ValidateCapture(m, 3, 0, 5, 2, "//");

            ValidateGroup(m, 4, 0, 0, false, "", 0);

            ValidateGroup(m, 5, 7, 10, true, "bridge.net", 1);
            ValidateCapture(m, 5, 0, 7, 10, "bridge.net");

            ValidateGroup(m, 6, 0, 0, false, "", 0);

            ValidateGroup(m, 7, 17, 10, true, "/download/", 1);
            ValidateCapture(m, 7, 0, 17, 10, "/download/");

            ValidateGroup(m, 8, 0, 0, false, "", 0);

            ValidateGroup(m, 9, 0, 0, false, "", 0);
        }
    }
}