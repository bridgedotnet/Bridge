using System;
using System.IO;
using System.Linq;
using Bridge.Contract;
using NSubstitute;
using NUnit.Framework;

namespace Bridge.Translator.Tests.CompilerTests
{
    [TestFixture]
    public class MsBuildProjectTests
    {

        [TestCase]
        public void TestReadOldProjectFormat()
        {
            var testProject = @"<?xml version=""1.0"" encoding=""utf-8""?>
            <Project ToolsVersion=""12.0"" DefaultTargets=""Build"" xmlns=""http://schemas.microsoft.com/developer/msbuild/2003"">
              <Import Project=""$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props"" Condition=""Exists('$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props')"" />
              <PropertyGroup>
                <ProjectGuid>{16777B9C-A3B6-4E0B-B5A2-AA933A2F54D3}</ProjectGuid>
                <RootNamespace>TestProject</RootNamespace>
                <AssemblyName>TestProject</AssemblyName>
              </PropertyGroup>
              <PropertyGroup>
                <Configuration Condition="" '$(Configuration)' == '' "">Debug</Configuration>
                <Platform Condition="" '$(Platform)' == '' "">AnyCPU</Platform>
                <OutputType>Library</OutputType>
                <AppDesignerFolder>Properties</AppDesignerFolder>
                <TargetFrameworkVersion>v4.0</TargetFrameworkVersion>
                <FileAlignment>512</FileAlignment>
                <RestorePackages>true</RestorePackages>
                <NoStdLib>True</NoStdLib>
                <AddAdditionalExplicitAssemblyReferences>false</AddAdditionalExplicitAssemblyReferences>
                <AdditionalExplicitAssemblyReferences />
                <WarningLevel>0</WarningLevel>
                <NoWarn>1591, 0219, 0414, 0618, 0626, 0649, 0693, 0824, 0660, 0661, 7035</NoWarn>
              </PropertyGroup>
              <PropertyGroup Condition="" '$(Configuration)|$(Platform)' == 'Debug|AnyCPU' "">
                <OutputPath>bin\Debug\</OutputPath>
              </PropertyGroup>
              <PropertyGroup Condition="" '$(Configuration)|$(Platform)' == 'Release|AnyCPU' "">
                <OutputPath>bin\Release\</OutputPath>
              </PropertyGroup>
              <PropertyGroup Condition="" '$(Configuration)|$(Platform)' == 'Debug|AnyCPU' "">
                <DebugSymbols>true</DebugSymbols>
                <DebugType>full</DebugType>
                <Optimize>false</Optimize>
                <DefineConstants>DEBUG;TRACE</DefineConstants>
                <ErrorReport>prompt</ErrorReport>
                <CheckForOverflowUnderflow>false</CheckForOverflowUnderflow>
              </PropertyGroup>
              <PropertyGroup Condition="" '$(Configuration)|$(Platform)' == 'Release|AnyCPU' "">
                <DebugType>pdbonly</DebugType>
                <Optimize>true</Optimize>
                <DefineConstants>TRACE</DefineConstants>
                <ErrorReport>prompt</ErrorReport>
                <CheckForOverflowUnderflow>true</CheckForOverflowUnderflow>
              </PropertyGroup>
              <ItemGroup>
                <Compile Include=""Properties\AssemblyInfo.cs"" />
                <Compile Include=""Test.cs"" />
              </ItemGroup>
              <ItemGroup>
                <None Include=""Bridge\bridge.json"" />
              </ItemGroup>
              <ItemGroup>
                <Reference Include=""Bridge"">
                  <SpecificVersion>False</SpecificVersion>
                  <HintPath>..\..\..\..\Bridge\bin\$(Configuration)\Bridge.dll</HintPath>
                </Reference>
                <Reference Include=""Bridge.Html5"">
                  <SpecificVersion>False</SpecificVersion>
                  <HintPath>..\..\..\..\Html5\bin\$(Configuration)\Bridge.Html5.dll</HintPath>
                </Reference>
              </ItemGroup>
              <ItemGroup>
                <Folder Include=""Bridge\build\"" />
                <Folder Include=""Bridge\output\"" />
              </ItemGroup>
              <!-- Bridge Compiler -->
              <Import Project=""$(MSBuildToolsPath)\Microsoft.CSharp.targets"" />
              <PropertyGroup Condition=""$(UseBridgeTask) != true"">
                <PostBuildEvent Condition=""$(OS) != Unix"">""$(ProjectDir)..\..\..\Builder\$(OutDir)bridge.exe"" -p ""$(ProjectPath)"" -b ""$(ProjectDir)$(OutDir)Bridge.dll"" -cfg ""$(Configuration)"" --platform ""$(Platform)""</PostBuildEvent>
                <PostBuildEvent Condition=""$(OS) == Unix"">mono ""$(ProjectDir)../../../Builder/$(OutDir)bridge.exe"" -p ""$(ProjectDir)/$(MSBuildProjectFile)"" -b ""$(ProjectDir)$(OutDir)Bridge.dll""  -cfg ""$(Configuration)"" --platform ""$(Platform)""</PostBuildEvent>
              </PropertyGroup>
              <UsingTask Condition=""$(UseBridgeTask) == true"" TaskName=""GenerateScript"" AssemblyFile=""$(ProjectDir)..\..\..\Build\$(OutDir)Bridge.Build.dll"" />
              <Target Condition=""$(UseBridgeTask) == true"" Name=""AfterBuild"">
                <Message Text=""Using Bridge Task"" Importance=""high"" />
                <GenerateScript DefineConstants=""$(DefineConstants)"" OutputPath=""$(OutputPath)"" Configuration=""$(Configuration)"" Assembly=""@(IntermediateAssembly)"" AssembliesPath=""$(OutputPath)"" ProjectPath=""$(MSBuildProjectFullPath)"" />
              </Target>
            </Project>";
            var tmpDir = Path.Combine(Path.GetTempPath(), Guid.NewGuid().ToString());
            var tmpFile = Path.Combine(tmpDir, "Test.csproj");
            try
            {
                Directory.CreateDirectory(tmpDir);
                File.WriteAllText(tmpFile, testProject);

                var translator = new Translator(tmpFile, null);
                translator.Log = Substitute.For<ILogger>();
                translator.AssemblyInfo = new AssemblyInfo
                {
                    CombineLocales = false,
                    CombineScripts = true,
                    OutputFormatting = JavaScriptOutputType.Minified,
                    FileName = "test.js"
                };
                translator.ProjectProperties = new ProjectProperties()
                {
                    Configuration = "Release",
                    Platform = "AnyCPU",
                };

                translator.EnsureProjectProperties();

                Assert.AreEqual(OverflowMode.Checked, translator.OverflowMode);
                Assert.AreEqual("TestProject", translator.ProjectProperties.RootNamespace);
                Assert.AreEqual("TestProject", translator.ProjectProperties.AssemblyName);
                Assert.AreEqual(Path.Combine(tmpDir, "bin", "Release", "TestProject.dll"), translator.AssemblyLocation);

                var files = translator.SourceFiles.OrderBy(s => s).ToArray();
                Assert.AreEqual("Properties\\AssemblyInfo.cs", files[0]);
                Assert.AreEqual("Test.cs", files[1]);

                var constants = translator.DefineConstants.OrderBy(c => c).ToArray();
                Assert.AreEqual("BRIDGE", constants.First(ct => ct == "BRIDGE"));
                Assert.AreEqual("TRACE", constants.First(ct => ct == "TRACE"));
            }
            finally
            {
                Directory.Delete(tmpDir, true);
            }
        }

