namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    [Bridge.IgnoreCast]
    [Bridge.Name("System.Object")]
    public sealed class Tuple<T1>
    {
        [Bridge.Template("{ Item1: {item1} }")]
        public extern Tuple(T1 item1);

        public extern T1 Item1
        {
            [Bridge.Template("Item1")]
            get;
        }

        [Bridge.Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Bridge.Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    [Bridge.IgnoreCast]
    [Bridge.Name("System.Object")]
    public sealed class Tuple<T1, T2>
    {
        [Bridge.Template("{ Item1: {item1}, Item2: {item2} }")]
        public extern Tuple(T1 item1, T2 item2);

        public extern T1 Item1
        {
            [Bridge.Template("Item1")]
            get;
        }

        public extern T2 Item2
        {
            [Bridge.Template("Item2")]
            get;
        }

        [Bridge.Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Bridge.Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    [Bridge.IgnoreCast]
    [Bridge.Name("System.Object")]
    public sealed class Tuple<T1, T2, T3>
    {
        [Bridge.Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3} }")]
        public extern Tuple(T1 item1, T2 item2, T3 item3);

        public extern T1 Item1
        {
            [Bridge.Template("Item1")]
            get;
        }

        public extern T2 Item2
        {
            [Bridge.Template("Item2")]
            get;
        }

        public extern T3 Item3
        {
            [Bridge.Template("Item3")]
            get;
        }

        [Bridge.Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Bridge.Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    [Bridge.IgnoreCast]
    [Bridge.Name("System.Object")]
    public sealed class Tuple<T1, T2, T3, T4>
    {
        [Bridge.Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4} }")]
        public extern Tuple(T1 item1, T2 item2, T3 item3, T4 item4);

        public extern T1 Item1
        {
            [Bridge.Template("Item1")]
            get;
        }

        public extern T2 Item2
        {
            [Bridge.Template("Item2")]
            get;
        }

        public extern T3 Item3
        {
            [Bridge.Template("Item3")]
            get;
        }

        public extern T4 Item4
        {
            [Bridge.Template("Item4")]
            get;
        }

        [Bridge.Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Bridge.Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    [Bridge.IgnoreCast]
    [Bridge.Name("System.Object")]
    public sealed class Tuple<T1, T2, T3, T4, T5>
    {
        [Bridge.Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5} }")]
        public extern Tuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5);

        public extern T1 Item1
        {
            [Bridge.Template("Item1")]
            get;
        }

        public extern T2 Item2
        {
            [Bridge.Template("Item2")]
            get;
        }

        public extern T3 Item3
        {
            [Bridge.Template("Item3")]
            get;
        }

        public extern T4 Item4
        {
            [Bridge.Template("Item4")]
            get;
        }

        public extern T5 Item5
        {
            [Bridge.Template("Item5")]
            get;
        }

        [Bridge.Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Bridge.Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    [Bridge.IgnoreCast]
    [Bridge.Name("System.Object")]
    public sealed class Tuple<T1, T2, T3, T4, T5, T6>
    {
        [Bridge.Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5}, Item6: {item6} }")]
        public extern Tuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6);

        public extern T1 Item1
        {
            [Bridge.Template("Item1")]
            get;
        }

        public extern T2 Item2
        {
            [Bridge.Template("Item2")]
            get;
        }

        public extern T3 Item3
        {
            [Bridge.Template("Item3")]
            get;
        }

        public extern T4 Item4
        {
            [Bridge.Template("Item4")]
            get;
        }

        public extern T5 Item5
        {
            [Bridge.Template("Item5")]
            get;
        }

        public extern T6 Item6
        {
            [Bridge.Template("Item6")]
            get;
        }

        [Bridge.Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Bridge.Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    [Bridge.IgnoreCast]
    [Bridge.Name("System.Object")]
    public sealed class Tuple<T1, T2, T3, T4, T5, T6, T7>
    {
        [Bridge.Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5}, Item6: {item6}, Item7: {item7} }")]
        public extern Tuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7);

        public extern T1 Item1
        {
            [Bridge.Template("Item1")]
            get;
        }

        public extern T2 Item2
        {
            [Bridge.Template("Item2")]
            get;
        }

        public extern T3 Item3
        {
            [Bridge.Template("Item3")]
            get;
        }

        public extern T4 Item4
        {
            [Bridge.Template("Item4")]
            get;
        }

        public extern T5 Item5
        {
            [Bridge.Template("Item5")]
            get;
        }

        public extern T6 Item6
        {
            [Bridge.Template("Item6")]
            get;
        }

        public extern T7 Item7
        {
            [Bridge.Template("Item7")]
            get;
        }

        [Bridge.Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Bridge.Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    [Bridge.IgnoreCast]
    [Bridge.Name("System.Object")]
    public sealed class Tuple<T1, T2, T3, T4, T5, T6, T7, TRest>
    {
        [Bridge.Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5}, Item6: {item6}, Item7: {item7}, rest: {rest} }")]
        public extern Tuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, TRest rest);

        public extern T1 Item1
        {
            [Bridge.Template("Item1")]
            get;
        }

        public extern T2 Item2
        {
            [Bridge.Template("Item2")]
            get;
        }

        public extern T3 Item3
        {
            [Bridge.Template("Item3")]
            get;
        }

        public extern T4 Item4
        {
            [Bridge.Template("Item4")]
            get;
        }

        public extern T5 Item5
        {
            [Bridge.Template("Item5")]
            get;
        }

        public extern T6 Item6
        {
            [Bridge.Template("Item6")]
            get;
        }

        public extern T7 Item7
        {
            [Bridge.Template("Item7")]
            get;
        }

        public extern TRest Rest
        {
            [Bridge.Template("rest")]
            get;
        }

        [Bridge.Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Bridge.Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    [Bridge.IgnoreCast]
    [Bridge.Name("System.Object")]
    public static class Tuple
    {
        [Bridge.Template("{ Item1: {item1} }")]
        public static extern Tuple<T1> Create<T1>(T1 item1);

        [Bridge.Template("{ Item1: {item1}, Item2: {item2} }")]
        public static extern Tuple<T1, T2> Create<T1, T2>(T1 item1, T2 item2);

        [Bridge.Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3} }")]
        public static extern Tuple<T1, T2, T3> Create<T1, T2, T3>(T1 item1, T2 item2, T3 item3);

        [Bridge.Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4} }")]
        public static extern Tuple<T1, T2, T3, T4> Create<T1, T2, T3, T4>(T1 item1, T2 item2, T3 item3, T4 item4);

        [Bridge.Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5} }")]
        public static extern Tuple<T1, T2, T3, T4, T5> Create<T1, T2, T3, T4, T5>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5);

        [Bridge.Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5}, Item6: {item6} }")]
        public static extern Tuple<T1, T2, T3, T4, T5, T6> Create<T1, T2, T3, T4, T5, T6>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6);

        [Bridge.Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5}, Item6: {item6}, Item7: {item7} }")]
        public static extern Tuple<T1, T2, T3, T4, T5, T6, T7> Create<T1, T2, T3, T4, T5, T6, T7>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7);

        [Bridge.Template("{ Item1: {item1}, Item2: {item2}, Item3: {item3}, Item4: {item4}, Item5: {item5}, Item6: {item6}, Item7: {item7}, rest: {rest} }")]
        public static extern Tuple<T1, T2, T3, T4, T5, T6, T7, TRest> Create<T1, T2, T3, T4, T5, T6, T7, TRest>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, TRest rest);
    }
}