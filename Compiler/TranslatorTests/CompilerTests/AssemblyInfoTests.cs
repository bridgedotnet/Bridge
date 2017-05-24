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
    }
}
