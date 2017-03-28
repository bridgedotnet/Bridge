namespace Bridge
{
    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("[{item1}]")]
        public extern Sequence(T1 item1);

        [Template("{this}[{itemIndex}]")]
        public extern T1 GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, T1 value);

        [Template("{this}")]
        public extern T1[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("[{item1}, {item2}]")]
        public extern Sequence(T1 item1, T2 item2);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2> value);

        [Template("{this}")]
        public extern Union<T1, T2>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("[{item1}, {item2}, {item3}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("[{item1}, {item2}, {item3}, {item4}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]

        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]

        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76> value);


        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]

        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("{this}[86]")]
        public T87 Item87;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}, {item87}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86, T87 item87);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("{this}[86]")]
        public T87 Item87;

        [Template("{this}[87]")]
        public T88 Item88;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}, {item87}, {item88}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86, T87 item87, T88 item88);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("{this}[86]")]
        public T87 Item87;

        [Template("{this}[87]")]
        public T88 Item88;

        [Template("{this}[88]")]
        public T89 Item89;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}, {item87}, {item88}, {item89}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86, T87 item87, T88 item88, T89 item89);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("{this}[86]")]
        public T87 Item87;

        [Template("{this}[87]")]
        public T88 Item88;

        [Template("{this}[88]")]
        public T89 Item89;

        [Template("{this}[89]")]
        public T90 Item90;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}, {item87}, {item88}, {item89}, {item90}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86, T87 item87, T88 item88, T89 item89, T90 item90);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("{this}[86]")]
        public T87 Item87;

        [Template("{this}[87]")]
        public T88 Item88;

        [Template("{this}[88]")]
        public T89 Item89;

        [Template("{this}[89]")]
        public T90 Item90;

        [Template("{this}[90]")]
        public T91 Item91;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}, {item87}, {item88}, {item89}, {item90}, {item91}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86, T87 item87, T88 item88, T89 item89, T90 item90, T91 item91);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("{this}[86]")]
        public T87 Item87;

        [Template("{this}[87]")]
        public T88 Item88;

        [Template("{this}[88]")]
        public T89 Item89;

        [Template("{this}[89]")]
        public T90 Item90;

        [Template("{this}[90]")]
        public T91 Item91;

        [Template("{this}[91]")]
        public T92 Item92;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}, {item87}, {item88}, {item89}, {item90}, {item91}, {item92}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86, T87 item87, T88 item88, T89 item89, T90 item90, T91 item91, T92 item92);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]

        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("{this}[86]")]
        public T87 Item87;

        [Template("{this}[87]")]
        public T88 Item88;

        [Template("{this}[88]")]
        public T89 Item89;

        [Template("{this}[89]")]
        public T90 Item90;

        [Template("{this}[90]")]
        public T91 Item91;

        [Template("{this}[91]")]
        public T92 Item92;

        [Template("{this}[92]")]
        public T93 Item93;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}, {item87}, {item88}, {item89}, {item90}, {item91}, {item92}, {item93}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86, T87 item87, T88 item88, T89 item89, T90 item90, T91 item91, T92 item92, T93 item93);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("{this}[86]")]
        public T87 Item87;

        [Template("{this}[87]")]
        public T88 Item88;

        [Template("{this}[88]")]
        public T89 Item89;

        [Template("{this}[89]")]
        public T90 Item90;

        [Template("{this}[90]")]
        public T91 Item91;

        [Template("{this}[91]")]
        public T92 Item92;

        [Template("{this}[92]")]
        public T93 Item93;

        [Template("{this}[93]")]
        public T94 Item94;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}, {item87}, {item88}, {item89}, {item90}, {item91}, {item92}, {item93}, {item94}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86, T87 item87, T88 item88, T89 item89, T90 item90, T91 item91, T92 item92, T93 item93, T94 item94);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("{this}[86]")]
        public T87 Item87;

        [Template("{this}[87]")]
        public T88 Item88;

        [Template("{this}[88]")]
        public T89 Item89;

        [Template("{this}[89]")]
        public T90 Item90;

        [Template("{this}[90]")]
        public T91 Item91;

        [Template("{this}[91]")]
        public T92 Item92;

        [Template("{this}[92]")]
        public T93 Item93;

        [Template("{this}[93]")]
        public T94 Item94;

        [Template("{this}[94]")]
        public T95 Item95;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}, {item87}, {item88}, {item89}, {item90}, {item91}, {item92}, {item93}, {item94}, {item95}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86, T87 item87, T88 item88, T89 item89, T90 item90, T91 item91, T92 item92, T93 item93, T94 item94, T95 item95);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("{this}[86]")]
        public T87 Item87;

        [Template("{this}[87]")]
        public T88 Item88;

        [Template("{this}[88]")]
        public T89 Item89;

        [Template("{this}[89]")]
        public T90 Item90;

        [Template("{this}[90]")]
        public T91 Item91;

        [Template("{this}[91]")]
        public T92 Item92;

        [Template("{this}[92]")]
        public T93 Item93;

        [Template("{this}[93]")]
        public T94 Item94;

        [Template("{this}[94]")]
        public T95 Item95;

        [Template("{this}[95]")]
        public T96 Item96;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}, {item87}, {item88}, {item89}, {item90}, {item91}, {item92}, {item93}, {item94}, {item95}, {item96}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86, T87 item87, T88 item88, T89 item89, T90 item90, T91 item91, T92 item92, T93 item93, T94 item94, T95 item95, T96 item96);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("{this}[86]")]
        public T87 Item87;

        [Template("{this}[87]")]
        public T88 Item88;

        [Template("{this}[88]")]
        public T89 Item89;

        [Template("{this}[89]")]
        public T90 Item90;

        [Template("{this}[90]")]
        public T91 Item91;

        [Template("{this}[91]")]
        public T92 Item92;

        [Template("{this}[92]")]
        public T93 Item93;

        [Template("{this}[93]")]
        public T94 Item94;

        [Template("{this}[94]")]
        public T95 Item95;

        [Template("{this}[95]")]
        public T96 Item96;

        [Template("{this}[96]")]
        public T97 Item97;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}, {item87}, {item88}, {item89}, {item90}, {item91}, {item92}, {item93}, {item94}, {item95}, {item96}, {item97}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86, T87 item87, T88 item88, T89 item89, T90 item90, T91 item91, T92 item92, T93 item93, T94 item94, T95 item95, T96 item96, T97 item97);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97, T98>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("{this}[86]")]
        public T87 Item87;

        [Template("{this}[87]")]
        public T88 Item88;

        [Template("{this}[88]")]
        public T89 Item89;

        [Template("{this}[89]")]
        public T90 Item90;

        [Template("{this}[90]")]
        public T91 Item91;

        [Template("{this}[91]")]
        public T92 Item92;

        [Template("{this}[92]")]
        public T93 Item93;

        [Template("{this}[93]")]
        public T94 Item94;

        [Template("{this}[94]")]
        public T95 Item95;

        [Template("{this}[95]")]
        public T96 Item96;

        [Template("{this}[96]")]
        public T97 Item97;

        [Template("{this}[97]")]
        public T98 Item98;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}, {item87}, {item88}, {item89}, {item90}, {item91}, {item92}, {item93}, {item94}, {item95}, {item96}, {item97}, {item98}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86, T87 item87, T88 item88, T89 item89, T90 item90, T91 item91, T92 item92, T93 item93, T94 item94, T95 item95, T96 item96, T97 item97, T98 item98);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97, T98> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97, T98> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97, T98>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97, T98, T99>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("{this}[86]")]
        public T87 Item87;

        [Template("{this}[87]")]
        public T88 Item88;

        [Template("{this}[88]")]
        public T89 Item89;

        [Template("{this}[89]")]
        public T90 Item90;

        [Template("{this}[90]")]
        public T91 Item91;

        [Template("{this}[91]")]
        public T92 Item92;

        [Template("{this}[92]")]
        public T93 Item93;

        [Template("{this}[93]")]
        public T94 Item94;

        [Template("{this}[94]")]
        public T95 Item95;

        [Template("{this}[95]")]
        public T96 Item96;

        [Template("{this}[96]")]
        public T97 Item97;

        [Template("{this}[97]")]
        public T98 Item98;

        [Template("{this}[98]")]
        public T99 Item99;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}, {item87}, {item88}, {item89}, {item90}, {item91}, {item92}, {item93}, {item94}, {item95}, {item96}, {item97}, {item98}, {item99}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86, T87 item87, T88 item88, T89 item89, T90 item90, T91 item91, T92 item92, T93 item93, T94 item94, T95 item95, T96 item96, T97 item97, T98 item98, T99 item99);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97, T98, T99> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97, T98, T99> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97, T98, T99>[] AsArray();
    }

    [External]
    [IgnoreCast]
    [IgnoreGeneric]
    [Name("System.Object")]
    public class Sequence<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97, T98, T99, T100>
    {
        [Template("{this}[0]")]
        public T1 Item1;

        [Template("{this}[1]")]
        public T2 Item2;

        [Template("{this}[2]")]
        public T3 Item3;

        [Template("{this}[3]")]
        public T4 Item4;

        [Template("{this}[4]")]
        public T5 Item5;

        [Template("{this}[5]")]
        public T6 Item6;

        [Template("{this}[6]")]
        public T7 Item7;

        [Template("{this}[7]")]
        public T8 Item8;

        [Template("{this}[8]")]
        public T9 Item9;

        [Template("{this}[9]")]
        public T10 Item10;

        [Template("{this}[10]")]
        public T11 Item11;

        [Template("{this}[11]")]
        public T12 Item12;

        [Template("{this}[12]")]
        public T13 Item13;

        [Template("{this}[13]")]
        public T14 Item14;

        [Template("{this}[14]")]
        public T15 Item15;

        [Template("{this}[15]")]
        public T16 Item16;

        [Template("{this}[16]")]
        public T17 Item17;

        [Template("{this}[17]")]
        public T18 Item18;

        [Template("{this}[18]")]
        public T19 Item19;

        [Template("{this}[19]")]
        public T20 Item20;

        [Template("{this}[20]")]
        public T21 Item21;

        [Template("{this}[21]")]
        public T22 Item22;

        [Template("{this}[22]")]
        public T23 Item23;

        [Template("{this}[23]")]
        public T24 Item24;

        [Template("{this}[24]")]
        public T25 Item25;

        [Template("{this}[25]")]
        public T26 Item26;

        [Template("{this}[26]")]
        public T27 Item27;

        [Template("{this}[27]")]
        public T28 Item28;

        [Template("{this}[28]")]
        public T29 Item29;

        [Template("{this}[29]")]
        public T30 Item30;

        [Template("{this}[30]")]
        public T31 Item31;

        [Template("{this}[31]")]
        public T32 Item32;

        [Template("{this}[32]")]
        public T33 Item33;

        [Template("{this}[33]")]
        public T34 Item34;

        [Template("{this}[34]")]
        public T35 Item35;

        [Template("{this}[35]")]
        public T36 Item36;

        [Template("{this}[36]")]
        public T37 Item37;

        [Template("{this}[37]")]
        public T38 Item38;

        [Template("{this}[38]")]
        public T39 Item39;

        [Template("{this}[39]")]
        public T40 Item40;

        [Template("{this}[40]")]
        public T41 Item41;

        [Template("{this}[41]")]
        public T42 Item42;

        [Template("{this}[42]")]
        public T43 Item43;

        [Template("{this}[43]")]
        public T44 Item44;

        [Template("{this}[44]")]
        public T45 Item45;

        [Template("{this}[45]")]
        public T46 Item46;

        [Template("{this}[46]")]
        public T47 Item47;

        [Template("{this}[47]")]
        public T48 Item48;

        [Template("{this}[48]")]
        public T49 Item49;

        [Template("{this}[49]")]
        public T50 Item50;

        [Template("{this}[50]")]
        public T51 Item51;

        [Template("{this}[51]")]
        public T52 Item52;

        [Template("{this}[52]")]
        public T53 Item53;

        [Template("{this}[53]")]
        public T54 Item54;

        [Template("{this}[54]")]
        public T55 Item55;

        [Template("{this}[55]")]
        public T56 Item56;

        [Template("{this}[56]")]
        public T57 Item57;

        [Template("{this}[57]")]
        public T58 Item58;

        [Template("{this}[58]")]
        public T59 Item59;

        [Template("{this}[59]")]
        public T60 Item60;

        [Template("{this}[60]")]
        public T61 Item61;

        [Template("{this}[61]")]
        public T62 Item62;

        [Template("{this}[62]")]
        public T63 Item63;

        [Template("{this}[63]")]
        public T64 Item64;

        [Template("{this}[64]")]
        public T65 Item65;

        [Template("{this}[65]")]
        public T66 Item66;

        [Template("{this}[66]")]
        public T67 Item67;

        [Template("{this}[67]")]
        public T68 Item68;

        [Template("{this}[68]")]
        public T69 Item69;

        [Template("{this}[69]")]
        public T70 Item70;

        [Template("{this}[70]")]
        public T71 Item71;

        [Template("{this}[71]")]
        public T72 Item72;

        [Template("{this}[72]")]
        public T73 Item73;

        [Template("{this}[73]")]
        public T74 Item74;

        [Template("{this}[74]")]
        public T75 Item75;

        [Template("{this}[75]")]
        public T76 Item76;

        [Template("{this}[76]")]
        public T77 Item77;

        [Template("{this}[77]")]
        public T78 Item78;

        [Template("{this}[78]")]
        public T79 Item79;

        [Template("{this}[79]")]
        public T80 Item80;

        [Template("{this}[80]")]
        public T81 Item81;

        [Template("{this}[81]")]
        public T82 Item82;

        [Template("{this}[82]")]
        public T83 Item83;

        [Template("{this}[83]")]
        public T84 Item84;

        [Template("{this}[84]")]
        public T85 Item85;

        [Template("{this}[85]")]
        public T86 Item86;

        [Template("{this}[86]")]
        public T87 Item87;

        [Template("{this}[87]")]
        public T88 Item88;

        [Template("{this}[88]")]
        public T89 Item89;

        [Template("{this}[89]")]
        public T90 Item90;

        [Template("{this}[90]")]
        public T91 Item91;

        [Template("{this}[91]")]
        public T92 Item92;

        [Template("{this}[92]")]
        public T93 Item93;

        [Template("{this}[93]")]
        public T94 Item94;

        [Template("{this}[94]")]
        public T95 Item95;

        [Template("{this}[95]")]
        public T96 Item96;

        [Template("{this}[96]")]
        public T97 Item97;

        [Template("{this}[97]")]
        public T98 Item98;

        [Template("{this}[98]")]
        public T99 Item99;

        [Template("{this}[99]")]
        public T100 Item100;

        [Template("[{item1}, {item2}, {item3}, {item4}, {item5}, {item6}, {item7}, {item8}, {item9}, {item10}, {item11}, {item12}, {item13}, {item14}, {item15}, {item16}, {item17}, {item18}, {item19}, {item20}, {item21}, {item22}, {item23}, {item24}, {item25}, {item26}, {item27}, {item28}, {item29}, {item30}, {item31}, {item32}, {item33}, {item34}, {item35}, {item36}, {item37}, {item38}, {item39}, {item40}, {item41}, {item42}, {item43}, {item44}, {item45}, {item46}, {item47}, {item48}, {item49}, {item50}, {item51}, {item52}, {item53}, {item54}, {item55}, {item56}, {item57}, {item58}, {item59}, {item60}, {item61}, {item62}, {item63}, {item64}, {item65}, {item66}, {item67}, {item68}, {item69}, {item70}, {item71}, {item72}, {item73}, {item74}, {item75}, {item76}, {item77}, {item78}, {item79}, {item80}, {item81}, {item82}, {item83}, {item84}, {item85}, {item86}, {item87}, {item88}, {item89}, {item90}, {item91}, {item92}, {item93}, {item94}, {item95}, {item96}, {item97}, {item98}, {item99}, {item100}]")]
        public extern Sequence(T1 item1, T2 item2, T3 item3, T4 item4, T5 item5, T6 item6, T7 item7, T8 item8, T9 item9, T10 item10, T11 item11, T12 item12, T13 item13, T14 item14, T15 item15, T16 item16, T17 item17, T18 item18, T19 item19, T20 item20, T21 item21, T22 item22, T23 item23, T24 item24, T25 item25, T26 item26, T27 item27, T28 item28, T29 item29, T30 item30, T31 item31, T32 item32, T33 item33, T34 item34, T35 item35, T36 item36, T37 item37, T38 item38, T39 item39, T40 item40, T41 item41, T42 item42, T43 item43, T44 item44, T45 item45, T46 item46, T47 item47, T48 item48, T49 item49, T50 item50, T51 item51, T52 item52, T53 item53, T54 item54, T55 item55, T56 item56, T57 item57, T58 item58, T59 item59, T60 item60, T61 item61, T62 item62, T63 item63, T64 item64, T65 item65, T66 item66, T67 item67, T68 item68, T69 item69, T70 item70, T71 item71, T72 item72, T73 item73, T74 item74, T75 item75, T76 item76, T77 item77, T78 item78, T79 item79, T80 item80, T81 item81, T82 item82, T83 item83, T84 item84, T85 item85, T86 item86, T87 item87, T88 item88, T89 item89, T90 item90, T91 item91, T92 item92, T93 item93, T94 item94, T95 item95, T96 item96, T97 item97, T98 item98, T99 item99, T100 item100);

        [Template("{this}[{itemIndex}]")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97, T98, T99, T100> GetItem(int itemIndex);

        [Template("{this}[{itemIndex}] = {value}")]
        public extern void SetItemUnsafe(int itemIndex, Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97, T98, T99, T100> value);

        [Template("{this}")]
        public extern Union<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, T32, T33, T34, T35, T36, T37, T38, T39, T40, T41, T42, T43, T44, T45, T46, T47, T48, T49, T50, T51, T52, T53, T54, T55, T56, T57, T58, T59, T60, T61, T62, T63, T64, T65, T66, T67, T68, T69, T70, T71, T72, T73, T74, T75, T76, T77, T78, T79, T80, T81, T82, T83, T84, T85, T86, T87, T88, T89, T90, T91, T92, T93, T94, T95, T96, T97, T98, T99, T100>[] AsArray();
    }
}