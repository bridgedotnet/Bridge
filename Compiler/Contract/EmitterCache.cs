using System;
using System.Collections.Generic;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Contract
{
    public class EmitterCache
    {
        public EmitterCache()
        {
            this.Members = new Dictionary<Tuple<IMember, bool, bool>, OverloadsCollection>();
            this.Nodes = new Dictionary<Tuple<AstNode, bool>, OverloadsCollection>();
        }

        private Dictionary<Tuple<AstNode, bool>, OverloadsCollection> Nodes
        {
            get;
            set;
        }

        private Dictionary<Tuple<IMember, bool, bool>, OverloadsCollection> Members
        {
            get;
            set;
        }

        public void AddNode(AstNode astNode, bool isSetter, OverloadsCollection overloads)
        {
            this.Nodes[Tuple.Create(astNode, isSetter)] = overloads;
        }

        public bool TryGetNode(AstNode astNode, bool isSetter, out OverloadsCollection overloads)
        {
            return this.Nodes.TryGetValue(Tuple.Create(astNode, isSetter), out overloads);
        }

        public void AddMember(IMember member, bool isSetter, bool includeInline, OverloadsCollection overloads)
        {
            this.Members[Tuple.Create(member, isSetter, includeInline)] = overloads;
        }

        public bool TryGetMember(IMember member, bool isSetter, bool includeInline, out OverloadsCollection overloads)
        {
            return this.Members.TryGetValue(Tuple.Create(member, isSetter, includeInline), out overloads);
        }
    }
}