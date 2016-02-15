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
    [Name("Bridge.Attribute")]
    public class Attribute : IBridgeClass
    {
        protected Attribute()
        {
        }
    }

    [External]
    [Flags]
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
    public class AttributeUsageAttribute : Attribute
    {
        public AttributeUsageAttribute(AttributeTargets validOn)
        {
        }

        internal extern AttributeUsageAttribute(AttributeTargets validOn, bool allowMultiple, bool inherited);

        /// <summary>Gets or sets a Boolean value indicating whether more than one instance of the indicated attribute can be specified for a single program element.</summary>
        /// <returns>true if more than one instance is allowed to be specified; otherwise, false. The default is false.</returns>
        public bool AllowMultiple
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
    public class FlagsAttribute : Attribute
    {
    }

    [AttributeUsage(AttributeTargets.Delegate | AttributeTargets.Interface | AttributeTargets.Event | AttributeTargets.Field | AttributeTargets.Property | AttributeTargets.Method | AttributeTargets.Constructor | AttributeTargets.Enum | AttributeTargets.Struct | AttributeTargets.Class, Inherited = false)]
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
    [AttributeUsage(AttributeTargets.Assembly | AttributeTargets.Class)]
    [External]
    public sealed class ComVisibleAttribute : Attribute
    {
        public ComVisibleAttribute(bool visibility)
        {
            this.Value = visibility;
        }

        public bool Value
        {
            get;
            private set;
        }
    }

    [AttributeUsageAttribute(AttributeTargets.Parameter)]
    [External]
    public sealed class OutAttribute : Attribute
    {
    }
}

