using System;

namespace Bridge
{
    [NonScriptable]
    [AttributeUsage(AttributeTargets.Enum | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Interface)]
    public sealed class ObjectLiteralAttribute : Attribute
    {
        public ObjectLiteralAttribute()
        {
        }

        public ObjectLiteralAttribute(ObjectInitializationMode initializationMode)
        {
        }

        public ObjectLiteralAttribute(ObjectCreateMode createMode)
        {
        }

        public ObjectLiteralAttribute(ObjectInitializationMode initializationMode, ObjectCreateMode createMode)
        {
        }
    }

    [NonScriptable]
    [Enum(Bridge.Emit.Value)]
    public enum ObjectInitializationMode
    {
        /// <summary>
        /// Emit default values for all
        /// </summary>
        DefaultValue = 2,

        /// <summary>
        /// Emit only values that have been explicitly initialized
        /// </summary>
        Initializer = 1,

        /// <summary>
        /// Ignore default value. Emits an empty object literal
        /// </summary>
        Ignore = 0
    }

    [NonScriptable]
    [Enum(Bridge.Emit.Value)]
    public enum ObjectCreateMode
    {
        /// <summary>
        /// Create instance using constructor
        /// </summary>
        Constructor = 1,

        /// <summary>
        /// Create instance using plain object ({ } syntax)
        /// </summary>
        Plain = 0
    }
}