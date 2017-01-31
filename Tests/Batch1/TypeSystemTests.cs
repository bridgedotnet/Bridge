using Bridge.Test.NUnit;

using System;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_TYPE_SYSTEM)]
    [TestFixture(TestNameFormat = "Type - {0}")]
    public class TypeSystemTests
    {
        public interface I1 { }

        public interface I2 : I1 { }

        public interface I3 { }

        public interface I4 : I3 { }

        public class B : I2 { }

        public class C : B, I4 { }

        public enum E1 { }

        [Flags]
        public enum E2 { }

        [Test]
        public void GettingBaseTypeWorks()
        {
            Assert.AreEqual(null, typeof(I1).BaseType, "#1");
            Assert.AreEqual(null, typeof(I2).BaseType, "#2");
            Assert.AreEqual(typeof(object), typeof(B).BaseType, "#3");
            Assert.AreEqual(typeof(B), typeof(C).BaseType, "#4");
            Assert.AreEqual(null, typeof(object).BaseType, "#5");

            Type t = null;
            Assert.Throws<NullReferenceException>(() => { var b = t.BaseType; }, "NullReferenceException");
        }

        private class AssignableTypes
        {
            public class C1 { }

            public class C2<T> { }

            public interface I1 { }

            public interface I2<T1> { }

            public interface I3 : I1 { }

            public interface I4 { }

            public interface I5<T1> : I2<T1> { }

            public interface I6<out T> { }

            public interface I7<in T> { }

            public interface I8<out T1, in T2> : I6<T1>, I7<T2> { }

            public interface I9<T1, out T2> { }

            public interface I10<out T1, in T2> : I8<T1, T2> { }

            public class D1 : C1, I1 { }

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
        }

        [Test]
        public void IsAssignableFromWorks()
        {
            Assert.True(typeof(AssignableTypes.C1).IsAssignableFrom(typeof(AssignableTypes.C1)), "#1");
            Assert.False(typeof(AssignableTypes.C1).IsAssignableFrom(typeof(object)), "#2");
            Assert.True(typeof(object).IsAssignableFrom(typeof(AssignableTypes.C1)), "#3");
            Assert.False(typeof(AssignableTypes.I1).IsAssignableFrom(typeof(object)), "#4");
            Assert.True(typeof(object).IsAssignableFrom(typeof(AssignableTypes.I1)), "#5");
            Assert.False(typeof(AssignableTypes.I3).IsAssignableFrom(typeof(AssignableTypes.I1)), "#6");
            Assert.True(typeof(AssignableTypes.I1).IsAssignableFrom(typeof(AssignableTypes.I3)), "#7");
            Assert.False(typeof(AssignableTypes.D1).IsAssignableFrom(typeof(AssignableTypes.C1)), "#8");
            Assert.True(typeof(AssignableTypes.C1).IsAssignableFrom(typeof(AssignableTypes.D1)), "#9");
            Assert.True(typeof(AssignableTypes.I1).IsAssignableFrom(typeof(AssignableTypes.D1)), "#10");
            Assert.True(typeof(AssignableTypes.C2<int>).IsAssignableFrom(typeof(AssignableTypes.D2<int>)), "#11");
            Assert.False(typeof(AssignableTypes.C2<string>).IsAssignableFrom(typeof(AssignableTypes.D2<int>)), "#12");
            Assert.True(typeof(AssignableTypes.I2<int>).IsAssignableFrom(typeof(AssignableTypes.D2<int>)), "#13");
            Assert.False(typeof(AssignableTypes.I2<string>).IsAssignableFrom(typeof(AssignableTypes.D2<int>)), "#14");
            Assert.True(typeof(AssignableTypes.I1).IsAssignableFrom(typeof(AssignableTypes.D2<int>)), "#15");
            Assert.False(typeof(AssignableTypes.C2<string>).IsAssignableFrom(typeof(AssignableTypes.D3)), "#16");
            Assert.True(typeof(AssignableTypes.C2<int>).IsAssignableFrom(typeof(AssignableTypes.D3)), "#17");
            Assert.False(typeof(AssignableTypes.I2<int>).IsAssignableFrom(typeof(AssignableTypes.D3)), "#18");
            Assert.True(typeof(AssignableTypes.I2<string>).IsAssignableFrom(typeof(AssignableTypes.D3)), "#19");
            Assert.False(typeof(AssignableTypes.I2<int>).IsAssignableFrom(typeof(AssignableTypes.I5<string>)), "#20");
            Assert.True(typeof(AssignableTypes.I2<int>).IsAssignableFrom(typeof(AssignableTypes.I5<int>)), "#21");
            Assert.False(typeof(AssignableTypes.I5<int>).IsAssignableFrom(typeof(AssignableTypes.I2<int>)), "#22");
            Assert.True(typeof(AssignableTypes.I1).IsAssignableFrom(typeof(AssignableTypes.D4)), "#23");
            Assert.True(typeof(AssignableTypes.I3).IsAssignableFrom(typeof(AssignableTypes.D4)), "#24");
            Assert.True(typeof(AssignableTypes.I4).IsAssignableFrom(typeof(AssignableTypes.D4)), "#25");
            Assert.True(typeof(AssignableTypes.I1).IsAssignableFrom(typeof(AssignableTypes.X2)), "#26");
            Assert.False(typeof(E1).IsAssignableFrom(typeof(E2)), "#30");
            Assert.False(typeof(int).IsAssignableFrom(typeof(E1)), "#31");
            Assert.True(typeof(object).IsAssignableFrom(typeof(E1)), "#32");
        }
    }
}