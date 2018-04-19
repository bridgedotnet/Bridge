// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

/*============================================================
**
** Interface:  KeyValuePair
** 
** 
**
**
** Purpose: Generic key-value pair for dictionary enumerators.
**
** 
===========================================================*/
namespace System.Collections.Generic
{

    using System;
    using System.Text;

    // A KeyValuePair holds a key and a value from a dictionary.
    // It is used by the IEnumerable<T> implementation for both IDictionary<TKey, TValue>
    // and IReadOnlyDictionary<TKey, TValue>.
    [Bridge.Immutable]
    [Serializable]
    public struct KeyValuePair<TKey, TValue>
    {
        private TKey key;
        private TValue value;

        public KeyValuePair(TKey key, TValue value)
        {
            this.key = key;
            this.value = value;
        }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public TKey Key
        {
            get { return key; }
        }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public TValue Value
        {
            get { return value; }
        }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public override string ToString()
        {
            StringBuilder s = StringBuilderCache.Acquire();
            s.Append('[');
            if (Key != null)
            {
                s.Append(Key.ToString());
            }
            s.Append(", ");
            if (Value != null)
            {
                s.Append(Value.ToString());
            }
            s.Append(']');
            return StringBuilderCache.GetStringAndRelease(s);
        }

        public void Deconstruct(out TKey key, out TValue value)
        {
            key = Key;
            value = Value;
        }
    }
}
