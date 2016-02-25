using Bridge.Contract;

using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.ComponentModel.Composition.Hosting;
using System.ComponentModel.Composition.Primitives;
using System.IO;
using System.Linq;
using System.Reflection;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using Mono.Cecil;

namespace Bridge.Translator
{
    public class InvocationInterceptor : IInvocationInterceptor
    {
        public IAbstractEmitterBlock Block
        {
            get;
            internal set;
        }

        public InvocationExpression Expression
        {
            get; 
            internal set;
        }

        public InvocationResolveResult ResolveResult
        {
            get; 
            internal set;
        }

        public string Replacement
        {
            get;
            internal set;
        }

        public bool Cancel
        {
            get;
            set;
        }
    }
}
