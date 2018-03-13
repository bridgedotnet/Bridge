using Bridge;

namespace System
{
    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public struct ValueTuple<T1>
    {
        [Template("{ item1: {item1} }")]
        public extern ValueTuple(T1 item1);

        [Name("item1")]
        public T1 Item1;

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();

        [Template("{this}")]
        public extern Tuple<T1> ToTuple();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public struct ValueTuple<T1, T2>
    {
        [Template("{ item1: {item1}, item2: {item2} }")]
        public extern ValueTuple(T1 item1, T2 item2);

        [Name("item1")]
        public T1 Item1;

        [Name("item2")]
        public T2 Item2;

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();

        [Template("{this}")]
        public extern Tuple<T1, T2> ToTuple();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public struct ValueTuple<T1, T2, T3>
    {
        [Template("{ item1: {item1}, item2: {item2}, item3: {item3} }")]
        public extern ValueTuple(T1 item1, T2 item2, T3 item3);

        [Name("item1")]
        public T1 Item1;

        [Name("item2")]
        public T2 Item2;

        [Name("item3")]
        public T3 Item3;

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();

        [Template("{this}")]
        public extern Tuple<T1, T2, T3> ToTuple();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public struct ValueTuple<T1, T2, T3, T4>
    {
        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4} }")]
        public extern ValueTuple(T1 item1, T2 item2, T3 item3, T4 item4);

        [Name("item1")]
        public T1 Item1;

        [Name("item2")]
        public T2 Item2;

        [Name("item3")]
        public T3 Item3;

        [Name("item4")]
        public T4 Item4;

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();

        [Template("{this}")]
        public extern Tuple<T1, T2, T3, T4> ToTuple();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public struct ValueTuple<T1, T2, T3, T4, T5>
    {
        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5} }")]
        public extern ValueTuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5);

        [Name("item1")]
        public T1 Item1;

        [Name("item2")]
        public T2 Item2;

        [Name("item3")]
        public T3 Item3;

        [Name("item4")]
        public T4 Item4;

        [Name("item5")]
        public T5 Item5;

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();

        [Template("{this}")]
        public extern Tuple<T1, T2, T3, T4, T5> ToTuple();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public struct ValueTuple<T1, T2, T3, T4, T5, T6>
    {
        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5}, item6: {item6} }")]
        public extern ValueTuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6);

        [Name("item1")]
        public T1 Item1;

        [Name("item2")]
        public T2 Item2;

        [Name("item3")]
        public T3 Item3;

        [Name("item4")]
        public T4 Item4;

        [Name("item5")]
        public T5 Item5;

        [Name("item6")]
        public T6 Item6;

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();

        [Template("{this}")]
        public extern Tuple<T1, T2, T3, T4, T5, T6> ToTuple();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public struct ValueTuple<T1, T2, T3, T4, T5, T6, T7>
    {
        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5}, item6: {item6}, item7: {item7} }")]
        public extern ValueTuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7);

        [Name("item1")]
        public T1 Item1;

        [Name("item2")]
        public T2 Item2;

        [Name("item3")]
        public T3 Item3;

        [Name("item4")]
        public T4 Item4;

        [Name("item5")]
        public T5 Item5;

        [Name("item6")]
        public T6 Item6;

        [Name("item7")]
        public T7 Item7;

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();

        [Template("{this}")]
        public extern Tuple<T1, T2, T3, T4, T5, T6, T7> ToTuple();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public struct ValueTuple<T1, T2, T3, T4, T5, T6, T7, TRest>
    {
        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5}, item6: {item6}, item7: {item7}, rest: {rest} }")]
        public extern ValueTuple(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, TRest rest);

        [Name("item1")]
        public T1 Item1;

        [Name("item2")]
        public T2 Item2;

        [Name("item3")]
        public T3 Item3;

        [Name("item4")]
        public T4 Item4;

        [Name("item5")]
        public T5 Item5;

        [Name("item6")]
        public T6 Item6;

        [Name("item7")]
        public T7 Item7;

        [Name("rest")]
        public TRest Rest;

        [Template("Bridge.objectEquals({this}, {o})")]
        public override extern bool Equals(object o);

        [Template("Bridge.getHashCode({this}, false, true)")]
        public override extern int GetHashCode();

        [Template("{this}")]
        public extern Tuple<T1, T2, T3, T4, T5, T6, T7, TRest> ToTuple();
    }

    [External]
    [IgnoreGeneric]
    [IgnoreCast]
    [Name("System.Object")]
    public static class ValueTuple
    {
        [Template("{ item1: {item1} }")]
        public static extern ValueTuple<T1> Create<T1>(T1 item1);

        [Template("{ item1: {item1}, item2: {item2} }")]
        public static extern ValueTuple<T1, T2> Create<T1, T2>(T1 item1, T2 item2);

        [Template("{ item1: {item1}, item2: {item2}, item3: {item3} }")]
        public static extern ValueTuple<T1, T2, T3> Create<T1, T2, T3>(T1 item1, T2 item2, T3 item3);

        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4} }")]
        public static extern ValueTuple<T1, T2, T3, T4> Create<T1, T2, T3, T4>(T1 item1, T2 item2, T3 item3, T4 item4);

        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5} }")]
        public static extern ValueTuple<T1, T2, T3, T4, T5> Create<T1, T2, T3, T4, T5>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5);

        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5}, item6: {item6} }")]
        public static extern ValueTuple<T1, T2, T3, T4, T5, T6> Create<T1, T2, T3, T4, T5, T6>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6);

        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5}, item6: {item6}, item7: {item7} }")]
        public static extern ValueTuple<T1, T2, T3, T4, T5, T6, T7> Create<T1, T2, T3, T4, T5, T6, T7>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7);

        [Template("{ item1: {item1}, item2: {item2}, item3: {item3}, item4: {item4}, item5: {item5}, item6: {item6}, item7: {item7}, rest: {rest} }")]
        public static extern ValueTuple<T1, T2, T3, T4, T5, T6, T7, TRest> Create<T1, T2, T3, T4, T5, T6, T7, TRest>(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, TRest rest);
    }
}