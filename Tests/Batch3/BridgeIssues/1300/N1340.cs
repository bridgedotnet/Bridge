using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1340 - {0}")]
    public class Bridge1340
    {
        [Test]
        public static void TestStructGenericMembersDefaultValue()
        {
            var o = new Data<int>();

            Assert.AreEqual(0, o.Value1, "int 1");
            Assert.AreEqual(0, o.Value2, "int 2");

            var o1 = new Data<decimal>();

            Assert.AreEqual(0m, o1.Value1, "decimal 1");
            Assert.AreEqual(0m, o1.Value2, "decimal 2");

            var o2 = new Data<long>();

            Assert.AreEqual(0L, o2.Value1, "long 1");
            Assert.AreEqual(0L, o2.Value2, "long 2");

            var o3 = new Data<bool>();

            Assert.AreEqual(false, o3.Value1, "bool 1");
            Assert.AreEqual(false, o3.Value2, "bool 2");

            var o4 = new Data<string>();

            Assert.Null(o4.Value1, "string 1");
            Assert.Null(o4.Value2, "string 2");

            var o5 = new Data<Data<int>>();

            Assert.NotNull(o5.Value1, "Data<int> 1");
            Assert.AreEqual(0, o5.Value1.Value1, "Data<int>.Value1 1");
            Assert.AreEqual(0, o5.Value1.Value2, "Data<int>.Value1 2");
            Assert.NotNull(o5.Value2, "Data<int> 2");
            Assert.AreEqual(0, o5.Value2.Value1, "Data<int>.Value2 1");
            Assert.AreEqual(0, o5.Value2.Value2, "Data<int>.Value2 2");

            var o6 = new Data<DataClass<int>>();

            Assert.Null(o6.Value1, "DataClass<int> 1");
            Assert.Null(o6.Value2, "DataClass<int> 2");
        }

        [Test]
        public static void TestStructTwoGenericMembersDefaultValue()
        {
            var o = new Data<int, decimal>();

            Assert.AreEqual(0, o.Value1, "int 1");
            Assert.AreEqual(0m, o.Value2, "decimal 2");

            var o1 = new Data<long, bool>();

            Assert.AreEqual(0L, o1.Value1, "long 1");
            Assert.AreEqual(false, o1.Value2, "bool 2");

            var o2 = new Data<double, string>();

            Assert.AreEqual(0, o2.Value1, "double 1");
            Assert.Null(o2.Value2, "string 2");
        }

        [Test]
        public static void TestClassGenericMembersDefaultValue()
        {
            var o = new DataClass<int>();

            Assert.AreEqual(0, o.Value1, "int 1");
            Assert.AreEqual(0, o.Value2, "int 2");

            var o1 = new DataClass<decimal>();

            Assert.AreEqual(0m, o1.Value1, "decimal 1");
            Assert.AreEqual(0m, o1.Value2, "decimal 2");

            var o2 = new DataClass<long>();

            Assert.AreEqual(0L, o2.Value1, "long 1");
            Assert.AreEqual(0L, o2.Value2, "long 2");

            var o3 = new DataClass<bool>();

            Assert.AreEqual(false, o3.Value1, "bool 1");
            Assert.AreEqual(false, o3.Value2, "bool 2");

            var o4 = new DataClass<string>();

            Assert.Null(o4.Value1, "string 1");
            Assert.Null(o4.Value2, "string 2");

            var o5 = new DataClass<Data<int>>();

            Assert.NotNull(o5.Value1, "Data<int> 1");
            Assert.AreEqual(0, o5.Value1.Value1, "Data<int>.Value1 1");
            Assert.AreEqual(0, o5.Value1.Value2, "Data<int>.Value1 2");
            Assert.NotNull(o5.Value2, "Data<int> 2");
            Assert.AreEqual(0, o5.Value2.Value1, "Data<int>.Value2 1");
            Assert.AreEqual(0, o5.Value2.Value2, "Data<int>.Value2 2");

            var o6 = new DataClass<DataClass<int>>();

            Assert.Null(o6.Value1, "DataClass<int> 1");
            Assert.Null(o6.Value2, "DataClass<int> 2");
        }

        [Test]
        public static void TestClassTwoGenericMembersDefaultValue()
        {
            var o = new DataClass<int, decimal>();

            Assert.AreEqual(0, o.Value1, "int 1");
            Assert.AreEqual(0m, o.Value2, "decimal 2");

            var o1 = new DataClass<long, bool>();

            Assert.AreEqual(0L, o1.Value1, "long 1");
            Assert.AreEqual(false, o1.Value2, "bool 2");

            var o2 = new DataClass<double, string>();

            Assert.AreEqual(0, o2.Value1, "double 1");
            Assert.Null(o2.Value2, "string 2");
        }

        [Test]
        public static void TestClass1TwoGenericInheritedMembersDefaultValue()
        {
            var o = new DataClass1<int, decimal>();

            Assert.AreEqual(0, o.Value1, "int 1");
            Assert.AreEqual(0m, o.Value2, "decimal 2");

            var o1 = new DataClass1<long, bool>();

            Assert.AreEqual(0L, o1.Value1, "long 1");
            Assert.AreEqual(false, o1.Value2, "bool 2");

            var o2 = new DataClass1<double, string>();

            Assert.AreEqual(0, o2.Value1, "double 1");
            Assert.Null(o2.Value2, "string 2");
        }

        [Test]
        public static void TestClass2TwoGenericInheritedMembersDefaultValue()
        {
            var o = new DataClass2<decimal, bool>();

            Assert.AreEqual(0, o.Value1, "int 1");
            Assert.Null(o.Value2, "string 2");
        }

        [Test]
        public static void TestClass3TwoGenericInheritedMembersDefaultValue()
        {
            var o = new DataClass3<long, decimal>();

            Assert.AreEqual(0, o.Value1, "int 1");
            Assert.Null(o.Value2, "string 2");
            Assert.AreEqual(0L, o.Value3, "long 1");
            Assert.AreEqual(0m, o.Value4, "decimal 4");
        }

        [Test]
        public static void TestStructStaticIntArray()
        {
            Assert.AreEqual(0, Data<int>.array[0]);
            Assert.AreEqual(0, Data<int>.array[1]);
            Assert.AreEqual(0, Data<int>.array[2]);

            Assert.NotNull(Data<Data<int>>.array[0]);
            Assert.NotNull(Data<Data<int>>.array[1]);
            Assert.NotNull(Data<Data<int>>.array[2]);

            var o = new Data<int>();
            Assert.AreEqual(0, o.ReturnArray()[0]);
            Assert.AreEqual(0, o.ReturnArray()[1]);
            Assert.AreEqual(0, o.ReturnArray()[2]);

            var o1 = new Data<Data<int>>();
            Assert.NotNull(o1.ReturnArray()[0]);
            Assert.NotNull(o1.ReturnArray()[1]);
            Assert.NotNull(o1.ReturnArray()[2]);
        }

        [Test]
        public static void TestStructStaticLongArray()
        {
            Assert.AreEqual(0L, Data<long>.array[0]);
            Assert.AreEqual(0L, Data<long>.array[1]);
            Assert.AreEqual(0L, Data<long>.array[2]);

            Assert.NotNull(Data<Data<long>>.array[0]);
            Assert.NotNull(Data<Data<long>>.array[1]);
            Assert.NotNull(Data<Data<long>>.array[2]);

            var o = new Data<long>();
            Assert.AreEqual(0L, o.ReturnArray()[0]);
            Assert.AreEqual(0L, o.ReturnArray()[1]);
            Assert.AreEqual(0L, o.ReturnArray()[2]);

            var o1 = new Data<Data<long>>();
            Assert.NotNull(o1.ReturnArray()[0]);
            Assert.NotNull(o1.ReturnArray()[1]);
            Assert.NotNull(o1.ReturnArray()[2]);
        }

        [Test]
        public static void TestStructStaticStringArray()
        {
            Assert.Null(Data<string>.array[0]);
            Assert.Null(Data<string>.array[1]);
            Assert.Null(Data<string>.array[2]);

            Assert.NotNull(Data<Data<string>>.array[0]);
            Assert.NotNull(Data<Data<string>>.array[1]);
            Assert.NotNull(Data<Data<string>>.array[2]);

            var o = new Data<string>();
            Assert.Null(o.ReturnArray()[0]);
            Assert.Null(o.ReturnArray()[1]);
            Assert.Null(o.ReturnArray()[2]);

            var o1 = new Data<Data<string>>();
            Assert.NotNull(o1.ReturnArray()[0]);
            Assert.NotNull(o1.ReturnArray()[1]);
            Assert.NotNull(o1.ReturnArray()[2]);
        }

        public struct Data<T>
        {
            public T Value1 { get; set; }
            public T Value2;
            public static T[] array = new T[3];

            public Data(T v1, T v2)
                : this()
            {
                Value1 = v1;
                Value2 = v2;
            }

            public T[] ReturnArray()
            {
                return new T[3];
            }
        }

        public struct Data<T, K>
        {
            public T Value1 { get; set; }
            public K Value2;
        }

        public class DataClass<T>
        {
            public T Value1 { get; set; }
            public T Value2;
        }

        public class DataClass<T, K>
        {
            public T Value1 { get; set; }
            public K Value2;
        }

        public class DataClass1<T, K> : DataClass<T, K>
        {
        }

        public class DataClass2<T, K> : DataClass1<int, string>
        {
        }

        public class DataClass3<T, K> : DataClass2<int, string>
        {
            public T Value3 { get; set; }
            public K Value4;
        }

        [Test]
        public static void TestStaticClassGenericMembersDefaultValue()
        {
            Assert.AreEqual(0, StaticDataClass<int>.Value1, "int 1");
            Assert.AreEqual(0, StaticDataClass<int>.Value2, "int 2");

            Assert.AreEqual(0m, StaticDataClass<decimal>.Value1, "decimal 1");
            Assert.AreEqual(0m, StaticDataClass<decimal>.Value2, "decimal 2");

            Assert.AreEqual(0L, StaticDataClass<long>.Value1, "long 1");
            Assert.AreEqual(0L, StaticDataClass<long>.Value2, "long 2");

            Assert.AreEqual(false, StaticDataClass<bool>.Value1, "bool 1");
            Assert.AreEqual(false, StaticDataClass<bool>.Value2, "bool 2");

            Assert.Null(StaticDataClass<string>.Value1, "string 1");
            Assert.Null(StaticDataClass<string>.Value2, "string 2");

            Assert.NotNull(StaticDataClass<Data<int>>.Value1, "Data<int> 1");
            Assert.AreEqual(0, StaticDataClass<Data<int>>.Value1.Value1, "Data<int>.Value1 1");
            Assert.AreEqual(0, StaticDataClass<Data<int>>.Value1.Value2, "Data<int>.Value1 2");
            Assert.NotNull(StaticDataClass<Data<int>>.Value2, "Data<int> 2");
            Assert.AreEqual(0, StaticDataClass<Data<int>>.Value2.Value1, "Data<int>.Value2 1");
            Assert.AreEqual(0, StaticDataClass<Data<int>>.Value2.Value2, "Data<int>.Value2 2");

            Assert.Null(StaticDataClass<DataClass<int>>.Value1, "DataClass<int> 1");
            Assert.Null(StaticDataClass<DataClass<int>>.Value2, "DataClass<int> 2");
        }

        [Test]
        public static void TestStaticClassTwoGenericMembersDefaultValue()
        {
            Assert.AreEqual(0, StaticDataClass<int, decimal>.Value1, "int 1");
            Assert.AreEqual(0m, StaticDataClass<int, decimal>.Value2, "decimal 2");

            Assert.AreEqual(0L, StaticDataClass<long, bool>.Value1, "long 1");
            Assert.AreEqual(false, StaticDataClass<long, bool>.Value2, "bool 2");

            Assert.AreEqual(0, StaticDataClass<double, string>.Value1, "double 1");
            Assert.Null(StaticDataClass<double, string>.Value2, "string 2");
        }

        [Test]
        public static void TestStaticClass1TwoGenericInheritedMembersDefaultValue()
        {
            Assert.AreEqual(0, StaticDataClass1<int, decimal>.Value1, "int 1");
            Assert.AreEqual(0m, StaticDataClass1<int, decimal>.Value2, "decimal 2");

            Assert.AreEqual(0L, StaticDataClass1<long, bool>.Value1, "long 1");
            Assert.AreEqual(false, StaticDataClass1<long, bool>.Value2, "bool 2");

            Assert.AreEqual(0, StaticDataClass1<double, string>.Value1, "double 1");
            Assert.Null(StaticDataClass1<double, string>.Value2, "string 2");
        }

        [Test]
        public static void TestStaticClass2TwoGenericInheritedMembersDefaultValue()
        {
            Assert.AreEqual(0, StaticDataClass2<decimal, bool>.Value1, "int 1");
            Assert.Null(StaticDataClass2<decimal, bool>.Value2, "string 2");
        }

        [Test]
        public static void TestStaticClass3TwoGenericInheritedMembersDefaultValue()
        {
            Assert.AreEqual(0, StaticDataClass3<long, decimal>.Value1, "int 1");
            Assert.Null(StaticDataClass3<long, decimal>.Value2, "string 2");
            Assert.AreEqual(0L, StaticDataClass3<long, decimal>.Value3, "long 1");
            Assert.AreEqual(0m, StaticDataClass3<long, decimal>.Value4, "decimal 4");
        }

        public class StaticDataClass<T>
        {
            public static T Value1 { get; set; }
            public static T Value2;
        }

        public class StaticDataClass<T, K>
        {
            public static T Value1 { get; set; }
            public static K Value2;
        }

        public class StaticDataClass1<T, K> : StaticDataClass<T, K>
        {
        }

        public class StaticDataClass2<T, K> : StaticDataClass1<int, string>
        {
        }

        public class StaticDataClass3<T, K> : StaticDataClass2<int, string>
        {
            public static T Value3 { get; set; }
            public static K Value4;
        }
    }
}