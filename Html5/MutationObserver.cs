using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Bridge.Html5
{
/// <summary>
    /// see <a href="https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord">MDN</a>
    /// </summary>
    [External]
    [Name("MutationRecord")]
    public class MutationRecord
    {
        public readonly string Type;
        public readonly Node Target;
        public readonly NodeList AddedNodes;
        public readonly NodeList RemovedNodes;
        public readonly Node PreviousSibling;
        public readonly Node NextSibling;
        public readonly string AttributeName;
        public readonly string AttributeNamespace;
        public readonly string OldValue;
    }

    /// <summary>
    /// see <a href="https://developer.mozilla.org/en/docs/Web/API/MutationObserver#MutationObserverInit">MDN</a>
    /// </summary>
    [External]
    [Name("Object")]
    public class MutationObserverInit
    {
        public bool ChildList;
        public bool Attributes;
        public bool CharacterData;
        public bool Subtree;
        public bool AttributeOldValue;
        public bool CharacterDataOldValue;
        public bool AttributeFilter;
    }

    /// <summary>
    /// see <a href="https://developer.mozilla.org/en/docs/Web/API/MutationObserver">MDN</a>
    /// </summary>
    [External]
    [Name("MutationObserver")]
    public class MutationObserver
    {
        public extern MutationObserver(Action<MutationRecord[],MutationObserver> callback);
        public extern void Observe(Node target, MutationObserverInit options);
        public extern void Disconnect();
        public extern MutationRecord[] TakeRecords();
    }
}
