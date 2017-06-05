using Bridge;

namespace System.Net.WebSockets
{
    /// <summary>
    /// Options to use with a <see cref="ClientWebSocket"/> object.
    /// </summary>
    [External]
    [Reflectable]
    public class ClientWebSocketOptions
    {
        /// <summary>
        /// Adds a sub-protocol to be negotiated during the WebSocket connection handshake.
        /// </summary>
        public extern void AddSubProtocol(string subProtocol);
    }
}