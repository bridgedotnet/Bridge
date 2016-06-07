namespace Bridge.Html5
{
    [External]
    [Name("DragEvent")]
    public class DragEvent : MouseEvent
    {
        internal DragEvent()
        {
        }

        public DragEvent(string type)
        {

        }

        public DragEvent(string type, DragEventInit eventInit)
        {

        }

        /// <summary>
        /// The data that is transferred during a drag and drop interaction.
        /// </summary>
        public readonly DataTransfer DataTransfer;
    }

    [External]
    [Name("Object")]
    public class DragEventInit : MouseEventInit
    {
        /// <summary>
        /// 
        /// </summary>
        public DataTransfer DataTransfer;
    }

    /// <summary>
    /// A generic version of the DragEvent class. The type parameter is a type of CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type.</typeparam>
    [External]
    [Name("DragEvent")]
    public class DragEvent<TCurrentTarget> : MouseEvent<TCurrentTarget> where TCurrentTarget : Element { }
}
