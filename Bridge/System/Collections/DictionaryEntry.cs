using Bridge;

namespace System.Collections
{
    /// <summary>
    /// A DictionaryEntry holds a key and a value from a dictionary.
    /// It is returned by IDictionaryEnumerator::GetEntry().
    /// </summary>
    [Reflectable]
    [Serializable]
    public struct DictionaryEntry
    {
        private Object _key;
        private Object _value;

        /// <summary>
        /// Constructs a new DictionaryEnumerator by setting the Key
        /// and Value fields appropriately.
        /// </summary>
        /// <param name="key"></param>
        /// <param name="value"></param>
        public DictionaryEntry(Object key, Object value)
        {
            _key = key;
            _value = value;
        }

        public Object Key
        {
            get
            {
                return _key;
            }

            set
            {
                _key = value;
            }
        }

        public Object Value
        {
            get
            {
                return _value;
            }

            set
            {
                _value = value;
            }
        }
    }
}