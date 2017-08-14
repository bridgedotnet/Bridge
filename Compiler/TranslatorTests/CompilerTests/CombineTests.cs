using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Bridge.Contract;
using Bridge.Translator;

using NUnit.Framework;
using NSubstitute;

namespace Bridge.Translator.Tests.CompilerTests
{
    [TestFixture]
    class CombineTests
    {
        [Test]
        public void CombineTests_CheckTranslatorCombineMinifiedOnly_N3039()
        {
            var translator = new Translator("", "");

            translator.Log = Substitute.For<ILogger>();

            translator.AssemblyInfo = new AssemblyInfo()
            {
                CombineLocales = false,
                CombineScripts = true,
                OutputFormatting = JavaScriptOutputType.Minified,
                FileName = "test.js"
            };

            translator.Outputs.References.Add(new TranslatorOutputItem()
            {
                OutputType = TranslatorOutputType.JavaScript,
                OutputKind = TranslatorOutputKind.Reference,
                Name = "Reference1.js",
                Content = "// Reference1.js \nvar reference1 = 1;"
            });

            translator.Minify();
            translator.Combine("test");
        }
    }
}
