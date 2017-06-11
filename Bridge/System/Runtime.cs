using Bridge;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq.Expressions;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace System
{
    [External]
    [Flags]
    [NonScriptable]
    public enum AttributeTargets
    {
        Assembly = 0x0001,
        Module = 0x0002,
        Class = 0x0004,
        Struct = 0x0008,
        Enum = 0x0010,
        Constructor = 0x0020,
        Method = 0x0040,
        Property = 0x0080,
        Field = 0x0100,
        Event = 0x0200,
        Interface = 0x0400,
        Parameter = 0x0800,
        Delegate = 0x1000,
        ReturnValue = 0x2000,
        GenericParameter = 0x4000,
        Type = Class | Struct | Enum | Interface | Delegate,

        All = Assembly | Module | Class | Struct | Enum | Constructor |
              Method | Property | Field | Event | Interface | Parameter |
              Delegate | ReturnValue | GenericParameter
    }

    [External]
    [AttributeUsage(AttributeTargets.Class)]
    [NonScriptable]
    public class AttributeUsageAttribute : Attribute
    {
        public extern AttributeUsageAttribute(AttributeTargets validOn);

        internal extern AttributeUsageAttribute(AttributeTargets validOn, bool allowMultiple, bool inherited);

        /// <summary>Gets or sets a Boolean value indicating whether more than one instance of the indicated attribute can be specified for a single program element.</summary>
        /// <returns>true if more than one instance is allowed to be specified; otherwise, false. The default is false.</returns>
        public extern bool AllowMultiple
        {
            get;
            set;
        }

        /// <summary>Gets or sets a Boolean value indicating whether the indicated attribute can be inherited by derived classes and overriding members.</summary>
        /// <returns>true if the attribute can be inherited by derived classes and overriding members; otherwise, false. The default is true.</returns>
        public extern bool Inherited
        {
            get;
            set;
        }

        /// <summary>Gets a set of values identifying which program elements that the indicated attribute can be applied to.</summary>
        /// <returns>One or several <see cref="T:System.AttributeTargets"/> values. The default is All.</returns>
        public extern AttributeTargets ValidOn
        {
            get;
        }
    }

    [AttributeUsage(AttributeTargets.Enum, AllowMultiple = false)]
    [External]
    [NonScriptable]
    public class FlagsAttribute : Attribute
    {
    }

    [AttributeUsage(AttributeTargets.Delegate | AttributeTargets.Interface | AttributeTargets.Event | AttributeTargets.Field | AttributeTargets.Property | AttributeTargets.Method | AttributeTargets.Constructor | AttributeTargets.Enum | AttributeTargets.Struct | AttributeTargets.Class, Inherited = false)]
    [External]
    [NonScriptable]
    public sealed class ObsoleteAttribute : Attribute
    {
        public extern ObsoleteAttribute();

        public extern ObsoleteAttribute(string message);

        public extern ObsoleteAttribute(string message, bool error);

        public extern bool IsError
        {
            get;
        }

        public extern string Message
        {
            get;
        }
    }
}

namespace System.Runtime.InteropServices
{
    [ComVisible(true)]
    [AttributeUsage(AttributeTargets.Assembly | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Method | AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Interface | AttributeTargets.Delegate,
    Inherited = false)]
    [External]
    [NonScriptable]
    public sealed class ComVisibleAttribute : Attribute
    {
        public extern ComVisibleAttribute(bool visibility);

        public extern bool Value
        {
            get;
            private set;
        }
    }

    [AttributeUsageAttribute(AttributeTargets.Parameter)]
    [External]
    [NonScriptable]
    public sealed class OutAttribute : Attribute
    {
    }

    [AttributeUsageAttribute(AttributeTargets.Parameter)]
    [External]
    [NonScriptable]
    public sealed class InAttribute : Attribute
    {
    }
}

namespace System.Runtime.InteropServices
{
    [ComVisible(true)]
    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    [NonScriptable]
    public sealed class GuidAttribute : Attribute
    {
        public extern GuidAttribute(string guid);

        public extern string Value
        {
            get;
            private set;
        }
    }
}

namespace System.Reflection
{
    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    [NonScriptable]
    public sealed class AssemblyTitleAttribute : Attribute
    {
        public extern AssemblyTitleAttribute(string title);

