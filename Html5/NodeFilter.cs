using System;

namespace Bridge.Html5
{
    /// <summary>
    /// types of Node that must to be presented
    /// </summary>
    [Flags]
    [External]
    [Enum(Emit.Value)]
    [Name("Number")]
    public enum NodeFilter
    {
        /// <summary>
        /// Shows all nodes.
        /// </summary>
        ShowAll = -1,

        /// <summary>
        /// Shows attribute Attr nodes. This is meaningful only when creating a NodeIterator with an Attr node as its root; in this case, it means that the attribute node will appear in the first position of the iteration or traversal. Since attributes are never children of other nodes, they do not appear when traversing over the document tree.
        /// </summary>
        ShowAttribute = 2,

        /// <summary>
        /// Shows CDATASection nodes.
        /// </summary>
        ShowCdataSection = 8,

        /// <summary>
        /// Shows Comment nodes.
        /// </summary>
        ShowComment = 128,

        /// <summary>
        /// Shows Document nodes.
        /// </summary>
        ShowDocument = 256,

        /// <summary>
        /// Shows DocumentFragment nodes.
        /// </summary>
        ShowDocumentFragment = 1024,

        /// <summary>
        /// Shows DocumentType nodes.
        /// </summary>
        ShowDocumentType = 512,

        /// <summary>
        /// Shows Element nodes.
        /// </summary>
        ShowElement = 1,

        /// <summary>
        /// Shows Entity nodes. This is meaningful only when creating a NodeIterator with an Entity node as its root; in this case, it means that the Entity node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.
        /// </summary>
        ShowEntity = 32,

        /// <summary>
        /// Shows EntityReference nodes.
        /// </summary>
        ShowEntityReference = 16,

        /// <summary>
        /// Shows Notation nodes. This is meaningful only when creating a NodeIterator with a Notation node as its root; in this case, it means that the Notation node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.
        /// </summary>
        ShowNotation = 2048,

        /// <summary>
        /// Shows ProcessingInstruction nodes.
        /// </summary>
        ShowProcessingInstruction = 64,

        /// <summary>
        /// Shows Text nodes.
        /// </summary>
        ShowText = 4
    }
}
