using System;
using ICSharpCode.NRefactory.CSharp;
using System.Linq;
using ICSharpCode.NRefactory.Semantics;
using System.Collections.Generic;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Bridge.Contract;

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
            private set;
        }

        public string[] ArgumentsNames
        {
            get;
            private set;
        }

        public Expression ParamsExpression
        {
            get;
            private set;
        }

        public NamedParamExpression[] NamedExpressions
        {
            get;
            private set;
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

        public ArgumentsInfo(IEmitter emitter, InvocationExpression invocationExpression)
        {
            this.Emitter = emitter;
            this.Expression = invocationExpression;

            var arguments = invocationExpression.Arguments.ToList();
            this.ResolveResult = emitter.Resolver.ResolveNode(invocationExpression, emitter) as InvocationResolveResult;

            this.BuildArgumentsList(arguments);
            if (this.ResolveResult != null)
            {
                this.HasTypeArguments = ((IMethod)this.ResolveResult.Member).TypeArguments.Count > 0;
                this.BuildTypedArguments(invocationExpression.Target);
            }
        }

        public ArgumentsInfo(IEmitter emitter, IndexerExpression invocationExpression)
        {
            this.Emitter = emitter;
            this.Expression = invocationExpression;

            var arguments = invocationExpression.Arguments.ToList();
            this.ResolveResult = emitter.Resolver.ResolveNode(invocationExpression, emitter) as InvocationResolveResult;

            this.BuildArgumentsList(arguments);
            if (this.ResolveResult != null)
            {
                this.BuildTypedArguments(invocationExpression.Target);
            }
        }

        public ArgumentsInfo(IEmitter emitter, Expression expression, ResolveResult rr = null)
        {
            this.Emitter = emitter;
            this.Expression = expression;

            this.ArgumentsExpressions = new Expression[] { expression };
            this.ArgumentsNames = new string[] { "{this}" };
            this.ThisArgument = expression;
            this.CreateNamedExpressions(this.ArgumentsNames, this.ArgumentsExpressions);

            if (rr is MemberResolveResult)
            {
                this.BuildTypedArguments((MemberResolveResult)rr);
            }
        }

        public ArgumentsInfo(IEmitter emitter, ObjectCreateExpression objectCreateExpression)
        {
            this.Emitter = emitter;
            this.Expression = objectCreateExpression;

            var arguments = objectCreateExpression.Arguments.ToList();
            this.ResolveResult = emitter.Resolver.ResolveNode(objectCreateExpression, emitter) as InvocationResolveResult;

            this.BuildArgumentsList(arguments);
            this.BuildTypedArguments(objectCreateExpression.Type);
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

        private void BuildTypedArguments(MemberResolveResult rr)
        {
            var typeParams = rr.Member.DeclaringTypeDefinition.TypeParameters;
            var typeArgs = rr.Member.DeclaringType.TypeArguments;
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

                if (resolvedMethod != null)
                {
                    var inlineStr = this.Emitter.GetInline(resolvedMethod);
                    named = !string.IsNullOrEmpty(inlineStr);
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
                    }
                    else
                    {
                        if (paramsArg == null && (parameters.Count > (i + shift)) && parameters[i + shift].IsParams)
                        {
                            if (resolvedMethod.DeclaringTypeDefinition == null || !this.Emitter.Validator.IsIgnoreType(resolvedMethod.DeclaringTypeDefinition))
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
                        if (named)
                        {
                            result[i] = new PrimitiveExpression(t);
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

        private NamedParamExpression[] CreateNamedExpressions(string[] names, Expression[] expressions)
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
