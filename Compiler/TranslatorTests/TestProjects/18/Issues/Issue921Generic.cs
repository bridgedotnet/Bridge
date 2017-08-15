using System.Collections.Generic;
using System.Linq;

//#921
namespace TestIssue921Generic
{
    public class Issue921Generic<T>
    {
        public IEnumerable<T> LambaLiftingGeneric()
        {
            return
                new[] { 1 }
                // No lift
                .Select(value => default(T));
        }
    }
}