        public extern string Title
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    [NonScriptable]
    public sealed class AssemblyDescriptionAttribute : Attribute
    {
        public extern AssemblyDescriptionAttribute(string description);

        public extern string Description
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    [NonScriptable]
    public sealed class AssemblyConfigurationAttribute : Attribute
    {
        public extern AssemblyConfigurationAttribute(string configuration);

        public extern string Configuration
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    [NonScriptable]
    public sealed class AssemblyCompanyAttribute : Attribute
    {
        public extern AssemblyCompanyAttribute(string company);

        public extern string Company
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    [NonScriptable]
    public sealed class AssemblyProductAttribute : Attribute
    {
        public extern AssemblyProductAttribute(string product);

        public extern string Product
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    [NonScriptable]
    public sealed class AssemblyCopyrightAttribute : Attribute
    {
        public extern AssemblyCopyrightAttribute(string copyright);

        public extern string Copyright
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    [NonScriptable]
    public sealed class AssemblyTrademarkAttribute : Attribute
    {
        public extern AssemblyTrademarkAttribute(string trademark);

        public extern string Trademark
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    [NonScriptable]
    public sealed class AssemblyCultureAttribute : Attribute
    {
        public extern AssemblyCultureAttribute(string culture);

        public extern string Culture
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    [NonScriptable]
    public sealed class AssemblyVersionAttribute : Attribute
    {
        public extern AssemblyVersionAttribute(string version);

        public extern string Version
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    [NonScriptable]
    public sealed class AssemblyFileVersionAttribute : Attribute
    {
        public extern AssemblyFileVersionAttribute(string version);

        public extern string Version
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly, Inherited = false)]
    [External]
    [NonScriptable]
    public sealed class AssemblyInformationalVersionAttribute : Attribute
    {
        public extern AssemblyInformationalVersionAttribute(string informationalVersion);

        public extern string InformationalVersion
        {
            get;
        }
    }

    [External]
    [NonScriptable]
    public sealed class DefaultMemberAttribute : Attribute
    {
        public extern DefaultMemberAttribute(string memberName);

        public extern string MemberName
        {
            get;
            private set;
        }
    }
}

namespace System.Runtime.Versioning
{
    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    [NonScriptable]
    public sealed class TargetFrameworkAttribute : Attribute
    {
        public extern TargetFrameworkAttribute();

        public extern TargetFrameworkAttribute(string frameworkName);

        public extern string FrameworkDisplayName
        {
            get;
            set;
        }

        public extern string FrameworkName
        {
            get;
            private set;
        }
    }
}

namespace System.Runtime.CompilerServices
{
    [EditorBrowsable(EditorBrowsableState.Never)]
    [External]
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Assembly, AllowMultiple = true, Inherited = false)]
    public sealed class InternalsVisibleToAttribute : Attribute
    {
        private string _assemblyName;
        private bool _allInternalsVisible = true;

        public InternalsVisibleToAttribute(string assemblyName)
        {
            this._assemblyName = assemblyName;
        }

        public string AssemblyName
        {
            get
            {
                return _assemblyName;
            }
        }

        public bool AllInternalsVisible
        {
            get { return _allInternalsVisible; }
            set { _allInternalsVisible = value; }
        }
    }

    /// <summary>
    ///     If AllInternalsVisible is not true for a friend assembly, the FriendAccessAllowed attribute
    ///     indicates which internals are shared with that friend assembly.
    /// </summary>
    [AttributeUsage(AttributeTargets.Class |
                    AttributeTargets.Constructor |
                    AttributeTargets.Enum |
                    AttributeTargets.Event |
                    AttributeTargets.Field |
                    AttributeTargets.Interface |
                    AttributeTargets.Method |
                    AttributeTargets.Property |
                    AttributeTargets.Struct,
        AllowMultiple = false,
        Inherited = false)]
    [FriendAccessAllowed]
    [EditorBrowsable(EditorBrowsableState.Never)]
    [External]
    [NonScriptable]
    internal sealed class FriendAccessAllowedAttribute : Attribute
    {
    }

    /// <summary>
    /// If a constructor for a value type takes an instance of this type as a parameter, any attribute applied to that constructor will instead be applied to the default (undeclarable) constructor.
    /// </summary>
    [EditorBrowsable(EditorBrowsableState.Never)]
    [External]
    [NonScriptable]
    public sealed class DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor
    {
        private extern DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor();
    }

