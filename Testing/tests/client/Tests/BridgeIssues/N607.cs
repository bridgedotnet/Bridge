using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    public class Opti<T> : IEquatable<Opti<T>>
    {
        public bool Equals(Opti<T> obj)
        {
            return this == obj;
        }
    }

    [FileName("testBridgeIssues.js")]
    public class Class1 : IEquatable<Class1>
    {
        public bool Equals(Class1 other)
        {
            return this == other;
        }
    }

    // Bridge[#607]
    [FileName("testBridgeIssues.js")]
    internal class Bridge607
    {
        public static void TestUseCase(Assert assert)
        {
            assert.Expect(4);

            var c = new Opti<string>();
            var c1 = new Class1();

            assert.Ok(c.Equals(c));
            assert.NotOk(c.Equals(null));

            assert.Ok(c1.Equals(c1));
            assert.NotOk(c1.Equals(null));
        }
    }
}