using Microsoft.CodeAnalysis.CSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.Translator
{
    /// <summary>
    /// This exception should be used in replacers to inform the user when
    /// an issue happened while trying to parse a given block.
    /// The block itself does not have file or line information but will be
    /// able to provide the content failing, while relying on outer exception
    /// handling to be able to print out the currently being mangled file path
    /// if an exception happens.
    /// </summary>
    public class ReplacerException : TranslatorException
    {
        private readonly string envnl = Environment.NewLine;

        public override string Message { get { return message; } }

        private string message;

        public ReplacerException(CSharpSyntaxNode syntaxNode)
        {
            message = syntaxNode.GetType().Name + " parsing exception." + envnl + "Failing block body:" + envnl + syntaxNode.ToString();
        }
        public ReplacerException(CSharpSyntaxNode syntaxNode, Exception innerException) : base(null, innerException)
        {
            message = syntaxNode.GetType().Name + " parsing exception: " + innerException.Message + envnl + "Failing block body:" + envnl + syntaxNode.ToString();
        }

        public ReplacerException(CSharpSyntaxNode syntaxNode, string message)
        {
            message = syntaxNode.GetType().Name + " parsing exception: " + message + envnl + "Failing block body:" + envnl + syntaxNode.ToString();
        }

        public ReplacerException(CSharpSyntaxNode syntaxNode, string message, Exception innerException)
        {
            message = syntaxNode.GetType().Name + " parsing exception: " + message + envnl + "Inner exception: " + innerException.Message + envnl + "Failing block body:" + envnl + syntaxNode.ToString();
        }

    }
}
