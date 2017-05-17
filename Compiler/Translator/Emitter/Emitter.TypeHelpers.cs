using Bridge.Contract;
using Bridge.Contract.Constants;
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

            var xZero = x.Key == "0";
            var yZero = y.Key == "0";
            var xTypeDefinition = xZero ? null : this.TypeDefinitions[x.Key];
            var yTypeDefinition = yZero ? null : this.TypeDefinitions[y.Key];

            var xPriority = xZero ? 0 : this.GetPriority(xTypeDefinition);
            var yPriority = yZero ? 0 : this.GetPriority(yTypeDefinition);

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

        private List<ITypeInfo> SortByPriority(IList<ITypeInfo> list)
        {
            List<ITypeInfo> sortable = new List<ITypeInfo>();
            List<ITypeInfo> nonSortable = new List<ITypeInfo>();
            for (int i = 0; i < list.Count; i++)
            {
                if (this.GetPriority(this.TypeDefinitions[list[i].Key]) == 0)
                {
                    nonSortable.Add(list[i]);
                }
                else
                {
                    sortable.Add(list[i]);
                }
            }

            var zeroPlaceholder = new TypeInfo() { Key = "0" };
            sortable.Add(zeroPlaceholder);
            sortable.Sort(this.CompareTypeInfosByPriority);

            var idx = sortable.FindIndex(t => t.Key == "0");
            sortable.RemoveAt(idx);
            sortable.InsertRange(idx, nonSortable);

            return sortable;
        }

        public virtual void SortTypesByInheritance()
        {
            this.Log.Trace("Sorting types by inheritance...");

            if (this.Types.Count > 0)
            {
                this.TopologicalSort();

                //this.Types.Sort has strange effects for items with 0 priority

                this.Log.Trace("Priority sorting...");

                this.Types = this.SortByPriority(this.Types);

                this.Log.Trace("Priority sorting done");
            }
            else
            {
                this.Log.Trace("No types to sort");
            }

            this.Log.Trace("Sorting types by inheritance done");
        }

        private Stack<IType> activeTypes;
        private Dictionary<IType, IList<ITypeInfo>> cacheParents = new Dictionary<IType, IList<ITypeInfo>>();

        public IList<ITypeInfo> GetParents(IType type, List<ITypeInfo> list = null)
        {
            IList<ITypeInfo> result;

            if (this.cacheParents.TryGetValue(type, out result))
            {
                list?.AddRange(result);
                return result;
            }

            bool endPoint = list == null;
            if (endPoint)
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

                if (bType?.TypeInfo != null && !bType.Type.Equals(typeDef))
                {
                    list.Add(bType.TypeInfo);
                }

                if (t.TypeArguments.Count > 0)
                {
                    foreach (var typeArgument in t.TypeArguments)
                    {
                        bType = BridgeTypes.Get(typeArgument, true);
                        if (bType?.TypeInfo != null && !bType.Type.Equals(typeDef))
                        {
                            list.Add(bType.TypeInfo);
                        }

                        this.GetParents(typeArgument, list);
                    }
                }
            }

            activeTypes.Pop();
            list = list.Distinct().ToList();
            cacheParents[type] = list;

            return list;
        }

        public string GetReflectionName(IType type)
        {
            string name = null;
            if (this.nameCache.TryGetValue(type, out name))
            {
                return name;
            }

            name = type.ReflectionName;
            this.nameCache[type] = name;

            return name;
        }

        private Dictionary<IType, string> nameCache = new Dictionary<IType, string>();
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
                var reflectionName = GetReflectionName(t.Type);
                var tProcess = graph.Processes.FirstOrDefault(p => p.Name == reflectionName);
                if (tProcess == null)
                {
                    hitCounters[1]++;
                    tProcess = new TopologicalSorting.OrderedProcess(graph, reflectionName);
                }

                for (int i = parents.Count - 1; i > -1; i--)
                {
                    hitCounters[2]++;
                    var x = parents[i];
                    reflectionName = GetReflectionName(x.Type);
                    if (tProcess.Predecessors.All(p => p.Name != reflectionName))
                    {
                        hitCounters[3]++;

                        var dProcess = graph.Processes.FirstOrDefault(p => p.Name == reflectionName);
                        if (dProcess == null)
                        {
                            hitCounters[4]++;
                            dProcess = new TopologicalSorting.OrderedProcess(graph, reflectionName);
                        }

                        if (tProcess != dProcess && dProcess.Predecessors.All(p => p.Name != tProcess.Name))
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

            if (graph.ProcessCount > 0)
            {
                ITypeInfo tInfo = null;

                try
                {
                    this.Log.Trace("\tTopological sorting third iteration...");

                    System.Array.Clear(hitCounters, 0, hitCounters.Length);

                    this.Log.Trace("\t\tCalculate sorting...");
                    TopologicalSort sorted = graph.CalculateSort();
                    this.Log.Trace("\t\tCalculate sorting done");

                    this.Log.Trace("\t\tGetting Reflection names for " + this.Types.Count + " types...");

                    var list = new List<ITypeInfo>(this.Types.Count);

                    // The fix required for Mono 5.0.0.94
                    // It does not "understand" TopologicalSort's Enumerator in foreach
                    // foreach (var processes in sorted)
                    // The code is modified to get it "directly" and "typed"
                    var sortedISetEnumerable = sorted as IEnumerable<ISet<OrderedProcess>>;
                    this.Log.Trace("\t\tGot Enumerable<ISet<OrderedProcess>>");

                    var sortedISetEnumerator = sortedISetEnumerable.GetEnumerator();
                    this.Log.Trace("\t\tGot Enumerator<ISet<OrderedProcess>>");

                    while (sortedISetEnumerator.MoveNext())
                    {
                        var processes = sortedISetEnumerator.Current;

                        hitCounters[0]++;

                        foreach (var process in processes)
                        {
                            hitCounters[1]++;

                            tInfo = this.Types.First(ti => GetReflectionName(ti.Type) == process.Name);

                            var reflectionName = GetReflectionName(tInfo.Type);

                            if (list.All(t => GetReflectionName(t.Type) != reflectionName))
                            {
                                hitCounters[2]++;
                                list.Add(tInfo);
                            }
                        }
                    }

                    this.Log.Trace("\t\tGetting Reflection names done");

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
            cacheParents = null;
            activeTypes = null;
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

            if (list.Count > 0 && list[0] == JS.Types.System.Object.NAME)
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

        private Dictionary<TypeDefinition, int> priorityMap = new Dictionary<TypeDefinition, int>();
        public virtual int GetPriority(TypeDefinition type)
        {
            if (this.priorityMap.ContainsKey(type))
            {
                return this.priorityMap[type];
            }

            var attr = type.CustomAttributes.FirstOrDefault(a =>
            {
                return a.AttributeType.FullName == "Bridge.PriorityAttribute";
            });

            if (attr != null)
            {
                var attrp = System.Convert.ToInt32(attr.ConstructorArguments[0].Value);
                this.priorityMap[type] = attrp;
                return attrp;
            }

            var baseType = this.GetBaseTypeDefinition(type);
            var p = 0;
            if (baseType != null)
            {
                p = this.GetPriority(baseType);
            }

            this.priorityMap[type] = p;
            return p;
        }
    }
}