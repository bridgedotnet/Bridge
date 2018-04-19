namespace System.Net.WebSockets
{
    [Bridge.External]
    [Bridge.Enum(Bridge.Emit.StringNameLowerCase)]
    public enum WebSocketMessageType
    {
        Text,
        Binary,
        Close,
    }
}