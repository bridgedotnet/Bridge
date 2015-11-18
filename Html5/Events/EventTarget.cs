using System;

namespace Bridge.Html5
{
    [External]
    [Name("EventTarget")]
    public abstract class EventTarget
    {
        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual void AddEventListener(string type, Delegate listener)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual void AddEventListener(string type, Action listener)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual void AddEventListener(EventType type, Delegate listener)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual void AddEventListener(EventType type, Action listener)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual void AddEventListener(string type, Action<Event> listener)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual void AddEventListener(EventType type, Action<Event> listener)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual void AddEventListener(string type, Delegate listener, bool useCapture)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual void AddEventListener(string type, Action listener, bool useCapture)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual void AddEventListener(EventType type, Delegate listener, bool useCapture)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual void AddEventListener(EventType type, Action listener, bool useCapture)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual void AddEventListener(string type, Action<Event> listener, bool useCapture)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual void AddEventListener(EventType type, Action<Event> listener, bool useCapture)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual void AddEventListener(string type, IEventListener listener)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual void AddEventListener(EventType type, IEventListener listener)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual void AddEventListener(string type, IEventListener listener, bool useCapture)
        {
        }

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual void AddEventListener(EventType type, IEventListener listener, bool useCapture)
        {
        }

        /// <summary>
        /// Dispatches the specified event to the current element.
        /// To create an event object use the createEvent method in Firefox, Opera, Google Chrome, Safari and Internet Explorer from version 9. After the new event is created, initialize it first (for details, see the page for the createEvent method). When the event is initialized, it is ready for dispatching.
        /// </summary>
        /// <param name="e">Required. Reference to an event object to be dispatched.</param>
        /// <returns>Boolean that indicates whether the default action of the event was not canceled.</returns>
        public virtual bool DispatchEvent(Event e)
        {
            return false;
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual void RemoveEventListener(EventType type, IEventListener listener)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual void RemoveEventListener(EventType type, IEventListener listener, bool capture)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual void RemoveEventListener(string type, IEventListener listener)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual void RemoveEventListener(string type, IEventListener listener, bool capture)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual void RemoveEventListener(EventType type, Delegate listener)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual void RemoveEventListener(EventType type, Action listener)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual void RemoveEventListener(EventType type, Delegate listener, bool capture)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual void RemoveEventListener(EventType type, Action listener, bool capture)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual void RemoveEventListener(string type, Delegate listener)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual void RemoveEventListener(string type, Action listener)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual void RemoveEventListener(string type, Delegate listener, bool capture)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual void RemoveEventListener(string type, Action listener, bool capture)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual void RemoveEventListener(EventType type, Action<Event> listener)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual void RemoveEventListener(EventType type, Action<Event> listener, bool capture)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual void RemoveEventListener(string type, Action<Event> listener)
        {
        }

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual void RemoveEventListener(string type, Action<Event> listener, bool capture)
        {
        }
    }
}
