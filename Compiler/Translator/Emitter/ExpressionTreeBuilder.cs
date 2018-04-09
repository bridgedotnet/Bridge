using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;
using Expression = System.Linq.Expressions.Expression;

namespace Bridge.Translator
{
    public class ExpressionTreeBuilder : ResolveResultVisitor<string, object>
    {
        private readonly ICompilation _compilation;
        private readonly ITypeDefinition _expression;
        private readonly Dictionary<IVariable, string> _allParameters;
        private SyntaxTree _syntaxTree;
        private IEmitter _emitter;
        private AbstractEmitterBlock _block;

        public ExpressionTreeBuilder(ICompilation compilation, IEmitter emitter, SyntaxTree syntaxTree, AbstractEmitterBlock block)
        {
            _compilation = compilation;
            _emitter = emitter;
            _syntaxTree = syntaxTree;
            _expression = (ITypeDefinition)ReflectionHelper.ParseReflectionName(typeof(System.Linq.Expressions.Expression).FullName).Resolve(compilation);
            _allParameters = new Dictionary<IVariable, string>();
            _block = block;
        }

        private bool TypesMatch(IMethod method, Type[] argumentTypes)
        {
            if (method.Parameters.Count != argumentTypes.Length)
                return false;
            for (int i = 0; i < argumentTypes.Length; i++)
            {
                if (!method.Parameters[i].Type.Equals(ReflectionHelper.ParseReflectionName(argumentTypes[i].FullName).Resolve(_compilation)))
                    return false;
            }
            return true;
        }

        private string CompileMethodCall(IMethod m, string[] a)
        {
            string inlineCode = this._emitter.GetInline(m);
            var argsInfo = new ArgumentsInfo(this._emitter, a);
            var block = new InlineArgumentsBlock(this._emitter, argsInfo, inlineCode, m);
            var oldWriter = this._block.SaveWriter();
            var sb = this._block.NewWriter();
            block.Emit();
            string result = sb.ToString();
            this._block.RestoreWriter(oldWriter);

            return result;
        }

        private string CompileFactoryCall(string factoryMethodName, Type[] argumentTypes, string[] arguments)
        {
            var method = _expression.Methods.Single(m => m.Name == factoryMethodName && m.TypeParameters.Count == 0 && TypesMatch(m, argumentTypes));
            return CompileMethodCall(method, arguments);
        }

        public string BuildExpressionTree(LambdaResolveResult lambda)
        {
            return this.VisitLambdaResolveResult(lambda, null);
        }

        public override string VisitResolveResult(ResolveResult rr, object data)
        {
            if (rr.IsError)
            {
                throw new InvalidOperationException("ResolveResult" + rr + " is an error.");
            }

            return base.VisitResolveResult(rr, data);
        }

        public override string VisitLambdaResolveResult(LambdaResolveResult rr, object data)
        {
            var parameters = new JRaw[rr.Parameters.Count];
            var map = new Dictionary<string, string>();

            for (int i = 0; i < rr.Parameters.Count; i++)
            {
                var temp = this._block.GetTempVarName();
                _allParameters[rr.Parameters[i]] = temp;
                parameters[i] = new JRaw(temp);

                map.Add(temp, CompileFactoryCall("Parameter", new[] { typeof(Type), typeof(string) }, new[] { ExpressionTreeBuilder.GetTypeName(rr.Parameters[i].Type, this._emitter), this._emitter.ToJavaScript(rr.Parameters[i].Name) }));
            }

            var body = VisitResolveResult(rr.Body, null);
            var lambda = CompileFactoryCall("Lambda", new[] { typeof(Expression), typeof(ParameterExpression[]) }, new[] { body, this._emitter.ToJavaScript(parameters) });

            if (map.Count > 0)
            {
                StringBuilder sb = new StringBuilder();

                sb.Append("(");

                foreach (var item in map)
                {
                    sb.Append(item.Key);
                    sb.Append(" = ");
                    sb.Append(item.Value);
                    sb.Append(", ");
                }

                sb.Append(lambda);
                sb.Append(")");

                return sb.ToString();
            }

            return lambda;
        }

