using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq.Expressions;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace System.Reflection
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Assembly)]
    [Bridge.External]
    [Bridge.NonScriptable]
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
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class AssemblyDescriptionAttribute : Attribute
    {
        public extern AssemblyDescriptionAttribute(string description);

        public extern string Description
        {
            get;
            private set;
        }
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Assembly)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class AssemblyConfigurationAttribute : Attribute
    {
        public extern AssemblyConfigurationAttribute(string configuration);

        public extern string Configuration
        {
            get;
            private set;
        }
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Assembly)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class AssemblyCompanyAttribute : Attribute
    {
        public extern AssemblyCompanyAttribute(string company);

        public extern string Company
        {
            get;
            private set;
        }
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Assembly)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class AssemblyProductAttribute : Attribute
    {
        public extern AssemblyProductAttribute(string product);

        public extern string Product
        {
            get;
            private set;
        }
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Assembly)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class AssemblyCopyrightAttribute : Attribute
    {
        public extern AssemblyCopyrightAttribute(string copyright);

        public extern string Copyright
        {
            get;
            private set;
        }
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Assembly)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class AssemblyTrademarkAttribute : Attribute
    {
        public extern AssemblyTrademarkAttribute(string trademark);

        public extern string Trademark
        {
            get;
            private set;
        }
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Assembly)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class AssemblyCultureAttribute : Attribute
    {
        public extern AssemblyCultureAttribute(string culture);

        public extern string Culture
        {
            get;
            private set;
        }
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Assembly)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class AssemblyVersionAttribute : Attribute
    {
        public extern AssemblyVersionAttribute(string version);

        public extern string Version
        {
            get;
            private set;
        }
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Assembly)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class AssemblyFileVersionAttribute : Attribute
    {
        public extern AssemblyFileVersionAttribute(string version);

        public extern string Version
        {
            get;
            private set;
        }
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Assembly, Inherited = false)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class AssemblyInformationalVersionAttribute : Attribute
    {
        public extern AssemblyInformationalVersionAttribute(string informationalVersion);

        public extern string InformationalVersion
        {
            get;
        }
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
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

namespace System.Runtime.CompilerServices
{
    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.External]
    [Bridge.NonScriptable]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Event | AttributeTargets.Parameter | AttributeTargets.ReturnValue)]
#pragma warning disable CS3015 // Type has no accessible constructors which use only CLS-compliant types
    public sealed class TupleElementNamesAttribute : Attribute
#pragma warning restore CS3015 // Type has no accessible constructors which use only CLS-compliant types
    {
        public extern TupleElementNamesAttribute(string[] transformNames);

        public IList<string> TransformNames { get; }
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.External]
    [Bridge.NonScriptable]
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
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
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
    [Bridge.External]
    [Bridge.NonScriptable]
    internal sealed class FriendAccessAllowedAttribute : Attribute
    {
    }

    /// <summary>
    /// If a constructor for a value type takes an instance of this type as a parameter, any attribute applied to that constructor will instead be applied to the default (undeclarable) constructor.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor
    {
        private extern DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor();
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [AttributeUsage(AttributeTargets.Property)]
    [Bridge.NonScriptable]
    public class IndexerNameAttribute : Attribute
    {
        public extern IndexerNameAttribute(string indexerName);

        public extern string Value
        {
            get;
            private set;
        }
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Parameter | AttributeTargets.Field)]
    [Bridge.NonScriptable]
    public sealed class DecimalConstantAttribute : Attribute
    {
        public extern DecimalConstantAttribute(byte scale, byte sign, int hi, int mid, int low);

        [CLSCompliant(false)]
        public extern DecimalConstantAttribute(byte scale, byte sign, uint hi, uint mid, uint low);

        public extern decimal Value
        {
            get;
        }
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Assembly | AttributeTargets.Class | AttributeTargets.Method)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class ExtensionAttribute : Attribute
    {
        public extern ExtensionAttribute();
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter | AttributeTargets.ReturnValue)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class DynamicAttribute : Attribute
    {
        public extern DynamicAttribute();

        public extern DynamicAttribute(bool[] transformFlags);

        public extern List<bool> TransformFlags
        {
            get;
        }
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public class CallSite
    {
        public extern CallSiteBinder Binder
        {
            get;
        }

        public static extern CallSite Create(Type delegateType, CallSiteBinder binder);
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class CallSite<T> : CallSite where T : class
    {
        public extern T Update
        {
            get;
        }

        public T Target;

        public static extern CallSite<T> Create(CallSiteBinder binder);
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public abstract class CallSiteBinder
    {
        public static extern LabelTarget UpdateLabel
        {
            get;
        }

        public extern T BindDelegate<T>(CallSite<T> site, object[] args) where T : class;
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
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

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
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

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
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

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public interface IAsyncStateMachine
    {
        void MoveNext();

        void SetStateMachine(IAsyncStateMachine stateMachine);
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public interface INotifyCompletion
    {
        void OnCompleted(Action continuation);
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public interface ICriticalNotifyCompletion : INotifyCompletion
    {
        void UnsafeOnCompleted(Action continuation);
    }
}

namespace Microsoft.CSharp.RuntimeBinder
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
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

    [Bridge.External]
    [Bridge.NonScriptable]
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

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public sealed class CSharpArgumentInfo
    {
        public static extern CSharpArgumentInfo Create(CSharpArgumentInfoFlags flags, string name);
    }

    [Bridge.External]
    [Bridge.NonScriptable]
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
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public static class Interlocked
    {
        public static extern int CompareExchange(ref int location1, int value, int comparand);

        public static extern T CompareExchange<T>(ref T location1, T value, T comparand) where T : class;
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [EditorBrowsable(EditorBrowsableState.Never)]
    [Bridge.External]
    [Bridge.NonScriptable]
    public static class Monitor
    {
        public static extern void Enter(object obj);

        public static extern void Enter(object obj, ref bool b);

        public static extern void Exit(object obj);
    }
}