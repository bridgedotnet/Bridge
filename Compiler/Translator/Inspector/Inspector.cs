using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;
using System.Collections.Generic;
using NRAttribute = ICSharpCode.NRefactory.CSharp.Attribute;

namespace Bridge.Translator
{
    public partial class Inspector : Visitor
    {
        public Inspector()
        {
            this.Types = new List<ITypeInfo>();
            this.AssemblyInfo = new AssemblyInfo();
        }

        protected virtual bool HasAttribute(EntityDeclaration type, string name)
        {
            foreach (var i in type.Attributes)
            {
                foreach (var j in i.Attributes)
                {
                    if (j.Type.ToString() == name)
                    {
                        return true;
                    }

                    var resolveResult = this.Resolver.ResolveNode(j, null);
                    if (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == (name + "Attribute"))
                    {
                        return true;
                    }
                }
            }

            return false;
        }

        protected virtual bool TryGetAttribute(EntityDeclaration type, string attributeName, out NRAttribute attribute)
        {
            foreach (var i in type.Attributes)
            {
                foreach (var j in i.Attributes)
                {
                    if (j.Type.ToString() == attributeName)
                    {
                        attribute = j;
                        return true;
                    }

                    // FIXME: Will not try to get the attribute via Resolver.ResolveNode() (see above): it returns a
                    //        different type, without minimum information needed to make a full NRAttribute -fzm
                }
            }

            attribute = default(NRAttribute);
            return false;
        }

        protected virtual bool IsObjectLiteral(EntityDeclaration declaration)
        {
            return this.HasAttribute(declaration, Translator.Bridge_ASSEMBLY + ".ObjectLiteral");
        }

        protected virtual bool HasIgnore(EntityDeclaration declaration)
        {
            return this.HasAttribute(declaration, Translator.Bridge_ASSEMBLY + ".External") || this.HasAttribute(declaration, Translator.Bridge_ASSEMBLY + ".Ignore");
        }

        protected virtual bool HasInline(EntityDeclaration declaration)
        {
            return this.HasAttribute(declaration, Translator.Bridge_ASSEMBLY + ".Template");
        }

        protected virtual bool HasScript(EntityDeclaration declaration)
        {
            return this.HasAttribute(declaration, Translator.Bridge_ASSEMBLY + ".Script");
        }

        private Expression GetDefaultFieldInitializer(AstType type)
        {
            return new PrimitiveExpression(Inspector.GetDefaultFieldValue(type, this.Resolver), "?");
        }

        public static object GetDefaultFieldValue(AstType type, IMemberResolver resolver)
        {
            if (type is PrimitiveType)
            {
                var primitiveType = (PrimitiveType)type;

                switch (primitiveType.KnownTypeCode)
                {
                    case KnownTypeCode.Decimal:
                        return 0m;

                    case KnownTypeCode.Int16:
                    case KnownTypeCode.Int32:
                    case KnownTypeCode.Int64:
                    case KnownTypeCode.UInt16:
                    case KnownTypeCode.UInt32:
                    case KnownTypeCode.UInt64:
                    case KnownTypeCode.Byte:
                    case KnownTypeCode.Double:
                    case KnownTypeCode.SByte:
                    case KnownTypeCode.Single:
                        return 0;

                    case KnownTypeCode.Boolean:
                        return false;
                }
            }

            var resolveResult = resolver.ResolveNode(type, null);

            if (!resolveResult.IsError && NullableType.IsNullable(resolveResult.Type))
            {
                return null;
            }

            if (!resolveResult.IsError && resolveResult.Type.Kind == TypeKind.Enum)
            {
                return 0;
            }

            if (!resolveResult.IsError && resolveResult.Type.Kind == TypeKind.Struct)
            {
                return type;
            }

            return null;
        }

