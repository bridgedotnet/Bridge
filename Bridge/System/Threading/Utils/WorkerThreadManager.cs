using System;
using Bridge;

namespace System.Threading.Utils
{
	public static class WorkerThreadManager
	{
		private static bool _isWebWorker = false;

		public static bool IsWebWorker()
		{
			return _isWebWorker;
		}

		public static void WorkerThreadManagerEntryPoint()
		{
			_isWebWorker = true;

			var worker = Script.Get<Worker>("window");
			worker.OnMessage = HandleMessage;

			for (var i = 0; i < 1000; i++)
				worker.PostMessage("Hello from the worker");
		}

		[Template("importScripts({script})")]
		private static extern void ImportScript(string script);

		public enum MessageType
		{
			LoadScripts
		}

		[ObjectLiteral]
		public class WebWorkerMessage
		{
			public MessageType MsgType;
			public object Data;
		}

		private static void HandleMessage(Worker.DataEvent arg)
		{
			var msg = (WebWorkerMessage) arg.Data;
			msg.Data = Script.Call<object>("JSON.parse", msg.Data);
			switch (msg.MsgType)
			{
				case MessageType.LoadScripts:
					var scripts = (string[]) msg.Data;
					foreach (var s in scripts)
					{
						Script.Call("console.log", "Loading script: ", s);
						ImportScript(s);
					}
					break;
				default:
					throw new ArgumentOutOfRangeException();
			}
		}
	}
}