    [External]
    [AttributeUsage(AttributeTargets.Property)]
    [NonScriptable]
    public class IndexerNameAttribute : Attribute
    {
        public extern IndexerNameAttribute(string indexerName);

        public extern string Value
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Parameter | AttributeTargets.Field)]
    [NonScriptable]
    public sealed class DecimalConstantAttribute : Attribute
    {
        public extern DecimalConstantAttribute(byte scale, byte sign, int hi, int mid, int low);

        public extern DecimalConstantAttribute(byte scale, byte sign, uint hi, uint mid, uint low);

        public extern decimal Value
        {
            get;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly | AttributeTargets.Class | AttributeTargets.Method)]
    [External]
    [NonScriptable]
    public sealed class ExtensionAttribute : Attribute
    {
        public extern ExtensionAttribute();
    }

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter | AttributeTargets.ReturnValue)]
    [External]
    [NonScriptable]
    public sealed class DynamicAttribute : Attribute
    {
        public extern DynamicAttribute();

        public extern DynamicAttribute(bool[] transformFlags);

        public extern List<bool> TransformFlags
        {
            get;
        }
    }

    [External]
    [NonScriptable]
    public class CallSite
    {
        public extern CallSiteBinder Binder
        {
            get;
        }

        public static extern CallSite Create(Type delegateType, CallSiteBinder binder);
    }

    [External]
    [NonScriptable]
    public sealed class CallSite<T> : CallSite where T : class
    {
        public extern T Update
        {
            get;
        }

        public T Target;

        public static extern CallSite<T> Create(CallSiteBinder binder);
    }

    [External]
    [NonScriptable]
    public abstract class CallSiteBinder
    {
        public static extern LabelTarget UpdateLabel
        {
            get;
        }

        public extern T BindDelegate<T>(CallSite<T> site, object[] args) where T : class;
    }

    [External]
    [NonScriptable]
    public struct AsyncVoidMethodBuilder
    {
        public static extern AsyncVoidMethodBuilder Create();

        public extern void Start<TStateMachine>(ref TStateMachine stateMachine) where TStateMachine : IAsyncStateMachine;

        public extern void SetStateMachine(IAsyncStateMachine stateMachine);

        public extern void AwaitOnCompleted<TAwaiter, TStateMachine>(ref TAwaiter awaiter, ref TStateMachine stateMachine)
            where TAwaiter : INotifyCompletion
            where TStateMachine : IAsyncStateMachine;

        public extern void AwaitUnsafeOnCompleted<TAwaiter, TStateMachine>(ref TAwaiter awaiter, ref TStateMachine stateMachine)
            where TAwaiter : ICriticalNotifyCompletion
            where TStateMachine : IAsyncStateMachine;

        public extern void SetResult();

        public extern void SetException(Exception exception);
    }

    [External]
    [NonScriptable]
    public struct AsyncTaskMethodBuilder
    {
        public extern Task Task
        {
            get;
        }

        public static extern AsyncTaskMethodBuilder Create();

        public extern void Start<TStateMachine>(ref TStateMachine stateMachine) where TStateMachine : IAsyncStateMachine;

        public extern void SetStateMachine(IAsyncStateMachine stateMachine);

        public extern void AwaitOnCompleted<TAwaiter, TStateMachine>(ref TAwaiter awaiter, ref TStateMachine stateMachine)
            where TAwaiter : INotifyCompletion
            where TStateMachine : IAsyncStateMachine;

        public extern void AwaitUnsafeOnCompleted<TAwaiter, TStateMachine>(ref TAwaiter awaiter, ref TStateMachine stateMachine)
            where TAwaiter : ICriticalNotifyCompletion
            where TStateMachine : IAsyncStateMachine;

        public extern void SetResult();

        public extern void SetException(Exception exception);
    }

    [External]
    [NonScriptable]
    public struct AsyncTaskMethodBuilder<TResult>
    {
        public extern Task<TResult> Task
        {
            get;
        }

        public static extern AsyncTaskMethodBuilder<TResult> Create();

        public extern void Start<TStateMachine>(ref TStateMachine stateMachine) where TStateMachine : IAsyncStateMachine;

        public extern void SetStateMachine(IAsyncStateMachine stateMachine);

        public extern void AwaitOnCompleted<TAwaiter, TStateMachine>(ref TAwaiter awaiter, ref TStateMachine stateMachine)
            where TAwaiter : INotifyCompletion
            where TStateMachine : IAsyncStateMachine;

