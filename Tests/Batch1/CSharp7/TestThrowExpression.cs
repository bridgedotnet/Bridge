using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using static Bridge.Test.NUnit.Assert;
using static System.DayOfWeek;
using static System.Linq.Enumerable;
using static System.Math;

namespace Bridge.ClientTest.CSharp6
{
    [Category(Constants.MODULE_BASIC_CSHARP)]
    [TestFixture(TestNameFormat = "Throw expressions - {0}")]
    public class TestThrowExpression
    {
        [Test]
        public static void TestBasic()
        {
            Assert.Throws<DivideByZeroException>(()=> {
                var x = 0;
                var y = 0;
                var result = y != 0 ? x % y : throw new DivideByZeroException();
            });

            Assert.Throws<NotImplementedException>(() => {
                Equals();
            });
        }

        public static bool Equals() => throw new NotImplementedException();
    }
}