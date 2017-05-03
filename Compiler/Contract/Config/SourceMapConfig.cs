using ICSharpCode.NRefactory.CSharp;
using System.Text;

namespace Bridge.Contract
{
    public class SourceMapConfig
    {
        public bool Enabled
        {
            get;
            set;
        }

        public string SourceRoot
        {
            get; set;
        }
    }
}