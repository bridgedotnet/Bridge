namespace Bridge
{
    /// <summary>
    /// Makes the method to be called once the page is loaded. If using jQuery2, triggers jQuery's event,
    /// otherwise, uses DOMContentReady event from HTML5.
    /// </summary>
    [NonScriptable]
    public class ReadyAttribute : AdapterAttribute
    {
        public const string Format = "Bridge.ready(this.{2});";
        public const string FormatScope = "Bridge.ready(this.{2}, this);";
        public const string Event = "ready";
        public const bool StaticOnly = true;

        public ReadyAttribute()
        {
        }
    }
}