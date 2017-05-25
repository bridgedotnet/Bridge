using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using ICSharpCode.NRefactory.TypeSystem;
using Object.Net.Utilities;

namespace Bridge.Translator
{
    public partial class ConstructorBlock : AbstractMethodBlock, IConstructorBlock
    {
        public ConstructorBlock(IEmitter emitter, ITypeInfo typeInfo, bool staticBlock)
            : base(emitter, typeInfo.TypeDeclaration)
        {
            this.Emitter = emitter;
            this.TypeInfo = typeInfo;
            this.StaticBlock = staticBlock;
        }

        public ITypeInfo TypeInfo
        {
            get;
            set;
        }

        public bool StaticBlock
        {
            get;
            set;
        }

        public bool HasEntryPoint
        {
            get; set;
        }

        protected override void DoEmit()
        {
            if (this.StaticBlock)
            {
                this.EmitCtorForStaticClass();
            }
            else
            {
                this.EmitCtorForInstantiableClass();
            }
        }

        protected virtual IEnumerable<string> GetInjectors()
        {
            var handlers = this.GetEventsAndAutoStartupMethods();
            var injectors = this.Emitter.Plugins.GetConstructorInjectors(this);
            return injectors.Concat(handlers);
        }

        protected virtual void EmitCtorForStaticClass()
        {
            var injectors = this.GetInjectors();
            IEnumerable<string> fieldsInjectors = null;

            var fieldBlock = new FieldBlock(this.Emitter, this.TypeInfo, true, true);
            fieldBlock.Emit();

            fieldsInjectors = fieldBlock.Injectors;

            if (fieldBlock.WasEmitted)
            {
                this.Emitter.Comma = true;
            }

            bool ctorHeader = false;
            if (this.TypeInfo.StaticConfig.HasConfigMembers || injectors.Any() || fieldsInjectors.Any())
            {
                this.EnsureComma();

                if (this.TypeInfo.StaticConfig.HasConfigMembers)
                {
                    var configBlock = new FieldBlock(this.Emitter, this.TypeInfo, true, false);
                    configBlock.Emit();

                    if (configBlock.Injectors.Count > 0)
                    {
                        injectors = configBlock.Injectors.Concat(injectors);
                    }

                    if (configBlock.WasEmitted)
                    {
                        this.Emitter.Comma = true;
                    }
                }

                if (fieldsInjectors.Any())
                {
                    injectors = fieldsInjectors.Concat(injectors);
                }

                if (injectors.Count() > 0)
                {
                    this.EnsureComma();

                    ctorHeader = true;
                    this.Write(JS.Fields.CTORS);
                    this.WriteColon();
                    this.BeginBlock();

                    this.Write(JS.Funcs.INIT);
                    this.WriteColon();
                    this.WriteFunction();
                    this.WriteOpenParentheses();
                    this.WriteCloseParentheses();
                    this.WriteSpace();
                    this.BeginBlock();

                    if (this.Emitter.TempVariables != null)
                    {
                        this.SimpleEmitTempVars();
                        this.Emitter.TempVariables = new Dictionary<string, bool>();
                    }

                    foreach (var fn in injectors)
                    {
                        this.Write(fn);
                        this.WriteNewLine();
                    }
                    this.EndBlock();
                    this.Emitter.Comma = true;
                }
            }

            var ctor = this.TypeInfo.StaticCtor;

            if (ctor != null && ctor.Body.HasChildren)
            {
                this.EnsureComma();

                if (!ctorHeader)
                {
                    ctorHeader = true;
                    this.Write(JS.Fields.CTORS);
                    this.WriteColon();
                    this.BeginBlock();
                }

                this.ResetLocals();
                var prevNamesMap = this.BuildLocalsNamesMap();
                this.Write(JS.Funcs.CONSTRUCTOR);
                this.WriteColon();
                this.WriteFunction();
                this.WriteOpenCloseParentheses(true);

                this.BeginBlock();
                var beginPosition = this.Emitter.Output.Length;

                ctor.Body.AcceptChildren(this.Emitter);

                if (!this.Emitter.IsAsync)
                {
                    this.EmitTempVars(beginPosition, true);
                }

                this.EndBlock();
                this.ClearLocalsNamesMap(prevNamesMap);
                this.Emitter.Comma = true;
            }

            if (ctorHeader)
            {
                this.WriteNewLine();
                this.EndBlock();
            }
        }

