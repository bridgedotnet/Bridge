using Bridge.Contract;
using Bridge.Builder;
using System;
using System.Collections.Generic;
using System.IO;
using NUnit.Framework;
using NSubstitute;


namespace Bridge.Translator.Tests
{
    [TestFixture]
    internal class BuilderTests
    {
        public class ProgramTests
        {
            [Test]
            public void GetBridgeOptionsFromCommandLineTests()
            {
                TestArguments("#1 All short",
                    "-p \"myproject.csproj\" -b \"Bridge.dll\" -o \"Output Folder\" -c \"Release\" -P \"AnyCPU\" -D \"DEF1;DEF2\" -r -nocore -s \"mysources\" -f \"myfolder\" -R -notimestamp",
                    "Configuration:Release|Platform:AnyCPU|DefineConstants:DEF1;DEF2",
                    new BridgeOptions()
                    {
                        BridgeLocation = "Bridge.dll",
                        DefaultFileName = "Output Folder",
                        ExtractCore = false,
                        Folder = Path.Combine(Environment.CurrentDirectory, "myfolder"),
                        Name = "",
                        NoTimeStamp = true,
                        OutputLocation = "Output Folder",
                        ProjectLocation = "myproject.csproj",
                        Rebuild = true,
                        Recursive = true,
                        Sources = "mysources"
                    });

                TestArguments("#2 All long",
                    "--project \"myproject.csproj\" --bridge \"Bridge.dll\" --output \"Output Folder\" --configuration \"Release\" --platform \"AnyCPU\" --define \"DEF1;DEF2\" --rebuild --nocore --source \"mysources\" --folder \"myfolder\" --recursive --notimestamp",
                    "Configuration:Release|Platform:AnyCPU|DefineConstants:DEF1;DEF2",
                    new BridgeOptions()
                    {
                        BridgeLocation = "Bridge.dll",
                        DefaultFileName = "Output Folder",
                        ExtractCore = false,
                        Folder = Path.Combine(Environment.CurrentDirectory, "myfolder"),
                        Name = "",
                        NoTimeStamp = true,
                        OutputLocation = "Output Folder",
                        ProjectLocation = "myproject.csproj",
                        Rebuild = true,
                        Recursive = true,
                        Sources = "mysources"
                    });

                TestArguments("#3 Usual",
                    "-p \"folder a\\folderb\\myproject.csproj\" -b \"folder\\Bridge.dll\" -cfg \"Release\" --platform \"AnyCPU\"",
                    "Configuration:Release|Platform:AnyCPU",
                    new BridgeOptions()
                    {
                        BridgeLocation = "folder\\Bridge.dll",
                        DefaultFileName = "myproject",
                        ExtractCore = true,
                        Folder = Environment.CurrentDirectory,
                        Name = "",
                        OutputLocation = "myproject",
                        ProjectLocation = "folder a\\folderb\\myproject.csproj"
                    });

                TestArguments("#4 Lib",
                    "-lib \"folder a\\folderb\" -b \"folder\\Bridge.dll\" -cfg \"Release\" --platform \"AnyCPU\"",
                    "Configuration:Release|Platform:AnyCPU",
                    new BridgeOptions()
                    {
                        BridgeLocation = "folder\\Bridge.dll",
                        DefaultFileName = "Bridge",
                        ExtractCore = true,
                        Folder = Environment.CurrentDirectory,
                        Name = "",
                        OutputLocation = Environment.CurrentDirectory,
                        Lib = "folder a\\folderb"
                    });

                TestArguments("#5 Priority for project settings",
                    "-p \"somefolder\\project.csproj\" -c \"Release\" -P \"AnyCPU\" --define \"DEF1;DEF2\" -S \"Configuration:Debug,Platform:Some,DefineConstants:SOME1;SOME2\"",
                    "Configuration:Release|Platform:AnyCPU|DefineConstants:DEF1;DEF2",
                    new BridgeOptions()
                    {
                        DefaultFileName = "project",
                        ExtractCore = true,
                        Name = "",
                        OutputLocation = "project",
                        ProjectLocation = "somefolder\\project.csproj"
                    });

                TestArguments("#6 All project settings",
                    "-p \"somefolder\\project.csproj\" --settings \"AssemblyName:TestAssembly,CheckForOverflowUnderflow:true, Configuration:Release,Platform:AnyCPU,DefineConstants:DEF1;DEF2,OutputPath:TestOutputPath,OutDir:TestOutDir,OutputType:TestOutputType,RootNamespace:TestRootNamespace\"",
                    "AssemblyName:TestAssembly|CheckForOverflowUnderflow:true|Configuration:Release|Platform:AnyCPU|DefineConstants:DEF1;DEF2|OutputPath:TestOutputPath|OutDir:TestOutDir|OutputType:TestOutputType|RootNamespace:TestRootNamespace",
                    new BridgeOptions()
                    {
                        DefaultFileName = "project",
                        ExtractCore = true,
                        Name = "",
                        OutputLocation = "project",
                        ProjectLocation = "somefolder\\project.csproj"
                    });

                TestArguments("#7 Sophisticated project settings",
                    "-p \"somefolder\\project.csproj\" --settings \"AssemblyName:Test:As:sembly, :Release, Platform:AnyCPU,AssemblyName:TestAssemblyName,CheckForOverflowUnderflow:FalSE\"",
                    "AssemblyName:Test:As:sembly|Platform:AnyCPU|CheckForOverflowUnderflow:False",
                    new BridgeOptions()
                    {
                        DefaultFileName = "project",
                        ExtractCore = true,
                        Name = "",
                        OutputLocation = "project",
                        ProjectLocation = "somefolder\\project.csproj"
                    });
            }

