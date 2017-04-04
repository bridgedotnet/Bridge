using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.TypeSystem;
using Object.Net.Utilities;

namespace Bridge.Contract
{
    [Flags]
    public enum NotationType
    {
        All = 0x0,
        Class = 0x1,
        Struct = 0x2,
        Enum = 0x4,
        Interface = 0x8,
        Delegate = 0x10,
        ObjectLiteral = 0x20,
        Anonymous = 0x40,
        External = 0x80,
        Member = 0x100
    }

    [Flags]
    public enum NotationMember
    {
        All = 0x0,
        Method = 0x1,
        Property = 0x2,
        Field = 0x4,
        Event = 0x8,
        Const = 0x10,
        EnumItem = 0x20
    }

    [Flags]
    public enum NotationAccessibility
    {
        All = 0x0,
        Public = 0x1,
        Protected = 0x2,
        Private = 0x4,
        Internal = 0x8,
        ProtectedInternal = 0x10
    }

    public enum Notation
    {
        None = 0,
        UpperCase = 1,
        LowerCase = 2,
        LowerCamelCase = 3,
        UpperCamelCase = 4
    }

    public class NameRule
    {
        public Notation Notation
        {
            get; set;
        }

        public NotationType Type
        {
            get; set;
        }

        public NotationMember Member
        {
            get; set;
        }

        public NotationAccessibility Accessibility
        {
            get; set;
        }

        public string Filter
        {
            get; set;
        }

        public string CustomName
        {
            get; set;
        }
    }

    public static class NameConvertor
    {
        private static readonly List<NameRule> defaultRules = new List<NameRule>
        {
            new NameRule { Member = NotationMember.Method, Notation = Notation.LowerCamelCase},
            new NameRule { Member = NotationMember.Field, Notation = Notation.LowerCamelCase}
        };

        public static string Convert(NameSemantic semantic)
        {
            var rules = NameConvertor.GetRules(semantic);

            foreach (var rule in rules)
            {
                if (NameConvertor.IsRuleAcceptable(semantic, rule))
                {
                    return NameConvertor.ApplyRule(semantic, rule);
                }
            }

            return NameConvertor.ApplyRule(semantic, null);
        }

        private static string ApplyRule(NameSemantic semantic, NameRule rule)
        {
            var name = semantic.DefaultName;

            if (rule != null)
            {
                if (!string.IsNullOrWhiteSpace(rule.CustomName))
                {
                    return rule.CustomName;
                }

                switch (rule.Notation)
                {
                    case Notation.None:
                        break;
                    case Notation.UpperCase:
                        name = name.ToUpperInvariant();
                        break;
                    case Notation.LowerCase:
                        name = name.ToLowerInvariant();
                        break;
                    case Notation.LowerCamelCase:
                        name = name.ToLowerCamelCase();
                        break;
                    case Notation.UpperCamelCase:
                        name = name.ToCamelCase();
                        break;
                    default:
                        throw new ArgumentOutOfRangeException(nameof(rule.Notation), rule.Notation, null);
                }
            }

            if (semantic.Entity is IMember)
            {
                bool isIgnore = semantic.Entity.DeclaringTypeDefinition != null && semantic.Emitter.Validator.IsExternalType(semantic.Entity.DeclaringTypeDefinition);
                if (!isIgnore && semantic.Entity.IsStatic && Helpers.IsReservedStaticName(name))
                {
                    name = Helpers.ChangeReservedWord(name);
                }
            }

            // TODO: remove this statement when default rules (method and field to lower camel case) will be removed
            if (semantic.Entity is IMember && !semantic.IsCustomName && semantic.EnumMode <= 6 && semantic.Entity.Name.Length > 1 && semantic.Entity.Name.ToUpperInvariant() == semantic.Entity.Name)
            {
                name = semantic.Entity.Name;
            }

            return name;
        }

