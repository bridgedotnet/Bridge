// https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent

namespace Bridge.Html5
{
    /// <summary>
    /// A MessageEvent interface represents a message received by a target, being a WebSocket or a WebRTC RTCDataChannel.
    /// </summary>
    [External]
    [Name("MessageEvent")]
    public class MessageEvent : Event
    {
        internal extern MessageEvent();

        /// <summary>
        /// Creates a new MessageEvent
        /// </summary>
        /// <param name="typeArg">Is a DOMString representing the name of the event.</param>
        public extern MessageEvent(string typeArg);

        /// <summary>
        /// Creates a new MessageEvent
        /// </summary>
        /// <param name="typeArg">Is a DOMString representing the name of the event.</param>
        /// <param name="messageEventInit">Is a DOMString representing the name of the event</param>
        public extern MessageEvent(string typeArg, MessageEventInit messageEventInit);

        /// <summary>
        /// Returns a DOMString, Blob or an ArrayBuffer containing the data send by the emitter.
        /// </summary>
		public readonly Union<string, Blob, ArrayBuffer> Data;

        public readonly string Origin;

        //https://developer.mozilla.org/en-US/docs/Web/API/MessagePort
        //ports : Array<MessagePort> readonly

        public readonly object Source;
    }

    [External]
    [Name("Object")]
    public class MessageEventInit
    {
        /// <summary>
        /// A DOMString, Blob or an ArrayBuffer containing the data send by the emitter.
        /// </summary>
		public Union<string, Blob, ArrayBuffer> Data;

        public string Origin;

        //https://developer.mozilla.org/en-US/docs/Web/API/MessagePort
        //ports : Array<MessagePort> readonly

        public object Source;
    }
}