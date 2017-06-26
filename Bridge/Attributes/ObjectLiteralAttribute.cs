using System;

namespace Bridge
{
    [External]
    [AttributeUsage(AttributeTargets.Enum | AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Interface)]
    [NonScriptable]
    public sealed class ObjectLiteralAttribute : Attribute
    {
        public extern ObjectLiteralAttribute();

        public extern ObjectLiteralAttribute(ObjectInitializationMode initializationMode);

        public extern ObjectLiteralAttribute(ObjectCreateMode createMode);

        public extern ObjectLiteralAttribute(ObjectInitializationMode initializationMode, ObjectCreateMode createMode);
    }

    [External]
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

    [External]
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