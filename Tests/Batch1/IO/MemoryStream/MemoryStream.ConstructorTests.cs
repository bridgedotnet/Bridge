// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using Bridge.Test.NUnit;
using System;
using System.IO;

namespace Bridge.ClientTest.IO
{
    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "MemoryStream_ConstructorTests - {0}")]
    public class MemoryStream_ConstructorTests
    {
        [Test]
        public static void MemoryStream_Ctor_NegativeIndeces()
        {
            var data = new Tuple<int, int, int>[]
            {
                new Tuple<int, int, int>(10, -1, int.MaxValue),
                new Tuple<int, int, int>(10, 6, -1)
            };

            foreach (var item in data)
            {
                int arraySize = item.Item1;
                int index = item.Item2;
                int count = item.Item3;

                Assert.Throws<ArgumentOutOfRangeException>(() => new MemoryStream(new byte[arraySize], index, count));
            }
        }

        [Test]
        public static void MemoryStream_Ctor_OutOfRangeIndeces()
        {
            var data = new Tuple<int, int, int>[]
            {
                new Tuple<int, int, int>(1, 2, 1),
                new Tuple<int, int, int>(7, 8, 2)
            };

            foreach (var item in data)
            {
                int arraySize = item.Item1;
                int index = item.Item2;
                int count = item.Item3;

                Assert.Throws<ArgumentException>(() => new MemoryStream(new byte[arraySize], index, count));
            }
        }

        [Test]
        public static void MemoryStream_Ctor_NullArray()
        {
            Assert.Throws<ArgumentNullException>(() => new MemoryStream(null, 5, 2));
        }

        [Test]
        public static void MemoryStream_Ctor_InvalidCapacities()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() => new MemoryStream(int.MinValue));
            Assert.Throws<ArgumentOutOfRangeException>(() => new MemoryStream(-1));
        }
    }
}
