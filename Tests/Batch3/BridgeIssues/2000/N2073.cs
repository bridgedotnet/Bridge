using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2073 - {0}")]
    public class Bridge2073
    {
        public class Obj
        {
            public string v;
            public static implicit operator Obj(string s)
            {
                return new Obj { v = s };
            }

            public static implicit operator string(Obj s)
            {
                return s.v;
            }

            public static Obj operator +(Obj left, Obj right)
            {
                return (string)left + (string)right;
            }
        }

        public static string GetString()
        {
            return "m";
        }

        [Test]
        public static void TestUserDefinedWithStringConcat()
        {
            Obj a = "a";
            string b = "b";

            string s = b + b + a;
            Assert.AreEqual("bba", s);

            s = b + b + b + a;
            Assert.AreEqual("bbba", s);

            s = GetString() + GetString() + a;
            Assert.AreEqual("mma", s);
        }
    }
}