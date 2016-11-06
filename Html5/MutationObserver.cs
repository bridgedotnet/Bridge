using System;

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
    /// Provides developers a way to react to changes in a DOM. It is designed as a replacement for Mutation Events defined in the DOM3 Events specification.
    /// see <a href="https://developer.mozilla.org/en/docs/Web/API/MutationObserver">MDN</a>
    /// </summary>
    [External]
    [Name("MutationObserver")]
    public class MutationObserver
    {
        /// <summary>
        /// Constructor for instantiating new DOM mutation observers.
        /// </summary>
        /// <param name="callback">The function which will be called on each DOM mutation. The observer will call this function with two arguments. The first is an array of objects, each of type MutationRecord. The second is this MutationObserver instance.</param>
        public extern MutationObserver(Action<MutationRecord[], MutationObserver> callback);

        /// <summary>
        /// Registers the MutationObserver instance to receive notifications of DOM mutations on the specified node.
        /// </summary>
        /// <param name="target">The Node on which to observe DOM mutations.</param>
        /// <param name="options">A MutationObserverInit object, specifies which DOM mutations should be reported.</param>
        public extern void Observe(Node target, MutationObserverInit options);

        /// <summary>
        /// Stops the MutationObserver instance from receiving notifications of DOM mutations. Until the observe() method is used again, observer's callback will not be invoked.
        /// </summary>
        public extern void Disconnect();

        /// <summary>
        /// Empties the MutationObserver instance's record queue and returns what was in there.
        /// </summary>
        /// <returns></returns>
        public extern MutationRecord[] TakeRecords();
    }
}
