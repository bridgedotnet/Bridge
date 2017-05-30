namespace System.Collections.Generic
{
    internal sealed class BitHelper
    {
        private const byte MarkedBitFlag = 1;
        private const byte IntSize = 32;
        private readonly int _length;
        private readonly int[] _array;

        internal BitHelper(int[] bitArray, int length)
        {
            _array = bitArray;
            _length = length;
        }

        internal void MarkBit(int bitPosition)
        {
            int bitArrayIndex = bitPosition / IntSize;
            if (bitArrayIndex < _length && bitArrayIndex >= 0)
            {
                int flag = (MarkedBitFlag << (bitPosition % IntSize));
                _array[bitArrayIndex] |= flag;
            }
        }

        internal bool IsMarked(int bitPosition)
        {
            int bitArrayIndex = bitPosition / IntSize;
            if (bitArrayIndex < _length && bitArrayIndex >= 0)
            {
                int flag = (MarkedBitFlag << (bitPosition % IntSize));
                return ((_array[bitArrayIndex] & flag) != 0);
            }
            return false;
        }

        internal static int ToIntArrayLength(int n)
        {
            return n > 0 ? ((n - 1) / IntSize + 1) : 0;
        }
    }
}
