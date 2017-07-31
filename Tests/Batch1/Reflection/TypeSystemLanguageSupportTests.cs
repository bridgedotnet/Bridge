using Bridge.Test.NUnit;
using System;
using Bridge.Html5;

#pragma warning disable 184, 458, 1720

namespace Bridge.ClientTest.Reflection
{
    [Category(Constants.MODULE_REFLECTION)]
    [TestFixture(TestNameFormat = "Reflection - TypeSystemLanguageSupport {0}")]
    public class TypeSystemLanguageSupportTests
    {
        public class C1
        {
        }

        public class C2<T>
        {
        }

        public interface I1
        {
        }

        public interface I2<T1>
        {
        }

        public interface I3 : I1
        {
        }

        public interface I4
        {
        }

        public interface I5<T1> : I2<T1>
        {
        }

        public interface I6<out T>
        {
        }

        public interface I7<in T>
        {
        }

        public interface I8<out T1, in T2> : I6<T1>, I7<T2>
        {
        }

        public interface I9<T1, out T2>
        {
        }

        public interface I10<out T1, in T2> : I8<T1, T2>
        {
        }

        public class D1 : C1, I1
        {
        }

        public class D2<T> : C2<T>, I2<T>, I1
        {
        }

        public class D3 : C2<int>, I2<string>
        {
        }

        public class D4 : I3, I4
        {
        }

        public class X1 : I1
        {
        }

        public class X2 : X1
        {
        }

        public class Y1<T> : I6<T>
        {
        }

        public class Y1X1 : Y1<X1>
        {
        }

        public class Y1X2 : Y1<X2>
        {
        }

        public class Y2<T> : I7<T>
        {
        }

        public class Y2X1 : Y2<X1>
        {
        }

        public class Y2X2 : Y2<X2>
        {
        }

        public class Y3<T1, T2> : I8<T1, T2>
        {
        }

        public class Y3X1X1 : Y3<X1, X1>
        {
        }

        public class Y3X1X2 : Y3<X1, X2>
        {
        }

        public class Y3X2X1 : Y3<X2, X1>
        {
        }

        public class Y3X2X2 : Y3<X2, X2>
        {
        }

        public class Y4<T1, T2> : I9<T1, T2>
        {
        }

        public class Y5<T1, T2> : I6<I8<T1, T2>>
        {
        }

        public class Y6<T1, T2> : I7<I8<T1, T2>>
        {
        }

        public enum E1
        {
        }

        public enum E2
        {
        }

        [ObjectLiteral]
        public class OL
        {
        }

        public class BS
        {
            public int X;

            public BS(int x)
            {
                X = x;
            }
        }

        public class DS : BS
        {
            public DS() : base(0)
            {
            }
        }

        public class CI
        {
        }

        private static bool CanConvert<T>(object arg)
        {
            try
            {
#pragma warning disable 219
                var x = (T)arg;
#pragma warning restore 219
                return x == null || x != null; // return true;
            }
            catch
            {
                return false;
            }
        }

        private class K
        {
        }

        private class C10<T> where T : K
        {
        }

        private class C11<T> : C10<T> where T : K
        {
        }

        private class C12 : C11<K>
        {
        }

