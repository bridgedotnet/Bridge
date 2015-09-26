using Bridge;

namespace Bridge.Html5
{
    /// <summary>
    /// returns an unsigned short integer representing the type of the node.
    /// </summary>
    [Ignore]
    [Enum(Emit.Value)]
    [Name("Number")]
    public enum NodeType
    {
        Element = 1,
        Attribute = 2,
        Text = 3,
        CDATA = 4,
        EntityReference = 5,
        Entity = 6,
        ProcessingInstruction = 7,
        Comment = 8,
        Document = 9,
        DocumentType = 10,
        DocumentFragment = 11,
        Notation =     12
    }
}
