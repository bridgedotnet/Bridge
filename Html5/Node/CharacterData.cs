namespace Bridge.Html5
{
    /// <summary>
    /// The CharacterData abstract interface represents a Node object that contains characters. This is an abstract interface, meaning there aren't any object of type CharacterData: it is implemented by other interfaces, like Text, Comment, or ProcessingInstruction which aren't abstract.
    /// </summary>
    [External]
    [Name("CharacterData")]
    public class CharacterData : Node
    {
        protected extern internal CharacterData();

        /// <summary>
        /// Is a DOMString representing the textual data contained in this object.
        /// </summary>
        public string Data;

        /// <summary>
        /// Returns an unsigned long representing the size of the string contained in CharacterData.data.
        /// </summary>
        public readonly int Length;

        /// <summary>
        /// Returns the Element immediately prior to this ChildNode in its parent's children list, or null if there is no Element in the list prior to this ChildNode.
        /// </summary>
        public readonly HTMLElement PreviousElementSibling;

        /// <summary>
        /// Returns the Element immediately following this ChildNode in its parent's children list, or null if there is no Element in the list following this ChildNode.
        /// </summary>
        public readonly HTMLElement NextElementSibling;

        /// <summary>
        /// Appends the given DOMString to the CharacterData.data string; when this method returns, data contains the concatenated DOMString.
        /// </summary>
        /// <param name="data"></param>
        public virtual extern void AppendData(string data);

        /// <summary>
        /// Removes the specified amount of characters, starting at the specified offset, from the CharacterData.data string; when this method returns, data contains the shortened DOMString.
        /// </summary>
        /// <param name="offset"></param>
        /// <param name="count"></param>
        public virtual extern void DeleteData(int offset, int count);

        /// <summary>
        /// Inserts the specified characters, at the specified offset, in the CharacterData.data string; when this method returns, data contains the modified DOMString.
        /// </summary>
        /// <param name="offset"></param>
        /// <param name="data"></param>
        public virtual extern void InsertData(int offset, string data);

        /// <summary>
        /// Removes the object from its parent children list.
        /// </summary>
        public virtual extern void Remove();

        /// <summary>
        /// Replaces the specified amount of characters, starting at the specified offset, with the specified DOMString; when this method returns, data contains the modified DOMString.
        /// </summary>
        /// <param name="offset"></param>
        /// <param name="count"></param>
        /// <param name="data"></param>
        public virtual extern void ReplaceData(int offset, int count, string data);

        /// <summary>
        /// Returns a DOMString containing the part of CharacterData.data of the specified length and starting at the specified offset.
        /// </summary>
        /// <param name="offset"></param>
        /// <param name="count"></param>
        /// <returns></returns>
        public virtual extern string SubstringData(int offset, int count);
    }
}