        private static bool IsRuleAcceptable(NameSemantic semantic, NameRule rule)
        {
            var acceptable = true;
            var entity = semantic.Entity;

            if (rule.Type != NotationType.All)
            {
                var typeDef = entity as ITypeDefinition;
                string externalAttr = "Bridge.ExternalAttribute";

                if (typeDef == null && rule.Type.HasFlag(NotationType.External))
                {
                    acceptable = entity.GetAttribute(new FullTypeName(externalAttr), false) != null;

                    if (!acceptable)
                    {
                        typeDef = entity.DeclaringTypeDefinition;
                    }
                }
                else if (rule.Type.HasFlag(NotationType.Member) && !(entity is IMember))
                {
                    acceptable = false;
                }
                else if (rule.Type.HasFlag(NotationType.Anonymous))
                {
                    if (entity is IMember && (entity.DeclaringType == null || entity.DeclaringType.Kind != TypeKind.Anonymous))
                    {
                        acceptable = false;
                    }
                    else if (entity is IType && ((IType)entity).Kind != TypeKind.Anonymous)
                    {
                        acceptable = false;
                    }
                }

                if (typeDef == null)
                {
                    typeDef = entity.DeclaringTypeDefinition;
                }

                if (typeDef != null)
                {
                    foreach (var notationType in GetFlags(rule.Type))
                    {
                        if (notationType == NotationType.Member)
                        {
                            continue;
                        }

                        acceptable = NameConvertor.IsType(semantic, notationType, typeDef);
                        if (acceptable)
                        {
                            break;
                        }
                    }
                }

                if (!acceptable)
                {
                    return false;
                }
            }

            if (rule.Accessibility != NotationAccessibility.All)
            {
                if (!(rule.Accessibility.HasFlag(NotationAccessibility.Public) && entity.IsPublic ||
                    rule.Accessibility.HasFlag(NotationAccessibility.Protected) && entity.IsProtected ||
                    rule.Accessibility.HasFlag(NotationAccessibility.ProtectedInternal) && entity.IsProtectedOrInternal ||
                    rule.Accessibility.HasFlag(NotationAccessibility.Private) && entity.IsPrivate ||
                    rule.Accessibility.HasFlag(NotationAccessibility.Internal) && entity.IsInternal))
                {
                    acceptable = false;
                }

                if (!acceptable)
                {
                    return false;
                }
            }

            if (rule.Member != NotationMember.All)
            {
                var field = entity as IField;
                if (field != null)
                {
                    if (!(rule.Member.HasFlag(NotationMember.Field) && !field.IsConst ||
                          rule.Member.HasFlag(NotationMember.EnumItem) && field.IsConst && semantic.Entity.DeclaringTypeDefinition.Kind != TypeKind.Enum ||
                          rule.Member.HasFlag(NotationMember.Const) && field.IsConst))
                    {
                        acceptable = false;
                    }
                }
                else if (!(rule.Member.HasFlag(NotationMember.Event) && entity is IEvent ||
                    rule.Member.HasFlag(NotationMember.Method) && entity is IMethod ||
                    rule.Member.HasFlag(NotationMember.Property) && entity is IProperty))
                {
                    acceptable = false;
                }

                if (!acceptable)
                {
                    return false;
                }
            }

            if (!string.IsNullOrEmpty(rule.Filter))
            {
                var fullName = entity is ITypeDefinition ? entity.FullName : entity.Name;
                var parts = rule.Filter.Split(new char[] { ';' }, StringSplitOptions.RemoveEmptyEntries);
                acceptable = false;

                foreach (var part in parts)
                {
                    string pattern;
                    bool exclude = part.StartsWith("!");

                    if (part.StartsWith("regex:"))
                    {
                        pattern = part.Substring(6);
                    }
                    else
                    {
                        pattern = "^" + Regex.Escape(part).Replace("\\*", ".*").Replace("\\?", ".") + "$";
                    }

                    if (Regex.IsMatch(fullName, pattern))
                    {
                        acceptable = !exclude;
                    }
                }

                if (!acceptable)
                {
                    return false;
                }
            }

            return acceptable;
        }

