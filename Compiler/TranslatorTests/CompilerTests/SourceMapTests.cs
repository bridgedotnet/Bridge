using System;
using System.Linq;
using System.Collections.Generic;

using Bridge.Contract;
using Bridge.Translator.Tests.Helpers;


using NUnit.Framework;
using NSubstitute;

namespace Bridge.Translator.Tests
{
    [TestFixture]
    class SourceMapTests
    {
        [Test]
        public void SourceMapBuilder_BuildWorks()
        {
            var builder = new SourceMapBuilder(
                "test.map",
                @"C:\AC\ACD",
                @"C:\A\AB");

            builder.AddMapping(1, 11, new SourceLocation(@"C:\AC\ACD\sourceUrl1", "sourceName1", 10, 10));
            builder.AddMapping(2, 21, new SourceLocation(@"C:\AC\ACD\X\sourceUrl2", "sourceName2", 20, 20));
            builder.AddMapping(3, 31, new SourceLocation(@"C:\AC\ACD\Y\Z\sourceUrl3", "sourceName3", 30, 30));
            builder.AddMapping(4, 41, new SourceLocation(@"C:\B\sourceUrl4", "sourceName4", 40, 40));
            builder.AddMapping(5, 51, new SourceLocation(@"C:\A\AB\ABE\sourceUrl5", "sourceName5", 50, 50));
            builder.AddMapping(6, 61, new SourceLocation(@"C:\A\AB\AB F\sourceUrl6", "sourceName6", 60, 60));

            var map = builder.Build(
                new[]
                {
                    "1", "2", "3", "4", "5", "6"
                });

            var expectedMap = StringHelper.CombineLinesNL
                (
                "{",
                "  \"version\": 3,",
                "  \"file\": \"test.map\",",
                "  \"sourceRoot\": \"C:\\AC\\ACD\",",
                "  \"sources\": [\"../../AC/ACD/sourceUrl1\",\"../../AC/ACD/X/sourceUrl2\",\"../../AC/ACD/Y/Z/sourceUrl3\",\"../../B/sourceUrl4\",\"ABE/sourceUrl5\",\"AB F/sourceUrl6\"],",
                "  \"names\": [\"sourceName1\",\"sourceName2\",\"sourceName3\",\"sourceName4\",\"sourceName5\",\"sourceName6\"],",
                "  \"mappings\": \";WAUUA;qBCUUC;+BCUUC;yCCUUC;mDCUUC;6DCUUC\",",
                "  \"sourcesContent\": [\"1\",\"2\",\"3\",\"4\",\"5\",\"6\"]",
                "}"
                );

            expectedMap = TextHelper.NormilizeEols(expectedMap, UnicodeNewline.LF);

            Assert.AreEqual(expectedMap, map);
        }
    }
}
