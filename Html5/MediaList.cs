using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5
{
    /// <summary>
    /// MediaList representing the intended destination medium for style information.
    /// </summary>
    [External]
    [Name("MediaList")]
    public class MediaList : IEnumerable<string>
    {
        internal MediaList()
        {
        }

        public virtual string this[int index]
        {
            get
            {
                return null;
            }
        }

        public virtual void AppendMedium(string newMedium)
        {
        }

        public virtual void DeleteMedium(string oldMedium)
        {
        }

        [Name("item")]
        public virtual string GetItem(int index)
        {
            return null;
        }

        public readonly int Length;

        public string MediaText;

        public virtual IEnumerator<string> GetEnumerator()
        {
            return null;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return null;
        }
    }
}
