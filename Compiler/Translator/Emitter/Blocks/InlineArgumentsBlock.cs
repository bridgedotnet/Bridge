using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Bridge.Translator
{
    public class InlineArgumentsBlock : AbstractEmitterBlock
    {
        public InlineArgumentsBlock(IEmitter emitter, ArgumentsInfo argsInfo, string inline)
            : base(emitter, argsInfo.Expression)
        {
            this.Emitter = emitter;
            this.ArgumentsInfo = argsInfo;
            this.InlineCode = inline;

            argsInfo.AddExtensionParam();
        }

        public ArgumentsInfo ArgumentsInfo
        {
            get;
            set;
        }

        public string InlineCode
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            this.EmitInlineExpressionList(this.ArgumentsInfo, this.InlineCode);
        }

        private static Regex _formatArg = new Regex(@"\{(\*?)(\w+)(\:(\w+))?\}");

        protected virtual IList<Expression> GetExpressionsByKey(IEnumerable<NamedParamExpression> expressions, string key)
        {
            if (expressions == null)
            {
                return new List<Expression>();
            }

            if (Regex.IsMatch(key, "^\\d+$"))
            {
                var list = new List<Expression>();
                list.Add(expressions.Skip(int.Parse(key)).First().Expression);

                return list;
            }

            return expressions.Where(e => e.Name == key).Select(e => e.Expression).ToList();
        }

        protected virtual AstType GetAstTypeByKey(IEnumerable<TypeParamExpression> types, string key)
        {
            return types.Where(e => e.Name == key && e.AstType != null).Select(e => e.AstType).FirstOrDefault();
        }

        protected virtual IType GetITypeByKey(IEnumerable<TypeParamExpression> types, string key)
        {
            return types.Where(e => e.Name == key && e.IType != null).Select(e => e.IType).FirstOrDefault();
        }

        protected virtual void EmitInlineExpressionList(ArgumentsInfo argsInfo, string inline)
        {
            IEnumerable<NamedParamExpression> expressions = argsInfo.NamedExpressions;
            IEnumerable<TypeParamExpression> typeParams = argsInfo.TypeArguments;
            Expression paramsArg = argsInfo.ParamsExpression;

            var matches = _formatArg.Matches(inline);

            this.Write("");

            inline = _formatArg.Replace(inline, delegate(Match m)
            {
                int count = this.Emitter.Writers.Count;
                string key = m.Groups[2].Value;
                bool isRaw = m.Groups[1].Success && m.Groups[1].Value == "*";
                bool ignoreArray = isRaw || argsInfo.ParamsExpression == null;
                string modifier = m.Groups[1].Success ? m.Groups[4].Value : null;

                StringBuilder oldSb = this.Emitter.Output;
                this.Emitter.Output = new StringBuilder();

                if (key == "this" || key == argsInfo.ThisName || (key == "0" && argsInfo.IsExtensionMethod))
                {
                    string thisValue = argsInfo.GetThisValue();

                    if (thisValue != null)
                    {
                        this.Write(thisValue);
                    }
                }
                else
                {
                    IList<Expression> exprs = this.GetExpressionsByKey(expressions, key);
                    if (exprs.Count > 0)
                    {
                        if (exprs.Count > 1)
                        {
                            if (!ignoreArray)
                            {
                                this.Write("[");
                            }

                            new ExpressionListBlock(this.Emitter, exprs, null).Emit();

                            if (!ignoreArray)
                            {
                                this.Write("]");
                            }
                        }
                        else
                        {
                            string s;
                            if (exprs[0] != null)
                            {
                                var writer = this.SaveWriter();
                                this.NewWriter();
                                exprs[0].AcceptVisitor(this.Emitter);
                                s = this.Emitter.Output.ToString();
                                this.RestoreWriter(writer);

                                if (modifier == "raw")
                                {
                                    s = s.Trim('"');
                                }
                            }
                            else
                            {
                                s = "null";
                            }


                            this.Write(this.WriteIndentToString(s));
                        }
                    }
                    else if (typeParams != null)
                    {
                        var type = this.GetAstTypeByKey(typeParams, key);

                        if (type != null)
                        {
                            type.AcceptVisitor(this.Emitter);
                        }
                        else
                        {
                            var iType = this.GetITypeByKey(typeParams, key);

                            if (iType != null)
                            {
                                new CastBlock(this.Emitter, iType).Emit();
                            }
                        }
                    }
                }

                if (this.Emitter.Writers.Count != count)
                {
                    this.PopWriter();
                }

                string replacement = this.Emitter.Output.ToString();
                this.Emitter.Output = oldSb;

                return replacement;
            });

            this.Write(inline);
        }
    }
}