        private static IEnumerable<T> GetFlags<T>(this T value) where T : struct
        {
            foreach (T flag in Enum.GetValues(typeof(T)).Cast<T>())
            {
                if (value.IsFlagSet(flag))
                    yield return flag;
            }
        }

        private static bool IsFlagSet<T>(this T value, T flag) where T : struct
        {
            long lValue = System.Convert.ToInt64(value);
            long lFlag = System.Convert.ToInt64(flag);
            return (lValue & lFlag) != 0;
        }

        private static bool IsType(NameSemantic semantic, NotationType notationType, ITypeDefinition typeDef)
        {
            bool acceptable = true;
            switch (notationType)
            {
                case NotationType.Class:
                    acceptable = typeDef.Kind == TypeKind.Class;
                    break;
                case NotationType.Struct:
                    acceptable = typeDef.Kind == TypeKind.Struct;
                    break;
                case NotationType.Enum:
                    acceptable = typeDef.Kind == TypeKind.Enum;
                    break;
                case NotationType.Interface:
                    acceptable = typeDef.Kind == TypeKind.Interface;
                    break;
                case NotationType.Delegate:
                    acceptable = typeDef.Kind == TypeKind.Delegate;
                    break;
                case NotationType.ObjectLiteral:
                    acceptable = semantic.IsObjectLiteral || typeDef.GetAttribute(new FullTypeName("Bridge.ObjectLiteralAttribute"), false) != null;
                    break;
                case NotationType.Anonymous:
                    acceptable = typeDef.Kind == TypeKind.Anonymous;
                    break;
                case NotationType.External:
                    string externalAttr = "Bridge.ExternalAttribute";
                    var has =
                        typeDef.Attributes.Any(
                            attr =>
                                attr.Constructor != null &&
                                attr.Constructor.DeclaringType.FullName == externalAttr);

                    if (!has && typeDef.DeclaringTypeDefinition != null)
                    {
                        has =
                            typeDef.DeclaringTypeDefinition.Attributes.Any(
                                attr =>
                                    attr.Constructor != null &&
                                    attr.Constructor.DeclaringType.FullName == externalAttr);
                    }

                    if (!has)
                    {
                        has =
                            typeDef.ParentAssembly.AssemblyAttributes.Any(
                                attr =>
                                    attr.Constructor != null &&
                                    attr.Constructor.DeclaringType.FullName == externalAttr);
                    }
                    acceptable = has;

                    break;
                default:
                    break;
            }
            return acceptable;
        }

        private static List<NameRule> GetRules(NameSemantic semantic)
        {
            var attrs = NameConvertor.GetAttributes(semantic);
            var rules = new List<NameRule>(attrs.Length);
            rules.AddRange(NameConvertor.GetSpecialRules(semantic));

            foreach (var attribute in attrs)
            {
                rules.Add(NameConvertor.ToRule(attribute));
            }

            rules.AddRange(NameConvertor.GetDefaultRules(semantic));

            return rules;
        }

        private static List<NameRule> GetDefaultRules(NameSemantic semantic)
        {
            var rules = new List<NameRule>();

            var enumRule = NameConvertor.GetEnumRule(semantic);
            if (enumRule != null)
            {
                rules.Add(enumRule);
            }

            var propRule = NameConvertor.GetPropertyRule(semantic);
            if (propRule != null)
            {
                rules.Add(propRule);
            }

            rules.AddRange(NameConvertor.defaultRules);

            return rules;
        }

