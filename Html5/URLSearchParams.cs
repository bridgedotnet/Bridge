using Bridge;

namespace Bridge.Html5
{
    /// <summary>
    /// The URLSearchParams interface defines utility methods to work with the query string of a URL.
    /// </summary>
    [Ignore]
    [Name("URLSearchParams")]
    public partial class URLSearchParams
    {
        public URLSearchParams()
        {
        }

        /// <summary>
        /// Constructor returning a URLSearchParams object.
        /// </summary>
        /// <param name="init"></param>
        public URLSearchParams(string init)
        {
        }

        /// <summary>
        /// Copy constructor returning a URLSearchParams object.
        /// </summary>
        /// <param name="init"></param>
        public URLSearchParams(URLSearchParams init)
        {
        }

        public virtual void Append(string name, string value)
        {
        }

        public virtual void Delete(string name)
        {
        }

        public virtual string Get(string name)
        {
            return null;
        }

        public virtual string[] GetAll(string name)
        {
            return null;
        }

        public virtual bool Has(string name)
        {
            return false;
        }

        public virtual void Set(string name, string value)
        {
        }
    }
}