namespace System.Runtime.InteropServices
{
    [ComVisible(true)]
    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    public sealed class GuidAttribute : Attribute
    {
        public GuidAttribute(string guid)
        {
            this.Value = guid;
        }

        public string Value
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
    public sealed class AssemblyTitleAttribute : Attribute
    {
        public AssemblyTitleAttribute(string title)
        {
            this.Title = title;
        }

        public string Title
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    public sealed class AssemblyDescriptionAttribute : Attribute
    {
        public AssemblyDescriptionAttribute(string description)
        {
            this.Description = description;
        }

        public string Description
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    public sealed class AssemblyConfigurationAttribute : Attribute
    {
        public AssemblyConfigurationAttribute(string configuration)
        {
            this.Configuration = configuration;
        }

        public string Configuration
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    public sealed class AssemblyCompanyAttribute : Attribute
    {
        public AssemblyCompanyAttribute(string company)
        {
            this.Company = company;
        }

        public string Company
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    public sealed class AssemblyProductAttribute : Attribute
    {
        public AssemblyProductAttribute(string product)
        {
            this.Product = product;
        }

        public string Product
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    public sealed class AssemblyCopyrightAttribute : Attribute
    {
        public AssemblyCopyrightAttribute(string copyright)
        {
            this.Copyright = copyright;
        }

        public string Copyright
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    public sealed class AssemblyTrademarkAttribute : Attribute
    {
        public AssemblyTrademarkAttribute(string trademark)
        {
            this.Trademark = trademark;
        }

        public string Trademark
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    public sealed class AssemblyCultureAttribute : Attribute
    {
        public AssemblyCultureAttribute(string culture)
        {
            this.Culture = culture;
        }

        public string Culture
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    public sealed class AssemblyVersionAttribute : Attribute
    {
        public AssemblyVersionAttribute(string version)
        {
            this.Version = version;
        }

        public string Version
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Assembly)]
    [External]
    public sealed class AssemblyFileVersionAttribute : Attribute
    {
        public AssemblyFileVersionAttribute(string version)
        {
            this.Version = version;
        }

        public string Version
        {
            get;
            private set;
        }
    }

    [External]
    public sealed class DefaultMemberAttribute : Attribute
    {
        public DefaultMemberAttribute(string memberName)
        {
            this.MemberName = memberName;
        }

        public string MemberName
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
    public sealed class TargetFrameworkAttribute : Attribute
    {
        public TargetFrameworkAttribute()
        {
        }

        public TargetFrameworkAttribute(string frameworkName)
        {
            this.FrameworkName = frameworkName;
        }

        public string FrameworkDisplayName
        {
            get;
            set;
        }

        public string FrameworkName
        {
            get;
            private set;
        }
    }
}

namespace System.Runtime.CompilerServices
{
    /// <summary>
    /// If a constructor for a value type takes an instance of this type as a parameter, any attribute applied to that constructor will instead be applied to the default (undeclarable) constructor.
    /// </summary>
    [EditorBrowsable(EditorBrowsableState.Never)]
    [External]
    public sealed class DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor
    {
        private DummyTypeUsedToAddAttributeToDefaultValueTypeConstructor()
        {
        }
    }

    [External]
    [AttributeUsage(AttributeTargets.Property)]
    public class IndexerNameAttribute : Attribute
    {
        public IndexerNameAttribute(string indexerName)
        {
            this.Value = indexerName;
        }

        public string Value
        {
            get;
            private set;
        }
    }

    [AttributeUsage(AttributeTargets.Parameter | AttributeTargets.Field)]
    public sealed class DecimalConstantAttribute : Attribute
    {
        public DecimalConstantAttribute(byte scale, byte sign, int hi, int mid, int low)
        {
        }

        public DecimalConstantAttribute(byte scale, byte sign, uint hi, uint mid, uint low)
        {
        }

        public decimal Value
        {
            get
            {
                return 0m;
            }
        }
    }

    [External]
    public static class RuntimeHelpers
    {
        public static extern void InitializeArray(Array array, RuntimeFieldHandle handle);

        public static int OffsetToStringData
        {
            get
            {
                return 0;
            }
        }

        public static extern int GetHashCode(object obj);
    }

    [AttributeUsage(AttributeTargets.Assembly | AttributeTargets.Class | AttributeTargets.Method)]
    [External]
    public sealed class ExtensionAttribute : Attribute
    {
        public ExtensionAttribute()
        {
        }
    }

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter | AttributeTargets.ReturnValue)]
    [External]
    public sealed class DynamicAttribute : Attribute
    {
        public DynamicAttribute()
        {
        }

        public DynamicAttribute(bool[] transformFlags)
        {
        }

        public List<bool> TransformFlags
        {
            get
            {
                return null;
            }
        }
    }

    [External]
    public class CallSite
    {
        public CallSiteBinder Binder
        {
            get
            {
                return null;
            }
        }

        public static extern CallSite Create(Type delegateType, CallSiteBinder binder);
    }

    [External]
    public sealed class CallSite<T> : CallSite where T : class
    {
        public T Update
        {
            get
            {
                return null;
            }
        }

        public T Target;

        public static extern CallSite<T> Create(CallSiteBinder binder);
    }

    [External]
    public abstract class CallSiteBinder
    {
        public static LabelTarget UpdateLabel
        {
            get
            {
                return null;
            }
        }

        public extern T BindDelegate<T>(CallSite<T> site, object[] args) where T : class;
    }

    [External]
    public struct AsyncVoidMethodBuilder
    {
        public static AsyncVoidMethodBuilder Create()
        {
            return default(AsyncVoidMethodBuilder);
        }

        public void Start<TStateMachine>(ref TStateMachine stateMachine) where TStateMachine : IAsyncStateMachine
        {
        }

        public void SetStateMachine(IAsyncStateMachine stateMachine)
        {
        }

        public void AwaitOnCompleted<TAwaiter, TStateMachine>(ref TAwaiter awaiter, ref TStateMachine stateMachine)
            where TAwaiter : INotifyCompletion
            where TStateMachine : IAsyncStateMachine
        {
        }

        public void AwaitUnsafeOnCompleted<TAwaiter, TStateMachine>(ref TAwaiter awaiter, ref TStateMachine stateMachine)
            where TAwaiter : ICriticalNotifyCompletion
            where TStateMachine : IAsyncStateMachine
        {
        }

        public void SetResult()
        {
        }

        public void SetException(Exception exception)
        {
        }
    }

    [External]
    public struct AsyncTaskMethodBuilder
    {
        public Task Task
        {
            get
            {
                return null;
            }
        }

        public static AsyncTaskMethodBuilder Create()
        {
            return default(AsyncTaskMethodBuilder);
        }

        public void Start<TStateMachine>(ref TStateMachine stateMachine) where TStateMachine : IAsyncStateMachine
        {
        }

        public void SetStateMachine(IAsyncStateMachine stateMachine)
        {
        }

        public void AwaitOnCompleted<TAwaiter, TStateMachine>(ref TAwaiter awaiter, ref TStateMachine stateMachine)
            where TAwaiter : INotifyCompletion
            where TStateMachine : IAsyncStateMachine
        {
        }

        public void AwaitUnsafeOnCompleted<TAwaiter, TStateMachine>(ref TAwaiter awaiter, ref TStateMachine stateMachine)
            where TAwaiter : ICriticalNotifyCompletion
            where TStateMachine : IAsyncStateMachine
        {
        }

        public void SetResult()
        {
        }

        public void SetException(Exception exception)
        {
        }
    }

    [External]
    public struct AsyncTaskMethodBuilder<TResult>
    {
        public Task<TResult> Task
        {
            get
            {
                return null;
            }
        }

        public static AsyncTaskMethodBuilder<TResult> Create()
        {
            return default(AsyncTaskMethodBuilder<TResult>);
        }

        public void Start<TStateMachine>(ref TStateMachine stateMachine) where TStateMachine : IAsyncStateMachine
        {
        }

        public void SetStateMachine(IAsyncStateMachine stateMachine)
        {
        }

        public void AwaitOnCompleted<TAwaiter, TStateMachine>(ref TAwaiter awaiter, ref TStateMachine stateMachine)
            where TAwaiter : INotifyCompletion
            where TStateMachine : IAsyncStateMachine
        {
        }

        public void AwaitUnsafeOnCompleted<TAwaiter, TStateMachine>(ref TAwaiter awaiter, ref TStateMachine stateMachine)
            where TAwaiter : ICriticalNotifyCompletion
            where TStateMachine : IAsyncStateMachine
        {
        }

        public void SetResult(TResult result)
        {
        }

        public void SetException(Exception exception)
        {
        }
    }

    [External]
    public interface IAsyncStateMachine
    {
        void MoveNext();

        void SetStateMachine(IAsyncStateMachine stateMachine);
    }

    [External]
    public interface INotifyCompletion
    {
        void OnCompleted(Action continuation);
    }

    [External]
    public interface ICriticalNotifyCompletion : INotifyCompletion
    {
        void UnsafeOnCompleted(Action continuation);
    }
}

namespace Microsoft.CSharp.RuntimeBinder
{
    [External]
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
    public sealed class CSharpArgumentInfo
    {
        public static extern CSharpArgumentInfo Create(CSharpArgumentInfoFlags flags, string name);
    }

    [External]
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

namespace System.Linq.Expressions
{
    [External]
    public sealed class LabelTarget
    {
        internal LabelTarget()
        {
        }

        public string Name
        {
            get
            {
                return null;
            }
        }

        public Type Type
        {
            get
            {
                return null;
            }
        }
    }

    [External]
    public enum ExpressionType
    {
        Add,
        AddChecked,
        And,
        AndAlso,
        ArrayLength,
        ArrayIndex,
        Call,
        Coalesce,
        Conditional,
        Constant,
        Convert,
        ConvertChecked,
        Divide,
        Equal,
        ExclusiveOr,
        GreaterThan,
        GreaterThanOrEqual,
        Invoke,
        Lambda,
        LeftShift,
        LessThan,
        LessThanOrEqual,
        ListInit,
        MemberAccess,
        MemberInit,
        Modulo,
        Multiply,
        MultiplyChecked,
        Negate,
        UnaryPlus,
        NegateChecked,
        New,
        NewArrayInit,
        NewArrayBounds,
        Not,
        NotEqual,
        Or,
        OrElse,
        Parameter,
        Power,
        Quote,
        RightShift,
        Subtract,
        SubtractChecked,
        TypeAs,
        TypeIs,
        Assign,
        Block,
        DebugInfo,
        Decrement,
        Dynamic,
        Default,
        Extension,
        Goto,
        Increment,
        Index,
        Label,
        RuntimeVariables,
        Loop,
        Switch,
        Throw,
        Try,
        Unbox,
        AddAssign,
        AndAssign,
        DivideAssign,
        ExclusiveOrAssign,
        LeftShiftAssign,
        ModuloAssign,
        MultiplyAssign,
        OrAssign,
        PowerAssign,
        RightShiftAssign,
        SubtractAssign,
        AddAssignChecked,
        MultiplyAssignChecked,
        SubtractAssignChecked,
        PreIncrementAssign,
        PreDecrementAssign,
        PostIncrementAssign,
        PostDecrementAssign,
        TypeEqual,
        OnesComplement,
        IsTrue,
        IsFalse,
    }
}

namespace System.Diagnostics
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Constructor | AttributeTargets.Method)]
    public sealed class DebuggerStepThroughAttribute : Attribute
    {
    }
}

namespace System.ComponentModel
{
    /// <summary>
    /// This attribute marks a field, property, event or method as
    /// "browsable", i.e. present in the type descriptor associated with
    /// the type.
    /// </summary>
    [EditorBrowsable(EditorBrowsableState.Never)]
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Property | AttributeTargets.Event | AttributeTargets.Method, AllowMultiple = false)]
    [External]
    public sealed class BrowsableAttribute : Attribute
    {
    }

    [EditorBrowsable(EditorBrowsableState.Never)]
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum | AttributeTargets.Constructor | AttributeTargets.Method | AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Event | AttributeTargets.Delegate | AttributeTargets.Interface)]
    [External]
    public sealed class EditorBrowsableAttribute : Attribute
    {
        public extern EditorBrowsableAttribute(EditorBrowsableState state);

        public extern EditorBrowsableState State
        {
            get;
        }
    }

    [EditorBrowsable(EditorBrowsableState.Never)]
    [External]
    public enum EditorBrowsableState
    {
        Always = 0,
        Never = 1,
        Advanced = 2
    }
}

namespace System.Threading
{
    [EditorBrowsable(EditorBrowsableState.Never)]
    [External]
    public static class Interlocked
    {
        public static extern int CompareExchange(ref int location1, int value, int comparand);

        public static extern T CompareExchange<T>(ref T location1, T value, T comparand) where T : class;
    }

    [EditorBrowsable(EditorBrowsableState.Never)]
    [External]
    public static class Monitor
    {
        public static extern void Enter(object obj);

        public static extern void Enter(object obj, ref bool b);

        public static extern void Exit(object obj);
    }

    [EditorBrowsable(EditorBrowsableState.Never)]
    [External]
    public class Thread
    {
        public extern int ManagedThreadId
        {
            get;
        }

        public static extern Thread CurrentThread
        {
            get;
        }
    }
}