        private bool ctorHeader = false;
        protected virtual IEnumerable<string> EmitInitMembers()
        {
            var injectors = this.GetInjectors();

            var constructorWrapperString = CS.Wrappers.CONSTRUCTORWRAPPER + ":";

            IEnumerable<string> ctorWrappers = injectors.Where(i => i.StartsWith(constructorWrapperString)).Select(i => i.Substring(constructorWrapperString.Length));
            injectors = injectors.Where(i => !i.StartsWith(constructorWrapperString));

            IEnumerable<string> fieldsInjectors = null;

            var fieldBlock = new FieldBlock(this.Emitter, this.TypeInfo, false, true);
            fieldBlock.Emit();

            fieldsInjectors = fieldBlock.Injectors;

            if (fieldBlock.WasEmitted)
            {
                this.Emitter.Comma = true;
            }

            if (!this.TypeInfo.InstanceConfig.HasConfigMembers && !injectors.Any() && !fieldsInjectors.Any())
            {
                return ctorWrappers;
            }

            if (this.TypeInfo.InstanceConfig.HasConfigMembers)
            {
                var configBlock = new FieldBlock(this.Emitter, this.TypeInfo, false, false);
                configBlock.Emit();

                if (configBlock.Injectors.Count > 0)
                {
                    injectors = configBlock.Injectors.Concat(injectors);
                }

                if (configBlock.WasEmitted)
                {
                    this.Emitter.Comma = true;
                }
            }

            if (fieldsInjectors.Any())
            {
                injectors = fieldsInjectors.Concat(injectors);
            }

            if (injectors.Count() > 0)
            {
                this.EnsureComma();
                this.ctorHeader = true;
                this.Write(JS.Fields.CTORS);
                this.WriteColon();
                this.BeginBlock();

                this.Write(JS.Funcs.INIT);
                this.WriteColon();
                this.WriteFunction();
                this.WriteOpenParentheses();
                this.WriteCloseParentheses();
                this.WriteSpace();
                this.BeginBlock();

                if (this.Emitter.TempVariables != null)
                {
                    this.SimpleEmitTempVars();
                    this.Emitter.TempVariables = new Dictionary<string, bool>();
                }

                foreach (var fn in injectors)
                {
                    this.Write(fn);
                    this.WriteNewLine();
                }

                this.EndBlock();

                this.Emitter.Comma = true;
            }

            return ctorWrappers;
        }

