using System;

namespace Bridge.Contract
{
    /// <summary>
    /// This enum defines the possibilities for default member reflectability.
    /// </summary>
    [Flags]
    public enum MemberAccessibility
    {
        None = 0x0,

        Public = 0x1,
        Private = 0x2,
        Protected = 0x4,
        Internal = 0x8,

        Constructor = 0x10,
        Event = 0x20,
        Field = 0x40,
        Method = 0x80,
        Property = 0x100,

        Instance = 0x200,
        Static = 0x400,

        All = 0xFFF,

        PublicInstanceConstructor = Public | Instance | Constructor,
        PublicStaticConstructor = Public | Static | Constructor,
        PrivateInstanceConstructor = Private | Instance | Constructor,
        PrivateStaticConstructor = Private | Static | Constructor,
        ProtectedInstanceConstructor = Protected | Instance | Constructor,
        ProtectedStaticConstructor = Protected | Static | Constructor,
        InternalInstanceConstructor = Internal | Instance | Constructor,
        InternalStaticConstructor = Internal | Static | Constructor,

        InstanceConstructor = Instance | Constructor,
        StaticConstructor = Static | Constructor,

        PublicConstructor = Public | Constructor,
        PrivateConstructor = Private | Constructor,
        ProtectedConstructor = Protected | Constructor,
        InternalConstructor = Internal | Constructor,


        PublicInstanceEvent = Public | Instance | Event,
        PublicStaticEvent = Public | Static | Event,
        PrivateInstanceEvent = Private | Instance | Event,
        PrivateStaticEvent = Private | Static | Event,
        ProtectedInstanceEvent = Protected | Instance | Event,
        ProtectedStaticEvent = Protected | Static | Event,
        InternalInstanceEvent = Internal | Instance | Event,
        InternalStaticEvent = Internal | Static | Event,

        InstanceEvent = Instance | Event,
        StaticEvent = Static | Event,

        PublicEvent = Public | Event,
        PrivateEvent = Private | Event,
        ProtectedEvent = Protected | Event,
        InternalEvent = Internal | Event,

        PublicInstanceField = Public | Instance | Field,
        PublicStaticField = Public | Static | Field,
        PrivateInstanceField = Private | Instance | Field,
        PrivateStaticField = Private | Static | Field,
        ProtectedInstanceField = Protected | Instance | Field,
        ProtectedStaticField = Protected | Static | Field,
        InternalInstanceField = Internal | Instance | Field,
        InternalStaticField = Internal | Static | Field,

        InstanceField = Instance | Field,
        StaticField = Static | Field,

        PublicField = Public | Field,
        PrivateField = Private | Field,
        ProtectedField = Protected | Field,
        InternalField = Internal | Field,

        PublicInstanceMethod = Public | Instance | Method,
        PublicStaticMethod = Public | Static | Method,
        PrivateInstanceMethod = Private | Instance | Method,
        PrivateStaticMethod = Private | Static | Method,
        ProtectedInstanceMethod = Protected | Instance | Method,
        ProtectedStaticMethod = Protected | Static | Method,
        InternalInstanceMethod = Internal | Instance | Method,
        InternalStaticMethod = Internal | Static | Method,

        InstanceMethod = Instance | Method,
        StaticMethod = Static | Method,

        PublicMethod = Public | Method,
        PrivateMethod = Private | Method,
        ProtectedMethod = Protected | Method,
        InternalMethod = Internal | Method,

        PublicInstanceProperty = Public | Instance | Property,
        PublicStaticProperty = Public | Static | Property,
        PrivateInstanceProperty = Private | Instance | Property,
        PrivateStaticProperty = Private | Static | Property,
        ProtectedInstanceProperty = Protected | Instance | Property,
        ProtectedStaticProperty = Protected | Static | Property,
        InternalInstanceProperty = Internal | Instance | Property,
        InternalStaticProperty = Internal | Static | Property,

        InstanceProperty = Instance | Property,
        StaticProperty = Static | Property,

        PublicProperty = Public | Property,
        PrivateProperty = Private | Property,
        ProtectedProperty = Protected | Property,
        InternalProperty = Internal | Property,

        // backward compatibility
        PublicAndProtected = Public | Protected,
        NonPrivate = Public | Protected | Internal
    }

    [Flags]
    public enum TypeAccessibility
    {
        None = 1,

        Public = 2,

        NonPrivate = 4,

        Anonymous = 8,

        NonAnonymous = 16,

        All = 32
    }
}