using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Mono.Cecil;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Bridge.Translator
{
    public partial class Emitter
    {
        protected virtual HashSet<string> CreateNamespaces()
        {
            var result = new HashSet<string>();

            foreach (string typeName in this.TypeDefinitions.Keys)
            {
                int index = typeName.LastIndexOf('.');

                if (index >= 0)
                {
                    this.RegisterNamespace(typeName.Substring(0, index), result);
                }
            }

            return result;
        }

        protected virtual void RegisterNamespace(string ns, ICollection<string> repository)
        {
            if (String.IsNullOrEmpty(ns) || repository.Contains(ns))
            {
                return;
            }

            string[] parts = ns.Split('.');
            StringBuilder builder = new StringBuilder();

            foreach (string part in parts)
            {
                if (builder.Length > 0)
                {
                    builder.Append('.');
                }

                builder.Append(part);
                string item = builder.ToString();

                if (!repository.Contains(item))
                {
                    repository.Add(item);
                }
            }
        }

        public static object ConvertConstant(object value, Expression expression, IEmitter emitter)
        {
            try
            {
                if (expression.Parent != null)
                {
                    var rr = emitter.Resolver.ResolveNode(expression, emitter);
                    var conversion = emitter.Resolver.Resolver.GetConversion(expression);
                    var expectedType = emitter.Resolver.Resolver.GetExpectedType(expression);

                    if (conversion.IsNumericConversion && expectedType.IsKnownType(KnownTypeCode.Double) && rr.Type.IsKnownType(KnownTypeCode.Single))
                    {
                        return (double)(float)value;
                    }
                }
            }
            catch (Exception)
            {
            }

            return value;
        }

        public virtual string ToJavaScript(object value)
        {
            return JsonConvert.SerializeObject(value);
        }

        protected virtual ICSharpCode.NRefactory.CSharp.Attribute GetAttribute(AstNodeCollection<AttributeSection> attributes, string name)
        {
            string fullName = name + "Attribute";
            foreach (var i in attributes)
            {
                foreach (var j in i.Attributes)
                {
                    if (j.Type.ToString() == name)
                    {
                        return j;
                    }

                    var resolveResult = this.Resolver.ResolveNode(j, this);
                    if (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == fullName)
                    {
                        return j;
                    }
                }
            }

            return null;
        }

        public virtual CustomAttribute GetAttribute(IEnumerable<CustomAttribute> attributes, string name)
        {
            foreach (var attr in attributes)
            {
                if (attr.AttributeType.FullName == name)
                {
                    return attr;
                }
            }

            return null;
        }

        public virtual IAttribute GetAttribute(IEnumerable<IAttribute> attributes, string name)
        {
            foreach (var attr in attributes)
            {
                if (attr.AttributeType.FullName == name)
                {
                    return attr;
                }
            }

            return null;
        }

        protected virtual bool HasDelegateAttribute(MethodDeclaration method)
        {
            return this.GetAttribute(method.Attributes, "Delegate") != null;
        }

        public virtual Tuple<bool, bool, string> GetInlineCode(MemberReferenceExpression node)
        {
            var member = LiftNullableMember(node);
            var info = GetInlineCodeFromMember(member, node);

            return WrapNullableMember(info, member, node);
        }

        public virtual Tuple<bool, bool, string> GetInlineCode(InvocationExpression node)
        {
            var target = node.Target as MemberReferenceExpression;
            IMember member = null;
            if (target != null)
            {
                member = LiftNullableMember(target);
            }

            var info = GetInlineCodeFromMember(member, node);
            return WrapNullableMember(info, member, node.Target);
        }

        internal Tuple<bool, bool, string> GetInlineCodeFromMember(IMember member, Expression node)
        {
            if (member == null)
            {
                var resolveResult = this.Resolver.ResolveNode(node, this);
                var memberResolveResult = resolveResult as MemberResolveResult;

                if (memberResolveResult == null)
                {
                    return new Tuple<bool, bool, string>(false, false, null);
                }

                member = memberResolveResult.Member;
            }

            bool isInlineMethod = this.IsInlineMethod(member);
            var inlineCode = isInlineMethod ? null : this.GetInline(member);
            var isStatic = member.IsStatic;

            if (!string.IsNullOrEmpty(inlineCode) && member is IProperty)
            {
                inlineCode = inlineCode.Replace("{value}", "{0}");
            }

            return new Tuple<bool, bool, string>(isStatic, isInlineMethod, inlineCode);
        }

        private Tuple<bool, bool, string> WrapNullableMember(Tuple<bool, bool, string> info, IMember member, Expression node)
        {
            if (member != null && !string.IsNullOrEmpty(info.Item3))
            {
                IMethod method = (IMethod)member;

                StringBuilder savedBuilder = this.Output;
                this.Output = new StringBuilder();
                var mrr = new MemberResolveResult(null, member);
                var argsInfo = new ArgumentsInfo(this, node, mrr);
                argsInfo.ThisArgument = JS.Vars.T;
                new InlineArgumentsBlock(this, argsInfo, info.Item3, method, mrr).EmitNullableReference();
                string tpl = this.Output.ToString();
                this.Output = savedBuilder;

                if (member.Name == CS.Methods.EQUALS)
                {
                    tpl = string.Format(JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.EQUALS + "({{this}}, {{{0}}}, {1})", method.Parameters.First().Name, tpl);
                }
                else if (member.Name == CS.Methods.TOSTRING)
                {
                    tpl = string.Format(JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.TOSTIRNG + "({{this}}, {0})", tpl);
                }
                else if (member.Name == CS.Methods.GETHASHCODE)
                {
                    tpl = string.Format(JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.GETHASHCODE + "({{this}}, {0})", tpl);
                }

                info = new Tuple<bool, bool, string>(info.Item1, info.Item2, tpl);
            }
            return info;
        }

        private IMember LiftNullableMember(MemberReferenceExpression target)
        {
            var targetrr = this.Resolver.ResolveNode(target.Target, this);
            IMember member = null;
            if (targetrr.Type.IsKnownType(KnownTypeCode.NullableOfT))
            {
                string name = null;
                int count = 0;
                IType typeArg = null;
                if (target.MemberName == CS.Methods.TOSTRING || target.MemberName == CS.Methods.GETHASHCODE)
                {
                    name = target.MemberName;
                }
                else if (target.MemberName == CS.Methods.EQUALS)
                {
                    if (target.Parent is InvocationExpression)
                    {
                        var rr = this.Resolver.ResolveNode(target.Parent, this) as InvocationResolveResult;
                        if (rr != null)
                        {
                            typeArg = rr.Arguments.First().Type;
                        }
                    }
                    name = target.MemberName;
                    count = 1;
                }

                if (name != null)
                {
                    var type = ((ParameterizedType)targetrr.Type).TypeArguments[0];
                    var methods = type.GetMethods(null, GetMemberOptions.IgnoreInheritedMembers);

                    if (count == 0)
                    {
                        member = methods.FirstOrDefault(m => m.Name == name && m.Parameters.Count == count);
                    }
                    else
                    {
                        member = methods.FirstOrDefault(m => m.Name == name && m.Parameters.Count == count && m.Parameters.First().Type.Equals(typeArg));

                        if (member == null)
                        {
                            var typeDef = typeArg.GetDefinition();
                            member = methods.FirstOrDefault(m => m.Name == name && m.Parameters.Count == count && m.Parameters.First().Type.GetDefinition().IsDerivedFrom(typeDef));
                        }
                    }
                }
            }
            return member;
        }

        public virtual bool IsForbiddenInvocation(InvocationExpression node)
        {
            var resolveResult = this.Resolver.ResolveNode(node, this);
            var memberResolveResult = resolveResult as MemberResolveResult;

            if (memberResolveResult == null)
            {
                return false;
            }

            var member = memberResolveResult.Member;

            string attrName = Bridge.Translator.Translator.Bridge_ASSEMBLY + ".InitAttribute";

            if (member != null)
            {
                var attr = member.Attributes.FirstOrDefault(a =>
                {
                    return a.AttributeType.FullName == attrName;
                });

                if (attr != null)
                {
                    if (attr.PositionalArguments.Count > 0)
                    {
                        var argExpr = attr.PositionalArguments.First();
                        if (argExpr.ConstantValue is int)
                        {
                            var value = (InitPosition)argExpr.ConstantValue;

                            if (value > 0)
                            {
                                return true;
                            }
                        }
                    }
                }
            }

            return false;
        }

        public virtual IEnumerable<string> GetScript(EntityDeclaration method)
        {
            var attr = this.GetAttribute(method.Attributes, Bridge.Translator.Translator.Bridge_ASSEMBLY + ".Script");

            return this.GetScriptArguments(attr);
        }

        public virtual string GetEntityNameFromAttr(IEntity member, bool setter = false)
        {
            var prop = member as IProperty;
            if (prop != null)
            {
                member = setter ? prop.Setter : prop.Getter;
            }
            else
            {
                var e = member as IEvent;
                if (e != null)
                {
                    member = setter ? e.AddAccessor : e.RemoveAccessor;
                }
            }

            if (member == null)
            {
                return null;
            }

            var attr = Helpers.GetInheritedAttribute(member, Bridge.Translator.Translator.Bridge_ASSEMBLY + ".NameAttribute");
            bool isIgnore = member.DeclaringTypeDefinition != null && this.Validator.IsExternalType(member.DeclaringTypeDefinition);
            string name;

            if (attr != null)
            {
                var value = attr.PositionalArguments.First().ConstantValue;
                if (value is string)
                {
                    name = this.GetEntityName(member);
                    //name = Helpers.ConvertNameTokens(value.ToString(), member.Name);
                    if (!isIgnore && member.IsStatic && Helpers.IsReservedStaticName(name))
                    {
                        name = Helpers.ChangeReservedWord(name);
                    }
                    return name;
                }
            }

            return null;
        }

        Dictionary<IEntity, NameSemantic> entityNameCache = new Dictionary<IEntity, NameSemantic>();
        public virtual NameSemantic GetNameSemantic(IEntity member)
        {
            NameSemantic result;
            if(this.entityNameCache.TryGetValue(member, out result))
            {
                return result;
            }

            result = new NameSemantic { Entity = member, Emitter = this };

            this.entityNameCache.Add(member, result);
            return result;
        }

        public string GetEntityName(IEntity member)
        {
            var semantic = NameSemantic.Create(member, this);
            semantic.IsObjectLiteral = false;
            return semantic.Name;
        }

        public string GetTypeName(ITypeDefinition type, TypeDefinition typeDefinition)
        {
            var semantic = NameSemantic.Create(type, this);
            semantic.TypeDefinition = typeDefinition;
            return semantic.Name;
        }

        public string GetLiteralEntityName(ICSharpCode.NRefactory.TypeSystem.IEntity member)
        {
            var semantic = NameSemantic.Create(member, this);
            semantic.IsObjectLiteral = true;
            return semantic.Name;
        }

        public virtual string GetEntityName(EntityDeclaration entity)
        {
            var rr = this.Resolver.ResolveNode(entity, this) as MemberResolveResult;

            if (rr != null)
            {
                return this.GetEntityName(rr.Member);
            }

            return null;
        }

        public virtual string GetParameterName(ParameterDeclaration entity)
        {
            var name = entity.Name;

            if (entity.Parent != null && entity.GetParent<SyntaxTree>() != null)
            {
                var rr = this.Resolver.ResolveNode(entity, this) as LocalResolveResult;
                if (rr != null)
                {
                    var iparam = rr.Variable as IParameter;

                    if (iparam != null && iparam.Attributes != null)
                    {
                        var attr = iparam.Attributes.FirstOrDefault(a => a.AttributeType.FullName == Bridge.Translator.Translator.Bridge_ASSEMBLY + ".NameAttribute");

                        if (attr != null)
                        {
                            var value = attr.PositionalArguments.First().ConstantValue;
                            if (value is string)
                            {
                                name = value.ToString();
                            }
                        }
                    }
                }
            }

            if (Helpers.IsReservedWord(this, name))
            {
                name = Helpers.ChangeReservedWord(name);
            }

            return name;
        }

        public virtual string GetFieldName(FieldDeclaration field)
        {
            if (!string.IsNullOrEmpty(field.Name))
            {
                return field.Name;
            }

            if (field.Variables.Count > 0)
            {
                return field.Variables.First().Name;
            }

            return null;
        }

        public virtual string GetEventName(EventDeclaration evt)
        {
            if (!string.IsNullOrEmpty(evt.Name))
            {
                return evt.Name;
            }

            if (evt.Variables.Count > 0)
            {
                return evt.Variables.First().Name;
            }

            return null;
        }

        public Tuple<bool, string> IsGlobalTarget(IMember member)
        {
            var attr = this.GetAttribute(member.Attributes, Bridge.Translator.Translator.Bridge_ASSEMBLY + ".GlobalTargetAttribute");

            return attr != null ? new Tuple<bool, string>(true, (string)attr.PositionalArguments.First().ConstantValue) : null;
        }

        public virtual string GetInline(ICustomAttributeProvider provider)
        {
            var attr = this.GetAttribute(provider.CustomAttributes, Bridge.Translator.Translator.Bridge_ASSEMBLY + ".TemplateAttribute");

            return attr != null && attr.ConstructorArguments.Count > 0 ? ((string)attr.ConstructorArguments.First().Value) : null;
        }

        public virtual string GetInline(EntityDeclaration method)
        {
            var attr = this.GetAttribute(method.Attributes, Bridge.Translator.Translator.Bridge_ASSEMBLY + ".TemplateAttribute");

            return attr != null && attr.Arguments.Count > 0 ? ((string)((PrimitiveExpression)attr.Arguments.First()).Value) : null;
        }

        public virtual string GetInline(IEntity entity)
        {
            string attrName = Bridge.Translator.Translator.Bridge_ASSEMBLY + ".TemplateAttribute";
            bool isProp = entity is IProperty;

            if (entity.SymbolKind == SymbolKind.Property)
            {
                var prop = (IProperty)entity;
                entity = this.IsAssignment ? prop.Setter : prop.Getter;
            }

            if (entity != null)
            {
                var attr = entity.Attributes.FirstOrDefault(a =>
                {
                    return a.AttributeType.FullName == attrName;
                });

                var inlineCode = attr != null && attr.PositionalArguments.Count > 0 ? attr.PositionalArguments[0].ConstantValue.ToString() : null;

                if (!string.IsNullOrEmpty(inlineCode) && isProp)
                {
                    inlineCode = inlineCode.Replace("{value}", "{0}");
                }

                return inlineCode;
            }

            return null;
        }

        protected virtual bool IsInlineMethod(IEntity entity)
        {
            string attrName = Bridge.Translator.Translator.Bridge_ASSEMBLY + ".TemplateAttribute";

            if (entity != null)
            {
                var attr = entity.Attributes.FirstOrDefault(a =>
                {
                    return a.AttributeType.FullName == attrName;
                });

                return attr != null && attr.PositionalArguments.Count == 0;
            }

            return false;
        }

        protected virtual IEnumerable<string> GetScriptArguments(ICSharpCode.NRefactory.CSharp.Attribute attr)
        {
            if (attr == null)
            {
                return null;
            }

            var result = new List<string>();

            foreach (var arg in attr.Arguments)
            {
                string value = "";
                if (arg is PrimitiveExpression)
                {
                    PrimitiveExpression expr = (PrimitiveExpression) arg;
                    value = (string) expr.Value;
                }
                else
                {
                    var rr = this.Resolver.ResolveNode(arg, this) as ConstantResolveResult;
                    if (rr != null && rr.ConstantValue != null)
                    {
                        value = rr.ConstantValue.ToString();
                    }
                }

                result.Add(value);
            }

            return result;
        }

        public virtual bool IsNativeMember(string fullName)
        {
            return fullName.StartsWith(Bridge.Translator.Translator.Bridge_ASSEMBLY_DOT, StringComparison.Ordinal) || fullName.StartsWith("System.", StringComparison.Ordinal);
        }

        public virtual bool IsMemberConst(IMember member)
        {
            var field = member as IField;
            if (field != null)
            {
                return field.IsConst && member.DeclaringType.Kind != TypeKind.Enum;
            }

            return false;
        }

        public virtual bool IsInlineConst(IMember member)
        {
            bool isConst = IsMemberConst(member);

            if (isConst)
            {
                var attr = this.GetAttribute(member.Attributes, Bridge.Translator.Translator.Bridge_ASSEMBLY + ".InlineConstAttribute");

                if (attr != null)
                {
                    return true;
                }
            }

            return false;
        }

        public virtual void InitEmitter()
        {
            this.Output = new StringBuilder();
            this.Locals = null;
            this.LocalsStack = null;
            this.IteratorCount = 0;
            this.ThisRefCounter = 0;
            this.Writers = new Stack<IWriter>();
            this.IsAssignment = false;
            this.ResetLevel();
            this.IsNewLine = true;
            this.EnableSemicolon = true;
            this.Comma = false;
            this.CurrentDependencies = new List<IPluginDependency>();
        }

        public virtual bool ContainsOnlyOrEmpty(StringBuilder sb, params char[] c)
        {
            if (sb == null || sb.Length == 0)
            {
                return true;
            }

            for (int i = 0; i < sb.Length; i++)
            {
                if (!c.Contains(sb[i]))
                {
                    return false;
                }
            }

            return true;
        }

        internal static bool AddOutputItem(List<TranslatorOutputItem> target, string fileName, TranslatorOutputItemContent content, TranslatorOutputKind outputKind, string location = null)
        {
            var fileHelper = new FileHelper();

            var outputType = fileHelper.GetOutputType(fileName);

            TranslatorOutputItem output = null;

            bool isMinJs = fileHelper.IsMinJS(fileName);

            var searchName = fileName;

            if (isMinJs)
            {
                searchName = fileHelper.GetNonMinifiedJSFileName(fileName);
            }

            output = target.FirstOrDefault(x => string.Compare(x.Name, searchName, StringComparison.InvariantCultureIgnoreCase) == 0);

            if (output != null)
            {
                bool isAdded;

                if (isMinJs)
                {
                    isAdded = output.MinifiedVersion == null;

                    output.MinifiedVersion = new TranslatorOutputItem
                    {
                        Name = fileName,
                        OutputType = outputType,
                        OutputKind = outputKind | TranslatorOutputKind.Minified,
                        Location = location,
                        Content = content,
                        IsMinified = true
                    };
                }
                else
                {
                    isAdded = output.IsEmpty;
                    output.IsEmpty = false;
                }

                return isAdded;
            }

            output = new TranslatorOutputItem
            {
                Name = searchName,
                OutputType = outputType,
                OutputKind = outputKind,
                Location = location,
                Content = new TranslatorOutputItemContent((string)null)
            };

            if (isMinJs)
            {
                output.IsEmpty = true;

                output.MinifiedVersion = new TranslatorOutputItem
                {
                    Name = fileName,
                    OutputType = outputType,
                    OutputKind = outputKind | TranslatorOutputKind.Minified,
                    Location = location,
                    Content = content,
                    IsMinified = true
                };
            }
            else
            {
                output.Content = content;
            }

            target.Add(output);

            return true;
        }
    }
}