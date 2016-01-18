using Bridge.Test;
using Bridge.ClientTest;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture]
    public class RegexTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            var re = new Regex("");
            Assert.AreEqual(typeof(Regex).GetClassName(), "RegExp");
            Assert.True(re is Regex);
        }

        [Test]
        public void StringOnlyConstructorWorks()
        {
            var re = new Regex("test123");
            Assert.AreEqual(re.Source, "test123");
            Assert.False(re.Global);
        }

        [Test]
        public void ConstructorWithFlagsWorks()
        {
            var re = new Regex("test123", "g");
            Assert.AreEqual(re.Source, "test123");
            Assert.True(re.Global);
        }

        [Test]
        public void GlobalFlagWorks()
        {
            Assert.False(new Regex("x", "").Global);
            Assert.True(new Regex("x", "g").Global);
        }

        [Test]
        public void IgnoreCaseFlagWorks()
        {
            Assert.False(new Regex("x", "").IgnoreCase);
            Assert.True(new Regex("x", "i").IgnoreCase);
        }

        [Test]
        public void MultilineFlagWorks()
        {
            Assert.False(new Regex("x", "").Multiline);
            Assert.True(new Regex("x", "m").Multiline);
        }

        [Test]
        public void PatternPropertyWorks()
        {
            Assert.AreEqual(new Regex("test123", "").Pattern, "test123");
        }

        [Test]
        public void SourcePropertyWorks()
        {
            Assert.AreEqual(new Regex("test123", "").Source, "test123");
        }

        [Test]
        public void ExecWorks()
        {
            var re = new Regex("a|b", "g");
            var m = re.Exec("xaybz");
            //Assert.AreEqual(m.Index, 1);
            Assert.AreEqual(m.Length, 1);
            Assert.AreEqual(m[0], "a");
        }

        [Test]
        public void LastIndexWorks()
        {
            var re = new Regex("a|b", "g");
            re.Exec("xaybz");
            Assert.AreEqual(re.LastIndex, 2);
        }

        [Test]
        public void TestWorks()
        {
            Assert.True(new Regex("a|b").Test("xaybz"));
            Assert.False(new Regex("c").Test("xaybz"));
        }

        [Test]
        public static void EscapeWorks()
        {
            var escaped = Regex.Escape(@"[-/\^$*+?.()|[]{}]");
            Assert.AreEqual(escaped, @"\[\-\/\\\^\$\*\+\?\.\(\)\|\[\]\{\}\]");
        }
    }
}
