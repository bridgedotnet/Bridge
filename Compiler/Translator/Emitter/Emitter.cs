using Bridge.Contract;
using Mono.Cecil;
using System.Collections.Generic;

namespace Bridge.Translator
{
    public partial class Emitter : Visitor, IEmitter
    {
        public Emitter(IDictionary<string,
            TypeDefinition> typeDefinitions,
            BridgeTypes bridgeTypes,
            List<ITypeInfo> types,
            IValidator validator,
            IMemberResolver resolver,
            Dictionary<string, ITypeInfo> typeInfoDefinitions,
            ILogger logger)
        {
            this.Log = logger;

            this.Resolver = resolver;
            this.TypeDefinitions = typeDefinitions;
            this.TypeInfoDefinitions = typeInfoDefinitions;
            this.Types = types;
            this.BridgeTypes = bridgeTypes;

            this.BridgeTypes.InitItems(this);

            logger.Trace("Sorting types infos by name...");
            this.Types.Sort(this.CompareTypeInfosByName);
            logger.Trace("Sorting types infos by name done");

            this.SortTypesByInheritance();

            this.Validator = validator;
            this.AssignmentType = ICSharpCode.NRefactory.CSharp.AssignmentOperatorType.Any;
            this.UnaryOperatorType = ICSharpCode.NRefactory.CSharp.UnaryOperatorType.Any;
            this.JsDoc = new JsDoc();
        }

        public virtual Dictionary<string, string> Emit()
        {
            this.Log.Info("Emitting...");

            var blocks = this.GetBlocks();
            foreach (var block in blocks)
            {
                this.JsDoc.Init();
                block.Emit();
            }

            var output = this.TransformOutputs();

            this.Log.Info("Emitting done");

            return output;
        }

        private IEnumerable<IAbstractEmitterBlock> GetBlocks()
        {
            yield return new Bridge.Translator.EmitBlock(this);

            if (this.AssemblyInfo.GenerateTypeScript)
            {
                yield return new Bridge.Translator.TypeScript.EmitBlock(this);
            }
        }
    }
}
