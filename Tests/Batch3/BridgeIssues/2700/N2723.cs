using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;
using Base2723 = Problem2723.Classes2723.A2723;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2723 - {0}")]
    public class Bridge2723
    {
        [Test(ExpectedCount = 1)]
        public static void TestAmbigiousSymbols()
        {
            Derived2723.Problem2723 problem = new Derived2723.Problem2723();
            problem.Test();
        }
    }
}

namespace Problem2723.Classes2723
{
    public abstract class A2723
    {
        public enum Mode
        {
            Value1,
            Value2
        }

        public abstract void Test(Mode mode);
    }
}

namespace Derived2723.Classes2723
{
    public class B2723 : Base2723
    {
        public override void Test(Mode mode)
        {
            switch (mode)
            {
                case Mode.Value1:
                    Assert.Fail();
                    break;

                case Mode.Value2:
                    break;

                default:
                    throw new ArgumentOutOfRangeException(nameof(mode), mode, null);
            }

            Assert.AreEqual(Mode.Value2, mode);
        }
    }
}

namespace Derived2723
{
    using Derived2723.Classes2723;

    public sealed class Problem2723
    {
        private readonly B2723 b = new B2723();

        public void Test()
        {
            this.b.Test(Base2723.Mode.Value2);
        }
    }
}