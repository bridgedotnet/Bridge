using System.Collections.Generic;

namespace TypeScript.Issues
{
    public class N2264
    {
        public IEnumerable<string> Values
        {
            get; set;
        }

        public N2264(IEnumerable<string> queryParameters = null)
        {
            this.Values = queryParameters;
        }
    }
}