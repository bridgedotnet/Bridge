using ICSharpCode.NRefactory.TypeSystem;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.Contract
{
    public class Rules
    {
        private static string attributeName = "Bridge.RulesAttribute";

        public static CompilerRule Default = new CompilerRule
        {
            Lambda = LambdaRule.Managed,
            AnonymousType = AnonymousTypeRule.Managed,
            Integer = IntegerRule.Managed,
            Boxing = BoxingRule.Managed,
            ArrayIndex = ArrayIndexRule.Managed,
            AutoProperty = null,
            InlineComment = InlineCommentRule.Managed,
            ExternalCast = ExternalCastRule.Managed
        };

        public static CompilerRule Get(IEmitter emitter, IEntity entity)
        {
            CompilerRule memberRule = null;
            CompilerRule[] classRules = null;
            CompilerRule[] assemblyRules = null;
            CompilerRule[] interfaceRules = null;

            if (entity is IMember)
            {
                var attr = Helpers.GetInheritedAttribute(entity, attributeName);

                if (attr != null)
                {
                    memberRule = Rules.ToRule(attr, CompilerRuleLevel.Member);
                }

                var typeDef = entity.DeclaringTypeDefinition;

                if (typeDef != null)
                {
                    classRules = Rules.GetClassRules(emitter, typeDef);
                }

                interfaceRules = Rules.GetVirtualMemberRules(emitter, entity);
            }
            else if (entity is ITypeDefinition)
            {
                classRules = Rules.GetClassRules(emitter, (ITypeDefinition)entity);
            }

            var assembly = entity.ParentAssembly;

            if (emitter != null && emitter.AssemblyCompilerRuleCache.ContainsKey(assembly))
            {
                assemblyRules = emitter.AssemblyCompilerRuleCache[assembly];
            }
            else
            {
                IAttribute[] assemblyAttrs = assembly.AssemblyAttributes.Where(a => a.AttributeType.FullName == Rules.attributeName).ToArray();
                assemblyRules = new CompilerRule[assemblyAttrs.Length];
                for (int i = 0; i < assemblyAttrs.Length; i++)
                {
                    assemblyRules[i] = Rules.ToRule(assemblyAttrs[i], CompilerRuleLevel.Assembly);
                }

                if (emitter != null)
                {
                    emitter.AssemblyCompilerRuleCache.Add(assembly, assemblyRules);
                }
            }

            var rules = new List<CompilerRule>();

            if (memberRule != null)
            {
                rules.Add(memberRule);
            }

            if (classRules != null && classRules.Length > 0)
            {
                rules.AddRange(classRules);
            }

            if (interfaceRules != null && interfaceRules.Length > 0)
            {
                rules.AddRange(interfaceRules);
            }

            if (emitter != null)
            {
                rules.Add(emitter.AssemblyInfo.Rules);
            }

            if (assemblyRules != null && assemblyRules.Length > 0)
            {
                rules.AddRange(assemblyRules);
            }

            return MergeRules(rules);
        }

        private static CompilerRule MergeRules(List<CompilerRule> rules)
        {
            var resultRule = new CompilerRule
            {
                Lambda = LambdaRule.Managed,
                AnonymousType = AnonymousTypeRule.Managed,
                Integer = IntegerRule.Managed,
                Boxing = BoxingRule.Managed,
                ArrayIndex = ArrayIndexRule.Managed,
                AutoProperty = null,
                InlineComment = InlineCommentRule.Managed,
                ExternalCast = ExternalCastRule.Managed
            };

            for (int i = rules.Count - 1; i >= 0; i--)
            {
                var rule = rules[i];

                if (rule.Lambda.HasValue)
                {
                    resultRule.Lambda = rule.Lambda;
                }

                if (rule.AutoProperty.HasValue)
                {
                    resultRule.AutoProperty = rule.AutoProperty;
                }

                if (rule.AnonymousType.HasValue)
                {
                    resultRule.AnonymousType = rule.AnonymousType;
                }

                if (rule.Integer.HasValue)
                {
                    resultRule.Integer = rule.Integer;
                }

                if (rule.ArrayIndex.HasValue)
                {
                    resultRule.ArrayIndex = rule.ArrayIndex;
                }

                if (rule.Boxing.HasValue)
                {
                    resultRule.Boxing = rule.Boxing;
                }

                if (rule.InlineComment.HasValue)
                {
                    resultRule.InlineComment = rule.InlineComment;
                }

                if (rule.ExternalCast.HasValue)
                {
                    resultRule.ExternalCast = rule.ExternalCast;
                }
            }

            return resultRule;
        }

        private static CompilerRule ToRule(IAttribute attribute, CompilerRuleLevel level = CompilerRuleLevel.None)
        {
            var rule = new CompilerRule();

            foreach (var argument in attribute.NamedArguments)
            {
                var member = argument.Key;
                var value = argument.Value;

                switch (member.Name)
                {
                    case nameof(CompilerRule.Lambda):
                        rule.Lambda = (LambdaRule)(int)value.ConstantValue;
                        break;

                    case nameof(CompilerRule.Boxing):
                        rule.Boxing = (BoxingRule)(int)value.ConstantValue;
                        break;

                    case nameof(CompilerRule.ArrayIndex):
                        rule.ArrayIndex = (ArrayIndexRule)(int)value.ConstantValue;
                        break;

                    case nameof(CompilerRule.Integer):
                        rule.Integer = (IntegerRule)(int)value.ConstantValue;
                        break;

                    case nameof(CompilerRule.AnonymousType):
                        rule.AnonymousType = (AnonymousTypeRule)(int)value.ConstantValue;
                        break;

                    case nameof(CompilerRule.AutoProperty):
                        rule.AutoProperty = (AutoPropertyRule)(int)value.ConstantValue;
                        break;

                    case nameof(CompilerRule.InlineComment):
                        rule.InlineComment = (InlineCommentRule)(int)value.ConstantValue;
                        break;

                    case nameof(CompilerRule.ExternalCast):
                        rule.ExternalCast = (ExternalCastRule)(int)value.ConstantValue;
                        break;

                    default:
                        throw new NotSupportedException($"Property {member.Name} is not supported in {attribute.AttributeType.FullName}");
                }
            }

            rule.Level = level;
            return rule;
        }

        private static CompilerRule[] GetVirtualMemberRules(IEmitter emitter, IEntity entity)
        {
            var member = entity as IMember;

            if (member != null)
            {
                if (member.IsOverride)
                {
                    var baseMember = InheritanceHelper.GetBaseMember(member);
                    return new[] { Rules.Get(emitter, baseMember) };
                }

                if (member.ImplementedInterfaceMembers.Count > 0)
                {
                    var interfaceMember = member.ImplementedInterfaceMembers.First();
                    return Rules.GetClassRules(emitter, interfaceMember.DeclaringTypeDefinition);
                }
            }

            return null;
        }

        private static CompilerRule[] GetClassRules(IEmitter emitter, ITypeDefinition typeDef)
        {
            if (emitter != null && emitter.ClassCompilerRuleCache.ContainsKey(typeDef))
            {
                return emitter.ClassCompilerRuleCache[typeDef];
            }

            var td = typeDef;
            List<CompilerRule> rules = new List<CompilerRule>();
            while (td != null)
            {
                IAttribute[] classAttrs = td.GetAttributes(new FullTypeName(Rules.attributeName)).ToArray();
                for (int i = 0; i < classAttrs.Length; i++)
                {
                    rules.Add(Rules.ToRule(classAttrs[i], CompilerRuleLevel.Class));
                }

                td = td.DeclaringTypeDefinition;
            }

            var classRules = rules.ToArray();
            if (emitter != null)
            {
                emitter.ClassCompilerRuleCache.Add(typeDef, classRules);
            }

            return classRules;
        }
    }

    public enum CompilerRuleLevel
    {
        None,
        Assembly,
        Class,
        Member
    }
}
