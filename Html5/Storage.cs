namespace Bridge.Html5
{
    [External]
    [Name("Storage")]
    public class Storage
    {
        private Storage()
        {
        }

        /// <summary>
        ///
        /// </summary>
        public readonly int Length;

        /// <summary>
        ///
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public override object this[string key]
        {
            get
            {
                return null;
            }
            set
            {
            }
        }

        /// <summary>
        ///
        /// </summary>
        public virtual void Clear()
        {
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public virtual object GetItem(string key)
        {
            return null;
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public virtual string Key(int index)
        {
            return null;
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="key"></param>
        public virtual void RemoveItem(string key)
        {
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="key"></param>
        /// <param name="value"></param>
        public virtual void SetItem(string key, object value)
        {
        }
    }
}
