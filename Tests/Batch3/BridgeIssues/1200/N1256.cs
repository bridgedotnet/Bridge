using Bridge.Test.NUnit;

using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1256 - {0}")]
    public class Bridge1256
    {
        // "constructor", "__proto__" excluded
        private static readonly string[] reservedWords = new string[] { "abstract", "arguments", "as", "boolean", "break", "byte", "case", "catch", "char", "class", "continue", "const", /*"constructor",*/ "debugger", "default", "delete", "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", "namespace", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "use", "var", "void", "volatile", "window", "while", "with", "yield" };

        private static bool IsReservedWord(string word)
        {
            {
                return reservedWords.Contains(word);
            }
        }

        private static void TestFields(object o)
        {
            if (o == null)
            {
                Assert.Fail("Object cannot be null");
                return;
            }

            foreach (var name in reservedWords)
            {
                Assert.AreEqual(true, o[name], "Expected true for property " + name);
            }
        }

        private static void TestMethods(object o)
        {
            if (o == null)
            {
                Assert.Fail("Object cannot be null");
                return;
            }

            foreach (var name in reservedWords)
            {
                Assert.NotNull(o[name], "Member " + name + " exists");
            }
        }

        [Convention(Target = ConventionTarget.Member, Notation = Notation.CamelCase)]
        private class ReservedFields
        {
#pragma warning disable 414 //CS0414  The field 'Bridge1256.ReservedProperties.Case' is assigned but its value is never used
            private bool Abstract = true;
            private bool Arguments = true;
            private bool As = true;
            private bool Boolean = true;
            private bool Break = true;
            private bool Byte = true;
            private bool Case = true;
            private bool Catch = true;
            private bool Char = true;
            private bool Class = true;
            private bool Continue = true;
            private bool Const = true;

            //private bool constructor = true;
            private bool Debugger = true;

            private bool Default = true;
            private bool Delete = true;
            private bool Do = true;
            private bool Double = true;
            private bool Else = true;
            private bool Enum = true;
            private bool Eval = true;
            private bool Export = true;
            private bool Extends = true;
            private bool False = true;
            private bool Final = true;
            private bool Finally = true;
            private bool Float = true;
            private bool For = true;
            private bool Function = true;
            private bool Goto = true;
            private bool If = true;
            private bool Implements = true;
            private bool Import = true;
            private bool In = true;
            private bool Instanceof = true;
            private bool Int = true;
            private bool Interface = true;
            private bool Let = true;
            private bool Long = true;
            private bool Namespace = true;
            private bool Native = true;
            private bool New = true;
            private bool Null = true;
            private bool Package = true;
            private bool Private = true;
            private bool Protected = true;
            private bool Public = true;
            private bool Return = true;
            private bool Short = true;
            private bool Static = true;
            private bool Super = true;
            private bool Switch = true;
            private bool Synchronized = true;
            private bool This = true;
            private bool Throw = true;
            private bool Throws = true;
            private bool Transient = true;
            private bool True = true;
            private bool Try = true;
            private bool Typeof = true;
            private bool Use = true;
            private bool Var = true;
            private bool Void = true;
            private bool Volatile = true;
            private bool Window = true;
            private bool While = true;
            private bool With = true;
            private bool Yield = true;
        }

        [Convention(Target = ConventionTarget.Member, Notation = Notation.CamelCase)]
        private class ReservedMethods
        {
            private int Abstract()
            {
                return 1;
            }

            private int Arguments()
            {
                return 2;
            }

            private int As()
            {
                return 3;
            }

            private int Boolean()
            {
                return 4;
            }

            private int Break()
            {
                return 5;
            }

            private int Byte()
            {
                return 6;
            }

            private int Case()
            {
                return 7;
            }

            private int Catch()
            {
                return 8;
            }

            private int Char()
            {
                return 9;
            }

            private int Class()
            {
                return 10;
            }

            private int Continue()
            {
                return 11;
            }

            private int Const()
            {
                return 12;
            }

            private int constructor()
            {
                return 13;
            }

            private int Debugger()
            {
                return 14;
            }

            private int Default()
            {
                return 15;
            }

            private int Delete()
            {
                return 16;
            }

            private int Do()
            {
                return 17;
            }

            private int Double()
            {
                return 18;
            }

            private int Else()
            {
                return 19;
            }

            private int Enum()
            {
                return 20;
            }

            private int Eval()
            {
                return 21;
            }

            private int Export()
            {
                return 22;
            }

            private int Extends()
            {
                return 23;
            }

            private int False()
            {
                return 24;
            }

            private int Final()
            {
                return 25;
            }

            private int Finally()
            {
                return 26;
            }

            private int Float()
            {
                return 27;
            }

            private int For()
            {
                return 28;
            }

            private int Function()
            {
                return 29;
            }

            private int Goto()
            {
                return 30;
            }

            private int If()
            {
                return 31;
            }

            private int Implements()
            {
                return 32;
            }

            private int Import()
            {
                return 33;
            }

            private int In()
            {
                return 34;
            }

            private int Instanceof()
            {
                return 35;
            }

            private int Int()
            {
                return 36;
            }

            private int Interface()
            {
                return 37;
            }

            private int Let()
            {
                return 38;
            }

            private int Long()
            {
                return 39;
            }

            private int Namespace()
            {
                return 40;
            }

            private int Native()
            {
                return 41;
            }

            private int New()
            {
                return 42;
            }

            private int Null()
            {
                return 43;
            }

            private int Package()
            {
                return 44;
            }

            private int Private()
            {
                return 45;
            }

            private int Protected()
            {
                return 46;
            }

            private int Public()
            {
                return 47;
            }

            private int Return()
            {
                return 48;
            }

            private int Short()
            {
                return 49;
            }

            private int Static()
            {
                return 50;
            }

            private int Super()
            {
                return 51;
            }

            private int Switch()
            {
                return 52;
            }

            private int Synchronized()
            {
                return 53;
            }

            private int This()
            {
                return 54;
            }

            private int Throw()
            {
                return 55;
            }

            private int Throws()
            {
                return 56;
            }

            private int Transient()
            {
                return 57;
            }

            private int True()
            {
                return 58;
            }

            private int Try()
            {
                return 59;
            }

            private int Typeof()
            {
                return 60;
            }

            private int Use()
            {
                return 61;
            }

            private int Var()
            {
                return 62;
            }

            private int Void()
            {
                return 63;
            }

            private int Volatile()
            {
                return 64;
            }

            private int Window()
            {
                return 65;
            }

            private int While()
            {
                return 65;
            }

            private int With()
            {
                return 66;
            }

            private int Yield()
            {
                return 67;
            }
        }

        private static bool boolean = true;

        [Convention(Notation.CamelCase)]
        private static bool Is = true;

        [Convention(Notation.CamelCase)]
        private static int Let()
        {
            return 5;
        }

        [Test(ExpectedCount = 7)]
        public static void TestCaseBooleanIsLet()
        {
            var let = 1;
            let = 2;
            dynamic scope = Script.Get("Bridge.ClientTest.Batch3.BridgeIssues.Bridge1256");

            Assert.True(scope["boolean"]);
            Assert.True(scope["is"]);
            Assert.True(scope["let"]);
            Assert.True(boolean);
            Assert.True(Is);
            Assert.AreEqual(2, let);
            Assert.AreEqual(5, Let());
        }

        [Test(ExpectedCount = 67)]
        public static void TestReservedFields()
        {
            var a = new ReservedFields();

            TestFields(a);
        }

        [Test(ExpectedCount = 67)]
        public static void TestReservedMethods()
        {
            var a = new ReservedMethods();

            TestMethods(a);
        }
    }
}