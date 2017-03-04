using ICSharpCode.NRefactory.CSharp;
using System.Text;

namespace Bridge.Contract
{
    public interface IAsyncStep
    {
        int FromTaskNumber
        {
            get;
            set;
        }

        int JumpToStep
        {
            get;
            set;
        }

        AstNode JumpToNode
        {
            get;
            set;
        }

        StringBuilder Output
        {
            get;
            set;
        }

        int Step
        {
            get;
            set;
        }

        AstNode Node
        {
            get;
            set;
        }

        object Label
        {
            get; set;
        }
    }
}