        [Test]
        public void TypeIsWorksForReferenceTypes()
        {
            Assert.False((object)new object() is C1, "#1");
            Assert.True((object)new C1() is object, "#2");
            Assert.False((object)new object() is I1, "#3");
            Assert.False((object)new C1() is D1, "#4");
            Assert.True((object)new D1() is C1, "#5");
            Assert.True((object)new D1() is I1, "#6");
            Assert.True((object)new D2<int>() is C2<int>, "#7");
            Assert.False((object)new D2<int>() is C2<string>, "#8");
            Assert.True((object)new D2<int>() is I2<int>, "#9");
            Assert.False((object)new D2<int>() is I2<string>, "#10");
            Assert.True((object)new D2<int>() is I1, "#11");
            Assert.False((object)new D3() is C2<string>, "#12");
            Assert.True((object)new D3() is C2<int>, "#13");
            Assert.False((object)new D3() is I2<int>, "#14");
            Assert.True((object)new D3() is I2<string>, "#15");
            Assert.True((object)new D4() is I1, "#16");
            Assert.True((object)new D4() is I3, "#17");
            Assert.True((object)new D4() is I4, "#18");
            Assert.True((object)new X2() is I1, "#19");
            Assert.True((object)new E2() is E1, "#20");
            Assert.True((object)new E1() is int, "#21");
            Assert.True((object)new E1() is object, "#22");
            Assert.False((object)new Y1<X1>() is I7<X1>, "#23");
            Assert.True((object)new Y1<X1>() is I6<X1>, "#24");
            Assert.True((object)new Y1X1() is I6<X1>, "#25");
            Assert.False((object)new Y1<X1>() is I6<X2>, "#26");
            Assert.False((object)new Y1X1() is I6<X2>, "#27");
            Assert.True((object)new Y1<X2>() is I6<X1>, "#28");
            Assert.True((object)new Y1X2() is I6<X1>, "#29");
            Assert.True((object)new Y1<X2>() is I6<X2>, "#30");
            Assert.True((object)new Y1X2() is I6<X2>, "#31");
            Assert.False((object)new Y2<X1>() is I6<X1>, "#32");
            Assert.True((object)new Y2<X1>() is I7<X1>, "#33");
            Assert.True((object)new Y2X1() is I7<X1>, "#34");
            Assert.True((object)new Y2<X1>() is I7<X2>, "#35");
            Assert.True((object)new Y2X1() is I7<X2>, "#36");
            Assert.False((object)new Y2<X2>() is I7<X1>, "#37");
            Assert.False((object)new Y2X2() is I7<X1>, "#38");
            Assert.True((object)new Y2<X2>() is I7<X2>, "#39");
            Assert.True((object)new Y2X2() is I7<X2>, "#40");
            Assert.False((object)new Y3<X1, X1>() is I1, "#41");
            Assert.True((object)new Y3<X1, X1>() is I8<X1, X1>, "#42");
            Assert.True((object)new Y3X1X1() is I8<X1, X1>, "#43");
            Assert.False((object)new Y3<X1, X2>() is I8<X1, X1>, "#44");
            Assert.False((object)new Y3X1X2() is I8<X1, X1>, "#45");
            Assert.True((object)new Y3<X2, X1>() is I8<X1, X1>, "#46");
            Assert.True((object)new Y3X2X1() is I8<X1, X1>, "#47");
            Assert.False((object)new Y3<X2, X2>() is I8<X1, X1>, "#48");
            Assert.False((object)new Y3X2X2() is I8<X1, X1>, "#49");
            Assert.True((object)new Y3<X1, X1>() is I8<X1, X2>, "#50");
            Assert.True((object)new Y3X1X1() is I8<X1, X2>, "#51");
            Assert.True((object)new Y3<X1, X2>() is I8<X1, X2>, "#52");
            Assert.True((object)new Y3X1X2() is I8<X1, X2>, "#53");
            Assert.True((object)new Y3<X2, X1>() is I8<X1, X2>, "#54");
            Assert.True((object)new Y3X2X1() is I8<X1, X2>, "#55");
            Assert.True((object)new Y3<X2, X2>() is I8<X1, X2>, "#56");
            Assert.True((object)new Y3X2X2() is I8<X1, X2>, "#57");
            Assert.False((object)new Y3<X1, X1>() is I8<X2, X1>, "#58");
            Assert.False((object)new Y3X1X1() is I8<X2, X1>, "#59");
            Assert.False((object)new Y3<X1, X2>() is I8<X2, X1>, "#60");
            Assert.False((object)new Y3X1X2() is I8<X2, X1>, "#61");
            Assert.True((object)new Y3<X2, X1>() is I8<X2, X1>, "#62");
            Assert.True((object)new Y3X2X1() is I8<X2, X1>, "#63");
            Assert.False((object)new Y3<X2, X2>() is I8<X2, X1>, "#64");
            Assert.False((object)new Y3X2X2() is I8<X2, X1>, "#65");
            Assert.False((object)new Y3<X1, X1>() is I8<X2, X2>, "#66");
            Assert.False((object)new Y3X1X1() is I8<X2, X2>, "#67");
            Assert.False((object)new Y3<X1, X2>() is I8<X2, X2>, "#68");
            Assert.False((object)new Y3X1X2() is I8<X2, X2>, "#69");
            Assert.True((object)new Y3<X2, X1>() is I8<X2, X2>, "#70");
            Assert.True((object)new Y3X2X1() is I8<X2, X2>, "#71");
            Assert.True((object)new Y3<X2, X2>() is I8<X2, X2>, "#72");
            Assert.True((object)new Y3X2X2() is I8<X2, X2>, "#73");
            Assert.True((object)new Y4<string, X1>() is I9<string, X1>, "#74");
            Assert.False((object)new Y4<string, X1>() is I9<object, X1>, "#75");
            Assert.False((object)new Y4<object, X1>() is I9<string, X1>, "#76");
            Assert.True((object)new Y4<object, X1>() is I9<object, X1>, "#77");
            Assert.False((object)new Y4<string, X1>() is I9<string, X2>, "#78");
            Assert.False((object)new Y4<string, X1>() is I9<object, X2>, "#79");
            Assert.False((object)new Y4<object, X1>() is I9<string, X2>, "#80");
            Assert.False((object)new Y4<object, X1>() is I9<object, X2>, "#81");
            Assert.True((object)new Y4<string, X2>() is I9<string, X1>, "#82");
            Assert.False((object)new Y4<string, X2>() is I9<object, X1>, "#83");
            Assert.False((object)new Y4<object, X2>() is I9<string, X1>, "#84");
            Assert.True((object)new Y4<object, X2>() is I9<object, X1>, "#85");
            Assert.True((object)new Y4<string, X2>() is I9<string, X2>, "#86");
            Assert.False((object)new Y4<string, X2>() is I9<object, X2>, "#87");
            Assert.False((object)new Y4<object, X2>() is I9<string, X2>, "#88");
            Assert.True((object)new Y4<object, X2>() is I9<object, X2>, "#89");
            Assert.True((object)new Y5<X1, X1>() is I6<I6<X1>>, "#90");
            Assert.True((object)new Y5<X1, X1>() is I6<I7<X1>>, "#91");
            Assert.False((object)new Y5<X1, X1>() is I6<I6<X2>>, "#92");
            Assert.True((object)new Y5<X1, X1>() is I6<I7<X2>>, "#93");
            Assert.True((object)new Y5<X1, X1>() is I6<I8<X1, X1>>, "#94");
            Assert.True((object)new Y5<X1, X1>() is I6<I8<X1, X2>>, "#95");
            Assert.False((object)new Y5<X1, X1>() is I6<I8<X2, X1>>, "#96");
            Assert.False((object)new Y5<X1, X1>() is I6<I8<X2, X2>>, "#97");
            Assert.False((object)new Y5<X1, X1>() is I6<I10<X1, X1>>, "#98");
            Assert.False((object)new Y5<X1, X1>() is I6<I10<X1, X2>>, "#99");
            Assert.False((object)new Y5<X1, X1>() is I6<I10<X2, X1>>, "#100");
            Assert.False((object)new Y5<X1, X1>() is I6<I10<X2, X2>>, "#101");
            Assert.True((object)new Y5<X2, X2>() is I6<I6<X1>>, "#102");
            Assert.False((object)new Y5<X2, X2>() is I6<I7<X1>>, "#103");
            Assert.True((object)new Y5<X2, X2>() is I6<I6<X2>>, "#104");
            Assert.True((object)new Y5<X2, X2>() is I6<I7<X2>>, "#105");
            Assert.False((object)new Y5<X2, X2>() is I6<I8<X1, X1>>, "#106");
            Assert.True((object)new Y5<X2, X2>() is I6<I8<X1, X2>>, "#107");
            Assert.False((object)new Y5<X2, X2>() is I6<I8<X2, X1>>, "#108");
            Assert.True((object)new Y5<X2, X2>() is I6<I8<X2, X2>>, "#109");
            Assert.False((object)new Y5<X2, X2>() is I6<I10<X1, X1>>, "#110");
            Assert.False((object)new Y5<X2, X2>() is I6<I10<X1, X2>>, "#111");
            Assert.False((object)new Y5<X2, X2>() is I6<I10<X2, X1>>, "#112");
            Assert.False((object)new Y5<X2, X2>() is I6<I10<X2, X2>>, "#113");
            Assert.False((object)new Y6<X1, X1>() is I7<I6<X1>>, "#114");
            Assert.False((object)new Y6<X1, X1>() is I7<I7<X1>>, "#115");
            Assert.False((object)new Y6<X1, X1>() is I7<I6<X2>>, "#116");
            Assert.False((object)new Y6<X1, X1>() is I7<I7<X2>>, "#117");
            Assert.True((object)new Y6<X1, X1>() is I7<I8<X1, X1>>, "#118");
            Assert.False((object)new Y6<X1, X1>() is I7<I8<X1, X2>>, "#119");
            Assert.True((object)new Y6<X1, X1>() is I7<I8<X2, X1>>, "#120");
            Assert.False((object)new Y6<X1, X1>() is I7<I8<X2, X2>>, "#121");
            Assert.True((object)new Y6<X1, X1>() is I7<I10<X1, X1>>, "#122");
            Assert.False((object)new Y6<X1, X1>() is I7<I10<X1, X2>>, "#123");
            Assert.True((object)new Y6<X1, X1>() is I7<I10<X2, X1>>, "#124");
            Assert.False((object)new Y6<X1, X1>() is I7<I10<X2, X2>>, "#125");
            Assert.False((object)new Y6<X2, X2>() is I7<I6<X1>>, "#126");
            Assert.False((object)new Y6<X2, X2>() is I7<I7<X1>>, "#127");
            Assert.False((object)new Y6<X2, X2>() is I7<I6<X2>>, "#128");
            Assert.False((object)new Y6<X2, X2>() is I7<I7<X2>>, "#129");
            Assert.False((object)new Y6<X2, X2>() is I7<I8<X1, X1>>, "#130");
            Assert.False((object)new Y6<X2, X2>() is I7<I8<X1, X2>>, "#131");
            Assert.True((object)new Y6<X2, X2>() is I7<I8<X2, X1>>, "#132");
            Assert.True((object)new Y6<X2, X2>() is I7<I8<X2, X2>>, "#133");
            Assert.False((object)new Y6<X2, X2>() is I7<I10<X1, X1>>, "#134");
            Assert.False((object)new Y6<X2, X2>() is I7<I10<X1, X2>>, "#135");
            Assert.True((object)new Y6<X2, X2>() is I7<I10<X2, X1>>, "#136");
            Assert.True((object)new Y6<X2, X2>() is I7<I10<X2, X2>>, "#137");
            Assert.False((object)null is object, "#138");
        }

