using Bridge;

namespace System
{
    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    public sealed class Tuple<T1>
    {
        [Template("{ item1: {item1} }")]
        public Tuple(T1 item1)
        {
        }

        public T1 Item1
        {
            [Template("item1")]
            get
            {
                return default(T1);
            }
        }
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    public sealed class Tuple<T1, T2>
    {
        [Template("{ item1: {item1}, item2: {item2} }")]
        public Tuple(T1 item1, T2 item2)
        {
        }

        public T1 Item1
        {
            [Template("item1")]
            get
            {
                return default(T1);
            }
        }

        public T2 Item2
        {
            [Template("item2")]
            get
            {
                return default(T2);
            }
        }
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    public sealed class Tuple<T1, T2, T3>
    {
        [Template("{ item1: {item1}, item2: {item2}, item3: {item3} }")]
        public Tuple(T1 item1, T2 item2, T3 item3)
        {
        }

        public T1 Item1
        {
            [Template("item1")]
            get
            {
                return default(T1);
            }
        }

        public T2 Item2
        {
            [Template("item2")]
            get
            {
                return default(T2);
            }
        }

        public T3 Item3
        {
            [Template("item3")]
            get
            {
                return default(T3);
            }
        }
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    public sealed class Tuple<T1, T2, T3, T4>
    {
        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4} }")]
        public Tuple(T1 item1, T2 item2, T3 item3, T4 item4)
        {
        }

        public T1 Item1
        {
            [Template("item1")]
            get
            {
                return default(T1);
            }
        }

        public T2 Item2
        {
            [Template("item2")]
            get
            {
                return default(T2);
            }
        }

        public T3 Item3
        {
            [Template("item3")]
            get
            {
                return default(T3);
            }
        }

        public T4 Item4
        {
            [Template("item4")]
            get
            {
                return default(T4);
            }
        }
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    public sealed class Tuple<T1, T2, T3, T4, T5>
    {
        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5} }")]
        public Tuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5)
        {
        }

        public T1 Item1
        {
            [Template("item1")]
            get
            {
                return default(T1);
            }
        }

        public T2 Item2
        {
            [Template("item2")]
            get
            {
                return default(T2);
            }
        }

        public T3 Item3
        {
            [Template("item3")]
            get
            {
                return default(T3);
            }
        }

        public T4 Item4
        {
            [Template("item4")]
            get
            {
                return default(T4);
            }
        }

        public T5 Item5
        {
            [Template("item5")]
            get
            {
                return default(T5);
            }
        }
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    public sealed class Tuple<T1, T2, T3, T4, T5, T6>
    {
        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5}, item6: {item6} }")]
        public Tuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6)
        {
        }

        public T1 Item1
        {
            [Template("item1")]
            get
            {
                return default(T1);
            }
        }

        public T2 Item2
        {
            [Template("item2")]
            get
            {
                return default(T2);
            }
        }

        public T3 Item3
        {
            [Template("item3")]
            get
            {
                return default(T3);
            }
        }

        public T4 Item4
        {
            [Template("item4")]
            get
            {
                return default(T4);
            }
        }

        public T5 Item5
        {
            [Template("item5")]
            get
            {
                return default(T5);
            }
        }

        public T6 Item6
        {
            [Template("item6")]
            get
            {
                return default(T6);
            }
        }
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    public sealed class Tuple<T1, T2, T3, T4, T5, T6, T7>
    {
        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5}, item6: {item6}, item7: {item7} }")]
        public Tuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7)
        {
        }

        public T1 Item1
        {
            [Template("item1")]
            get
            {
                return default(T1);
            }
        }

        public T2 Item2
        {
            [Template("item2")]
            get
            {
                return default(T2);
            }
        }

        public T3 Item3
        {
            [Template("item3")]
            get
            {
                return default(T3);
            }
        }

        public T4 Item4
        {
            [Template("item4")]
            get
            {
                return default(T4);
            }
        }

        public T5 Item5
        {
            [Template("item5")]
            get
            {
                return default(T5);
            }
        }

        public T6 Item6
        {
            [Template("item6")]
            get
            {
                return default(T6);
            }
        }

        public T7 Item7
        {
            [Template("item7")]
            get
            {
                return default(T7);
            }
        }
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    public sealed class Tuple<T1, T2, T3, T4, T5, T6, T7, TRest>
    {
        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5}, item6: {item6}, item7: {item7}, rest: {rest} }")]
        public Tuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, TRest rest)
        {
        }

        public T1 Item1
        {
            [Template("item1")]
            get
            {
                return default(T1);
            }
        }

        public T2 Item2
        {
            [Template("item2")]
            get
            {
                return default(T2);
            }
        }

        public T3 Item3
        {
            [Template("item3")]
            get
            {
                return default(T3);
            }
        }

        public T4 Item4
        {
            [Template("item4")]
            get
            {
                return default(T4);
            }
        }

        public T5 Item5
        {
            [Template("item5")]
            get
            {
                return default(T5);
            }
        }

        public T6 Item6
        {
            [Template("item6")]
            get
            {
                return default(T6);
            }
        }

        public T7 Item7
        {
            [Template("item7")]
            get
            {
                return default(T7);
            }
        }

        public TRest Rest
        {
            [Template("rest")]
            get
            {
                return default(TRest);
            }
        }
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("Object")]
    public static class Tuple
    {
        [Template("{ item1: {item1} }")]
        public static Tuple<T1> Create<T1>(T1 item1)
        {
            return null;
        }

        [Template("{ item1: {item1}, item2: {item2} }")]
        public static Tuple<T1, T2> Create<T1, T2>(T1 item1, T2 item2)
        {
            return null;
        }

        [Template("{ item1: {item1}, item2: {item2}, item3: {item3} }")]
        public static Tuple<T1, T2, T3> Create<T1, T2, T3>(T1 item1, T2 item2, T3 item3)
        {
            return null;
        }

        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4} }")]
        public static Tuple<T1, T2, T3, T4> Create<T1, T2, T3, T4>(T1 item1, T2 item2, T3 item3, T4 item4)
        {
            return null;
        }

        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5} }")]
        public static Tuple<T1, T2, T3, T4, T5> Create<T1, T2, T3, T4, T5>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5)
        {
            return null;
        }

        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5}, item6: {item6} }")]
        public static Tuple<T1, T2, T3, T4, T5, T6> Create<T1, T2, T3, T4, T5, T6>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6)
        {
            return null;
        }

        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5}, item6: {item6}, item7: {item7} }")]
        public static Tuple<T1, T2, T3, T4, T5, T6, T7> Create<T1, T2, T3, T4, T5, T6, T7>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7)
        {
            return null;
        }

        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5}, item6: {item6}, item7: {item7}, rest: {rest} }")]
        public static Tuple<T1, T2, T3, T4, T5, T6, T7, TRest> Create<T1, T2, T3, T4, T5, T6, T7, TRest>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, TRest rest)
        {
            return null;
        }
    }
}
