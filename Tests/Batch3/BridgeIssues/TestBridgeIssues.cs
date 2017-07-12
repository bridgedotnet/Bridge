using Bridge.Html5;
using Bridge.Test.NUnit;

using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    internal class Bridge169
    {
        public static int Number = 0;

        public static void M1()
        {
            new Action(() =>
            {
                Bridge169.Number = 1;
            })();
        }

        public static void M2()
        {
            new Action(() => Bridge169.Number = 2)();
        }
    }

    internal abstract class Bridge240A
    {
        public int Data
        {
            get;
            set;
        }
    }

    internal class Bridge240B : Bridge240A
    {
        public string GetString()
        {
            base.Data++;
            return "B";
        }
    }

    internal class Bridge266A
    {
        public static object Test()
        {
            // Nothing gets written for Class1 in the output JavaScript due to the "new object()" argument.
            // If null is used instead (as commented-out) then it works as expected.
            // No compile error.
            return Bridge266B.Test("test", new object());
        }
    }

    internal class Bridge266B
    {
        public static object Test(string arg1, object arg2)
        {
            return arg2;
        }
    }

    internal class Bridge272
    {
        public enum MyEnum
        {
            Abc = 1,
            Def = 2,
            Ghi = 3
        };

        public static MyEnum Test(int i)
        {
            return (MyEnum)i;
        }
    }

    internal class Bridge294
    {
        private readonly string Name;

        public Bridge294(string name)
        {
            this.Name = name;
        }

        public string GetName()
        {
            return this.Name;
        }

        public string GetNameThroughGeneric<T>()
        {
            return this.Name;
        }
    }

    internal enum Bridge277
    {
        Int
    }

    // [#304]
    public class Bridge304 : IBridge304
    {
        public string X
        {
            get;
            set;
        }

        public void F(string x)
        {
            this.X = x;
        }

        public void F()
        {
            this.X = "void F()";
        }
    }

    public interface IBridge304
    {
        void F(string x);
    }

    public class Bridge305 : IEnumerable<string>
    {
        public List<string> Items
        {
            get;
            private set;
        }

        public Bridge305(string[] items)
        {
            Items = new List<string>(items);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        public IEnumerator<string> GetEnumerator()
        {
            return Items.GetEnumerator();
        }
    }

    public class Bridge306A : Bridge306Component<Bridge306A.Props>
    {
        public static string New(Props props)
        {
            return New<Bridge306A>(props);
        }

        public class Props
        {
            public string Name;

            public override string ToString()
            {
                return Name;
            }
        }
    }

    public class Bridge306B : Bridge306Component<Bridge306B.Props>
    {
        public static string New(Props props)
        {
            return Bridge306Component<Bridge306B.Props>.New<Bridge306B>(props);
        }

        public class Props
        {
            public string Name;

            public override string ToString()
            {
                return Name;
            }
        }
    }

    public abstract class Bridge306Component<TProps>
    {
        public static string New<TComponent>(TProps props) where TComponent : Bridge306Component<TProps>
        {
            return props.GetType().FullName + ":" + props;
        }
    }

    public class Bridge341A
    {
        public string Str
        {
            get;
            set;
        }
    }

    public class Bridge341B : IEquatable<Bridge341B>
    {
        public string Str
        {
            get;
            set;
        }

        public bool Equals(Bridge341B other)
        {
            if (other == null)
            {
                return false;
            }
            return this.Str == other.Str;
        }

        public override int GetHashCode()
        {
            return this.Str.GetHashCode();
        }
    }

    public class Bridge342 : IDictionary<int, string>
    {
        private readonly Dictionary<int, string> _backingDictionary;

        public Bridge342()
            : this(new Dictionary<int, string>())
        {
        }

        public Bridge342(Dictionary<int, string> initialValues)
        {
            _backingDictionary = initialValues;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        public IEnumerator<KeyValuePair<int, string>> GetEnumerator()
        {
            return _backingDictionary.GetEnumerator();
        }

        public string this[int key]
        {
            get
            {
                return _backingDictionary[key];
            }
            set
            {
                _backingDictionary[key] = value;
            }
        }

        public new ICollection<int> Keys
        {
            get
            {
                return _backingDictionary.Keys;
            }
        }

        public ICollection<string> Values
        {
            get
            {
                return _backingDictionary.Values;
            }
        }

        public int Count
        {
            get
            {
                return _backingDictionary.Count;
            }
        }

        public bool IsReadOnly
        {
            get { return this._backingDictionary.IsReadOnly; }
        }

        public void Add(KeyValuePair<int, string> item)
        {
            ((ICollection<KeyValuePair<int, string>>)this._backingDictionary).Add(item);
        }

        public void CopyTo(KeyValuePair<int, string>[] array, int arrayIndex)
        {
            ((ICollection<KeyValuePair<int, string>>)this._backingDictionary).CopyTo(array, arrayIndex);
        }

        public void Add(int key, string value)
        {
            _backingDictionary.Add(key, value);
        }

        public bool Remove(int key)
        {
            return _backingDictionary.Remove(key);
        }

        public bool ContainsKey(int key)
        {
            return _backingDictionary.ContainsKey(key);
        }

        public bool TryGetValue(int key, out string value)
        {
            return _backingDictionary.TryGetValue(key, out value);
        }

        public void Clear()
        {
            _backingDictionary.Clear();
        }

        public bool Contains(KeyValuePair<int, string> item)
        {
            return ((ICollection<KeyValuePair<int, string>>)this._backingDictionary).Contains(item);
        }

        public bool Remove(KeyValuePair<int, string> item)
        {
            return ((ICollection<KeyValuePair<int, string>>)this._backingDictionary).Remove(item);
        }
    }

    [ObjectLiteral]
    public class Bridge377
    {
        public string field1;
        public string field2;
        public int field3;
        public int field4;
    }

    public class Person383
    {
        public string Name
        {
            get;
            set;
        }
    }

    public static class Bridge383
    {
        public static string DoSomething(this Person383 person)
        {
            return person.Name;
        }
    }

    public class Bridge395
    {
        public string Id
        {
            get;
            set;
        }

        public int data
        {
            get;
            set;
        }
    }

    internal struct Bridge407
    {
        public int A
        {
            get;
            set;
        }

        public static Bridge407 operator +(Bridge407 x, Bridge407 y)
        {
            return new Bridge407()
            {
                A = x.A + y.A
            };
        }
    }

    public class Bridge418
    {
        public delegate int MyDelegate(int data);

        public MyDelegate Delegate
        {
            get;
            set;
        }

        public int CallDelegate(int data)
        {
            return Delegate(data);
        }
    }

    internal enum Bridge422
    {
        first = 0,
        next = 100,
        afterNext,
    }

    public class Bridge436First
    {
        public virtual string ToObject()
        {
            return "1";
        }
    }

    public class Bridge436Second : Bridge436First
    {
        public override string ToObject()
        {
            return base.ToObject() + "2";
        }
    }

    public class Bridge436Third : Bridge436Second
    {
        public override string ToObject()
        {
            return base.ToObject() + "3";
        }
    }

    public class Bridge439
    {
        private event Action<string> _dispatcher;

        public void Register(Action<string> callback)
        {
            _dispatcher += callback;
        }

        public void CallDispatcher(string s)
        {
            _dispatcher(s);
        }
    }

    public class Bridge467
    {
        public int MyProperty
        {
            get;
            set;
        }

        public override bool Equals(object obj)
        {
            var other = obj as Bridge467;
            if (other == null)
                return false;

            if (MyProperty < 0 || other.MyProperty < 0)
            {
                return ReferenceEquals(this, other);
            }

            return MyProperty == other.MyProperty;
        }

        public override int GetHashCode()
        {
            return MyProperty < 0 ? base.GetHashCode() : MyProperty.GetHashCode();
        }
    }

    public class Bridge470 : IEqualityComparer<Bridge470>
    {
        public int Data
        {
            get;
            set;
        }

        public bool Equals(Bridge470 x, Bridge470 y)
        {
            return x.Data == y.Data;
        }

        public int GetHashCode(Bridge470 obj)
        {
            return obj.Data.GetHashCode();
        }

        private static bool IsOdd(int value)
        {
            return value % 2 != 0;
        }
    }

    // Tests Bridge GitHub issues
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture]
    public class TestBridgeIssues
    {
        // Bridge[#169]
        [Test(Name = "#169", ExpectedCount = 2)]
        public static void N169()
        {
            // TEST
            Bridge169.M1();
            Assert.AreEqual(1, Bridge169.Number, "M1()");

            // TEST
            Bridge169.M2();
            Assert.AreEqual(2, Bridge169.Number, "M2()");
        }

        // Bridge[#240]
        [Test(Name = "#240", ExpectedCount = 3)]
        public static void N240()
        {
            // TEST
            var b = new Bridge240B();
            Assert.True(b != null, "Instance of B created");
            Assert.AreEqual("B", b.GetString(), "b.GetString() = 'B'");
            Assert.AreEqual(1, b.Data, "b.Data = 1");
        }

        // Bridge[#264]
        [Test(Name = "#264", ExpectedCount = 1)]
        public static void N264()
        {
            // TEST
            string oldHash = Global.Location.Hash;
            Global.Location.Hash = "#new-hash";
            Assert.AreEqual("#new-hash", Global.Location.Hash, "Setting Location.Hash works");
            Global.Location.Hash = oldHash; // to clean up the url
        }

        // Bridge[#266]
        [Test(Name = "#266", ExpectedCount = 1)]
        public static void N266()
        {
            // TEST
            Assert.True(Bridge266A.Test() != null, "new object() call transpiled");
        }

        // Bridge[#272]
        [Test(Name = "#272", ExpectedCount = 3)]
        public static void N272()
        {
            // TEST
            Assert.AreEqual(Bridge272.MyEnum.Abc, Bridge272.Test(1), "Casted MyEnum.Abc");
            Assert.AreEqual(Bridge272.MyEnum.Ghi, Bridge272.Test(3), "Casted MyEnum.Ghi");
            Assert.AreEqual(4, Bridge272.Test(4), "Casted MyEnum.Abc");
        }

        // Bridge[#273]
        [Test(Name = "#273", ExpectedCount = 4)]
        public static void N273()
        {
            // TEST
            var items = new List<int>() { 0, 1, 2, 3, 4 };

            var r = items.Slice(-1).ToArray();
            Assert.AreEqual(new[] { 4 }, r, "Slices start = -1");

            r = items.Slice(1).ToArray();
            Assert.AreEqual(new[] { 1, 2, 3, 4 }, r, "Slices start = 1");

            r = items.Slice(-3, 4).ToArray();
            Assert.AreEqual(new[] { 2, 3 }, r, "Slices start = -3, end = 3");

            r = items.Slice(1, 3).ToArray();
            Assert.AreEqual(new[] { 1, 2 }, r, "Slices start = 1, end = 2");
        }

        // Bridge[#277]
        [Test(Name = "#277", ExpectedCount = 1)]
        public static void N277()
        {
            Assert.AreEqual(0, Bridge277.Int, "Enum member with reserved name initialized");
        }

        // Bridge[#294]
        [Test(Name = "#294", ExpectedCount = 2)]
        public static void N294()
        {
            var c = new Bridge294("Vlad");

            Assert.AreEqual("Vlad", c.GetName(), "Class method works");
            Assert.AreEqual("Vlad", c.GetNameThroughGeneric<int>(), "Generic class method works");
        }

        // Bridge[#304]
        [Test(Name = "#304", ExpectedCount = 2)]
        public static void N304()
        {
            var c = new Bridge304();
            IBridge304 i = c;

            i.F("1");
            Assert.AreEqual("1", c.X, "Interface method works");

            c.F();
            Assert.AreEqual("void F()", c.X, "Class method works");
        }

        // Bridge[#305]
        [Test(Name = "#305", ExpectedCount = 1)]
        public static void N305()
        {
            var c = new Bridge305(new[] { "1", "2", "3" });

            var result = string.Empty;
            foreach (var item in c)
            {
                result = result + item;
            }

            Assert.AreEqual("123", result, "IEnumerator works");
        }

        // Bridge[#306]
        [Test(Name = "#306", ExpectedCount = 2)]
        public static void N306()
        {
            var b = Bridge306B.New(new Bridge306B.Props()
            {
                Name = "B"
            });
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge306B+Props:B", b, "Bridge306B.New() works");

            var a = Bridge306A.New(new Bridge306A.Props()
            {
                Name = "A"
            });
            Assert.AreEqual("Bridge.ClientTest.Batch3.BridgeIssues.Bridge306A+Props:A", a, "Bridge306A.New() works");
        }

        // Not C# API
        //[Test(Name = "#329", ExpectedCount = 5)]
        //public static void N329()
        //{
        //    DateTime d1;
        //    var b1 = DateTime.TryParse("2001-01-01", out d1, true);
        //    Assert.True(b1, "TryParse parsed '2001-01-01'");
        //    Assert.AreEqual(2001, d1.Year, "TryParse works Year");
        //    Assert.AreEqual(1, d1.Month, "TryParse works Month");
        //    Assert.AreEqual(1, d1.Day, "TryParse works Day");

        //    var d2 = DateTime.Parse("2001-01-01", true);
        //    Assert.AreEqual(d1.ToString(), d2.ToString(), "TryParse And Parse give the same result");
        //}

        // Bridge[#335]
        [Test(Name = "#335", ExpectedCount = 1)]
        public static void N335()
        {
            var l = new List<string>(new[] { "1", "2", "3", "1" });
            Assert.AreEqual(3, l.IndexOf("1", 2), "IndexOf with startIndex used");
        }

        // Bridge[#336]
        [Test(Name = "#336", ExpectedCount = 2)]
        public static void N336()
        {
            var l = new List<string>(new[] { "4" });

            l.InsertRange(0, new[] { "1", "2" });
            Assert.AreEqual(new[] { "1", "2", "4" }, l.ToArray(), "InsertRange works (1)");

            l.InsertRange(2, new[] { "3" });
            Assert.AreEqual(new[] { "1", "2", "3", "4" }, l.ToArray(), "InsertRange works (2)");
        }

        // Bridge[#337]
        [Test(Name = "#337", ExpectedCount = 4)]
        public static void N337()
        {
            var l = new List<string>(new[] { "1", "2" });

            var b = l.Remove("7");
            Assert.False(b, "Remove() not existing element returns false");
            Assert.AreEqual(new[] { "1", "2" }, l.ToArray(), "Remove() not existing does not change the List");

            b = l.Remove("2");
            Assert.True(b, "Remove() existing element returns true");
            Assert.AreEqual(new[] { "1" }, l.ToArray(), "Remove() not existing changes the List");
        }

        // Bridge[#338]
        [Test(Name = "#338", ExpectedCount = 1)]
        public static void N338()
        {
            var l = new List<string>(1000);

            var b = l is IList<string>;

            Assert.True(b, "List<T> declares it implemets IList<T>");
        }

        // Bridge[#339]
        [Test(Name = "#339", ExpectedCount = 2)]
        public static void N339()
        {
            var c = Comparer<int>.Default;

            Assert.True(c != null, "Comparer<int>.Default works");
            Assert.True(c is IComparer<int>, "Comparer<T> declares it implemets IComparer<T>");
        }

        // Bridge[#340]
        [Test(Name = "#340", ExpectedCount = 6)]
        public static void N340()
        {
            var c = EqualityComparer<int>.Default;

            Assert.True(c != null, "EqualityComparer<int>.Default works");
            Assert.True(c.Equals(10, 10), "EqualityComparer<int>.Default.Equals(10, 10) works");
            Assert.False(c.Equals(10, 11), "EqualityComparer<int>.Default.Equals(10, 11) works");

            var s = EqualityComparer<string>.Default;
            Assert.True(s != null, "EqualityComparer<string>.Default works");
            Assert.True(s.Equals("a", "a"), "EqualityComparer<string>.Default.Equals(\"a\", \"a\") works");
            Assert.False(s.Equals("a", "b"), "EqualityComparer<string>.Default.Equals(\"a\", \"b\") works");
        }

        // Bridge[#341]
        [Test(Name = "#341", ExpectedCount = 4)]
        public static void N341()
        {
            var o11 = new object();
            var o12 = new object();
            var b1 = EqualityComparer<object>.Default.Equals(o11, o12);
            Assert.False(b1, "EqualityComparer<object>.Default.Equals(o11, o12) works");

            var o21 = new
            {
                i = 7
            };
            var o22 = new
            {
                i = 7
            };
            var b2 = EqualityComparer<object>.Default.Equals(o21, o22);
            Assert.True(b2, "EqualityComparer<object>.Default.Equals(o21, o22) works");

            var o31 = new Bridge341A
            {
                Str = "String"
            };
            var o32 = new Bridge341A
            {
                Str = "String"
            };
            var b3 = EqualityComparer<object>.Default.Equals(o31, o32);
            Assert.False(b3, "EqualityComparer<object>.Default.Equals(o31, o32) works");

            var o41 = new Bridge341B
            {
                Str = "String"
            };
            var o42 = new Bridge341B
            {
                Str = "String"
            };
            var b4 = EqualityComparer<object>.Default.Equals(o41, o42);
            Assert.True(b4, "EqualityComparer<object>.Default.Equals(o41, o42) works");
        }

        // Bridge[#342]
        [Test(Name = "#342", ExpectedCount = 2)]
        public static void N342()
        {
            var dictionary = new Bridge342(new Dictionary<int, string> { { 3, "b" }, { 6, "z" }, { 9, "x" } });

            var interfacedDictionary = (IDictionary<int, string>)dictionary;

            Assert.AreEqual("z", interfacedDictionary[6], "IDictionary getter works");
            Assert.Throws(() =>
            {
                var r = interfacedDictionary[1];
            }, "IDictionary getter throws exception when incorrect key used");
        }

        // Not C# API
        //// Bridge[#349]
        //[Test(Name = "#349", ExpectedCount = 5)]
        //public static void N349()
        //{
        //    DateTime date;
        //    var culture = new System.Globalization.CultureInfo("ru-RU");

        //    Assert.True(culture != null, "Created CultureInfo(\"ru-RU\")");

        //    var parsed = DateTime.TryParse("22.08.2015", culture, out date);
        //    Assert.True(parsed, "Parsed \"22.08.2015\"");
        //    Assert.AreEqual(2015, date.Year, "TryParse works Year");
        //    Assert.AreEqual(8, date.Month, "TryParse works Month");
        //    Assert.AreEqual(22, date.Day, "TryParse works Day");
        //}

        // Bridge[#377]
        [Test(Name = "#377", ExpectedCount = 6)]
        public static void N377()
        {
            var objectLiteralInstance = new Bridge377
            {
                field1 = "field1 value",
                field3 = 7
            };

            Assert.AreEqual(true, objectLiteralInstance.HasOwnProperty("field1"), "ObjectLiteral's field with an explicit value is emitted");
            Assert.AreEqual("field1 value", objectLiteralInstance.field1, "ObjectLiteral's field with an explicit value is emitted correctly");

            Assert.AreEqual(true, objectLiteralInstance.HasOwnProperty("field3"), "ObjectLiteral's field with an explicit value is emitted");
            Assert.AreEqual(7, objectLiteralInstance.field3, "ObjectLiteral's field with an explicit value is emitted correctly");

            Assert.AreEqual(false, objectLiteralInstance.HasOwnProperty("field2"), "ObjectLiteral's field without an explicit value is not emitted");
            Assert.AreEqual(false, objectLiteralInstance.HasOwnProperty("field4"), "ObjectLiteral's field without an explicit value is not emitted");
        }

        // Bridge[#383]
        [Test(Name = "#383", ExpectedCount = 2)]
        public static void N383()
        {
            var person1 = new Person383()
            {
                Name = "Johnny"
            };
            var msg1 = person1.DoSomething();

            Assert.AreEqual("Johnny", msg1, "Instance extention Johnny");

            var person2 = new Person383()
            {
                Name = "Madison"
            };
            var msg2 = Bridge383.DoSomething(person2);

            Assert.AreEqual("Madison", msg2, "Static extention Madison");
        }

        // Bridge[#393]
        [Test(Name = "#393", ExpectedCount = 2)]
        public static void N393()
        {
            string a = "testa";
            string b = "testa";

            bool result = a.Equals(b, StringComparison.InvariantCultureIgnoreCase);

            Assert.True(result, "testa testa StringComparison.InvariantCultureIgnoreCase");

            string a1 = "testa";
            string b1 = "testb";

            bool result1 = a1.Equals(b1, StringComparison.InvariantCultureIgnoreCase);

            Assert.False(result1, "testa testb StringComparison.InvariantCultureIgnoreCase");
        }

        // Bridge[#395]
        [Test(Name = "#395", ExpectedCount = 3)]
        public static void N395()
        {
            var _dictOfTests = new Dictionary<string, Bridge395>();

            var tests = new Bridge395[]
            {
                new Bridge395(){Id = "a"},
                new Bridge395(){Id = "b"}
            };

            foreach (var item in tests)
            {
                if (!_dictOfTests.ContainsKey(item.Id))
                {
                    _dictOfTests[item.Id] = item;
                }
            }

            Assert.AreEqual(2, _dictOfTests.Count, "All items added");
            Assert.AreEqual("a", _dictOfTests["a"].Id, "First element is a");
            Assert.AreEqual("b", _dictOfTests["b"].Id, "Second element is b");
        }

        // Bridge[#406]
        [Test(Name = "#406", ExpectedCount = 1)]
        public static void N406()
        {
            const string TESTA = "TESTA";
            const string TESTB = "TESTB";
            const string TESTC = "TESTC";
            const string TESTD = "TESTD";
            const string TESTE = "TESTE";
            const string TESTF = "TESTF";
            const string TESTG = "TESTG";

            var test = TESTD;
            string result = null;
            switch (test)
            {
                case TESTA:
                    result = TESTA;
                    break;

                case TESTB:
                    result = TESTB;
                    break;

                case TESTC:
                    result = TESTC;
                    break;

                case TESTD:
                    result = TESTD;
                    break;

                case TESTE:
                    result = TESTE;
                    break;

                case TESTF:
                    result = TESTF;
                    break;

                case TESTG:
                    result = TESTG;
                    break;
            }

            Assert.AreEqual("TESTD", result, "TESTD");
        }

        // Bridge[#407]
        [Test(Name = "#407", ExpectedCount = 2)]
        public static void N407()
        {
            Bridge407 vec = new Bridge407()
            {
                A = 1
            };
            vec += new Bridge407()
            {
                A = 2
            };

            Assert.AreEqual(3, vec.A, "Vec.A = 3");

            int a = 2;
            a += 5;
            Assert.AreEqual(7, a, "a = 7");
        }

        // Bridge[#409]
        [Test(Name = "#409", ExpectedCount = 2)]
        public static void N409()
        {
            decimal a = Math.Round(3.5M);
            EnsureNumber(a, "4", "Math.Round(3.5M)");

            decimal b = Math.Round(4.5M);
            EnsureNumber(b, "4", "Math.Round(4.5M)");
        }

        private static void EnsureNumber(object actual, string expected, string message)
        {
            Assert.AreEqual(expected, actual.ToString(), message);
        }

        private static void AssertAlmostEqual(double actual, double expected, string message)
        {
            var diff = expected - actual;
            if (diff < 0)
            {
                diff = -diff;
            }

            Assert.True(diff < 1e-8, message + "actual: " + actual + "expeted:" + expected);
        }

        // Bridge[#410]
        [Test(Name = "#410", ExpectedCount = 38)]
        public static void N410()
        {
            // Decimal consts
            var DecimalZero = decimal.Zero;
            var DecimalOne = decimal.One;
            var DecimalMinusOne = decimal.MinusOne;
            var DecimalMaxValue = decimal.MaxValue;
            var DecimalMinValue = decimal.MinValue;

            EnsureNumber(DecimalZero, "0", "DecimalZero");
            EnsureNumber(DecimalOne, "1", "DecimalOne");
            EnsureNumber(DecimalMinusOne, "-1", "DecimalMinusOne");
            EnsureNumber(DecimalMaxValue, "79228162514264337593543950335", "DecimalMaxValue");
            EnsureNumber(DecimalMinValue, "-79228162514264337593543950335", "DecimalMinValue");

            // Decimal consts in expressions
            decimal dz = 0m;
            DecimalZero = decimal.Zero + dz;
            DecimalOne = decimal.One + dz;
            DecimalMinusOne = decimal.MinusOne + dz;
            DecimalMaxValue = decimal.MaxValue + dz;
            DecimalMinValue = decimal.MinValue + dz;

            EnsureNumber(DecimalZero, "0", "DecimalZeroin expression");
            EnsureNumber(DecimalOne, "1", "DecimalOnein expression");
            EnsureNumber(DecimalMinusOne, "-1", "DecimalMinusOnein expression");
            EnsureNumber(DecimalMaxValue, "79228162514264337593543950335", "DecimalMaxValuein expression");
            EnsureNumber(DecimalMinValue, "-79228162514264337593543950335", "DecimalMinValuein expression");

            var numberPositiveInfinity = Script.Get<object>("Number.POSITIVE_INFINITY");
            var numberNegativeInfinity = Script.Get<object>("Number.NEGATIVE_INFINITY");
            var numberNaN = Script.NaN;

            // Double consts
            var DoubleMaxValue = double.MaxValue;
            var DoubleMinValue = double.MinValue;
            var DoubleEpsilon = double.Epsilon;
            var DoubleNegativeInfinity = double.NegativeInfinity;
            var DoublePositiveInfinity = double.PositiveInfinity;
            var DoubleNaN = double.NaN;

            EnsureNumber(DoubleMaxValue, "1.79769313486232E+308", "DoubleMaxValue");
            EnsureNumber(DoubleMinValue, "-1.79769313486232E+308", "DoubleMinValue");
            EnsureNumber(DoubleEpsilon, "4.94065645841247E-324", "DoubleEpsilon");
            Assert.AreEqual(numberNegativeInfinity, DoubleNegativeInfinity, "DoubleNegativeInfinity");
            Assert.AreEqual(numberPositiveInfinity, DoublePositiveInfinity, "DoublePositiveInfinity");
            Assert.AreEqual(numberNaN, DoubleNaN, "DoubleNaN");

            // Double consts in expressions
            double dblz = 0d;
            DoubleMaxValue = double.MaxValue + dblz;
            DoubleMinValue = double.MinValue + dblz;
            DoubleEpsilon = double.Epsilon + dblz;
            DoubleNegativeInfinity = double.NegativeInfinity + dblz;
            DoublePositiveInfinity = double.PositiveInfinity + dblz;
            DoubleNaN = double.NaN + dblz;

            EnsureNumber(DoubleMaxValue, "1.79769313486232E+308", "DoubleMaxValuein expression");
            EnsureNumber(DoubleMinValue, "-1.79769313486232E+308", "DoubleMinValuein expression");
            EnsureNumber(DoubleEpsilon, "4.94065645841247E-324", "DoubleEpsilonin expression");
            Assert.AreEqual(numberNegativeInfinity, DoubleNegativeInfinity, "DoubleNegativeInfinityin expression");
            Assert.AreEqual(numberPositiveInfinity, DoublePositiveInfinity, "DoublePositiveInfinityin expression");
            Assert.AreEqual(numberNaN, DoubleNaN, "DoubleNaNin expression");

            // Math consts
            var MathE = Math.E;
            var MathPI = Math.PI;

            EnsureNumber(MathE, "2.71828182845905", "MathE");
            //IE has Math.LOG2E defined as 1.4426950408889633 instead of standard 1.4426950408889634
            EnsureNumber(MathPI, "3.14159265358979", "MathPI");

            // Math consts in expression
            MathE = Math.E + 0;
            MathPI = Math.PI + 0;

            EnsureNumber(MathE, "2.71828182845905", "MathEin expression");
            //IE has Math.LOG2E defined as 1.4426950408889633 instead of standard 1.4426950408889634
            EnsureNumber(MathPI, "3.14159265358979", "MathPIin expression");

            // Single consts
            var SingleMaxValue = float.MaxValue;
            var SingleMinValue = float.MinValue;
            var SingleEpsilon = float.Epsilon;
            var SingleNaN = float.NaN;
            var SingleNegativeInfinity = float.NegativeInfinity;
            var SinglePositiveInfinity = float.PositiveInfinity;

            EnsureNumber(SingleMaxValue, "3.402823E+38", "SingleMaxValue");
            EnsureNumber(SingleMinValue, "-3.402823E+38", "SingleMinValue");
            EnsureNumber(SingleEpsilon, "1.401298E-45", "SingleEpsilon");
            Assert.AreEqual(numberNaN, SingleNaN, "SingleNaN");
            Assert.AreEqual(numberNegativeInfinity, SingleNegativeInfinity, "SingleNegativeInfinity");
            Assert.AreEqual(numberPositiveInfinity, SinglePositiveInfinity, "SinglePositiveInfinity");

            // Single consts in expression
            float fz = 0;
            SingleMaxValue = float.MaxValue + fz;
            SingleMinValue = float.MinValue + fz;
            SingleEpsilon = float.Epsilon + fz;
            SingleNaN = float.NaN + fz;
            SingleNegativeInfinity = float.NegativeInfinity + fz;
            SinglePositiveInfinity = float.PositiveInfinity + fz;

            EnsureNumber(SingleMaxValue, "3.402823E+38", "SingleMaxValuein expression");
            EnsureNumber(SingleMinValue, "-3.402823E+38", "SingleMinValuein expression");
            EnsureNumber(SingleEpsilon, "1.401298E-45", "SingleEpsilonin expression");
            Assert.AreEqual(numberNaN, SingleNaN, "SingleNaNin expression");
            Assert.AreEqual(numberNegativeInfinity, SingleNegativeInfinity, "SingleNegativeInfinityin expression");
            Assert.AreEqual(numberPositiveInfinity, SinglePositiveInfinity, "SinglePositiveInfinityin expression");
        }

        // Bridge[#418]
        [Test(Name = "#418", ExpectedCount = 1)]
        public static void N418()
        {
            var t = new Bridge418();
            t.Delegate += (i) => i * 2;
            var r = t.CallDelegate(10);

            Assert.AreEqual(20, r, "Delegate added and called var r = t.CallDelegate(10);");
        }

        // Bridge[#422]
        [Test(Name = "#422", ExpectedCount = 3)]
        public static void N422()
        {
            var v0 = Bridge422.first;
            var v100 = Bridge422.next;
            var v101 = Bridge422.afterNext;

            Assert.AreEqual(0, v0, "Bridge422.first");
            Assert.AreEqual(100, v100, "Bridge422.next");
            Assert.AreEqual(101, v101, "Bridge422.afterNext");
        }

        // Bridge[#428]
        [Test(Name = "#428", ExpectedCount = 1)]
        public static void N428()
        {
            var number2 = 11.37m;
            var sum = "0.13 + " + number2;

            Assert.AreEqual("0.13 + 11.37", sum, "0.13 + 11.37");
        }

        // Bridge[#435]
        [Test(Name = "#435", ExpectedCount = 2)]
        public static void N435()
        {
            int i = 0;
            Assert.AreEqual("0.000000E+000", i.Format("E"), "i.Format(\"E\")");
            Assert.AreEqual("a", i.Format("a"), "Test custom formatting in \"use strict\" mode");
        }

        // Bridge[#436]
        [Test(Name = "#436", ExpectedCount = 3)]
        public static void N436()
        {
            var b1 = new Bridge436First();
            Assert.AreEqual("1", b1.ToObject(), "Bridge436First.ToObject()");

            var b2 = new Bridge436Second();
            Assert.AreEqual("12", b2.ToObject(), "Bridge436Second.ToObject()");

            var b3 = new Bridge436Third();
            Assert.AreEqual("123", b3.ToObject(), "Bridge436Third.ToObject()");
        }

        // Bridge[#438]
        [Test(Name = "#438", ExpectedCount = 1)]
        public static void N438()
        {
            List<int> magic = new List<int>() { 0, 1, 2, 3, 4 };
            List<int> epic = magic.GetRange(0, 3);
            Assert.AreEqual("System.Collections.Generic.List`1[[System.Int32, mscorlib]]", epic.GetType().FullName, "epic.GetType().FullName");
        }

        // Bridge[#439]
        [Test(Name = "#439", ExpectedCount = 2)]
        public static void N439()
        {
            var b = new Bridge439();
            string accumulator = string.Empty;
            b.Register((s) =>
            {
                accumulator = accumulator + s;
            });

            b.CallDispatcher("1");
            Assert.AreEqual("1", accumulator, "accumulator 1");

            b.CallDispatcher("2");
            Assert.AreEqual("12", accumulator, "accumulator 12");
        }

        // Bridge[#442]
        [Test(Name = "#442", ExpectedCount = 2)]
        public static void N442()
        {
            decimal a = 3.5M;
            EnsureNumber(a.Round(), "4", "a.Round(3.5M)");

            decimal b = 4.5M;
            EnsureNumber(b.Round(), "4", "b.Round(4.5M)");
        }

        // Bridge[#460]
        [Test(Name = "#460", ExpectedCount = 1)]
        public static void N460()
        {
            double number;

            number = -12345.6789;
            Assert.AreEqual("-12345.6789", number.ToString("G", System.Globalization.CultureInfo.InvariantCulture), "ToString(\"G\") for negative numbers in InvariantCulture");
        }

        // Bridge[#467]
        [Test(Name = "#467", ExpectedCount = 1)]
        public static void N467()
        {
            var a = new Bridge467
            {
                MyProperty = -1
            };

            var b = new Bridge467
            {
                MyProperty = -1
            };

            Assert.AreNotEqual(b.GetHashCode(), a.GetHashCode(), "Call to base.GetHashCode() causes compilation to fail");
        }

        // Bridge[#469]
        [Test(Name = "#469", ExpectedCount = 1)]
        public static void N469()
        {
            var testList = new List<int>();
            testList.Add(5);

            int count = 0;

            for (int i = 0; i < 10; i++)
            {
                if (!testList.Any(x => x == i))
                    continue;

                count++;
            }

            Assert.AreEqual(1, count, "\"continue\" generated correctly");
        }

        // Bridge[#470]
        [Test(Name = "#470", ExpectedCount = 16)]
        public static void N470()
        {
            var a = new Bridge470
            {
                Data = 1
            };
            var b = new Bridge470
            {
                Data = 2
            };
            var c = new Bridge470
            {
                Data = 3
            };

            Assert.AreEqual(false, a.Equals(b), "a.Equals(b)");
            Assert.AreNotEqual(true, a.Equals(new Bridge470
            {
                Data = 1
            }), "a.Equals(new Bridge470 { Data = 1 })");
            Assert.AreEqual(false, a.Equals(null), "a.Equals(null)");

            Assert.AreEqual(true, a.Equals(b, b), "a.Equals(b, b)");
            Assert.AreEqual(true, a.Equals(a, new Bridge470
            {
                Data = 1
            }), "a.Equals(a, new Bridge470 { Data = 1 })");
            Assert.AreEqual(false, a.Equals(a, new Bridge470
            {
                Data = 2
            }), "a.Equals(a, new Bridge470 { Data = 2 })");
            Assert.AreEqual(true, a.Equals(new Bridge470
            {
                Data = 5
            }, new Bridge470
            {
                Data = 5
            }), "new Bridge470 { Data = 5 }, new Bridge470 { Data = 5 }");

            Assert.AreNotEqual(1, a.GetHashCode(), "a.GetHashCode()");
            Assert.AreNotEqual(3, c.GetHashCode(), "c.GetHashCode()");

            Assert.AreEqual(2, a.GetHashCode(b), "a.GetHashCode(b)");
            Assert.AreEqual(3, c.GetHashCode(c), "c.GetHashCode(c)");

            var test1 = new List<Bridge470>();
            test1.Add(a);
            test1.Add(b);
            test1.Add(c);

            var comparer = new Bridge470();

            // EqualityComparer's methods do not handle null values intentionally
            Assert.AreEqual(true, test1.Contains(a, comparer), "test1 Contains a");
            Assert.AreEqual(true, test1.Contains(b, comparer), "test1 Contains b");
            Assert.AreEqual(true, test1.Contains(c, comparer), "test1 Contains c");
            Assert.AreEqual(false, test1.Contains(new Bridge470
            {
                Data = 4
            }, comparer), "test1 Contains 4");
            Assert.AreEqual(false, test1.Contains(new Bridge470
            {
                Data = 5
            }, comparer), "test1 Contains 5");
        }

        [Test(Name = "#499", ExpectedCount = 1)]
        public static void N499()
        {
            var v1 = new Version();
            Assert.AreEqual("System.Version", v1.GetType().FullName, "#499 Version type name");
        }
    }
}