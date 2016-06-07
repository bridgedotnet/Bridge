using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using Mono.Cecil;
using TopologicalSorting;

using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace Bridge.Translator
{
    public partial class Emitter
    {
        public virtual int CompareTypeInfosByName(ITypeInfo x, ITypeInfo y)
        {
            if (x == y)
            {
                return 0;
            }

            if (x.Key == CS.NS.ROOT)
            {
                return -1;
            }

            if (y.Key == CS.NS.ROOT)
            {
                return 1;
            }

            if (!this.TypeDefinitions.ContainsKey(x.Key))
            {
                throw new TranslatorException("Class with name '" + x.Key + "' is not found in the assembly, probably rebuild is required");
            }

            if (!this.TypeDefinitions.ContainsKey(y.Key))
            {
                throw new TranslatorException("Class with name '" + y.Key + "' is not found in the assembly, probably rebuild is required");
            }

            var xTypeDefinition = this.TypeDefinitions[x.Key];
            var yTypeDefinition = this.TypeDefinitions[y.Key];

            return xTypeDefinition.FullName.CompareTo(yTypeDefinition.FullName);
        }

        public virtual int CompareTypeInfosByPriority(ITypeInfo x, ITypeInfo y)
        {
            if (x == y)
            {
                return 0;
            }

            if (x.Key == CS.NS.ROOT)
            {
                return -1;
            }

            if (y.Key == CS.NS.ROOT)
            {
                return 1;
            }

            var xTypeDefinition = this.TypeDefinitions[x.Key];
            var yTypeDefinition = this.TypeDefinitions[y.Key];

            var xPriority = this.GetPriority(xTypeDefinition);
            var yPriority = this.GetPriority(yTypeDefinition);

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

        private void QuickSort(IList<ITypeInfo> list, int l, int r)
        {
            ITypeInfo temp;
            ITypeInfo x = list[l + (r - l) / 2];
            int i = l;
            int j = r;
            while (i <= j)
            {

                while (this.CompareTypeInfosByPriority(list[i], x) == -1)
                {
                    i++;
                }

                while (this.CompareTypeInfosByPriority(list[j], x) == 1)
                {
                    j--;
                }

                if (i <= j)
                {
                    if (this.CompareTypeInfosByPriority(list[i], list[j]) != 0)
                    {
                        temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
                    
                    i++;
                    j--;
                }
            }

            if (i < r)
            {
                this.QuickSort(list, i, r);
            }


            if (l < j)
            {
                this.QuickSort(list, l, j);
            }
        }

        public virtual void SortTypesByInheritance()
        {
            this.Log.Trace("Sorting types by inheritance...");

            if (this.Types.Count > 0)
            {
                this.TopologicalSort();

                //this.Types.Sort has strange effects for items with 0 priority

                this.Log.Trace("Priority sorting...");

                this.QuickSort(this.Types, 0, this.Types.Count - 1);

                this.Log.Trace("Priority sorting done");
            }
            else
            {
                this.Log.Trace("No types to sort");
            }

            this.Log.Trace("Sorting types by inheritance done");
        }

        private Stack<IType> activeTypes;
        public IList<ITypeInfo> GetParents(IType type, IList<ITypeInfo> list = null, bool includeSelf = false)
        {
            if (list == null)
            {
                activeTypes = new Stack<IType>();
                list = new List<ITypeInfo>();
            }

            var typeDef = type.GetDefinition() ?? type;

            if (activeTypes.Contains(typeDef))
            {
                return list;
            }

            activeTypes.Push(typeDef);

            var types = type.GetAllBaseTypes();
            foreach (var t in types)
            {
                var bType = BridgeTypes.Get(t, true);

                if (bType != null && bType.TypeInfo != null && (includeSelf || bType.Type != typeDef))
                {
                    list.Add(bType.TypeInfo);
                }

                if (t.TypeArguments.Count > 0)
                {
                    foreach (var typeArgument in t.TypeArguments)
                    {
                        this.GetParents(typeArgument, list, true);
                    }
                }
            }

            activeTypes.Pop();
            return includeSelf ? list : list.Distinct().ToList();
        }

        public virtual void TopologicalSort()
        {
            this.Log.Trace("Topological sorting...");

            var graph = new TopologicalSorting.DependencyGraph();

            this.Log.Trace("\tTopological sorting first iteration...");

            var hitCounters = new long[7];

            foreach (var t in this.Types)
            {
                hitCounters[0]++;
                var parents = this.GetParents(t.Type);

                var tProcess = graph.Processes.FirstOrDefault(p => p.Name == t.Type.ReflectionName);
                if (tProcess == null)
                {
                    hitCounters[1]++;
                    tProcess = new TopologicalSorting.OrderedProcess(graph, t.Type.ReflectionName);
                }

                for (int i = parents.Count - 1; i > -1; i--)
                {
                    hitCounters[2]++;
                    var x = parents[i];

                    if (tProcess.Predecessors.All(p => p.Name != x.Type.ReflectionName))
                    {
                        hitCounters[3]++;

                        var dProcess = graph.Processes.FirstOrDefault(p => p.Name == x.Type.ReflectionName);
                        if (dProcess == null)
                        {
                            hitCounters[4]++;
                            dProcess = new TopologicalSorting.OrderedProcess(graph, x.Type.ReflectionName);
                        }
                        //var dProcess = new TopologicalSorting.OrderedProcess(graph, dependency.Type.FullName);

                        if (dProcess.Predecessors.All(p => p.Name != tProcess.Name))
                        {
                            hitCounters[4]++;
                            tProcess.After(dProcess);
                        }
                    }
                }
            }

            for (int i = 0; i < hitCounters.Length; i++)
            {
                this.Log.Trace("\t\tHitCounter" + i + " = " + hitCounters[i]);
            }

            this.Log.Trace("\tTopological sorting first iteration done");

            /*this.Log.Trace("\tTopological sorting second iteration...");

            System.Array.Clear(hitCounters, 0, hitCounters.Length);

            foreach (var t in this.Types)
            {
                hitCounters[0]++;

                var finder = new DependencyFinderVisitor(this, t);
                t.TypeDeclaration.AcceptVisitor(finder);

                var tProcess = graph.Processes.FirstOrDefault(p => p.Name == t.Type.ReflectionName);
                if (tProcess == null)
                {
                    hitCounters[1]++;
                    tProcess = new TopologicalSorting.OrderedProcess(graph, t.Type.ReflectionName);
                }

                if (finder.Dependencies.Count > 0)
                {
                    hitCounters[2]++;

                    foreach (var dependency in finder.Dependencies)
                    {
                        hitCounters[3]++;

                        if (tProcess.Predecessors.All(p => p.Name != dependency.Type.ReflectionName))
                        {
                            hitCounters[4]++;

                            var dProcess = graph.Processes.FirstOrDefault(p => p.Name == dependency.Type.ReflectionName);
                            if (dProcess == null)
                            {
                                hitCounters[5]++;
                                dProcess = new TopologicalSorting.OrderedProcess(graph, dependency.Type.ReflectionName);
                            }
                            //var dProcess = new TopologicalSorting.OrderedProcess(graph, dependency.Type.FullName);

                            if (dProcess.Predecessors.All(p => p.Name != tProcess.Name))
                            {
                                hitCounters[6]++;
                                tProcess.After(dProcess);
                            }
                        }
                    }
                }
            }

            for (int i = 0; i < hitCounters.Length; i++)
            {
                this.Log.Trace("\t\tHitCounter" + i + " = " + hitCounters[i]);
            }

            this.Log.Trace("\t\tgraph.ProcessCount = " + graph.ProcessCount);

            this.Log.Trace("\tTopological sorting second iteration done");*/

            if (graph.ProcessCount > 0)
            {
                ITypeInfo tInfo = null;

                try
                {
                    this.Log.Trace("\tTopological sorting third iteration...");

                    System.Array.Clear(hitCounters, 0, hitCounters.Length);

                    this.Log.Trace("\t\tCalculate sorting...");
                    IEnumerable<IEnumerable<OrderedProcess>> sorted = graph.CalculateSort();
                    this.Log.Trace("\t\tCalculate sorting done");

                    var list = new List<ITypeInfo>(this.Types.Count);
                    foreach (var processes in sorted)
                    {
                        hitCounters[0]++;

                        foreach (var process in processes)
                        {
                            hitCounters[1]++;

                            tInfo = this.Types.First(ti => ti.Type.ReflectionName == process.Name);

                            if (list.All(t => t.Type.ReflectionName != tInfo.Type.ReflectionName))
                            {
                                hitCounters[2]++;
                                list.Add(tInfo);
                            }
                        }
                    }

                    this.Types.Clear();
                    this.Types.AddRange(list);

                    for (int i = 0; i < hitCounters.Length; i++)
                    {
                        this.Log.Trace("\t\tHitCounter" + i + " = " + hitCounters[i]);
                    }

                    this.Log.Trace("\tTopological sorting third iteration done");
                }
                catch (System.Exception ex)
                {
                    this.LogWarning(string.Format("Topological sort failed {0} with error {1}", tInfo != null ? "at type " + tInfo.Type.ReflectionName : string.Empty, ex));
                }
            }

            this.Log.Trace("Topological sorting done");
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

            if (list.Count > 0 && list[0] == JS.Types.OBJECT)
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