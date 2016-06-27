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
    public class Plugins : IPlugins
    {
        private const string PLUGIN_RESOURCE_NAME_PREFIX = "Bridge.Plugins.";

        public static bool IsLoaded { get; set; }

        public static string GetPluginPath(ITranslator translator, IAssemblyInfo config)
        {
            string path = null;

            if (!string.IsNullOrWhiteSpace(config.PluginsPath))
            {
                path = Path.Combine(translator.FolderMode ? translator.Location : Path.GetDirectoryName(translator.Location), config.PluginsPath);
            }
            else
            {
                path = Path.Combine(translator.FolderMode ? translator.Location : Path.GetDirectoryName(translator.Location), "Bridge" + Path.DirectorySeparatorChar + "plugins");
            }

            return path;
        }

        protected class AssemblyResolver
        {
            public ILogger Logger { get; set; }

            public void CurrentDomain_AssemblyLoad(object sender, AssemblyLoadEventArgs args)
            {
                this.Logger.Trace("Loaded assembly: " + (args.LoadedAssembly != null ? args.LoadedAssembly.FullName : "none"));
            }

            public Assembly CurrentDomain_AssemblyResolve(object sender, ResolveEventArgs args)
            {
                var domain = sender as AppDomain;

                this.Logger.Trace("Domain " + domain.FriendlyName
                    + " resolving assembly " + args.Name
                    + " requested by " + (args.RequestingAssembly != null ? args.RequestingAssembly.FullName : "none")
                    + " ...");

                AssemblyName askedAssembly = new AssemblyName(args.Name);
                var assemblyLoaded = AssemblyResolver.CheckIfAssemblyLoaded(askedAssembly.Name, domain);

                if (assemblyLoaded != null)
                {
                    this.Logger.Trace("Resolved for " + assemblyLoaded.FullName + " in the loaded domain assemblies");
                    return assemblyLoaded;
                }

                this.Logger.Trace("Did not find the assembly " + args.Name + " in the loaded domain assemblies");

                if (args.RequestingAssembly != null)
                {
                    assemblyLoaded = Plugins.LoadAssemblyFromResources(this.Logger, args.RequestingAssembly, askedAssembly);

                    if (assemblyLoaded != null)
                    {
                        this.Logger.Trace("Resolved for " + assemblyLoaded.FullName + " in " + args.RequestingAssembly.FullName + " resources");
                        return assemblyLoaded;
                    }

                    this.Logger.Trace("Did not resolve assembly " + args.Name + " in " + args.RequestingAssembly.FullName + " resources");
                }
                else
                {
                    this.Logger.Trace("Did not resolve assembly " + args.Name + ". Requesting assembly is null. Will not try to load the asked assembly in resources");
                }

                return null;
            }

            public static Assembly CheckIfAssemblyLoaded(string fullAssemblyName, AppDomain domain)
            {
                var assemblies = domain.GetAssemblies();
                foreach (var assembly in assemblies)
                {
                    var assemblyName = new AssemblyName(assembly.FullName);
                    if (assemblyName.Name == fullAssemblyName)
                    {
                        return assembly;
                    }
                }

                return null;
            }
        }

        public static IPlugins GetPlugins(ITranslator translator, IAssemblyInfo config, ILogger logger)
        {
            logger.Info("Discovering plugins...");

            if (!Plugins.IsLoaded)
            {
                var resolver = new AssemblyResolver() { Logger = logger };

                AppDomain.CurrentDomain.AssemblyResolve += resolver.CurrentDomain_AssemblyResolve;

                AppDomain.CurrentDomain.AssemblyLoad += resolver.CurrentDomain_AssemblyLoad;

                Plugins.IsLoaded = true;

                logger.Trace("Set assembly Resolve and Load events for domain " + AppDomain.CurrentDomain.FriendlyName);
            }

            logger.Trace("Current domain " + AppDomain.CurrentDomain.FriendlyName);

            logger.Trace("Application base: " + AppDomain.CurrentDomain.SetupInformation.ApplicationBase);

            logger.Trace("Loaded assemblies:");
            foreach (var a in AppDomain.CurrentDomain.GetAssemblies())
            {
                logger.Trace("\t" + a.FullName);
            }

            var path = GetPluginPath(translator, config);
            logger.Info("Will use the following plugin path \"" + path + "\"");

            var catalogs = new List<ComposablePartCatalog>();

            if (Directory.Exists(path))
            {
                catalogs.Add(new DirectoryCatalog(path, "*.dll"));
                logger.Info("The plugin path exists. Will use it as DirectoryCatalog");
            }
            else
            {
                logger.Info("The plugin path does not exist. Skipping searching test framework plugins in the plugin folder.");
            }

            string[] skipPluginAssemblies = null;
            var translatorInstance = translator as Translator;
            if (translatorInstance != null)
            {
                skipPluginAssemblies = translatorInstance.SkipPluginAssemblies;
            }

            logger.Trace("Will search all translator references to find resource(s) with names starting from \"" + PLUGIN_RESOURCE_NAME_PREFIX + "\" ...");

            foreach (var reference in translator.References)
            {
                logger.Trace("Searching plugins in reference " + reference.FullName + " ...");

                if (skipPluginAssemblies != null && skipPluginAssemblies.FirstOrDefault(x => reference.Name.FullName.Contains(x)) != null)
                {
                    logger.Trace("Skipping the reference " + reference.Name.FullName + " as it is in skipPluginAssemblies");
                    continue;
                }
                else
                {
                    logger.Trace("skipPluginAssemblies is not set");
                }

                var assemblies = reference.MainModule.Resources.Where(res => res.Name.StartsWith(PLUGIN_RESOURCE_NAME_PREFIX));

                logger.Trace("The reference contains " + assemblies.Count() + " resource(s) needed");

                if (assemblies.Any())
                {
                    foreach (var res_assembly in assemblies)
                    {
                        logger.Trace("Searching plugins in resource " + res_assembly.Name + " ...");

                        try
                        {
                            using (var resourcesStream = ((EmbeddedResource)res_assembly).GetResourceStream())
                            {
                                var ba = new byte[(int)resourcesStream.Length];
                                resourcesStream.Read(ba, 0, (int)resourcesStream.Length);

                                logger.Trace("Read the assembly resource stream of " + resourcesStream.Length + " bytes length");

                                var trimmedName = Plugins.TrimResourceAssemblyName(res_assembly, PLUGIN_RESOURCE_NAME_PREFIX);

                                var assembly = CheckIfAssemblyLoaded(logger, ba, null, trimmedName);

                                catalogs.Add(new AssemblyCatalog(assembly));
                                logger.Trace("The assembly " + assembly.FullName + " added to the catalogs");
                            }
                        }
                        catch (ReflectionTypeLoadException ex)
                        {
                            LogAssemblyLoaderException("Could not load assembly from resources", ex, logger);
                        }
                        catch (System.Exception ex)
                        {
                            logger.Error("Could not load assembly from resources: " + ex.ToString());
                        }

                    }
                }
            }

            if (catalogs.Count == 0)
            {
                logger.Info("No AssemblyCatalogs found");
                return new Plugins() { plugins = new IPlugin[0] };
            }

            var catalog = new AggregateCatalog(catalogs);

            CompositionContainer container = new CompositionContainer(catalog);
            var plugins = new Plugins();

            logger.Info("ComposingParts to discover plugins...");

            try
            {
                container.ComposeParts(plugins);
            }
            catch (ReflectionTypeLoadException ex)
            {
                LogAssemblyLoaderException("Could not compose Plugin parts", ex, logger);
            }
            catch (System.Exception ex)
            {
                logger.Error("Could not compose Plugin parts: " +  ex.ToString());
            }

            if (plugins.Parts != null)
            {
                foreach (var plugin in plugins.Parts)
                {
                    plugin.Logger = translator.Log;
                }

                logger.Info("Discovered " + plugins.Parts.Count() + " plugin(s)");
            }

            return plugins;
        }

        public static string TrimResourceAssemblyName(Resource resource, string resourceNamePrefix)
        {
            var trimmedName = resource.Name;

            var i = trimmedName.IndexOf(resourceNamePrefix);
            if (i >= 0)
            {
                trimmedName = trimmedName.Remove(i, resourceNamePrefix.Length);
            }

            i = trimmedName.LastIndexOf(".dll");
            if (i >= 0)
            {
                trimmedName = trimmedName.Remove(i, 4);
            }

            return trimmedName;
        }

        public static string TrimAssemblyName(string assemblyName)
        {
            var trimmedName = assemblyName;

            var i = trimmedName.LastIndexOf(".dll");
            if (i >= 0)
            {
                trimmedName = trimmedName.Remove(i, 4);
            }

            return trimmedName;
        }

        public static Assembly LoadAssemblyFromResources(ILogger logger, Assembly sourceAssembly, AssemblyName assemblyName)
        {
            if (assemblyName == null)
            {
                logger.Warn("Cannot try to load assembly from resources as the assemblyName is null");
            }

            if (sourceAssembly == null)
            {
                logger.Warn("Cannot try to load assembly " + assemblyName.FullName + " from resources as the source assembly is null");
            }

            logger.Trace("Trying to resolve " + assemblyName.FullName + " in the resources of " + sourceAssembly.FullName + " ...");

            logger.Trace("Will use assembly name " + assemblyName.Name);

            var resourceNames = sourceAssembly.GetManifestResourceNames();

            foreach (var resourceName in resourceNames)
            {
                var trimmedResourceName = Plugins.TrimAssemblyName(resourceName);

                logger.Trace("Scanning resource " + resourceName + ". Trimmed resource name " + trimmedResourceName + " ...");

                if (trimmedResourceName == assemblyName.Name)
                {
                    logger.Trace("Found resource with name " + resourceName);

                    using (var resourcesStream = sourceAssembly.GetManifestResourceStream(resourceName))
                    {
                        var ba = new byte[(int)resourcesStream.Length];
                        resourcesStream.Read(ba, 0, (int)resourcesStream.Length);

                        logger.Trace("Read the assembly resource stream of " + resourcesStream.Length + " bytes length");

                        return CheckIfAssemblyLoaded(logger, ba, null, resourceName);
                    }
                }
            }

            return null;

        }

        public static Assembly CheckIfAssemblyLoaded(ILogger logger, byte[] ba, AssemblyName assemblyName, string trimmedName)
        {
            logger.Trace("Check if assembly " + trimmedName + " already loaded");

            Assembly assembly = AssemblyResolver.CheckIfAssemblyLoaded(trimmedName, AppDomain.CurrentDomain);
            if (assembly != null)
            {
                logger.Trace("The assembly " + trimmedName + " is already loaded");
            }
            else
            {
                logger.Trace("Loading the assembly into domain " + AppDomain.CurrentDomain.FriendlyName + " ...");

                if (ba != null)
                {
                    assembly = Assembly.Load(ba);
                }
                else
                {
                    assembly = Assembly.Load(assemblyName);
                }

                logger.Trace("Assembly " + assembly.FullName + " is loaded into domain " + AppDomain.CurrentDomain.FriendlyName);
            }

            return assembly;
        }

        private static void LogAssemblyLoaderException(string reason, ReflectionTypeLoadException ex, ILogger logger)
        {
            var sb = new System.Text.StringBuilder(reason + ": ");

            sb.AppendLine(ex.ToString());

            if (ex.LoaderExceptions != null)
            {
                sb.AppendFormat("LoaderExceptions ({0} items): ", ex.LoaderExceptions.Length);

                foreach (var loaderException in ex.LoaderExceptions)
                {
                    sb.AppendLine(loaderException.Message);
                }
            }

            var message = sb.ToString();

            if (logger != null)
            {
                logger.Error(message);
            }
            else
            {
                Console.WriteLine(message);
            }

            sb.Clear();
        }

        [ImportMany]
        private IEnumerable<IPlugin> plugins;

        public IEnumerable<IPlugin> Parts
        {
            get
            {
                if (this.plugins == null)
                {
                    this.plugins = new List<IPlugin>();
                }

                return this.plugins;
            }
        }

        public void OnConfigRead(IAssemblyInfo config)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.OnConfigRead(config);
            }
        }

        public IEnumerable<string> GetConstructorInjectors(IConstructorBlock constructorBlock)
        {
            IEnumerable<string> result = new List<string>();
            foreach (var plugin in this.Parts)
            {
                var answer = plugin.GetConstructorInjectors(constructorBlock);
                if (answer != null)
                {
                    result = result.Concat(answer);    
                }
            }

            return result;
        }

        private InvocationInterceptor defaultInvocationInterceptor;
        private InvocationInterceptor GetInvocationInterceptor()
        {
            if (this.defaultInvocationInterceptor == null)
            {
                this.defaultInvocationInterceptor = new InvocationInterceptor();
            }

            this.defaultInvocationInterceptor.Cancel = false;
            this.defaultInvocationInterceptor.Replacement = null;
            return this.defaultInvocationInterceptor;
        }

        public IInvocationInterceptor OnInvocation(IAbstractEmitterBlock block, InvocationExpression expression, InvocationResolveResult resolveResult)
        {
            InvocationInterceptor interceptor = this.GetInvocationInterceptor();
            
            interceptor.Block = block;
            interceptor.Expression = expression;
            interceptor.ResolveResult = resolveResult;

            foreach (var plugin in this.Parts)
            {
                plugin.OnInvocation(interceptor);
                if (interceptor.Cancel)
                {
                    return interceptor;
                }                
            }

            return interceptor;
        }

        private ReferenceInterceptor defaultReferenceInterceptor;
        private ReferenceInterceptor GetReferenceInterceptor()
        {
            if (this.defaultReferenceInterceptor == null)
            {
                this.defaultReferenceInterceptor = new ReferenceInterceptor();
            }

            this.defaultReferenceInterceptor.Cancel = false;
            this.defaultReferenceInterceptor.Replacement = null;
            return this.defaultReferenceInterceptor;
        }

        public IReferenceInterceptor OnReference(IAbstractEmitterBlock block, MemberReferenceExpression expression, MemberResolveResult resolveResult)
        {
            ReferenceInterceptor interceptor = this.GetReferenceInterceptor();

            interceptor.Block = block;
            interceptor.Expression = expression;
            interceptor.ResolveResult = resolveResult;

            foreach (var plugin in this.Parts)
            {
                plugin.OnReference(interceptor);
                if (interceptor.Cancel)
                {
                    return interceptor;
                }
            }

            return interceptor;
        }

        public bool HasConstructorInjectors(IConstructorBlock constructorBlock)
        {
            foreach (var plugin in this.Parts)
            {
                if (plugin.HasConstructorInjectors(constructorBlock))
                {
                    return true;
                }
            }

            return false;
        }

        public void BeforeEmit(IEmitter emitter, ITranslator translator)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.BeforeEmit(emitter, translator);
            }
        }

        public void AfterEmit(IEmitter emitter, ITranslator translator)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.AfterEmit(emitter, translator);
            }
        }

        public void AfterOutput(ITranslator translator, string outputPath, bool nocore)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.AfterOutput(translator, outputPath, nocore);
            }
        }

        public void BeforeTypesEmit(IEmitter emitter, IList<ITypeInfo> types)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.BeforeTypesEmit(emitter, types);
            }
        }

        public void AfterTypesEmit(IEmitter emitter, IList<ITypeInfo> types)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.AfterTypesEmit(emitter, types);
            }
        }

        public void BeforeTypeEmit(IEmitter emitter, ITypeInfo type)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.BeforeTypeEmit(emitter, type);
            }
        }

        public void AfterTypeEmit(IEmitter emitter, ITypeInfo type)
        {
            foreach (var plugin in this.Parts)
            {
                plugin.AfterTypeEmit(emitter, type);
            }
        }
    }
}
