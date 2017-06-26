using System;

namespace Bridge.Html5
{
    /// <summary>
    ///  Each web page loaded in the browser has its own document object. The Document interface serves as an entry point to the web page's content (the DOM tree, including elements such as body and table) and provides functionality global to the document (such as obtaining the page's URL and creating new elements in the document).
    /// </summary>
    [External]
    [Name("document")]
    public static class Document
    {
        #region Node implementation

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public static extern void AddEventListener(string type, Delegate listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public static extern void AddEventListener(string type, Action listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public static extern void AddEventListener(EventType type, Delegate listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public static extern void AddEventListener(EventType type, Action listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public static extern void AddEventListener(string type, Action<Event> listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public static extern void AddEventListener(EventType type, Action<Event> listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public static extern void AddEventListener(string type, Delegate listener, bool useCapture);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public static extern void AddEventListener(string type, Action listener, bool useCapture);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public static extern void AddEventListener(EventType type, Delegate listener, bool useCapture);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public static extern void AddEventListener(EventType type, Action listener, bool useCapture);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public static extern void AddEventListener(string type, Action<Event> listener, bool useCapture);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public static extern void AddEventListener(EventType type, Action<Event> listener, bool useCapture);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public static extern void AddEventListener(string type, IEventListener listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public static extern void AddEventListener(EventType type, IEventListener listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public static extern void AddEventListener(string type, IEventListener listener, bool useCapture);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public static extern void AddEventListener(EventType type, IEventListener listener, bool useCapture);

        /// <summary>
        /// Dispatches the specified event to the current element.
        /// To create an event object use the createEvent method in Firefox, Opera, Google Chrome, Safari and Internet Explorer from version 9. After the new event is created, initialize it first (for details, see the page for the createEvent method). When the event is initialized, it is ready for dispatching.
        /// </summary>
        /// <param name="e">Required. Reference to an event object to be dispatched.</param>
        /// <returns>Boolean that indicates whether the default action of the event was not canceled.</returns>
        public static extern bool DispatchEvent(Event e);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public static extern void RemoveEventListener(EventType type, IEventListener listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public static extern void RemoveEventListener(EventType type, IEventListener listener, bool capture);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public static extern void RemoveEventListener(string type, IEventListener listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public static extern void RemoveEventListener(string type, IEventListener listener, bool capture);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public static extern void RemoveEventListener(EventType type, Delegate listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public static extern void RemoveEventListener(EventType type, Action listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public static extern void RemoveEventListener(EventType type, Delegate listener, bool capture);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public static extern void RemoveEventListener(EventType type, Action listener, bool capture);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public static extern void RemoveEventListener(string type, Delegate listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public static extern void RemoveEventListener(string type, Action listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public static extern void RemoveEventListener(string type, Delegate listener, bool capture);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public static extern void RemoveEventListener(string type, Action listener, bool capture);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public static extern void RemoveEventListener(EventType type, Action<Event> listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public static extern void RemoveEventListener(EventType type, Action<Event> listener, bool capture);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public static extern void RemoveEventListener(string type, Action<Event> listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public static extern void RemoveEventListener(string type, Action<Event> listener, bool capture);

        /// <summary>
        /// Returns a DOMString representing the base URL. The concept of base URL changes from one language to another; in HTML, it corresponds to the protocol, the domain name and the directory structure, that is all until the last '/'.
        /// </summary>
        public static readonly string BaseURI;

        /// <summary>
        /// Returns a live NodeList containing all the children of this node. NodeList being live means that if the children of the Node change, the NodeList object is automatically updated.
        /// </summary>
        public static readonly NodeList ChildNodes;

        /// <summary>
        /// Returns a Node representing the first direct child node of the node, or null if the node has no child.
        /// </summary>
        public static readonly Node FirstChild;

        /// <summary>
        /// Returns a Node representing the last direct child node of the node, or null if the node has no child.
        /// </summary>
        public static readonly Node LastChild;

        /// <summary>
        /// Returns a Node representing the next node in the tree, or null if there isn't such node.
        /// </summary>
        public static readonly Node NextSibling;

        /// <summary>
        /// Returns a DOMString containing the name of the Node. The structure of the name will differ with the name type. E.g. An HTMLElement will contain the name of the corresponding tag, like 'audio' for an HTMLAudioElement, a Text node will have the '#text' string, or a Document node will have the '#document' string.
        /// </summary>
        public static readonly string NodeName;

        /// <summary>
        /// Returns an unsigned short representing the type of the node.
        /// </summary>
        public static readonly NodeType NodeType;

        /// <summary>
        /// Is a DOMString representing the value of an object. For most Node type, this returns null and any set operation is ignored. For nodes of type TEXT_NODE (Text objects), COMMENT_NODE (Comment objects), and PROCESSING_INSTRUCTION_NODE (ProcessingInstruction objects), the value corresponds to the text data contained in the object.
        /// </summary>
        public static string NodeValue;

        /// <summary>
        /// Returns the Document that this node belongs to. If no document is associated with it, returns null.
        /// </summary>
        public static readonly DocumentInstance OwnerDocument;

        /// <summary>
        /// Returns a Node that is the parent of this node. If there is no such node, like if this node is the top of the tree or if doesn't participate in a tree, this property returns null.
        /// </summary>
        public static readonly Node ParentNode;

        /// <summary>
        /// Returns an Element that is the parent of this node. If the node has no parent, or if that parent is not an Element, this property returns null.
        /// </summary>
        public static readonly HTMLElement ParentElement;

        /// <summary>
        /// Returns a Node representing the previous node in the tree, or null if there isn't such node.
        /// </summary>
        public static readonly HTMLElement PreviousSibling;

        /// <summary>
        /// Is a DOMString representing the textual content of an element and all its descendants.
        /// </summary>
        public static string TextContent;

        /// <summary>
        /// Adds a node to the end of the list of children of a specified parent node. If the node already exists it is removed from current parent node, then added to new parent node.
        /// </summary>
        /// <param name="child">child is the node to append underneath element. Also returned.</param>
        /// <returns></returns>
        public static extern Node AppendChild(Node child);

        /// <summary>
        /// Returns a duplicate of the node on which this method was called.
        /// </summary>
        /// <returns>The new node that will be a clone of this node</returns>
        public static extern Node CloneNode();

        /// <summary>
        /// Returns a duplicate of the node on which this method was called.
        /// </summary>
        /// <param name="deep">true if the children of the node should also be cloned, or false to clone only the specified node.</param>
        /// <returns>The new node that will be a clone of this node</returns>
        public static extern Node CloneNode(bool deep);

        /// <summary>
        /// Compares the position of the current node against another node in any other document.
        /// </summary>
        /// <param name="node">is the node that's being compared against.</param>
        /// <returns>The return value is computed as the relationship that otherNode has with node.</returns>
        public static extern DocumentPosition CompareDocumentPosition(Node node);

        /// <summary>
        /// Indicates whether a node is a descendant of a given node.
        /// </summary>
        /// <param name="node">is the node that's being compared against.</param>
        /// <returns>The return value is true if otherNode is a descendant of node, or node itself. Otherwise the return value is false.</returns>
        public static extern bool Contains(Node node);

        /// <summary>
        ///  returns a Boolean value indicating whether the current Node has child nodes or not.
        /// </summary>
        /// <returns>Boolean value indicating whether the current Node has child nodes or not</returns>
        public static extern bool HasChildNodes();

        /// <summary>
        /// Inserts the specified node before a reference element as a child of the current node.
        /// </summary>
        /// <param name="newElement">The node to insert.</param>
        /// <param name="referenceElement">The node before which newElement is inserted.</param>
        /// <returns>The node being inserted, that is newElement</returns>
        public static extern Node InsertBefore(Node newElement, Node referenceElement);

        /// <summary>
        /// Accepts a namespace URI as an argument and returns true if the namespace is the default namespace on the given node or false if not.
        /// </summary>
        /// <param name="namespaceURI">string representing the namespace against which the element will be checked.</param>
        /// <returns>holds the return value true or false.</returns>
        public static extern bool IsDefaultNamespace(string namespaceURI);

        /// <summary>
        /// Tests whether two nodes are equal.
        /// </summary>
        /// <param name="node">The node to compare equality with.</param>
        /// <returns></returns>
        public static extern bool IsEqualNode(Node node);

        /// <summary>
        /// Clean up all the text nodes under this element (merge adjacent, remove empty).
        /// </summary>
        public static extern void Normalize();

        /// <summary>
        /// Removes a child node from the DOM. Returns removed node.
        /// </summary>
        /// <param name="child">child node to be removed from the DOM.</param>
        /// <returns>Reference to the removed child node</returns>
        public static extern Node RemoveChild(Node child);

        /// <summary>
        /// Replaces one child node of the specified element with another.
        /// </summary>
        /// <param name="newChild">new node to replace oldChild. If it already exists in the DOM, it is first removed.</param>
        /// <param name="oldChild">the existing child to be replaced.</param>
        /// <returns>the replaced node. This is the same node as oldChild.</returns>
        public static extern Node ReplaceChild(Node newChild, Node oldChild);

        /// <summary>
        /// The number of child nodes that are elements.
        /// </summary>
        public static readonly int ChildElementCount;

        /// <summary>
        /// All child elements of an element as a collection.
        /// </summary>
        public static readonly HTMLCollection Children;

        /// <summary>
        /// The ParentNode.firstElementChild read-only property returns the object's first child Element, or null if there are no child elements.
        /// </summary>
        public static readonly HTMLElement FirstElementChild;

        /// <summary>
        /// The ParentNode.lastElementChild read-only method returns the object's last child Element or null if there are no child elements.
        /// </summary>
        public static readonly HTMLElement LastElementChild;

        /// <summary>
        /// The oncopy property returns the onCopy event handler code on the current element.
        /// </summary>
        [Name("oncopy")]
        public static Delegate OnCopy;

        /// <summary>
        /// Returns the event handling code for the cut event.
        /// </summary>
        [Name("oncut")]
        public static Delegate OnCut;

        /// <summary>
        /// Returns the event handling code for the paste event.
        /// </summary>
        [Name("onpaste")]
        public static Delegate OnPaste;

        /// <summary>
        /// Returns the event handling code for the wheel event.
        /// </summary>
        [Name("onwheel")]
        public static Delegate OnWheel;

        /// <summary>
        ///  EventHandler representing the code to be called when the abort event is raised.
        /// </summary>
        [Name("onabort")]
        public static Action<Event> OnAbort;

        /// <summary>
        /// EventHandler representing the code to be called when the blur event is raised.
        /// </summary>
        [Name("onblur")]
        public static Action<Event> OnBlur;

        /// <summary>
        /// OnErrorEventHandler representing the code to be called when the error event is raised.
        /// </summary>
        [Name("onerror")]
        public static ErrorEventHandler OnError;

        /// <summary>
        /// EventHandler representing the code to be called when the focus event is raised.
        /// </summary>
        [Name("onfocus")]
        public static Action<Event> OnFocus;

        /// <summary>
        /// EventHandler representing the code to be called when the cancel event is raised.
        /// </summary>
        [Name("oncancel")]
        public static Action<Event> OnCancel;

        /// <summary>
        /// EventHandler representing the code to be called when the canplay event is raised
        /// </summary>
        [Name("oncanplay")]
        public static Action<Event> OnCanPlay;

        /// <summary>
        /// EventHandler representing the code to be called when the canplaythrough event is raised.
        /// </summary>
        [Name("oncanplaythrough")]
        public static Action<Event> OnCanPlayThrough;

        /// <summary>
        /// EventHandler representing the code to be called when the change event is raised.
        /// </summary>
        [Name("onchange")]
        public static Action<Event> OnChange;

        /// <summary>
        /// EventHandler representing the code to be called when the click event is raised.
        /// </summary>
        [Name("onclick")]
        public static Action<MouseEvent> OnClick;

        /// <summary>
        /// EventHandler representing the code to be called when the close event is raised.
        /// </summary>
        [Name("onclose")]
        public static Action<Event> OnClose;

        /// <summary>
        /// EventHandler representing the code to be called when the contextmenu event is raised.
        /// </summary>
        [Name("oncontextmenu")]
        public static Action<Event> OnContextMenu;

        /// <summary>
        /// EventHandler representing the code to be called when the cuechange event is raised.
        /// </summary>
        [Name("oncuechange")]
        public static Action<Event> OnCueChange;

        /// <summary>
        /// EventHandler representing the code to be called when the dblclick event is raised.
        /// </summary>
        [Name("ondblclick")]
        public static Action<MouseEvent> OnDblClick;

        /// <summary>
        /// EventHandler representing the code to be called when the drag event is raised.
        /// </summary>
        [Name("ondrag")]
        public static Action<Event> OnDrag;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragend event is raised
        /// </summary>
        [Name("ondragend")]
        public static Action<Event> OnDragEnd;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragenter event is raised
        /// </summary>
        [Name("ondragenter")]
        public static Action<Event> OnDragEnter;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragexit event is raised
        /// </summary>
        [Name("ondragexit")]
        public static Action<Event> OnDragExit;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragleave event is raised
        /// </summary>
        [Name("ondragleave")]
        public static Action<Event> OnDragLeave;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragover event is raised
        /// </summary>
        [Name("ondragover")]
        public static Action<Event> OnDragOver;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragstart event is raised
        /// </summary>
        [Name("ondragstart")]
        public static Action<Event> OnDragStart;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the drop event is raised
        /// </summary>
        [Name("ondrop")]
        public static Action<Event> OnDrop;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the durationchange event is raised
        /// </summary>
        [Name("ondurationchange")]
        public static Action<Event> OnDurationChange;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the emptied event is raised
        /// </summary>
        [Name("onemptied")]
        public static Action<Event> OnEmptied;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the ended event is raised
        /// </summary>
        [Name("onended")]
        public static Action<Event> OnEnded;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the input event is raised
        /// </summary>
        [Name("oninput")]
        public static Action<Event> OnInput;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the invalid event is raised
        /// </summary>
        [Name("oninvalid")]
        public static Action<Event> OnInvalid;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the keydown event is raised
        /// </summary>
        [Name("onkeydown")]
        public static Action<KeyboardEvent> OnKeyDown;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the keypress event is raised
        /// </summary>
        [Name("onkeypress")]
        public static Action<KeyboardEvent> OnKeyPress;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the keyup event is raised
        /// </summary>
        [Name("onkeyup")]
        public static Action<KeyboardEvent> OnKeyUp;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the load event is raised
        /// </summary>
        [Name("onload")]
        public static Action<Event> OnLoad;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the loadeddata event is raised
        /// </summary>
        [Name("onloadeddata")]
        public static Action<Event> OnLoadedData;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the loadedmetadata event is raised
        /// </summary>
        [Name("onloadedmetadata")]
        public static Action<Event> OnLoadedMetaData;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the loadstart event is raised
        /// </summary>
        [Name("onloadstart")]
        public static Action<Event> OnLoadStart;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mousedown event is raised
        /// </summary>
        [Name("onmousedown")]
        public static Action<MouseEvent> OnMouseDown;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseenter event is raised
        /// </summary>
        [Name("onmouseenter")]
        public static Action<MouseEvent> OnMouseEnter;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseleave event is raised
        /// </summary>
        [Name("onmouseleave")]
        public static Action<MouseEvent> OnMouseLeave;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mousemove event is raised
        /// </summary>
        [Name("onmousemove")]
        public static Action<MouseEvent> OnMouseMove;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseout event is raised
        /// </summary>
        [Name("onmouseout")]
        public static Action<MouseEvent> OnMouseOut;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseover event is raised
        /// </summary>
        [Name("onmouseover")]
        public static Action<MouseEvent> OnMouseOver;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseup event is raised
        /// </summary>
        [Name("onmouseup")]
        public static Action<MouseEvent> OnMouseUp;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mousewheel event is raised
        /// </summary>
        [Name("onmousewheel")]
        public static Action<MouseEvent> OnMouseWheel;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the pause event is raised
        /// </summary>
        [Name("onpause")]
        public static Action<Event> OnPause;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the play event is raised
        /// </summary>
        [Name("onplay")]
        public static Action<Event> OnPlay;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the playing event is raised
        /// </summary>
        [Name("onplaying")]
        public static Action<Event> OnPlaying;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the progress event is raised
        /// </summary>
        [Name("onprogress")]
        public static Action<ProgressEvent> OnProgress;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the ratechange event is raised
        /// </summary>
        [Name("onratechange")]
        public static Action<Event> OnRateChange;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the reset event is raised
        /// </summary>
        [Name("onreset")]
        public static Action<Event> OnReset;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the scroll event is raised
        /// </summary>
        [Name("onscroll")]
        public static Action<Event> OnScroll;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the seeked event is raised
        /// </summary>
        [Name("onseeked")]
        public static Action<Event> OnSeeked;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the seeking event is raised
        /// </summary>
        [Name("onseeking")]
        public static Action<Event> OnSeeking;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the select event is raised
        /// </summary>
        [Name("onselect")]
        public static Action<Event> OnSelect;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the show event is raised
        /// </summary>
        [Name("onshow")]
        public static Action<Event> OnShow;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the sort event is raised
        /// </summary>
        [Name("onsort")]
        public static Action<Event> OnSort;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the stalled event is raised
        /// </summary>
        [Name("onstalled")]
        public static Action<Event> OnStalled;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the submit event is raised
        /// </summary>
        [Name("onsubmit")]
        public static Action<Event> OnSubmit;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the suspend event is raised
        /// </summary>
        [Name("onsuspend")]
        public static Action<Event> OnSuspend;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the timeupdate event is raised
        /// </summary>
        [Name("ontimeupdate")]
        public static Action<Event> OnTimeUpdate;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the volumechange event is raised
        /// </summary>
        [Name("onvolumechange")]
        public static Action<Event> OnVolumeChange;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the waiting event is raised
        /// </summary>
        [Name("onwaiting")]
        public static Action<Event> OnWaiting;

        #endregion Node implementation

        /// <summary>
        /// document.async can be set to indicate whether a document.load call should be an asynchronous or synchronous request. true is the default value, indicating that documents should be loaded asynchronously.
        /// </summary>
        public static bool Async;

        /// <summary>
        /// Returns the character encoding of the current document.
        /// </summary>
        public static readonly string CharacterSet;

        /// <summary>
        /// Indicates whether the document is rendered in Quirks mode or Strict mode.
        /// </summary>
        public static readonly CompatMode CompatMode;

        /// <summary>
        /// Returns the MIME type that the document is being rendered as.  This may come from HTTP headers or other sources of MIME information, and might be affected by automatic type conversions performed by either the browser or extensions.
        /// </summary>
        public static readonly string ContentType;

        /// <summary>
        /// Returns the Document Type Declaration (DTD) associated with current document.
        /// </summary>
        public static readonly DocumentType Doctype;

        /// <summary>
        /// Returns the Element that is the root element of the document (for example, the &lt;html&gt; element for HTML documents).
        /// </summary>
        public static readonly HTMLHtmlElement DocumentElement;

        /// <summary>
        /// Returns the document location as string.
        /// </summary>
        public static readonly string DocumentURI;

        /// <summary>
        /// Returns a DOMImplementation object associated with the current document.
        /// </summary>
        public static readonly DOMImplementation Implementation;

        /// <summary>
        /// Returns the last enabled style sheet set; this property's value changes whenever the document.selectedStyleSheetSet property is changed.
        /// </summary>
        public static readonly string LastStyleSheetSet;

        /// <summary>
        /// Returns the preferred style sheet set as set by the page author.
        /// </summary>
        public static readonly string PreferredStyleSheetSet;

        /// <summary>
        /// Indicates the name of the style sheet set that's currently in use.
        /// </summary>
        public static string SelectedStyleSheetSet;

        /// <summary>
        /// The Document.styleSheets read-only property returns a StyleSheetList of StyleSheet objects for stylesheets explicitly linked into or embedded in a document.
        /// </summary>
        public static readonly StyleSheetList StyleSheets;

        /// <summary>
        /// Returns a live list of all of the currently-available style sheet sets.
        /// </summary>
        public static readonly DOMStringList StyleSheetSets;

        /// <summary>
        /// Returns the currently focused element, that is, the element that will get keystroke events if the user types any.
        /// </summary>
        public static readonly HTMLElement ActiveElement;

        /// <summary>
        /// Returns or sets the color of an active link in the document body. A link is active during the time between mousedown and mouseup events.
        /// </summary>
        public static string AlinkColor;

        /// <summary>
        /// Returns a list of all of the anchors in the document.
        /// </summary>
        public static readonly HTMLCollection Anchors;

        /// <summary>
        /// Returns an ordered list of the applets within a document.
        /// </summary>
        public static readonly HTMLCollection Applets;

        /// <summary>
        /// Gets/sets the background color of the current document.
        /// </summary>
        public static string BgColor;

        /// <summary>
        /// Returns the body or frameset node of the current document, or null if no such element exists.
        /// </summary>
        public static HTMLBodyElement Body;

        /// <summary>
        /// Get and set the cookies associated with the current document.
        /// </summary>
        public static string Cookie;

        /// <summary>
        /// In browsers returns the window object associated with the document or null if none available.
        /// </summary>
        public static readonly WindowInstance DefaultView;

        /// <summary>
        /// Gets/sets the ability to edit the whole document.
        /// </summary>
        public static string DesignMode;

        /// <summary>
        /// Gets/sets directionality (rtl/ltr) of the document.
        /// </summary>
        public static string Dir;

        /// <summary>
        /// Gets/sets the domain portion of the origin of the current document, as used by the same origin policy.
        /// </summary>
        public static string Domain;

        /// <summary>
        /// Returns a list of the embedded OBJECTS within the current document.
        /// </summary>
        public static readonly HTMLCollection Embeds;

        /// <summary>
        /// Gets/sets the foreground color, or text color, of the current document.
        /// </summary>
        public static string FgColor;

        /// <summary>
        /// Returns a list of the form elements within the current document.
        /// </summary>
        public static readonly HTMLCollection Forms;

        /// <summary>
        /// Returns the head element of the current document. If there are more than one head elements, the first one is returned.
        /// </summary>
        public static readonly HTMLElement Head;

        /// <summary>
        /// Returns a list of the images in the current document.
        /// </summary>
        public static readonly HTMLCollection Images;

        /// <summary>
        /// Returns a string containing the date and time on which the current document was last modified.
        /// </summary>
        public static readonly string LastModified;

        /// <summary>
        /// Gets/sets the color of hyperlinks in the document.
        /// </summary>
        public static string LinkColor;

        /// <summary>
        /// Returns a list of all the hyperlinks in the document.
        /// </summary>
        public static readonly HTMLCollection Links;

        /// <summary>
        /// The Document.location read-only property returns a Location object, which contains information about the URL of the document and provides methods for changing that URL and load another URL.
        /// </summary>
        public static readonly Location Location;

        /// <summary>
        /// Returns an HTMLCollection object containing one or more HTMLEmbedElements or null which represent the embed elements in the current document.
        /// </summary>
        public static readonly HTMLCollection Plugins;

        /// <summary>
        /// Returns loading status of the document.
        /// </summary>
        public static readonly ReadyState ReadyState;

        /// <summary>
        /// Returns the URI of the page that linked to this page.
        /// </summary>
        public static readonly string Referrer;

        /// <summary>
        /// Returns all the script elements on the document.
        /// </summary>
        public static readonly HTMLCollection Scripts;

        /// <summary>
        /// Returns the title of the current document.
        /// </summary>
        public static string Title;

        /// <summary>
        /// Returns a string containing the URL of the current document.
        /// </summary>
        [Name("URL")]
        public static readonly string URL;

        /// <summary>
        /// Gets/sets the color of hyperlinks in the document.
        /// </summary>
        public static string VlinkColor;

        /// <summary>
        /// Returns the event handling code for the readystatechange event.
        /// </summary>
        [Name("onreadystatechange")]
        public static Action<Event> OnReadyStateChange;

        /// <summary>
        /// Adopts a node from an external document. The node and its subtree is removed from the document it's in (if any), and its ownerDocument is changed to the current document. The node can then be inserted into the current document.
        /// </summary>
        /// <param name="externalNode">the node from another document to be adopted.</param>
        /// <returns>the adopted node that can be used in the current document. The new node's parentNode is null, since it has not yet been inserted into the document tree.</returns>
        public static extern Node AdoptNode(Node externalNode);

        /// <summary>
        /// This method is used to retrieve the caret position in a document based on two coordinates. A CaretPosition is returned, containing the found DOM node and the character offset in that node.
        /// </summary>
        /// <param name="x">Horizontal point on the page at where to determine the caret position.</param>
        /// <param name="y">Vertical point on the page at where to determine the caret position.</param>
        /// <returns>A CaretPosition. Null, if x or y are negative or greater than the viewport.</returns>
        public static extern CaretPosition CaretPositionFromPoint(double x, double y);

        /// <summary>
        /// This method is used to retrieve the caret position in a document based on two coordinates. A Range is returned, containing the found DOM node and the character offset in that node.
        /// </summary>
        /// <param name="x">Horizontal point on the page at where to determine the caret position.</param>
        /// <param name="y">Vertical point on the page at where to determine the caret position.</param>
        /// <returns>A Range. Null, if x or y are negative or greater than the viewport.</returns>
        public static extern Range CaretRangeFromPoint(double x, double y);

        /// <summary>
        /// Creates a new Attr object and returns it.
        /// </summary>
        /// <param name="name">name is a string containing the name of the attribute.</param>
        /// <returns>an attribute node</returns>
        public static extern Attr CreateAttribute(string name);

        /// <summary>
        /// Creates a new attribute node in a given namespace and returns it.
        /// </summary>
        /// <param name="namespace"></param>
        /// <param name="name">name is a string containing the name of the attribute.</param>
        /// <returns>an attribute node</returns>
        public static extern Attr CreateAttributeNS(string @namespace, string name);

        /// <summary>
        /// Creates a new CDATA node and returns it.
        /// </summary>
        /// <param name="data">string containing the data to be added to the CDATA Section.</param>
        /// <returns>CDATA Section node.</returns>
        public static extern CDATASection CreateCDATASection(string data);

        /// <summary>
        /// Creates a new comment node and returns it.
        /// </summary>
        /// <param name="comment">string containing the data to be added to the Comment.</param>
        /// <returns>Comment node.</returns>
        public static extern Comment CreateComment(string comment);

        /// <summary>
        /// Creates a new document fragment.
        /// </summary>
        /// <returns></returns>
        public static extern DocumentFragment CreateDocumentFragment();

        /// <summary>
        /// In an HTML document creates the specified HTML element or HTMLUnknownElement if the element is not known.
        /// In a XUL document creates the specified XUL element.
        /// In other documents creates an element with a null namespaceURI.
        /// </summary>
        /// <param name="tagName">tagName is a string that specifies the type of element to be created. The nodeName of the created element is initialized with the value of tagName. Don't use qualified names (like "html:a") with this method.</param>
        /// <returns>created element object</returns>
        public static extern HTMLElement CreateElement(string tagName);

        /// <summary>
        /// In an HTML document creates the specified HTML element or HTMLUnknownElement if the element is not known.
        /// In a XUL document creates the specified XUL element.
        /// In other documents creates an element with a null namespaceURI.
        /// </summary>
        /// <param name="tagName">tagName is a string that specifies the type of element to be created. The nodeName of the created element is initialized with the value of tagName. Don't use qualified names (like "html:a") with this method.</param>
        /// <returns>created element object</returns>
        public static extern T CreateElement<T>(string tagName) where T : HTMLElement;

        /// <summary>
        /// Creates an element with the specified namespace URI and qualified name.
        /// </summary>
        /// <param name="namespaceURI"> a string that specifies the namespace URI to associate with the element. The namespaceURI property of the created element is initialized with the value of namespaceURI. (see section below for "Valid Namespace URI's")</param>
        /// <param name="qualifiedName">a string that specifies the type of element to be created. The nodeName property of the created element is initialized with the value of qualifiedName</param>
        /// <returns>the created element.</returns>
        public static extern HTMLElement CreateElementNS(string namespaceURI, string qualifiedName);

        /// <summary>
        /// Creates an element with the specified namespace URI and qualified name.
        /// </summary>
        /// <param name="namespaceURI"> a string that specifies the namespace URI to associate with the element. The namespaceURI property of the created element is initialized with the value of namespaceURI. (see section below for "Valid Namespace URI's")</param>
        /// <param name="qualifiedName">a string that specifies the type of element to be created. The nodeName property of the created element is initialized with the value of qualifiedName</param>
        /// <returns>the created element.</returns>
        public static extern T CreateElementNS<T>(string namespaceURI, string qualifiedName) where T : HTMLElement;

        /// <summary>
        /// Creates an event of the type specified. The returned object should be first initialized and can then be passed to element.dispatchEvent.
        /// </summary>
        /// <param name="type">type is a string that represents the type of event to be created. Possible event types include "UIEvents", "MouseEvents", "MutationEvents", and "HTMLEvents".</param>
        /// <returns>the created Event object.</returns>
        public static extern Event CreateEvent(string type);

        /// <summary>
        /// Creates an event of the type specified. The returned object should be first initialized and can then be passed to element.dispatchEvent.
        /// </summary>
        /// <param name="type">type is a string that represents the type of event to be created. Possible event types include "UIEvents", "MouseEvents", "MutationEvents", and "HTMLEvents".</param>
        /// <returns>the created Event object.</returns>
        public static extern T CreateEvent<T>(string type) where T : Event;

        /// <summary>
        /// Returns a new NodeIterator object.
        /// </summary>
        /// <param name="root">The root node at which to begin the NodeIterator's traversal.</param>
        /// <returns></returns>
        public static extern NodeIterator CreateNodeIterator(Node root);

        /// <summary>
        /// Returns a new NodeIterator object.
        /// </summary>
        /// <param name="root">The root node at which to begin the NodeIterator's traversal.</param>
        /// <param name="whatToShow">Bitwise OR'd list of Filter specification constants from the NodeFilter DOM interface, indicating which nodes to iterate over.</param>
        /// <returns></returns>
        public static extern NodeIterator CreateNodeIterator(Node root, NodeFilter whatToShow);

        /// <summary>
        /// Returns a new NodeIterator object.
        /// </summary>
        /// <param name="root">The root node at which to begin the NodeIterator's traversal.</param>
        /// <param name="whatToShow">Bitwise OR'd list of Filter specification constants from the NodeFilter DOM interface, indicating which nodes to iterate over.</param>
        /// <param name="filter">An object implementing the NodeFilter interface; its acceptNode() method will be called for each node in the subtree based at root which is accepted as included by the whatToShow flag to determine whether or not to include it in the list of iterable nodes (a simple callback function may also be used instead). The method should return one of NodeFilter.FILTER_ACCEPT, NodeFilter.FILTER_REJECT, or NodeFilter.FILTER_SKIP.</param>
        /// <returns></returns>
        public static extern NodeIterator CreateNodeIterator(Node root, NodeFilter whatToShow, INodeFilter filter);

        /// <summary>
        /// Creates a new ProcessingInstruction object.
        /// </summary>
        /// <param name="target"> refers to the target part of the processing instruction node</param>
        /// <param name="data">string containing the data to be added to the data within the node.</param>
        /// <returns></returns>
        public static extern ProcessingInstruction CreateProcessingInstruction(string target, string data);

        /// <summary>
        /// Returns a new Range object.
        /// </summary>
        /// <returns></returns>
        public static extern Range CreateRange();

        /// <summary>
        /// Creates a new Text node.
        /// </summary>
        /// <param name="data">string containing the data to be put in the text node.</param>
        /// <returns></returns>
        public static extern Text CreateTextNode(string data);

        /// <summary>
        /// The Document.createTreeWalker() creator method returns a newly created TreeWalker object.
        /// </summary>
        /// <param name="root">Is the root Node of this TreeWalker traversal. Typically this will be an element owned by the document.</param>
        /// <returns></returns>
        public static extern TreeWalker CreateTreeWalker(Node root);

        /// <summary>
        /// The Document.createTreeWalker() creator method returns a newly created TreeWalker object.
        /// </summary>
        /// <param name="root">Is the root Node of this TreeWalker traversal. Typically this will be an element owned by the document.</param>
        /// <param name="whatToShow">Is an optionale unsigned int representing a bitmask created by combining the constant properties of NodeFilter. It is a convenient way of filtering for certain types of node. It defaults to 0xFFFFFFFF representing the SHOW_ALL constant.</param>
        /// <returns></returns>
        public static extern TreeWalker CreateTreeWalker(Node root, NodeFilter whatToShow);

        /// <summary>
        /// The Document.createTreeWalker() creator method returns a newly created TreeWalker object.
        /// </summary>
        /// <param name="root">Is the root Node of this TreeWalker traversal. Typically this will be an element owned by the document.</param>
        /// <param name="whatToShow">Is an optionale unsigned int representing a bitmask created by combining the constant properties of NodeFilter. It is a convenient way of filtering for certain types of node. It defaults to 0xFFFFFFFF representing the SHOW_ALL constant.</param>
        /// <param name="filter">Is an optional NodeFilter, that is an object with a method acceptNode, which is called by the TreeWalker to determine whether or not to accept a node that has passed the whatToShow check.</param>
        /// <returns></returns>
        public static extern TreeWalker CreateTreeWalker(Node root, NodeFilter whatToShow, INodeFilter filter);

        /// <summary>
        /// Returns the element from the document whose elementFromPoint method is being called which is the topmost element which lies under the given point.  To get an element, specify the point via coordinates, in CSS pixels, relative to the upper-left-most point in the window or frame containing the document.
        /// </summary>
        /// <param name="x">x and y specify the coordinates to check, in CSS pixels relative to the upper-left corner of the document's containing window or frame.</param>
        /// <param name="y">x and y specify the coordinates to check, in CSS pixels relative to the upper-left corner of the document's containing window or frame.</param>
        /// <returns></returns>
        public static extern HTMLElement ElementFromPoint(int x, int y);

        /// <summary>
        /// Enables the style sheets matching the specified name in the current style sheet set, and disables all other style sheets (except those without a title, which are always enabled).
        /// </summary>
        /// <param name="name">The name of the style sheets to enable. All style sheets with a title that match this name will be enabled, while all others that have a title will be disabled. Specify an empty string for the name parameter to disable all alternate and preferred style sheets (but not the persistent style sheets; that is, those with no title attribute).</param>
        public static extern void EnableStyleSheetsForSet(string name);

        /// <summary>
        /// The exitPointerLock asynchronously releases a pointer lock previously requested through Element.requestPointerLock.
        /// To track the success or failure of the request, it is necessary to listen for the pointerlockchange and pointerlockerror events.
        /// </summary>
        public static extern void ExitPointerLock();

        /// <summary>
        /// Returns an array-like object of all child elements which have all of the given class names. When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element with the given class names.
        /// </summary>
        /// <param name="names">string representing the list of class names to match; class names are separated by whitespace</param>
        /// <returns>HTMLCollection of found elements.</returns>
        public static extern HTMLCollection GetElementsByClassName(string names);

        /// <summary>
        /// Returns an HTMLCollection of elements with the given tag name. The complete document is searched, including the root node. The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call document.getElementsByTagName() again.
        /// </summary>
        /// <param name="name">a string representing the name of the elements. The special string "*" represents all elements.</param>
        /// <returns> a live HTMLCollection of found elements in the order they appear in the tree.</returns>
        public static extern HTMLCollection GetElementsByTagName(string name);

        /// <summary>
        /// Returns a list of elements with the given tag name belonging to the given namespace. The complete document is searched, including the root node.
        /// </summary>
        /// <param name="namespace"> the namespace URI of elements to look for.</param>
        /// <param name="name"> the local name of elements to look for or the special value "*", which matches all elements</param>
        /// <returns>live NodeList of found elements in the order they appear in the tree.</returns>
        public static extern HTMLCollection GetElementsByTagNameNS(string @namespace, string name);

        /// <summary>
        /// Creates a copy of a node from an external document that can be inserted into the current document.
        /// </summary>
        /// <param name="externalNode">The node from another document to be imported.</param>
        /// <returns>The new node that is imported into the document. The new node's parentNode is null, since it has not yet been inserted into the document tree.</returns>
        public static extern Node ImportNode(Node externalNode);

        /// <summary>
        /// Creates a copy of a node from an external document that can be inserted into the current document.
        /// </summary>
        /// <param name="externalNode">The node from another document to be imported.</param>
        /// <param name="deep">A boolean, indicating whether the descendants of the imported node need to be imported.</param>
        /// <returns>The new node that is imported into the document. The new node's parentNode is null, since it has not yet been inserted into the document tree.</returns>
        public static extern Node ImportNode(Node externalNode, bool deep);

        /// <summary>
        /// Releases mouse capture if it's currently enabled on an element within this document. Enabling mouse capture on an element is done by calling element.setCapture().
        /// </summary>
        public static extern void ReleaseCapture();

        /// <summary>
        /// Returns a reference to the element by its ID.
        /// </summary>
        /// <param name="id">id is a case-sensitive string representing the unique ID of the element being sought.</param>
        /// <returns>element is a reference to an Element object, or null if an element with the specified ID is not in the document.</returns>
        public static extern HTMLElement GetElementById(string id);

        /// <summary>
        /// Returns a reference to the element by its ID.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="id">id is a case-sensitive string representing the unique ID of the element being sought.</param>
        /// <returns>element is a reference to an Element object, or null if an element with the specified ID is not in the document.</returns>
        public static extern T GetElementById<T>(string id) where T : HTMLElement;

        /// <summary>
        /// Returns the first element within the document (using depth-first pre-order traversal of the document's nodes) that matches the specified group of selectors.
        /// </summary>
        /// <param name="selectors">selectors is a string containing one or more CSS selectors separated by commas.</param>
        /// <returns></returns>
        public static extern Element QuerySelector(string selectors);

        /// <summary>
        /// Returns the first element within the document (using depth-first pre-order traversal of the document's nodes) that matches the specified group of selectors.
        /// </summary>
        /// <param name="selectors">selectors is a string containing one or more CSS selectors separated by commas.</param>
        /// <returns></returns>
        public static extern T QuerySelector<T>(string selectors) where T : Element;

        /// <summary>
        /// Returns a list of the elements within the document (using depth-first pre-order traversal of the document's nodes) that match the specified group of selectors. The object returned is a NodeList.
        /// </summary>
        /// <param name="selectors">selectors is a string containing one or more CSS selectors separated by commas.</param>
        /// <returns></returns>
        public static extern NodeList QuerySelectorAll(string selectors);

        /// <summary>
        /// Closes a document stream for writing.
        /// </summary>
        public static extern void Close();

        /// <summary>
        /// When an HTML document has been switched to designMode, the document object exposes the execCommand method which allows one to run commands to manipulate the contents of the editable region. Most commands affect the document's selection (bold, italics, etc), while others insert new elements (adding a link) or affect an entire line (indenting). When using contentEditable, calling execCommand will affect the currently active editable element.
        /// </summary>
        /// <param name="commandName">the name of the command</param>
        /// <returns></returns>
        public static extern bool ExecCommand(string commandName);

        /// <summary>
        /// When an HTML document has been switched to designMode, the document object exposes the execCommand method which allows one to run commands to manipulate the contents of the editable region. Most commands affect the document's selection (bold, italics, etc), while others insert new elements (adding a link) or affect an entire line (indenting). When using contentEditable, calling execCommand will affect the currently active editable element.
        /// </summary>
        /// <param name="commandName">the name of the command</param>
        /// <param name="showDefaultUI">whether the default user interface should be shown. This is not implemented in Mozilla.</param>
        /// <returns></returns>
        public static extern bool ExecCommand(string commandName, bool showDefaultUI);

        /// <summary>
        /// When an HTML document has been switched to designMode, the document object exposes the execCommand method which allows one to run commands to manipulate the contents of the editable region. Most commands affect the document's selection (bold, italics, etc), while others insert new elements (adding a link) or affect an entire line (indenting). When using contentEditable, calling execCommand will affect the currently active editable element.
        /// </summary>
        /// <param name="commandName">the name of the command</param>
        /// <param name="showDefaultUI">whether the default user interface should be shown. This is not implemented in Mozilla.</param>
        /// <param name="valueArgument">some commands (such as insertimage) require an extra value argument (the image's url). Pass an argument of null if no argument is needed.</param>
        /// <returns></returns>
        public static extern bool ExecCommand(string commandName, bool showDefaultUI, string valueArgument);

        /// <summary>
        /// Returns a list of elements with a given name in the (X)HTML document.
        /// </summary>
        /// <param name="name">name is the value of the name attribute of the element.</param>
        /// <returns>elements is an HTMLCollection of elements.</returns>
        public static extern NodeList GetElementsByName(string name);

        /// <summary>
        /// The DOM getSelection() method is available on the Window and Document interfaces.
        /// </summary>
        /// <returns></returns>
        public static extern Selection GetSelection();

        /// <summary>
        /// Returns a Boolean value indicating whether the document or any element inside the document has focus. This method can be used to determine whether the active element in a document has focus.
        /// </summary>
        /// <returns>false if the active element in the document has no focus; true if the active element in the document has focus.</returns>
        public static extern bool HasFocus();

        /// <summary>
        /// Opens a document stream for writing.
        /// </summary>
        /// <returns></returns>
        public static extern DocumentInstance Open();

        /// <summary>
        /// Returns true if the formating command can be executed on the current range.
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        public static extern bool QueryCommandEnabled(string command);

        /// <summary>
        /// Returns true if the formating command is in an indeterminate state on the current range.
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        public static extern bool QueryCommandIndeterm(string command);

        /// <summary>
        /// Returns true if the formating command has been executed on the current range.
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        public static extern bool QueryCommandState(string command);

        /// <summary>
        /// Returns true if the formating command is supported on the current range.
        /// </summary>
        /// <param name="command">The command for which to determine support.</param>
        /// <returns></returns>
        public static extern bool QueryCommandSupported(string command);

        /// <summary>
        /// Returns the current value of the current range for a formating command.
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        public static extern string QueryCommandValue(string command);

        /// <summary>
        /// Writes a string of text to a document stream opened by document.open().
        /// </summary>
        /// <param name="markup">markup is a string containing the text to be written to the document.</param>
        public static extern void Write(string markup);

        /// <summary>
        /// Writes a string of text followed by a newline character to a document.
        /// </summary>
        /// <param name="line">line is string containing a line of text.</param>
        public static extern void Writeln(string line);

        [Template("document")]
        public static DocumentInstance Instance;

        [Template("document")]
        public new static extern dynamic ToDynamic();

        [Template("{this}[{name}].call(null, {args})")]
        public static extern void Call(string name, params object[] args);

        [Template("{this}[{name}].call(null, {args})")]
        public static extern T Call<T>(string name, params object[] args);

        [Template("{this}[{name}]")]
        public static extern object Get(string name);

        [Template("{this}[{name}]")]
        public static extern T Get<T>(string name);

        [Template("{this}[{name}] = {value}")]
        public static extern void Set(string name, object value);

        // TODO: Document.createExpression(String expression, XPathNSResolver resolver)
        // TODO: Document.createNSResolver(Node resolver)
        // TODO: Document.evaluate(String expression, Node contextNode, XPathNSResolver resolver, Number type, Object result)
    }
}