        protected virtual void EmitCtorForInstantiableClass()
        {
            var baseType = this.Emitter.GetBaseTypeDefinition();
            var typeDef = this.Emitter.GetTypeDefinition();
            var isObjectLiteral = this.Emitter.Validator.IsObjectLiteral(typeDef);
            var isPlainMode = this.Emitter.Validator.GetObjectCreateMode(typeDef) == 0;

            var ctorWrappers = isObjectLiteral ? new string[0] : this.EmitInitMembers().ToArray();

            if (!this.TypeInfo.HasRealInstantiable(this.Emitter) && ctorWrappers.Length == 0 || isObjectLiteral && isPlainMode)
            {
                if (this.ctorHeader)
                {
                    this.WriteNewLine();
                    this.EndBlock();
                }
                return;
            }

            bool forceDefCtor = isObjectLiteral && this.Emitter.Validator.GetObjectCreateMode(typeDef) == 1 && this.TypeInfo.Ctors.Count == 0;

            if (typeDef.IsValueType || forceDefCtor || (this.TypeInfo.Ctors.Count == 0 && ctorWrappers.Length > 0))
            {
                this.TypeInfo.Ctors.Add(new ConstructorDeclaration
                {
                    Modifiers = Modifiers.Public,
                    Body = new BlockStatement()
                });
            }

            if (!this.ctorHeader && this.TypeInfo.Ctors.Count > 0)
            {
                this.EnsureComma();
                this.ctorHeader = true;
                this.Write(JS.Fields.CTORS);
                this.WriteColon();
                this.BeginBlock();
            }

            foreach (var ctor in this.TypeInfo.Ctors)
            {
                this.EnsureComma();
                this.ResetLocals();
                var prevMap = this.BuildLocalsMap();
                var prevNamesMap = this.BuildLocalsNamesMap();
                this.AddLocals(ctor.Parameters, ctor.Body);

                var ctorName = JS.Funcs.CONSTRUCTOR;

                if (this.TypeInfo.Ctors.Count > 1 && ctor.Parameters.Count > 0)
                {
                    var overloads = OverloadsCollection.Create(this.Emitter, ctor);
                    ctorName = overloads.GetOverloadName();
                }

                XmlToJsDoc.EmitComment(this, ctor);
                this.Write(ctorName);

                this.WriteColon();
                this.WriteFunction();

                int pos = this.Emitter.Output.Length;
                this.EmitMethodParameters(ctor.Parameters, null, ctor);
                var ctorParams = this.Emitter.Output.ToString().Substring(pos);

                this.WriteSpace();
                this.BeginBlock();
                var len = this.Emitter.Output.Length;
                var requireNewLine = false;

                var noThisInvocation = ctor.Initializer == null || ctor.Initializer.IsNull || ctor.Initializer.ConstructorInitializerType == ConstructorInitializerType.Base;
                IWriterInfo oldWriter = null;
                if (ctorWrappers.Length > 0 && noThisInvocation)
                {
                    oldWriter = this.SaveWriter();
                    this.NewWriter();
                }

                this.ConvertParamsToReferences(ctor.Parameters);

                if (len != this.Emitter.Output.Length)
                {
                    requireNewLine = true;
                }

                if (isObjectLiteral)
                {
                    if (requireNewLine)
                    {
                        this.WriteNewLine();
                    }

                    this.Write("var " + JS.Vars.D_THIS + " = ");

                    var isBaseObjectLiteral = baseType != null && this.Emitter.Validator.IsObjectLiteral(baseType);
                    if (isBaseObjectLiteral && baseType != null && (!this.Emitter.Validator.IsExternalType(baseType) || this.Emitter.Validator.IsBridgeClass(baseType)) ||
                    (ctor.Initializer != null && ctor.Initializer.ConstructorInitializerType == ConstructorInitializerType.This))
                    {
                        this.EmitBaseConstructor(ctor, ctorName, true);
                    }
                    else if (isBaseObjectLiteral && baseType != null && ctor.Initializer != null &&
                             ctor.Initializer.ConstructorInitializerType == ConstructorInitializerType.Base)
                    {
                        this.EmitExternalBaseCtor(ctor, ref requireNewLine);
                    }
                    else
                    {
                        this.Write("{};");
                    }

                    this.WriteNewLine();

                    string name = this.Emitter.Validator.GetCustomTypeName(typeDef, this.Emitter, false);
                    if (name.IsEmpty())
                    {
                        name = BridgeTypes.DefinitionToJsName(this.TypeInfo.Type, this.Emitter);
                    }

                    this.Write(JS.Vars.D_THIS + "." + JS.Funcs.GET_TYPE + " = function () { return " + name + "; };");

                    this.WriteNewLine();
                    this.Write("(function ()");
                    this.BeginBlock();
                    requireNewLine = false;
                }

                if (noThisInvocation)
                {
                    if (requireNewLine)
                    {
                        this.WriteNewLine();
                    }

                    if (isObjectLiteral)
                    {
                        var fieldBlock = new FieldBlock(this.Emitter, this.TypeInfo, false, false, true);
                        fieldBlock.Emit();

                        var properties = this.TypeInfo.InstanceProperties;

                        var names = new List<string>(properties.Keys);

                        foreach (var name in names)
                        {
                            var props = properties[name];

                            foreach (var prop in props)
                            {
                                var p = prop as PropertyDeclaration;
                                if (p != null)
                                {
                                    if (p.Getter.Body.IsNull && p.Setter.Body.IsNull)
                                    {
                                        continue;
                                    }

                                    this.Write(JS.Types.Object.DEFINEPROPERTY);
                                    this.WriteOpenParentheses();
                                    this.Write("this, ");
                                    this.WriteScript(OverloadsCollection.Create(this.Emitter, p).GetOverloadName());
                                    this.WriteComma();
                                    this.Emitter.Comma = false;
                                    this.BeginBlock();
                                    var memberResult = this.Emitter.Resolver.ResolveNode(p, this.Emitter) as MemberResolveResult;
                                    var block = new VisitorPropertyBlock(this.Emitter, p);
                                    block.EmitPropertyMethod(p, p.Getter, ((IProperty)memberResult.Member).Getter, false, true);
                                    block.EmitPropertyMethod(p, p.Setter, ((IProperty)memberResult.Member).Setter, true, true);
                                    this.EnsureComma(true);
                                    this.Write(JS.Fields.ENUMERABLE + ": true");
                                    this.WriteNewLine();
                                    this.EndBlock();
                                    this.WriteCloseParentheses();
                                    this.Write(";");
                                    this.WriteNewLine();
                                }
                            }
                        }
                    }
                    else
                    {
                        this.Write("this." + JS.Funcs.INITIALIZE + "();");
                        requireNewLine = true;
                    }
                }

                if (!isObjectLiteral)
                {
                    if (baseType != null && (!this.Emitter.Validator.IsExternalType(baseType) || this.Emitter.Validator.IsBridgeClass(baseType)) ||
                    (ctor.Initializer != null && ctor.Initializer.ConstructorInitializerType == ConstructorInitializerType.This))
                    {
                        if (requireNewLine)
                        {
                            this.WriteNewLine();
                            requireNewLine = false;
                        }
                        this.EmitBaseConstructor(ctor, ctorName, false);
                    }
                    else if (baseType != null && ctor.Initializer != null &&
                             ctor.Initializer.ConstructorInitializerType == ConstructorInitializerType.Base)
                    {
                        this.EmitExternalBaseCtor(ctor, ref requireNewLine);
                    }
                }

                var script = this.Emitter.GetScript(ctor);

                if (script == null)
                {
                    if (ctor.Body.HasChildren)
                    {
                        var beginPosition = this.Emitter.Output.Length;
                        if (requireNewLine)
                        {
                            this.WriteNewLine();
                        }

                        ctor.Body.AcceptChildren(this.Emitter);

                        if (!this.Emitter.IsAsync)
                        {
                            this.EmitTempVars(beginPosition, true);
                        }
                    }
                    else if (requireNewLine)
                    {
                        this.WriteNewLine();
                    }
                }
                else
                {
                    if (requireNewLine)
                    {
                        this.WriteNewLine();
                    }

                    this.WriteLines(script);
                }

                if (oldWriter != null)
                {
                    this.WrapBody(oldWriter, ctorWrappers, ctorParams);
                }

                if (isObjectLiteral)
                {
                    if (requireNewLine)
                    {
                        this.WriteNewLine();
                    }
                    this.EndBlock();
                    this.Write(")." + JS.Funcs.CALL + "(" + JS.Vars.D_THIS + ");");
                    this.WriteNewLine();
                    this.Write("return " + JS.Vars.D_THIS + ";");
                    this.WriteNewLine();
                }

                this.EndBlock();
                this.Emitter.Comma = true;
                this.ClearLocalsMap(prevMap);
                this.ClearLocalsNamesMap(prevNamesMap);
            }

            if (this.ctorHeader)
            {
                this.WriteNewLine();
                this.EndBlock();
            }
        }

