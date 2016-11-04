using System;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2013 - {0}")]
    public class Bridge2013
    {
        public interface IEvGen<T>
        {
            event Action Ev;
        }

        public class EvGen<T> : IEvGen<T>
        {
            public event Action Ev;
            public bool HasListeners { get { return Ev != null; } }
        }

        public static void AttachViaExtension<T>(IEvGen<T> self)
        {
            self.Ev += () => { };
        }


        [Test]
        public void TestCase()
        {
            var sut = new EvGen<int>();
            Bridge2013.AttachViaExtension(sut);

            Assert.True(sut.HasListeners);
        }
    }
}