        [Test]
        public void TypeAsWorksForReferenceTypes()
        {
            Assert.False(((object)new object() as C1) != null, "#1");
            Assert.True(((object)new C1() as object) != null, "#2");
            Assert.False(((object)new object() as I1) != null, "#3");
            Assert.False(((object)new C1() as D1) != null, "#4");
            Assert.True(((object)new D1() as C1) != null, "#5");
            Assert.True(((object)new D1() as I1) != null, "#6");
            Assert.True(((object)new D2<int>() as C2<int>) != null, "#7");
            Assert.False(((object)new D2<int>() as C2<string>) != null, "#8");
            Assert.True(((object)new D2<int>() as I2<int>) != null, "#9");
            Assert.False(((object)new D2<int>() as I2<string>) != null, "#10");
            Assert.True(((object)new D2<int>() as I1) != null, "#11");
            Assert.False(((object)new D3() as C2<string>) != null, "#12");
            Assert.True(((object)new D3() as C2<int>) != null, "#13");
            Assert.False(((object)new D3() as I2<int>) != null, "#14");
            Assert.True(((object)new D3() as I2<string>) != null, "#15");
            Assert.True(((object)new D4() as I1) != null, "#16");
            Assert.True(((object)new D4() as I3) != null, "#17");
            Assert.True(((object)new D4() as I4) != null, "#18");
            Assert.True(((object)new X2() as I1) != null, "#19");
            Assert.True(((object)new E2() as E1?) != null, "#20");
            Assert.True(((object)new E1() as int?) != null, "#21");
            Assert.True(((object)new E1() as object) != null, "#22");
            Assert.False(((object)new Y1<X1>() as I7<X1>) != null, "#23");
            Assert.True(((object)new Y1<X1>() as I6<X1>) != null, "#24");
            Assert.True(((object)new Y1X1() as I6<X1>) != null, "#25");
            Assert.False(((object)new Y1<X1>() as I6<X2>) != null, "#26");
            Assert.False(((object)new Y1X1() as I6<X2>) != null, "#27");
            Assert.True(((object)new Y1<X2>() as I6<X1>) != null, "#28");
            Assert.True(((object)new Y1X2() as I6<X1>) != null, "#29");
            Assert.True(((object)new Y1<X2>() as I6<X2>) != null, "#30");
            Assert.True(((object)new Y1X2() as I6<X2>) != null, "#31");
            Assert.False(((object)new Y2<X1>() as I6<X1>) != null, "#32");
            Assert.True(((object)new Y2<X1>() as I7<X1>) != null, "#33");
            Assert.True(((object)new Y2X1() as I7<X1>) != null, "#34");
            Assert.True(((object)new Y2<X1>() as I7<X2>) != null, "#35");
            Assert.True(((object)new Y2X1() as I7<X2>) != null, "#36");
            Assert.False(((object)new Y2<X2>() as I7<X1>) != null, "#37");
            Assert.False(((object)new Y2X2() as I7<X1>) != null, "#38");
            Assert.True(((object)new Y2<X2>() as I7<X2>) != null, "#39");
            Assert.True(((object)new Y2X2() as I7<X2>) != null, "#40");
            Assert.False(((object)new Y3<X1, X1>() as I1) != null, "#41");
            Assert.True(((object)new Y3<X1, X1>() as I8<X1, X1>) != null, "#42");
            Assert.True(((object)new Y3X1X1() as I8<X1, X1>) != null, "#43");
            Assert.False(((object)new Y3<X1, X2>() as I8<X1, X1>) != null, "#44");
            Assert.False(((object)new Y3X1X2() as I8<X1, X1>) != null, "#45");
            Assert.True(((object)new Y3<X2, X1>() as I8<X1, X1>) != null, "#46");
            Assert.True(((object)new Y3X2X1() as I8<X1, X1>) != null, "#47");
            Assert.False(((object)new Y3<X2, X2>() as I8<X1, X1>) != null, "#48");
            Assert.False(((object)new Y3X2X2() as I8<X1, X1>) != null, "#49");
            Assert.True(((object)new Y3<X1, X1>() as I8<X1, X2>) != null, "#50");
            Assert.True(((object)new Y3X1X1() as I8<X1, X2>) != null, "#51");
            Assert.True(((object)new Y3<X1, X2>() as I8<X1, X2>) != null, "#52");
            Assert.True(((object)new Y3X1X2() as I8<X1, X2>) != null, "#53");
            Assert.True(((object)new Y3<X2, X1>() as I8<X1, X2>) != null, "#54");
            Assert.True(((object)new Y3X2X1() as I8<X1, X2>) != null, "#55");
            Assert.True(((object)new Y3<X2, X2>() as I8<X1, X2>) != null, "#56");
            Assert.True(((object)new Y3X2X2() as I8<X1, X2>) != null, "#57");
            Assert.False(((object)new Y3<X1, X1>() as I8<X2, X1>) != null, "#58");
            Assert.False(((object)new Y3X1X1() as I8<X2, X1>) != null, "#59");
            Assert.False(((object)new Y3<X1, X2>() as I8<X2, X1>) != null, "#60");
            Assert.False(((object)new Y3X1X2() as I8<X2, X1>) != null, "#61");
            Assert.True(((object)new Y3<X2, X1>() as I8<X2, X1>) != null, "#62");
            Assert.True(((object)new Y3X2X1() as I8<X2, X1>) != null, "#63");
            Assert.False(((object)new Y3<X2, X2>() as I8<X2, X1>) != null, "#64");
            Assert.False(((object)new Y3X2X2() as I8<X2, X1>) != null, "#65");
            Assert.False(((object)new Y3<X1, X1>() as I8<X2, X2>) != null, "#66");
            Assert.False(((object)new Y3X1X1() as I8<X2, X2>) != null, "#67");
            Assert.False(((object)new Y3<X1, X2>() as I8<X2, X2>) != null, "#68");
            Assert.False(((object)new Y3X1X2() as I8<X2, X2>) != null, "#69");
            Assert.True(((object)new Y3<X2, X1>() as I8<X2, X2>) != null, "#70");
            Assert.True(((object)new Y3X2X1() as I8<X2, X2>) != null, "#71");
            Assert.True(((object)new Y3<X2, X2>() as I8<X2, X2>) != null, "#72");
            Assert.True(((object)new Y3X2X2() as I8<X2, X2>) != null, "#73");
            Assert.True(((object)new Y4<string, X1>() as I9<string, X1>) != null, "#74");
            Assert.False(((object)new Y4<string, X1>() as I9<object, X1>) != null, "#75");
            Assert.False(((object)new Y4<object, X1>() as I9<string, X1>) != null, "#76");
            Assert.True(((object)new Y4<object, X1>() as I9<object, X1>) != null, "#77");
            Assert.False(((object)new Y4<string, X1>() as I9<string, X2>) != null, "#78");
            Assert.False(((object)new Y4<string, X1>() as I9<object, X2>) != null, "#79");
            Assert.False(((object)new Y4<object, X1>() as I9<string, X2>) != null, "#80");
            Assert.False(((object)new Y4<object, X1>() as I9<object, X2>) != null, "#81");
            Assert.True(((object)new Y4<string, X2>() as I9<string, X1>) != null, "#82");
            Assert.False(((object)new Y4<string, X2>() as I9<object, X1>) != null, "#83");
            Assert.False(((object)new Y4<object, X2>() as I9<string, X1>) != null, "#84");
            Assert.True(((object)new Y4<object, X2>() as I9<object, X1>) != null, "#85");
            Assert.True(((object)new Y4<string, X2>() as I9<string, X2>) != null, "#86");
            Assert.False(((object)new Y4<string, X2>() as I9<object, X2>) != null, "#87");
            Assert.False(((object)new Y4<object, X2>() as I9<string, X2>) != null, "#88");
            Assert.True(((object)new Y4<object, X2>() as I9<object, X2>) != null, "#89");
            Assert.True(((object)new Y5<X1, X1>() as I6<I6<X1>>) != null, "#90");
            Assert.True(((object)new Y5<X1, X1>() as I6<I7<X1>>) != null, "#91");
            Assert.False(((object)new Y5<X1, X1>() as I6<I6<X2>>) != null, "#92");
            Assert.True(((object)new Y5<X1, X1>() as I6<I7<X2>>) != null, "#93");
            Assert.True(((object)new Y5<X1, X1>() as I6<I8<X1, X1>>) != null, "#94");
            Assert.True(((object)new Y5<X1, X1>() as I6<I8<X1, X2>>) != null, "#95");
            Assert.False(((object)new Y5<X1, X1>() as I6<I8<X2, X1>>) != null, "#96");
            Assert.False(((object)new Y5<X1, X1>() as I6<I8<X2, X2>>) != null, "#97");
            Assert.False(((object)new Y5<X1, X1>() as I6<I10<X1, X1>>) != null, "#98");
            Assert.False(((object)new Y5<X1, X1>() as I6<I10<X1, X2>>) != null, "#99");
            Assert.False(((object)new Y5<X1, X1>() as I6<I10<X2, X1>>) != null, "#100");
            Assert.False(((object)new Y5<X1, X1>() as I6<I10<X2, X2>>) != null, "#101");
            Assert.True(((object)new Y5<X2, X2>() as I6<I6<X1>>) != null, "#102");
            Assert.False(((object)new Y5<X2, X2>() as I6<I7<X1>>) != null, "#103");
            Assert.True(((object)new Y5<X2, X2>() as I6<I6<X2>>) != null, "#104");
            Assert.True(((object)new Y5<X2, X2>() as I6<I7<X2>>) != null, "#105");
            Assert.False(((object)new Y5<X2, X2>() as I6<I8<X1, X1>>) != null, "#106");
            Assert.True(((object)new Y5<X2, X2>() as I6<I8<X1, X2>>) != null, "#107");
            Assert.False(((object)new Y5<X2, X2>() as I6<I8<X2, X1>>) != null, "#108");
            Assert.True(((object)new Y5<X2, X2>() as I6<I8<X2, X2>>) != null, "#109");
            Assert.False(((object)new Y5<X2, X2>() as I6<I10<X1, X1>>) != null, "#110");
            Assert.False(((object)new Y5<X2, X2>() as I6<I10<X1, X2>>) != null, "#111");
            Assert.False(((object)new Y5<X2, X2>() as I6<I10<X2, X1>>) != null, "#112");
            Assert.False(((object)new Y5<X2, X2>() as I6<I10<X2, X2>>) != null, "#113");
            Assert.False(((object)new Y6<X1, X1>() as I7<I6<X1>>) != null, "#114");
            Assert.False(((object)new Y6<X1, X1>() as I7<I7<X1>>) != null, "#115");
            Assert.False(((object)new Y6<X1, X1>() as I7<I6<X2>>) != null, "#116");
            Assert.False(((object)new Y6<X1, X1>() as I7<I7<X2>>) != null, "#117");
            Assert.True(((object)new Y6<X1, X1>() as I7<I8<X1, X1>>) != null, "#118");
            Assert.False(((object)new Y6<X1, X1>() as I7<I8<X1, X2>>) != null, "#119");
            Assert.True(((object)new Y6<X1, X1>() as I7<I8<X2, X1>>) != null, "#120");
            Assert.False(((object)new Y6<X1, X1>() as I7<I8<X2, X2>>) != null, "#121");
            Assert.True(((object)new Y6<X1, X1>() as I7<I10<X1, X1>>) != null, "#122");
            Assert.False(((object)new Y6<X1, X1>() as I7<I10<X1, X2>>) != null, "#123");
            Assert.True(((object)new Y6<X1, X1>() as I7<I10<X2, X1>>) != null, "#124");
            Assert.False(((object)new Y6<X1, X1>() as I7<I10<X2, X2>>) != null, "#125");
            Assert.False(((object)new Y6<X2, X2>() as I7<I6<X1>>) != null, "#126");
            Assert.False(((object)new Y6<X2, X2>() as I7<I7<X1>>) != null, "#127");
            Assert.False(((object)new Y6<X2, X2>() as I7<I6<X2>>) != null, "#128");
            Assert.False(((object)new Y6<X2, X2>() as I7<I7<X2>>) != null, "#129");
            Assert.False(((object)new Y6<X2, X2>() as I7<I8<X1, X1>>) != null, "#130");
            Assert.False(((object)new Y6<X2, X2>() as I7<I8<X1, X2>>) != null, "#131");
            Assert.True(((object)new Y6<X2, X2>() as I7<I8<X2, X1>>) != null, "#132");
            Assert.True(((object)new Y6<X2, X2>() as I7<I8<X2, X2>>) != null, "#133");
            Assert.False(((object)new Y6<X2, X2>() as I7<I10<X1, X1>>) != null, "#134");
            Assert.False(((object)new Y6<X2, X2>() as I7<I10<X1, X2>>) != null, "#135");
            Assert.True(((object)new Y6<X2, X2>() as I7<I10<X2, X1>>) != null, "#136");
            Assert.True(((object)new Y6<X2, X2>() as I7<I10<X2, X2>>) != null, "#137");
            Assert.False(((object)null as object) != null, "#138");
        }

