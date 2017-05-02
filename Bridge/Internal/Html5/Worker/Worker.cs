using System;

#if CORE
namespace Bridge.Internal.Html5
#else
namespace Bridge.Html5
#endif

{
#pragma warning disable 649 // CS0649  Field is never assigned to, and will always have its default value

    /// <summary>
    /// External binding to the Worker HTML5 interface
    /// </summary>
    [External]
    [Name("Worker")]
#if CORE
	internal
#else
    public
#endif
    class Worker
	{
		public Worker(string Uri)
		{
		}

		public extern void PostMessage(object o);

		public extern void Terminate();

        public class DataEvent
		{
			public object Data;
		}

		[Name("onmessage")]
		public Action<DataEvent> OnMessage;
	}
}

