namespace Bridge.Html5
{
    [External]
    [Name("DOMStringMap")]
    public class DOMStringMap
    {
        extern internal DOMStringMap();

        public extern new virtual string this[string name] { get; set; }
    }
}