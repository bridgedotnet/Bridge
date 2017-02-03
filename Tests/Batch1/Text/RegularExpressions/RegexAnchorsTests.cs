using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex: Anchors - {0}")]
    public class RegexAnchorsTests : RegexTestBase
    {
        #region MSDN

        [Test]
        public void MsdnStartOfStringOrLineTest()
        {
            int startPos = 0, endPos = 70;
            const string input = "Brooklyn Dodgers, National League, 1911, 1912, 1932-1957\n" +
                                 "Chicago Cubs, National League, 1903-present\n" +
                                 "Detroit Tigers, American League, 1901-present\n" +
                                 "New York Giants, National League, 1885-1957\n" +
                                 "Washington Senators, American League, 1901-1960\n";
            const string pattern = @"^((\w+(\s?)){2,}),\s(\w+\s\w+),(\s\d{4}(-(\d{4}|present))?,?)+";

            var actuals = new List<string>();
            var expecteds = new[] { "The Brooklyn Dodgers played in the National League in 1911, 1912, 1932-1957." };

            if (input.Substring(startPos, endPos).Contains(","))
            {
                var match = Regex.Match(input, pattern);
                while (match.Success)
                {
                    var actual = string.Format("The {0} played in the {1} in", match.Groups[1].Value,
                        match.Groups[4].Value);
                    foreach (Capture capture in match.Groups[5].Captures)
                    {
                        actual += capture.Value;
                    }
                    actual += ".";
                    actuals.Add(actual);

                    startPos = match.Index + match.Length;
                    endPos = startPos + 70 <= input.Length ? 70 : input.Length - startPos;
                    if (!input.Substring(startPos, endPos).Contains(",")) break;
                    match = match.NextMatch();
                }
            }

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void MsdnStartOfStringOrLineMultilineModeTest()
        {
            int startPos = 0, endPos = 70;
            const string input = "Brooklyn Dodgers, National League, 1911, 1912, 1932-1957\n" +
                                 "Chicago Cubs, National League, 1903-present\n" +
                                 "Detroit Tigers, American League, 1901-present\n" +
                                 "New York Giants, National League, 1885-1957\n" +
                                 "Washington Senators, American League, 1901-1960\n";
            const string pattern = @"^((\w+(\s?)){2,}),\s(\w+\s\w+),(\s\d{4}(-(\d{4}|present))?,?)+";

            var actuals = new List<string>();
            var expecteds = new[]
            {
                "The Brooklyn Dodgers played in the National League in 1911, 1912, 1932-1957.",
                "The Chicago Cubs played in the National League in 1903-present.",
                "The Detroit Tigers played in the American League in 1901-present.",
                "The New York Giants played in the National League in 1885-1957.",
                "The Washington Senators played in the American League in 1901-1960."
            };

            if (input.Substring(startPos, endPos).Contains(","))
            {
                var match = Regex.Match(input, pattern, RegexOptions.Multiline);
                while (match.Success)
                {
                    var actual = string.Format("The {0} played in the {1} in", match.Groups[1].Value,
                        match.Groups[4].Value);
                    foreach (Capture capture in match.Groups[5].Captures)
                    {
                        actual += capture.Value;
                    }
                    actual += ".";
                    actuals.Add(actual);

                    startPos = match.Index + match.Length;
                    endPos = startPos + 70 <= input.Length ? 70 : input.Length - startPos;
                    if (!input.Substring(startPos, endPos).Contains(",")) break;
                    match = match.NextMatch();
                }
            }

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void MsdnEndOfStringOrLineTest1()
        {
            // Attempting to match the entire input string

            int startPos = 0, endPos = 70;
            var cr = Environment.NewLine;
            var input = "Brooklyn Dodgers, National League, 1911, 1912, 1932-1957" + cr +
                        "Chicago Cubs, National League, 1903-present" + cr +
                        "Detroit Tigers, American League, 1901-present" + cr +
                        "New York Giants, National League, 1885-1957" + cr +
                        "Washington Senators, American League, 1901-1960" + cr;

            var basePattern = @"^((\w+(\s?)){2,}),\s(\w+\s\w+),(\s\d{4}(-(\d{4}|present))?,?)+";
            var pattern = basePattern + "$";

            var actuals = new List<string>();
            var expecteds = new string[0];

            if (input.Substring(startPos, endPos).Contains(","))
            {
                var match = Regex.Match(input, pattern);
                while (match.Success)
                {
                    var actual = string.Format("The {0} played in the {1} in", match.Groups[1].Value,
                        match.Groups[4].Value);
                    foreach (Capture capture in match.Groups[5].Captures)
                    {
                        actual += capture.Value;
                    }
                    actual += ".";
                    actuals.Add(actual);

                    startPos = match.Index + match.Length;
                    endPos = startPos + 70 <= input.Length ? 70 : input.Length - startPos;
                    if (!input.Substring(startPos, endPos).Contains(",")) break;
                    match = match.NextMatch();
                }
            }

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void MsdnEndOfStringOrLineTest2()
        {
            // Attempting to match each element in a string array

            var cr = Environment.NewLine;
            var input = "Brooklyn Dodgers, National League, 1911, 1912, 1932-1957" + cr +
                        "Chicago Cubs, National League, 1903-present" + cr +
                        "Detroit Tigers, American League, 1901-present" + cr +
                        "New York Giants, National League, 1885-1957" + cr +
                        "Washington Senators, American League, 1901-1960" + cr;

            var basePattern = @"^((\w+(\s?)){2,}),\s(\w+\s\w+),(\s\d{4}(-(\d{4}|present))?,?)+";
            var pattern = basePattern + "$";

            var actuals = new List<string>();
            var expecteds = new[]
            {
                "The Brooklyn Dodgers played in the National League in 1911, 1912, 1932-1957.",
                "The Chicago Cubs played in the National League in 1903-present.",
                "The Detroit Tigers played in the American League in 1901-present.",
                "The New York Giants played in the National League in 1885-1957.",
                "The Washington Senators played in the American League in 1901-1960."
            };

            var teams = input.Split(new[] { cr }, StringSplitOptions.RemoveEmptyEntries);
            foreach (var team in teams)
            {
                if (team.Length > 70) continue;

                var match = Regex.Match(team, pattern);
                if (match.Success)
                {
                    var actual = string.Format("The {0} played in the {1} in", match.Groups[1].Value,
                        match.Groups[4].Value);
                    foreach (Capture capture in match.Groups[5].Captures)
                    {
                        actual += capture.Value;
                    }
                    actual += ".";
                    actuals.Add(actual);
                }
            }

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void MsdnEndOfStringOrLineTest3()
        {
            // Attempting to match each line of an input string with '$'

            var cr = "\r\n";
            var input = "Brooklyn Dodgers, National League, 1911, 1912, 1932-1957" + cr +
                        "Chicago Cubs, National League, 1903-present" + cr +
                        "Detroit Tigers, American League, 1901-present" + cr +
                        "New York Giants, National League, 1885-1957" + cr +
                        "Washington Senators, American League, 1901-1960" + cr;

            var basePattern = @"^((\w+(\s?)){2,}),\s(\w+\s\w+),(\s\d{4}(-(\d{4}|present))?,?)+";
            var pattern = basePattern + "$";

            var actuals = new List<string>();
            var expecteds = new string[0];

            var startPos = 0;
            var endPos = 70;
            if (input.Substring(startPos, endPos).Contains(","))
            {
                var match = Regex.Match(input, pattern, RegexOptions.Multiline);
                while (match.Success)
                {
                    var actual = string.Format("The {0} played in the {1} in", match.Groups[1].Value,
                        match.Groups[4].Value);
                    foreach (Capture capture in match.Groups[5].Captures)
                    {
                        actual += capture.Value;
                    }
                    actual += ".";
                    actuals.Add(actual);

                    startPos = match.Index + match.Length;
                    endPos = startPos + 70 <= input.Length ? 70 : input.Length - startPos;
                    if (!input.Substring(startPos, endPos).Contains(",")) break;
                    match = match.NextMatch();
                }
            }

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void MsdnEndOfStringOrLineTest4()
        {
            // Attempting to match each line of an input string with '\r?$'

            var cr = Environment.NewLine;
            var input = "Brooklyn Dodgers, National League, 1911, 1912, 1932-1957" + cr +
                        "Chicago Cubs, National League, 1903-present" + cr +
                        "Detroit Tigers, American League, 1901-present" + cr +
                        "New York Giants, National League, 1885-1957" + cr +
                        "Washington Senators, American League, 1901-1960" + cr;

            var basePattern = @"^((\w+(\s?)){2,}),\s(\w+\s\w+),(\s\d{4}(-(\d{4}|present))?,?)+";
            string pattern;

            var actuals = new List<string>();
            var expecteds = new[]
            {
                "The Brooklyn Dodgers played in the National League in 1911, 1912, 1932-1957.",
                "The Chicago Cubs played in the National League in 1903-present.",
                "The Detroit Tigers played in the American League in 1901-present.",
                "The New York Giants played in the National League in 1885-1957.",
                "The Washington Senators played in the American League in 1901-1960."
            };

            var startPos = 0;
            var endPos = 70;
            pattern = basePattern + "\r?$";
            if (input.Substring(startPos, endPos).Contains(","))
            {
                var match = Regex.Match(input, pattern, RegexOptions.Multiline);
                while (match.Success)
                {
                    var actual = string.Format("The {0} played in the {1} in", match.Groups[1].Value,
                        match.Groups[4].Value);
                    foreach (Capture capture in match.Groups[5].Captures)
                    {
                        actual += capture.Value;
                    }
                    actual += ".";
                    actuals.Add(actual);

                    startPos = match.Index + match.Length;
                    endPos = startPos + 70 <= input.Length ? 70 : input.Length - startPos;
                    if (!input.Substring(startPos, endPos).Contains(",")) break;
                    match = match.NextMatch();
                }
            }

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void MsdnStartOfStringOnlyTest()
        {
            int startPos = 0, endPos = 70;
            string input = "Brooklyn Dodgers, National League, 1911, 1912, 1932-1957\n" +
                           "Chicago Cubs, National League, 1903-present\n" +
                           "Detroit Tigers, American League, 1901-present\n" +
                           "New York Giants, National League, 1885-1957\n" +
                           "Washington Senators, American League, 1901-1960\n";

            string pattern = @"\A((\w+(\s?)){2,}),\s(\w+\s\w+),(\s\d{4}(-(\d{4}|present))?,?)+";

            var actuals = new List<string>();
            var expecteds = new[]
            {
                "The Brooklyn Dodgers played in the National League in 1911, 1912, 1932-1957."
            };

            if (input.Substring(startPos, endPos).Contains(","))
            {
                var match = Regex.Match(input, pattern, RegexOptions.Multiline);
                while (match.Success)
                {
                    var actual = string.Format("The {0} played in the {1} in", match.Groups[1].Value, match.Groups[4].Value);
                    foreach (Capture capture in match.Groups[5].Captures)
                    {
                        actual += capture.Value;
                    }
                    actual += ".";
                    actuals.Add(actual);

                    startPos = match.Index + match.Length;
                    endPos = startPos + 70 <= input.Length ? 70 : input.Length - startPos;
                    if (!input.Substring(startPos, endPos).Contains(",")) break;
                    match = match.NextMatch();
                }
            }

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void MsdnEndOfStringOrNewlineTest()
        {
            string[] inputs =
            {
                "Brooklyn Dodgers, National League, 1911, 1912, 1932-1957",
                "Chicago Cubs, National League, 1903-present" + Environment.NewLine,
                "Detroit Tigers, American League, 1901-present" + Regex.Unescape(@"\n"),
                "New York Giants, National League, 1885-1957",
                "Washington Senators, American League, 1901-1960" + Environment.NewLine
            };
            string pattern = @"^((\w+(\s?)){2,}),\s(\w+\s\w+),(\s\d{4}(-(\d{4}|present))?,?)+\r?\Z";

            var actuals = new List<bool>();
            var expecteds = new[] { true, true, true, true, true };

            foreach (string input in inputs)
            {
                if (input.Length > 70 || !input.Contains(",")) continue;
                var match = Regex.Match(input, pattern);
                actuals.Add(match.Success);
            }

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void MsdnEndOfStringOnlyTest()
        {
            string[] inputs =
            {
                "Brooklyn Dodgers, National League, 1911, 1912, 1932-1957",
                "Chicago Cubs, National League, 1903-present" + "\r\n",
                "Detroit Tigers, American League, 1901-present" + Regex.Unescape(@"\n"),
                "New York Giants, National League, 1885-1957",
                "Washington Senators, American League, 1901-1960" + "\r\n"
            };
            string pattern = @"^((\w+(\s?)){2,}),\s(\w+\s\w+),(\s\d{4}(-(\d{4}|present))?,?)+\r?\z";

            var actuals = new List<bool>();
            var expecteds = new[] { true, false, false, true, false };

            foreach (string input in inputs)
            {
                if (input.Length > 70 || !input.Contains(",")) continue;
                var match = Regex.Match(input, pattern);
                actuals.Add(match.Success);
            }

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void MsdnContiguousMatchesTest()
        {
            string input = "capybara,squirrel,chipmunk,porcupine,gopher," +
                           "beaver,groundhog,hamster,guinea pig,gerbil," +
                           "chinchilla,prairie dog,mouse,rat";

            string pattern = @"\G(\w+\s?\w*),?";

            var actuals = new List<string>();
            var expecteds = new[]
            {
                "capybara",
                "squirrel",
                "chipmunk",
                "porcupine",
                "gopher",
                "beaver",
                "groundhog",
                "hamster",
                "guinea pig",
                "gerbil",
                "chinchilla",
                "prairie dog",
                "mouse",
                "rat"
            };

            var match = Regex.Match(input, pattern);
            while (match.Success)
            {
                actuals.Add(match.Groups[1].Value);
                match = match.NextMatch();
            }

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void MsdnWordBoundaryTest()
        {
            string input = "area bare arena mare";
            string pattern = @"\bare\w*\b";

            var actuals = new List<string>();
            var expecteds = new[]
            {
                "area_0",
                "arena_10"
            };

            foreach (Match match in Regex.Matches(input, pattern))
            {
                actuals.Add(string.Format("{0}_{1}", match.Value, match.Index));
            }

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void MsdnNonWordBoundaryTest()
        {
            string input = "equity queen equip acquaint quiet";
            string pattern = @"\Bqu\w+";

            var actuals = new List<string>();
            var expecteds = new[]
            {
                "quity_1",
                "quip_14",
                "quaint_21"
            };

            foreach (Match match in Regex.Matches(input, pattern))
            {
                actuals.Add(string.Format("{0}_{1}", match.Value, match.Index));
            }

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        #endregion MSDN

        [Test]
        public void StartAndEndOfStringCustomTest1()
        {
            const string pattern = @"^.*$";
            const string text = "abc\ndef";
            var rgx = new Regex(pattern, RegexOptions.Multiline);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 3, "abc", 1, true);

            ValidateGroup(ms[0], 0, 0, 3, true, "abc", 1);
            ValidateCapture(ms[0], 0, 0, 0, 3, "abc");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 4, 3, "def", 1, true);

            ValidateGroup(ms[1], 0, 4, 3, true, "def", 1);
            ValidateCapture(ms[1], 0, 0, 4, 3, "def");
        }

        [Test]
        public void StartAndEndOfStringCustomTest2()
        {
            const string pattern = @".*$";
            const string text = "abc\ndef";
            var rgx = new Regex(pattern, RegexOptions.Multiline);
            var ms = rgx.Matches(text);

            Assert.AreEqual(4, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 3, "abc", 1, true);

            ValidateGroup(ms[0], 0, 0, 3, true, "abc", 1);
            ValidateCapture(ms[0], 0, 0, 0, 3, "abc");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 3, 0, "", 1, true);

            ValidateGroup(ms[1], 0, 3, 0, true, "", 1);
            ValidateCapture(ms[1], 0, 0, 3, 0, "");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 4, 3, "def", 1, true);

            ValidateGroup(ms[2], 0, 4, 3, true, "def", 1);
            ValidateCapture(ms[2], 0, 0, 4, 3, "def");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 7, 0, "", 1, true);

            ValidateGroup(ms[3], 0, 7, 0, true, "", 1);
            ValidateCapture(ms[3], 0, 0, 7, 0, "");
        }

        [Test]
        public void EndOfStringOrNewlineCustomTest1()
        {
            var actuals = new List<bool>();
            var expecteds = new[] { false, false, true };

            var text = "line1\n" + "line2\n" + "line3\n";

            var match = Regex.Match(text, @"line1\Z");
            actuals.Add(match.Success);

            match = Regex.Match(text, @"line2\Z");
            actuals.Add(match.Success);

            match = Regex.Match(text, @"line3\Z");
            actuals.Add(match.Success);

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void EndOfStringOrNewlineCustomTest2()
        {
            var actuals = new List<bool>();
            var expecteds = new[] { false, false, true };

            var text = "line1\n" + "line2\n" + "line3\n";

            var match = Regex.Match(text, @"line1\Z", RegexOptions.Multiline);
            actuals.Add(match.Success);

            match = Regex.Match(text, @"line2\Z", RegexOptions.Multiline);
            actuals.Add(match.Success);

            match = Regex.Match(text, @"line3\Z", RegexOptions.Multiline);
            actuals.Add(match.Success);

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void EndOfStringOnlyCustomTest1()
        {
            var actuals = new List<bool>();
            var expecteds = new[] { false, false, false };

            var text = "line1\n" + "line2\n" + "line3\n";

            var match = Regex.Match(text, @"line1\z");
            actuals.Add(match.Success);

            match = Regex.Match(text, @"line2\z");
            actuals.Add(match.Success);

            match = Regex.Match(text, @"line3\z");
            actuals.Add(match.Success);

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void EndOfStringOnlyCustomTest2()
        {
            var actuals = new List<bool>();
            var expecteds = new[] { false, false, false };

            var text = "line1\n" + "line2\n" + "line3\n";

            var match = Regex.Match(text, @"line1\z", RegexOptions.Multiline);
            actuals.Add(match.Success);

            match = Regex.Match(text, @"line2\z", RegexOptions.Multiline);
            actuals.Add(match.Success);

            match = Regex.Match(text, @"line3\z", RegexOptions.Multiline);
            actuals.Add(match.Success);

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void EndOfStringOnlyCustomTest3()
        {
            var actuals = new List<bool>();
            var expecteds = new[] { false, false, true };

            var text = "line1\n" + "line2\n" + "line3";

            var match = Regex.Match(text, @"line1\z", RegexOptions.Multiline);
            actuals.Add(match.Success);

            match = Regex.Match(text, @"line2\z", RegexOptions.Multiline);
            actuals.Add(match.Success);

            match = Regex.Match(text, @"line3\z", RegexOptions.Multiline);
            actuals.Add(match.Success);

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void ContiguousMatchesCustomTest1()
        {
            string pattern = @"\GContiguous";
            string input = "ContiguousContiguous";

            var actuals = new List<string>();
            var expecteds = new[] { "Contiguous", "Contiguous" };

            var match = Regex.Match(input, pattern);
            while (match.Success)
            {
                actuals.Add(match.Value);
                match = match.NextMatch();
            }

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        [Test]
        public void ContiguousMatchesCustomTest2()
        {
            string pattern = @"\GContiguous";
            string input = "ContiguousNonContiguous";

            var actuals = new List<string>();
            var expecteds = new[] { "Contiguous" };

            var match = Regex.Match(input, pattern);
            while (match.Success)
            {
                actuals.Add(match.Value);
                match = match.NextMatch();
            }

            ValidateCollection(expecteds, actuals.ToArray(), "Result");
        }

        //TODO: Enable when enhanced processing of Unicode groups/chars is implemented
        //[Test]
        //public void WordBoundaryNonLatinCustomTest()
        //{
        //    string input = "семь раз отмерь, один раз отрежь";
        //    string pattern = @"\b[а-я]+ь\b";

        //    var actuals = new List<string>();
        //    var expecteds = new[]
        //    {
        //        "семь_0",
        //        "отмерь_9",
        //        "отрежь_26"
        //    };

        //    foreach (Match match in Regex.Matches(input, pattern))
        //    {
        //        actuals.Add(string.Format("{0}_{1}", match.Value, match.Index));
        //    }

        //    ValidateCollection(expecteds, actuals.ToArray(), "Result");
        //}
    }
}