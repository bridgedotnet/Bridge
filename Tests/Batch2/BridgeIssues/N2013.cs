using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Bridge;

namespace Bridge.ClientTest.Batch2.BridgeIssues
{
    // Bridge[#2013]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2013 - " + Constants.BATCH_NAME + " {0}")]
    public class N2013
    {
        private static readonly List<string> _trace = new List<string>();
        public static List<string> Trace { get {return _trace;} }
        
        [Test(ExpectedCount = 2)]
        public static void TestSubscribeToEventsAndDelegates()
        {
            {
                var a = new DelNonGen();    
                a.Del += () => {N2013.Trace.Add("del-nongen-class-client");};                
                a.AttachViaExtension();
                a.Del();
            }

            {
                var a = new DelGen<int>();    
                a.Del += () => {N2013.Trace.Add("del-gen-class-client");};
                a.AttachViaExtension();
                a.Del();
            }

            {
	            var b = new EvGen<int>();
                b.Ev += () => {N2013.Trace.Add("ev-gen-class-client");};
                IEvGen<int> a = b;
                a.Ev += () => {N2013.Trace.Add("ev-gen-iface-client");};

                b.AttachViaInternal();
                a.AttachViaExtension();
                b.AttachViaExtension();
                b.Raise();                
            }

            {
	            var b = new EvNonGen();
                b.Ev += () => {N2013.Trace.Add("ev-nongen-class-client");};
                IEvNonGen a = b;
                a.Ev += () => {N2013.Trace.Add("ev-nongen-iface-client");};

                b.AttachViaInternal();
                a.AttachViaExtension();
                b.AttachViaExtension();
                b.Raise();                
            }

            // without System.Collections reference
            Assert.Equal(14, _trace.Distinct().Count());
            Assert.Equal(14, _trace.Count);
        }
    }

    public class DelNonGen
    {
         public Action Del;
    }

    public class DelGen<T>
    {
         public Action Del;
    }

    public interface IEvGen<T>
    {
        event Action Ev;
    }
    
    public interface IEvNonGen
    {
        event Action Ev;
    }

    
    public static class DelExtension
    {
        public static void AttachViaExtension(this DelNonGen self)
        {
            self.Del += () => {N2013.Trace.Add("del-nongen-class-ext");};
        }

        public static void AttachViaExtension<T>(this DelGen<T> self)
        {
            self.Del += () => {N2013.Trace.Add("del-gen-class-ext");};
        }
    }

    public static class EvExtension {
        public static void AttachViaExtension(this IEvNonGen self)
        {
            self.Ev += () => {N2013.Trace.Add("ev-nongen-iface-ext");};
        }

        public static void AttachViaExtension(this EvNonGen self)
        {
            self.Ev += () => {N2013.Trace.Add("ev-nongen-class-ext");};
        }

        public static void AttachViaExtension<T>(this IEvGen<T> self)
        {
            self.Ev += () => {N2013.Trace.Add("ev-gen-iface-ext");};
        }

        public static void AttachViaExtension<T>(this EvGen<T> self)
        {
            self.Ev += () => {N2013.Trace.Add("ev-gen-class-ext");};
        }
    }
    
    public class EvGen<T> : IEvGen<T>
    {
        public event Action Ev;
        
        public void AttachViaInternal()
        {
            Ev += () => {N2013.Trace.Add("ev-gen-this-method");};
        }

        public void Raise() {
            Ev();
        }
    }
    
    public class EvNonGen : IEvNonGen
    {
        public event Action Ev;
        
        public void AttachViaInternal()
        {
            Ev += () => {N2013.Trace.Add("ev-nongen-this-method");};
        }

        public void Raise()
        {
            Ev();
        }
    }
}
