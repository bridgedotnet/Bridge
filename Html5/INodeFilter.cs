using Bridge;

namespace Bridge.Html5
{
    [Ignore]
    public interface INodeFilter
    {
        /// <summary>
        /// Returns an unsigned short that will be used to tell if a given Node must be accepted or not by the NodeIterator or TreeWalker iteration algorithm. This method is expected to be written by the user of a NodeFilter.
        /// </summary>
        /// <param name="node">Node being the object to check against the filter.</param>
        /// <returns></returns>
        NodeFilterResult AcceptNode(Node node);
    }

    [Ignore]
    [Enum(Emit.Value)]
    [Name("Number")]
    public enum NodeFilterResult
    {
        /// <summary>
        /// Value returned by the NodeFilter.acceptNode() method when a node should be accepted.
        /// </summary>
        Accept = 1,

        /// <summary>
        /// Value to be returned by the NodeFilter.acceptNode() method when a node should be rejected. The children of rejected nodes are not visited by the NodeIterator or TreeWalker object; this value is treated as "skip this node and all its children".
        /// </summary>
        Reject = 2,

        /// <summary>
        /// Value to be returned by NodeFilter.acceptNode() for nodes to be skipped by the NodeIterator or TreeWalker object. The children of skipped nodes are still considered. This is treated as "skip this node but not its children".
        /// </summary>
        Skip = 3
    }
}
