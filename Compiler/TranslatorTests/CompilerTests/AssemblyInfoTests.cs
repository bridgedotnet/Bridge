using Bridge.Contract;
using Bridge.Translator.Utils;
using System;
using System.Collections.Generic;
using NUnit.Framework;
using Newtonsoft.Json;


namespace Bridge.Translator.Tests
{
    [TestFixture]
    internal class AssemblyInfoTests
    {
        [Test]
        public void AssemblyInfoDefault()
        {
            var config = new AssemblyInfo();

            Assert.NotNull(config.Dependencies, "Dependencies");
            Assert.NotNull(config.DefineConstants, "DefineConstants");
            Assert.NotNull(config.Logging, "Logging");
            Assert.NotNull(config.Reflection, "Reflection");
            Assert.NotNull(config.Assembly, "Assembly");
            Assert.NotNull(config.Resources, "Resources");
            Assert.NotNull(config.Loader, "Loader");

            Assert.AreEqual("$(OutDir)/bridge/", config.Output, "Output");

            // #2476 Assert.False(config.PreserveMemberCase, "PreserveMemberCase");

            Assert.Null(config.FileName, "FileName");
            Assert.AreEqual(OutputBy.Project, config.OutputBy, "OutputBy");
            Assert.AreEqual(FileNameCaseConvert.CamelCase, config.FileNameCasing, "FileNameCasing");
            Assert.AreEqual(JavaScriptOutputType.Both, config.OutputFormatting, "OutputFormatting");
            Assert.AreEqual(0, config.StartIndexInName, "StartIndexInName");
            Assert.Null(config.BeforeBuild, "BeforeBuild");
            Assert.Null(config.AfterBuild, "AfterBuild");
            Assert.False(config.AutoPropertyToField, "AutoPropertyToField");
            Assert.Null(config.PluginsPath, "PluginsPath");
            Assert.False(config.GenerateTypeScript, "GenerateTypeScript");
            Assert.AreEqual(DocumentationMode.Basic, config.GenerateDocumentation, "GenerateDocumentation");
            Assert.Null(config.BuildArguments, "BuildArguments");
            Assert.False(config.CleanOutputFolderBeforeBuild, "CleanOutputFolderBeforeBuild");
            Assert.Null(config.CleanOutputFolderBeforeBuildPattern, "CleanOutputFolderBeforeBuildPattern");
            Assert.Null(config.Configuration, "Configuration");
            Assert.Null(config.Locales, "Locales");
            Assert.Null(config.LocalesOutput, "LocalesOutput");
            Assert.Null(config.LocalesFileName, "LocalesFileName");
            Assert.False(config.CombineLocales, "CombineLocales");
            Assert.False(config.CombineScripts, "CombineScripts");
            Assert.False(config.UseTypedArrays, "UseTypedArrays");
            Assert.False(config.IgnoreCast, "IgnoreCast");
            Assert.Null(config.OverflowMode, "OverflowMode");
            Assert.Null(config.NoLoggerTimeStamps, "NoLoggerTimeStamps");
            Assert.False(config.StrictNullChecks, "StrictNullChecks");
            Assert.AreEqual(NamedFunctionMode.None, config.NamedFunctions, "NamedFunctions");
            Assert.False(config.SourceMap.Enabled, "SourceMap.Enabled");
            Assert.Null(config.SourceMap.Eol, "SourceMap.Eol");
        }

        [Test]
        public void AssemblyInfoJsonSourceMapSerialization()
        {
            AssertJsonSerialization(new SourceMapInfo(), "{\"SourceMap\":null}", "1");

            AssertJsonSerialization(
                new SourceMapInfo { SourceMap = new SourceMapConfig() },
                "{\"SourceMap\":false}",
                "2");

            AssertJsonSerialization(
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = true } },
                "{\"SourceMap\":true}",
                "3");

            AssertJsonSerialization(
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = false, Eol = UnicodeNewline.CRLF } },
                "{\"SourceMap\":{\"Enabled\":false,\"Eol\":3338}}",
                "4");

            AssertJsonSerialization(
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = true, Eol = UnicodeNewline.LF } },
                "{\"SourceMap\":{\"Enabled\":true,\"Eol\":10}}",
                "4");
        }

        [Test]
        public void AssemblyInfoJsonSourceMapDeserialization()
        {
            AssertJsonDeserialization("{\"SourceMap\":null}", new SourceMapInfo(), "1");

            AssertJsonDeserialization(
                "{\"SourceMap\":{\"enabled\":false,\"eol\":null}}",
                new SourceMapInfo { SourceMap = new SourceMapConfig() },
                "2");

            AssertJsonDeserialization(
                "{\"SourceMap\":{\"enabled\":true,\"eol\":null}}",
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = true } },
                "3");

            AssertJsonDeserialization(
                "{\"SourceMap\":{\"enabled\":false,\"eol\":\"crlf\"}}",
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = false, Eol = UnicodeNewline.CRLF } },
                "4");

            AssertJsonDeserialization(
                "{\"SourceMap\":{\"Enabled\":true,\"Eol\":\"Lf\"}}",
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = true, Eol = UnicodeNewline.LF } },
                "4");

            AssertJsonDeserialization(
                "{\"SourceMap\":true}",
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = true } },
                "5");

            AssertJsonDeserialization(
                "{\"SourceMap\":false}",
                new SourceMapInfo { SourceMap = new SourceMapConfig() { Enabled = false } },
                "6");
        }

        private static void AssertJsonSerialization(object value, string expected, string message = null)
        {
            var actual = JsonConvert.SerializeObject(value, Formatting.None);
            Assert.AreEqual(expected, actual, message);
        }

        private static void AssertJsonDeserialization(string json, object expected, string message = null)
        {
            var actual = JsonConvert.DeserializeObject(json, expected.GetType());
            Assert.AreEqual(expected, actual, message);

            //var expectedJson = JsonConvert.SerializeObject(expected, Formatting.None);
            //Assert.AreEqual(expectedJson, json, message + " by json");
        }

        class SourceMapInfo
        {
            [Newtonsoft.Json.JsonConverter(typeof(SourceMapConfigConverter))]
            public SourceMapConfig SourceMap
            {
                get; set;
            }

            public override bool Equals(object obj)
            {
                if (obj == null)
                {
                    return false;
                }

                var smi = obj as SourceMapInfo;

                if (smi == null)
                {
                    return false;
                }

                var sm1 = this.SourceMap;
                var sm2 = smi.SourceMap;

                if (sm1 == null && sm2 == null)
                {
                    return true;
                }

                if (sm1 == null || sm2 == null)
                {
                    return false;
                }

                return sm1.Enabled == sm2.Enabled
                    && sm1.Eol == sm2.Eol;
            }

            public override int GetHashCode()
            {
                return base.GetHashCode();
            }
        }
    }
}
