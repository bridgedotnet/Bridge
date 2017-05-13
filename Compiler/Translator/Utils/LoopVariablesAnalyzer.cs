using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System;
using System.Collections.Generic;
using System.Linq;
using Bridge.Contract;

namespace Bridge.Translator
{
    public class LoopVariablesAnalyzer : DepthFirstAstVisitor
    {
        public List<string> VariableNames
        {
            get;
        } = new List<string>();

        public List<IVariable> Variables
        {
            get;
        } = new List<IVariable>();

        public IEmitter Emitter
        {
            get; set;
        }

        public LoopVariablesAnalyzer(IEmitter emitter)
        {
            this.Emitter = emitter;
        }

        public void Analyze(AstNode node)
        {
            if (node is ForStatement)
            {
                node = ((ForStatement) node).EmbeddedStatement;
            }

            this.VariableNames.Clear();

            if (node is ForeachStatement)
            {
                var foreachStatement = (ForeachStatement) node;
                this.VariableNames.Add(foreachStatement.VariableName);
                var rr = (ForEachResolveResult)this.Emitter.Resolver.ResolveNode(foreachStatement, this.Emitter);
                this.Variables.Add(rr.ElementVariable);
            }

            node.AcceptVisitor(this);
        }

        public override void VisitVariableDeclarationStatement(VariableDeclarationStatement variableDeclarationStatement)
        {
            foreach (var variable in variableDeclarationStatement.Variables)
            {
                this.VariableNames.Add(variable.Name);
                var lrr = (LocalResolveResult)this.Emitter.Resolver.ResolveNode(variable, this.Emitter);
                this.Variables.Add(lrr.Variable);
            }
            base.VisitVariableDeclarationStatement(variableDeclarationStatement);
        }

        public override void VisitLambdaExpression(LambdaExpression lambdaExpression)
        {
            //base.VisitLambdaExpression(lambdaExpression);
        }

        public override void VisitAnonymousMethodExpression(AnonymousMethodExpression anonymousMethodExpression)
        {
            //base.VisitAnonymousMethodExpression(anonymousMethodExpression);
        }
    }
}