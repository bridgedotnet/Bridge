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

        public static bool IsReservedStaticName(string name)
        {
            return JS.Reserved.StaticNames.Any(n => String.Equals(name, n, StringComparison.InvariantCultureIgnoreCase));
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

        private Tuple<bool, bool, string> GetInlineCodeFromMember(IMember member, Expression node)
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
                            var value = (int)argExpr.ConstantValue;

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

        public virtual string GetDefinitionName(IEmitter emitter, IMemberDefinition member, bool preserveMemberCase = false)
        {
            if (!preserveMemberCase)
            {
                preserveMemberCase = !this.IsNativeMember(member.FullName) ? this.AssemblyInfo.PreserveMemberCase : false;

                if (member is FieldDefinition && ((FieldDefinition)member).HasConstant && !member.DeclaringType.IsEnum)
                {
                    preserveMemberCase = true;
                }
            }
            string attrName = Bridge.Translator.Translator.Bridge_ASSEMBLY + ".NameAttribute";
            var attr = Helpers.GetInheritedAttribute(emitter, member, attrName);

            bool isIgnore = this.Validator.IsIgnoreType(member.DeclaringType);
            string name = member.Name;
            bool isStatic = false;

            if (member is MethodDefinition)
            {
                var method = (MethodDefinition)member;
                isStatic = method.IsStatic;
                if (method.IsConstructor)
                {
                    name = JS.Funcs.CONSTRUCTOR;
                }
            }
            else if (member is FieldDefinition)
            {
                isStatic = ((FieldDefinition)member).IsStatic;
            }
            else if (member is PropertyDefinition)
            {
                var prop = (PropertyDefinition)member;
                isStatic = prop.GetMethod != null ? prop.GetMethod.IsStatic : false;
            }
            else if (member is EventDefinition)
            {
                var ev = (EventDefinition)member;
                isStatic = ev.AddMethod != null ? ev.AddMethod.IsStatic : false;
            }
            if (attr != null)
            {
                var value = attr.ConstructorArguments.First().Value;
                if (value is string)
                {
                    name = value.ToString();
                    if (!isIgnore &&
                        ((isStatic && Emitter.IsReservedStaticName(name)) /*||
                        Helpers.IsReservedWord(name)*/))
                    {
                        name = Helpers.ChangeReservedWord(name);
                    }
                    return name;
                }

                preserveMemberCase = !(bool)value;
            }

            if (name.Contains("."))
            {
                name = Object.Net.Utilities.StringUtils.RightOfRightmostOf(name, '.');
            }

            if (name.Length > 1 && name.ToUpperInvariant() == name)
            {
                preserveMemberCase = true;
            }

            name = preserveMemberCase ? name : Object.Net.Utilities.StringUtils.ToLowerCamelCase(name);
            if (!isIgnore &&
                ((isStatic && Emitter.IsReservedStaticName(name)) /*||
                Helpers.IsReservedWord(name)*/))
            {
                name = Helpers.ChangeReservedWord(name);
            }

            return name;
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
            bool isIgnore = member.DeclaringTypeDefinition != null && this.Validator.IsIgnoreType(member.DeclaringTypeDefinition);
            string name;

            if (attr != null)
            {
                var value = attr.PositionalArguments.First().ConstantValue;
                if (value is string)
                {
                    name = value.ToString();
                    if (!isIgnore && ((member.IsStatic && Emitter.IsReservedStaticName(name)) /*|| Helpers.IsReservedWord(name)*/))
                    {
                        name = Helpers.ChangeReservedWord(name);
                    }
                    return name;
                }
            }

            return null;
        }

        public virtual string GetEntityName(IEntity member, bool forcePreserveMemberCase = false, bool ignoreInterface = false)
        {
            bool preserveMemberChange = !this.IsNativeMember(member.FullName) ? this.AssemblyInfo.PreserveMemberCase : false;

            int enumMode = -1;
            if (member.DeclaringType.Kind == TypeKind.Enum && member is IField)
            {
                enumMode = this.Validator.EnumEmitMode(member.DeclaringType);
            }

            if (member is IMember && this.IsMemberConst((IMember)member) || member is IEvent)
            {
                preserveMemberChange = true;
            }
            var attr = Helpers.GetInheritedAttribute(member, Bridge.Translator.Translator.Bridge_ASSEMBLY + ".NameAttribute");
            bool isIgnore = member.DeclaringTypeDefinition != null && this.Validator.IsIgnoreType(member.DeclaringTypeDefinition);
            string name = member.Name;
            if (member is IMethod && ((IMethod)member).IsConstructor)
            {
                name = JS.Funcs.CONSTRUCTOR;
            }

            if (attr != null)
            {
                var value = attr.PositionalArguments.First().ConstantValue;
                if (value is string)
                {
                    name = value.ToString();
                    if (!isIgnore && ((member.IsStatic && Emitter.IsReservedStaticName(name)) /*|| Helpers.IsReservedWord(name)*/))
                    {
                        name = Helpers.ChangeReservedWord(name);
                    }
                    return name;
                }

                preserveMemberChange = !(bool)value;
                enumMode = -1;
            }

            if (name.Length > 1 && name.ToUpperInvariant() == name)
            {
                preserveMemberChange = true;
            }

            if (enumMode > 6)
            {
                switch (enumMode)
                {
                    case 7:
                        break;

                    case 8:
                        name = name.ToLowerInvariant();
                        break;

                    case 9:
                        name = name.ToUpperInvariant();
                        break;
                }
            }
            else
            {
                name = !preserveMemberChange && !forcePreserveMemberCase ? Object.Net.Utilities.StringUtils.ToLowerCamelCase(name) : name;
            }

            if (!isIgnore && ((member.IsStatic && Emitter.IsReservedStaticName(name))/* || Helpers.IsReservedWord(name)*/))
            {
                name = Helpers.ChangeReservedWord(name);
            }

            return name;
        }

        public virtual string GetEntityName(EntityDeclaration entity, bool forcePreserveMemberCase = false, bool ignoreInterface = false)
        {
            var rr = this.Resolver.ResolveNode(entity, this) as MemberResolveResult;

            if (rr != null)
            {
                return this.GetEntityName(rr.Member, forcePreserveMemberCase, ignoreInterface);
            }

            return null;
        }

        public virtual string GetEntityName(ParameterDeclaration entity, bool forcePreserveMemberCase = false)
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

            if (Helpers.IsReservedWord(name))
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
            return fullName.StartsWith(Bridge.Translator.Translator.Bridge_ASSEMBLY + ".") || fullName.StartsWith("System.");
        }

        public virtual bool IsMemberConst(IMember member)
        {
            var specializedField = member as SpecializedField;
            if (specializedField != null)
            {
                return specializedField.IsConst && member.DeclaringType.Kind != TypeKind.Enum;
            }

            var defaultResolvedField = member as DefaultResolvedField;
            if (defaultResolvedField != null)
            {
                return defaultResolvedField.IsConst && member.DeclaringType.Kind != TypeKind.Enum;
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
            this.Level = 0;
            this.IsNewLine = true;
            this.EnableSemicolon = true;
            this.Comma = false;
            this.CurrentDependencies = new List<IPluginDependency>();
        }
    }
}