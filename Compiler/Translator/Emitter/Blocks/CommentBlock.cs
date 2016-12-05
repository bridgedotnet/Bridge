using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;

using System.Linq;
using System.Text.RegularExpressions;

namespace Bridge.Translator
{
    public class CommentBlock : AbstractEmitterBlock
    {
        public CommentBlock(IEmitter emitter, Comment comment)
            : base(emitter, comment)
        {
            this.Emitter = emitter;
            this.Comment = comment;
        }

        public Comment Comment
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            this.VisitComment();
        }

        private static Regex injectComment = new Regex("^@(.*)@?$", RegexOptions.Singleline | RegexOptions.IgnoreCase | RegexOptions.Multiline);
        private static Regex removeStars = new Regex("(^\\s*)(\\* )", RegexOptions.Singleline | RegexOptions.IgnoreCase | RegexOptions.Multiline);

        protected virtual void WriteMultiLineComment(string text, bool newline, bool wrap = true)
        {
            bool needRemoveIndent = false;
            var methodDeclaration = this.Comment.GetParent<MethodDeclaration>();
            int mode = 0;

            if (methodDeclaration != null)
            {
                foreach (var attrSection in methodDeclaration.Attributes)
                {
                    foreach (var attr in attrSection.Attributes)
                    {
                        var rr = this.Emitter.Resolver.ResolveNode(attr.Type, this.Emitter);

                        if (rr.Type.FullName == "Bridge.InitAttribute")
                        {
                            if (attr.HasArgumentList && attr.Arguments.Count > 0)
                            {
                                var argExpr = attr.Arguments.First();
                                var argrr = this.Emitter.Resolver.ResolveNode(argExpr, this.Emitter);

                                if (argrr.ConstantValue is int && (int)argrr.ConstantValue > 0)
                                {
                                    mode = (int)argrr.ConstantValue;
                                    needRemoveIndent = true;
                                }
                            }
                        }
                    }
                }
            }

            if (!newline && this.RemovePenultimateEmptyLines(true))
            {
                this.Emitter.IsNewLine = false;
                this.WriteSpace();
            }

            if (needRemoveIndent)
            {
                text = AbstractEmitterBlock.RemoveIndentFromString(text, this.Comment.StartLocation.Column - (mode == 1 ? 5 : 1));
            }

            if (wrap)
            {
                this.Write("/* " + text + "*/");
                this.WriteNewLine();
            }
            else
            {
                this.Write(text);
            }
        }

        protected virtual void WriteSingleLineComment(string text, bool newline, bool wrap = true)
        {
            if (!newline && this.RemovePenultimateEmptyLines(true))
            {
                this.Emitter.IsNewLine = false;
                this.WriteSpace();
            }

            this.Write(wrap ? "//" + text : text);
            this.WriteNewLine();
        }

        protected void VisitComment()
        {
            Comment comment = this.Comment;
            var prev = comment.PrevSibling;
            bool newLine = true;

            if (prev != null && !(prev is NewLineNode) && prev.EndLocation.Line == comment.StartLocation.Line)
            {
                newLine = false;
            }

            Match injection = injectComment.Match(comment.Content);

            if (injection.Success)
            {
                if (comment.CommentType == CommentType.MultiLine)
                {
                    string code = removeStars.Replace(injection.Groups[1].Value, JS.Vars.D + "1");

                    if (code.EndsWith("@"))
                    {
                        code = code.Substring(0, code.Length - 1);
                    }

                    this.WriteMultiLineComment(code, true, false);
                    this.WriteNewLine();
                }
                else if (comment.CommentType == CommentType.SingleLine)
                {
                    string code = comment.Content.StartsWith("@ ") ? comment.Content.Substring(2) : comment.Content;
                    this.WriteSingleLineComment(code, true, false);
                }
            }
            else if (comment.CommentType == CommentType.MultiLine)
            {
                this.WriteMultiLineComment(comment.Content, newLine);
            }
            else if (comment.CommentType == CommentType.SingleLine)
            {
                this.WriteSingleLineComment(comment.Content, newLine);
            }
        }
    }
}