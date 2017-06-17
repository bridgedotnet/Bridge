using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using ICSharpCode.NRefactory.MonoCSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using EmptyStatement = ICSharpCode.NRefactory.CSharp.EmptyStatement;

namespace Bridge.Translator
{
    public class ForeachBlock : AbstractEmitterBlock
    {
        public ForeachBlock(IEmitter emitter, ForeachStatement foreachStatement)
            : base(emitter, foreachStatement)
        {
            this.Emitter = emitter;
            this.ForeachStatement = foreachStatement;
        }

        public ForeachStatement ForeachStatement
        {
            get;
            set;
        }

        public IMethod CastMethod
        {
            get; set;
        }

        protected override void DoEmit()
        {
            var awaiters = this.Emitter.IsAsync ? this.GetAwaiters(this.ForeachStatement) : null;

            if (awaiters != null && awaiters.Length > 0)
            {
                this.VisitAsyncForeachStatement();
            }
            else
            {
                this.VisitForeachStatement();
            }
        }

        protected virtual string GetNextIteratorName()
        {
            var index = this.Emitter.IteratorCount++;
            var result = JS.Vars.ITERATOR;

            if (index > 0)
            {
                result += index;
            }

            return result;
        }

        protected void VisitAsyncForeachStatement()
        {
            ForeachStatement foreachStatement = this.ForeachStatement;

            if (foreachStatement.EmbeddedStatement is EmptyStatement)
            {
                return;
            }

            var oldValue = this.Emitter.ReplaceAwaiterByVar;
            var jumpStatements = this.Emitter.JumpStatements;
            this.Emitter.JumpStatements = new List<IJumpInfo>();
            this.WriteAwaiters(foreachStatement.InExpression);

            bool containsAwaits = false;
            var awaiters = this.GetAwaiters(foreachStatement.EmbeddedStatement);

            if (awaiters != null && awaiters.Length > 0)
            {
                containsAwaits = true;
            }

            this.Emitter.ReplaceAwaiterByVar = true;

            if (!containsAwaits)
            {
                this.VisitForeachStatement(oldValue);
                return;
            }

            var iteratorName = this.AddLocal(this.GetTempVarName(), null, AstType.Null);

            var for_rr = (ForEachResolveResult)this.Emitter.Resolver.ResolveNode(foreachStatement, this.Emitter);
            var get_rr = for_rr.GetEnumeratorCall as InvocationResolveResult;
            var in_rr = this.Emitter.Resolver.ResolveNode(foreachStatement.InExpression, this.Emitter);
            var inline = get_rr != null ? this.Emitter.GetInline(get_rr.Member) : null;
            var checkEnum = in_rr.Type.Kind != TypeKind.Array && !in_rr.Type.IsKnownType(KnownTypeCode.String) &&
                           !in_rr.Type.IsKnownType(KnownTypeCode.Array);
            var isGenericEnumerable = for_rr.CollectionType.IsParameterized &&
                                      for_rr.CollectionType.FullName == "System.Collections.Generic.IEnumerable";
            var emitInline = checkEnum && !isGenericEnumerable && inline != null;

            this.Write(iteratorName, " = ");

            if (!emitInline)
            {
                this.Write(JS.Funcs.BRIDGE_GET_ENUMERATOR);
                this.WriteOpenParentheses();
                foreachStatement.InExpression.AcceptVisitor(this.Emitter);
            }

            if (checkEnum)
            {
                if (for_rr.CollectionType.IsParameterized &&
                for_rr.CollectionType.FullName == "System.Collections.Generic.IEnumerable")
                {
                    this.WriteComma(false);
                    this.Write(BridgeTypes.ToJsName(((ParameterizedType)for_rr.CollectionType).TypeArguments[0], this.Emitter));
                }
                else if (get_rr != null)
                {
                    if (inline != null)
                    {
                        var argsInfo = new ArgumentsInfo(this.Emitter, foreachStatement.InExpression, get_rr);
                        new InlineArgumentsBlock(this.Emitter, argsInfo, inline).Emit();
                    }
                    else
                    {
                        var name = OverloadsCollection.Create(this.Emitter, get_rr.Member).GetOverloadName();

                        if (name != "getEnumerator" && name != "System$Collections$IEnumerable$getEnumerator")
                        {
                            this.WriteComma(false);
                            this.WriteScript(name);
                        }
                    }
                }
            }

            this.Emitter.ReplaceAwaiterByVar = oldValue;
            if (!emitInline)
            {
                this.WriteCloseParentheses();
            }
            this.WriteSemiColon();
            this.WriteNewLine();
            this.Write(JS.Vars.ASYNC_STEP + " = " + this.Emitter.AsyncBlock.Step + ";");
            this.WriteNewLine();
            this.Write("continue;");
            this.WriteNewLine();

            IAsyncStep conditionStep = this.Emitter.AsyncBlock.AddAsyncStep();

            this.WriteIf();
            this.WriteOpenParentheses();
            this.Write(iteratorName);
            this.WriteDot();
            this.Write(JS.Funcs.MOVE_NEXT);
            this.WriteOpenCloseParentheses();
            this.WriteCloseParentheses();
            this.WriteSpace();
            this.BeginBlock();

            this.PushLocals();

            var varName = this.AddLocal(foreachStatement.VariableName, foreachStatement.VariableNameToken, foreachStatement.VariableType);

            this.WriteVar();
            this.Write(varName + " = ");

            var rr = this.Emitter.Resolver.ResolveNode(foreachStatement, this.Emitter) as ForEachResolveResult;

            bool isReferenceLocal = false;

            if (this.Emitter.LocalsMap != null && this.Emitter.LocalsMap.ContainsKey(rr.ElementVariable))
            {
                isReferenceLocal = this.Emitter.LocalsMap[rr.ElementVariable].EndsWith(".v");
            }

            if (isReferenceLocal)
            {
                this.Write("{ v : ");
            }

            string castCode = this.GetCastCode(rr.ElementType, rr.ElementVariable.Type);

            if (castCode != null)
            {
                this.EmitInlineCast(iteratorName + "." + JS.Funcs.GET_CURRENT, castCode);
            }
            else if (this.CastMethod != null)
            {
                this.Write(BridgeTypes.ToJsName(this.CastMethod.DeclaringType, this.Emitter));
                this.WriteDot();
                this.Write(OverloadsCollection.Create(this.Emitter, this.CastMethod).GetOverloadName());
                this.WriteOpenParentheses();
                var pos = this.Emitter.Output.Length;
                this.Write(iteratorName + "." + JS.Funcs.GET_CURRENT);
                Helpers.CheckValueTypeClone(rr, this.ForeachStatement.InExpression, this, pos);
                this.WriteCloseParentheses();
            }
            else
            {
                var needCast = !rr.ElementType.Equals(rr.ElementVariable.Type);
                if (needCast)
                {
                    this.Write(JS.Funcs.BRIDGE_CAST);
                    this.WriteOpenParentheses();
                }

                var pos = this.Emitter.Output.Length;
                this.Write(iteratorName);

                this.WriteDot();
                this.Write(JS.Funcs.GET_CURRENT);
                Helpers.CheckValueTypeClone(rr, this.ForeachStatement.InExpression, this, pos);

                if (needCast)
                {
                    this.Write(", ", BridgeTypes.ToJsName(rr.ElementVariable.Type, this.Emitter), ")");
                }
            }

            if (isReferenceLocal)
            {
                this.Write(" }");
            }

            this.WriteSemiColon();
            this.WriteNewLine();

            this.Write(JS.Vars.ASYNC_STEP + " = " + this.Emitter.AsyncBlock.Step + ";");
            this.WriteNewLine();
            this.Write("continue;");

            BlockStatement block = foreachStatement.EmbeddedStatement as BlockStatement;

            var writer = this.SaveWriter();
            this.Emitter.AsyncBlock.AddAsyncStep();
            this.Emitter.IgnoreBlock = foreachStatement.EmbeddedStatement;
            var startCount = this.Emitter.AsyncBlock.Steps.Count;

            if (block != null)
            {
                block.AcceptChildren(this.Emitter);
            }
            else
            {
                foreachStatement.EmbeddedStatement.AcceptVisitor(this.Emitter);
            }

            IAsyncStep loopStep = null;

            if (this.Emitter.AsyncBlock.Steps.Count > startCount)
            {
                loopStep = this.Emitter.AsyncBlock.Steps.Last();
                loopStep.JumpToStep = conditionStep.Step;
            }

            this.RestoreWriter(writer);

            if (!AbstractEmitterBlock.IsJumpStatementLast(this.Emitter.Output.ToString()))
            {
                this.Write(JS.Vars.ASYNC_STEP + " = " + conditionStep.Step + ";");
                this.WriteNewLine();
                this.Write("continue;");
                this.WriteNewLine();
            }

            this.PopLocals();

            this.WriteNewLine();
            this.EndBlock();
            this.WriteNewLine();

            var nextStep = this.Emitter.AsyncBlock.AddAsyncStep();
            conditionStep.JumpToStep = nextStep.Step;

            if (this.Emitter.JumpStatements.Count > 0)
            {
                this.Emitter.JumpStatements.Sort((j1, j2) => -j1.Position.CompareTo(j2.Position));
                foreach (var jump in this.Emitter.JumpStatements)
                {
                    jump.Output.Insert(jump.Position, jump.Break ? nextStep.Step : conditionStep.Step);
                }
            }

            this.Emitter.JumpStatements = jumpStatements;
        }

