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
            Assert.AreEqual("RegExp", typeof(Regex).GetClassName());
            Assert.True(re is Regex);
        }

        [Test]
        public void StringOnlyConstructorWorks()
        {
            var re = new Regex("test123");
            Assert.AreEqual("test123", re.Source);
            Assert.False(re.Global);
        }

        [Test]
        public void ConstructorWithFlagsWorks()
        {
            var re = new Regex("test123", "g");
            Assert.AreEqual("test123", re.Source);
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
            Assert.AreEqual("test123", new Regex("test123", "").Pattern);
        }

        [Test]
        public void SourcePropertyWorks()
        {
            Assert.AreEqual("test123", new Regex("test123", "").Source);
        }

        [Test]
        public void ExecWorks()
        {
            var re = new Regex("a|b", "g");
            var m = re.Exec("xaybz");
            //Assert.AreEqual(m.Index, 1);
            Assert.AreEqual(1, m.Length);
            Assert.AreEqual("a", m[0]);
        }

        [Test]
        public void LastIndexWorks()
        {
            var re = new Regex("a|b", "g");
            re.Exec("xaybz");
            Assert.AreEqual(2, re.LastIndex);
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
            Assert.AreEqual(@"\[\-\/\\\^\$\*\+\?\.\(\)\|\[\]\{\}\]", escaped);
        }
    }
}
