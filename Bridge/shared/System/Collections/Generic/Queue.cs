// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

namespace System.Collections.Generic
{
    // A simple Queue of generic objects.  Internally it is implemented as a
    // circular buffer, so Enqueue can be O(n).  Dequeue is O(1).
    public class Queue<T> : IEnumerable<T>, System.Collections.ICollection, IReadOnlyCollection<T>
    {
        private T[] _array;
        private int _head;       // First valid element in the queue
        private int _tail;       // Last valid element in the queue
        private int _size;       // Number of elements.
        private int _version;

        private const int MinimumGrow = 4;
        private const int GrowFactor = 200;  // double each time
        private const int DefaultCapacity = 4;

        // Creates a queue with room for capacity objects. The default initial
        // capacity and grow factor are used.
        public Queue()
        {
            _array = new T[0];
        }

        // Creates a queue with room for capacity objects. The default grow factor
        // is used.
        public Queue(int capacity)
        {
            if (capacity < 0)
                throw new ArgumentOutOfRangeException("capacity", "Non-negative number required.");
            _array = new T[capacity];
        }

        // Fills a Queue with the elements of an ICollection.  Uses the enumerator
        // to get each of the elements.
        public Queue(IEnumerable<T> collection)
        {
            if (collection == null)
                throw new ArgumentNullException("collection");

            _array = new T[DefaultCapacity];

            using (IEnumerator<T> en = collection.GetEnumerator())
            {
                while (en.MoveNext())
                {
                    Enqueue(en.Current);
                }
            }
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

        /// <summary>
        /// Copies the <see cref="Queue{T}"/> elements to an existing one-dimensional Array, starting at the specified array index.
        /// </summary>
        /// <param name="array">The one-dimensional Array that is the destination of the elements copied from <see cref="Queue{T}"/>. The Array must have zero-based indexing.</param>
        /// <param name="index">The zero-based index in array at which copying begins.</param>
        public virtual void CopyTo(Array array, int index)
        {
            if (array == null)
            {
                throw new ArgumentNullException("array");
            }

            if (array.Rank != 1)
            {
                throw new ArgumentException("Only single dimensional arrays are supported for the requested action.");
            }

            if (index < 0)
            {
                throw new ArgumentOutOfRangeException("index");
            }

            int arrayLen = array.Length;
            if (arrayLen - index < _size)
            {
                throw new ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
            }

            int numToCopy = _size;
            if (numToCopy == 0)
            {
                return;
            }

            int firstPart = (_array.Length - _head < numToCopy) ? _array.Length - _head : numToCopy;
            Array.Copy(_array, _head, array, index, firstPart);

            numToCopy -= firstPart;
            if (numToCopy > 0)
            {
                Array.Copy(_array, 0, array, index + _array.Length - _head, numToCopy);
            }
        }

        // Removes all Objects from the queue.
        public void Clear()
        {
            if (_head < _tail)
                Array.Clear(_array, _head, _size);
            else
            {
                Array.Clear(_array, _head, _array.Length - _head);
                Array.Clear(_array, 0, _tail);
            }

            _head = 0;
            _tail = 0;
            _size = 0;
            _version++;
        }

        // CopyTo copies a collection into an Array, starting at a particular
        // index into the array.
        public void CopyTo(T[] array, int arrayIndex)
        {
            if (array == null)
            {
                throw new ArgumentNullException("array");
            }

            if (arrayIndex < 0 || arrayIndex > array.Length)
            {
                throw new ArgumentOutOfRangeException("arrayIndex", "Index was out of range. Must be non-negative and less than the size of the collection.");
            }

            int arrayLen = array.Length;
            if (arrayLen - arrayIndex < _size)
            {
                throw new ArgumentException("Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
            }

            int numToCopy = (arrayLen - arrayIndex < _size) ? (arrayLen - arrayIndex) : _size;
            if (numToCopy == 0)
                return;

            int firstPart = (_array.Length - _head < numToCopy) ? _array.Length - _head : numToCopy;
            Array.Copy(_array, _head, array, arrayIndex, firstPart);
            numToCopy -= firstPart;
            if (numToCopy > 0)
            {
                Array.Copy(_array, 0, array, arrayIndex + _array.Length - _head, numToCopy);
            }
        }

        // Adds item to the tail of the queue.
        public void Enqueue(T item)
        {
            if (_size == _array.Length)
            {
                int newcapacity = _array.Length * GrowFactor / 100;
                if (newcapacity < _array.Length + MinimumGrow)
                {
                    newcapacity = _array.Length + MinimumGrow;
                }
                SetCapacity(newcapacity);
            }

            _array[_tail] = item;
            _tail = MoveNext(_tail);
            _size++;
            _version++;
        }

        // GetEnumerator returns an IEnumerator over this Queue.  This
        // Enumerator will support removing.
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

        // Removes the object at the head of the queue and returns it. If the queue
        // is empty, this method simply returns null.
        public T Dequeue()
        {
            if (_size == 0)
                throw new InvalidOperationException("Queue empty.");

            T removed = _array[_head];
            _array[_head] = default(T);
            _head = MoveNext(_head);
            _size--;
            _version++;
            return removed;
        }

        // Returns the object at the head of the queue. The object remains in the
        // queue. If the queue is empty, this method throws an
        // InvalidOperationException.
        public T Peek()
        {
            if (_size == 0)
                throw new InvalidOperationException("Queue empty.");

            return _array[_head];
        }

        // Returns true if the queue contains at least one object equal to item.
        // Equality is determined using item.Equals().
        //
        // Exceptions: ArgumentNullException if item == null.
        public bool Contains(T item)
        {
            int index = _head;
            int count = _size;

            EqualityComparer<T> c = EqualityComparer<T>.Default;
            while (count-- > 0)
            {
                if (item == null)
                {
                    if (_array[index] == null)
                        return true;
                }
                else if (_array[index] != null && c.Equals(_array[index], item))
                {
                    return true;
                }
                index = MoveNext(index);
            }

            return false;
        }

        private T GetElement(int i)
        {
            return _array[(_head + i) % _array.Length];
        }

        // Iterates over the objects in the queue, returning an array of the
        // objects in the Queue, or an empty array if the queue is empty.
        // The order of elements in the array is first in to last in, the same
        // order produced by successive calls to Dequeue.
        public T[] ToArray()
        {
            T[] arr = new T[_size];
            if (_size == 0)
                return arr; // consider replacing with Array.Empty<T>() to be consistent with non-generic Queue

            if (_head < _tail)
            {
                Array.Copy(_array, _head, arr, 0, _size);
            }
            else
            {
                Array.Copy(_array, _head, arr, 0, _array.Length - _head);
                Array.Copy(_array, 0, arr, _array.Length - _head, _tail);
            }

            return arr;
        }

        // PRIVATE Grows or shrinks the buffer to hold capacity objects. Capacity
        // must be >= _size.
        private void SetCapacity(int capacity)
        {
            T[] newarray = new T[capacity];
            if (_size > 0)
            {
                if (_head < _tail)
                {
                    Array.Copy(_array, _head, newarray, 0, _size);
                }
                else
                {
                    Array.Copy(_array, _head, newarray, 0, _array.Length - _head);
                    Array.Copy(_array, 0, newarray, _array.Length - _head, _tail);
                }
            }

            _array = newarray;
            _head = 0;
            _tail = (_size == capacity) ? 0 : _size;
            _version++;
        }

        // Increments the index wrapping it if necessary.
        private int MoveNext(int index)
        {
            // It is tempting to use the remainder operator here but it is actually much slower
            // than a simple comparison and a rarely taken branch.
            int tmp = index + 1;
            return (tmp == _array.Length) ? 0 : tmp;
        }

        public void TrimExcess()
        {
            int threshold = (int)(_array.Length * 0.9);
            if (_size < threshold)
            {
                SetCapacity(_size);
            }
        }

        // Implements an enumerator for a Queue.  The enumerator uses the
        // internal version number of the list to ensure that no modifications are
        // made to the list while an enumeration is in progress.
        public struct Enumerator : IEnumerator<T>,
            System.Collections.IEnumerator
        {
            private Queue<T> _q;
            private int _index;   // -1 = not started, -2 = ended/disposed
            private int _version;
            private T _currentElement;

            internal Enumerator(Queue<T> q)
            {
                _q = q;
                _version = _q._version;
                _index = -1;
                _currentElement = default(T);
            }

            public void Dispose()
            {
                _index = -2;
                _currentElement = default(T);
            }

            public bool MoveNext()
            {
                if (_version != _q._version)
                    throw new InvalidOperationException("Collection was modified; enumeration operation may not execute.");

                if (_index == -2)
                    return false;

                _index++;

                if (_index == _q._size)
                {
                    _index = -2;
                    _currentElement = default(T);
                    return false;
                }

                _currentElement = _q.GetElement(_index);
                return true;
            }

            public T Current
            {
                get
                {
                    if (_index < 0)
                    {
                        if (_index == -1)
                            throw new InvalidOperationException("Enumeration has not started. Call MoveNext.");
                        else
                            throw new InvalidOperationException("Enumeration already finished.");
                    }
                    return _currentElement;
                }
            }

            Object System.Collections.IEnumerator.Current
            {
                get
                {
                    return Current;
                }
            }

            void System.Collections.IEnumerator.Reset()
            {
                if (_version != _q._version)
                    throw new InvalidOperationException("Collection was modified; enumeration operation may not execute.");
                _index = -1;
                _currentElement = default(T);
            }
        }
    }
}
