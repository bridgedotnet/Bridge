namespace Bridge.Html5
{
    /// <summary>
    /// The URLSearchParams interface defines utility methods to work with the query string of a URL.
    /// </summary>
    [External]
    [Name("URLSearchParams")]
    public partial class URLSearchParams
    {
        public extern URLSearchParams();

        /// <summary>
        /// Constructor returning a URLSearchParams object.
        /// </summary>
        /// <param name="init"></param>
        public extern URLSearchParams(string init);
        /// <summary>
        /// Copy constructor returning a URLSearchParams object.
        /// </summary>
        /// <param name="init"></param>
        public extern URLSearchParams(URLSearchParams init);

        public virtual extern void Append(string name, string value);

        public virtual extern void Delete(string name);

        public virtual extern string Get(string name);

        public virtual extern string[] GetAll(string name);

        public virtual extern bool Has(string name);

        public virtual extern void Set(string name, string value);
    }
}