        [Test]
        public void CastWorksForReferenceTypes()
        {
            Assert.False(CanConvert<C1>(new object()), "#1");
            Assert.True(CanConvert<object>(new C1()), "#2");
            Assert.False(CanConvert<I1>(new object()), "#3");
            Assert.False(CanConvert<D1>(new C1()), "#4");
            Assert.True(CanConvert<C1>(new D1()), "#5");
            Assert.True(CanConvert<I1>(new D1()), "#6");
            Assert.True(CanConvert<C2<int>>(new D2<int>()), "#7");
            Assert.False(CanConvert<C2<string>>(new D2<int>()), "#8");
            Assert.True(CanConvert<I2<int>>(new D2<int>()), "#9");
            Assert.False(CanConvert<I2<string>>(new D2<int>()), "#10");
            Assert.True(CanConvert<I1>(new D2<int>()), "#11");
            Assert.False(CanConvert<C2<string>>(new D3()), "#12");
            Assert.True(CanConvert<C2<int>>(new D3()), "#13");
            Assert.False(CanConvert<I2<int>>(new D3()), "#14");
            Assert.True(CanConvert<I2<string>>(new D3()), "#15");
            Assert.True(CanConvert<I1>(new D4()), "#16");
            Assert.True(CanConvert<I3>(new D4()), "#17");
            Assert.True(CanConvert<I4>(new D4()), "#18");
            Assert.True(CanConvert<I1>(new X2()), "#19");
            Assert.True(CanConvert<E1>(new E2()), "#20");
            Assert.True(CanConvert<int>(new E1()), "#21");
            Assert.True(CanConvert<object>(new E1()), "#22");
            Assert.False(CanConvert<I7<X1>>(new Y1<X1>()), "#23");
            Assert.True(CanConvert<I6<X1>>(new Y1<X1>()), "#24");
            Assert.True(CanConvert<I6<X1>>(new Y1X1()), "#25");
            Assert.False(CanConvert<I6<X2>>(new Y1<X1>()), "#26");
            Assert.False(CanConvert<I6<X2>>(new Y1X1()), "#27");
            Assert.True(CanConvert<I6<X1>>(new Y1<X2>()), "#28");
            Assert.True(CanConvert<I6<X1>>(new Y1X2()), "#29");
            Assert.True(CanConvert<I6<X2>>(new Y1<X2>()), "#30");
            Assert.True(CanConvert<I6<X2>>(new Y1X2()), "#31");
            Assert.False(CanConvert<I6<X1>>(new Y2<X1>()), "#32");
            Assert.True(CanConvert<I7<X1>>(new Y2<X1>()), "#33");
            Assert.True(CanConvert<I7<X1>>(new Y2X1()), "#34");
            Assert.True(CanConvert<I7<X2>>(new Y2<X1>()), "#35");
            Assert.True(CanConvert<I7<X2>>(new Y2X1()), "#36");
            Assert.False(CanConvert<I7<X1>>(new Y2<X2>()), "#37");
            Assert.False(CanConvert<I7<X1>>(new Y2X2()), "#38");
            Assert.True(CanConvert<I7<X2>>(new Y2<X2>()), "#39");
            Assert.True(CanConvert<I7<X2>>(new Y2X2()), "#40");
            Assert.False(CanConvert<I1>(new Y3<X1, X1>()), "#41");
            Assert.True(CanConvert<I8<X1, X1>>(new Y3<X1, X1>()), "#42");
            Assert.True(CanConvert<I8<X1, X1>>(new Y3X1X1()), "#43");
            Assert.False(CanConvert<I8<X1, X1>>(new Y3<X1, X2>()), "#44");
            Assert.False(CanConvert<I8<X1, X1>>(new Y3X1X2()), "#45");
            Assert.True(CanConvert<I8<X1, X1>>(new Y3<X2, X1>()), "#46");
            Assert.True(CanConvert<I8<X1, X1>>(new Y3X2X1()), "#47");
            Assert.False(CanConvert<I8<X1, X1>>(new Y3<X2, X2>()), "#48");
            Assert.False(CanConvert<I8<X1, X1>>(new Y3X2X2()), "#49");
            Assert.True(CanConvert<I8<X1, X2>>(new Y3<X1, X1>()), "#50");
            Assert.True(CanConvert<I8<X1, X2>>(new Y3X1X1()), "#51");
            Assert.True(CanConvert<I8<X1, X2>>(new Y3<X1, X2>()), "#52");
            Assert.True(CanConvert<I8<X1, X2>>(new Y3X1X2()), "#53");
            Assert.True(CanConvert<I8<X1, X2>>(new Y3<X2, X1>()), "#54");
            Assert.True(CanConvert<I8<X1, X2>>(new Y3X2X1()), "#55");
            Assert.True(CanConvert<I8<X1, X2>>(new Y3<X2, X2>()), "#56");
            Assert.True(CanConvert<I8<X1, X2>>(new Y3X2X2()), "#57");
            Assert.False(CanConvert<I8<X2, X1>>(new Y3<X1, X1>()), "#58");
            Assert.False(CanConvert<I8<X2, X1>>(new Y3X1X1()), "#59");
            Assert.False(CanConvert<I8<X2, X1>>(new Y3<X1, X2>()), "#60");
            Assert.False(CanConvert<I8<X2, X1>>(new Y3X1X2()), "#61");
            Assert.True(CanConvert<I8<X2, X1>>(new Y3<X2, X1>()), "#62");
            Assert.True(CanConvert<I8<X2, X1>>(new Y3X2X1()), "#63");
            Assert.False(CanConvert<I8<X2, X1>>(new Y3<X2, X2>()), "#64");
            Assert.False(CanConvert<I8<X2, X1>>(new Y3X2X2()), "#65");
            Assert.False(CanConvert<I8<X2, X2>>(new Y3<X1, X1>()), "#66");
            Assert.False(CanConvert<I8<X2, X2>>(new Y3X1X1()), "#67");
            Assert.False(CanConvert<I8<X2, X2>>(new Y3<X1, X2>()), "#68");
            Assert.False(CanConvert<I8<X2, X2>>(new Y3X1X2()), "#69");
            Assert.True(CanConvert<I8<X2, X2>>(new Y3<X2, X1>()), "#70");
            Assert.True(CanConvert<I8<X2, X2>>(new Y3X2X1()), "#71");
            Assert.True(CanConvert<I8<X2, X2>>(new Y3<X2, X2>()), "#72");
            Assert.True(CanConvert<I8<X2, X2>>(new Y3X2X2()), "#73");
            Assert.True(CanConvert<I9<string, X1>>(new Y4<string, X1>()), "#74");
            Assert.False(CanConvert<I9<object, X1>>(new Y4<string, X1>()), "#75");
            Assert.False(CanConvert<I9<string, X1>>(new Y4<object, X1>()), "#76");
            Assert.True(CanConvert<I9<object, X1>>(new Y4<object, X1>()), "#77");
            Assert.False(CanConvert<I9<string, X2>>(new Y4<string, X1>()), "#78");
            Assert.False(CanConvert<I9<object, X2>>(new Y4<string, X1>()), "#79");
            Assert.False(CanConvert<I9<string, X2>>(new Y4<object, X1>()), "#80");
            Assert.False(CanConvert<I9<object, X2>>(new Y4<object, X1>()), "#81");
            Assert.True(CanConvert<I9<string, X1>>(new Y4<string, X2>()), "#82");
            Assert.False(CanConvert<I9<object, X1>>(new Y4<string, X2>()), "#83");
            Assert.False(CanConvert<I9<string, X1>>(new Y4<object, X2>()), "#84");
            Assert.True(CanConvert<I9<object, X1>>(new Y4<object, X2>()), "#85");
            Assert.True(CanConvert<I9<string, X2>>(new Y4<string, X2>()), "#86");
            Assert.False(CanConvert<I9<object, X2>>(new Y4<string, X2>()), "#87");
            Assert.False(CanConvert<I9<string, X2>>(new Y4<object, X2>()), "#88");
            Assert.True(CanConvert<I9<object, X2>>(new Y4<object, X2>()), "#89");
            Assert.True(CanConvert<I6<I6<X1>>>(new Y5<X1, X1>()), "#90");
            Assert.True(CanConvert<I6<I7<X1>>>(new Y5<X1, X1>()), "#91");
            Assert.False(CanConvert<I6<I6<X2>>>(new Y5<X1, X1>()), "#92");
            Assert.True(CanConvert<I6<I7<X2>>>(new Y5<X1, X1>()), "#93");
            Assert.True(CanConvert<I6<I8<X1, X1>>>(new Y5<X1, X1>()), "#94");
            Assert.True(CanConvert<I6<I8<X1, X2>>>(new Y5<X1, X1>()), "#95");
            Assert.False(CanConvert<I6<I8<X2, X1>>>(new Y5<X1, X1>()), "#96");
            Assert.False(CanConvert<I6<I8<X2, X2>>>(new Y5<X1, X1>()), "#97");
            Assert.False(CanConvert<I6<I10<X1, X1>>>(new Y5<X1, X1>()), "#98");
            Assert.False(CanConvert<I6<I10<X1, X2>>>(new Y5<X1, X1>()), "#99");
            Assert.False(CanConvert<I6<I10<X2, X1>>>(new Y5<X1, X1>()), "#100");
            Assert.False(CanConvert<I6<I10<X2, X2>>>(new Y5<X1, X1>()), "#101");
            Assert.True(CanConvert<I6<I6<X1>>>(new Y5<X2, X2>()), "#102");
            Assert.False(CanConvert<I6<I7<X1>>>(new Y5<X2, X2>()), "#103");
            Assert.True(CanConvert<I6<I6<X2>>>(new Y5<X2, X2>()), "#104");
            Assert.True(CanConvert<I6<I7<X2>>>(new Y5<X2, X2>()), "#105");
            Assert.False(CanConvert<I6<I8<X1, X1>>>(new Y5<X2, X2>()), "#106");
            Assert.True(CanConvert<I6<I8<X1, X2>>>(new Y5<X2, X2>()), "#107");
            Assert.False(CanConvert<I6<I8<X2, X1>>>(new Y5<X2, X2>()), "#108");
            Assert.True(CanConvert<I6<I8<X2, X2>>>(new Y5<X2, X2>()), "#109");
            Assert.False(CanConvert<I6<I10<X1, X1>>>(new Y5<X2, X2>()), "#110");
            Assert.False(CanConvert<I6<I10<X1, X2>>>(new Y5<X2, X2>()), "#111");
            Assert.False(CanConvert<I6<I10<X2, X1>>>(new Y5<X2, X2>()), "#112");
            Assert.False(CanConvert<I6<I10<X2, X2>>>(new Y5<X2, X2>()), "#113");
            Assert.False(CanConvert<I7<I6<X1>>>(new Y6<X1, X1>()), "#114");
            Assert.False(CanConvert<I7<I7<X1>>>(new Y6<X1, X1>()), "#115");
            Assert.False(CanConvert<I7<I6<X2>>>(new Y6<X1, X1>()), "#116");
            Assert.False(CanConvert<I7<I7<X2>>>(new Y6<X1, X1>()), "#117");
            Assert.True(CanConvert<I7<I8<X1, X1>>>(new Y6<X1, X1>()), "#118");
            Assert.False(CanConvert<I7<I8<X1, X2>>>(new Y6<X1, X1>()), "#119");
            Assert.True(CanConvert<I7<I8<X2, X1>>>(new Y6<X1, X1>()), "#120");
            Assert.False(CanConvert<I7<I8<X2, X2>>>(new Y6<X1, X1>()), "#121");
            Assert.True(CanConvert<I7<I10<X1, X1>>>(new Y6<X1, X1>()), "#122");
            Assert.False(CanConvert<I7<I10<X1, X2>>>(new Y6<X1, X1>()), "#123");
            Assert.True(CanConvert<I7<I10<X2, X1>>>(new Y6<X1, X1>()), "#124");
            Assert.False(CanConvert<I7<I10<X2, X2>>>(new Y6<X1, X1>()), "#125");
            Assert.False(CanConvert<I7<I6<X1>>>(new Y6<X2, X2>()), "#126");
            Assert.False(CanConvert<I7<I7<X1>>>(new Y6<X2, X2>()), "#127");
            Assert.False(CanConvert<I7<I6<X2>>>(new Y6<X2, X2>()), "#128");
            Assert.False(CanConvert<I7<I7<X2>>>(new Y6<X2, X2>()), "#129");
            Assert.False(CanConvert<I7<I8<X1, X1>>>(new Y6<X2, X2>()), "#130");
            Assert.False(CanConvert<I7<I8<X1, X2>>>(new Y6<X2, X2>()), "#131");
            Assert.True(CanConvert<I7<I8<X2, X1>>>(new Y6<X2, X2>()), "#132");
            Assert.True(CanConvert<I7<I8<X2, X2>>>(new Y6<X2, X2>()), "#133");
            Assert.False(CanConvert<I7<I10<X1, X1>>>(new Y6<X2, X2>()), "#134");
            Assert.False(CanConvert<I7<I10<X1, X2>>>(new Y6<X2, X2>()), "#135");
            Assert.True(CanConvert<I7<I10<X2, X1>>>(new Y6<X2, X2>()), "#136");
            Assert.True(CanConvert<I7<I10<X2, X2>>>(new Y6<X2, X2>()), "#137");
            Assert.False((object)null is object, "#138");
        }

