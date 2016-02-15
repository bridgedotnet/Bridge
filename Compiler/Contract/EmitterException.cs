using ICSharpCode.NRefactory.CSharp;
using System;

namespace Bridge.Contract
{
    public class EmitterException : Exception, IVisitorException
    {
        public EmitterException(AstNode node)
            : base()
        {
            this.Node = node;
        }

        public EmitterException(AstNode node, string message)
            : base(message)
        {
            this.Node = node;
        }

        public EmitterException(AstNode node, string message, Exception innerException)
            : base(message, innerException)
        {
            this.Node = node;
        }

        public AstNode Node
        {
            get;
            private set;
        }

        public string FileName
        {
            get
            {
                if (this.Node != null)
                {
                    return this.Node.GetParent<SyntaxTree>().FileName;
                }

                return null;
            }
        }

        public int StartLine
        {
            get
            {
                if (this.Node != null)
                {
                    return this.Node.StartLocation.Line;
                }
                return 0;
            }
        }

        public int StartColumn
        {
            get
            {
                if (this.Node != null)
                {
                    return this.Node.StartLocation.Column;
                }
                return 0;
            }
        }

        public int EndLine
        {
            get
            {
                if (this.Node != null)
                {
                    return this.Node.EndLocation.Line;
                }
                return 0;
            }
        }

        public int EndColumn
        {
            get
            {
                if (this.Node != null)
                {
                    return this.Node.EndLocation.Column;
                }
                return 0;
            }
        }
    }
}