using Bridge.Contract;
using Bridge.Translator.Utils;
using System;
using System.Collections.Generic;
using NUnit.Framework;
using NSubstitute;


namespace Bridge.Translator.Tests
{
    [TestFixture]
    internal class AssemblyConfigHelperTests
    {
        public class ApplyTokensTests
        {
            public AssemblyConfigHelper Helper
            {
                get; set;
            }

            [OneTimeSetUp]
            public void TestFixtureSetUp()
            {
                var logger = Substitute.For<ILogger>();
                this.Helper = new AssemblyConfigHelper(logger);
            }

            [Test]
            public void AssemblyConfigHelperApplyTokensFull()
            {
                AssemblyInfo config = CreateAssemblyInfo();

                ProjectProperties properties = CreateProjectProperties();

                Helper.ApplyTokens(config, properties);

                Assert.AreEqual("TestAssemblyName", config.FileName);
                Assert.AreEqual("TestOutDir", config.Output);
                Assert.AreEqual("true", config.BeforeBuild);
                Assert.AreEqual("TestConfiguration", config.AfterBuild);
                Assert.AreEqual("TestDefineConstants", config.PluginsPath);
                Assert.AreEqual("TestOutDir", config.CleanOutputFolderBeforeBuildPattern);
                Assert.AreEqual("TestOutputPath", config.Locales);
                Assert.AreEqual("TestOutputType", config.LocalesOutput);
                Assert.AreEqual("TestPlatform", config.LocalesFileName);

                Assert.AreEqual("TestAssemblyName", config.Logging.FileName);
                Assert.AreEqual("TestOutputType", config.Logging.Folder);

                Assert.AreEqual("TestRootNamespace", config.Reflection.Filter);
                Assert.AreEqual("TestOutputType", config.Reflection.Output);

                Assert.AreEqual("TestAssemblyName", config.Resources.Items[0].Header);
                Assert.AreEqual("TestConfiguration", config.Resources.Items[0].Name);
                Assert.AreEqual("TestOutDir", config.Resources.Items[0].Remark);
                Assert.AreEqual("TestRootNamespace", config.Resources.Items[0].Files[0]);
                Assert.AreEqual("TestOutputType", config.Resources.Items[0].Files[1]);

                Assert.AreEqual("TestPlatform", config.Resources.Items[1].Header);
                Assert.AreEqual("TestOutputType", config.Resources.Items[1].Name);
                Assert.AreEqual("TestConfiguration", config.Resources.Items[1].Remark);
                Assert.AreEqual("TestAssemblyName", config.Resources.Items[1].Files[0]);
                Assert.AreEqual("TestOutputPath", config.Resources.Items[1].Files[1]);
            }

            [Test]
            public void AssemblyConfigHelperApplyTokensPartial()
            {
                AssemblyInfo config = CreateAssemblyInfo(false, false, false);

                ProjectProperties properties = CreateProjectProperties();

                Helper.ApplyTokens(config, properties);

                Assert.Pass();
            }

            [Test]
            public void AssemblyConfigHelperApplyTokenShouldFail()
            {
                Assert.Throws<ArgumentNullException>(() => { Helper.ApplyTokens(null, new ProjectProperties()); });
                Assert.Throws<ArgumentNullException>(() => { Helper.ApplyTokens(new AssemblyInfo(), null); });
            }

            private static ProjectProperties CreateProjectProperties()
            {
                return new ProjectProperties()
                {
                    AssemblyName = "TestAssemblyName",
                    CheckForOverflowUnderflow = true,
                    Configuration = "TestConfiguration",
                    DefineConstants = "TestDefineConstants",
                    OutDir = "TestOutDir",
                    OutputPath = "TestOutputPath",
                    OutputType = "TestOutputType",
                    Platform = "TestPlatform",
                    RootNamespace = "TestRootNamespace"
                };
            }

            private static AssemblyInfo CreateAssemblyInfo(bool addReflection = true, bool addResources = true, bool addLogging = true)
            {
                var r =  new AssemblyInfo()
                {
                    FileName = "$(AssemblyName)",
                    Output = "$(OutDir)",
                    BeforeBuild = "$(CheckForOverflowUnderflow)",
                    AfterBuild = "$(Configuration)",
                    PluginsPath = "$(DefineConstants)",
                    CleanOutputFolderBeforeBuildPattern = "$(OutDir)",
                    Locales = "$(OutputPath)",
                    LocalesOutput = "$(OutputType)",
                    LocalesFileName = "$(Platform)",
                };

                if (addLogging)
                {
                    r.Logging = new LoggingOptions()
                    {
                        FileName = "$(AssemblyName)",
                        Folder = "$(OutputType)"
                    };
                }

                if (addReflection)
                {
                    r.Reflection = new ReflectionConfig()
                    {
                        Filter = "$(RootNamespace)",
                        Output = "$(OutputType)"
                    };
                }

                if (addResources)
                {
                    r.Resources = new ResourceConfig()
                    {
                        Items = new ResourceConfigItem[]
                        {
                            new ResourceConfigItem()
                            {
                                Header = "$(AssemblyName)",
                                Name = "$(Configuration)",
                                Remark = "$(OutDir)",
                                Files = new string[] { "$(RootNamespace)", "$(OutputType)", }
                            },
                            new ResourceConfigItem()
                            {
                                Header = "$(Platform)",
                                Name = "$(OutputType)",
                                Remark = "$(Configuration)",
                                Files = new string[] { "$(AssemblyName)", "$(OutputPath)", }
                            }
                        }
                    };
                }

                return r;
            }
        }
    }
}