        public string GetExpressionForLocal(string name, string accessor, IType type)
        {
            var scriptType = ExpressionTreeBuilder.GetTypeName(type, this._emitter);

            string getterDefinition = "function () { return " + accessor + "}";
            string setterDefinition = "function ($) { " + accessor + " = $; }";

            /*if (UsesThisVisitor.Analyze(accessor))
            {
                getterDefinition = JsExpression.Invocation(JsExpression.Member(getterDefinition, "bind"), JsExpression.This);
                setterDefinition = JsExpression.Invocation(JsExpression.Member(setterDefinition, "bind"), JsExpression.This);
            }*/

            var obj = new JObject();
            obj["ntype"] = (int)ExpressionType.MemberAccess;
            obj["t"] = new JRaw(scriptType);

            var expression = new JObject();
            expression["ntype"] = (int)ExpressionType.Constant;
            expression["t"] = new JRaw(scriptType);
            expression["value"] = new JObject();
            obj["expression"] = expression;

            var member = new JObject();
            member["td"] = new JRaw("System.Object");
            member["n"] = name;
            member["t"] = (int)MemberTypes.Property;
            member["rt"] = new JRaw(scriptType);

            var getter = new JObject();
            getter["td"] = new JRaw("System.Object");
            getter["n"] = "get" + name;
            getter["t"] = (int)MemberTypes.Method;
            getter["rt"] = new JRaw(scriptType);
            getter["p"] = new JRaw("[]");
            getter["def"] = new JRaw(getterDefinition);
            member["g"] = getter;

            var setter = new JObject();
            setter["td"] = new JRaw("System.Object");
            setter["n"] = "set" + name;
            setter["t"] = (int)MemberTypes.Method;
            setter["rt"] = new JRaw("System.Object");
            setter["p"] = new JRaw("[" + scriptType + "]");
            setter["def"] = new JRaw(setterDefinition);
            member["s"] = setter;

            obj["member"] = member;

            return obj.ToString(Formatting.None);
        }

        public override string VisitLocalResolveResult(LocalResolveResult rr, object data)
        {
            string name;
            if (_allParameters.TryGetValue(rr.Variable, out name))
            {
                return name;
            }
            var id = rr.Variable.Name;

            if (this._emitter.LocalsNamesMap != null && this._emitter.LocalsNamesMap.ContainsKey(id))
            {
                id = this._emitter.LocalsNamesMap[id];
            }
            else if (this._emitter.LocalsMap != null && this._emitter.LocalsMap.ContainsKey(rr.Variable))
            {
                id = this._emitter.LocalsMap[rr.Variable];
            }

            return GetExpressionForLocal(rr.Variable.Name, id, rr.Variable.Type);
        }

        public override string VisitOperatorResolveResult(OperatorResolveResult rr, object data)
        {
            bool isUserDefined = rr.UserDefinedOperatorMethod != null && !this._emitter.Validator.IsExternalType(rr.UserDefinedOperatorMethod.DeclaringTypeDefinition);
            var arguments = new string[rr.Operands.Count + 1];
            for (int i = 0; i < rr.Operands.Count; i++)
                arguments[i] = VisitResolveResult(rr.Operands[i], null);
            arguments[arguments.Length - 1] = isUserDefined ? this.GetMember(rr.UserDefinedOperatorMethod) : ExpressionTreeBuilder.GetTypeName(rr.Type, this._emitter);
            if (rr.OperatorType == ExpressionType.Conditional)
                return CompileFactoryCall("Condition", new[] { typeof(Expression), typeof(Expression), typeof(Expression), typeof(Type) }, arguments);
            else
            {
                return CompileFactoryCall(rr.OperatorType.ToString(), rr.Operands.Count == 1 ? new[] { typeof(Expression), isUserDefined ? typeof(MethodInfo) : typeof(Type) } : new[] { typeof(Expression), typeof(Expression), isUserDefined ? typeof(MethodInfo) : typeof(Type) }, arguments);
            }
        }

