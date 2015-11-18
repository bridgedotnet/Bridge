using Bridge;

using System.Collections;
using System.Collections.Generic;

namespace ClientTestLibrary
{
    public partial class Bridge537B : IEnumerable<Bridge537A>
    {
        protected List<Bridge537A> list;

        public Bridge537B()
        {
            this.list = new List<Bridge537A>();
        }

        public void Add(Bridge537A value)
        {
            list.Add(value);
        }

        public IEnumerator<Bridge537A> GetEnumerator()
        {
            return this.list.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.list.GetEnumerator();
        }

        private static int GetCount(Bridge537B l)
        {
            return l.list.Count;
        }

        public static int TestB1()
        {
            var l = new Bridge537B();

            l.Add(new Bridge537A() { Id = 101 });
            l.Add(new Bridge537A() { Id = 102 });

            return l.GetCount();
        }
    }
}