using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

#pragma warning disable 183, 184

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.PREFIX_COLLECTIONS)]
    [TestFixture(TestNameFormat = "KeyValuePairTests - {0}")]
    public class KeyValuePairTests
    {
        [Test]
        public void TheConstructorWithParametersCanBeUsed()
        {
            var v = new KeyValuePair<string, int>("Hello", 42);
            Assert.True(v is KeyValuePair<string, int>, "is KeyValuePair");
            Assert.AreEqual("Hello", v.Key);
            Assert.AreEqual(42, v.Value);
        }

        [Test]
        public void TypeTestWorks()
        {
            Assert.True(new KeyValuePair<int, string>(42, "Hello") is KeyValuePair<int, string>, "#1");
            Assert.False(5 is KeyValuePair<int, string>, "#2");
        }

        private bool RunCheck<T>(object o)
        {
            return o is T;
        }

        [Test]
        public void TypeTestWorksGeneric_SPI_1556()
        {
            // #1556
            Assert.True(RunCheck<KeyValuePair<int, string>>(new KeyValuePair<int, string>()), "#1");
            Assert.False(RunCheck<KeyValuePair<int, string>>(5), "#2");
        }

        [Test]
        public void TheDefaultConstructorCanBeUsed_SPI_1556()
        {
            // #1556
            var v = new KeyValuePair<DateTime, int>();
            Assert.True(v is KeyValuePair<DateTime, int>, "is KeyValuePair");
            Assert.True(v.Key is DateTime);
            Assert.AreEqual(v.Value, 0);
        }

        [Test]
        public void CreatingADefaultKeyValuePairCreatesAnInstanceThatIsNotNull_SPI_1556()
        {
            // #1556
            var v = default(KeyValuePair<int, string>);
            Assert.True(v is KeyValuePair<int, string>, "is KeyValuePair");
            Assert.NotNull(v, "is not null");
            Assert.AreEqual(0, v.Key, "has key");
            Assert.Null(v.Value, "has no value");
        }

        [Test]
        public void ActivatorCreateInstanceWorks()
        {
            var v = Activator.CreateInstance<KeyValuePair<string, string>>();

            Assert.True(v is KeyValuePair<string, string>, "is KeyValuePair");
            Assert.NotNull(v);
            Assert.Null(v.Key);
            Assert.Null(v.Value);
        }
    }
}