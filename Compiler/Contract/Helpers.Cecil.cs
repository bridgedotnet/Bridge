using System;
using ICSharpCode.NRefactory.TypeSystem;
using Mono.Cecil;

namespace Bridge.Contract
{
    public static partial class Helpers
    {
        public static MethodDefinition GetBaseMethod(MethodDefinition method, IEmitter emitter)
        {
            return Helpers.GetBaseMethod(method.DeclaringType, method, emitter);
        }

        public static MethodDefinition GetBaseMethod(TypeDefinition type, MethodDefinition method, IEmitter emitter)
        {
            TypeDefinition baseType = Helpers.GetBaseType(type, emitter);
            while (baseType != null)
            {
                MethodDefinition base_method = Helpers.TryMatchMethod(baseType, method);
                if (base_method != null)
                {
                    return base_method;
                }

                baseType = Helpers.GetBaseType(baseType, emitter);
            }

            return null;
        }

        public static MethodDefinition TryMatchMethod(TypeDefinition type, MethodDefinition method)
        {
            if (!type.HasMethods)
            {
                return null;
            }

            foreach (MethodDefinition candidate in type.Methods)
            {
                if (Helpers.MethodMatch(candidate, method))
                {
                    return candidate;
                }
            }

            return null;
        }

        public static bool MethodMatch(MethodDefinition candidate, MethodDefinition method)
        {
            if (!candidate.IsVirtual)
            {
                return false;
            }

            if (candidate.Name != method.Name)
            {
                return false;
            }

            if (!Helpers.TypeMatch(candidate.ReturnType, method.ReturnType))
            {
                return false;
            }

            if (candidate.Parameters.Count != method.Parameters.Count)
            {
                return false;
            }

            for (int i = 0; i < candidate.Parameters.Count; i++)
            {
                if (!Helpers.TypeMatch(candidate.Parameters[i].ParameterType, method.Parameters[i].ParameterType))
                {
                    return false;
                }
            }

            return true;
        }

        public static bool TypeMatch(IModifierType a, IModifierType b)
        {
            if (!Helpers.TypeMatch(a.ModifierType, b.ModifierType))
            {
                return false;
            }

            return Helpers.TypeMatch(a.ElementType, b.ElementType);
        }

        public static bool TypeMatch(TypeSpecification a, TypeSpecification b)
        {
            if (a is GenericInstanceType)
            {
                return Helpers.TypeMatch((GenericInstanceType)a, (GenericInstanceType)b);
            }

            if (a is IModifierType)
            {
                return Helpers.TypeMatch((IModifierType)a, (IModifierType)b);
            }

            return Helpers.TypeMatch(a.ElementType, b.ElementType);
        }

        public static bool TypeMatch(GenericInstanceType a, GenericInstanceType b)
        {
            if (!Helpers.TypeMatch(a.ElementType, b.ElementType))
            {
                return false;
            }

            if (a.GenericArguments.Count != b.GenericArguments.Count)
            {
                return false;
            }

            if (a.GenericArguments.Count == 0)
            {
                return true;
            }

            for (int i = 0; i < a.GenericArguments.Count; i++)
            {
                if (!Helpers.TypeMatch(a.GenericArguments[i], b.GenericArguments[i]))
                {
                    return false;
                }
            }

            return true;
        }

        public static bool TypeMatch(TypeReference a, TypeReference b)
        {
            if (a is GenericParameter)
            {
                return true;
            }

            if (a is TypeSpecification || b is TypeSpecification)
            {
                if (a.GetType() != b.GetType())
                {
                    return false;
                }

                return Helpers.TypeMatch((TypeSpecification)a, (TypeSpecification)b);
            }

            return a.FullName == b.FullName;
        }

        public static TypeDefinition GetBaseType(TypeDefinition type, IEmitter emitter)
        {
            if (type == null || type.BaseType == null)
            {
                return null;
            }

            return Helpers.ToTypeDefinition(type.BaseType, emitter);
        }
    }
}