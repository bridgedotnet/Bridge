using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Refactoring;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Mono.Cecil;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Bridge.Translator
{
    public class AttributeCreateBlock : AbstractEmitterBlock
    {
        public AttributeCreateBlock(IEmitter emitter, IAttribute attribute)
            : base(emitter, null)
        {
            this.Emitter = emitter;
            this.Attribute = attribute;
        }

        public IAttribute Attribute
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            IAttribute attribute = this.Attribute;

            var type = this.Emitter.GetTypeDefinition(attribute.AttributeType);

            var argsInfo = new ArgumentsInfo(this.Emitter, attribute);

            string inlineCode = this.Emitter.GetInline(attribute.Constructor);

            var customCtor = this.Emitter.Validator.GetCustomConstructor(type) ?? "";
            var hasInitializer = attribute.NamedArguments.Count > 0;

            if (inlineCode == null && Regex.Match(customCtor, @"\s*\{\s*\}\s*").Success)
            {
                this.WriteOpenBrace();
                this.WriteSpace();

                if (hasInitializer)
                {
                    this.WriteObjectInitializer(attribute.NamedArguments, type, attribute);
                    this.WriteSpace();
                }
                else if (this.Emitter.Validator.IsObjectLiteral(type))
                {
                    this.WriteObjectInitializer(null, type, attribute);
                    this.WriteSpace();
                }

                this.WriteCloseBrace();
            }
            else
            {
                if (hasInitializer)
                {
                    this.Write(JS.Types.Bridge.APPLY);
                    this.WriteOpenParentheses();
                }

                if (inlineCode != null)
                {
                    new InlineArgumentsBlock(this.Emitter, argsInfo, inlineCode, attribute.Constructor).Emit();
                }
                else
                {
                    if (String.IsNullOrEmpty(customCtor))
                    {
                        this.WriteNew();
                        this.Write(BridgeTypes.ToJsName(attribute.AttributeType, this.Emitter));
                    }
                    else
                    {
                        this.Write(customCtor);
                    }

                    if (!this.Emitter.Validator.IsExternalType(type) && type.Methods.Count(m => m.IsConstructor && !m.IsStatic) > (type.IsValueType ? 0 : 1))
                    {
                        this.WriteDot();
                        var name = OverloadsCollection.Create(this.Emitter, attribute.Constructor).GetOverloadName();
                        this.Write(name);
                    }

                    this.WriteOpenParentheses();

                    this.WritePositionalList(attribute.PositionalArguments, attribute);
                    this.WriteCloseParentheses();
                }

                if (hasInitializer)
                {
                    this.WriteComma();

                    this.BeginBlock();

                    var inlineInit = this.WriteObjectInitializer(attribute.NamedArguments, type, attribute);

                    this.WriteNewLine();

                    this.EndBlock();

                    if (inlineInit.Count > 0)
                    {
                        this.Write(", function () ");
                        this.BeginBlock();

                        foreach (var init in inlineInit)
                        {
                            this.Write(init);
                            this.WriteNewLine();
                        }

                        this.EndBlock();
                    }

                    this.WriteSpace();
                    this.WriteCloseParentheses();
                }
            }
        }

        protected virtual void WritePositionalList(IList<ResolveResult> expressions, IAttribute attr)
        {
            bool needComma = false;
            int count = this.Emitter.Writers.Count;
            bool expanded = false;
            int paramsIndex = -1;

            if (attr.Constructor.Parameters.Any(p => p.IsParams))
            {
                paramsIndex = attr.Constructor.Parameters.IndexOf(attr.Constructor.Parameters.FirstOrDefault(p => p.IsParams));
                var or = new OverloadResolution(this.Emitter.Resolver.Compilation, expressions.ToArray());
                or.AddCandidate(attr.Constructor);
                expanded = or.BestCandidateIsExpandedForm;
            }

            for (int i = 0; i < expressions.Count; i++)
            {
                var expr = expressions[i];

                if (needComma)
                {
                    this.WriteComma();
                }

                needComma = true;

                if (expanded && paramsIndex == i)
                {
                    this.WriteOpenBracket();
                }

                AttributeCreateBlock.WriteResolveResult(expr, this);

                if (this.Emitter.Writers.Count != count)
                {
                    this.PopWriter();
                    count = this.Emitter.Writers.Count;
                }
            }

            if (expanded)
            {
                this.WriteCloseBracket();
            }
        }

        public static void WriteResolveResult(ResolveResult rr, AbstractEmitterBlock block)
        {
            if (rr is ConversionResolveResult)
            {
                rr = ((ConversionResolveResult)rr).Input;
            }

            if (rr is TypeOfResolveResult)
            {
                block.Write(BridgeTypes.ToJsName(((TypeOfResolveResult)rr).ReferencedType, block.Emitter));
            }
            else if (rr is ArrayCreateResolveResult)
            {
                TypeSystemAstBuilder typeBuilder =
                    new TypeSystemAstBuilder(new CSharpResolver(block.Emitter.Resolver.Compilation));
                var expression = typeBuilder.ConvertConstantValue(rr) as ArrayCreateExpression;
                new ArrayCreateBlock(block.Emitter, expression, (ArrayCreateResolveResult)rr).Emit();
            }
            else if (rr is MemberResolveResult)
            {
                var mrr = (MemberResolveResult)rr;

                if (mrr.IsCompileTimeConstant && mrr.Member.DeclaringType.Kind == TypeKind.Enum)
                {
                    var typeDef = mrr.Member.DeclaringType as DefaultResolvedTypeDefinition;

                    if (typeDef != null)
                    {
                        var enumMode = Helpers.EnumEmitMode(typeDef);

                        if ((block.Emitter.Validator.IsExternalType(typeDef) && enumMode == -1) || enumMode == 2)
                        {
                            block.WriteScript(mrr.ConstantValue);

                            return;
                        }

                        if (enumMode >= 3 && enumMode < 7)
                        {
                            string enumStringName = mrr.Member.Name;
                            var attr = Helpers.GetInheritedAttribute(mrr.Member,
                                Translator.Bridge_ASSEMBLY + ".NameAttribute");

                            if (attr != null)
                            {
                                enumStringName = block.Emitter.GetEntityName(mrr.Member);
                            }
                            else
                            {
                                switch (enumMode)
                                {
                                    case 3:
                                        enumStringName =
                                            Object.Net.Utilities.StringUtils.ToLowerCamelCase(mrr.Member.Name);
                                        break;

                                    case 4:
                                        break;

                                    case 5:
                                        enumStringName = enumStringName.ToLowerInvariant();
                                        break;

                                    case 6:
                                        enumStringName = enumStringName.ToUpperInvariant();
                                        break;
                                }
                            }

                            block.WriteScript(enumStringName);
                        }
                        else
                        {
                            block.WriteScript(rr.ConstantValue);
                        }
                    }
                }
                else
                {
                    block.WriteScript(rr.ConstantValue);
                }
            }
            else
            {
                block.WriteScript(rr.ConstantValue);
            }
        }

        public static string GetInlineInit(KeyValuePair<IMember, ResolveResult> item, AbstractEmitterBlock block)
        {
            string inlineCode = null;
            var member = item.Key;

            if (member is IProperty)
            {
                var setter = ((IProperty)member).Setter;
                if (setter != null)
                {
                    inlineCode = block.Emitter.GetInline(setter);
                }
            }
            else
            {
                inlineCode = block.Emitter.GetInline(member);
            }

            if (inlineCode != null)
            {
                bool oldIsAssignment = block.Emitter.IsAssignment;
                bool oldUnary = block.Emitter.IsUnaryAccessor;
                var oldWriter = block.SaveWriter();
                block.NewWriter();
                block.Emitter.IsAssignment = true;
                block.Emitter.IsUnaryAccessor = false;

                bool hasThis = Helpers.HasThis(inlineCode);
                inlineCode = Helpers.ConvertTokens(block.Emitter, inlineCode, member);
                if (inlineCode.StartsWith("<self>"))
                {
                    hasThis = true;
                    inlineCode = inlineCode.Substring(6);
                }

                if (hasThis)
                {
                    inlineCode = inlineCode.Replace("{this}", "this");

                    if (member is IProperty)
                    {
                        inlineCode = inlineCode.Replace("{0}", "[[0]]");

                        AttributeCreateBlock.WriteResolveResult(item.Value, block);
                        var value = block.Emitter.Output.ToString();
                        inlineCode = inlineCode.Replace("{value}", value);
                        inlineCode = inlineCode.Replace("[[0]]", "{0}");
                    }
                }
                else
                {
                    if (member.SymbolKind == SymbolKind.Property)
                    {
                        var count = block.Emitter.Writers.Count;
                        block.PushWriter("this." + inlineCode);
                        AttributeCreateBlock.WriteResolveResult(item.Value, block);

                        if (block.Emitter.Writers.Count > count)
                        {
                            inlineCode = block.PopWriter(true);
                        }
                    }
                    else
                    {
                        block.Write("this." + inlineCode);
                    }
                }

                block.Emitter.IsAssignment = oldIsAssignment;
                block.Emitter.IsUnaryAccessor = oldUnary;
                block.RestoreWriter(oldWriter);
            }

            if (inlineCode != null && !inlineCode.Trim().EndsWith(";"))
            {
                inlineCode += ";";
            }

            return inlineCode;
        }

        protected virtual List<string> WriteObjectInitializer(IList<KeyValuePair<IMember, ResolveResult>> expressions, TypeDefinition type, IAttribute attr)
        {
            bool needComma = false;
            List<string> names = new List<string>();
            List<string> inlineInit = new List<string>();

            if (expressions != null)
            {
                foreach (KeyValuePair<IMember, ResolveResult> item in expressions)
                {
                    var member = item.Key;
                    var name = this.Emitter.GetEntityName(member);

                    var inlineCode = AttributeCreateBlock.GetInlineInit(item, this);

                    if (inlineCode != null)
                    {
                        inlineInit.Add(inlineCode);
                    }
                    else
                    {
                        if (member is IProperty)
                        {
                            name = Helpers.GetPropertyRef(member, this.Emitter, true);
                        }
                        else if (member is IEvent)
                        {
                            name = Helpers.GetEventRef(member, this.Emitter, false);
                        }

                        if (needComma)
                        {
                            this.WriteComma();
                        }

                        needComma = true;

                        this.Write(name, ": ");

                        AttributeCreateBlock.WriteResolveResult(item.Value, this);

                        names.Add(name);
                    }
                }
            }

            if (this.Emitter.Validator.IsObjectLiteral(type))
            {
                var key = BridgeTypes.GetTypeDefinitionKey(type);
                var tinfo = this.Emitter.Types.FirstOrDefault(t => t.Key == key);

                if (tinfo == null)
                {
                    return inlineInit;
                }
                var itype = tinfo.Type as ITypeDefinition;

                var mode = 0;
                if (attr.Constructor != null)
                {
                    if (itype != null)
                    {
                        var oattr = this.Emitter.Validator.GetAttribute(itype.Attributes, Translator.Bridge_ASSEMBLY + ".ObjectLiteralAttribute");
                        if (oattr.PositionalArguments.Count > 0)
                        {
                            var value = oattr.PositionalArguments.First().ConstantValue;

                            if (value is int)
                            {
                                mode = (int)value;
                            }
                        }
                    }
                }

                if (mode != 0)
                {
                    var members = tinfo.InstanceConfig.Fields.Concat(tinfo.InstanceConfig.Properties);

                    if (members.Any())
                    {
                        foreach (var member in members)
                        {
                            if (mode == 1 && (member.VarInitializer == null || member.VarInitializer.Initializer.IsNull))
                            {
                                continue;
                            }

                            var name = member.GetName(this.Emitter);

                            if (names.Contains(name))
                            {
                                continue;
                            }

                            if (needComma)
                            {
                                this.WriteComma();
                            }

                            needComma = true;

                            this.Write(name, ": ");

                            var primitiveExpr = member.Initializer as PrimitiveExpression;

                            if (primitiveExpr != null && primitiveExpr.Value is AstType)
                            {
                                this.Write(Inspector.GetStructDefaultValue((AstType)primitiveExpr.Value, this.Emitter));
                            }
                            else
                            {
                                member.Initializer.AcceptVisitor(this.Emitter);
                            }
                        }
                    }
                }
            }

            return inlineInit;
        }
    }
}