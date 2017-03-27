using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;
using System.Collections.Generic;

namespace Bridge.Contract
{
    public interface ITypeInfo
    {
        string Key
        {
            get;
            set;
        }

        TypeDeclaration TypeDeclaration
        {
            get;
            set;
        }

        Dictionary<string, EventDeclaration> EventsDeclarations
        {
            get;
        }

        bool IsStatic
        {
            get;
            set;
        }

        ClassType ClassType
        {
            get;
            set;
        }

        string Namespace
        {
            get;
            set;
        }

        string Name
        {
            get;
            set;
        }

        List<ConstructorDeclaration> Ctors
        {
            get;
            set;
        }

        ConstructorDeclaration StaticCtor
        {
            get;
            set;
        }

        Dictionary<string, FieldDeclaration> FieldsDeclarations
        {
            get;
        }

        Dictionary<OperatorType, List<OperatorDeclaration>> Operators
        {
            get;
        }

        Dictionary<string, List<MethodDeclaration>> StaticMethods
        {
            get;
        }

        Dictionary<string, List<MethodDeclaration>> InstanceMethods
        {
            get;
        }

        Dictionary<string, List<EntityDeclaration>> StaticProperties
        {
            get;
        }

        Dictionary<string, List<EntityDeclaration>> InstanceProperties
        {
            get;
        }

        bool HasStatic
        {
            get;
        }

        bool HasInstantiable
        {
            get;
        }

        object LastEnumValue
        {
            get;
            set;
        }

        bool IsEnum
        {
            get;
            set;
        }

        string FileName
        {
            get;
            set;
        }

        string JsName
        {
            get;
            set;
        }

        Module Module
        {
            get;
            set;
        }

        List<IPluginDependency> Dependencies
        {
            get;
            set;
        }

        ITypeInfo ParentType
        {
            get;
            set;
        }

        TypeConfigInfo StaticConfig
        {
            get;
            set;
        }

        TypeConfigInfo InstanceConfig
        {
            get;
            set;
        }

        bool IsObjectLiteral
        {
            get;
            set;
        }

        IType Type
        {
            get;
            set;
        }

        List<TypeDeclaration> PartialTypeDeclarations
        {
            get;
            set;
        }

        bool HasRealStatic(IEmitter emitter);
        bool HasRealInstantiable(IEmitter emitter);

        List<AstType> GetBaseTypes(IEmitter emitter);

        AstType GetBaseClass(IEmitter emitter);

        string GetNamespace(IEmitter emitter, bool nons = false);
    }
}