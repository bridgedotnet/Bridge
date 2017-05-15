using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2143 - {0}")]
    public class Bridge2143
    {
        [IgnoreGeneric]
        internal static class ComponentPropsHelpers<TProps>
        {
            public static WrappedProps WrapProps(TProps propsIfAny)
            {
                return new WrappedProps { Value = propsIfAny };
            }

            [ObjectLiteral]
            public class WrappedProps
            {
                public TProps Value { get; set; }
            }
        }

        internal static class ComponentPropsHelpers2<TProps>
        {
            public static WrappedProps WrapProps(TProps propsIfAny)
            {
                return new WrappedProps { Value = propsIfAny };
            }

            [ObjectLiteral]
            public class WrappedProps
            {
                public TProps Value { get; set; }
            }
        }

        [Test]
        public static void TestIgnoreGenericForNestedClass()
        {
            Assert.False(typeof(ComponentPropsHelpers<>).IsGenericTypeDefinition);
            Assert.False(typeof(ComponentPropsHelpers<>.WrappedProps).IsGenericTypeDefinition);
            Assert.True(typeof(ComponentPropsHelpers2<>).IsGenericTypeDefinition);
            // NRefactory incorrectly resolves ComponentPropsHelpers2<>.WrappedProps type
            // It provides ComponentPropsHelpers2<TProps>.WrappedProps instead of definition
            //Assert.True(typeof(ComponentPropsHelpers2<>.WrappedProps).IsGenericTypeDefinition);
        }
    }
}