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
        extern internal MediaList();

        public extern virtual string this[int index] { get; }

        public virtual extern void AppendMedium(string newMedium);

        public virtual extern void DeleteMedium(string oldMedium);

        [Name("item")]
        public virtual extern string GetItem(int index);

        public readonly int Length;

        public string MediaText;

        public virtual extern IEnumerator<string> GetEnumerator();

        extern IEnumerator IEnumerable.GetEnumerator();
    }
}