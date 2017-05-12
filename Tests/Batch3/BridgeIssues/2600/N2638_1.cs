using System;
using System.Text.RegularExpressions;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2638A - {0}")]
    public class Bridge2638A
    {
        class BaseClass { }
        class DerivedClass : BaseClass { }

        public interface I1<T>
        {
            int Prop1
            {
                get; set;
            }

            int this[int idx] { get; set; }

            event Action e1;
            int M1();
        }

        public interface I2<in T>
        {
            int Prop1
            {
                get; set;
            }

            int this[int idx] { get; set; }

            event Action e1;
            int M1();
        }

        public class G1<T> : I1<T>
        {
            int I1<T>.this[int idx]
            {
                get
                {
                    return 1;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            int I1<T>.Prop1
            {
                get
                {
                    return 2;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            event Action I1<T>.e1
            {
                add
                {
                    throw new NotImplementedException();
                }

                remove
                {
                    throw new NotImplementedException();
                }
            }

            int I1<T>.M1()
            {
                return 3;
            }
        }

        private static string baseClassAlias = "Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$BaseClass";
        private static string stringAlias = "System$String";

        [Test]
        public void TestG1()
        {
            var c = new G1<BaseClass>();
            I1<BaseClass> i = c;

            Assert.AreEqual(1, i[0]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$getItem"]);
            Assert.Null(c["getItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + baseClassAlias + "$getItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$setItem"]);
            Assert.Null(c["setItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + baseClassAlias + "$setItem"]);

            Assert.AreEqual(2, i.Prop1);
            Assert.AreEqual(i.Prop1, c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$Prop1"]);
            Assert.Null(c["Prop1"]);
            Assert.AreEqual(i.Prop1, c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + baseClassAlias + "$Prop1"]);

            Assert.Throws<NotImplementedException>(() => { i.e1 += () => { }; });
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$adde1"]);
            Assert.Null(c["adde1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + baseClassAlias + "$adde1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$removee1"]);
            Assert.Null(c["removee1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + baseClassAlias + "$removee1"]);

            Assert.AreEqual(3, i.M1());
            Assert.Null(c["M1"]);
            Assert.AreEqual(i.M1(), c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$M1"].As<Func<int>>()());
            Assert.AreEqual(i.M1(), c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + baseClassAlias + "$M1"].As<Func<int>>()());
        }

        public class G2<T> : I1<T>
        {
            public int this[int idx]
            {
                get
                {
                    return 1;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            public int Prop1
            {
                get
                {
                    return 2;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            public event Action e1
            {
                add { throw new NotImplementedException(); }
                remove { throw new NotImplementedException(); }
            }

            public int M1()
            {
                return 3;
            }
        }

        [Test]
        public void TestG2()
        {
            var c = new G2<BaseClass>();
            I1<BaseClass> i = c;

            Assert.AreEqual(1, i[0]);
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$getItem"]);
            Assert.NotNull(c["getItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + baseClassAlias + "$getItem"]);
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$setItem"]);
            Assert.NotNull(c["setItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + baseClassAlias + "$setItem"]);

            Assert.AreEqual(2, i.Prop1);
            Assert.AreEqual(i.Prop1, c["Prop1"]);
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$Prop1"]);
            Assert.AreEqual(i.Prop1, c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + baseClassAlias + "$Prop1"]);

            Assert.Throws<NotImplementedException>(() => { i.e1 += () => { }; });
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$adde1"]);
            Assert.NotNull(c["adde1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + baseClassAlias + "$adde1"]);
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$removee1"]);
            Assert.NotNull(c["removee1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + baseClassAlias + "$removee1"]);

            Assert.AreEqual(3, i.M1());
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$M1"]);
            Assert.AreEqual(i.M1(), c["M1"].As<Func<int>>()());
            Assert.AreEqual(i.M1(), c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + baseClassAlias + "$M1"].As<Func<int>>()());
        }

        public class G3 : I1<string>
        {
            int I1<string>.this[int idx]
            {
                get
                {
                    return 1;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            int I1<string>.Prop1
            {
                get
                {
                    return 2;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            event Action I1<string>.e1
            {
                add
                {
                    throw new NotImplementedException();
                }

                remove
                {
                    throw new NotImplementedException();
                }
            }

            int I1<string>.M1()
            {
                return 3;
            }
        }

        [Test]
        public void TestG3()
        {
            var c = new G3();
            I1<string> i = c;

            Assert.AreEqual(1, i[0]);
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$getItem"]);
            Assert.Null(c["getItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + stringAlias + "$getItem"]);
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$setItem"]);
            Assert.Null(c["setItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + stringAlias + "$setItem"]);

            Assert.AreEqual(2, i.Prop1);
            Assert.Null(c["Prop1"]);
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$Prop1"]);
            Assert.AreEqual(i.Prop1, c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + stringAlias + "$Prop1"]);

            Assert.Throws<NotImplementedException>(() => { i.e1 += () => { }; });
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$adde1"]);
            Assert.Null(c["adde1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + stringAlias + "$adde1"]);
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$removee1"]);
            Assert.Null(c["removee1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + stringAlias + "$removee1"]);

            Assert.AreEqual(3, i.M1());
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$M1"]);
            Assert.Null(c["M1"]);
            Assert.AreEqual(i.M1(), c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + stringAlias + "$M1"].As<Func<int>>()());
        }

        public class G4 : I1<string>
        {
            public int this[int idx]
            {
                get
                {
                    return 1;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            public int Prop1
            {
                get
                {
                    return 2;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            public event Action e1
            {
                add { throw new NotImplementedException(); }
                remove { throw new NotImplementedException(); }
            }

            public int M1()
            {
                return 3;
            }
        }

        [Test]
        public void TestG4()
        {
            var c = new G4();
            I1<string> i = c;

            Assert.AreEqual(1, i[0]);
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$getItem"]);
            Assert.NotNull(c["getItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + stringAlias + "$getItem"]);
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$setItem"]);
            Assert.NotNull(c["setItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + stringAlias + "$setItem"]);

            Assert.AreEqual(2, i.Prop1);
            Assert.AreEqual(i.Prop1, c["Prop1"]);
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$Prop1"]);
            Assert.AreEqual(i.Prop1, c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + stringAlias + "$Prop1"]);

            Assert.Throws<NotImplementedException>(() => { i.e1 += () => { }; });
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$adde1"]);
            Assert.NotNull(c["adde1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + stringAlias + "$adde1"]);
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$removee1"]);
            Assert.NotNull(c["removee1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + stringAlias + "$removee1"]);

            Assert.AreEqual(3, i.M1());
            Assert.Null(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$M1"]);
            Assert.AreEqual(i.M1(), c["M1"].As<Func<int>>()());
            Assert.AreEqual(i.M1(), c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I1$1$" + stringAlias + "$M1"].As<Func<int>>()());
        }

        public class G5<T> : I2<T>
        {
            int I2<T>.this[int idx]
            {
                get
                {
                    return 1;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            int I2<T>.Prop1
            {
                get
                {
                    return 2;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            event Action I2<T>.e1
            {
                add
                {
                    throw new NotImplementedException();
                }

                remove
                {
                    throw new NotImplementedException();
                }
            }

            int I2<T>.M1()
            {
                return 3;
            }
        }

        [Test]
        public void TestG5()
        {
            var c = new G5<BaseClass>();
            I2<BaseClass> i = c;
            I2<DerivedClass> id = c;

            Assert.AreEqual(1, i[0]);
            Assert.AreEqual(1, id[0]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$getItem"]);
            Assert.Null(c["getItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$getItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$setItem"]);
            Assert.Null(c["setItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$setItem"]);

            Assert.AreEqual(2, i.Prop1);
            Assert.AreEqual(2, id.Prop1);
            Assert.AreEqual(i.Prop1, c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$Prop1"]);
            Assert.Null(c["Prop1"]);
            Assert.AreEqual(i.Prop1, c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$Prop1"]);

            Assert.Throws<NotImplementedException>(() => { i.e1 += () => { }; });
            Assert.Throws<NotImplementedException>(() => { id.e1 += () => { }; });
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$adde1"]);
            Assert.Null(c["adde1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$adde1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$removee1"]);
            Assert.Null(c["removee1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$removee1"]);

            Assert.AreEqual(3, i.M1());
            Assert.AreEqual(3, id.M1());
            Assert.Null(c["M1"]);
            Assert.AreEqual(i.M1(), c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$M1"].As<Func<int>>()());
            Assert.AreEqual(i.M1(), c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$M1"].As<Func<int>>()());
        }

        public class G6<T> : I2<T>
        {
            public int this[int idx]
            {
                get
                {
                    return 1;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            public int Prop1
            {
                get
                {
                    return 2;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            public event Action e1
            {
                add { throw new NotImplementedException(); }
                remove { throw new NotImplementedException(); }
            }

            public int M1()
            {
                return 3;
            }
        }

        [Test]
        public void TestG6()
        {
            var c = new G6<BaseClass>();
            I2<BaseClass> i = c;
            I2<DerivedClass> id = c;

            Assert.AreEqual(1, i[0]);
            Assert.AreEqual(1, id[0]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$getItem"]);
            Assert.NotNull(c["getItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$getItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$setItem"]);
            Assert.NotNull(c["setItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$setItem"]);

            Assert.AreEqual(2, i.Prop1);
            Assert.AreEqual(2, id.Prop1);
            Assert.AreEqual(i.Prop1, c["Prop1"]);
            Assert.AreEqual(i.Prop1, c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$Prop1"]);
            Assert.AreEqual(i.Prop1, c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$Prop1"]);

            Assert.Throws<NotImplementedException>(() => { i.e1 += () => { }; });
            Assert.Throws<NotImplementedException>(() => { id.e1 += () => { }; });
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$adde1"]);
            Assert.NotNull(c["adde1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$adde1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$removee1"]);
            Assert.NotNull(c["removee1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$removee1"]);

            Assert.AreEqual(3, i.M1());
            Assert.AreEqual(3, id.M1());
            Assert.AreEqual(i.M1(), c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$M1"].As<Func<int>>()());
            Assert.AreEqual(i.M1(), c["M1"].As<Func<int>>()());
            Assert.AreEqual(i.M1(), c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$M1"].As<Func<int>>()());
        }

        public class G7 : I2<BaseClass>
        {
            int I2<BaseClass>.this[int idx]
            {
                get
                {
                    return 1;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            int I2<BaseClass>.Prop1
            {
                get
                {
                    return 2;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            event Action I2<BaseClass>.e1
            {
                add
                {
                    throw new NotImplementedException();
                }

                remove
                {
                    throw new NotImplementedException();
                }
            }

            int I2<BaseClass>.M1()
            {
                return 3;
            }
        }

        [Test]
        public void TestG7()
        {
            var c = new G7();
            I2<BaseClass> i = c;
            I2<DerivedClass> id = c;

            Assert.AreEqual(1, i[0]);
            Assert.AreEqual(1, id[0]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$getItem"]);
            Assert.Null(c["getItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$getItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$setItem"]);
            Assert.Null(c["setItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$setItem"]);

            Assert.AreEqual(2, i.Prop1);
            Assert.AreEqual(2, id.Prop1);
            Assert.Null(c["Prop1"]);
            Assert.AreEqual(i.Prop1, c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$Prop1"]);
            Assert.AreEqual(i.Prop1, c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$Prop1"]);

            Assert.Throws<NotImplementedException>(() => { i.e1 += () => { }; });
            Assert.Throws<NotImplementedException>(() => { id.e1 += () => { }; });
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$adde1"]);
            Assert.Null(c["adde1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$adde1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$removee1"]);
            Assert.Null(c["removee1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$removee1"]);

            Assert.AreEqual(3, i.M1());
            Assert.AreEqual(3, id.M1());
            Assert.AreEqual(i.M1(), c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$M1"].As<Func<int>>()());
            Assert.Null(c["M1"]);
            Assert.AreEqual(i.M1(), c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$M1"].As<Func<int>>()());
        }

        public class G8 : I2<BaseClass>
        {
            public int this[int idx]
            {
                get
                {
                    return 1;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            public int Prop1
            {
                get
                {
                    return 2;
                }

                set
                {
                    throw new NotImplementedException();
                }
            }

            public event Action e1
            {
                add { throw new NotImplementedException(); }
                remove { throw new NotImplementedException(); }
            }

            public int M1()
            {
                return 3;
            }
        }

        [Test]
        public void TestG8()
        {
            var c = new G8();
            I2<BaseClass> i = c;
            I2<DerivedClass> id = c;

            Assert.AreEqual(1, i[0]);
            Assert.AreEqual(1, id[0]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$getItem"]);
            Assert.NotNull(c["getItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$getItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$setItem"]);
            Assert.NotNull(c["setItem"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$setItem"]);

            Assert.AreEqual(2, i.Prop1);
            Assert.AreEqual(2, id.Prop1);
            Assert.AreEqual(i.Prop1, c["Prop1"]);
            Assert.AreEqual(i.Prop1, c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$Prop1"]);
            Assert.AreEqual(i.Prop1, c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$Prop1"]);

            Assert.Throws<NotImplementedException>(() => { i.e1 += () => { }; });
            Assert.Throws<NotImplementedException>(() => { id.e1 += () => { }; });
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$adde1"]);
            Assert.NotNull(c["adde1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$adde1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$removee1"]);
            Assert.NotNull(c["removee1"]);
            Assert.NotNull(c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$removee1"]);

            Assert.AreEqual(3, i.M1());
            Assert.AreEqual(3, id.M1());
            Assert.AreEqual(i.M1(), c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$M1"].As<Func<int>>()());
            Assert.AreEqual(i.M1(), c["M1"].As<Func<int>>()());
            Assert.AreEqual(i.M1(), c["Bridge$ClientTest$Batch3$BridgeIssues$Bridge2638A$I2$1$" + baseClassAlias + "$M1"].As<Func<int>>()());
        }
    }
}