using Bridge.Test;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1025 - {0}")]
    public class Bridge1025
    {
        public class C1 : IEquatable<int>, IEquatable<string>
        {
            public int intField;
            public string strField;

            public bool Equals(int other)
            {
                this.intField = other;
                return true;
            }

            public bool Equals(string other)
            {
                this.strField = other;
                return false;
            }
        }

        public interface I1
        {
            int Prop1 { get; set; }
        }

        public interface I2
        {
            int Prop1 { get; set; }
        }

        public class C2 : I1, I2
        {
            private int i1;
            private int i2;

            int I1.Prop1
            {
                get { return this.i1; }
                set { this.i1 = value - 1; }
            }

            int I2.Prop1
            {
                get { return this.i2; }
                set { this.i2 = value + 1; }
            }
        }

        public class C3 : I1, I2
        {
            public int Prop1 { get; set; }
        }

        public interface I3
        {
            string Foo();
        }

        public class C4 : I3
        {
            public string Foo()
            {
                return "C4";
            }
        }

        public class C5 : C4, I3
        {
            string I3.Foo()
            {
                return "C5";
            }
        }

        public interface I4
        {
            string Foo();
        }

        public class C6
        {
            public string Foo()
            {
                return "C6";
            }
        }

        public class C7 : C6, I4
        {
            public new string Foo()
            {
                return "C7";
            }
        }

        public interface I5<T>
        {
            T Foo();
        }

        public interface I6<T>
        {
            T Foo();
        }

        public class C8 : I5<int>, I5<String>
        {
            int I5<int>.Foo()
            {
                return 1;
            }

            string I5<string>.Foo()
            {
                return "test";
            }
        }

        public class C9<T1, T2> : I5<T1>, I6<T2>
        {
            public string flag;

            T1 I5<T1>.Foo()
            {
                this.flag = "I5";
                return default(T1);
            }

            T2 I6<T2>.Foo()
            {
                this.flag = "I6";
                return default(T2);
            }
        }

        public interface I7<T1, T2, T3>
        {
            int Foo();
        }

        public class C10 : I7<int, string, bool>
        {
            public int Foo()
            {
                return 1;
            }
        }

        public class C11<T1, T2, T3> : I7<T1, T2, T3>
        {
            public int Foo()
            {
                return 1;
            }
        }

        public class C12<T1, T2, T3> : I7<I5<T1>, I5<T2>, I5<T3>>
        {
            public int Foo()
            {
                return 1;
            }
        }

        public class C13<T1, T2, T3> : I7<I5<I5<T1>>, I5<I5<T2>>, I5<I5<T3>>>
        {
            public int Foo()
            {
                return 1;
            }
        }

        public interface I8
        {
            int this[int index] { get; set; }

            int Prop1 { get; }

            string Prop2 { get; set; }

            event Action Event1;

            void Invoke();
        }

        public interface I9<T> : I8
        {
            new void Invoke();
        }

        public class C14 : I8
        {
            public int tmp;

            public int this[int index]
            {
                get { return index; }
                set { this.tmp = value; }
            }

            public int Prop1
            {
                get { return 2; }
            }

            public string Prop2 { get; set; }

            public event Action Event1;

            public void Invoke()
            {
                this.Event1();
            }
        }

        public class C15 : C14, I9<int>
        {
        }

        public interface I10
        {
            void Foo();
        }

        public class C16 : I10
        {
            public string log;

            public void Foo()
            {
                this.log = "C16";
            }
        }

        public class C17 : C16
        {
            public new void Foo()
            {
                this.log = "C17";
            }
        }

        public class C18
        {
            public string log;

            public void Foo()
            {
                this.log = "C18";
            }
        }

        public class C19 : C18, I10
        {
            public new void Foo()
            {
                this.log = "C19";
            }
        }

        public class C20 : I10
        {
            public string log;

            public virtual void Foo()
            {
                this.log = "C20";
            }
        }

        public class C21 : C20
        {
            public override void Foo()
            {
                this.log = "C21";
            }
        }

        public class C22
        {
            public string log;

            public void Foo()
            {
                this.log = "C22";
            }
        }

        public class C23 : C22
        {
        }

        public class C24 : C23, I10
        {
        }

        [External]
        public interface I11
        {
            [AccessorsIndexer]
            int this[string index] {[Name("get")] get;[Name("set")] set; }

            string this[int index] { get; set; }

            int Prop1 { get; }

            string Prop2 { get; set; }

            event Action Event1;

            void Foo();
        }

        [Test]
        public static void TestC1()
        {
            var c1 = new C1();
            IEquatable<int> i1 = c1;
            IEquatable<string> i2 = c1;

            Assert.True(i1.Equals(5));
            Assert.AreEqual(5, c1.intField);

            Assert.False(i2.Equals("6"));
            Assert.AreEqual("6", c1.strField);
        }

        [Test]
        public static void TestC2()
        {
            var c2 = new C2();
            I1 i1 = c2;
            I2 i2 = c2;

            i1.Prop1 = 10;
            Assert.AreEqual(9, i1.Prop1);

            i2.Prop1 = 10;
            Assert.AreEqual(11, i2.Prop1);
        }

        [Test]
        public static void TestC3()
        {
            var c3 = new C3();
            I1 i1 = c3;
            I2 i2 = c3;

            i1.Prop1 = 10;
            Assert.AreEqual(10, i1.Prop1);
            Assert.AreEqual(10, i2.Prop1);
            Assert.AreEqual(10, c3.Prop1);

            i2.Prop1 = 11;
            Assert.AreEqual(11, i1.Prop1);
            Assert.AreEqual(11, i2.Prop1);
            Assert.AreEqual(11, c3.Prop1);

            c3.Prop1 = 12;
            Assert.AreEqual(12, i1.Prop1);
            Assert.AreEqual(12, i2.Prop1);
            Assert.AreEqual(12, c3.Prop1);
        }

        [Test]
        public static void TestI3()
        {
            I3 i;

            var a = new C4();
            i = a;
            Assert.AreEqual("C4", a.Foo());
            Assert.AreEqual("C4", i.Foo());

            var b = new C5();
            i = b;
            Assert.AreEqual("C4", b.Foo());
            Assert.AreEqual("C5", i.Foo());
        }

        [Test]
        public static void TestI4()
        {
            var a = new C7();
            I4 i = a;
            Assert.AreEqual("C7", a.Foo());
            Assert.AreEqual("C7", i.Foo());
            Assert.AreEqual("C6", ((C6)a).Foo());
        }

        [Test]
        public static void TestI5()
        {
            var a = new C8();
            I5<int> i1 = a;
            I5<string> i2 = a;

            Assert.AreEqual(1, i1.Foo());
            Assert.AreEqual("test", i2.Foo());
        }

        [Test]
        public static void TestI6()
        {
            var a = new C9<int, string>();
            I5<int> i1 = a;
            I6<string> i2 = a;

            i1.Foo();
            Assert.AreEqual("I5", a.flag);

            i2.Foo();
            Assert.AreEqual("I6", a.flag);
        }

        [Test]
        public static void TestI7()
        {
            var a = new C10();
            I7<int, string, bool> i = a;
            Assert.AreEqual(1, i.Foo());

            var a1 = new C11<int, string, bool>();
            i = a1;
            Assert.AreEqual(1, i.Foo());

            var a2 = new C12<int, string, bool>();
            I7<I5<int>, I5<string>, I5<bool>> i2 = a2;
            Assert.AreEqual(1, i2.Foo());

            var a3 = new C13<int, string, bool>();
            I7<I5<I5<int>>, I5<I5<string>>, I5<I5<bool>>> i3 = a3;
            Assert.AreEqual(1, i3.Foo());
        }

        [Test]
        public static void TestI8()
        {
            var c15 = new C15();
            I8 i8 = c15;
            I9<int> i9 = c15;

            Assert.AreEqual(11, i8[11]);
            i8[0] = 15;
            Assert.AreEqual(15, c15.tmp);
            Assert.AreEqual(2, i8.Prop1);
            i8.Prop2 = "test";
            Assert.AreEqual("test", i8.Prop2);
            var i = 0;
            i8.Event1 += () => i = 9;
            i8.Invoke();
            Assert.AreEqual(9, i);

            i = 0;
            i9.Invoke();
            Assert.AreEqual(9, i);
        }

        [Test]
        public static void TestI10()
        {
            var c17 = new C17();
            C16 c16 = c17;
            I10 i10 = c17;

            c17.Foo();
            Assert.AreEqual("C17", c17.log);
            c17.log = null;

            c16.Foo();
            Assert.AreEqual("C16", c17.log);
            c17.log = null;

            i10.Foo();
            Assert.AreEqual("C16", c17.log);
        }

        [Test]
        public static void TestI10_1()
        {
            var c19 = new C19();
            C18 c18 = c19;
            I10 i10 = c19;

            c19.Foo();
            Assert.AreEqual("C19", c19.log);
            c19.log = null;

            c18.Foo();
            Assert.AreEqual("C18", c19.log);
            c19.log = null;

            i10.Foo();
            Assert.AreEqual("C19", c19.log);
        }

        [Test]
        public static void TestI10_2()
        {
            var c21 = new C21();
            C20 c20 = c21;
            I10 i10 = c21;

            c21.Foo();
            Assert.AreEqual("C21", c21.log);
            c21.log = null;

            c20.Foo();
            Assert.AreEqual("C21", c21.log);
            c21.log = null;

            i10.Foo();
            Assert.AreEqual("C21", c21.log);

            var c24 = new C24();
            i10 = c24;

            i10.Foo();
            Assert.AreEqual("C22", c24.log);
        }

        private static I11 GetI11()
        {
            var externalInstance = Script.ToPlainObject(new
            {
                get = (Func<int>)(() => 1),
                set = (Action<string>)(s => { }),
                getProp1 = (Func<int>)(() => 2),
                getProp2 = (Func<string>)(() => "test"),
                setProp2 = (Action<string>)(s => { }),
                addEvent1 = (Action<string>)(s => { }),
                foo = (Action)(() => { })
            });

            return externalInstance.As<I11>();
        }

        [Test]
        public static void TestI11()
        {
            I11 i11 = Bridge1025.GetI11();

            Assert.AreEqual(1, i11[""]);
            i11[i11[1]] = 1;
            i11[1] = "";
            Assert.AreEqual(2, i11.Prop1);
            Assert.AreEqual("test", i11.Prop2);
            i11.Prop2 = "";
            i11.Foo();
            i11.Event1 += () => { };
        }

        [Test]
        public static void TestI11_1()
        {
            Assert.AreEqual(1, Bridge1025.GetI11()[""]);
            Bridge1025.GetI11()[Bridge1025.GetI11()[1]] = 1;
            Bridge1025.GetI11()[1] = "";
            Assert.AreEqual(2, Bridge1025.GetI11().Prop1);
            Assert.AreEqual("test", Bridge1025.GetI11().Prop2);
            Bridge1025.GetI11().Prop2 = "";
            Bridge1025.GetI11().Foo();
            Bridge1025.GetI11().Event1 += () => { };
        }
    }
}