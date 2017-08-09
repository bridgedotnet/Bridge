using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public partial class ConstructorBlock
    {
        protected virtual IEnumerable<string> GetEventsAndAutoStartupMethods()
        {
            var methods = this.StaticBlock ? this.TypeInfo.StaticMethods : this.TypeInfo.InstanceMethods;
            List<string> list = new List<string>();

            bool hasReadyAttribute;
            var isGenericType = this.IsGenericType();

            foreach (var methodGroup in methods)
            {
                foreach (var method in methodGroup.Value)
                {
                    var isGenericMethod = this.IsGenericMethod(method);

                    HandleAttributes(list, methodGroup, method, out hasReadyAttribute);

                    if (hasReadyAttribute)
                    {
                        if (isGenericType || isGenericMethod)
                        {
                            hasReadyAttribute = false;
                        }
                    }
                    else
                    {
                        if (this.StaticBlock && !hasReadyAttribute)
                        {
                            if (method.Name == CS.Methods.AUTO_STARTUP_METHOD_NAME
                                && method.HasModifier(Modifiers.Static)
                                && !method.HasModifier(Modifiers.Abstract)
                                && Helpers.IsEntryPointCandidate(this.Emitter, method))
                            {
                                if (isGenericType || isGenericMethod)
                                {
                                    LogAutoStartupWarning(method);
                                }
                            }
                        }
                    }

                    if (hasReadyAttribute)
                    {
                        this.HasEntryPoint = true;
                    }
                }
            }

            return list;
        }

        private void HandleAttributes(List<string> list, KeyValuePair<string, List<MethodDeclaration>> methodGroup, MethodDeclaration method, out bool hasReadyAttribute)
        {
            hasReadyAttribute = false;
            var isGenericType = this.IsGenericType();
            var isGenericMethod = this.IsGenericMethod(method);

            foreach (var attrSection in method.Attributes)
            {
                foreach (var attr in attrSection.Attributes)
                {
                    var resolveResult = this.Emitter.Resolver.ResolveNode(attr, this.Emitter) as InvocationResolveResult;

                    if (resolveResult != null)
                    {
                        if (resolveResult.Type.FullName == CS.Attributes.READY_ATTRIBUTE_NAME)
                        {
                            hasReadyAttribute = true;

                            if (isGenericType || isGenericMethod)
                            {
                                LogAutoStartupWarning(method);
                                continue;
                            }
                        }

                        var baseTypes = resolveResult.Type.GetAllBaseTypes().ToArray();

                        if (baseTypes.Any(t => t.FullName == "Bridge.AdapterAttribute"))
                        {
                            if (methodGroup.Value.Count > 1)
                            {
                                throw new EmitterException(attr, "Overloaded method cannot be event handler");
                            }

                            var staticFlagField = resolveResult.Type.GetFields(f => f.Name == "StaticOnly");

                            if (staticFlagField.Count() > 0)
                            {
                                var staticValue = staticFlagField.First().ConstantValue;

                                if (staticValue is bool && ((bool)staticValue) && !method.HasModifier(Modifiers.Static))
                                {
                                    throw new EmitterException(attr, resolveResult.Type.FullName + " can be applied for static methods only");
                                }
                            }

                            string eventName = methodGroup.Key;
                            var eventField = resolveResult.Type.GetFields(f => f.Name == "Event");

                            if (eventField.Count() > 0)
                            {
                                eventName = eventField.First().ConstantValue.ToString();
                            }

                            string format = null;
                            string formatName = this.StaticBlock ? "Format" : "FormatScope";
                            var formatField = resolveResult.Type.GetFields(f => f.Name == formatName, GetMemberOptions.IgnoreInheritedMembers);

                            if (formatField.Count() > 0)
                            {
                                format = formatField.First().ConstantValue.ToString();
                            }
                            else
                            {
                                for (int i = baseTypes.Length - 1; i >= 0; i--)
                                {
                                    formatField = baseTypes[i].GetFields(f => f.Name == formatName);

                                    if (formatField.Count() > 0)
                                    {
                                        format = formatField.First().ConstantValue.ToString();
                                        break;
                                    }
                                }
                            }

                            bool isCommon = false;
                            var commonField = resolveResult.Type.GetFields(f => f.Name == "IsCommonEvent");

                            if (commonField.Count() > 0)
                            {
                                isCommon = Convert.ToBoolean(commonField.First().ConstantValue);
                            }

                            if (isCommon)
                            {
                                var eventArg = attr.Arguments.First();
                                var primitiveArg = eventArg as ICSharpCode.NRefactory.CSharp.PrimitiveExpression;

                                if (primitiveArg != null)
                                {
                                    eventName = primitiveArg.Value.ToString();
                                }
                                else
                                {
                                    var memberArg = eventArg as MemberReferenceExpression;

                                    if (memberArg != null)
                                    {
                                        var memberResolveResult = this.Emitter.Resolver.ResolveNode(memberArg, this.Emitter) as MemberResolveResult;

                                        if (memberResolveResult != null)
                                        {
                                            eventName = this.Emitter.GetEntityName(memberResolveResult.Member);
                                        }
                                    }
                                }
                            }

                            int selectorIndex = isCommon ? 1 : 0;
                            string selector = null;

                            if (attr.Arguments.Count > selectorIndex)
                            {
                                selector = ((ICSharpCode.NRefactory.CSharp.PrimitiveExpression)(attr.Arguments.ElementAt(selectorIndex))).Value.ToString();
                            }
                            else
                            {
                                var resolvedmethod = resolveResult.Member as IMethod;

                                if (resolvedmethod.Parameters.Count > selectorIndex)
                                {
                                    selector = resolvedmethod.Parameters[selectorIndex].ConstantValue.ToString();
                                }
                            }

                            if (attr.Arguments.Count > (selectorIndex + 1))
                            {
                                var memberResolveResult = this.Emitter.Resolver.ResolveNode(attr.Arguments.ElementAt(selectorIndex + 1), this.Emitter) as MemberResolveResult;

                                if (memberResolveResult != null && memberResolveResult.Member.Attributes.Count > 0)
                                {
                                    var template = this.Emitter.Validator.GetAttribute(memberResolveResult.Member.Attributes, "Bridge.TemplateAttribute");

                                    if (template != null)
                                    {
                                        selector = string.Format(template.PositionalArguments.First().ConstantValue.ToString(), selector);
                                    }
                                }
                            }
                            else
                            {
                                var resolvedmethod = resolveResult.Member as IMethod;

                                if (resolvedmethod.Parameters.Count > (selectorIndex + 1))
                                {
                                    var templateType = resolvedmethod.Parameters[selectorIndex + 1].Type;
                                    var templateValue = Convert.ToInt32(resolvedmethod.Parameters[selectorIndex + 1].ConstantValue);

                                    var fields = templateType.GetFields(f =>
                                    {
                                        var field = f as DefaultResolvedField;

                                        if (field != null && field.ConstantValue != null && Convert.ToInt32(field.ConstantValue.ToString()) == templateValue)
                                        {
                                            return true;
                                        }

                                        var field1 = f as DefaultUnresolvedField;

                                        if (field1 != null && field1.ConstantValue != null && Convert.ToInt32(field1.ConstantValue.ToString()) == templateValue)
                                        {
                                            return true;
                                        }

                                        return false;
                                    }, GetMemberOptions.IgnoreInheritedMembers);

                                    if (fields.Count() > 0)
                                    {
                                        var template = this.Emitter.Validator.GetAttribute(fields.First().Attributes, "Bridge.TemplateAttribute");

                                        if (template != null)
                                        {
                                            selector = string.Format(template.PositionalArguments.First().ConstantValue.ToString(), selector);
                                        }
                                    }
                                }
                            }

                            list.Add(string.Format(format, eventName, selector, this.Emitter.GetEntityName(method)));
                        }
                    }
                }
            }
        }

        private void LogWarning(string message)
        {
            var logger = this.Emitter.Log as Bridge.Translator.Logging.Logger;
            bool? wrappingValue = null;

            if (logger != null && logger.UseTimeStamp)
            {
                wrappingValue = logger.UseTimeStamp;
                logger.UseTimeStamp = false;
            }

            this.Emitter.Log.Warn(message);

            if (wrappingValue.HasValue)
            {
                logger.UseTimeStamp = wrappingValue.Value;
            }
        }

        private void LogAutoStartupWarning(MethodDeclaration method)
        {
            this.LogWarning(string.Format("'{0}.{1}': an entry point cannot be generic or in a generic type", this.TypeInfo.Type.ReflectionName, method.Name));
        }
    }
}