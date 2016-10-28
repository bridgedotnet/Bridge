using System.Collections.Generic;
using Microsoft.Build.Construction;
using Microsoft.Build.Evaluation;
using Microsoft.Build.Execution;

namespace Bridge.Translator.Utils
{
    public class MsBuildConditionEvaluator
    {
        public static bool EvaluateCondition(string condition, Dictionary<string, string> conditionParameters)
        {
            var projectInstance = new ProjectInstance(ProjectRootElement.Create(), conditionParameters, null, ProjectCollection.GlobalProjectCollection);
            return projectInstance.EvaluateCondition(condition);
        }
    }
}