        [Test]
        public void GetTypeWorksOnObjects()
        {
            Action a = () => { };
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemLanguageSupportTests+C1", new C1().GetType().FullName);
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemLanguageSupportTests+C2`1[[System.Int32, mscorlib]]", new C2<int>().GetType().FullName);
            Assert.AreEqual("Bridge.ClientTest.Reflection.TypeSystemLanguageSupportTests+C2`1[[System.String, mscorlib]]", new C2<string>().GetType().FullName);
            Assert.AreEqual("System.Int32", (1).GetType().FullName);
            Assert.AreEqual("System.String", "X".GetType().FullName);
            Assert.AreEqual("Function", a.GetType().FullName);
            Assert.AreEqual("System.Object", new object().GetType().FullName);
            Assert.AreEqual("System.Int32[]", new[] { 1, 2 }.GetType().FullName);
        }

        [Test]
        public void GetTypeOnNullInstanceThrowsException()
        {
            Assert.Throws(() => ((object)null).GetType());
        }

#pragma warning disable 219

        private T Cast<T>(object o)
        {
            return (T)o;
        }

        [Test]
        public void CastOperatorForSerializableTypeWithoutTypeCheckCodeAlwaysSucceedsGeneric()
        {
            object o = Bridge.Html5.JSON.Parse("{}");
            var b = Cast<OL>(o);
            Assert.True(ReferenceEquals(o, b));
        }

