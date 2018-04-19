using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.Contract
{
    public class TypeComparer
    {
        sealed class NormalizeTypeVisitor : TypeVisitor
        {
            public override IType VisitTypeParameter(ITypeParameter type)
            {
                if (type.OwnerType == SymbolKind.Method)
                {
                    return DummyTypeParameter.GetMethodTypeParameter(type.Index);
                }
                else
                {
                    return base.VisitTypeParameter(type);
                }
            }

            public override IType VisitTypeDefinition(ITypeDefinition type)
            {
                if (type.KnownTypeCode == KnownTypeCode.Object)
                    return SpecialType.Dynamic;
                return base.VisitTypeDefinition(type);
            }
        }

        static readonly NormalizeTypeVisitor normalizationVisitor = new NormalizeTypeVisitor();

        public static bool Equals(IType a, IType b)
        {
            IType aType = a.AcceptVisitor(normalizationVisitor);
            IType bType = b.AcceptVisitor(normalizationVisitor);

            return aType.Equals(bType);
        }
    }
}