        private void EmitExternalBaseCtor(ConstructorDeclaration ctor, ref bool requireNewLine)
        {
            if (ctor.Initializer != null && !ctor.Initializer.IsNull)
            {
                var member = ((InvocationResolveResult)this.Emitter.Resolver.ResolveNode(ctor.Initializer, this.Emitter)).Member;

                var inlineCode = this.Emitter.GetInline(member);

                if (!string.IsNullOrEmpty(inlineCode))
                {
                    if (requireNewLine)
                    {
                        this.WriteNewLine();
                        requireNewLine = false;
                    }

                    this.Write(JS.Types.Bridge.APPLY);
                    this.WriteOpenParentheses();

                    this.Write("this, ");
                    var argsInfo = new ArgumentsInfo(this.Emitter, ctor.Initializer);
                    new InlineArgumentsBlock(this.Emitter, argsInfo, inlineCode).Emit();
                    this.WriteCloseParentheses();
                    this.WriteSemiColon();
                    this.WriteNewLine();
                }
                else
                {
                    if (requireNewLine)
                    {
                        this.WriteNewLine();
                        requireNewLine = false;
                    }

                    var baseType = this.Emitter.GetBaseTypeDefinition();
                    string name = null;
                    if (this.TypeInfo.GetBaseTypes(this.Emitter).Any())
                    {
                        name = BridgeTypes.ToJsName(this.TypeInfo.GetBaseClass(this.Emitter), this.Emitter);
                    }
                    else
                    {
                        name = BridgeTypes.ToJsName(baseType, this.Emitter);
                    }

                    this.Write(name);
                    this.WriteCall();
                    int openPos = this.Emitter.Output.Length;
                    this.WriteOpenParentheses();
                    this.Write("this");

                    if (ctor.Initializer.Arguments.Count > 0)
                    {
                        this.Write(", ");
                        var argsInfo = new ArgumentsInfo(this.Emitter, ctor.Initializer);
                        var argsExpressions = argsInfo.ArgumentsExpressions;
                        var paramsArg = argsInfo.ParamsExpression;

                        new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, ctor.Initializer, openPos).Emit();
                    }

                    this.WriteCloseParentheses();
                    this.WriteSemiColon();
                    this.WriteNewLine();
                }
            }
        }

