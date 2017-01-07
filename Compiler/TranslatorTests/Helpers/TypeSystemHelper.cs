using System;
using System.Linq;
using System.Collections.Generic;

using Bridge.Contract;

using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;

using NSubstitute;

namespace Bridge.Translator.Tests.Helpers
{
    class TypeDescriptor
    {
        public string FullName
        {
            get; set;
        }

        public IEnumerable<AttributeDescriptor> Attributes
        {
            get; set;
        }

        public bool InThisAssembly
        {
            get; set;
        } = true;

        public TypeDescriptor()
        {
        }

        public TypeDescriptor(string fullName, bool inThisAssembly = true, string attributeName = null, IEnumerable<object> attributePositionalArguments = null)
        {
            this.FullName = fullName;
            this.InThisAssembly = inThisAssembly;

            if (attributeName != null)
            {
                var a = new AttributeDescriptor()
                {
                    Name = attributeName
                };

                if (attributePositionalArguments != null)
                {
                    a.PositionalArguments = attributePositionalArguments;
                }

                Attributes = new[] { a };
            }
        }
    }

    class AttributeDescriptor
    {
        public string Name
        {
            get; set;
        }

        public IEnumerable<object> PositionalArguments
        {
            get; set;
        }
    }

    class TypeSystemHelper
    {
        public IAttribute SubstituteAttribute(AttributeDescriptor attribute)
        {
            var attributeType = Substitute.For<IType>();
            attributeType.FullName.Returns(attribute.Name);

            var a = Substitute.For<IAttribute>();
            a.AttributeType.Returns(attributeType);

            if (attribute.PositionalArguments != null)
            {
                var positionalArguments = new List<ResolveResult>();

                foreach (var p in attribute.PositionalArguments)
                {
                    var it = Substitute.For<IType>();

                    var rr = Substitute.For<ResolveResult>(it);
                    rr.ConstantValue.Returns(p);

                    positionalArguments.Add(rr);
                }

                if (positionalArguments.Count > 0)
                {
                    a.PositionalArguments.Returns(positionalArguments);
                }
            }

            return a;
        }

        public IType SubstituteType(TypeDescriptor type)
        {
            var typeDefinition = Substitute.For<ITypeDefinition>();

            var typeFullName = type.FullName;
            var typeKind = TypeKind.Array;

            typeDefinition.FullName.Returns(typeFullName);
            typeDefinition.Name.Returns(GetTypeName(typeFullName));
            typeDefinition.Namespace.Returns(GetTypeNamespace(typeFullName));
            typeDefinition.Kind.Returns(typeKind);
            typeDefinition.IsPublic.Returns(true);

            if (type.Attributes != null)
            {
                var typeAttributes = new List<IAttribute>();

                foreach (var attribute in type.Attributes)
                {
                    typeAttributes.Add(SubstituteAttribute(attribute));
                }

                if (typeAttributes.Count > 0)
                {
                    typeDefinition.Attributes.Returns(typeAttributes);
                }
            }

            var t = Substitute.For<IType>();
            t.GetDefinition().Returns(typeDefinition);
            t.FullName.Returns(typeFullName);
            t.Name.Returns(GetTypeName(typeFullName));
            t.Namespace.Returns(GetTypeNamespace(typeFullName));
            t.Kind.Returns(typeKind);

            return t;
        }

        public BridgeType AddBridgeType(BridgeTypes bridgeTypes, TypeDescriptor typeDescriptor)
        {
            var type = SubstituteType(typeDescriptor);

            var key = type.FullName;
            var bridgeType = Substitute.For<BridgeType>(key);

            bridgeType.Type.Returns(type);

            if (typeDescriptor.InThisAssembly)
            {
                var typeInfo = Substitute.For<ITypeInfo>();
                typeInfo.Name.Returns(type.Name);
                typeInfo.Namespace.Returns(type.Namespace);
                typeInfo.Key.Returns(key);

                bridgeType.TypeInfo.Returns(typeInfo);
            }
            else
            {
                ITypeInfo typeInfo = null;
                bridgeType.TypeInfo.Returns(typeInfo);
            }

            bridgeTypes.Add(key, bridgeType);

            return bridgeType;
        }

        public string GetTypeNamespace(string fullName)
        {
            if (fullName == null)
            {
                return null;
            }

            var segments = fullName.Split(new[] { "." }, StringSplitOptions.RemoveEmptyEntries);

            if (segments.Length <= 1)
            {
                return string.Empty;
            }

            return string.Join(".", segments.Take(segments.Length - 1));
        }

        public string GetTypeName(string fullName)
        {
            if (fullName == null)
            {
                return null;
            }

            var segments = fullName.Split(new[] { "." }, StringSplitOptions.RemoveEmptyEntries);

            if (segments.Length <= 0)
            {
                return string.Empty;
            }

            return segments.Last();
        }
    }
}
