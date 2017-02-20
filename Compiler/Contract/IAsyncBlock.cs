using ICSharpCode.NRefactory.CSharp;
using System.Collections.Generic;

namespace Bridge.Contract
{
    public interface IAsyncBlock
    {
        IAsyncStep AddAsyncStep(int fromTaskNumber = -1);

        IAsyncStep AddAsyncStep(AstNode fromNode);

        ICSharpCode.NRefactory.CSharp.AnonymousMethodExpression AnonymousMethodExpression
        {
            get;
            set;
        }

        ICSharpCode.NRefactory.CSharp.AstNode[] AwaitExpressions
        {
            get;
            set;
        }

        List<ICSharpCode.NRefactory.CSharp.AstNode> WrittenAwaitExpressions
        {
            get;
            set;
        }

        ICSharpCode.NRefactory.CSharp.AstNode Body
        {
            get;
        }

        void Emit();

        void Emit(bool skipInit);

        System.Collections.Generic.List<IAsyncStep> EmittedAsyncSteps
        {
            get;
            set;
        }

        void InitAsyncBlock();

        bool IsParentForAsync(ICSharpCode.NRefactory.CSharp.AstNode child);

        bool IsTaskReturn
        {
            get;
            set;
        }

        bool IsEnumeratorReturn
        {
            get;
            set;
        }

        ICSharpCode.NRefactory.CSharp.LambdaExpression LambdaExpression
        {
            get;
            set;
        }

        ICSharpCode.NRefactory.CSharp.MethodDeclaration MethodDeclaration
        {
            get;
            set;
        }

        ICSharpCode.NRefactory.CSharp.AstNode Node
        {
            get;
        }

        bool ReplaceAwaiterByVar
        {
            get;
            set;
        }

        ICSharpCode.NRefactory.TypeSystem.IType ReturnType
        {
            get;
            set;
        }

        int Step
        {
            get;
            set;
        }

        System.Collections.Generic.List<IAsyncStep> Steps
        {
            get;
            set;
        }

        System.Collections.Generic.List<IAsyncTryInfo> TryInfos
        {
            get;
            set;
        }

        System.Collections.Generic.List<IAsyncJumpLabel> JumpLabels
        {
            get;
            set;
        }
    }
}