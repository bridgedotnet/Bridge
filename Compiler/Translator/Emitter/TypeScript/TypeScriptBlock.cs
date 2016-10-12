using Bridge.Contract;
using Bridge.Contract.Constants;

using Mono.Cecil;
using Object.Net.Utilities;

using System.Collections.Generic;
using System.Linq;
using System.Text;
using ICSharpCode.NRefactory.CSharp;

namespace Bridge.Translator.TypeScript
{
    public class TypeScriptBlock : AbstractEmitterBlock
    {
        public TypeScriptBlock(IEmitter emitter, AstNode operatorDeclaration)
            : base(emitter, operatorDeclaration)
        {
        }

        public override int Level
        {
            get
            {
                return base.Level - this.Emitter.InitialLevel;
            }
        }

        protected override void DoEmit()
        {
        }
    }
}