        protected void VisitForeachStatement(bool? replaceAwaiterByVar = null)
        {
            ForeachStatement foreachStatement = this.ForeachStatement;
            var jumpStatements = this.Emitter.JumpStatements;
            this.Emitter.JumpStatements = null;

            if (foreachStatement.EmbeddedStatement is EmptyStatement)
            {
                return;
            }

            this.WriteSourceMapName(foreachStatement.VariableName);
            var iteratorVar = this.GetTempVarName();
            var iteratorName = this.AddLocal(iteratorVar, null, AstType.Null);

            var rr = (ForEachResolveResult)this.Emitter.Resolver.ResolveNode(foreachStatement, this.Emitter);
            var get_rr = rr.GetEnumeratorCall as InvocationResolveResult;
            var in_rr = this.Emitter.Resolver.ResolveNode(foreachStatement.InExpression, this.Emitter);
            var inline = get_rr != null ? this.Emitter.GetInline(get_rr.Member) : null;
            var checkEnum = in_rr.Type.Kind != TypeKind.Array && !in_rr.Type.IsKnownType(KnownTypeCode.String) &&
                           !in_rr.Type.IsKnownType(KnownTypeCode.Array);
            var isGenericEnumerable = rr.CollectionType.IsParameterized &&
                                      rr.CollectionType.FullName == "System.Collections.Generic.IEnumerable";
            var emitInline = checkEnum && !isGenericEnumerable && inline != null;

            this.Write(iteratorName, " = ");

            if (!emitInline)
            {
                this.Write(JS.Funcs.BRIDGE_GET_ENUMERATOR);
                this.WriteOpenParentheses();
                foreachStatement.InExpression.AcceptVisitor(this.Emitter);
            }

            if (checkEnum)
            {
                if (isGenericEnumerable)
                {
                    this.WriteComma(false);
                    this.Write(BridgeTypes.ToJsName(((ParameterizedType)rr.CollectionType).TypeArguments[0], this.Emitter));
                }
                else if (get_rr != null)
                {
                    if (inline != null)
                    {
                        var argsInfo = new ArgumentsInfo(this.Emitter, foreachStatement.InExpression, get_rr);
                        new InlineArgumentsBlock(this.Emitter, argsInfo, inline).Emit();
                    }
                    else
                    {
                        var name = OverloadsCollection.Create(this.Emitter, get_rr.Member).GetOverloadName();

                        if (name != "getEnumerator" && name != "System$Collections$IEnumerable$getEnumerator")
                        {
                            this.WriteComma(false);
                            this.WriteScript(name);
                        }
                    }
                }
            }

            if (!emitInline)
            {
                this.WriteCloseParentheses();
            }
            this.WriteSemiColon();
            this.WriteNewLine();

            this.WriteTry();
            this.BeginBlock();
            this.WriteWhile();
            this.WriteOpenParentheses();
            this.Write(iteratorName);
            this.WriteDot();
            this.Write(JS.Funcs.MOVE_NEXT);
            this.WriteOpenCloseParentheses();
            this.WriteCloseParentheses();
            this.WriteSpace();
            this.BeginBlock();

            this.PushLocals();
            Action ac = () =>
            {
                bool isReferenceLocal = false;

                if (this.Emitter.LocalsMap != null && this.Emitter.LocalsMap.ContainsKey(rr.ElementVariable))
                {
                    isReferenceLocal = this.Emitter.LocalsMap[rr.ElementVariable].EndsWith(".v");
                }

                var varName = this.AddLocal(foreachStatement.VariableName, foreachStatement.VariableNameToken, foreachStatement.VariableType);

                this.WriteVar();
                this.Write(varName + " = ");

                if (isReferenceLocal)
                {
                    this.Write("{ v : ");
                }

                string castCode = this.GetCastCode(rr.ElementType, rr.ElementVariable.Type);

                if (castCode != null)
                {
                    this.EmitInlineCast(iteratorName + "." + JS.Funcs.GET_CURRENT, castCode);
                }
                else if (this.CastMethod != null)
                {
                    this.Write(BridgeTypes.ToJsName(this.CastMethod.DeclaringType, this.Emitter));
                    this.WriteDot();
                    this.Write(OverloadsCollection.Create(this.Emitter, this.CastMethod).GetOverloadName());
                    this.WriteOpenParentheses();
                    int pos = this.Emitter.Output.Length;
                    this.Write(iteratorName + "." + JS.Funcs.GET_CURRENT);
                    Helpers.CheckValueTypeClone(rr, this.ForeachStatement.InExpression, this, pos);
                    this.WriteCloseParentheses();
                }
                else
                {
                    var needCast = !rr.ElementType.Equals(rr.ElementVariable.Type);
                    if (needCast)
                    {
                        this.Write(JS.Funcs.BRIDGE_CAST);
                        this.WriteOpenParentheses();
                    }
                    int pos = this.Emitter.Output.Length;
                    this.Write(iteratorName);

                    this.WriteDot();
                    this.Write(JS.Funcs.GET_CURRENT);

                    Helpers.CheckValueTypeClone(rr, this.ForeachStatement.InExpression, this, pos);

                    if (needCast)
                    {
                        this.Write(", ", BridgeTypes.ToJsName(rr.ElementVariable.Type, this.Emitter), ")");
                    }
                }

                if (isReferenceLocal)
                {
                    this.Write(" }");
                }

                this.WriteSemiColon();
                this.WriteNewLine();
            };
            this.Emitter.BeforeBlock = ac;

            BlockStatement block = foreachStatement.EmbeddedStatement as BlockStatement;

            if (replaceAwaiterByVar.HasValue)
            {
                this.Emitter.ReplaceAwaiterByVar = replaceAwaiterByVar.Value;
            }

            if (block != null)
            {
                this.Emitter.NoBraceBlock = block;
            }

            foreachStatement.EmbeddedStatement.AcceptVisitor(this.Emitter);

            this.PopLocals();

            if (!this.Emitter.IsNewLine)
            {
                this.WriteNewLine();
            }

            this.EndBlock();
            this.WriteNewLine();

            this.EndBlock();
            this.WriteSpace();
            this.WriteFinally();
            this.BeginBlock();
            this.Write($"if ({JS.Types.Bridge.IS}({iteratorName}, {JS.Types.System.IDisposable.NAME})) ");
            this.BeginBlock();
            this.Write($"{iteratorName}.{JS.Types.System.IDisposable.INTERFACE_DISPOSE}();");
            this.WriteNewLine();
            this.EndBlock();
            this.WriteNewLine();
            this.EndBlock();
            this.Emitter.JumpStatements = jumpStatements;
        }