        public override string VisitConversionResolveResult(ConversionResolveResult rr, object data)
        {
            var input = VisitResolveResult(rr.Input, null);
            if (rr.Conversion.IsIdentityConversion)
            {
                return input;
            }
            else if (rr.Conversion.IsAnonymousFunctionConversion)
            {
                var result = input;
                if (rr.Type.Name == "Expression")
                    result = CompileFactoryCall("Quote", new[] { typeof(Expression) }, new[] { result });
                return result;
            }
            else if (rr.Conversion.IsNullLiteralConversion)
            {
                return CompileFactoryCall("Constant", new[] { typeof(object), typeof(Type) }, new[] { input, ExpressionTreeBuilder.GetTypeName(rr.Type, this._emitter) });
            }
            else if (rr.Conversion.IsMethodGroupConversion)
            {
                var methodInfo = _compilation.FindType(typeof(MethodInfo));
                return CompileFactoryCall("Convert", new[] { typeof(Expression), typeof(Type) }, new[] {
                           CompileFactoryCall("Call", new[] { typeof(Expression), typeof(MethodInfo), typeof(Expression[]) }, new[] {
                               CompileFactoryCall("Constant", new[] { typeof(object), typeof(Type) }, new[] { this.GetMember(rr.Conversion.Method), ExpressionTreeBuilder.GetTypeName(methodInfo, this._emitter) }),
                               this.GetMember(methodInfo.GetMethods().Single(m => m.Name == "CreateDelegate" && m.Parameters.Count == 2 && m.Parameters[0].Type.FullName == typeof(Type).FullName && m.Parameters[1].Type.FullName == typeof(object).FullName)),
                               this._emitter.ToJavaScript(new [] {
                                   new JRaw(ExpressionTreeBuilder.GetTypeName(rr.Type, this._emitter)),
                                   new JRaw(rr.Conversion.Method.IsStatic ? "null" : VisitResolveResult(((MethodGroupResolveResult)rr.Input).TargetResult, null))
                               })
                           }),
                           ExpressionTreeBuilder.GetTypeName(rr.Type, this._emitter)
                       });
            }
            else
            {
                string methodName;
                if (rr.Conversion.IsTryCast)
                    methodName = "TypeAs";
                else if (rr.CheckForOverflow)
                    methodName = "ConvertChecked";
                else
                    methodName = "Convert";
                if (rr.Conversion.IsUserDefined)
                    return CompileFactoryCall(methodName, new[] { typeof(Expression), typeof(Type), typeof(MethodInfo) }, new[] { input, ExpressionTreeBuilder.GetTypeName(rr.Type, this._emitter), this.GetMember(rr.Conversion.Method) });
                else
                    return CompileFactoryCall(methodName, new[] { typeof(Expression), typeof(Type) }, new[] { input, ExpressionTreeBuilder.GetTypeName(rr.Type, this._emitter) });
            }
        }

        public override string VisitTypeIsResolveResult(TypeIsResolveResult rr, object data)
        {
            return CompileFactoryCall("TypeIs", new[] { typeof(Expression), typeof(Type) }, new[] { VisitResolveResult(rr.Input, null), ExpressionTreeBuilder.GetTypeName(rr.TargetType, this._emitter) });
        }

        public override string VisitMemberResolveResult(MemberResolveResult rr, object data)
        {
            var instance = rr.Member.IsStatic ? "null" : VisitResolveResult(rr.TargetResult, null);
            if (rr.TargetResult.Type.Kind == TypeKind.Array && rr.Member.Name == "Length")
                return CompileFactoryCall("ArrayLength", new[] { typeof(Expression) }, new[] { instance });

            if (rr.Member is IProperty)
                return CompileFactoryCall("Property", new[] { typeof(Expression), typeof(PropertyInfo) }, new[] { instance, this.GetMember(rr.Member) });
            if (rr.Member is IField)
                return CompileFactoryCall("Field", new[] { typeof(Expression), typeof(FieldInfo) }, new[] { instance, this.GetMember(rr.Member) });
            else
                throw new ArgumentException("Unsupported member " + rr + " in expression tree");
        }

