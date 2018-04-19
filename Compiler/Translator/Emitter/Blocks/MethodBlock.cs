using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ICSharpCode.NRefactory.Semantics;
using Newtonsoft.Json;

namespace Bridge.Translator
{
    public class MethodBlock : AbstractEmitterBlock
    {
        public MethodBlock(IEmitter emitter, ITypeInfo typeInfo, bool staticBlock)
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

        protected override void DoEmit()
        {
            if (this.StaticBlock)
            {
                this.EmitMethods(this.TypeInfo.StaticMethods, this.TypeInfo.StaticProperties, this.TypeInfo.Operators);
            }
            else
            {
                this.EmitMethods(this.TypeInfo.InstanceMethods, this.TypeInfo.InstanceProperties, null);
            }
        }

        protected virtual void EmitMethods(Dictionary<string, List<MethodDeclaration>> methods, Dictionary<string, List<EntityDeclaration>> properties, Dictionary<OperatorType, List<OperatorDeclaration>> operators)
        {
            int pos = this.Emitter.Output.Length;
            var writerInfo = this.SaveWriter();

            string globalTarget = BridgeTypes.GetGlobalTarget(this.TypeInfo.Type.GetDefinition(), this.TypeInfo.TypeDeclaration);

            if (globalTarget == null)
            {
                this.EnsureComma();
                this.Write(JS.Fields.METHODS);
                this.WriteColon();
                this.BeginBlock();
            }

            int checkPos = this.Emitter.Output.Length;

            var names = new List<string>(properties.Keys);

            foreach (var name in names)
            {
                var props = properties[name];

                foreach (var prop in props)
                {
                    if (prop is PropertyDeclaration)
                    {
                        this.Emitter.VisitPropertyDeclaration((PropertyDeclaration)prop);
                    }
                    else if (prop is CustomEventDeclaration)
                    {
                        this.Emitter.VisitCustomEventDeclaration((CustomEventDeclaration)prop);
                    }
                    else if (prop is IndexerDeclaration)
                    {
                        this.Emitter.VisitIndexerDeclaration((IndexerDeclaration)prop);
                    }
                }
            }

            names = new List<string>(methods.Keys);

            foreach (var name in names)
            {
                this.EmitMethodsGroup(methods[name]);
            }

            if (operators != null)
            {
                var ops = new List<OperatorType>(operators.Keys);

                foreach (var op in ops)
                {
                    this.EmitOperatorGroup(operators[op]);
                }
            }

            if (this.TypeInfo.ClassType == ClassType.Struct)
            {
                if (!this.StaticBlock)
                {
                    this.EmitStructMethods();
                }
                else
                {
                    string structName = BridgeTypes.ToJsName(this.TypeInfo.Type, this.Emitter);
                    if (this.TypeInfo.Type.TypeArguments.Count > 0 &&
                        !Helpers.IsIgnoreGeneric(this.TypeInfo.Type, this.Emitter))
                    {
                        structName = "(" + structName + ")";
                    }

                    this.EnsureComma();
                    this.Write(JS.Funcs.GETDEFAULTVALUE + ": function () { return new " + structName + "(); }");
                    this.Emitter.Comma = true;
                }
            }
            else if (this.StaticBlock)
            {
                var ctor = this.TypeInfo.Type.GetConstructors().FirstOrDefault(c => c.Parameters.Count == 0 && this.Emitter.GetInline(c) != null);

                if (ctor != null)
                {
                    var code = this.Emitter.GetInline(ctor);
                    this.EnsureComma();
                    this.Write(JS.Funcs.GETDEFAULTVALUE + ": function () ");
                    this.BeginBlock();
                    this.Write("return ");
                    var argsInfo = new ArgumentsInfo(this.Emitter, ctor);
                    new InlineArgumentsBlock(this.Emitter, argsInfo, code).Emit();
                    this.Write(";");
                    this.WriteNewLine();
                    this.EndBlock();
                    this.Emitter.Comma = true;
                }
            }

            if (globalTarget == null)
            {
                if (checkPos == this.Emitter.Output.Length)
                {
                    this.Emitter.IsNewLine = writerInfo.IsNewLine;
                    this.Emitter.ResetLevel(writerInfo.Level);
                    this.Emitter.Comma = writerInfo.Comma;
                    this.Emitter.Output.Length = pos;
                }
                else
                {
                    this.WriteNewLine();
                    this.EndBlock();
                }
            }
        }

