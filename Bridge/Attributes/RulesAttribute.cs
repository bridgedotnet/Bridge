using System;

#if BRIDGE_COMPILER
namespace Bridge.Contract
#else
namespace Bridge
#endif
{
    /// <summary>
    /// Allow to control some aspects of generated code
    /// </summary>
#if BRIDGE_COMPILER
    public class CompilerRule
#else
    [External]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Property | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Constructor | AttributeTargets.Interface | AttributeTargets.Assembly, AllowMultiple = false)]
    [NonScriptable]
    public class RulesAttribute : Attribute
#endif
    {
        public
#if  BRIDGE_COMPILER
            LambdaRule?
#else
            LambdaRule
#endif
        Lambda
        {
            get;
            set;
        }

        public
#if BRIDGE_COMPILER
            BoxingRule?
#else
            BoxingRule
#endif
        Boxing
        {
            get;
            set;
        }

        public
#if BRIDGE_COMPILER
            ArrayIndexRule?
#else
            ArrayIndexRule
#endif
        ArrayIndex
        {
            get;
            set;
        }

        public
#if BRIDGE_COMPILER
            ArithmeticRule?
#else
            ArithmeticRule
#endif
        Arithmetic
        {
            get;
            set;
        }

        public
#if BRIDGE_COMPILER
            NumberCastingRule?
#else
            NumberCastingRule
#endif
        NumberCasting
        {
            get;
            set;
        }

        public
#if BRIDGE_COMPILER
            AnonymousTypeRule?
#else
            AnonymousTypeRule
#endif
        AnonymousType
        {
            get;
            set;
        }

#if BRIDGE_COMPILER
        public CompilerRuleLevel Level
        {
            get;
            set;
        }
#endif
    }

#if !BRIDGE_COMPILER
    [NonScriptable]
#endif
    public enum LambdaRule
    {
        Lifted = 0,
        Plain = 1
    }

#if !BRIDGE_COMPILER
    [NonScriptable]
#endif
    public enum BoxingRule
    {
        Enable = 0,
        Disable = 1
    }

#if !BRIDGE_COMPILER
    [NonScriptable]
#endif
    public enum ArrayIndexRule
    {
        Overflow = 0,
        Ignore = 1
    }

#if !BRIDGE_COMPILER
    [NonScriptable]
#endif
    public enum ArithmeticRule
    {
        CSharp = 0,
        Plain = 1
    }

#if !BRIDGE_COMPILER
    [NonScriptable]
#endif
    public enum NumberCastingRule
    {
        Enable = 0,
        None = 1
    }

#if !BRIDGE_COMPILER
    [NonScriptable]
#endif
    public enum AnonymousTypeRule
    {
        Type = 0,
        Plain = 1
    }
}