using System.Collections.Generic;
using Bridge.Translator.Utils;
using NUnit.Framework;

namespace Bridge.Translator.Tests
{
    [TestFixture]
    internal class MsBuildConditionEvaluatorTests
    {
        [TestCase]
        public void TestProjectConfigurations()
        {
            var properties1 = new Dictionary<string, string>
            {
                ["Configuration"] = "Debug",
                ["Platform"] = "AnyCPU"
            };
            Assert.IsTrue(MsBuildConditionEvaluator.EvaluateCondition("'$(Configuration)|$(Platform)' == 'Debug|AnyCPU'", properties1));
            Assert.IsFalse(MsBuildConditionEvaluator.EvaluateCondition("'$(Configuration)|$(Platform)' == 'DebugWithPostBuild|AnyCPU'", properties1));
            Assert.IsFalse(MsBuildConditionEvaluator.EvaluateCondition("'$(Configuration)|$(Platform)' == 'Debug|x64'", properties1));

            var properties2 = new Dictionary<string, string>
            {
                ["Configuration"] = "DebugWithPostBuild",
                ["Platform"] = "AnyCPU"
            };
            Assert.IsFalse(MsBuildConditionEvaluator.EvaluateCondition("'$(Configuration)|$(Platform)' == 'Debug|AnyCPU'", properties2));
            Assert.IsTrue(MsBuildConditionEvaluator.EvaluateCondition("'$(Configuration)|$(Platform)' == 'DebugWithPostBuild|AnyCPU'", properties2));
            Assert.IsFalse(MsBuildConditionEvaluator.EvaluateCondition("'$(Configuration)|$(Platform)' == 'Debug|x64'", properties2));

            var properties3 = new Dictionary<string, string>
            {
                ["Configuration"] = "Debug",
                ["Platform"] = "x64"
            };
            Assert.IsFalse(MsBuildConditionEvaluator.EvaluateCondition("'$(Configuration)|$(Platform)' == 'Debug|AnyCPU'", properties3));
            Assert.IsFalse(MsBuildConditionEvaluator.EvaluateCondition("'$(Configuration)|$(Platform)' == 'DebugWithPostBuild|AnyCPU'", properties3));
            Assert.IsTrue(MsBuildConditionEvaluator.EvaluateCondition("'$(Configuration)|$(Platform)' == 'Debug|x64'", properties3));
        }
    }
}
