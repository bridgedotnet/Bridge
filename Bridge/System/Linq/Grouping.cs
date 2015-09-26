using System.Collections.Generic;
using Bridge;

namespace System.Linq
{
    [Ignore]
    [IgnoreGeneric]
    public interface IGrouping<out TKey, TElement> : IEnumerable<TElement>
    {
        TKey Key
        {
            [Template("key()")]
            get;
        }
    }

    [Ignore]
    [IgnoreGeneric]
    public class Grouping<TKey, TElement> : EnumerableInstance<TElement>, IGrouping<TKey, TElement>
    {
        internal Grouping()
        {
        }

        public TKey Key
        {
            [Template("key()")]
            get
            {
                return default(TKey);
            }
        }
    }
}