        /*[Test]
		public void CastOperatorsWorkForSerializableTypesWithCustomTypeCheckCodeGeneric() {
			object o1 = new { x = 1 };
			object o2 = new { x = 1, y = 2 };
			Assert.Throws<InvalidCastException>(() => { var x = Cast<DS>(o1); });
			var ds = Cast<OL>(o2);
			Assert.True(ReferenceEquals(o2, ds));
		}

		[Test]
		public void CastOperatorsWorkForSerializableTypesWithCustomTypeCheckCode() {
			object o1 = new { x = 1 };
			object o2 = new { x = 1, y = 2 };
			Assert.False(o1 is DS, "o1 should not be of type");
			Assert.True (o2 is DS, "o2 should be of type");
			Assert.AreEqual(o1 as DS, null, "Try cast o1 to type should be null");
			Assert.True((o2 as DS) == o2, "Try cast o2 to type should return o2");
			Assert.Throws(() => { object x = (DS)o1; }, "Cast o1 to type should throw");
			Assert.True((DS)o2 == o2, "Cast o2 to type should return o2");
		}

		[Test]
		public void CastOperatorsWorkForImportedTypesWithCustomTypeCheckCode() {
			object o1 = new { x = 1 };
			object o2 = new { x = 1, y = 2 };
			Assert.False(o1 is CI, "o1 should not be of type");
			Assert.True (o2 is CI, "o2 should be of type");
			Assert.AreEqual(o1 as CI, null, "Try cast o1 to type should be null");
			Assert.True((o2 as CI) == o2, "Try cast o2 to type should return o2");
			Assert.Throws(() => { object x = (DS)o1; }, "Cast o1 to type should throw");
			Assert.True((CI)o2 == o2, "Cast o2 to type should return o2");
		}*/
#pragma warning restore 219

        [Test]
        public void TypeCheckForSubTypeOfGenericType()
        {
            object c12 = new C12();
            Assert.True(c12 is C12, "#1");
            Assert.True(c12 is C11<K>, "#2");
            Assert.True(c12 is C10<K>, "#3");
        }
    }
}