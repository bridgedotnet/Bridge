using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using Object.Net.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Bridge.Translator
{
    public class ClassBlock : AbstractEmitterBlock
    {
        public ClassBlock(IEmitter emitter, ITypeInfo typeInfo)
            : base(emitter, typeInfo.TypeDeclaration)
        {
            this.TypeInfo = typeInfo;
        }

        public ITypeInfo TypeInfo
        {
            get;
            set;
        }

        public bool IsGeneric
        {
            get;
            set;
        }

        public int StartPosition
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            XmlToJsDoc.EmitComment(this, this.Emitter.Translator.EmitNode);

            this.EmitClassHeader();
            if (this.TypeInfo.TypeDeclaration.ClassType != ClassType.Interface)
            {
                this.Emitter.NamedFunctions = new Dictionary<string, string>();
                
                this.EmitInstantiableBlock();
                this.EmitStaticBlock();
            }
            this.EmitClassEnd();
        }

        protected virtual void EmitClassHeader()
        {
            var beforeDefineMethods = this.GetBeforeDefineMethods();

            if (beforeDefineMethods.Any())
            {
                foreach (var method in beforeDefineMethods)
                {
                    this.WriteNewLine();
                    this.Write(method);
                }

                this.WriteNewLine();
            }

            var topDefineMethods = this.GetTopDefineMethods();

            if (topDefineMethods.Any())
            {
                foreach (var method in topDefineMethods)
                {
                    //this.Emitter.EmitterOutput.TopOutput.Append('\n');
                    this.Emitter.EmitterOutput.TopOutput.Append(method);
                }

                //this.Emitter.EmitterOutput.TopOutput.Append('\n');
            }

            var typeDef = this.Emitter.GetTypeDefinition();
            string name = this.Emitter.Validator.GetCustomTypeName(typeDef, this.Emitter);
            this.IsGeneric = typeDef.GenericParameters.Count > 0;

            if (name.IsEmpty())
            {
                name = BridgeTypes.DefinitionToJsName(this.TypeInfo.Type, this.Emitter);
            }

            this.Write(Bridge.Translator.Emitter.ROOT + ".define");

            this.WriteOpenParentheses();

            this.Write("'" + name, "'");
            this.StartPosition = this.Emitter.Output.Length;
            this.Write(", ");

            if (this.IsGeneric)
            {
                this.WriteFunction();
                this.WriteOpenParentheses();

                foreach (var p in typeDef.GenericParameters)
                {
                    this.EnsureComma(false);
                    this.Write(p.Name);
                    this.Emitter.Comma = true;
                }
                this.Emitter.Comma = false;
                this.WriteCloseParentheses();

                this.Write(" { return ");
            }

            this.BeginBlock();

            string extend = this.Emitter.GetTypeHierarchy();

            if (extend.IsNotEmpty() && !this.TypeInfo.IsEnum)
            {
                var bridgeType = this.Emitter.BridgeTypes.Get(this.Emitter.TypeInfo);

                if (this.TypeInfo.InstanceMethods.Any(m => m.Value.Any(subm => this.Emitter.GetEntityName(subm) == "inherits")) ||
                    this.TypeInfo.InstanceConfig.Fields.Any(m => m.GetName(this.Emitter) == "inherits"))
                {
                    this.Write("$");
                }

                this.Write("inherits");
                this.WriteColon();
                if (Helpers.IsTypeArgInSubclass(bridgeType.TypeDefinition, bridgeType.TypeDefinition, this.Emitter, false))
                {
                    this.WriteFunction();
                    this.WriteOpenCloseParentheses(true);
                    this.WriteOpenBrace(true);
                    this.WriteReturn(true);
                    this.Write(extend);
                    this.WriteSemiColon();
                    this.WriteCloseBrace(true);
                }
                else
                {
                    this.Write(extend);
                }

                this.Emitter.Comma = true;
            }

            if (this.TypeInfo.Module != null)
            {
                this.WriteScope();
            }
        }

        protected virtual void WriteScope()
        {
            this.EnsureComma();
            this.Write("$scope");
            this.WriteColon();
            this.Write("exports");
            this.Emitter.Comma = true;
        }

        protected virtual void EmitStaticBlock()
        {
            if (this.TypeInfo.HasRealStatic(this.Emitter))
            {
                this.Emitter.StaticBlock = true;
                this.EnsureComma();

                if (this.TypeInfo.InstanceMethods.Any(m => m.Value.Any(subm => this.Emitter.GetEntityName(subm) == "statics")) ||
                    this.TypeInfo.InstanceConfig.Fields.Any(m => m.GetName(this.Emitter) == "statics"))
                {
                    this.Write("$");
                }

                this.Write("statics");
                this.WriteColon();
                this.BeginBlock();

                new ConstructorBlock(this.Emitter, this.TypeInfo, true).Emit();
                new MethodBlock(this.Emitter, this.TypeInfo, true).Emit();

                this.WriteNewLine();
                this.EndBlock();
                this.Emitter.Comma = true;
                this.Emitter.StaticBlock = false;
            }
        }

        protected virtual void EmitInstantiableBlock()
        {
            if (this.TypeInfo.IsEnum)
            {
                this.EnsureComma();
                this.Write("$enum: true");
                this.Emitter.Comma = true;

                if (this.Emitter.GetTypeDefinition(this.TypeInfo.Type)
                        .CustomAttributes.Any(attr => attr.AttributeType.FullName == "System.FlagsAttribute"))
                {
                    this.EnsureComma();
                    this.Write("$flags: true");
                    this.Emitter.Comma = true;
                }
            }

            var ctorBlock = new ConstructorBlock(this.Emitter, this.TypeInfo, false);

            if (this.TypeInfo.HasInstantiable || this.Emitter.Plugins.HasConstructorInjectors(ctorBlock) ||
                this.TypeInfo.ClassType == ClassType.Struct)
            {
                this.EnsureComma();
                ctorBlock.Emit();
                new MethodBlock(this.Emitter, this.TypeInfo, false).Emit();
            }
        }

        protected virtual void EmitClassEnd()
        {
            this.WriteNewLine();
            this.EndBlock();

            var classStr = this.Emitter.Output.ToString().Substring(this.StartPosition);

            if (Regex.IsMatch(classStr, "^\\s*,\\s*\\{\\s*\\}\\s*$", RegexOptions.Multiline))
            {
                this.Emitter.Output.Remove(this.StartPosition, this.Emitter.Output.Length - this.StartPosition);
            }

            if (this.IsGeneric)
            {
                this.Write("; }");
            }

            this.WriteCloseParentheses();
            this.WriteSemiColon();

            var afterDefineMethods = this.GetAfterDefineMethods();
            foreach (var method in afterDefineMethods)
            {
                this.WriteNewLine();
                this.Write(method);
            }

            var bottomDefineMethods = this.GetBottomDefineMethods();

            if (bottomDefineMethods.Any())
            {
                //this.Emitter.EmitterOutput.BottomOutput.Append('\n');
                foreach (var method in bottomDefineMethods)
                {
                    //this.Emitter.EmitterOutput.BottomOutput.Append('\n');
                    this.Emitter.EmitterOutput.BottomOutput.Append(method);
                }
            }

            this.EmitNamedFunctions();

            this.WriteNewLine();
            this.WriteNewLine();
        }

        private bool NsIsRegistered(string[] parts)
        {
            foreach (var ns in this.Emitter.RegisteredPrivateNamespaces)
            {
                bool eq = true;
                for (int i = 0; i < parts.Length; i++)
                {
                    if (i >= ns.Length || ns[i] != parts[i])
                    {
                        eq = false;
                    }
                }

                if (eq)
                {
                    return true;
                }
            }

            return false;
        }

        protected virtual void EmitNamedFunctions()
        {
            if (this.Emitter.NamedFunctions.Count > 0)
            {
                this.Emitter.Comma = false;

                if (!this.Emitter.IsPrivateVarIntroduced)
                {
                    this.WriteNewLine();
                    this.WriteNewLine();
                    this.Write("var $_ = {};");
                    this.Emitter.IsPrivateVarIntroduced = true;
                }

                var name = BridgeTypes.ToJsName(this.Emitter.TypeInfo.Type, this.Emitter, true);
                var parts = name.Split(new[]{'.'}, StringSplitOptions.RemoveEmptyEntries);

                if (!this.NsIsRegistered(parts))
                {
                    this.WriteNewLine();
                    this.WriteNewLine();
                    this.Write("Bridge.ns(");
                    this.WriteScript(name);
                    this.Write(", $_)");
                    this.Emitter.RegisteredPrivateNamespaces.Add(parts);
                }
                
                this.WriteNewLine();
                this.WriteNewLine();
                this.Write("Bridge.apply($_.");
                this.Write(name);
                this.Write(", ");
                this.BeginBlock();

                foreach (KeyValuePair<string, string> namedFunction in this.Emitter.NamedFunctions)
                {
                    this.EnsureComma();
                    this.Write(namedFunction.Key + ": " + namedFunction.Value);
                    this.Emitter.Comma = true;
                }

                this.WriteNewLine();
                this.EndBlock();
                this.WriteCloseParentheses();
                this.WriteSemiColon();
            }
        }

        protected virtual IEnumerable<string> GetDefineMethods(string prefix, Func<MethodDeclaration, IMethod, string> fn)
        {
            var methods = this.TypeInfo.InstanceMethods;
            var attrName = "Bridge.InitAttribute";
            int value = 0;

            switch (prefix)
            {
                case "After":
                    value = 0;
                    break;
                case "Before":
                    value = 1;
                    break;
                case "Top":
                    value = 2;
                    break;
                case "Bottom":
                    value = 3;
                    break;
            }

            foreach (var methodGroup in methods)
            {
                foreach (var method in methodGroup.Value)
                {
                    foreach (var attrSection in method.Attributes)
                    {
                        foreach (var attr in attrSection.Attributes)
                        {
                            var rr = this.Emitter.Resolver.ResolveNode(attr.Type, this.Emitter);
                            if (rr.Type.FullName == attrName)
                            {
                                throw new EmitterException(attr, "Instance method cannot be Init method");
                            }
                        }
                    }
                }
            }

            methods = this.TypeInfo.StaticMethods;
            List<string> list = new List<string>();

            foreach (var methodGroup in methods)
            {
                foreach (var method in methodGroup.Value)
                {
                    MemberResolveResult rrMember = null;
                    IMethod rrMethod = null;
                    foreach (var attrSection in method.Attributes)
                    {
                        foreach (var attr in attrSection.Attributes)
                        {
                            var rr = this.Emitter.Resolver.ResolveNode(attr.Type, this.Emitter);
                            if (rr.Type.FullName == attrName)
                            {
                                int? initPosition = null;
                                if (attr.HasArgumentList)
                                {
                                    if (attr.Arguments.Count > 0)
                                    {
                                        var argExpr = attr.Arguments.First();
                                        var argrr = this.Emitter.Resolver.ResolveNode(argExpr, this.Emitter);
                                        if (argrr.ConstantValue is int)
                                        {
                                            initPosition = (int)argrr.ConstantValue;
                                        }
                                    }
                                    else
                                    {
                                        initPosition = 0; //Default InitPosition.After
                                    }
                                }
                                else
                                {
                                    initPosition = 0; //Default InitPosition.After
                                }

                                if (initPosition == value)
                                {
                                    if (rrMember == null)
                                    {
                                        rrMember = this.Emitter.Resolver.ResolveNode(method, this.Emitter) as MemberResolveResult;
                                        rrMethod = rrMember != null ? rrMember.Member as IMethod : null;
                                    }

                                    if (rrMethod != null)
                                    {
                                        if (rrMethod.TypeParameters.Count > 0)
                                        {
                                            throw new EmitterException(method, "Init method cannot be generic");
                                        }

                                        if (rrMethod.Parameters.Count > 0)
                                        {
                                            throw new EmitterException(method, "Init method should not have parameters");
                                        }

                                        if (rrMethod.ReturnType.Kind != TypeKind.Void)
                                        {
                                            throw new EmitterException(method, "Init method should not return anything");
                                        }

                                        list.Add(fn(method, rrMethod));
                                    }
                                }
                            }
                        }
                    }
                }
            }

            return list;
        }

        protected virtual IEnumerable<string> GetBeforeDefineMethods()
        {
            return this.GetDefineMethods("Before",
                (method, rrMethod) =>
                {
                    this.PushWriter("Bridge.init(function(){0});");
                    this.ResetLocals();
                    var prevMap = this.BuildLocalsMap();
                    var prevNamesMap = this.BuildLocalsNamesMap();

                    method.Body.AcceptVisitor(this.Emitter);

                    this.ClearLocalsMap(prevMap);
                    this.ClearLocalsNamesMap(prevNamesMap);
                    return this.PopWriter(true);
                });
        }

        protected virtual IEnumerable<string> GetTopDefineMethods()
        {
            return this.GetDefineMethods("Top",
                (method, rrMethod) =>
                {
                    this.PushWriter("{0}");
                    this.ResetLocals();
                    var prevMap = this.BuildLocalsMap();
                    var prevNamesMap = this.BuildLocalsNamesMap();
                    this.Emitter.NoBraceBlock = method.Body;
                    method.Body.AcceptVisitor(this.Emitter);

                    this.ClearLocalsMap(prevMap);
                    this.ClearLocalsNamesMap(prevNamesMap);
                    return this.PopWriter(true);
                });
        }

        protected virtual IEnumerable<string> GetBottomDefineMethods()
        {
            return this.GetDefineMethods("Bottom",
                (method, rrMethod) =>
                {
                    this.PushWriter("{0}");
                    this.ResetLocals();
                    var prevMap = this.BuildLocalsMap();
                    var prevNamesMap = this.BuildLocalsNamesMap();
                    this.Emitter.NoBraceBlock = method.Body;
                    method.Body.AcceptVisitor(this.Emitter);

                    this.ClearLocalsMap(prevMap);
                    this.ClearLocalsNamesMap(prevNamesMap);
                    return this.PopWriter(true);
                });
        }

        protected virtual IEnumerable<string> GetAfterDefineMethods()
        {
            return this.GetDefineMethods("After",
                (method, rrMethod) =>
                    "Bridge.init(" + BridgeTypes.ToJsName(rrMethod.DeclaringTypeDefinition, this.Emitter) + "." +
                    this.Emitter.GetEntityName(method) + ");");
        }
    }
}