        private static NameRule GetEnumRule(NameSemantic semantic)
        {
            int enumMode = -1;
            if (semantic.Entity is IField && semantic.Entity.DeclaringType.Kind == TypeKind.Enum)
            {
                enumMode = Helpers.EnumEmitMode(semantic.Entity.DeclaringType);
                semantic.EnumMode = enumMode;
            }

            switch (enumMode)
            {
                case 1:
                case 3:
                    return new NameRule { Notation = Notation.LowerCamelCase };
                case 2:
                case 4:
                case 7:
                    return new NameRule { Notation = Notation.None };
                case 5:
                case 8:
                    return new NameRule { Notation = Notation.LowerCase };
                case 6:
                case 9:
                    return new NameRule { Notation = Notation.UpperCase };
            }

            return null;
        }

        private static NameRule GetPropertyRule(NameSemantic semantic)
        {
            if (semantic.Entity is IProperty && semantic.Entity.DeclaringTypeDefinition != null && (semantic.IsObjectLiteral || semantic.Emitter.Validator.IsObjectLiteral(semantic.Entity.DeclaringTypeDefinition)))
            {
                return new NameRule { Notation = Notation.LowerCamelCase };
            }

            return null;
        }

        private static List<NameRule> GetSpecialRules(NameSemantic semantic)
        {
            var rules = new List<NameRule>();

            var nameAttr = Helpers.GetInheritedAttribute(semantic.Entity, "Bridge.NameAttribute");
            if (nameAttr != null)
            {
                var rule = new NameRule();
                var value = nameAttr.PositionalArguments.First().ConstantValue;
                if (value is bool)
                {
                    rule.Notation = (bool) value ? Notation.LowerCamelCase : Notation.None;
                }
                else if (value is string)
                {
                    rule.CustomName = (string) value;
                }
                semantic.IsCustomName = true;
                rules.Add(rule);
            }
            else
            {
                var method = semantic.Entity as IMethod;
                if (method != null && method.IsConstructor)
                {
                    semantic.IsCustomName = true;
                    rules.Add(new NameRule { CustomName = JS.Funcs.CONSTRUCTOR });
                }
            }

            return rules;
        }

        private static NameRule ToRule(IAttribute attribute)
        {
            var rule = new NameRule();

            foreach (var argument in attribute.NamedArguments)
            {
                var member = argument.Key;
                var value = argument.Value;

                switch (member.Name)
                {
                    case "Notation":
                        rule.Notation = (Notation) (int) value.ConstantValue;
                        break;

                    case "Type":
                        rule.Type = (NotationType)(int)value.ConstantValue;
                        break;

                    case "Member":
                        rule.Member = (NotationMember)(int)value.ConstantValue;
                        break;

                    case "Accessibility":
                        rule.Accessibility = (NotationAccessibility)(int)value.ConstantValue;
                        break;

                    case "Filter":
                        rule.Filter = value.ConstantValue as string;
                        break;

                    default:
                        throw new NotSupportedException($"Property {member.Name} is not supported in {attribute.AttributeType.FullName}");
                }
            }

            return rule;
        }

        private static IAttribute[] GetAttributes(NameSemantic semantic)
        {
            var attrName = "Bridge.ConventionAttribute";
            IAttribute[] ownAttrs = semantic.Entity.GetAttributes(new FullTypeName(attrName)).ToArray();
            IAttribute[] ownerAttributes = null;

            if (semantic.Entity.DeclaringTypeDefinition != null)
            {
                ownerAttributes = semantic.Entity.DeclaringTypeDefinition.GetAttributes(new FullTypeName(attrName)).ToArray();
            }

            IAttribute[] assemblyAttr = semantic.Entity.ParentAssembly.AssemblyAttributes.Where(a => a.AttributeType.FullName == attrName).ToArray();

            if(ownerAttributes != null && ownerAttributes.Length > 0)
            {
                ownAttrs = ownAttrs.Concat(ownerAttributes).ToArray();
            }

            if (assemblyAttr.Length > 0)
            {
                ownAttrs = ownAttrs.Concat(assemblyAttr).ToArray();
            }

            return ownAttrs;
        }
    }
}