        private List<IMember> GetMemberPath(ResolveResult rr)
        {
            var result = new List<IMember>();
            for (var mrr = rr as MemberResolveResult; mrr != null; mrr = mrr.TargetResult as MemberResolveResult)
            {
                result.Insert(0, mrr.Member);
            }
            return result;
        }

        private List<Tuple<List<IMember>, IList<ResolveResult>, IMethod>> BuildAssignmentMap(IEnumerable<ResolveResult> initializers)
        {
            var result = new List<Tuple<List<IMember>, IList<ResolveResult>, IMethod>>();
            foreach (var init in initializers)
            {
                if (init is OperatorResolveResult)
                {
                    var orr = init as OperatorResolveResult;
                    if (orr.OperatorType != ExpressionType.Assign)
                        throw new InvalidOperationException("Invalid initializer " + init);
                    result.Add(Tuple.Create(GetMemberPath(orr.Operands[0]), (IList<ResolveResult>)new[] { orr.Operands[1] }, (IMethod)null));
                }
                else if (init is InvocationResolveResult)
                {
                    var irr = init as InvocationResolveResult;
                    if (irr.Member.Name != "Add")
                        throw new InvalidOperationException("Invalid initializer " + init);
                    result.Add(Tuple.Create(GetMemberPath(irr.TargetResult), irr.GetArgumentsForCall(), (IMethod)irr.Member));
                }
                else
                    throw new InvalidOperationException("Invalid initializer " + init);
            }
            return result;
        }

        private bool FirstNEqual<T>(IList<T> first, IList<T> second, int count)
        {
            if (first.Count < count || second.Count < count)
                return false;
            for (int i = 0; i < count; i++)
            {
                if (!Equals(first[i], second[i]))
                    return false;
            }
            return true;
        }

        private Tuple<List<JRaw>, bool> GenerateMemberBindings(IEnumerator<Tuple<List<IMember>, IList<ResolveResult>, IMethod>> initializers, int index)
        {
            var firstPath = initializers.Current.Item1;
            var result = new List<JRaw>();
            bool hasMore = true;
            do
            {
                var currentTarget = initializers.Current.Item1[index];
                if (initializers.Current.Item1.Count > index + 1)
                {
                    var innerBindings = GenerateMemberBindings(initializers, index + 1);
                    result.Add(new JRaw(CompileFactoryCall("MemberBind", new[] { typeof(MemberInfo), typeof(MemberBinding[]) }, new[] { this.GetMember(currentTarget), this._emitter.ToJavaScript(innerBindings.Item1) })));

                    if (!innerBindings.Item2)
                    {
                        hasMore = false;
                        break;
                    }
                }
                else if (initializers.Current.Item3 != null)
                {
                    var currentPath = initializers.Current.Item1;
                    var elements = new List<JRaw>();
                    do
                    {
                        elements.Add(new JRaw(CompileFactoryCall("ElementInit", new[] { typeof(MethodInfo), typeof(Expression[]) }, new[] { this.GetMember(initializers.Current.Item3), this._emitter.ToJavaScript(initializers.Current.Item2.Select(i => new JRaw(VisitResolveResult(i, null)))) })));
                        if (!initializers.MoveNext())
                        {
                            hasMore = false;
                            break;
                        }
                    } while (FirstNEqual(currentPath, initializers.Current.Item1, index + 1));

                    result.Add(new JRaw(CompileFactoryCall("ListBind", new[] { typeof(MemberInfo), typeof(ElementInit[]) }, new[] { this.GetMember(currentTarget), this._emitter.ToJavaScript(elements) })));

                    if (!hasMore)
                        break;
                }
                else
                {
                    result.Add(new JRaw(CompileFactoryCall("Bind", new[] { typeof(MemberInfo), typeof(Expression) }, new[] { this.GetMember(currentTarget), VisitResolveResult(initializers.Current.Item2[0], null) })));

                    if (!initializers.MoveNext())
                    {
                        hasMore = false;
                        break;
                    }
                }
            } while (FirstNEqual(firstPath, initializers.Current.Item1, index));

            return Tuple.Create(result, hasMore);
        }

