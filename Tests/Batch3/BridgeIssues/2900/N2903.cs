using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2903 - {0}")]
    public class Bridge2903
    {
        public class Test
        {
            private EventHandler register;
            public event EventHandler Register
            {
                add
                {
                    if (this.register == null || this.register.GetInvocationList().Contains(value) == false)
                        this.register += value;
                }
                remove
                {
                    this.register -= value;
                }
            }
            public virtual void OnRegister(EventArgs args)
            {
                this.register?.Invoke(this, args);
            }
        }

        [Test]
        public static void TestGetInvocationList()
        {
            int i = 0;
            Test test = new Test();
            test.Register += (sender, args) => i = i + 1;
            test.Register += (sender, args) => i = i + 5;

            test.OnRegister(EventArgs.Empty);
            Assert.AreEqual(6, i);
        }
    }
}