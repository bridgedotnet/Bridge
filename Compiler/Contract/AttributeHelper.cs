using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Mono.Cecil;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;
using ArrayType = ICSharpCode.NRefactory.TypeSystem.ArrayType;

namespace Bridge.Contract
{
    public static class AttributeHelper
    {
        private static string GetShortAttributeName(string longAttributeName)
        {
            return longAttributeName.Remove(longAttributeName.LastIndexOf("Attribute"));
        }

        private static bool CheckName(IType type, params string[] names)
        {
            if (type == null || names == null)
            {
                return false;
            }

            return names.Any(name => type.FullName == name);
        }

        private static bool CheckName(AstType type, params string[] names)
        {
            if (type == null || names == null)
            {
                return false;
            }

            var typeName = type.ToString();
            return names.Any(name => typeName == name);
        }

        private static bool CheckName(ResolveResult resolveResult, params string[] names)
        {
            if (resolveResult == null || names == null)
            {
                return false;
            }

            return CheckName(resolveResult.Type, names);
        }

        private static bool CheckName(IAttribute attribute, params string[] names)
        {
            return attribute != null && names != null && names.Any(name => attribute.AttributeType.FullName == name);
        }

        private static bool CheckName(ICustomAttribute attribute, params string[] names)
        {
            return attribute != null && names != null && names.Any(name => attribute.AttributeType.FullName == name);
        }

        private static bool HasAttribute(ICustomAttributeProvider customAttributeProvider, params string[] names)
        {
            return customAttributeProvider != null && customAttributeProvider.CustomAttributes.Any(a => CheckName(a, names));
        }

        #region Serializable attribute

        public static readonly string[] ATTRIBUTE_SERIALIZABLE_ALL_NAMES =
            new string[]
            {
                CS.Attributes.SERIALIZABLE_NAME, GetShortAttributeName(CS.Attributes.SERIALIZABLE_NAME)
            };

        public static readonly string[] ATTRIBUTE_SERIALIZABLE_LONG_NAMES =
            new string[]
            {
                CS.Attributes.SERIALIZABLE_NAME
            };

        public static bool HasSerializableAttribute(ITypeDefinition type)
        {
            return type != null && type.Attributes.Any(a => CheckName(a, ATTRIBUTE_SERIALIZABLE_LONG_NAMES));
        }

        #endregion Serializable attribute

        #region CompilerGeneratedAttribute attribute

        public static readonly string[] ATTRIBUTE_COMPILER_GENERATED_ALL_NAMES =
            new string[]
            {
                CS.Attributes.COMPILER_GENERATED_NAME, GetShortAttributeName(CS.Attributes.COMPILER_GENERATED_NAME)
            };

        public static readonly string[] ATTRIBUTE_COMPILER_GENERATED_LONG_NAMES =
            new string[]
            {
                CS.Attributes.COMPILER_GENERATED_NAME
            };

        public static bool HasCompilerGeneratedAttribute(ICustomAttributeProvider customAttributeProvider)
        {
            return AttributeHelper.HasAttribute(customAttributeProvider, ATTRIBUTE_COMPILER_GENERATED_LONG_NAMES);
        }

        #endregion CompilerGeneratedAttribute attribute
    }
}