using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.CSharp;

namespace Bridge.Translator
{
    public class UsingStaticReplacer : ICSharpReplacer
    {
        public SyntaxNode Replace(SyntaxNode root, SemanticModel model)
        {
            var unit = root as CompilationUnitSyntax;
            var removingUsings = new List<UsingDirectiveSyntax>();
            foreach (var u in unit.Usings)
            {
                try
                {
                    if (u.StaticKeyword.RawKind == (int)SyntaxKind.StaticKeyword)
                    {
                        removingUsings.Add(u);
                    }
                }
                catch (Exception e)
                {
                    throw new ReplacerException(u, e);
                }
            }

            return root.RemoveNodes(removingUsings, SyntaxRemoveOptions.KeepDirectives);
        }
    }
}