        public override string VisitCSharpInvocationResolveResult(CSharpInvocationResolveResult rr, object data)
        {
            return VisitInvocationResolveResult(rr, data);
        }

        public override string VisitInvocationResolveResult(InvocationResolveResult rr, object data)
        {
            var type = rr.Member.DeclaringType as AnonymousType;
            if (type != null)
            {
                if (!this._emitter.AnonymousTypes.ContainsKey(type))
                {
                    var config = new AnonymousTypeCreateBlock(this._emitter, null).CreateAnonymousType(type);
                    this._emitter.AnonymousTypes.Add(type, config);
                }
            }

            if (rr.Member.DeclaringType.Kind == TypeKind.Delegate && rr.Member.Name == "Invoke")
            {
                return CompileFactoryCall("Invoke", new[] { typeof(Type), typeof(Expression), typeof(Expression[]) }, new[] { ExpressionTreeBuilder.GetTypeName(rr.Type, this._emitter), VisitResolveResult(rr.TargetResult, null), this._emitter.ToJavaScript(rr.GetArgumentsForCall().Select(a => new JRaw(VisitResolveResult(a, null)))) });
            }
            else if (rr.Member is IMethod && ((IMethod)rr.Member).IsConstructor)
            {
                if (rr.Member.DeclaringType.Kind == TypeKind.Anonymous)
                {
                    var args = new List<JRaw>();
                    var members = new List<JRaw>();
                    foreach (var init in rr.InitializerStatements)
                    {
                        var assign = init as OperatorResolveResult;
                        if (assign == null || assign.OperatorType != ExpressionType.Assign || !(assign.Operands[0] is MemberResolveResult) || !(((MemberResolveResult)assign.Operands[0]).Member is IProperty))
                            throw new Exception("Invalid anonymous type initializer " + init);
                        args.Add(new JRaw(VisitResolveResult(assign.Operands[1], null)));
                        members.Add(new JRaw(this.GetMember(((MemberResolveResult)assign.Operands[0]).Member)));
                    }
                    return CompileFactoryCall("New", new[] { typeof(ConstructorInfo), typeof(Expression[]), typeof(MemberInfo[]) }, new[] { this.GetMember(rr.Member), this._emitter.ToJavaScript(args), this._emitter.ToJavaScript(members) });
                }
                else
                {
                    var result = CompileFactoryCall("New", new[] { typeof(ConstructorInfo), typeof(Expression[]) }, new[] { this.GetMember(rr.Member), this._emitter.ToJavaScript(rr.GetArgumentsForCall().Select(a => new JRaw(VisitResolveResult(a, null)))) });
                    if (rr.InitializerStatements.Count > 0)
                    {
                        if (rr.InitializerStatements[0] is InvocationResolveResult && ((InvocationResolveResult)rr.InitializerStatements[0]).TargetResult is InitializedObjectResolveResult)
                        {
                            var elements = new List<JRaw>();
                            foreach (var stmt in rr.InitializerStatements)
                            {
                                var irr = stmt as InvocationResolveResult;
                                if (irr == null)
                                    throw new Exception("Expected list initializer, was " + stmt);
                                elements.Add(new JRaw(CompileFactoryCall("ElementInit", new[] { typeof(MethodInfo), typeof(Expression[]) }, new[] { this.GetMember(irr.Member), this._emitter.ToJavaScript(irr.Arguments.Select(i => new JRaw(VisitResolveResult(i, null)))) })));
                            }
                            result = CompileFactoryCall("ListInit", new[] { typeof(NewExpression), typeof(ElementInit[]) }, new[] { result, this._emitter.ToJavaScript(elements) });
                        }
                        else
                        {
                            var map = BuildAssignmentMap(rr.InitializerStatements);
                            using (IEnumerator<Tuple<List<IMember>, IList<ResolveResult>, IMethod>> enm = map.GetEnumerator())
                            {
                                enm.MoveNext();
                                var bindings = GenerateMemberBindings(enm, 0);
                                result = CompileFactoryCall("MemberInit", new[] { typeof(NewExpression), typeof(MemberBinding[]) }, new[] { result, this._emitter.ToJavaScript(bindings.Item1) });
                            }
                        }
                    }
                    return result;
                }
            }
            else
            {
                var member = rr.Member is IProperty ? ((IProperty)rr.Member).Getter : rr.Member;    // If invoking a property (indexer), use the get method.
                return CompileFactoryCall("Call", new[] { typeof(Expression), typeof(MethodInfo), typeof(Expression[]) }, new[] { member.IsStatic ? "null" : VisitResolveResult(rr.TargetResult, null), this.GetMember(member), this._emitter.ToJavaScript(rr.GetArgumentsForCall().Select(a => new JRaw(VisitResolveResult(a, null)))) });
            }
        }