        protected virtual void WrapBody(IWriterInfo oldWriter, string[] ctorWrappers, string ctorParams)
        {
            var body = this.Emitter.Output.ToString();
            this.RestoreWriter(oldWriter);

            List<string> endParts = new List<string>();
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < ctorWrappers.Length; i++)
            {
                var isLast = i == (ctorWrappers.Length - 1);
                var ctorWrapper = ctorWrappers[i];
                var parts = ctorWrapper.Split(new[] { CS.Wrappers.Params.BODY }, StringSplitOptions.RemoveEmptyEntries);
                endParts.Add(parts[1]);

                sb.Append(parts[0]);
                sb.Append("function ");
                sb.Append(ctorParams);
                sb.Append(" {");

                if (!isLast)
                {
                    sb.Append(Bridge.Translator.Emitter.NEW_LINE);
                }

                Indent();

                for (var j = 0; j < this.Emitter.Level; j++)
                {
                    sb.Append(Bridge.Translator.Emitter.INDENT);
                }

                if (isLast)
                {
                    sb.Append(this.WriteIndentToString(body));
                }
            }

            endParts.Reverse();

            var newLine = false;
            foreach (var endPart in endParts)
            {
                Outdent();

                if (newLine)
                {
                    sb.Append(Bridge.Translator.Emitter.NEW_LINE);
                    for (var j = 0; j < this.Emitter.Level; j++)
                    {
                        sb.Append(Bridge.Translator.Emitter.INDENT);
                    }
                }
                else if (sb.ToString().Substring(sb.Length - 4) == Bridge.Translator.Emitter.INDENT)
                {
                    sb.Length -= 4;
                }
                newLine = true;

                sb.Append("}");
                sb.Append(endPart);
            }

