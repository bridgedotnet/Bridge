using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3357 - {0}")]
    public class Bridge3357
    {
        [Test]
        public static void TestUriEquals()
        {
            var uriStr = "https://deck.net/";
            Assert.True(new Uri(uriStr) == new Uri(uriStr), "Two URIs initialized with same string are equal.");

            Assert.True(new Uri("https://deck.net") == new Uri("https://deck.net"), "Two identical URIs by static string are equal.");
            Assert.False(new Uri("https://deck.net/TEST") == new Uri("https://deck.net/test"), "Non-domain part of url is case-sensitive.");
            Assert.True(new Uri("https://deck.net/") == new Uri("https://deck.net/"), "URLs ending with slash are equal.");
            Assert.True(new Uri("https://deck.net:880") == new Uri("https://deck.net:880"), "Port number allows matching.");
            Assert.False(new Uri("https://deck.net") == new Uri("http://deck.net"), "URI's protocol (http/https) matters.");
            Assert.False(new Uri("https://deck.net:80/test") == new Uri("https://deck.net/test"), "Port numbers in URLs matters.");
        }
    }
}