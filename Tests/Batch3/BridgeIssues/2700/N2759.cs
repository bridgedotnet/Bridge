using System;
using System.Collections.Generic;
using Bridge.Html5;
using Bridge.Test.NUnit;
using Test2759.Test2.Test3;

namespace Test2759.Test2.Test3
{
    public sealed class A : B<C<SpecialControl, IParentProperties>>
    {
    }

    public abstract class B<TProps>
    {
    }

    public abstract class C<TControl, TParentProps>
        where TControl : IControl
        where TParentProps : IParentProperties
    {
    }
    public interface IC<out TControlOut, TControlIn>
    {
    }

    public interface IControl
    {
    }
    public sealed class SpecialControl : IControl
    {
    }
    public interface IParentProperties
    {
    }
}

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2759 - {0}")]
    public class Bridge2759
    {
        [Test(ExpectedCount = 1)]
        public static void TestOrder()
        {
            var a = new A();
            Assert.NotNull(a);
        }
    }
}