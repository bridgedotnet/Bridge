// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/*=============================================================================
**
**
** Purpose: An array implementation of a generic stack.
**
**
=============================================================================*/

namespace System.Collections.Generic
{
    // A simple stack of objects.  Internally it is implemented as an array,
    // so Push can be O(n).  Pop is O(1).
    public class Stack<T> : IEnumerable<T>, System.Collections.ICollection, IReadOnlyCollection<T>
    {
        private T[] _array;     // Storage for stack elements
        private int _size;           // Number of items in the stack.
        private int _version;        // Used to keep enumerator in sync w/ collection.

        private const int DefaultCapacity = 4;

        public Stack()
        {
            _array = new T[0];
        }

        // Create a stack with a specific initial capacity.  The initial capacity
        // must be a non-negative number.
        public Stack(int capacity)
        {
            if (capacity < 0)
                throw new ArgumentOutOfRangeException("capacity", "Non-negative number required.");
            _array = new T[capacity];
        }

        // Fills a Stack with the contents of a particular collection.  The items are
        // pushed onto the stack in the same order they are read by the enumerator.
        public Stack(IEnumerable<T> collection)
        {
            if (collection == null)
                throw new ArgumentNullException("collection");
            int length;
            _array = EnumerableHelpers.ToArray(collection, out length);
            _size = length;
        }

        public int Count
        {
            get
            {
                return _size;
            }
        }

        bool ICollection.IsSynchronized { get { return false; } }

        object ICollection.SyncRoot { get { return this; } }

        public bool IsReadOnly
        {
            get { return false; }
        }

        // Removes all Objects from the Stack.
        public void Clear()
        {
            Array.Clear(_array, 0, _size); // Don't need to doc this but we clear the elements so that the gc can reclaim the references.
            _size = 0;
            _version++;
        }

        public bool Contains(T item)
        {
            int count = _size;

            EqualityComparer<T> c = EqualityComparer<T>.Default;
            while (count-- > 0)
            {
                if (item == null)
                {
                    if (_array[count] == null)
                        return true;
                }
                else if (_array[count] != null && c.Equals(_array[count], item))
                {
                    return true;
                }
            }
            return false;
        }

        // Copies the stack into an array.
        public void CopyTo(T[] array, int arrayIndex)
        {
            if (array == null)
            {
                throw new ArgumentNullException("array");
            }

            if (arrayIndex < 0 || arrayIndex > array.Length)
            {
                throw new ArgumentOutOfRangeException("arrayIndex", "Non-negative number required.");
            }

            if (array.Length - arrayIndex < _size)
            {
                throw new ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
            }

            if (array != _array)
            {
                int srcIndex = 0;
                int dstIndex = arrayIndex + _size;
                for (int i = 0; i < _size; i++)
                    array[--dstIndex] = _array[srcIndex++];
            }
            else
            {
                // Legacy fallback in case we ever end up copying within the same array.
                Array.Copy(_array, 0, array, arrayIndex, _size);
                Array.Reverse(array, arrayIndex, _size);
            }
        }

        public void CopyTo(Array array, int arrayIndex)
        {
            if (array == null)
            {
                throw new ArgumentNullException("array");
            }

            if (array.Rank != 1)
            {
                throw new ArgumentException("Only single dimensional arrays are supported for the requested action.");
            }

            if (array.GetLowerBound(0) != 0)
            {
                throw new ArgumentException("The lower bound of target array must be zero.");
            }

            if (arrayIndex < 0 || arrayIndex > array.Length)
            {
                throw new ArgumentOutOfRangeException("arrayIndex", "Non-negative number required.");
            }

            if (array.Length - arrayIndex < _size)
            {
                throw new ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
            }

            try
            {
                Array.Copy(_array, 0, array, arrayIndex, _size);
                Array.Reverse(array, arrayIndex, _size);
            }
            catch (Exception)
            {
                throw new ArgumentException("Target array type is not compatible with the type of items in the collection.");
            }
        }

        // Returns an IEnumerator for this Stack.
        public Enumerator GetEnumerator()
        {
            return new Enumerator(this);
        }

        IEnumerator<T> IEnumerable<T>.GetEnumerator()
        {
            return new Enumerator(this);
        }

        System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
        {
            return new Enumerator(this);
        }

        public void TrimExcess()
        {
            int threshold = (int)(((double)_array.Length) * 0.9);
            if (_size < threshold)
            {
                var localArray = _array;
                Array.Resize(ref localArray, _size);
                _array = localArray;
                _version++;
            }
        }

        // Returns the top object on the stack without removing it.  If the stack
        // is empty, Peek throws an InvalidOperationException.
        public T Peek()
        {
            if (_size == 0)
                throw new InvalidOperationException("Stack empty.");
            return _array[_size - 1];
        }

        // Pops an item from the top of the stack.  If the stack is empty, Pop
        // throws an InvalidOperationException.
        public T Pop()
        {
            if (_size == 0)
                throw new InvalidOperationException("Stack empty.");
            _version++;
            T item = _array[--_size];
            _array[_size] = default(T);     // Free memory quicker.
            return item;
        }

        // Pushes an item to the top of the stack.
        //
        public void Push(T item)
        {
            if (_size == _array.Length)
            {
                var localArray = _array;
                Array.Resize(ref localArray, (_array.Length == 0) ? DefaultCapacity : 2 * _array.Length);
                _array = localArray;
            }
            _array[_size++] = item;
            _version++;
        }

        // Copies the Stack to an array, in the same order Pop would return the items.
        public T[] ToArray()
        {
            T[] objArray = new T[_size];
            int i = 0;
            while (i < _size)
            {
                objArray[i] = _array[_size - i - 1];
                i++;
            }
            return objArray;
        }

        public struct Enumerator : IEnumerator<T>,
            System.Collections.IEnumerator
        {
            private Stack<T> _stack;
            private int _index;
            private int _version;
            private T _currentElement;

            internal Enumerator(Stack<T> stack)
            {
                _stack = stack;
                _version = _stack._version;
                _index = -2;
                _currentElement = default(T);
            }

            public void Dispose()
            {
                _index = -1;
            }

            public bool MoveNext()
            {
                bool retval;
                if (_version != _stack._version)
                    throw new InvalidOperationException("Collection was modified; enumeration operation may not execute.");
                if (_index == -2)
                {  // First call to enumerator.
                    _index = _stack._size - 1;
                    retval = (_index >= 0);
                    if (retval)
                        _currentElement = _stack._array[_index];
                    return retval;
                }
                if (_index == -1)
                {  // End of enumeration.
                    return false;
                }

                retval = (--_index >= 0);
                if (retval)
                    _currentElement = _stack._array[_index];
                else
                    _currentElement = default(T);
                return retval;
            }

            public T Current
            {
                get
                {
                    if (_index == -2)
                        throw new InvalidOperationException("Enumeration has not started. Call MoveNext.");
                    if (_index == -1)
                        throw new InvalidOperationException("Enumeration already finished.");
                    return _currentElement;
                }
            }

            Object System.Collections.IEnumerator.Current
            {
                get
                {
                    if (_index == -2)
                        throw new InvalidOperationException("Enumeration has not started. Call MoveNext.");
                    if (_index == -1)
                        throw new InvalidOperationException("Enumeration already finished.");
                    return _currentElement;
                }
            }

            void System.Collections.IEnumerator.Reset()
            {
                if (_version != _stack._version)
                    throw new InvalidOperationException("Collection was modified; enumeration operation may not execute.");
                _index = -2;
                _currentElement = default(T);
            }
        }
    }
}
