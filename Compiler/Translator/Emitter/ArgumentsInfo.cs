using System;
using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public class ArgumentsInfo
    {
        public IEmitter Emitter
        {
            get;
            private set;
        }

        public Expression Expression
        {
            get;
            private set;
        }

        public InvocationResolveResult ResolveResult
        {
            get;
            private set;
        }

        public OperatorResolveResult OperatorResolveResult
        {
            get;
            private set;
        }

        public Expression[] ArgumentsExpressions
        {
            get;
            set;
        }

        public string[] ArgumentsNames
        {
            get;
            set;
        }

        public Expression ParamsExpression
        {
            get;
            private set;
        }

        public NamedParamExpression[] NamedExpressions
        {
            get;
            set;
        }

        public TypeParamExpression[] TypeArguments
        {
            get;
            private set;
        }

        public object ThisArgument
        {
            get;
            set;
        }

        public string ThisName
        {
            get;
            set;
        }

        public bool IsExtensionMethod
        {
            get;
            set;
        }

        public bool HasTypeArguments
        {
            get;
            set;
        }

        public IMethod Method { get; private set; }

        public IAttribute Attribute { get; set; }

        public string[] StringArguments
        {
            get; set;
        }

        public IType ThisType
        {
            get; set;
        }

        public ArgumentsInfo(IEmitter emitter, IMethod method)
        {
            this.Emitter = emitter;
            this.Expression = null;
            this.Method = method;
            this.BuildTypedArguments(method);
        }

        public ArgumentsInfo(IEmitter emitter, IAttribute attr)
        {
            this.Emitter = emitter;
            this.Expression = null;
            this.Attribute = attr;
        }

        public ArgumentsInfo(IEmitter emitter, string[] args)
        {
            this.Emitter = emitter;
            this.Expression = null;
            this.StringArguments = args;
        }

        public ArgumentsInfo(IEmitter emitter, ConstructorInitializer initializer)
        {
            this.Emitter = emitter;
            this.Expression = null;

            var arguments = initializer.Arguments.ToList();
            this.ResolveResult = emitter.Resolver.ResolveNode(initializer, emitter) as InvocationResolveResult;

            this.BuildArgumentsList(arguments);
            if (this.ResolveResult != null)
            {
                this.HasTypeArguments = ((IMethod)this.ResolveResult.Member).TypeArguments.Count > 0;
            }
        }

        public ArgumentsInfo(IEmitter emitter, InvocationExpression invocationExpression, IMethod method = null)
        {
            this.Emitter = emitter;
            this.Expression = invocationExpression;

            var arguments = invocationExpression.Arguments.ToList();
            var rr = emitter.Resolver.ResolveNode(invocationExpression, emitter);
            this.ResolveResult = rr as InvocationResolveResult;
            var drr = rr as DynamicInvocationResolveResult;

            if (this.ResolveResult == null && drr != null)
            {
                this.BuildDynamicArgumentsList(drr, arguments);
            }
            else
            {
                this.BuildArgumentsList(arguments);
            }

            if (this.ResolveResult != null)
            {
                this.HasTypeArguments = ((IMethod)this.ResolveResult.Member).TypeArguments.Count > 0;
                this.BuildTypedArguments(invocationExpression.Target);
            }

            if (method != null && method.Parameters.Count > 0)
            {
                this.ThisArgument = invocationExpression;
                var name = method.Parameters[0].Name;

                if (!this.ArgumentsNames.Contains(name))
                {
                    var list = this.ArgumentsNames.ToList();
                    list.Add(name);
                    this.ArgumentsNames = list.ToArray();

                    var expr = this.ArgumentsExpressions.ToList();
                    expr.Add(invocationExpression);
                    this.ArgumentsExpressions = expr.ToArray();

                    var namedExpr = this.NamedExpressions.ToList();
                    namedExpr.Add(new NamedParamExpression(name, invocationExpression));
                    this.NamedExpressions = namedExpr.ToArray();
                }
            }
        }

        public ArgumentsInfo(IEmitter emitter, IndexerExpression invocationExpression, InvocationResolveResult rr = null)
        {
            this.Emitter = emitter;
            this.Expression = invocationExpression;

            var arguments = invocationExpression.Arguments.ToList();
            this.ResolveResult = rr ?? emitter.Resolver.ResolveNode(invocationExpression, emitter) as InvocationResolveResult;

            this.BuildArgumentsList(arguments);
            if (this.ResolveResult != null)
            {
                this.BuildTypedArguments(this.ResolveResult.Member);
            }
        }

        public ArgumentsInfo(IEmitter emitter, Expression expression, InvocationResolveResult rr)
        {
            this.Emitter = emitter;
            this.Expression = expression;
            this.ResolveResult = rr;

            this.ArgumentsExpressions = new Expression[] { expression };
            this.ArgumentsNames = new string[] { rr.Member.Parameters.Count > 0 ? rr.Member.Parameters.First().Name : "{this}" };
            this.ThisArgument = expression;
            this.NamedExpressions = this.CreateNamedExpressions(this.ArgumentsNames, this.ArgumentsExpressions);

            this.BuildTypedArguments(rr.Member);
        }

        public ArgumentsInfo(IEmitter emitter, Expression expression, IMethod method)
        {
            this.Emitter = emitter;
            this.Expression = expression;

            this.ArgumentsExpressions = new Expression[] { expression };
            this.ArgumentsNames = new string[] {method.Parameters.Count > 0 ? method.Parameters.First().Name : "{this}" };
            this.ThisArgument = expression;
            this.NamedExpressions = this.CreateNamedExpressions(this.ArgumentsNames, this.ArgumentsExpressions);

            this.BuildTypedArguments(method);
        }

        public ArgumentsInfo(IEmitter emitter, Expression expression, ResolveResult rr = null)
        {
            this.Emitter = emitter;
            this.Expression = expression;

            this.ArgumentsExpressions = new Expression[] { expression };
            this.ArgumentsNames = new string[] { "{this}" };
            this.ThisArgument = expression;
            this.NamedExpressions = this.CreateNamedExpressions(this.ArgumentsNames, this.ArgumentsExpressions);

            if (rr is MemberResolveResult)
            {
                this.BuildTypedArguments(((MemberResolveResult)rr).Member);
            }
        }

        public ArgumentsInfo(IEmitter emitter, ObjectCreateExpression objectCreateExpression, IMethod method = null)
        {
            this.Emitter = emitter;
            this.Expression = objectCreateExpression;

            var arguments = objectCreateExpression.Arguments.ToList();
            var rr = emitter.Resolver.ResolveNode(objectCreateExpression, emitter);
            var drr = rr as DynamicInvocationResolveResult;
            if (drr != null)
            {
                var group = drr.Target as MethodGroupResolveResult;

                if (group != null && group.Methods.Count() > 1)
                {
                    throw new EmitterException(objectCreateExpression, Bridge.Translator.Constants.Messages.Exceptions.DYNAMIC_INVOCATION_TOO_MANY_OVERLOADS);
                }
            }

            this.ResolveResult = rr as InvocationResolveResult;
            this.BuildArgumentsList(arguments);
            this.BuildTypedArguments(objectCreateExpression.Type);

            if (method != null && method.Parameters.Count > 0)
            {
                this.ThisArgument = objectCreateExpression;
                var name = method.Parameters[0].Name;

                if (!this.ArgumentsNames.Contains(name))
                {
                    var list = this.ArgumentsNames.ToList();
                    list.Add(name);
                    this.ArgumentsNames = list.ToArray();

                    var expr = this.ArgumentsExpressions.ToList();
                    expr.Add(objectCreateExpression);
                    this.ArgumentsExpressions = expr.ToArray();

                    var namedExpr = this.NamedExpressions.ToList();
                    namedExpr.Add(new NamedParamExpression(name, objectCreateExpression));
                    this.NamedExpressions = namedExpr.ToArray();
                }
            }
        }

        public ArgumentsInfo(IEmitter emitter, AssignmentExpression assignmentExpression, OperatorResolveResult operatorResolveResult, IMethod method)
        {
            this.Emitter = emitter;
            this.Expression = assignmentExpression;
            this.OperatorResolveResult = operatorResolveResult;

            this.BuildOperatorArgumentsList(new Expression[] { assignmentExpression.Left, assignmentExpression.Right }, operatorResolveResult.UserDefinedOperatorMethod ?? method);
            this.BuildOperatorTypedArguments();
        }

        public ArgumentsInfo(IEmitter emitter, BinaryOperatorExpression binaryOperatorExpression, OperatorResolveResult operatorResolveResult, IMethod method)
        {
            this.Emitter = emitter;
            this.Expression = binaryOperatorExpression;
            this.OperatorResolveResult = operatorResolveResult;

            this.BuildOperatorArgumentsList(new Expression[] { binaryOperatorExpression.Left, binaryOperatorExpression.Right }, operatorResolveResult.UserDefinedOperatorMethod ?? method);
            this.BuildOperatorTypedArguments();
        }

        public ArgumentsInfo(IEmitter emitter, UnaryOperatorExpression unaryOperatorExpression, OperatorResolveResult operatorResolveResult, IMethod method)
        {
            this.Emitter = emitter;
            this.Expression = unaryOperatorExpression;
            this.OperatorResolveResult = operatorResolveResult;

            this.BuildOperatorArgumentsList(new Expression[] { unaryOperatorExpression.Expression }, operatorResolveResult.UserDefinedOperatorMethod ?? method);
            this.BuildOperatorTypedArguments();
        }

        private void BuildTypedArguments(AstType type)
        {
            var simpleType = type as SimpleType;

            if (simpleType != null)
            {
                AstNodeCollection<AstType> typedArguments = simpleType.TypeArguments;
                IList<ITypeParameter> typeParams = null;

                if (this.ResolveResult.Member.DeclaringTypeDefinition != null)
                {
                    typeParams = this.ResolveResult.Member.DeclaringTypeDefinition.TypeParameters;
                }
                else if (this.ResolveResult.Member is SpecializedMethod)
                {
                    typeParams = ((SpecializedMethod)this.ResolveResult.Member).TypeParameters;
                }

                this.TypeArguments = new TypeParamExpression[typedArguments.Count];
                var list = typedArguments.ToList();
                for (int i = 0; i < list.Count; i++)
                {
                    this.TypeArguments[i] = new TypeParamExpression(typeParams[i].Name, list[i], null);
                }
            }
        }

        private void BuildTypedArguments(IMember member)
        {
            var typeParams = member.DeclaringTypeDefinition.TypeParameters;
            var typeArgs = member.DeclaringType.TypeArguments;
            var temp = new TypeParamExpression[typeParams.Count];

            for (int i = 0; i < typeParams.Count; i++)
            {
                temp[i] = new TypeParamExpression(typeParams[i].Name, null, typeArgs[i], true);
            }

            this.TypeArguments = temp;
        }

        private void BuildTypedArguments(Expression expression)
        {
            AstNodeCollection<AstType> typedArguments = null;

            var identifierExpression = expression as IdentifierExpression;
            if (identifierExpression != null)
            {
                typedArguments = identifierExpression.TypeArguments;
            }
            else
            {
                var memberRefExpression = expression as MemberReferenceExpression;
                if (memberRefExpression != null)
                {
                    typedArguments = memberRefExpression.TypeArguments;
                }
            }

            var method = this.ResolveResult.Member as IMethod;

            if (method != null)
            {
                this.TypeArguments = new TypeParamExpression[method.TypeParameters.Count];

                if (typedArguments != null && typedArguments.Count == method.TypeParameters.Count)
                {
                    var list = typedArguments.ToList();
                    for (int i = 0; i < list.Count; i++)
                    {
                        this.TypeArguments[i] = new TypeParamExpression(method.TypeParameters[i].Name, list[i], null);
                    }
                }
                else
                {
                    for (int i = 0; i < method.TypeArguments.Count; i++)
                    {
                        this.TypeArguments[i] = new TypeParamExpression(method.TypeParameters[i].Name, null, method.TypeArguments[i]);
                    }
                }

                if (method.DeclaringType != null && method.DeclaringTypeDefinition != null && method.DeclaringTypeDefinition.TypeParameters.Count > 0)
                {
                    var typeParams = method.DeclaringTypeDefinition.TypeParameters;
                    var typeArgs = method.DeclaringType.TypeArguments;
                    var temp = new TypeParamExpression[typeParams.Count];

                    for (int i = 0; i < typeParams.Count; i++)
                    {
                        temp[i] = new TypeParamExpression(typeParams[i].Name, null, typeArgs[i], true);
                    }

                    this.TypeArguments = this.TypeArguments.Concat(temp).ToArray();
                }
            }
        }

        private void BuildOperatorTypedArguments()
        {
            var method = this.OperatorResolveResult.UserDefinedOperatorMethod;

            if (method != null)
            {
                for (int i = 0; i < method.TypeArguments.Count; i++)
                {
                    this.TypeArguments[i] = new TypeParamExpression(method.TypeParameters[i].Name, null, method.TypeArguments[i]);
                }
            }
        }

        private void BuildDynamicArgumentsList(DynamicInvocationResolveResult drr, IList<Expression> arguments)
        {
            Expression paramsArg = null;
            string paramArgName = null;
            IMethod method = null;
            var group = drr.Target as MethodGroupResolveResult;

            if (group != null && group.Methods.Count() > 1)
            {
                method = group.Methods.FirstOrDefault(m =>
                {
                    if (drr.Arguments.Count != m.Parameters.Count)
                    {
                        return false;
                    }

                    for (int i = 0; i < m.Parameters.Count; i++)
                    {
                        var argType = drr.Arguments[i].Type;

                        if (argType.Kind == TypeKind.Dynamic)
                        {
                            argType = this.Emitter.Resolver.Compilation.FindType(TypeCode.Object);
                        }

                        if (!m.Parameters[i].Type.Equals(argType))
                        {
                            return false;
                        }
                    }

                    return true;
                });

                if (method == null)
                {
                    throw new EmitterException(this.Expression, Bridge.Translator.Constants.Messages.Exceptions.DYNAMIC_INVOCATION_TOO_MANY_OVERLOADS);
                }
            }

            if (method != null)
            {
                var member = method;
                var parameters = method.Parameters;

                Expression[] result = new Expression[parameters.Count];
                string[] names = new string[result.Length];
                bool named = false;
                int i = 0;
                bool isInterfaceMember = false;

                if (member != null)
                {
                    var inlineStr = this.Emitter.GetInline(member);
                    named = !string.IsNullOrEmpty(inlineStr);

                    isInterfaceMember = member.DeclaringTypeDefinition != null &&
                                        member.DeclaringTypeDefinition.Kind == TypeKind.Interface;
                }

                foreach (var arg in arguments)
                {
                    if (arg is NamedArgumentExpression)
                    {
                        NamedArgumentExpression namedArg = (NamedArgumentExpression)arg;
                        var namedParam = parameters.First(p => p.Name == namedArg.Name);
                        var index = parameters.IndexOf(namedParam);

                        result[index] = namedArg.Expression;
                        names[index] = namedArg.Name;
                        named = true;

                        if (paramsArg == null && (parameters.Count > i) && parameters[i].IsParams)
                        {
                            if (member.DeclaringTypeDefinition == null || !this.Emitter.Validator.IsExternalType(member.DeclaringTypeDefinition))
                            {
                                paramsArg = namedArg.Expression;
                            }

                            paramArgName = namedArg.Name;
                        }
                    }
                    else
                    {
                        if (paramsArg == null && (parameters.Count > i) && parameters[i].IsParams)
                        {
                            if (member.DeclaringTypeDefinition == null || !this.Emitter.Validator.IsExternalType(member.DeclaringTypeDefinition))
                            {
                                paramsArg = arg;
                            }

                            paramArgName = parameters[i].Name;
                        }

                        if (i >= result.Length)
                        {
                            var list = result.ToList();
                            list.AddRange(new Expression[arguments.Count - i]);

                            var strList = names.ToList();
                            strList.AddRange(new string[arguments.Count - i]);

                            result = list.ToArray();
                            names = strList.ToArray();
                        }

                        result[i] = arg;
                        names[i] = i < parameters.Count ? parameters[i].Name : paramArgName;
                    }

                    i++;
                }

                for (i = 0; i < result.Length; i++)
                {
                    if (result[i] == null)
                    {
                        var p = parameters[i];
                        object t = null;
                        if (p.Type.Kind == TypeKind.Enum)
                        {
                            t = Helpers.GetEnumValue(this.Emitter, p.Type, p.ConstantValue);
                        }
                        else
                        {
                            t = p.ConstantValue;
                        }
                        if ((named || isInterfaceMember) && !p.IsParams)
                        {
                            if (t == null)
                            {
                                result[i] = new PrimitiveExpression(new RawValue("void 0"));
                            }
                            else
                            {
                                result[i] = new PrimitiveExpression(t);
                            }
                        }

                        names[i] = parameters[i].Name;
                    }
                }

                this.ArgumentsExpressions = result;
                this.ArgumentsNames = names;
                this.ParamsExpression = paramsArg;
                this.NamedExpressions = this.CreateNamedExpressions(names, result);
            }
            else
            {
                this.ArgumentsExpressions = arguments.ToArray();
            }
        }

        private void BuildArgumentsList(IList<Expression> arguments)
        {
            Expression paramsArg = null;
            string paramArgName = null;
            var resolveResult = this.ResolveResult;

            if (resolveResult != null)
            {
                var parameters = resolveResult.Member.Parameters;
                var resolvedMethod = resolveResult.Member as IMethod;
                var invocationResult = resolveResult as CSharpInvocationResolveResult;
                var isDelegate = resolveResult.Member.DeclaringType.Kind == TypeKind.Delegate;
                int shift = 0;

                if (resolvedMethod != null && invocationResult != null &&
                    resolvedMethod.IsExtensionMethod && invocationResult.IsExtensionMethodInvocation)
                {
                    shift = 1;
                    this.ThisName = resolvedMethod.Parameters[0].Name;
                    this.IsExtensionMethod = true;
                }

                Expression[] result = new Expression[parameters.Count - shift];
                string[] names = new string[result.Length];
                bool named = false;
                int i = 0;
                bool isInterfaceMember = false;

                if (resolveResult.Member != null)
                {
                    var inlineStr = this.Emitter.GetInline(resolveResult.Member);
                    named = !string.IsNullOrEmpty(inlineStr);

                    isInterfaceMember = resolveResult.Member.DeclaringTypeDefinition != null &&
                                        resolveResult.Member.DeclaringTypeDefinition.Kind == TypeKind.Interface;
                }

                foreach (var arg in arguments)
                {
                    if (arg is NamedArgumentExpression)
                    {
                        NamedArgumentExpression namedArg = (NamedArgumentExpression)arg;
                        var namedParam = parameters.First(p => p.Name == namedArg.Name);
                        var index = parameters.IndexOf(namedParam) - shift;

                        result[index] = namedArg.Expression;
                        names[index] = namedArg.Name;
                        named = true;
                        
                        if (paramsArg == null && parameters.FirstOrDefault(p => p.Name == namedArg.Name).IsParams)
                        {
                            if (resolveResult.Member.DeclaringTypeDefinition == null || !this.Emitter.Validator.IsExternalType(resolveResult.Member.DeclaringTypeDefinition))
                            {
                                paramsArg = namedArg.Expression;
                            }

                            paramArgName = namedArg.Name;
                        }
                    }
                    else
                    {
                        if (paramsArg == null && (parameters.Count > (i + shift)) && parameters[i + shift].IsParams)
                        {
                            if (resolveResult.Member.DeclaringTypeDefinition == null || !this.Emitter.Validator.IsExternalType(resolveResult.Member.DeclaringTypeDefinition))
                            {
                                paramsArg = arg;
                            }

                            paramArgName = parameters[i + shift].Name;
                        }

                        if (i >= result.Length)
                        {
                            var list = result.ToList();
                            list.AddRange(new Expression[arguments.Count - i]);

                            var strList = names.ToList();
                            strList.AddRange(new string[arguments.Count - i]);

                            result = list.ToArray();
                            names = strList.ToArray();
                        }

                        result[i] = arg;
                        names[i] = (i + shift) < parameters.Count ? parameters[i + shift].Name : paramArgName;
                    }

                    i++;
                }

                for (i = 0; i < result.Length; i++)
                {
                    if (result[i] == null)
                    {
                        var p = parameters[i + shift];
                        object t = null;
                        if (p.Type.Kind == TypeKind.Enum)
                        {
                            t = Helpers.GetEnumValue(this.Emitter, p.Type, p.ConstantValue);
                        }
                        else
                        {
                            t = p.ConstantValue;
                        }
                        if ((named || isInterfaceMember || isDelegate) && !p.IsParams)
                        {
                            if (t == null)
                            {
                                result[i] = new PrimitiveExpression(new RawValue("void 0"));
                            }
                            else
                            {
                                result[i] = new PrimitiveExpression(t);
                            }
                        }

                        names[i] = parameters[i + shift].Name;
                    }
                }

                this.ArgumentsExpressions = result;
                this.ArgumentsNames = names;
                this.ParamsExpression = paramsArg;
                this.NamedExpressions = this.CreateNamedExpressions(names, result);
            }
            else
            {
                this.ArgumentsExpressions = arguments.ToArray();
            }
        }

        private void BuildOperatorArgumentsList(IList<Expression> arguments, IMethod method)
        {
            if (method != null)
            {
                var parameters = method.Parameters;

                Expression[] result = new Expression[parameters.Count];
                string[] names = new string[result.Length];

                int i = 0;
                foreach (var arg in arguments)
                {
                    if (arg is NamedArgumentExpression)
                    {
                        NamedArgumentExpression namedArg = (NamedArgumentExpression)arg;
                        var namedParam = parameters.First(p => p.Name == namedArg.Name);
                        var index = parameters.IndexOf(namedParam);

                        result[index] = namedArg.Expression;
                        names[index] = namedArg.Name;
                    }
                    else
                    {
                        if (i >= result.Length)
                        {
                            var list = result.ToList();
                            list.AddRange(new Expression[arguments.Count - i]);

                            var strList = names.ToList();
                            strList.AddRange(new string[arguments.Count - i]);

                            result = list.ToArray();
                            names = strList.ToArray();
                        }

                        result[i] = arg;
                        names[i] = parameters[i].Name;
                    }

                    i++;
                }

                for (i = 0; i < result.Length; i++)
                {
                    if (result[i] == null)
                    {
                        var p = parameters[i];

                        if (p.Type.Kind == TypeKind.Enum)
                        {
                            result[i] = new PrimitiveExpression(Helpers.GetEnumValue(this.Emitter, p.Type, p.ConstantValue));
                        }
                        else
                        {
                            result[i] = new PrimitiveExpression(p.ConstantValue);
                        }
                        names[i] = parameters[i].Name;
                    }
                }

                this.ArgumentsExpressions = result;
                this.ArgumentsNames = names;
                this.NamedExpressions = this.CreateNamedExpressions(names, result);
            }
            else
            {
                this.ArgumentsExpressions = arguments.ToArray();
            }
        }

        public NamedParamExpression[] CreateNamedExpressions(string[] names, Expression[] expressions)
        {
            var result = new NamedParamExpression[names.Length];

            for (int i = 0; i < result.Length; i++)
            {
                result[i] = new NamedParamExpression(names[i], expressions[i]);
            }

            return result;
        }

        public string GetThisValue()
        {
            if (this.ThisArgument != null)
            {
                if (this.ThisArgument is string)
                {
                    return this.ThisArgument.ToString();
                }

                if (this.ThisArgument is Expression)
                {
                    ((Expression)this.ThisArgument).AcceptVisitor(this.Emitter);
                    return null;
                }
            }

            return "null";
        }

        public void AddExtensionParam()
        {
            var result = this.ArgumentsExpressions;
            var namedResult = this.NamedExpressions;
            var names = this.ArgumentsNames;

            if (this.IsExtensionMethod)
            {
                var list = result.ToList();
                list.Insert(0, null);

                var strList = names.ToList();
                strList.Insert(0, null);

                var namedList = namedResult.ToList();
                namedList.Insert(0, new NamedParamExpression(this.ThisName, null));

                result = list.ToArray();
                names = strList.ToArray();
                namedResult = namedList.ToArray();

                result[0] = null;
                names[0] = this.ThisName;
            }

            this.ArgumentsExpressions = result;
            this.ArgumentsNames = names;
            this.NamedExpressions = namedResult;
        }
    }

    public class NamedParamExpression
    {
        public NamedParamExpression(string name, Expression expression)
        {
            this.Name = name;
            this.Expression = expression;
        }

        public string Name
        {
            get;
            private set;
        }

        public Expression Expression
        {
            get;
            private set;
        }
    }

    public class TypeParamExpression
    {
        public TypeParamExpression(string name, AstType type, IType iType, bool inherited = false)
        {
            this.Name = name;
            this.AstType = type;
            this.IType = iType;
            this.Inherited = inherited;
        }

        public string Name
        {
            get;
            private set;
        }

        public AstType AstType
        {
            get;
            private set;
        }

        public IType IType
        {
            get;
            private set;
        }

        public bool Inherited
        {
            get;
            private set;
        }
    }
}