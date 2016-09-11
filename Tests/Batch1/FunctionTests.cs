using Bridge.Test;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_FUNCTIONS)]
    [TestFixture(TestNameFormat = "Function - {0}")]
    public class FunctionTests
    {
        private const string IntFunctionBody =
                "  if (this) {\n"
                + "  if (this.sv1) { p1 = this.sv1; }\n"
                + "  if (this.sv2) { p2 = this.sv2; }\n"
                + "}\n"
                + "if (sc) { p1 = sc.v1; p2 = sc.v2; }\n"
                + "if (p1 === undefined) { p1 = 100; }\n"
                + "if (p2 === undefined) { p2 = -55; }\n"
                + "return p1 + p2;";

        [Test]
        public void TestConstructorArgumentsBodyInOneParameter()
        {
            var f = new Function("p1", "p2", "sc", IntFunctionBody);

            TestSetInt(f);
        }

        [Test]
        public void TestConstructorArgumentsBodyInTwoParameters()
        {
            var f = new Function("p1,p2,sc", IntFunctionBody);

            TestSetInt(f);
        }

        [Test]
        public void TestConstructorArgumentsInArray()
        {
            var ps = new[] { "p1", "p2", "sc" };
            var f = new Function(ps, IntFunctionBody);

            TestSetInt(f);
        }

        private void TestSetInt(Function f)
        {
            Assert.NotNull(f, "Function not null");

            Assert.AreEqual(3, f.Length, "Length");

            ApplySetInt(f);

            CallSetInt(f);
        }

        private void ApplySetInt(Function f)
        {
            var a1 = f.Apply(null);
            var i1 = (int)a1;
            Assert.AreEqual(45, i1, "Apply1");

            var a2 = f.Apply(null, 1, 2);
            var i2 = (int)a2;
            Assert.AreEqual(3, i2, "Apply2");

            var s3 = new { v1 = 3, v2 = 5 };
            var a3 = f.Apply(null, null, null, s3);
            var i3 = (int)a3;
            Assert.AreEqual(8, i3, "Apply3");

            var s4 = new { v1 = 7 };
            var a4 = f.Apply(null, 1, 2, s4);
            var i4 = (int)a4;
            Assert.AreEqual(-48, i4, "Apply4");

            var s5 = new { v1 = 9, v2 = Script.Undefined };
            var a5 = f.Apply(null, Script.Undefined, 10, s5);
            var i5 = (int)a5;
            Assert.AreEqual(-46, i5, "Apply5");

            var scope = new
            {
                sv1 = 70,
                sv2 = 51,
            };

            var a6 = f.Apply(scope);
            var i6 = (int)a6;
            Assert.AreEqual(121, i6, "Apply6");

            var a7 = f.Apply(scope, 1, 2);
            var i7 = (int)a7;
            Assert.AreEqual(121, i7, "Apply7");

            var s8 = new { v1 = 3, v2 = 5 };
            var a8 = f.Apply(scope, null, null, s8);
            var i8 = (int)a8;
            Assert.AreEqual(8, i8, "Apply8");

            var s9 = new { v1 = 7 };
            var a9 = f.Apply(scope, 1, 2, s9);
            var i9 = (int)a9;
            Assert.AreEqual(-48, i9, "Apply9");

            var s10 = new { v1 = 9, v2 = Script.Undefined };
            var a10 = f.Apply(scope, Script.Undefined, 10, s10);
            var i10 = (int)a10;
            Assert.AreEqual(-46, i10, "Apply10");
        }

        private void CallSetInt(Function f)
        {
            var a1 = f.Call(null);
            var i1 = (int)a1;
            Assert.AreEqual(45, i1, "Call1");

            var a2 = f.Call(null, 1, 2);
            var i2 = (int)a2;
            Assert.AreEqual(3, i2, "Call2");

            var s3 = new { v1 = 3, v2 = 5 };
            var a3 = f.Call(null, null, null, s3);
            var i3 = (int)a3;
            Assert.AreEqual(8, i3, "Call3");

            var s4 = new { v1 = 7 };
            var a4 = f.Call(null, 1, 2, s4);
            var i4 = (int)a4;
            Assert.AreEqual(-48, i4, "Call4");

            var s5 = new { v1 = 9, v2 = Script.Undefined };
            var a5 = f.Call(null, Script.Undefined, 10, s5);
            var i5 = (int)a5;
            Assert.AreEqual(-46, i5, "Call5");

            var scope = new
            {
                sv1 = 70,
                sv2 = 51,
            };

            var a6 = f.Call(scope);
            var i6 = (int)a6;
            Assert.AreEqual(121, i6, "Call6");

            var a7 = f.Call(scope, 1, 2);
            var i7 = (int)a7;
            Assert.AreEqual(121, i7, "Call7");

            var s8 = new { v1 = 3, v2 = 5 };
            var a8 = f.Call(scope, null, null, s8);
            var i8 = (int)a8;
            Assert.AreEqual(8, i8, "Call8");

            var s9 = new { v1 = 7 };
            var a9 = f.Call(scope, 1, 2, s9);
            var i9 = (int)a9;
            Assert.AreEqual(-48, i9, "Call9");

            var s10 = new { v1 = 9, v2 = Script.Undefined };
            var a10 = f.Call(scope, Script.Undefined, 10, s10);
            var i10 = (int)a10;
            Assert.AreEqual(-46, i10, "Call10");
        }
    }
}