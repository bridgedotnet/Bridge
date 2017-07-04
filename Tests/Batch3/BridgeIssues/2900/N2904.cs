using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2904 - {0}")]
    public class Bridge2904
    {
        public class Test
        {
            private EventHandler register;
            public event EventHandler Register
            {
                add
                {
                    if (this.register == null || this.register.GetInvocationList().Any() == false)
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

        private static int temp;
        private static void Test_RegisterCommon(object sender, EventArgs e)
        {
            Bridge2904.temp++;
        }

        [Test]
        public static void TestGetInvocationList()
        {
            Bridge2904.temp = 0;

            Test test = new Test();
            test.Register += Test_RegisterCommon;
            test.Register += Test_RegisterCommon;

            test.OnRegister(EventArgs.Empty);
            Assert.AreEqual(1, temp);
        }
    }
}