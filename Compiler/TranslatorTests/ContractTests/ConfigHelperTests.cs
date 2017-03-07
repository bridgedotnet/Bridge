using Bridge.Contract;
using System;
using System.Collections.Generic;
using NUnit.Framework;


namespace Bridge.Translator.Tests
{
    [TestFixture]
    internal class ConfigHelperTests
    {
        public class ConvertPathTests
        {
            public ConfigHelper Helper
            {
                get; set;
            }

            [OneTimeSetUp]
            public void TestFixtureSetUp()
            {
                this.Helper = new ConfigHelper();
            }

            class A
            {
                public string Input
                {
                    get; set;
                }

                public string Expected
                {
                    get; set;
                }

                public char Separator
                {
                    get; set;
                }

                public A(string input, string expected, char separator)
                {
                    Input = input;
                    Expected = expected;
                    Separator = separator;
                }
            }

            [Test]
            public void ConfigHelperConvertPath()
            {
                var data = new A[]
                {
                    new A(@"\\root\folder1\\folder2\\\folder3\", @"//root/folder1/folder2/folder3/", '/'),
                    new A(@"http:\\root\folder1\\folder2\\\folder3\", @"http://root/folder1/folder2/folder3/", '/'),
                    new A(@"https:\\root\folder1\\folder2\\\folder3\", @"https://root/folder1/folder2/folder3/", '/'),
                    new A(@"ftp:\\root\folder1\\folder2\\\folder3", @"ftp://root/folder1/folder2/folder3", '/'),
                    new A(@"\root\folder1/\\folder2\\\folder3\", @"/root/folder1/folder2/folder3/", '/'),
                    new A(@"\root\folder1\\folder2//\\\folder3\folder4/folder5//folder6/", @"/root/folder1/folder2/folder3/folder4/folder5/folder6/", '/'),
                    new A(@"\\root\folder1\\folder2\\\folder3\", @"//root/folder1/folder2/folder3/", '/'),
                    new A(null, null, '/'),
                    new A("", "", '/'),

                    new A(@"http:\\root\folder1\\folder2\\\folder3\", @"http:\\root\folder1\folder2\folder3\", '\\'),
                    new A(@"https:\\root\folder1\\folder2\\\folder3\", @"https:\\root\folder1\folder2\folder3\", '\\'),
                    new A(@"ftp:\\root\folder1\\folder2\\\folder3", @"ftp:\\root\folder1\folder2\folder3", '\\'),
                    new A(@"\\root\folder1\\folder2\\\folder3\", @"\\root\folder1\folder2\folder3\", '\\'),
                    new A(@"\root\folder1/\\folder2\\\folder3\", @"\root\folder1\folder2\folder3\", '\\'),
                    new A(@"\root\folder1\\folder2//\\\folder3\folder4/folder5//folder6/", @"\root\folder1\folder2\folder3\folder4\folder5\folder6\", '\\'),
                    new A(@"\\root\folder1\\folder2\\\folder3\", @"\\root\folder1\folder2\folder3\", '\\'),
                    new A(@"//root\folder1\\folder2\\\folder3\", @"\\root\folder1\folder2\folder3\", '\\'),
                    new A(@"/root\folder1/\\folder2\\\folder3\", @"\root\folder1\folder2\folder3\", '\\'),
                    new A(@"/root\folder1\\folder2//\\\folder3\folder4/folder5//folder6/", @"\root\folder1\folder2\folder3\folder4\folder5\folder6\", '\\'),
                    new A(@"//root\folder1\\folder2\\\folder3\", @"\\root\folder1\folder2\folder3\", '\\'),
                    new A(null, null, '\\'),
                    new A("", "", '\\')
                };

                string actual;

                var number = 1;

                foreach (var d in data)
                {
                    actual = Helper.ConvertPath(d.Input, d.Separator);

                    Assert.AreEqual(d.Expected, actual, "Test number " + number);

                    number++;
                }
            }
        }

        public class ApplyTokensTests
        {
            public ConfigHelper Helper
            {
                get; set;
            }

            [OneTimeSetUp]
            public void TestFixtureSetUp()
            {
                this.Helper = new ConfigHelper();
            }

            [Test]
            public void ConfigHelperApplyToken()
            {
                var token = "$(Token)";
                var tokenValue = "Value";

                var input = "A$(Token)BA$(token)BA$(Token1)BA$(token1)B";

                var actual = Helper.ApplyToken(token, tokenValue, input);
                Assert.AreEqual("AValueBAValueBA$(Token1)BA$(token1)B", actual);

                Assert.AreEqual(null, Helper.ApplyToken(token, tokenValue, null));
                Assert.AreEqual("ABABA$(Token1)BA$(token1)B", Helper.ApplyToken(token, null, input));
                Assert.AreEqual("ABABA$(Token1)BA$(token1)B", Helper.ApplyToken(token, "", input));
                Assert.Throws<ArgumentException>(() => { Helper.ApplyToken(null, "abc", input); });
                Assert.Throws<ArgumentException>(() => { Helper.ApplyToken("", "abc", input); });
            }

            [Test]
            public void ConfigHelperApplyPathToken()
            {
                var token = "$(Token)";
                var tokenValue = "Value";

                var input = "A$(Token)BA$(token)BA$(Token1)BA$(token1)B";

                var actual = Helper.ApplyPathToken(token, tokenValue, input);
                Assert.AreEqual("AValueBAValueBA$(Token1)BA$(token1)B", actual);

                Assert.AreEqual(null, Helper.ApplyPathToken(token, tokenValue, null));
                Assert.AreEqual("ABABA$(Token1)BA$(token1)B", Helper.ApplyPathToken(token, null, input));
                Assert.AreEqual("ABABA$(Token1)BA$(token1)B", Helper.ApplyPathToken(token, "", input));
                Assert.Throws<ArgumentException>(() => { Helper.ApplyPathToken(null, "abc", input); });
                Assert.Throws<ArgumentException>(() => { Helper.ApplyPathToken("", "abc", input); });
            }

            [Test]
            public void ConfigHelperApplyTokens()
            {
                var tokens = new Dictionary<string, string>()
                {
                    { "$(Token1)", "Value1" },
                    { "$(Token2)", "Value2" }
                };

                var input = "A$(Token1)$(token1)$(Token2)$(token2)B$(Token3)";
                var expected = "AValue1Value1Value2Value2B$(Token3)";

                var actual = Helper.ApplyTokens(tokens, input);
                Assert.AreEqual(expected, actual);

                Assert.AreEqual(null, Helper.ApplyTokens(tokens, null));
                Assert.Throws<ArgumentNullException>(() => { Helper.ApplyTokens(null, input); });
                Assert.Throws<ArgumentException>(() =>
                {
                    Helper.ApplyTokens(new Dictionary<string, string>() { { "", "abc" } }, input);
                });

                var emptyTokens = new Dictionary<string, string>()
                {
                    { "$(Token1)", "" },
                    { "$(Token2)", null },
                    { "$(Token3)", null }
                };

                Assert.AreEqual("AB", Helper.ApplyTokens(emptyTokens, input));
            }

            [Test]
            public void ConfigHelperApplyPathTokens()
            {
                var tokens = new Dictionary<string, string>()
                {
                    { "$(Token1)", "Value1" },
                    { "$(Token2)", "Value2" }
                };

                var input = "A$(Token1)$(token1)$(Token2)$(token2)B$(Token3)";
                var expected = "AValue1Value1Value2Value2B$(Token3)";

                var actual = Helper.ApplyPathTokens(tokens, input);
                Assert.AreEqual(expected, actual);

                Assert.AreEqual(null, Helper.ApplyPathTokens(tokens, null));
                Assert.Throws<ArgumentNullException>(() => { Helper.ApplyPathTokens(null, input); });
                Assert.Throws<ArgumentException>(() =>
                {
                    Helper.ApplyPathTokens(new Dictionary<string, string>() { { "", "abc" } }, input);
                });

                var emptyTokens = new Dictionary<string, string>()
                {
                    { "$(Token1)", "" },
                    { "$(Token2)", null },
                    { "$(Token3)", null }
                };

                Assert.AreEqual("AB", Helper.ApplyPathTokens(emptyTokens, input));
            }
        }
    }
}
