using System;

[assembly: Bridge.ClientTest.Batch1.Reflection.AssemblyAttributes.A1(41, P = 10)]
[assembly: Bridge.ClientTest.Batch1.Reflection.AssemblyAttributes.A2(64, P = 23)]
[assembly: Bridge.ClientTest.Batch1.Reflection.AssemblyAttributes.A3(15, P = 45)]

namespace Bridge.ClientTest.Batch1.Reflection
{
    public class AssemblyAttributes
    {
        [NonScriptable]
        [External]
        public class A1Attribute : Attribute
        {
            public int X
            {
                get; private set;
            }

            public int P
            {
                get; set;
            }

            public A1Attribute()
            {
            }

            public A1Attribute(int x)
            {
                this.X = x;
            }
        }

        public class A2Attribute : Attribute
        {
            public int X
            {
                get; private set;
            }

            public int P
            {
                get; set;
            }

            public A2Attribute()
            {
            }

            public A2Attribute(int x)
            {
                this.X = x;
            }
        }

        public class A3Attribute : Attribute
        {
            public int X
            {
                get; private set;
            }

            public int P
            {
                get; set;
            }

            public A3Attribute()
            {
            }

            public A3Attribute(int x)
            {
                this.X = x;
            }
        }
    }
}