        [TestCase]
        public void TestReadNewProjectFormat()
        {
            var testProject = @"
            <Project Sdk=""Microsoft.NET.Sdk"">
              <PropertyGroup>
                <RootNamespace>TestProject</RootNamespace>
                <AssemblyName>TestProject</AssemblyName>
                <TargetFramework>net40</TargetFramework>

                <NoStdLib>true</NoStdLib>
                <DisableImplicitFrameworkReferences>true</DisableImplicitFrameworkReferences>
                <AddAdditionalExplicitAssemblyReferences>false</AddAdditionalExplicitAssemblyReferences>
                <AdditionalExplicitAssemblyReferences />

              </PropertyGroup>

              <PropertyGroup Condition="" '$(Configuration)|$(Platform)' == 'Release|AnyCPU' "">
                <CheckForOverflowUnderflow>true</CheckForOverflowUnderflow>
              </PropertyGroup>

              <ItemGroup>
                <!-- This is just an example include that does not necessarily needs to exist at all. -->
                <!-- The test this file is subject to is not building an actual Bridge app, but just having Bridge.Translator load the project file. -->
                <Reference Include=""Bridge"">
                  <SpecificVersion>False</SpecificVersion>
                  <HintPath>$(SolutionDir)\Bridge\Bridge.dll</HintPath>
                </Reference>
              </ItemGroup>

              <ItemGroup>
                <Folder Include=""Properties\"" />
              </ItemGroup>

            </Project>";
            var tmpDir = Path.Combine(Path.GetTempPath(), Guid.NewGuid().ToString());
            var tmpFile = Path.Combine(tmpDir, "Test.csproj");
            try
            {
                Directory.CreateDirectory(tmpDir);
                File.WriteAllText(tmpFile, testProject);
                File.WriteAllText(Path.Combine(tmpDir, "test1.cs"), "using System;");
                File.WriteAllText(Path.Combine(tmpDir, "test2.cs"), "using System;");

                var translator = new Translator(tmpFile, null);
                translator.Log = Substitute.For<ILogger>();
                translator.AssemblyInfo = new AssemblyInfo
                {
                    CombineLocales = false,
                    CombineScripts = true,
                    OutputFormatting = JavaScriptOutputType.Minified,
                    FileName = "test.js"
                };
                translator.ProjectProperties = new ProjectProperties()
                {
                    Configuration = "Release",
                    Platform = "AnyCPU",
                };

                translator.EnsureProjectProperties();

                Assert.AreEqual(OverflowMode.Checked, translator.OverflowMode);
                Assert.AreEqual("TestProject", translator.ProjectProperties.RootNamespace);
                Assert.AreEqual("TestProject", translator.ProjectProperties.AssemblyName);
                Assert.AreEqual(Path.Combine(tmpDir, "bin", "Release", "net40", "TestProject.dll"), translator.AssemblyLocation);

                var files = translator.SourceFiles.OrderBy(s => s).ToArray();
                Assert.AreEqual("test1.cs", files[0]);
                Assert.AreEqual("test2.cs", files[1]);

                var constants = translator.DefineConstants.OrderBy(c => c).ToArray();
                Assert.AreEqual("BRIDGE", constants.First(ct => ct == "BRIDGE"));
                Assert.AreEqual("NET40", constants.First(ct => ct == "NET40"));
                Assert.AreEqual("RELEASE", constants.First(ct => ct == "RELEASE"));
                Assert.AreEqual("TRACE", constants.First(ct => ct == "TRACE"));
            }
            finally
            {
                Directory.Delete(tmpDir, true);
            }
        }
    }
}
