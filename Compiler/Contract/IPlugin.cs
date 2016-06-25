using System.Collections.Generic;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.Contract
{
    public interface IPlugin
    {
        ILogger Logger { get; set; }

        IEnumerable<string> GetConstructorInjectors(IConstructorBlock constructorBlock);

        void OnInvocation(IInvocationInterceptor interceptor);

        void OnReference(IReferenceInterceptor interceptor);

        bool HasConstructorInjectors(IConstructorBlock constructorBlock);

        void OnConfigRead(IAssemblyInfo config);

        void BeforeEmit(IEmitter emitter, ITranslator translator);

        void AfterEmit(IEmitter emitter, ITranslator translator);

        void AfterOutput(ITranslator translator, string outputPath, bool nocore);

        void BeforeTypesEmit(IEmitter emitter, IList<ITypeInfo> types);

        void AfterTypesEmit(IEmitter emitter, IList<ITypeInfo> types);

        void BeforeTypeEmit(IEmitter emitter, ITypeInfo type);

        void AfterTypeEmit(IEmitter emitter, ITypeInfo type);
    }
}