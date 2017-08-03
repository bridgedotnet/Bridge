using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.TypeSystem;
using Mono.Cecil;
using Object.Net.Utilities;

namespace Bridge.Contract
{
    public class NameSemantic
    {
        public string Prefix
        {
            get; set;
        }

        public string Suffix
        {
            get; set;
        }

        public bool IsCustomName
        {
            get; set;
        }

        private bool isObjectLiteral;
        public bool IsObjectLiteral
        {
            get
            {
                return this.isObjectLiteral;
            }
            set
            {
                if (value != this.isObjectLiteral)
                {
                    this.ClearCache();
                }

                this.isObjectLiteral = value;
            }
        }

        private string name;
        public string Name
        {
            get
            {
                if (this.name != null)
                {
                    return this.name;
                }
                return this.name = NameConvertor.Convert(this);
            }
        }

        public NameRule AppliedRule
        {
            get; set;
        }

        public IEntity Entity
        {
            get; set;
        }

        public TypeDefinition TypeDefinition
        {
            get; set;
        }

        internal string DefaultName
        {
            get
            {
                var name = Entity.Name;
                var typeDef = Entity as ITypeDefinition;
                if (typeDef != null)
                {
                    if (TypeDefinition != null)
                    {
                        name = TypeDefinition.Name;
                        if (Helpers.IsIgnoreGeneric(TypeDefinition) && typeDef.ParentAssembly.AssemblyName != CS.NS.BRIDGE && this.Emitter.Validator.IsExternalType(TypeDefinition))
                        {
                            name = name.LeftOfRightmostOf("`");
                        }
                    }
                    else
                    {
                        name = typeDef.Name;

                        if (typeDef.TypeParameterCount > 0 && !(Helpers.IsIgnoreGeneric(typeDef) && typeDef.ParentAssembly.AssemblyName != CS.NS.BRIDGE && this.Emitter.Validator.IsExternalType(typeDef)))
                        {
                            name += "$" + typeDef.TypeParameterCount;
                        }
                    }
                }

                return Prefix + name + Suffix;
            }
        }

        public IEmitter Emitter
        {
            get; set;
        }

        public int EnumMode { get; set; } = -1;

        public void ClearCache()
        {
            this.name = null;
        }

        public static NameSemantic Create(IEntity entity, IEmitter emitter)
        {
            return emitter.GetNameSemantic(entity);
        }
    }
}