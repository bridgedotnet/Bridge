using System.Collections.Generic;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.Contract
{
    public interface IPlugins
    {
        void OnConfigRead(IAssemblyInfo config);

        System.Collections.Generic.IEnumerable<string> GetConstructorInjectors(Bridge.Contract.IConstructorBlock constructorBlock);

        IInvocationInterceptor OnInvocation(IAbstractEmitterBlock block, InvocationExpression expression, InvocationResolveResult resolveResult);

        IReferenceInterceptor OnReference(IAbstractEmitterBlock block, MemberReferenceExpression expression, MemberResolveResult resolveResult);

        bool HasConstructorInjectors(Bridge.Contract.IConstructorBlock constructorBlock);

        System.Collections.Generic.IEnumerable<Bridge.Contract.IPlugin> Parts
        {
            get;
        }

        void BeforeEmit(Bridge.Contract.IEmitter emitter, Bridge.Contract.ITranslator translator);

        void AfterEmit(Bridge.Contract.IEmitter emitter, Bridge.Contract.ITranslator translator);

        void BeforeTypesEmit(IEmitter emitter, IList<ITypeInfo> types);

        void AfterTypesEmit(IEmitter emitter, IList<ITypeInfo> types);

        void BeforeTypeEmit(IEmitter emitter, ITypeInfo type);

        void AfterTypeEmit(IEmitter emitter, ITypeInfo type);

        void AfterOutput(Bridge.Contract.ITranslator translator, string outputPath, bool nocore);
    }
}