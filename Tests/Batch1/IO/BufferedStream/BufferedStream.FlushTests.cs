// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using Bridge.Test.NUnit;
using System;
using System.IO;
using System.Threading.Tasks;

namespace Bridge.ClientTest.IO
{
    [Category(Constants.MODULE_IO)]
    [TestFixture(TestNameFormat = "BufferedStreamFlushTests - {0}")]
    public class BufferedStreamFlushTests
    {
        [Test]
        public void ShouldNotFlushUnderlyingStreamIfReadOnly()
        {
            var data = new bool[] { true, false };

            foreach (var underlyingCanSeek in data)
            {
                var underlying = new DelegateStream(
                    canReadFunc: () => true,
                    canWriteFunc: () => false,
                    canSeekFunc: () => underlyingCanSeek,
                    readFunc: (_, __, ___) => 123,
                    writeFunc: (_, __, ___) =>
                    {
                        throw new NotSupportedException();
                    },
                    seekFunc: (_, __) => 123L
                );

                var wrapper = new CallTrackingStream(underlying);

                var buffered = new BufferedStream(wrapper);
                buffered.ReadByte();

                buffered.Flush();
                Assert.AreEqual(0, wrapper.TimesCalled(nameof(wrapper.Flush)));
            }
        }

        [Test]
        public void ShouldAlwaysFlushUnderlyingStreamIfWritable()
        {
            var data = new Tuple<bool, bool>[] { new Tuple<bool, bool>(true, true), new Tuple<bool, bool>(true, false), new Tuple<bool, bool>(false, true), new Tuple<bool, bool>(false, false) };

            foreach (var item in data)
            {
                bool underlyingCanRead = item.Item1;
                bool underlyingCanSeek = item.Item2;

                var underlying = new DelegateStream
                (
                    canReadFunc: () => underlyingCanRead,
                    canWriteFunc: () => true,
                    canSeekFunc: () => underlyingCanSeek,
                    readFunc: (_, __, ___) => 123,
                    writeFunc: (_, __, ___) =>
                    {
                    },
                    seekFunc: (_, __) => 123L
                );

                var wrapper = new CallTrackingStream(underlying);

                var buffered = new BufferedStream(wrapper);

                buffered.Flush();
                Assert.AreEqual(1, wrapper.TimesCalled(nameof(wrapper.Flush)));

                buffered.WriteByte(0);

                buffered.Flush();
                Assert.AreEqual(2, wrapper.TimesCalled(nameof(wrapper.Flush)));
            }
        }
    }
}
