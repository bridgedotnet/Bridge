
using Bridge.Contract;
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

            [TestCase]
            public void ConvertPath()
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
    }
}
