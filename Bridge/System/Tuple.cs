using Bridge;

namespace System
{
    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public sealed class Tuple<T1>
    {
        [Template("{ Item1: {item1} }")]
        public extern Tuple(T1 item1);

        public extern T1 Item1
        {
            [Template("Item1")]
            get;
        }

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public sealed class Tuple<T1, T2>
    {
        [Template("{ Item1: {item1}, Item2: {item2} }")]
        public extern Tuple(T1 item1, T2 item2);

        public extern T1 Item1
        {
            [Template("Item1")]
            get;
        }

        public extern T2 Item2
        {
            [Template("Item2")]
            get;
        }

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public sealed class Tuple<T1, T2, T3>
    {
        [Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3} }")]
        public extern Tuple(T1 item1, T2 item2, T3 item3);

        public extern T1 Item1
        {
            [Template("Item1")]
            get;
        }

        public extern T2 Item2
        {
            [Template("Item2")]
            get;
        }

        public extern T3 Item3
        {
            [Template("Item3")]
            get;
        }

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public sealed class Tuple<T1, T2, T3, T4>
    {
        [Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4} }")]
        public extern Tuple(T1 item1, T2 item2, T3 item3, T4 item4);

        public extern T1 Item1
        {
            [Template("Item1")]
            get;
        }

        public extern T2 Item2
        {
            [Template("Item2")]
            get;
        }

        public extern T3 Item3
        {
            [Template("Item3")]
            get;
        }

        public extern T4 Item4
        {
            [Template("Item4")]
            get;
        }

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public sealed class Tuple<T1, T2, T3, T4, T5>
    {
        [Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5} }")]
        public extern Tuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5);

        public extern T1 Item1
        {
            [Template("Item1")]
            get;
        }

        public extern T2 Item2
        {
            [Template("Item2")]
            get;
        }

        public extern T3 Item3
        {
            [Template("Item3")]
            get;
        }

        public extern T4 Item4
        {
            [Template("Item4")]
            get;
        }

        public extern T5 Item5
        {
            [Template("Item5")]
            get;
        }

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public sealed class Tuple<T1, T2, T3, T4, T5, T6>
    {
        [Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5}, Item6: {item6} }")]
        public extern Tuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6);

        public extern T1 Item1
        {
            [Template("Item1")]
            get;
        }

        public extern T2 Item2
        {
            [Template("Item2")]
            get;
        }

        public extern T3 Item3
        {
            [Template("Item3")]
            get;
        }

        public extern T4 Item4
        {
            [Template("Item4")]
            get;
        }

        public extern T5 Item5
        {
            [Template("Item5")]
            get;
        }

        public extern T6 Item6
        {
            [Template("Item6")]
            get;
        }

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public sealed class Tuple<T1, T2, T3, T4, T5, T6, T7>
    {
        [Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5}, Item6: {item6}, Item7: {item7} }")]
        public extern Tuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7);

        public extern T1 Item1
        {
            [Template("Item1")]
            get;
        }

        public extern T2 Item2
        {
            [Template("Item2")]
            get;
        }

        public extern T3 Item3
        {
            [Template("Item3")]
            get;
        }

        public extern T4 Item4
        {
            [Template("Item4")]
            get;
        }

        public extern T5 Item5
        {
            [Template("Item5")]
            get;
        }

        public extern T6 Item6
        {
            [Template("Item6")]
            get;
        }

        public extern T7 Item7
        {
            [Template("Item7")]
            get;
        }

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public sealed class Tuple<T1, T2, T3, T4, T5, T6, T7, TRest>
    {
        [Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5}, Item6: {item6}, Item7: {item7}, Rest: {rest} }")]
        public extern Tuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, TRest rest);

        public extern T1 Item1
        {
            [Template("Item1")]
            get;
        }

        public extern T2 Item2
        {
            [Template("Item2")]
            get;
        }

        public extern T3 Item3
        {
            [Template("Item3")]
            get;
        }

        public extern T4 Item4
        {
            [Template("Item4")]
            get;
        }

        public extern T5 Item5
        {
            [Template("Item5")]
            get;
        }

        public extern T6 Item6
        {
            [Template("Item6")]
            get;
        }

        public extern T7 Item7
        {
            [Template("Item7")]
            get;
        }

        public extern TRest Rest
        {
            [Template("Rest")]
            get;
        }

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public static class Tuple
    {
        [Template("{ Item1: {item1} }")]
        public static extern Tuple<T1> Create<T1>(T1 item1);

        [Template("{ Item1: {item1}, Item2: {item2} }")]
        public static extern Tuple<T1, T2> Create<T1, T2>(T1 item1, T2 item2);

        [Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3} }")]
        public static extern Tuple<T1, T2, T3> Create<T1, T2, T3>(T1 item1, T2 item2, T3 item3);

        [Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4} }")]
        public static extern Tuple<T1, T2, T3, T4> Create<T1, T2, T3, T4>(T1 item1, T2 item2, T3 item3, T4 item4);

        [Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5} }")]
        public static extern Tuple<T1, T2, T3, T4, T5> Create<T1, T2, T3, T4, T5>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5);

        [Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5}, Item6: {item6} }")]
        public static extern Tuple<T1, T2, T3, T4, T5, T6> Create<T1, T2, T3, T4, T5, T6>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6);

        [Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5}, Item6: {item6}, Item7: {item7} }")]
        public static extern Tuple<T1, T2, T3, T4, T5, T6, T7> Create<T1, T2, T3, T4, T5, T6, T7>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7);

        [Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5}, Item6: {item6}, Item7: {item7}, Rest: {rest} }")]
        public static extern Tuple<T1, T2, T3, T4, T5, T6, T7, TRest> Create<T1, T2, T3, T4, T5, T6, T7, TRest>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, TRest rest);
    }
}