        protected virtual void EmitStructMethods()
        {
            var typeDef = this.Emitter.GetTypeDefinition();
            string structName = BridgeTypes.ToJsName(this.TypeInfo.Type, this.Emitter);

            bool immutable = this.Emitter.Validator.IsImmutableType(typeDef);

            if (!immutable)
            {
                var mutableFields = this.TypeInfo.Type.GetFields(f => !f.IsConst, GetMemberOptions.IgnoreInheritedMembers);
                var autoProps = typeDef.Properties.Where(Helpers.IsAutoProperty);
                var autoEvents = this.TypeInfo.Type.GetEvents(null, GetMemberOptions.IgnoreInheritedMembers);
                immutable = !mutableFields.Any() && !autoProps.Any() && !autoEvents.Any();
            }

            var fields = this.TypeInfo.InstanceConfig.Fields;
            var props = this.TypeInfo.InstanceConfig.Properties.Where(ent =>
            {
                var p = ent.Entity as PropertyDeclaration;

                return p != null && p.Getter != null && p.Getter.Body.IsNull && p.Setter != null && p.Setter.Body.IsNull;
            });

            var list = fields.ToList();
            list.AddRange(props);

            if (list.Count == 0)
            {
                this.EnsureComma();
                this.Write(JS.Funcs.CLONE + ": function (to) { return this; }");
                this.Emitter.Comma = true;
                return;
            }

            if (!this.TypeInfo.InstanceMethods.ContainsKey(CS.Methods.GETHASHCODE))
            {
                this.EnsureComma();
                this.Write(JS.Funcs.GETHASHCODE + ": function () ");
                this.BeginBlock();
                this.Write("var h = " + JS.Funcs.BRIDGE_ADDHASH + "([");

                var nameHashValue = new HashHelper().GetDeterministicHash(this.TypeInfo.Name);
                this.Write(nameHashValue);

                foreach (var field in list)
                {
                    string fieldName = field.GetName(this.Emitter);
                    this.Write(", this." + fieldName);
                }

                this.Write("]);");

                this.WriteNewLine();
                this.Write("return h;");
                this.WriteNewLine();
                this.EndBlock();
                this.Emitter.Comma = true;
            }

            if (!this.TypeInfo.InstanceMethods.ContainsKey(CS.Methods.EQUALS))
            {
                this.EnsureComma();
                this.Write(JS.Funcs.EQUALS + ": function (o) ");
                this.BeginBlock();
                this.Write("if (!" + JS.Types.Bridge.IS + "(o, ");
                this.Write(structName);
                this.Write(")) ");
                this.BeginBlock();
                this.Write("return false;");
                this.WriteNewLine();
                this.EndBlock();
                this.WriteNewLine();
                this.Write("return ");

                bool and = false;

                foreach (var field in list)
                {
                    string fieldName = field.GetName(this.Emitter);

                    if (and)
                    {
                        this.Write(" && ");
                    }

                    and = true;

                    this.Write(JS.Funcs.BRIDGE_EQUALS + "(this.");
                    this.Write(fieldName);
                    this.Write(", o.");
                    this.Write(fieldName);
                    this.Write(")");
                }

                this.Write(";");
                this.WriteNewLine();
                this.EndBlock();
                this.Emitter.Comma = true;
            }

            this.EnsureComma();

            if (immutable)
            {
                this.Write(JS.Funcs.CLONE + ": function (to) { return this; }");
            }
            else
            {
                this.Write(JS.Funcs.CLONE + ": function (to) ");
                this.BeginBlock();
                this.Write("var s = to || new ");
                if (this.TypeInfo.Type.TypeArguments.Count > 0 && !Helpers.IsIgnoreGeneric(this.TypeInfo.Type, this.Emitter))
                {
                    structName = "(" + structName + ")";
                }
                this.Write(structName);
                this.Write("();");

                foreach (var field in list)
                {
                    this.WriteNewLine();
                    string fieldName = field.GetName(this.Emitter);

                    this.Write("s.");
                    this.Write(fieldName);
                    this.Write(" = ");

                    int insertPosition = this.Emitter.Output.Length;
                    this.Write("this.");
                    this.Write(fieldName);

                    var rr = this.Emitter.Resolver.ResolveNode(field.Entity, this.Emitter) as MemberResolveResult;

                    if (rr == null && field.VarInitializer != null)
                    {
                        rr = Emitter.Resolver.ResolveNode(field.VarInitializer, Emitter) as MemberResolveResult;
                    }

                    if (rr != null)
                    {
                        Helpers.CheckValueTypeClone(rr, null, this, insertPosition);
                    }

                    this.Write(";");
                }

                this.WriteNewLine();
                this.Write("return s;");
                this.WriteNewLine();
                this.EndBlock();
            }

            this.Emitter.Comma = true;
        }

