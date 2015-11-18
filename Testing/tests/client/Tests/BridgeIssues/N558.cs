using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Bridge558A
    {
        public virtual int zz(int a)
        {
            return 1;
        }
        public virtual int zz(string a)
        {
            return 2;
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Bridge558B : Bridge558A
    {
        public override int zz(int a)
        {
            return base.zz(a);
        }
        public override int zz(string a)
        {
            return base.zz(a);
        }
    }

    // Bridge[#5558]
    [FileName("testBridgeIssues.js")]
    internal class Bridge558
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(4);

            var a = new Bridge558A();
            var b = new Bridge558B();

            assert.Equal(a.zz(1), 1, "Bridge558 a.zz int");
            assert.Equal(a.zz(""), 2, "Bridge558 a.zz string");

            assert.Equal(b.zz(1), 1, "Bridge558 b.zz int");
            assert.Equal(b.zz(""), 2, "Bridge558 b.zz string");
        }
    }
}