            [Test]
            public void GetBridgeOptionsFromCommandLineTests_ShouldNotParse()
            {
                TestIncorrectArguments("#1 Lib and Project", "-lib \"lib mode\" -p \"project.csproj\"");
                TestIncorrectArguments("#2 Project and Lib", "-p \"project.csproj\" -lib \"lib mode\"");
                TestIncorrectArguments("#3 Unknown parameter", "-p \"project.csproj\" -rewrasd");
                TestIncorrectArguments("#4 No parameters", "");
                TestIncorrectArguments("#5 No project nor lib", "-cfg \"Release\"");
            }

            private static void TestArguments(string message, string cmd, string projectProperties = null, BridgeOptions bridgeOptions = null)
            {
                var arguments = GetArguments(cmd);
                var logger = Substitute.For<ILogger>();

                var actual = Program.GetBridgeOptionsFromCommandLine(arguments, logger);

                if (bridgeOptions == null)
                {
                    bridgeOptions = new BridgeOptions();
                }

                if (bridgeOptions.ProjectProperties == null)
                {
                    bridgeOptions.ProjectProperties = GetProperties(projectProperties);
                }

                Assert.AreEqual(bridgeOptions.ToString(), actual.ToString(), message);
            }

            private static void TestIncorrectArguments(string message, string cmd)
            {
                var arguments = GetArguments(cmd);
                var logger = Substitute.For<ILogger>();

                var actual = Program.GetBridgeOptionsFromCommandLine(arguments, logger);

                Assert.IsNull(actual, message);
            }

            private static string[] GetArguments(string arguments)
            {
                if (string.IsNullOrEmpty(arguments))
                {
                    return new string[0];
                }

                var r = new List<string>();

                bool inQuoteArea = false;
                int begin = 0;
                for (int i = 0; i < arguments.Length; i++)
                {
                    var c = arguments[i];

                    if ((c == ' ' && !inQuoteArea) || (i == arguments.Length - 1))
                    {
                        var value = arguments.Substring(begin, i - begin + 1).Trim();

                        if (value.Length > 1 && value[0] == '"' && value[value.Length - 1] == '"')
                        {
                            value = value.Trim('"');
                        }

                        r.Add(value);
                        begin = i + 1;

                        continue;
                    }

                    if (c == '"')
                    {
                        inQuoteArea = !inQuoteArea;
                    }
                }

                return r.ToArray();
            }

            private static ProjectProperties GetProperties(string properties)
            {
                var r = new ProjectProperties();

                if (properties == null)
                {
                    return r;
                }

                var parts = properties.Split(new char[] { '|' }, StringSplitOptions.RemoveEmptyEntries);

                var d = new Dictionary<string, string>();

                foreach (var part in parts)
                {
                    var pair = part.Split(new char[] { ':' }, 2);
                    d.Add(pair[0], pair[1]);
                }

                r.SetValues(d);

                return r;
            }


        }
    }
}
