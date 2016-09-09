using Bridge;
using System;

namespace Test.BridgeIssues.N475B
{
    [External]
    public static class Bridge475Extension2
    {
        public static Bridge475 KeyDown<T>(this Bridge475 entity, string handler)
        {
            return null;
        }
    }

    [External]
    public static class Bridge475Extension1
    {
        public static Bridge475 KeyDown<T>(this Bridge475 entity, Action<T> handler)
        {
            return null;
        }
    }

    [External]
    public class Bridge475
    {
        public Bridge475 KeyDown<T>(int i)
        {
            return null;
        }
    }

    public class Bridge475Event
    {
        public int Data { get; set; }

        public void PreventDefault()
        {
            this.Data = 77;
        }
    }

    public class Test
    {
        // Bridge[#475]
        public static void N475()
        {
            var b = new Bridge475();

            b.KeyDown((Bridge475Event ev) =>
            {
                ev.PreventDefault();
            });

            b.KeyDown<bool>(4);

            b.KeyDown<decimal>("5");
        }
    }
}
