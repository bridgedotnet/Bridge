// #1625
//using Bridge.Test.NUnit;
//using System.Web;

//namespace Bridge.ClientTest.Batch4.Web
//{
//    [TestFixture]
//    public class HttpUtilityTests
//    {
//        [Test]
//        public void HtmlEncodeWorks()
//        {
//            Assert.AreEqual(HttpUtility.HtmlEncode("a<\"&'>b"), "a&lt;&quot;&amp;&#39;&gt;b");
//        }

//        [Test]
//        public void HtmlDecodeWorks()
//        {
//            Assert.AreEqual(HttpUtility.HtmlDecode("abcd"), "abcd");
//            Assert.AreEqual(HttpUtility.HtmlDecode("&lt;abcd"), "<abcd");
//            Assert.AreEqual(HttpUtility.HtmlDecode("abcd&gt;"), "abcd>");
//            Assert.AreEqual(HttpUtility.HtmlDecode("a&lt;&quot;&amp;&#39;&gt;b"), "a<\"&'>b");
//        }

//        [Test]
//        public void HtmlAttributeEncodeWorks()
//        {
//            Assert.AreEqual(HttpUtility.HtmlEncode("a<\"&'>b"), "a&lt;&quot;&amp;&#39;&gt;b");
//        }

//        [Test]
//        public void UrlEncodeWorks()
//        {
//            Assert.AreEqual(HttpUtility.UrlEncode("a /b"), "a+%2Fb");
//        }

//        [Test]
//        public void UrlPathEncodeWorks()
//        {
//            Assert.AreEqual(HttpUtility.UrlPathEncode("a /b"), "a%20/b");
//        }

//        [Test]
//        public void UrlDecodeWorks()
//        {
//            Assert.AreEqual(HttpUtility.UrlDecode("a+b%20c"), "a b c");
//        }

//        [Test]
//        public void JavaScriptEncodeWithoutAddDoubleQuotesArgumentWorks()
//        {
//            Assert.AreEqual(HttpUtility.JavaScriptStringEncode("a'b\\c\"d"), "a\\'b\\\\c\\\"d");
//        }

//        [Test]
//        public void JavaScriptEncodeWithAddDoubleQuotesArgumentWorks()
//        {
//            Assert.AreEqual(HttpUtility.JavaScriptStringEncode("a'b\\c\"d", false), "a\\'b\\\\c\\\"d");
//            Assert.AreEqual(HttpUtility.JavaScriptStringEncode("a'b\\c\"d", true), "\"a\\'b\\\\c\\\"d\"");
//        }
//    }
//}