using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_ENVIRONMENT)]
    [TestFixture(TestNameFormat = "Environment - {0}")]
    public class EnvironmentTests
    {
        #region Helpers

        private static dynamic Variables
        {
            [Template("System.Environment.Variables")]
            get;
        }

        private static void AssertVariables()
        {
            var variables = Variables as Dictionary<string, string>;

            Assert.NotNull(variables, "Get EnvironmentVariable via internal code as a preparation step for the test");
            variables.Clear();
        }

        private static Dictionary<string, string> SetupVariables()
        {
            var variables = Variables as Dictionary<string, string>;
            variables.Add("variable1", "value1");
            variables.Add("variable2", "value2");

            return variables;
        }

        #endregion Helpers

        [Test]
        public void CommandLineNotEmpty()
        {
            Assert.NotNull(Environment.CommandLine);
            Assert.True(Environment.CommandLine != string.Empty);
        }

        [Test]
        public void CurrentDirectoryNotEmpty()
        {
            Assert.NotNull(Environment.CurrentDirectory);
            Assert.True(Environment.CurrentDirectory != string.Empty);
        }

        [Test]
        public void CurrentManagedThreadIdZero()
        {
            Assert.AreEqual(0, Environment.CurrentManagedThreadId);
        }

        [Test]
        public void ExitCodeWorks()
        {
            Assert.NotNull(Environment.ExitCode);
            Assert.AreEqual(0, Environment.ExitCode);

            Environment.ExitCode = 1;
            Assert.AreEqual(1, Environment.ExitCode);
        }

        [Test]
        public void HasShutdownStartedFalse()
        {
            Assert.NotNull(Environment.HasShutdownStarted);
            Assert.False(Environment.HasShutdownStarted);
        }

        [Test]
        public void Is64BitOperatingSystemNotNull()
        {
            Assert.NotNull(Environment.Is64BitOperatingSystem);
        }

        [Test]
        public void Is64BitProcessNotNull()
        {
            Assert.NotNull(Environment.Is64BitProcess);
        }

        [Test]
        public void MachineNameEmpty()
        {
            Assert.NotNull(Environment.MachineName);
            Assert.AreEqual("", Environment.MachineName);
        }

        [Test]
        public void NewLineIsAStringContainingOnlyTheNewLineChar()
        {
            Assert.AreEqual("\n", Environment.NewLine);
        }

        [Test]
        public void OSVersionNull()
        {
            Assert.Null(Environment.OSVersion);
        }

        [Test]
        public void ProcessorCountMoreThanZero()
        {
            Assert.NotNull(Environment.ProcessorCount);
            Assert.True(Environment.ProcessorCount > 0);
        }

        [Test]
        public void StackTraceNotEmpty()
        {
            Assert.NotNull(Environment.StackTrace);
            Assert.True(Environment.StackTrace.Length > -1);
        }

        [Test]
        public void SystemDirectoryEmpty()
        {
            Assert.AreEqual("", Environment.SystemDirectory);
        }

        [Test]
        public void SystemPageSizeEqualsOne()
        {
            Assert.AreEqual(1, Environment.SystemPageSize);
        }

        [Test]
        public void TickCountNotEmpty()
        {
            Assert.NotNull(Environment.TickCount);
            Assert.True(Environment.TickCount != 0);
            Assert.True((Environment.TickCount > 0) || (Environment.TickCount < 0));
        }

        [Test]
        public void UserDomainNameEmpty()
        {
            Assert.AreEqual("", Environment.UserDomainName);
        }

        [Test]
        public void UserInteractiveTrue()
        {
            Assert.NotNull(Environment.UserInteractive);
            Assert.True(Environment.UserInteractive);
        }

        [Test]
        public void UserNameEmpty()
        {
            Assert.AreEqual("", Environment.UserName);
        }

        [Test]
        public void VersionWorks()
        {
            Assert.NotNull(Environment.Version);
            Assert.True(Environment.Version.ToString().Length > 0, Environment.Version.ToString());
        }

        [Test]
        public void WorkingSetZero()
        {
            Assert.NotNull(Environment.WorkingSet);
            Assert.AreEqual("0", Environment.WorkingSet.ToString());
            Assert.AreEqual(0L, Environment.WorkingSet);
        }

        [Test]
        public void ExitSetsExitCode()
        {
            Environment.Exit(77);

            Assert.AreEqual(77, Environment.ExitCode);
        }

        [Test]
        public void ExpandEnvironmentVariablesWorks()
        {
            Assert.Throws<ArgumentNullException>(() => { Environment.ExpandEnvironmentVariables(null); });

            AssertVariables();

            SetupVariables();

            var query = "First %variable1% Second: %variable2% Ignored %variable1";
            var r = Environment.ExpandEnvironmentVariables(query);

            Assert.AreEqual("First value1 Second: value2 Ignored %variable1", r);
        }

        [Test]
        public void FailFastWorks()
        {
            try
            {
                Environment.FailFast("Some message");
                Assert.Fail("Should have thrown 1");
            }
            catch(Exception ex)
            {
                Assert.True(ex.Message == "Some message", "Message correct");
            }

            try
            {
                Environment.FailFast("1", new ArgumentException("2"));
                Assert.Fail("Should have thrown 2");
            }
            catch (Exception ex)
            {
                Assert.True(ex.Message == "1", "Message correct");
            }
        }

        [Test]
        public void GetCommandLineArgsWorks()
        {
            var args = Environment.GetCommandLineArgs();

            Assert.NotNull(args);
            Assert.True(args.Length > 0);
            Assert.True(args is string[]);
            Assert.NotNull(args[0]);
            Assert.True(args[0].Length > 0);
        }

        [Test]
        public void GetEnvironmentVariableOneParameterWorks()
        {
            Assert.Throws<ArgumentNullException>(() => { Environment.GetEnvironmentVariable(null); });

            AssertVariables();

            Assert.AreEqual(null, Environment.GetEnvironmentVariable("variable1"));

            SetupVariables();

            Assert.AreEqual("value1", Environment.GetEnvironmentVariable("variable1"));
            Assert.AreEqual("value1", Environment.GetEnvironmentVariable("VARIable1"));
            Assert.AreEqual("value2", Environment.GetEnvironmentVariable("variable2"));
            Assert.AreEqual("value2", Environment.GetEnvironmentVariable("VARIable2"));
            Assert.AreEqual(null, Environment.GetEnvironmentVariable("variable3"));
            Assert.AreEqual(null, Environment.GetEnvironmentVariable("VARIable3"));
        }

        [Test]
        public void GetEnvironmentVariableRwoParametersWorks()
        {
            Assert.Throws<ArgumentNullException>(() => { Environment.GetEnvironmentVariable(null, EnvironmentVariableTarget.Process); });

            AssertVariables();

            Assert.AreEqual(null, Environment.GetEnvironmentVariable("variable1", EnvironmentVariableTarget.Process));

            SetupVariables();

            Assert.AreEqual("value1", Environment.GetEnvironmentVariable("variable1", EnvironmentVariableTarget.Process));
            Assert.AreEqual("value1", Environment.GetEnvironmentVariable("VARIable1", EnvironmentVariableTarget.Process));
            Assert.AreEqual("value2", Environment.GetEnvironmentVariable("variable2", EnvironmentVariableTarget.Process));
            Assert.AreEqual("value2", Environment.GetEnvironmentVariable("VARIable2", EnvironmentVariableTarget.Process));
            Assert.AreEqual(null, Environment.GetEnvironmentVariable("variable3", EnvironmentVariableTarget.Process));
            Assert.AreEqual(null, Environment.GetEnvironmentVariable("VARIable3", EnvironmentVariableTarget.Process));
        }


        [Test]
        public void GetEnvironmentVariablesWorks()
        {
            AssertVariables();

            var ens = Environment.GetEnvironmentVariables();

            Assert.NotNull(ens);
            Assert.AreEqual(0, ens.Count);

            SetupVariables();

            ens = Environment.GetEnvironmentVariables();

            Assert.AreEqual(2, ens.Count);
            Assert.AreEqual("value1", ens["variable1"]);
            Assert.AreEqual("value2", ens["variable2"]);
            Assert.AreEqual(null, ens["variable3"]);
        }

        [Test]
        public void GetEnvironmentVariablesOneParameterWorks()
        {
            AssertVariables();

            var ens = Environment.GetEnvironmentVariables(EnvironmentVariableTarget.Process);

            Assert.NotNull(ens);
            Assert.True(ens is IDictionary);
            Assert.AreEqual(0, ens.Count);

            SetupVariables();

            ens = Environment.GetEnvironmentVariables(EnvironmentVariableTarget.Process);

            Assert.AreEqual(2, ens.Count);
            Assert.AreEqual("value1", ens["variable1"]);
            Assert.AreEqual("value2", ens["variable2"]);
            Assert.AreEqual(null, ens["variable3"]);
        }

        [Test]
        public void GetFolderPathOneParameterEmpty()
        {
            Assert.AreEqual("", Environment.GetFolderPath(Environment.SpecialFolder.AdminTools));
        }

        [Test]
        public void GetFolderPathTwoParametersEmpty()
        {
            Assert.AreEqual("", Environment.GetFolderPath(Environment.SpecialFolder.AdminTools, Environment.SpecialFolderOption.Create));
        }


        [Test]
        public void GetLogicalDrivesEmpty()
        {
            Assert.NotNull(Environment.GetLogicalDrives());
            Assert.True(Environment.GetLogicalDrives() is string[]);
            Assert.AreEqual(0, Environment.GetLogicalDrives().Length);
        }

        [Test]
        public void SetEnvironmentVariableTwoParametersWorks()
        {
            Assert.Throws<ArgumentNullException>(() => { Environment.SetEnvironmentVariable(null, "1"); });
            Assert.Throws<ArgumentException>(() => { Environment.SetEnvironmentVariable("", "1"); });
            Assert.Throws<ArgumentException>(() => { Environment.SetEnvironmentVariable("=", "1"); });
            Assert.Throws<ArgumentException>(() => { Environment.SetEnvironmentVariable("a=", "1"); });
            Assert.Throws<ArgumentException>(() => { Environment.SetEnvironmentVariable(char.MinValue.ToString(), "1"); });

            AssertVariables();

            Environment.SetEnvironmentVariable("1", "one");
            Assert.AreEqual("one", Environment.GetEnvironmentVariable("1"));
            Assert.AreEqual(1, Environment.GetEnvironmentVariables().Count);

            Environment.SetEnvironmentVariable("2", "two");
            Assert.AreEqual("two", Environment.GetEnvironmentVariable("2"));
            Assert.AreEqual(2, Environment.GetEnvironmentVariables().Count);

            Environment.SetEnvironmentVariable("1", null);
            Assert.AreEqual(null, Environment.GetEnvironmentVariable("1"));
            Assert.AreEqual(1, Environment.GetEnvironmentVariables().Count);

            Environment.SetEnvironmentVariable("2", "");
            Assert.AreEqual(null, Environment.GetEnvironmentVariable("2"));
            Assert.AreEqual(0, Environment.GetEnvironmentVariables().Count);
        }

        [Test]
        public void SetEnvironmentVariableThreeParametersWorks()
        {
            Assert.Throws<ArgumentNullException>(() => { Environment.SetEnvironmentVariable(null, "1", EnvironmentVariableTarget.Process); });
            Assert.Throws<ArgumentException>(() => { Environment.SetEnvironmentVariable("", "1", EnvironmentVariableTarget.Process); });
            Assert.Throws<ArgumentException>(() => { Environment.SetEnvironmentVariable("=", "1", EnvironmentVariableTarget.Process); });
            Assert.Throws<ArgumentException>(() => { Environment.SetEnvironmentVariable("a=", "1", EnvironmentVariableTarget.Process); });
            Assert.Throws<ArgumentException>(() => { Environment.SetEnvironmentVariable(char.MinValue.ToString(), "1", EnvironmentVariableTarget.Process); });

            AssertVariables();

            Environment.SetEnvironmentVariable("1", "one", EnvironmentVariableTarget.Process);
            Assert.AreEqual("one", Environment.GetEnvironmentVariable("1"));
            Assert.AreEqual(1, Environment.GetEnvironmentVariables().Count);

            Environment.SetEnvironmentVariable("2", "two", EnvironmentVariableTarget.Process);
            Assert.AreEqual("two", Environment.GetEnvironmentVariable("2"));
            Assert.AreEqual(2, Environment.GetEnvironmentVariables().Count);

            Environment.SetEnvironmentVariable("1", null, EnvironmentVariableTarget.Process);
            Assert.AreEqual(null, Environment.GetEnvironmentVariable("1"));
            Assert.AreEqual(1, Environment.GetEnvironmentVariables().Count);

            Environment.SetEnvironmentVariable("2", "", EnvironmentVariableTarget.Process);
            Assert.AreEqual(null, Environment.GetEnvironmentVariable("2"));
            Assert.AreEqual(0, Environment.GetEnvironmentVariables().Count);
        }

    }
}