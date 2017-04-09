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

        public Dictionary<Tuple<AstNode, bool>, OverloadsCollection> Nodes
        {
            get;
            private set;
        }

        public Dictionary<Tuple<IMember, bool, bool>, OverloadsCollection> Members
        {
            get;
            private set;
        }
    }
}