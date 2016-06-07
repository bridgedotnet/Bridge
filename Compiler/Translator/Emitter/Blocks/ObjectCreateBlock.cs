using Bridge.Contract;
using Bridge.Contract.Constants;


using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using Mono.Cecil;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Bridge.Translator
{
    public class ObjectCreateBlock : ConversionBlock
    {
        public ObjectCreateBlock(IEmitter emitter, ObjectCreateExpression objectCreateExpression)
            : base(emitter, objectCreateExpression)
        {
            this.Emitter = emitter;
            this.ObjectCreateExpression = objectCreateExpression;
        }

        public ObjectCreateExpression ObjectCreateExpression
        {
            get;
            set;
        }

        protected override Expression GetExpression()
        {
            return this.ObjectCreateExpression;
        }

        protected override void EmitConversionExpression()
        {
            this.VisitObjectCreateExpression();
        }

        protected void VisitObjectCreateExpression()
        {
            ObjectCreateExpression objectCreateExpression = this.ObjectCreateExpression;
            int pos = this.Emitter.Output.Length;

            var resolveResult = this.Emitter.Resolver.ResolveNode(objectCreateExpression.Type, this.Emitter) as TypeResolveResult;
            bool isTypeParam = resolveResult.Type.Kind == TypeKind.TypeParameter;
            var type = isTypeParam ? null : this.Emitter.GetTypeDefinition(objectCreateExpression.Type);

            if (type != null && type.BaseType != null && type.BaseType.FullName == "System.MulticastDelegate")
            {
                bool wrap = false;
                var parent = objectCreateExpression.Parent as InvocationExpression;
                if (parent != null && parent.Target == objectCreateExpression)
                {
                    wrap = true;
                }

                if (wrap)
                {
                    this.WriteOpenParentheses();
                }

                objectCreateExpression.Arguments.First().AcceptVisitor(this.Emitter);

                if (wrap)
                {
                    this.WriteCloseParentheses();
                }
                return;
            }

            var argsInfo = new ArgumentsInfo(this.Emitter, objectCreateExpression);
            var argsExpressions = argsInfo.ArgumentsExpressions;
            var argsNames = argsInfo.ArgumentsNames;
            var paramsArg = argsInfo.ParamsExpression;
            var argsCount = argsExpressions.Count();

            var invocationResolveResult = this.Emitter.Resolver.ResolveNode(objectCreateExpression, this.Emitter) as InvocationResolveResult;
            string inlineCode = null;

            if (invocationResolveResult != null)
            {
                if (invocationResolveResult.Member.DeclaringType.Kind == TypeKind.Struct && objectCreateExpression.Arguments.Count == 0)
                {
                    var ctors = invocationResolveResult.Member.DeclaringType.GetConstructors(c => c.Parameters.Count == 1);
                    var defCtor = ctors.FirstOrDefault(c => c.Parameters.First().Type.FullName == "System.Runtime.CompilerServices.DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor");

                    if (defCtor != null)
                    {
                        inlineCode = this.Emitter.GetInline(defCtor);
                    }
                }

                if (inlineCode == null)
                {
                    inlineCode = this.Emitter.GetInline(invocationResolveResult.Member);    
                }
            }

            var customCtor = isTypeParam ? "" : (this.Emitter.Validator.GetCustomConstructor(type) ?? "");
            var hasInitializer = !objectCreateExpression.Initializer.IsNull && objectCreateExpression.Initializer.Elements.Count > 0;

            bool isCollectionInitializer = false;
            AstNodeCollection<Expression> elements = null;

            if (hasInitializer)
            {
                elements = objectCreateExpression.Initializer.Elements;
                isCollectionInitializer = elements.Count > 0 && elements.First() is ArrayInitializerExpression;
            }

            if (inlineCode == null && Regex.Match(customCtor, @"\s*\{\s*\}\s*").Success)
            {
                this.WriteOpenBrace();
                this.WriteSpace();

                if (hasInitializer)
                {
                    this.WriteObjectInitializer(objectCreateExpression.Initializer.Elements, this.Emitter.AssemblyInfo.PreserveMemberCase, type, invocationResolveResult);
                    this.WriteSpace();
                }
                else if (this.Emitter.Validator.IsObjectLiteral(type))
                {
                    this.WriteObjectInitializer(null, this.Emitter.AssemblyInfo.PreserveMemberCase, type, invocationResolveResult);
                    this.WriteSpace();
                }

                this.WriteCloseBrace();
            }
            else
            {
                if (hasInitializer)
                {
                    this.Write(JS.Funcs.BRIDGE_MERGE);
                    this.WriteOpenParentheses();
                }

                if (inlineCode != null)
                {
                    new InlineArgumentsBlock(this.Emitter, argsInfo, inlineCode).Emit();
                }
                else
                {
                    if (String.IsNullOrEmpty(customCtor))
                    {
                        this.WriteNew();
                        objectCreateExpression.Type.AcceptVisitor(this.Emitter);
                    }
                    else
                    {
                        this.Write(customCtor);
                    }

                    this.WriteOpenParentheses();

                    if (!isTypeParam && !this.Emitter.Validator.IsIgnoreType(type) && type.Methods.Count(m => m.IsConstructor && !m.IsStatic) > (type.IsValueType ? 0 : 1))
                    {
                        this.WriteScript(OverloadsCollection.Create(this.Emitter, ((InvocationResolveResult)this.Emitter.Resolver.ResolveNode(objectCreateExpression, this.Emitter)).Member).GetOverloadName());

                        if (argsExpressions.Length > 0)
                        {
                            this.WriteComma();
                        }
                    }

                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, objectCreateExpression).Emit();
                    this.WriteCloseParentheses();
                }

                if (hasInitializer)
                {
                    this.WriteComma();

                    bool needComma = false;

                    if (isCollectionInitializer)
                    {
                        this.Write("[");
                        this.WriteNewLine();
                        this.Indent();
                    }
                    else
                    {
                        this.BeginBlock();
                    }

                    foreach (Expression item in elements)
                    {
                        if (needComma)
                        {
                            this.WriteComma(true);
                        }

                        needComma = true;

                        if (item is NamedExpression)
                        {
                            var namedExpression = (NamedExpression)item;
                            new NameBlock(this.Emitter, namedExpression.Name, namedExpression, namedExpression.Expression).Emit();
                        }
                        else if (item is NamedArgumentExpression)
                        {
                            var namedArgumentExpression = (NamedArgumentExpression)item;
                            new NameBlock(this.Emitter, namedArgumentExpression.Name, namedArgumentExpression, namedArgumentExpression.Expression).Emit();
                        }
                        else if (item is ArrayInitializerExpression)
                        {
                            var arrayInitializer = (ArrayInitializerExpression)item;
                            this.Write("[");

                            foreach (var el in arrayInitializer.Elements)
                            {
                                this.EnsureComma(false);
                                el.AcceptVisitor(this.Emitter);
                                this.Emitter.Comma = true;
                            }

                            this.Write("]");
                            this.Emitter.Comma = false;
                        }
                        else if (item is IdentifierExpression)
                        {
                            var identifierExpression = (IdentifierExpression)item;
                            new IdentifierBlock(this.Emitter, identifierExpression).Emit();
                        }
                    }

                    this.WriteNewLine();

                    if (isCollectionInitializer)
                    {
                        this.Outdent();
                        this.Write("]");
                    }
                    else
                    {
                        this.EndBlock();
                    }

                    this.WriteSpace();
                    this.WriteCloseParentheses();
                }
            }

            //Helpers.CheckValueTypeClone(invocationResolveResult, this.ObjectCreateExpression, this, pos);
        }

        protected virtual void WriteObjectInitializer(IEnumerable<Expression> expressions, bool preserveMemberCase, TypeDefinition type, InvocationResolveResult rr)
        {
            bool needComma = false;
            List<string> names = new List<string>();

            if (expressions != null)
            {
                foreach (Expression item in expressions)
                {
                    NamedExpression namedExression = item as NamedExpression;
                    NamedArgumentExpression namedArgumentExpression = item as NamedArgumentExpression;
                    string name = namedExression != null ? namedExression.Name : namedArgumentExpression.Name;

                    if (!preserveMemberCase)
                    {
                        name = Object.Net.Utilities.StringUtils.ToLowerCamelCase(name);
                    }

                    var itemrr = this.Emitter.Resolver.ResolveNode(item, this.Emitter) as MemberResolveResult;
                    if (itemrr != null)
                    {
                        var oc = OverloadsCollection.Create(this.Emitter, itemrr.Member);
                        oc.CancelChangeCase = this.Emitter.IsNativeMember(itemrr.Member.FullName) ? false : preserveMemberCase;
                        name = oc.GetOverloadName();
                    }

                    if (needComma)
                    {
                        this.WriteComma();
                    }

                    needComma = true;

                    Expression expression = namedExression != null ? namedExression.Expression : namedArgumentExpression.Expression;

                    this.Write(name, ": ");
                    expression.AcceptVisitor(this.Emitter);

                    names.Add(name);
                }
            }

            if (this.Emitter.Validator.IsObjectLiteral(type))
            {
                var key = BridgeTypes.GetTypeDefinitionKey(type);
                var tinfo = this.Emitter.Types.FirstOrDefault(t => t.Key == key);

                if (tinfo == null)
                {
                    return;
                }
                var itype = tinfo.Type as ITypeDefinition;

                var mode = 0;
                if (rr != null)
                {
                    if (rr.Member.Parameters.Count == 1 &&
                        rr.Member.Parameters.First().Type.FullName == "Bridge.DefaultValueMode")
                    {
                        var arg = rr.Arguments.FirstOrDefault();
                        if (arg != null && arg.ConstantValue != null)
                        {
                            mode = (int)arg.ConstantValue;
                        }
                    }
                    else if (itype != null)
                    {
                        var attr = this.Emitter.Validator.GetAttribute(itype.Attributes, Translator.Bridge_ASSEMBLY + ".ObjectLiteralAttribute");
                        if (attr.PositionalArguments.Count > 0)
                        {
                            var value = attr.PositionalArguments.First().ConstantValue;

                            if (value != null && value is int)
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

                            if (!preserveMemberCase)
                            {
                                name = Object.Net.Utilities.StringUtils.ToLowerCamelCase(name);
                            }

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
        }
    }
}