        public static object GetDefaultFieldValue(IType type)
        {
            if (type.IsKnownType(KnownTypeCode.Int16) ||
                type.IsKnownType(KnownTypeCode.Int32) ||
                type.IsKnownType(KnownTypeCode.Int64) ||
                type.IsKnownType(KnownTypeCode.UInt16) ||
                type.IsKnownType(KnownTypeCode.UInt32) ||
                type.IsKnownType(KnownTypeCode.UInt64) ||
                type.IsKnownType(KnownTypeCode.Byte) ||
                type.IsKnownType(KnownTypeCode.Double) ||
                type.IsKnownType(KnownTypeCode.Decimal) ||
                type.IsKnownType(KnownTypeCode.SByte) ||
                type.IsKnownType(KnownTypeCode.Single) ||
                type.IsKnownType(KnownTypeCode.Enum))
            {
                return 0;
            }

            if (NullableType.IsNullable(type))
            {
                return null;
            }

            if (type.IsKnownType(KnownTypeCode.Boolean))
            {
                return false;
            }

            if (type.Kind == TypeKind.Struct)
            {
                return type;
            }

            return null;
        }

        protected virtual bool IsValidStaticInitializer(Expression expr)
        {
            if (expr.IsNull || expr is PrimitiveExpression)
            {
                return true;
            }

            var arrayExpr = expr as ArrayCreateExpression;

            if (arrayExpr == null)
            {
                return false;
            }

            try
            {
                new ArrayInitializerVisitor().VisitArrayCreateExpression(arrayExpr);

                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        protected virtual void FixMethodParameters(AstNodeCollection<ParameterDeclaration> parameters, BlockStatement body)
        {
            /*if (parameters.Count == 0)
            {
                return;
            }

            foreach (var p in parameters)
            {
                string newName = Emitter.FIX_ARGUMENT_NAME + p.Name;
                string oldName = p.Name;

                VariableDeclarationStatement varState = new VariableDeclarationStatement(p.Type.Clone(), oldName, new CastExpression(p.Type.Clone(), new IdentifierExpression(newName)));

                p.Name = newName;

                body.InsertChildBefore(body.FirstChild, varState, new Role<VariableDeclarationStatement>("Statement"));
            }*/
        }

        /// <summary>
        /// Checks if the namespace name is likely to conflict with Bridge.NET namespace.
        /// </summary>
        /// <param name="namespaceName"></param>
        /// <returns></returns>
        protected static bool IsConflictingNamespace(string namespaceName)
        {
            return (namespaceName == "Bridge");
        }

        /// <summary>
        /// Validates the type's namespace attribute (if present) against conflicts with Bridge.NET's namespaces.
        /// </summary>
        /// <param name="tpDecl">The TypeDefinition object of the validated item.</param>
        private void ValidateNamespace(TypeDeclaration tpDecl)
        {
            ICSharpCode.NRefactory.CSharp.Attribute nsAt;
            if (this.TryGetAttribute(tpDecl, "Namespace", out nsAt))
            {
                var nsName = nsAt.Arguments.FirstOrNullObject().ToString().Trim('"');
                if (Bridge.Translator.Inspector.IsConflictingNamespace(nsName))
                {
                    throw new EmitterException(nsAt, "Custom attribute '[" + nsAt.ToString() +
                        "]' uses reserved namespace name 'Bridge'.\n" +
                        "This name is reserved for Bridge.NET core.");
                }
            }
        }

        /// <summary>
        /// Validates the namespace name against conflicts with Bridge.NET's namespaces.
        /// </summary>
        /// <param name="nsDecl">The NamespaceDefinition object of the validated item.</param>
        private void ValidateNamespace(NamespaceDeclaration nsDecl)
        {
            if (Bridge.Translator.Inspector.IsConflictingNamespace(nsDecl.FullName))
            {
                throw new EmitterException(nsDecl, "Namespace '" + nsDecl.FullName +
                    "' uses reserved name 'Bridge'.\n" +
                    "This name is reserved for Bridge.NET core.");
            }
        }
    }
}
