using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;

using System;
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

        protected virtual void WriteMultiLineComment(string text, bool newline, bool wrap, bool alignedIndent, int offsetAlreadyApplied)
        {
            if (!newline && this.RemovePenultimateEmptyLines(true))
            {
                this.Emitter.IsNewLine = false;
                this.WriteSpace();
            }

            string wrapperStart = wrap ? "/* " : null;
            string wrapperEnd = wrap ? "*/" : null;

            var lines = this.GetNormalizedWhitespaceAndAsteriskLines(text, true);

            int offset = 0;

            if (wrap || (lines.Length > 0 && lines[0].Any(x => !char.IsWhiteSpace(x))))
            {
                offset = this.Comment.StartLocation.Column + offsetAlreadyApplied;
            }
            else
            {
                var firstNotEmptyLine = lines.FirstOrDefault(x => !string.IsNullOrEmpty(x));

                if (firstNotEmptyLine != null)
                {
                    for (int i = 0; i < firstNotEmptyLine.Length; i++)
                    {
                        if (!char.IsWhiteSpace(firstNotEmptyLine[i]))
                        {
                            offset = i;
                            break;
                        }
                    }
                }
            }

            if (!wrap)
            {
                // Only if !wrap i.e. in case of injection comment
                this.RemoveFirstAndLastEmptyElements(ref lines);
            }

            this.WriteLinesIndented(lines, offset, wrapperStart, wrapperEnd, alignedIndent);
        }

        protected virtual void WriteSingleLineComment(string text, bool newline, bool wrap, bool alignedIndent, int offsetAlreadyApplied)
        {
            if (!newline && this.RemovePenultimateEmptyLines(true))
            {
                this.Emitter.IsNewLine = false;
                this.WriteSpace();
            }

            string wrapperStart = wrap ? "//" : null;

            var lines = this.GetNormalizedWhitespaceAndAsteriskLines(text, false);

            this.WriteLinesIndented(lines, offsetAlreadyApplied, wrapperStart, null, alignedIndent);
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
                    string code = injection.Groups[1].Value;

                    if (!string.IsNullOrEmpty(code) && code.EndsWith("@"))
                    {
                        code = code.Substring(0, code.Length - 1);
                    }

                    this.WriteMultiLineComment(code, true, false, true, 2);
                }
                else if (comment.CommentType == CommentType.SingleLine)
                {
                    string code = comment.Content;

                    if (!string.IsNullOrEmpty(code) && code.StartsWith("@"))
                    {
                        code = " " + code.Substring(1);
                    }

                    this.WriteSingleLineComment(code, true, false, true, 2);
                }
            }
            else if (comment.CommentType == CommentType.MultiLine)
            {
                this.WriteMultiLineComment(comment.Content, newLine, true, false, 0);
            }
            else if (comment.CommentType == CommentType.SingleLine)
            {
                if (this.Emitter.Rules.InlineComment == InlineCommentRule.Managed)
                {
                    this.WriteSingleLineComment(comment.Content, newLine, true, false, 0);
                }
            }
        }

        private void RemoveFirstAndLastEmptyElements(ref string[] lines)
        {
            if (lines == null || lines.Length <= 0)
            {
                return;
            }

            System.Collections.Generic.List<string> l = null;

            if (string.IsNullOrEmpty(lines[0]))
            {
                l = new System.Collections.Generic.List<string>(lines);
                l.RemoveAt(0);
            }

            if (string.IsNullOrEmpty(lines[lines.Length - 1]))
            {
                if (l == null)
                {
                    l = new System.Collections.Generic.List<string>(lines);
                }

                if (l.Count > 0)
                {
                    l.RemoveAt(l.Count - 1);
                }
            }

            if (l != null)
            {
                lines = l.ToArray();
            }
        }
    }
}