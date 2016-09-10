using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Enum | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Interface)]
    [NonScriptable]
    public sealed class ObjectLiteralAttribute : Attribute
    {
        public ObjectLiteralAttribute()
        {
        }

        [Obsolete]
        public ObjectLiteralAttribute(DefaultValueMode mode)
        {
        }

        public ObjectLiteralAttribute(ObjectInitializationMode initializationMode)
        {
        }

        public ObjectLiteralAttribute(ObjectInitializationMode initializationMode, ObjectCreateMode createMode)
        {
        }
    }

    [External]
    [Enum(Bridge.Emit.Value)]
    [NonScriptable]
    [Obsolete("Use ObjectInitializationMode")]
    public enum DefaultValueMode
    {
        Ignore = 0,
        Initializer = 1,
        DefaultValue = 2
    }

    [External]
    [Enum(Bridge.Emit.Value)]
    [NonScriptable]
    public enum ObjectInitializationMode
    {
        /// <summary>
        /// Emit default values for all
        /// </summary>
        DefaultValue = 0,

        /// <summary>
        /// Emit only values that have been explicitly initialized
        /// </summary>
        Initializer = 1,

        /// <summary>
        /// Ignore default value. Emits an empty object literal
        /// </summary>
        Ignore = 2
    }

    [External]
    [Enum(Bridge.Emit.Value)]
    [NonScriptable]
    public enum ObjectCreateMode
    {
        /// <summary>
        /// Create instance using constructor
        /// </summary>
        Constructor = 0,

        /// <summary>
        /// Create instance using plain object ({ } syntax)
        /// </summary>
        Plain = 1
    }
}