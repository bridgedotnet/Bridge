using Bridge;

namespace System.Net.WebSockets
{
    [External]
    [Enum(Emit.StringNameLowerCase)]
    public enum WebSocketMessageType
    {
        Text,
        Binary,
        Close,
    }
}