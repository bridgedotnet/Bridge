using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using System;
using System.Collections.Generic;

namespace Bridge.Translator
{
    public partial class Inspector : Visitor
    {
        protected string Namespace
        {
            get;
            set;
        }

        public IAssemblyInfo AssemblyInfo
        {
            get;
            set;
        }

        protected ITypeInfo CurrentType
        {
            get;
            set;
        }

        protected ITypeInfo ParentType
        {
            get;
            set;
        }

        public List<ITypeInfo> Types
        {
            get;
            protected set;
        }

        public IMemberResolver Resolver
        {
            get;
            set;
        }

        public List<Tuple<TypeDeclaration, ITypeInfo>> NestedTypes
        {
            get;
            set;
        }
    }
}
