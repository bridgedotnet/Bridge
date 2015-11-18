namespace Bridge.Html5
{
    /// <summary>
    /// The DOM CustomEvent are events initialized by an application for any purpose.
    /// </summary>
    [External]
    [Name("CustomEvent")]
    public class CustomEvent : Event
    {
        private CustomEvent()
        {
        }

        public CustomEvent(string type, CustomEventInit eventInitDict)
        {
        }

        /// <summary>
        /// The data passed when initializing the event.
        /// </summary>
        public readonly object Detail;

        /// <summary>
        ///
        /// </summary>
        /// <param name="type"></param>
        /// <param name="canBubble"></param>
        /// <param name="cancelable"></param>
        /// <param name="detail"></param>
        public virtual void InitCustomEvent(string type, bool canBubble, bool cancelable, object detail)
        {
        }
    }

    [External]
    [Name("Object")]
    public class CustomEventInit : EventInit
    {
        /// <summary>
        /// The data passed when initializing the event.
        /// </summary>
        public object Detail;
    }
}