            this.Write(sb.ToString());
            this.WriteNewLine();
        }

        protected virtual void EmitBaseConstructor(ConstructorDeclaration ctor, string ctorName, bool isObjectLiteral)
        {
            var initializer = ctor.Initializer != null && !ctor.Initializer.IsNull ? ctor.Initializer : new ConstructorInitializer()
            {
                ConstructorInitializerType = ConstructorInitializerType.Base
            };

            bool appendScope = false;

            if (initializer.ConstructorInitializerType == ConstructorInitializerType.Base)
            {
                var baseType = this.Emitter.GetBaseTypeDefinition();
                var baseName = JS.Funcs.CONSTRUCTOR;
                if (ctor.Initializer != null && !ctor.Initializer.IsNull)
                {
                    var member = ((InvocationResolveResult)this.Emitter.Resolver.ResolveNode(ctor.Initializer, this.Emitter)).Member;
                    var overloads = OverloadsCollection.Create(this.Emitter, member);
                    if (overloads.HasOverloads)
                    {
                        baseName = overloads.GetOverloadName();
                    }
                }

                string name = null;

                if (this.TypeInfo.GetBaseTypes(this.Emitter).Any())
                {
                    name = BridgeTypes.ToJsName(this.TypeInfo.GetBaseClass(this.Emitter), this.Emitter);
                }
                else
                {
                    name = BridgeTypes.ToJsName(baseType, this.Emitter);
                }

                this.Write(name, ".");
                this.Write(baseName);

                if (!isObjectLiteral)
                {
                    this.WriteCall();
                    appendScope = true;
                }
            }
            else
            {
                // this.WriteThis();
                string name = BridgeTypes.ToJsName(this.TypeInfo.Type, this.Emitter);
                this.Write(name);
                this.WriteDot();

                var baseName = JS.Funcs.CONSTRUCTOR;
                var member = ((InvocationResolveResult)this.Emitter.Resolver.ResolveNode(ctor.Initializer, this.Emitter)).Member;
                var overloads = OverloadsCollection.Create(this.Emitter, member);
                if (overloads.HasOverloads)
                {
                    baseName = overloads.GetOverloadName();
                }

                this.Write(baseName);

                if (!isObjectLiteral)
                {
                    this.WriteCall();
                    appendScope = true;
                }
            }
            int openPos = this.Emitter.Output.Length;
            this.WriteOpenParentheses();

            if (appendScope)
            {
                this.WriteThis();

                if (initializer.Arguments.Count > 0)
                {
                    this.WriteComma();
                }
            }

            if (initializer.Arguments.Count > 0)
            {
                var argsInfo = new ArgumentsInfo(this.Emitter, ctor.Initializer);
                var argsExpressions = argsInfo.ArgumentsExpressions;
                var paramsArg = argsInfo.ParamsExpression;

                new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, ctor.Initializer, openPos).Emit();
            }

            this.WriteCloseParentheses();
            this.WriteSemiColon();

            if (!isObjectLiteral)
            {
                this.WriteNewLine();
            }
        }

        protected virtual bool IsGenericType()
        {
            return this.TypeInfo.Type.TypeParameterCount > 0;
        }

        private bool IsGenericMethod(MethodDeclaration methodDeclaration)
        {
            return methodDeclaration.TypeParameters.Any();
        }
    }
}