        public extern void AwaitUnsafeOnCompleted<TAwaiter, TStateMachine>(ref TAwaiter awaiter, ref TStateMachine stateMachine)
            where TAwaiter : ICriticalNotifyCompletion
            where TStateMachine : IAsyncStateMachine;

        public extern void SetResult(TResult result);

        public extern void SetException(Exception exception);
    }

    [External]
    [NonScriptable]
    public interface IAsyncStateMachine
    {
        void MoveNext();

        void SetStateMachine(IAsyncStateMachine stateMachine);
    }

    [External]
    [NonScriptable]
    public interface INotifyCompletion
    {
        void OnCompleted(Action continuation);
    }

    [External]
    [NonScriptable]
    public interface ICriticalNotifyCompletion : INotifyCompletion
    {
        void UnsafeOnCompleted(Action continuation);
    }
}

namespace Microsoft.CSharp.RuntimeBinder
{
    [External]
    [NonScriptable]
    public static class Binder
    {
        public static extern CallSiteBinder BinaryOperation(CSharpBinderFlags flags, ExpressionType operation, Type context, IEnumerable<CSharpArgumentInfo> argumentInfo);

        public static extern CallSiteBinder Convert(CSharpBinderFlags flags, Type type, Type context);

        public static extern CallSiteBinder GetIndex(CSharpBinderFlags flags, Type context, IEnumerable<CSharpArgumentInfo> argumentInfo);

        public static extern CallSiteBinder GetMember(CSharpBinderFlags flags, string name, Type context, IEnumerable<CSharpArgumentInfo> argumentInfo);

        public static extern CallSiteBinder Invoke(CSharpBinderFlags flags, Type context, IEnumerable<CSharpArgumentInfo> argumentInfo);

        public static extern CallSiteBinder InvokeMember(CSharpBinderFlags flags, string name, IEnumerable<Type> typeArguments, Type context, IEnumerable<CSharpArgumentInfo> argumentInfo);

        public static extern CallSiteBinder InvokeConstructor(CSharpBinderFlags flags, Type context, IEnumerable<CSharpArgumentInfo> argumentInfo);

        public static extern CallSiteBinder IsEvent(CSharpBinderFlags flags, string name, Type context);

        public static extern CallSiteBinder SetIndex(CSharpBinderFlags flags, Type context, IEnumerable<CSharpArgumentInfo> argumentInfo);

        public static extern CallSiteBinder SetMember(CSharpBinderFlags flags, string name, Type context, IEnumerable<CSharpArgumentInfo> argumentInfo);

        public static extern CallSiteBinder UnaryOperation(CSharpBinderFlags flags, ExpressionType operation, Type context, IEnumerable<CSharpArgumentInfo> argumentInfo);
    }

    [External]
    [NonScriptable]
    public enum CSharpBinderFlags
    {
        None = 0,
        CheckedContext = 1,
        InvokeSimpleName = 2,
        InvokeSpecialName = 4,
        BinaryOperationLogical = 8,
        ConvertExplicit = 16,
        ConvertArrayIndex = 32,
        ResultIndexed = 64,
        ValueFromCompoundAssignment = 128,
        ResultDiscarded = 256,
    }

    [External]
    [NonScriptable]
    public sealed class CSharpArgumentInfo
    {
        public static extern CSharpArgumentInfo Create(CSharpArgumentInfoFlags flags, string name);
    }

    [External]
    [NonScriptable]
    public enum CSharpArgumentInfoFlags
    {
        None = 0,
        UseCompileTimeType = 1,
        Constant = 2,
        NamedArgument = 4,
        IsRef = 8,
        IsOut = 16,
        IsStaticType = 32,
    }
}

namespace System.Threading
{
    [EditorBrowsable(EditorBrowsableState.Never)]
    [External]
    [NonScriptable]
    public static class Interlocked
    {
        public static extern int CompareExchange(ref int location1, int value, int comparand);

        public static extern T CompareExchange<T>(ref T location1, T value, T comparand) where T : class;
    }

    [EditorBrowsable(EditorBrowsableState.Never)]
    [External]
    [NonScriptable]
    public static class Monitor
    {
        public static extern void Enter(object obj);

        public static extern void Enter(object obj, ref bool b);

        public static extern void Exit(object obj);
    }
}