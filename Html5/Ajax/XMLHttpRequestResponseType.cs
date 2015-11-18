namespace Bridge.Html5
{
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum XMLHttpRequestResponseType
    {
        [Name("")]
        String,

        [Name("arraybuffer")]
        ArrayBuffer,

        Blob,

        Document,

        Json,

        Text
    }
}