        protected void EmitEventAccessor(EventDeclaration e, VariableInitializer evtVar, bool add)
        {
            string name = evtVar.Name;

            this.Write(Helpers.GetAddOrRemove(add), name, " : ");
            this.WriteFunction();
            this.WriteOpenParentheses();
            this.Write("value");
            this.WriteCloseParentheses();
            this.WriteSpace();
            this.BeginBlock();
            this.WriteThis();
            this.WriteDot();
            this.Write(this.Emitter.GetEntityName(e));
            this.Write(" = ");
            this.Write(add ? JS.Funcs.BRIDGE_COMBINE : JS.Funcs.BRIDGE_REMOVE);
            this.WriteOpenParentheses();
            this.WriteThis();
            this.WriteDot();
            this.Write(this.Emitter.GetEntityName(e));
            this.WriteComma();
            this.WriteSpace();
            this.Write("value");
            this.WriteCloseParentheses();
            this.WriteSemiColon();
            this.WriteNewLine();
            this.EndBlock();
        }

        protected virtual void EmitMethodsGroup(List<MethodDeclaration> group)
        {
            if (group.Count == 1)
            {
                if ((!group[0].Body.IsNull || this.Emitter.GetScript(group[0]) != null) && (!this.StaticBlock || !Helpers.IsEntryPointMethod(this.Emitter, group[0])))
                {
                    this.Emitter.VisitMethodDeclaration(group[0]);
                }
            }
            else
            {
                var typeDef = this.Emitter.GetTypeDefinition();
                var name = group[0].Name;
                var methodsDef = typeDef.Methods.Where(m => m.Name == name);
                this.Emitter.MethodsGroup = methodsDef;
                this.Emitter.MethodsGroupBuilder = new Dictionary<int, StringBuilder>();

                foreach (var method in group)
                {
                    if (!method.Body.IsNull && (!this.StaticBlock || !Helpers.IsEntryPointMethod(this.Emitter, group[0])))
                    {
                        this.Emitter.VisitMethodDeclaration(method);
                    }
                }

                this.Emitter.MethodsGroup = null;
                this.Emitter.MethodsGroupBuilder = null;
            }
        }

        protected virtual void EmitOperatorGroup(List<OperatorDeclaration> group)
        {
            if (group.Count == 1)
            {
                if (!group[0].Body.IsNull)
                {
                    this.Emitter.VisitOperatorDeclaration(group[0]);
                }
            }
            else
            {
                var name = group[0].Name;
                var methodsDef = this.Emitter.GetTypeDefinition().Methods.Where(m => m.Name == name);
                this.Emitter.MethodsGroup = methodsDef;
                this.Emitter.MethodsGroupBuilder = new Dictionary<int, StringBuilder>();

                foreach (var method in group)
                {
                    if (!method.Body.IsNull)
                    {
                        this.Emitter.VisitOperatorDeclaration(method);
                    }
                }

                this.Emitter.MethodsGroup = null;
                this.Emitter.MethodsGroupBuilder = null;
            }
        }
    }
}