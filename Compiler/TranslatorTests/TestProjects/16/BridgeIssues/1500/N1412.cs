//#1412
namespace Test.BridgeIssues.N1412
{
    using System.Collections.Generic;

    public class SimpleTimeScaleController
    {
        public List<string> GetComponent<T>()
        {
            return null;
        }

        private void UpdateInternal()
        {
            // There should be a teml JS variavble generated with no comma
            var animationComp = GetComponent<string>();

            if (animationComp != null)
            {
                foreach (string state in animationComp)
                {

                }
            }
        }
    }
}
