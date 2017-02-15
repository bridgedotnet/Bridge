using Bridge.Test.NUnit;
using System;

#pragma warning disable 219

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "EnumTests - {0}")]
    public class EnumTests
    {
        [Name(false)]
        public enum TestEnum
        {
            FirstValue,
            SecondValue,
            ThirdValue
        }

        [Name(false)]
        [Flags]
        public enum FlagsEnum
        {
            None = 0,
            FirstValue = 1,
            SecondValue = 2,
            ThirdValue = 4
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Enum", typeof(Enum).FullName);
            Assert.AreEqual("Bridge.ClientTest.Batch4.SimpleTypes.EnumTests+TestEnum", typeof(TestEnum).FullName);
            Assert.True(typeof(TestEnum).IsEnum);
            Assert.False(typeof(TestEnum).IsFlags);
            Assert.True(typeof(FlagsEnum).IsEnum);
            Assert.True(typeof(FlagsEnum).IsFlags);
            Assert.True((object)TestEnum.FirstValue is TestEnum);

            var interfaces = typeof(TestEnum).GetInterfaces();
            Assert.AreEqual(2, interfaces.Length);
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueOfEnumClassIsNull()
        {
            Assert.AreStrictEqual(null, GetDefaultValue<Enum>());
        }

        [Test]
        public void DefaultValueOfEnumTypeIsZero_SPI_1595()
        {
            // #1595
            Assert.AreEqual(TestEnum.FirstValue, GetDefaultValue<TestEnum>());
        }

        [Test]
        public void DefaultConstructorOfEnumTypeReturnsZero_SPI_1595()
        {
            // #1595
            Assert.AreEqual(TestEnum.FirstValue, new TestEnum());
        }

        [Test]
        public void CreatingInstanceOfEnumTypeReturnsZero_SPI_1595()
        {
            // #1595
            Assert.AreEqual(TestEnum.FirstValue, Activator.CreateInstance<TestEnum>());
        }

        [Test]
        public void DefaultExpressionWithEnumReturnsZero_SPI_1595()
        {
            // #1595
            Assert.AreEqual(TestEnum.FirstValue, default(TestEnum));
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(TestEnum.FirstValue, (TestEnum)Enum.Parse(typeof(TestEnum), "FirstValue"));
            Assert.AreEqual((int)(FlagsEnum.FirstValue | FlagsEnum.ThirdValue), (TestEnum)Enum.Parse(typeof(FlagsEnum), "FirstValue, ThirdValue"));
        }

        [Test]
        public void StaticToStringWorks()
        {
            Assert.AreEqual("FirstValue", Enum.ToString(typeof(TestEnum), TestEnum.FirstValue));
            Assert.AreEqual("FirstValue, ThirdValue", Enum.ToString(typeof(FlagsEnum), FlagsEnum.FirstValue | FlagsEnum.ThirdValue));
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(TestEnum.FirstValue.GetHashCode(), TestEnum.FirstValue.GetHashCode());
            Assert.AreNotEqual(TestEnum.SecondValue.GetHashCode(), TestEnum.FirstValue.GetHashCode());
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.True(TestEnum.FirstValue.Equals(TestEnum.FirstValue));
            Assert.False(TestEnum.FirstValue.Equals(TestEnum.SecondValue));
        }

        [Test]
        public void ConversionsToEnumAreTreatedAsConversionsToTheUnderlyingType_SPI_1596()
        {
            Assert.AreEqual(0, (TestEnum)(object)0);
            // #1596
            Assert.Throws<InvalidCastException>(() =>
            {
                var _ = (TestEnum)(object)0.5;
            });
        }

        [Test]
        public void GetValuesWorks()
        {
            Array values = Enum.GetValues(typeof(TestEnum));
            Assert.AreEqual(3, values.Length);
            Assert.AreEqual(TestEnum.FirstValue, values.GetValue(0));
            Assert.AreEqual(TestEnum.SecondValue, values.GetValue(1));
            Assert.AreEqual(TestEnum.ThirdValue, values.GetValue(2));

            values = Enum.GetValues(typeof(FlagsEnum));
            Assert.AreEqual(4, values.Length);
            Assert.AreEqual(FlagsEnum.None, values.GetValue(0));
            Assert.AreEqual(FlagsEnum.FirstValue, values.GetValue(1));
            Assert.AreEqual(FlagsEnum.SecondValue, values.GetValue(2));
            Assert.AreEqual(FlagsEnum.ThirdValue, values.GetValue(3));
        }
    }
}