        public override string VisitTypeOfResolveResult(TypeOfResolveResult rr, object data)
        {
            return CompileFactoryCall("Constant", new[] { typeof(object), typeof(Type) }, new[] { ExpressionTreeBuilder.GetTypeName(rr.ReferencedType, this._emitter), ExpressionTreeBuilder.GetTypeName(rr.Type, this._emitter) });
        }

        public override string VisitDefaultResolveResult(ResolveResult rr, object data)
        {
            if (rr.Type.Kind == TypeKind.Null)
            {
                return "null";
            }

            throw new InvalidOperationException("Resolve result " + rr + " is not handled.");
        }

        private string MakeConstant(ResolveResult rr)
        {
            var value = rr.ConstantValue == null ? DefaultValueBlock.DefaultValue(rr, this._emitter) : AbstractEmitterBlock.ToJavaScript(rr.ConstantValue, this._emitter);
            return CompileFactoryCall("Constant", new[] { typeof(object), typeof(Type) }, new[] { value, ExpressionTreeBuilder.GetTypeName(rr.Type, this._emitter) });
        }

        public override string VisitConstantResolveResult(ConstantResolveResult rr, object data)
        {
            return MakeConstant(rr);
        }

        public override string VisitSizeOfResolveResult(SizeOfResolveResult rr, object data)
        {
            if (rr.ConstantValue == null)
            {
                throw new Exception("Cannot take the size of type " + rr.ReferencedType.FullName);
            }
            return MakeConstant(rr);
        }

        public override string VisitArrayAccessResolveResult(ArrayAccessResolveResult rr, object data)
        {
            var array = VisitResolveResult(rr.Array, null);
            if (rr.Indexes.Count == 1)
                return CompileFactoryCall("ArrayIndex", new[] { typeof(Type), typeof(Expression), typeof(Expression) }, new[] { ExpressionTreeBuilder.GetTypeName(rr.Type, this._emitter), array, VisitResolveResult(rr.Indexes[0], null) });
            else
                return CompileFactoryCall("ArrayIndex", new[] { typeof(Type), typeof(Expression), typeof(Expression[]) }, new[] { ExpressionTreeBuilder.GetTypeName(rr.Type, this._emitter), array, this._emitter.ToJavaScript(rr.Indexes.Select(i => new JRaw(this.VisitResolveResult(i, null))).ToArray()) });
        }

