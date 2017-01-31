using Bridge.Test.NUnit;
using System;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    public class RegexTestBase
    {
        protected void ValidateMatchNotFound(Match match)
        {
            ValidateMatch(match, 0, 0, "", 1, false);
        }

        protected void ValidateMatch(Match match, int index, int length, string value, int groupCount, bool success = true)
        {
            var matchCapCount = success ? 1 : 0;
            ValidateGroupImpl(match, index, length, success, value, matchCapCount, "ValidateMatch: Match");

            Assert.NotNull(match.Groups, "ValidateMatch: Match.Groups is not NULL");
            Assert.AreEqual(groupCount, match.Groups.Count);
            if (groupCount > 0)
            {
                ValidateGroupImpl(match.Groups[0], index, length, success, value, matchCapCount, "ValidateMatch: Match.Group0");
            }

            Assert.NotNull(match.Captures, "ValidateMatch: Match.Captures is not NULL");
            Assert.AreEqual(matchCapCount, match.Captures.Count, "ValidateMatch: Match.Captures.Count");
            if (success)
            {
                ValidateCaptureImpl(match.Captures[0], index, length, value, "ValidateMatch: Match.Capture0");
            }
        }

        protected void ValidateGroup(Match match, int groupIndex, int index, int length, bool success, string value, int captureCount)
        {
            var group = match.Groups[groupIndex];
            ValidateGroupImpl(group, index, length, success, value, captureCount, "ValidateGroup: Group" + groupIndex);
        }

        private void ValidateGroupImpl(Group group, int index, int length, bool success, string value, int captureCount, string descr)
        {
            ValidateCaptureImpl(group, index, length, value, descr);
            Assert.AreEqual(success, group.Success, descr + ".Success");

            Assert.NotNull(group.Captures, descr + ".Captures is not NULL");
            Assert.AreEqual(captureCount, group.Captures.Count, descr + ".Captures.Count");
        }

        protected void ValidateCapture(Match match, int groupIndex, int captureIndex, int index, int length, string value)
        {
            Assert.NotNull(match, "ValidateCapture: Match is not NULL");
            Assert.NotNull(match.Groups, "ValidateCapture: Match.Groups is not NULL");
            var group = match.Groups[groupIndex];

            Assert.NotNull(group, "ValidateCapture: Group" + groupIndex + " is not NULL");
            Assert.NotNull(group.Captures, "ValidateCapture: Group" + groupIndex + ".Captures is not NULL");
            var capture = group.Captures[captureIndex];

            ValidateCaptureImpl(capture, index, length, value,
                "ValidateCapture: Group" + groupIndex + ".Capture" + captureIndex);
        }

        private void ValidateCaptureImpl(Capture capture, int index, int length, string value, string descr)
        {
            Assert.NotNull(capture, descr + " is not NULL");

            Assert.AreEqual(index, capture.Index, descr + ".Index");
            Assert.AreEqual(length, capture.Length, descr + ".Length");
            Assert.AreEqual(value, capture.Value, descr + ".Value");
            Assert.AreEqual(value, capture.ToString(), descr + ".ToString()");
        }

        protected void CapturesAreEqual(Capture expected, Capture actual, string descr)
        {
            if (expected == null)
            {
                Assert.Null(actual, descr + " is NULL");
            }
            else
            {
                Assert.NotNull(actual, descr + " is not NULL");

                Assert.AreEqual(expected.Index, actual.Index, descr + ".Index");
                Assert.AreEqual(expected.Length, actual.Length, descr + ".Length");
                Assert.AreEqual(expected.Value, actual.Value, descr + ".Value");
                Assert.AreEqual(expected.ToString(), actual.ToString(), descr + ".ToString()");
            }
        }

        protected void GroupsAreEqual(Group expected, Group actual, string descr)
        {
            if (expected == null)
            {
                Assert.Null(actual, descr + " is NULL");
            }
            else
            {
                Assert.NotNull(actual, descr + " is not NULL");

                CapturesAreEqual(expected, actual, descr);
                Assert.AreEqual(expected.Success, actual.Success, descr + ".Success");

                if (expected.Captures == null)
                {
                    Assert.Null(actual.Captures, descr + ".Captures is NULL");
                }
                else
                {
                    Assert.NotNull(actual.Captures, descr + ".Captures is not NULL");
                    Assert.AreEqual(expected.Captures.Count, actual.Captures.Count, descr + ".Captures.Count");
                    for (int i = 0; i < expected.Captures.Count; i++)
                    {
                        CapturesAreEqual(expected.Captures[i], actual.Captures[i], descr + ".Captures[" + i + "]");
                    }
                }
            }
        }

        protected void MatchesAreEqual(Match expected, Match actual, string descr)
        {
            if (expected == null)
            {
                Assert.Null(actual, descr + " is NULL");
            }
            else
            {
                Assert.NotNull(actual, descr + " is not NULL");
                GroupsAreEqual(expected, actual, descr);

                if (expected.Groups == null)
                {
                    Assert.Null(actual.Groups, descr + ".Groups is NULL");
                }
                else
                {
                    Assert.NotNull(actual.Groups, descr + ".Groups is not NULL");
                    Assert.AreEqual(expected.Groups.Count, actual.Groups.Count, descr + ".Groups.Count");
                    for (int i = 0; i < expected.Groups.Count; i++)
                    {
                        CapturesAreEqual(expected.Groups[i], actual.Groups[i], descr + ".Groups[" + i + "]");
                    }
                }
            }
        }

        protected void ValidateCollection<T>(T[] expected, T[] actual, string msg)
        {
            if (expected == null)
            {
                Assert.Null(actual, msg + " is NULL");
            }
            else
            {
                Assert.NotNull(actual, msg + " is not NULL");
                Assert.AreEqual(expected.Length, actual.Length, msg + ".Length");

                var minLength = Math.Min(expected.Length, actual.Length);
                for (int i = 0; i < minLength; i++)
                {
                    Assert.AreEqual(expected[i], actual[i], msg + "[" + i + "]");
                }
            }
        }

        protected void ValidateMatchResults(Regex rgx, string[] inputs, string[] expected)
        {
            for (int i = 0; i < inputs.Length; i++)
            {
                var m = rgx.Match(inputs[i]);
                if (expected[i] == null)
                {
                    Assert.False(m.Success);
                }
                else
                {
                    Assert.True(m.Success);
                    if (m.Success)
                    {
                        Assert.AreEqual(expected[i], m.Value);
                    }
                }
            }
        }
    }
}