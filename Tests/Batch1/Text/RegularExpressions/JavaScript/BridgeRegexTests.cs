using Bridge.Test.NUnit;
using Bridge.Html5;

namespace Bridge.ClientTest.Text.RegularExpressions.JavaScript
{
    [Category(Constants.MODULE_REGEX_JS)]
    [TestFixture]
    public class BridgeRegexTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            var re = new RegExp("");
            Assert.AreEqual("RegExp", typeof(RegExp).FullName);
            //Assert.AreEqual(typeof(Regex).IsClass, true);
            Assert.True(re is RegExp);
        }

        [Test]
        public void StringOnlyConstructorWorks()
        {
            var re = new RegExp("test123");
            Assert.AreEqual("test123", re.Source);
            Assert.False(re.Global);
        }

        [Test]
        public void ConstructorWithFlagsWorks()
        {
            var re = new RegExp("test123", "g");
            Assert.AreEqual("test123", re.Source);
            Assert.True(re.Global);
        }

        [Test]
        public void GlobalFlagWorks()
        {
            Assert.False(new RegExp("x", "").Global);
            Assert.True(new RegExp("x", "g").Global);
        }

        [Test]
        public void IgnoreCaseFlagWorks()
        {
            Assert.False(new RegExp("x", "").IgnoreCase);
            Assert.True(new RegExp("x", "i").IgnoreCase);
        }

        [Test]
        public void MultilineFlagWorks()
        {
            Assert.False(new RegExp("x", "").Multiline);
            Assert.True(new RegExp("x", "m").Multiline);
        }

        [Test]
        public void PatternPropertyWorks()
        {
            Assert.AreEqual("test123", new RegExp("test123", "").Pattern);
        }

        [Test]
        public void SourcePropertyWorks()
        {
            Assert.AreEqual("test123", new RegExp("test123", "").Source);
        }

        [Test]
        public void ExecWorks()
        {
            var re = new RegExp("a|b", "g");
            var m = re.Exec("xaybz");
            //Assert.AreEqual(m.Index, 1);
            Assert.AreEqual(1, m.Length);
            Assert.AreEqual("a", m[0]);
        }

        [Test]
        public void LastIndexWorks()
        {
            var re = new RegExp("a|b", "g");
            re.Exec("xaybz");
            Assert.AreEqual(2, re.LastIndex);
        }

        [Test]
        public void TestWorks()
        {
            Assert.True(new RegExp("a|b").Test("xaybz"));
            Assert.False(new RegExp("c").Test("xaybz"));
        }

        //[Test]
        //public static void EscapeWorks()
        //{
        //    var escaped = RegExp.Escape(@"[-/\^$*+?.()|[]{}]");
        //    Assert.AreEqual(@"\[\-\/\\\^\$\*\+\?\.\(\)\|\[\]\{\}\]", escaped);
        //}
    }
}