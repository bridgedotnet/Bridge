using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public class UsingBlock : AbstractEmitterBlock
    {
        public UsingBlock(IEmitter emitter, UsingStatement usingStatement)
            : base(emitter, usingStatement)
        {
            this.Emitter = emitter;
            this.UsingStatement = usingStatement;
        }

        public UsingStatement UsingStatement
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            IEnumerable<AstNode> inner = null;

            var res = this.UsingStatement.ResourceAcquisition;
            var varStat = res as VariableDeclarationStatement;
            if (varStat != null)
            {
                inner = varStat.Variables.Skip(1);
                res = varStat.Variables.First();
            }

            this.EmitUsing(res, inner);
        }

        protected virtual void EmitUsing(AstNode expression, IEnumerable<AstNode> inner)
        {
            string temp = null;
            string name = null;

            var varInit = expression as VariableInitializer;
            if (varInit != null)
            {
                name = varInit.Name;
                this.WriteVar();
                this.Write(varInit.Name);
                this.Write(" = ");
                varInit.Initializer.AcceptVisitor(this.Emitter);
                this.WriteSemiColon();
                this.WriteNewLine();
            }
            else if (expression is IdentifierExpression)
            {
                name = ((IdentifierExpression)expression).Identifier;
            }
            else
            {
                temp = this.GetTempVarName();
                name = temp;
                this.Write(temp);
                this.Write(" = ");
                expression.AcceptVisitor(this.Emitter);
                this.WriteSemiColon();
                this.WriteNewLine();
            }

            this.WriteTry();

            if (inner != null && inner.Any())
            {
                this.BeginBlock();
                this.EmitUsing(inner.First(), inner.Skip(1));
                this.EndBlock();
                this.WriteNewLine();
            }
            else
            {
                bool block = this.UsingStatement.EmbeddedStatement is BlockStatement;

                if (!block)
                {
                    this.BeginBlock();
                }

                this.UsingStatement.EmbeddedStatement.AcceptVisitor(this.Emitter);

                if (!block)
                {
                    this.EndBlock();
                    this.WriteNewLine();
                }
            }

            this.WriteFinally();
            this.BeginBlock();

            this.Write("if (" + JS.Funcs.BRIDGE_HASVALUE + "(" + name + ")) ");
            this.BeginBlock();
            this.Write(name);
            this.Write(".");
            this.Write(JS.Funcs.DISPOSE);
            this.Write("();");
            this.WriteNewLine();
            this.EndBlock();
            this.WriteNewLine();
            this.EndBlock();
            this.WriteNewLine();

            if (temp != null)
            {
                this.RemoveTempVar(temp);
            }
        }
    }
}