using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
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

        protected virtual void WriteMultiLineComment(string text, bool newline)
        {
            if (!newline && this.RemovePenultimateEmptyLines(true))
            {
                this.Emitter.IsNewLine = false;
                this.WriteSpace();
            }

            this.Write("/* " + text + "*/");
            this.WriteNewLine();
        }

        protected virtual void WriteSingleLineComment(string text, bool newline)
        {
            if (!newline && this.RemovePenultimateEmptyLines(true))
            {
                this.Emitter.IsNewLine = false;
                this.WriteSpace();
            }

            this.Write("//" + text);
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

            if (comment.CommentType == CommentType.MultiLine && injection.Success)
            {
                string code = removeStars.Replace(injection.Groups[1].Value, "$1");

                if (code.EndsWith("@"))
                {
                    code = code.Substring(0, code.Length - 1);
                }

                this.Write(code);
                this.WriteNewLine();
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
