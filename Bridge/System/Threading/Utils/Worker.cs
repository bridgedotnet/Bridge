using System;
using Bridge;

namespace System.Threading.Utils
{
	[External]
	public class Worker
	{
		[Template("new Worker({Uri})")]
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