        protected virtual string GetCastCode(IType fromType, IType toType)
        {
            string inline = null;

            var method = this.GetCastMethod(fromType, toType, out inline);

            if (method == null && (NullableType.IsNullable(fromType) || NullableType.IsNullable(toType)))
            {
                method = this.GetCastMethod(NullableType.IsNullable(fromType) ? NullableType.GetUnderlyingType(fromType) : fromType,
                                            NullableType.IsNullable(toType) ? NullableType.GetUnderlyingType(toType) : toType, out inline);
            }

            this.CastMethod = method;
            return inline;
        }

        protected virtual void EmitInlineCast(string thisExpr, string castCode)
        {
            this.Write("");
            string name;

            if (this.CastMethod == null)
            {
                name = "{this}";
            }
            else
            {
                name = "{" + this.CastMethod.Parameters[0].Name + "}";
                if (!castCode.Contains(name))
                {
                    name = "{this}";
                }
            }

            if (castCode.Contains(name))
            {
                castCode = castCode.Replace(name, thisExpr);
            }

            this.Write(castCode);
        }

        public IMethod GetCastMethod(IType fromType, IType toType, out string template)
        {
            string inline = null;
            var method = fromType.GetMethods().FirstOrDefault(m =>
            {
                if (m.IsOperator && (m.Name == "op_Explicit" || m.Name == "op_Implicit") &&
                    m.Parameters.Count == 1 &&
                    m.ReturnType.ReflectionName == toType.ReflectionName &&
                    m.Parameters[0].Type.ReflectionName == fromType.ReflectionName
                    )
                {
                    inline = this.Emitter.GetInline(m);
                    return true;
                }

                return false;
            });

            if (method == null)
            {
                method = toType.GetMethods().FirstOrDefault(m =>
                {
                    if (m.IsOperator && (m.Name == "op_Explicit" || m.Name == "op_Implicit") &&
                        m.Parameters.Count == 1 &&
                        m.ReturnType.ReflectionName == toType.ReflectionName &&
                        (m.Parameters[0].Type.ReflectionName == fromType.ReflectionName)
                        )
                    {
                        inline = this.Emitter.GetInline(m);
                        return true;
                    }

                    return false;
                });
            }

            template = inline;
            return method;
        }
    }
}