using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using Mono.Cecil;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TopologicalSorting;

namespace Bridge.Translator
{
    public partial class Emitter
    {
        public virtual int CompareTypeInfosByNameAndPriority(ITypeInfo x, ITypeInfo y)
        {
            if (x == y)
            {
                return 0;
            }

            if (x.Key == Emitter.ROOT)
            {
                return -1;
            }

            if (y.Key == Emitter.ROOT)
            {
                return 1;
            }

            var xTypeDefinition = this.TypeDefinitions[x.Key];
            var yTypeDefinition = this.TypeDefinitions[y.Key];

            var xPriority = this.GetPriority(xTypeDefinition);
            var yPriority = this.GetPriority(yTypeDefinition);

            if (xPriority == yPriority)
            {
                return xTypeDefinition.FullName.CompareTo(yTypeDefinition.FullName);
            }

            return -xPriority.CompareTo(yPriority);
        }

        public virtual bool IsInheritedFrom(ITypeInfo x, ITypeInfo y)
        {
            if (x == y)
            {
                return false;
            }

            var inherits = false;
            var xTypeDefinition = this.TypeDefinitions[x.Key];
            var yTypeDefinition = this.TypeDefinitions[y.Key];

            if (Helpers.IsSubclassOf(xTypeDefinition, yTypeDefinition, this) ||
                (yTypeDefinition.IsInterface && Helpers.IsImplementationOf(xTypeDefinition, yTypeDefinition, this)) ||
                Helpers.IsTypeArgInSubclass(xTypeDefinition, yTypeDefinition, this))
            {
                inherits = true;
            }

            return inherits;
        }

        public virtual void SortTypesByInheritance()
        {
            this.TopologicalSort();

            var clonedTypes = new List<ITypeInfo>(this.Types);

            foreach (var t in clonedTypes)
            {
                for (int i = this.Types.Count - 1; i > -1; i--)
                {
                    var x = this.Types[i];

                    if (this.IsInheritedFrom(t, x))
                    {
                        this.Types.Remove(t);
                        this.Types.Insert(this.Types.IndexOf(x) + 1, t);
                        break;
                    }
                }
            }
        }

        public virtual void TopologicalSort()
        {
            var graph = new TopologicalSorting.DependencyGraph();

            foreach (var t in this.Types)
            {
                var finder = new DependencyFinderVisitor(this);
                t.TypeDeclaration.AcceptVisitor(finder);
                var tProcess = new TopologicalSorting.OrderedProcess(graph, t.Type.FullName);

                if (finder.Dependencies.Count > 0)
                {
                    foreach (var dependency in finder.Dependencies)
                    {
                        if (tProcess.Predecessors.All(p => p.Name != dependency.Type.FullName))
                        {
                            var dProcess = new TopologicalSorting.OrderedProcess(graph, dependency.Type.FullName);
                            tProcess.After(dProcess);
                        }
                    }
                }
            }

            if (graph.ProcessCount > 0)
            {
                ITypeInfo tInfo = null;

                try
                {
                    IEnumerable<IEnumerable<OrderedProcess>> sorted = graph.CalculateSort();

                    var list = new List<ITypeInfo>(this.Types.Count);
                    foreach (var processes in sorted)
                    {
                        foreach (var process in processes)
                        {
                            tInfo = this.Types.First(ti => ti.Type.FullName == process.Name);

                            if (list.All(t => t.Type.FullName != tInfo.Type.FullName))
                            {
                                list.Add(tInfo);
                            }
                        }
                    }

                    this.Types.Clear();
                    this.Types.AddRange(list);
                }
                catch (Exception ex)
                {
                    this.LogWarning(string.Format("Topological sort failed {0} with error {1}", tInfo != null ? "at type " + tInfo.Type.FullName : string.Empty,  ex));
                }

            }
        }

        public virtual TypeDefinition GetTypeDefinition()
        {
            return this.TypeDefinitions[this.TypeInfo.Key];
        }

        public virtual TypeDefinition GetTypeDefinition(IType type)
        {
            return this.BridgeTypes.Get(type).TypeDefinition;
        }

        public virtual TypeDefinition GetTypeDefinition(AstType reference, bool safe = false)
        {
            var resolveResult = this.Resolver.ResolveNode(reference, this) as TypeResolveResult;
            var type = this.BridgeTypes.Get(resolveResult.Type, safe);
            return type != null ? type.TypeDefinition : null;
        }

        public virtual TypeDefinition GetBaseTypeDefinition()
        {
            return this.GetBaseTypeDefinition(this.GetTypeDefinition());
        }

        public virtual TypeDefinition GetBaseTypeDefinition(TypeDefinition type)
        {
            var reference = type.BaseType;

            if (reference == null)
            {
                return null;
            }

            return this.BridgeTypes.Get(reference).TypeDefinition;
        }

        public virtual TypeDefinition GetBaseMethodOwnerTypeDefinition(string methodName, int genericParamCount)
        {
            TypeDefinition type = this.GetBaseTypeDefinition();

            while (true)
            {
                var methods = type.Methods.Where(m => m.Name == methodName);

                foreach (var method in methods)
                {
                    if (genericParamCount < 1 || method.GenericParameters.Count == genericParamCount)
                    {
                        return type;
                    }
                }

                type = this.GetBaseTypeDefinition(type);
            }
        }

        public virtual string GetTypeHierarchy()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("[");

            var list = new List<string>();

            foreach (var t in this.TypeInfo.GetBaseTypes(this))
            {
                var name = BridgeTypes.ToJsName(t, this);

                list.Add(name);
            }

            if (list.Count > 0 && list[0] == "Object")
            {
                list.RemoveAt(0);
            }

            if (list.Count == 0)
            {
                return "";
            }

            bool needComma = false;

            foreach (var item in list)
            {
                if (needComma)
                {
                    sb.Append(",");
                }

                needComma = true;
                sb.Append(item);
            }

            sb.Append("]");

            return sb.ToString();
        }

        public virtual int GetPriority(TypeDefinition type)
        {
            var attr = type.CustomAttributes.FirstOrDefault(a =>
            {
                return a.AttributeType.FullName == "Bridge.PriorityAttribute";
            });

            if (attr != null)
            {
                return System.Convert.ToInt32(attr.ConstructorArguments[0].Value);
            }

            var baseType = this.GetBaseTypeDefinition(type);

            if (baseType != null)
            {
                return this.GetPriority(baseType);
            }

            return 0;
        }
    }
}
