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

        protected virtual void WriteMultiLineComment(string text, bool newline, bool wrap, bool alignedIndent, int offsetAlreadyApplied)
        {
            if (!newline && this.RemovePenultimateEmptyLines(true))
            {
                this.Emitter.IsNewLine = false;
                this.WriteSpace();
            }

            string wrapperStart = wrap ? "/* " : null;
            string wrapperEnd = wrap ? "*/" : null;

            var lines = this.GetNormalizedWhitespaceAndAstericsLines(text, true);

            // Remove first and last empty lines
            if (!wrap && lines.Length > 0)
            {
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

            var indentTrim = this.Comment.StartLocation.Column + offsetAlreadyApplied;

            int? initAttributeMode = GetInitAttributeMode();

            int? customIndent = GetIndentLevelByInitPosition(initAttributeMode);

            this.WriteLinesIndented(lines, indentTrim, wrapperStart, wrapperEnd, customIndent, alignedIndent);
        }

        protected virtual void WriteSingleLineComment(string text, bool newline, bool wrap, bool alignedIndent, int offsetAlreadyApplied)
        {
            if (!newline && this.RemovePenultimateEmptyLines(true))
            {
                this.Emitter.IsNewLine = false;
                this.WriteSpace();
            }

            string wrapperStart = wrap ? "//" : null;

            var lines = this.GetNormalizedWhitespaceAndAstericsLines(text, false);

            int? initAttributeMode = GetInitAttributeMode();

            int? customIndent = GetIndentLevelByInitPosition(initAttributeMode);

            this.WriteLinesIndented(lines, offsetAlreadyApplied, wrapperStart, null, customIndent, alignedIndent);
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
                this.WriteSingleLineComment(comment.Content, newLine, true, false, 0);
            }
        }

        private int? GetInitAttributeMode()
        {
            int? initAttributeMode = null;

            var methodDeclaration = this.Comment.GetParent<MethodDeclaration>();

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
                                    initAttributeMode = (int)argrr.ConstantValue;
                                }
                            }
                        }
                    }
                }
            }

            return initAttributeMode;
        }

        private int? GetIndentLevelByInitPosition(int? initAttributeMode)
        {
            int? customIndent = null;

            if (initAttributeMode.HasValue)
            {
                customIndent = initAttributeMode.Value == 1 /*InitPosition.Before*/ ? 2 : 0;
            }

            return customIndent;
        }
    }
}