        public override string VisitArrayCreateResolveResult(ArrayCreateResolveResult rr, object data)
        {
            var arrayType = rr.Type as ArrayType;
            if (rr.InitializerElements != null)
            {
                return CompileFactoryCall("NewArrayInit", new[] { typeof(Type), typeof(Expression[]) }, new[] { ExpressionTreeBuilder.GetTypeName(arrayType != null ? arrayType.ElementType : rr.Type, this._emitter), this._emitter.ToJavaScript(rr.InitializerElements.Select(e => new JRaw(this.VisitResolveResult(e, null))).ToArray()) });
            }

            return CompileFactoryCall("NewArrayBounds", new[] { typeof(Type), typeof(Expression[]) }, new[] { ExpressionTreeBuilder.GetTypeName(arrayType != null ? arrayType.ElementType : rr.Type, this._emitter), this._emitter.ToJavaScript(rr.SizeArguments.Select(a => new JRaw(VisitResolveResult(a, null))).ToArray()) });
        }

        public override string VisitThisResolveResult(ThisResolveResult rr, object data)
        {
            return CompileFactoryCall("Constant", new[] { typeof(object), typeof(Type) }, new[] { AbstractEmitterBlock.GetThisAlias(_emitter), ExpressionTreeBuilder.GetTypeName(rr.Type, this._emitter) });
        }

        private static string GetTypeName(IType type, IEmitter emitter)
        {
            /*var typeParam = type as ITypeParameter;
            if (typeParam != null && typeParam.OwnerType == SymbolKind.Method)
            {
                return "Object";
            }*/

            return BridgeTypes.ToJsName(type, emitter);
        }

        private int FindIndexInReflectableMembers(IMember member)
        {
            var type = member.DeclaringTypeDefinition;
            bool hasAttr = false;

            if (!this._emitter.ReflectableTypes.Any(t => t == type))
            {
                hasAttr = this._emitter.Types.Any(t => t.Type == type);

                if (!hasAttr)
                {
                    return -1;
                }
            }

            if (!MetadataUtils.IsReflectable(member, this._emitter, hasAttr, this._syntaxTree))
            {
                return -1;
            }

            int i = 0;
            foreach (var m in member.DeclaringTypeDefinition.Members.Where(m => MetadataUtils.IsReflectable(m, this._emitter, hasAttr, this._syntaxTree))
                                                                    .OrderBy(m => m, MemberOrderer.Instance))
            {
                if (m.Equals(member.MemberDefinition ?? member))
                    return i;
                i++;
            }
            throw new Exception("Member " + member + " not found even though it should be present");
        }

        public string GetMember(IMember member)
        {
            var owner = member is IMethod && ((IMethod)member).IsAccessor ? ((IMethod)member).AccessorOwner : null;

            int index = FindIndexInReflectableMembers(owner ?? member);
            if (index >= 0)
            {
                string result = string.Format("Bridge.getMetadata({0}).m[{1}]", ExpressionTreeBuilder.GetTypeName(member.DeclaringType, this._emitter), index);
                if (owner != null)
                {
                    if (owner is IProperty)
                    {
                        if (ReferenceEquals(member, ((IProperty)owner).Getter))
                            result = result + ".g";
                        else if (ReferenceEquals(member, ((IProperty)owner).Setter))
                            result = result + ".s";
                        else
                            throw new ArgumentException("Invalid member " + member);
                    }
                    else if (owner is IEvent)
                    {
                        if (ReferenceEquals(member, ((IEvent)owner).AddAccessor))
                            result = result + ".ad";
                        else if (ReferenceEquals(member, ((IEvent)owner).RemoveAccessor))
                            result = result + ".r";
                        else
                            throw new ArgumentException("Invalid member " + member);
                    }
                    else
                        throw new ArgumentException("Invalid owner " + owner);
                }
                return result;
            }
            else
            {
                return MetadataUtils.ConstructMemberInfo(member, this._emitter, true, false, this._syntaxTree).ToString(Formatting.None);
            }
        }
    }
}