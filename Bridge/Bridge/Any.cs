using System;

namespace Bridge
{
    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    [Obsolete("Please use Union class")]
    public class Any<T1, T2>
    {
        protected extern Any();

        public static extern implicit operator Any<T1, T2>(T1 t);

        public static extern implicit operator Any<T1, T2>(T2 t);

        public static extern explicit operator T1(Any<T1, T2> value);

        public static extern explicit operator T2(Any<T1, T2> value);
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    [Obsolete("Please use Union class")]
    public class Any<T1, T2, T3>
    {
        protected extern Any();

        public static extern implicit operator Any<T1, T2, T3>(T1 t);

        public static extern implicit operator Any<T1, T2, T3>(T2 t);

        public static extern implicit operator Any<T1, T2, T3>(T3 t);

        public static extern explicit operator T1(Any<T1, T2, T3> value);

        public static extern explicit operator T2(Any<T1, T2, T3> value);

        public static extern explicit operator T3(Any<T1, T2, T3> value);
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    [Obsolete("Please use Union class")]
    public class Any<T1, T2, T3, T4>
    {
        protected extern Any();

        public static extern implicit operator Any<T1, T2, T3, T4>(T1 t);

        public static extern implicit operator Any<T1, T2, T3, T4>(T2 t);

        public static extern implicit operator Any<T1, T2, T3, T4>(T3 t);

        public static extern implicit operator Any<T1, T2, T3, T4>(T4 t);

        public static extern explicit operator T1(Any<T1, T2, T3, T4> value);

        public static extern explicit operator T2(Any<T1, T2, T3, T4> value);

        public static extern explicit operator T3(Any<T1, T2, T3, T4> value);

        public static extern explicit operator T4(Any<T1, T2, T3, T4> value);
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    [Obsolete("Please use Union class")]
    public class Any<T1, T2, T3, T4, T5>
    {
        protected extern Any();

        public static extern implicit operator Any<T1, T2, T3, T4, T5>(T1 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5>(T2 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5>(T3 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5>(T4 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5>(T5 t);

        public static extern explicit operator T1(Any<T1, T2, T3, T4, T5> value);

        public static extern explicit operator T2(Any<T1, T2, T3, T4, T5> value);

        public static extern explicit operator T3(Any<T1, T2, T3, T4, T5> value);

        public static extern explicit operator T4(Any<T1, T2, T3, T4, T5> value);

        public static extern explicit operator T5(Any<T1, T2, T3, T4, T5> value);
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    [Obsolete("Please use Union class")]
    public class Any<T1, T2, T3, T4, T5, T6>
    {
        protected extern Any();

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6>(T1 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6>(T2 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6>(T3 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6>(T4 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6>(T5 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6>(T6 t);

        public static extern explicit operator T1(Any<T1, T2, T3, T4, T5, T6> value);

        public static extern explicit operator T2(Any<T1, T2, T3, T4, T5, T6> value);

        public static extern explicit operator T3(Any<T1, T2, T3, T4, T5, T6> value);

        public static extern explicit operator T4(Any<T1, T2, T3, T4, T5, T6> value);

        public static extern explicit operator T5(Any<T1, T2, T3, T4, T5, T6> value);

        public static extern explicit operator T6(Any<T1, T2, T3, T4, T5, T6> value);
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    [Obsolete("Please use Union class")]
    public class Any<T1, T2, T3, T4, T5, T6, T7>
    {
        protected extern Any();

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7>(T1 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7>(T2 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7>(T3 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7>(T4 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7>(T5 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7>(T6 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7>(T7 t);

        public static extern explicit operator T1(Any<T1, T2, T3, T4, T5, T6, T7> value);

        public static extern explicit operator T2(Any<T1, T2, T3, T4, T5, T6, T7> value);

        public static extern explicit operator T3(Any<T1, T2, T3, T4, T5, T6, T7> value);

        public static extern explicit operator T4(Any<T1, T2, T3, T4, T5, T6, T7> value);

        public static extern explicit operator T5(Any<T1, T2, T3, T4, T5, T6, T7> value);

        public static extern explicit operator T6(Any<T1, T2, T3, T4, T5, T6, T7> value);

        public static extern explicit operator T7(Any<T1, T2, T3, T4, T5, T6, T7> value);
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    [Obsolete("Please use Union class")]
    public class Any<T1, T2, T3, T4, T5, T6, T7, T8>
    {
        protected extern Any();

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7, T8>(T1 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7, T8>(T2 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7, T8>(T3 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7, T8>(T4 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7, T8>(T5 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7, T8>(T6 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7, T8>(T7 t);

        public static extern implicit operator Any<T1, T2, T3, T4, T5, T6, T7, T8>(T8 t);

        public static extern explicit operator T1(Any<T1, T2, T3, T4, T5, T6, T7, T8> value);

        public static extern explicit operator T2(Any<T1, T2, T3, T4, T5, T6, T7, T8> value);

        public static extern explicit operator T3(Any<T1, T2, T3, T4, T5, T6, T7, T8> value);

        public static extern explicit operator T4(Any<T1, T2, T3, T4, T5, T6, T7, T8> value);

        public static extern explicit operator T5(Any<T1, T2, T3, T4, T5, T6, T7, T8> value);

        public static extern explicit operator T6(Any<T1, T2, T3, T4, T5, T6, T7, T8> value);

        public static extern explicit operator T7(Any<T1, T2, T3, T4, T5, T6, T7, T8> value);

        public static extern explicit operator T8(Any<T1, T2, T3, T4, T5, T6, T7, T8> value);
    }
}