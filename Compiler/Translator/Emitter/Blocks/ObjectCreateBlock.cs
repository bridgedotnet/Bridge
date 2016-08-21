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

            var resolveResult = this.Emitter.Resolver.ResolveNode(objectCreateExpression.Type, this.Emitter) as TypeResolveResult;

            if (resolveResult != null && resolveResult.Type.Kind == TypeKind.Enum)
            {
                this.Write("(0)");
                return;
            }

            bool isTypeParam = resolveResult != null && resolveResult.Type.Kind == TypeKind.TypeParameter;
            var invocationResolveResult = this.Emitter.Resolver.ResolveNode(objectCreateExpression, this.Emitter) as InvocationResolveResult;

            if (isTypeParam && invocationResolveResult != null && invocationResolveResult.Member.Parameters.Count == 0)
            {
                this.Write(JS.Funcs.BRIDGE_CREATEINSTANCE);
                this.WriteOpenParentheses();
                this.Write(resolveResult.Type.Name);
                this.WriteCloseParentheses();

                return;
            }

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
            var paramsArg = argsInfo.ParamsExpression;

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

                this.WriteObjectInitializer(objectCreateExpression.Initializer.Elements, this.Emitter.AssemblyInfo.PreserveMemberCase, type, invocationResolveResult);
                this.WriteSpace();

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
                    var ctorMember = ((InvocationResolveResult)this.Emitter.Resolver.ResolveNode(objectCreateExpression, this.Emitter)).Member;
                    var expandParams = ctorMember.Attributes.Any(a => a.AttributeType.FullName == "Bridge.ExpandParamsAttribute");
                    bool applyCtor = false;

                    if (expandParams)
                    {
                        var ctor_rr = this.Emitter.Resolver.ResolveNode(paramsArg, this.Emitter);

                        if (ctor_rr.Type.Kind == TypeKind.Array && !(paramsArg is ArrayCreateExpression) && objectCreateExpression.Arguments.Last() == paramsArg)
                        {
                            this.Write("Bridge.Reflection.applyConstructor(");
                            applyCtor = true;
                        }
                    }

                    if (String.IsNullOrEmpty(customCtor))
                    {
                        if (!applyCtor)
                        {
                            this.WriteNew();
                        }

                        var typerr = this.Emitter.Resolver.ResolveNode(objectCreateExpression.Type, this.Emitter).Type;
                        var isGeneric = typerr.TypeArguments.Count > 0 && !Helpers.IsIgnoreGeneric(typerr, this.Emitter);

                        if (isGeneric && !applyCtor)
                        {
                            this.WriteOpenParentheses();
                        }

                        objectCreateExpression.Type.AcceptVisitor(this.Emitter);

                        if (isGeneric && !applyCtor)
                        {
                            this.WriteCloseParentheses();
                        }
                    }
                    else
                    {
                        this.Write(customCtor);
                    }

                    if (!isTypeParam && !this.Emitter.Validator.IsIgnoreType(type) && type.Methods.Count(m => m.IsConstructor && !m.IsStatic) > (type.IsValueType ? 0 : 1))
                    {
                        this.WriteDot();
                        var name = OverloadsCollection.Create(this.Emitter, ((InvocationResolveResult)this.Emitter.Resolver.ResolveNode(objectCreateExpression, this.Emitter)).Member).GetOverloadName();
                        if (name == JS.Funcs.CONSTRUCTOR)
                        {
                            name = JS.Funcs.DCONSTRUCTOR;
                        }
                        this.Write(name);
                    }

                    if (applyCtor)
                    {
                        this.Write(", ");
                    }
                    else
                    {
                        this.WriteOpenParentheses();
                    }

                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, objectCreateExpression, -1).Emit();
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
                    List<string> inlineInit = new List<string>();
                    foreach (Expression item in elements)
                    {
                        if (needComma)
                        {
                            this.WriteComma(true);
                        }

                        needComma = true;

                        inlineCode = ObjectCreateBlock.GetInlineInit(item, this);

                        if (inlineCode != null)
                        {
                            inlineInit.Add(inlineCode);
                        }
                        else if (item is NamedExpression)
                        {
                            var namedExpression = (NamedExpression)item;
                            new NameBlock(this.Emitter, namedExpression.Name, namedExpression, namedExpression.Expression, true).Emit();
                        }
                        else if (item is NamedArgumentExpression)
                        {
                            var namedArgumentExpression = (NamedArgumentExpression)item;
                            new NameBlock(this.Emitter, namedArgumentExpression.Name, namedArgumentExpression, namedArgumentExpression.Expression, true).Emit();
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

            //Helpers.CheckValueTypeClone(invocationResolveResult, this.ObjectCreateExpression, this, pos);
        }

        public static string GetInlineInit(Expression item, AbstractEmitterBlock block)
        {
            Expression expr = null;
            if (item is NamedExpression)
            {
                var namedExpression = (NamedExpression)item;
                expr = namedExpression.Expression;
            }
            else if (item is NamedArgumentExpression)
            {
                var namedArgumentExpression = (NamedArgumentExpression)item;
                expr = namedArgumentExpression.Expression;
            }

            var rr = block.Emitter.Resolver.ResolveNode(item, block.Emitter);
            string inlineCode = null;
            if (expr != null && rr is MemberResolveResult)
            {
                var member = ((MemberResolveResult)rr).Member;

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

                    bool hasThis = inlineCode.Contains("{this}");
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
                            var argsInfo = new ArgumentsInfo(block.Emitter, item, rr);
                            argsInfo.ArgumentsExpressions = new Expression[] { expr };
                            argsInfo.ArgumentsNames = new string[] { "value" };
                            argsInfo.ThisArgument = "this";
                            argsInfo.NamedExpressions = argsInfo.CreateNamedExpressions(argsInfo.ArgumentsNames, argsInfo.ArgumentsExpressions);

                            inlineCode = inlineCode.Replace("{0}", "[[0]]");
                            new InlineArgumentsBlock(block.Emitter, argsInfo, inlineCode).Emit();
                            inlineCode = block.Emitter.Output.ToString();
                            inlineCode = inlineCode.Replace("[[0]]", "{0}");
                        }
                    }
                    else
                    {
                        if (member.SymbolKind == SymbolKind.Property)
                        {
                            var count = block.Emitter.Writers.Count;
                            block.PushWriter("this." + inlineCode);

                            expr.AcceptVisitor(block.Emitter);

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
            }

            if (inlineCode != null && !inlineCode.Trim().EndsWith(";"))
            {
                inlineCode += ";";
            }

            return inlineCode;
        }

        protected virtual void WriteObjectInitializer(IEnumerable<Expression> expressions, bool preserveMemberCase, TypeDefinition type, InvocationResolveResult rr)
        {
            bool needComma = false;
            List<string> names = new List<string>();

            if (rr != null && this.ObjectCreateExpression.Arguments.Count > 0)
            {
                var args = this.ObjectCreateExpression.Arguments.ToList();
                var arrIsOpen = false;
                for (int i = 0; i < args.Count; i++)
                {
                    Expression expression = args[i];
                    var p = rr.Member.Parameters[i < rr.Member.Parameters.Count ? i : (rr.Member.Parameters.Count - 1)];
                    var name = p.Name;

                    if (needComma)
                    {
                        this.WriteComma();
                    }

                    needComma = true;

                    if (p.IsParams && !arrIsOpen)
                    {
                        arrIsOpen = true;
                        this.Write("[");
                    }

                    this.Write(name, ": ");
                    expression.AcceptVisitor(this.Emitter);

                    names.Add(name);
                }

                if (arrIsOpen)
                {
                    this.Write("]");
                }
            }

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