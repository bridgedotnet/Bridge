using System;
using Bridge;

namespace System.Threading.Utils
{
	public static class WorkerThreadManager
	{
		private static bool _isWebWorker = false;
		private static Worker _worker;
		private static int _threadId;

		public static bool IsWebWorker()
		{
			return _isWebWorker;
		}

		public static void WorkerThreadManagerEntryPoint()
		{
			_isWebWorker = true;

			_worker = Script.Get<Worker>("window");
			_worker.OnMessage = HandleMessage;
		}

		[Template("importScripts({script})")]
		private static extern void ImportScript(string script);

		public enum MessageType
		{
			LoadScripts,
			Start,
			Finish,
			Exception
		}

		[ObjectLiteral]
		public class WebWorkerMessage
		{
			public MessageType MsgType;
			public object Data;
		}

		[ObjectLiteral]
		public class WebWorkerStartMessage
		{
			public int ThreadId;
			public string ThreadEntryPoint;
			public object ThreadParam;
		}

		[ObjectLiteral]
		public class WebWorkerFinishMessage
		{
			public int ThreadId;
			public object Result;
		}

		[ObjectLiteral]
		public class WebWorkerExceptionMessage
		{
			public int ThreadId;
		}

		public static object GetObjectRefFromString(object o, string s)
		{
			if (!s.Contains(".")) return Script.Write<object>("o[s]");

			var bits = s.Split('.');
			var s1 = bits[0];
			var s2 = bits.Slice(1).Join(".");
			return GetObjectRefFromString(Script.Write<object>("o[s1]"), s2);
		}

		private static void HandleMessage(Worker.DataEvent arg)
		{
			var msg = (WebWorkerMessage)Bridge.Json.Deserialize<WebWorkerMessage>(arg.Data);
			switch (msg.MsgType)
			{
				case MessageType.LoadScripts:
					var scripts = (string[])msg.Data;
					foreach (var s in scripts)
					{
						Script.Call("console.log", "Loading script: ", s);
						ImportScript(s);
					}
					break;
				case MessageType.Start:
					var startData = (WebWorkerStartMessage)msg.Data;

					var entryPointRef = GetObjectRefFromString(Script.Get<object>("window"), startData.ThreadEntryPoint);
					var param = startData.ThreadParam;

					try
					{
						var result = Script.Write<object>("entryPointRef(param)", entryPointRef, param);

						_worker.PostMessage(
							Bridge.Json.Serialize(
								new WebWorkerMessage
								{
									MsgType = MessageType.Finish,
									Data = new WebWorkerFinishMessage
									{
										ThreadId = startData.ThreadId,
										// This is a work around for not being able to serialize boxed primitives such is System.Int32
										Result = Script.Call<object>("Bridge.unbox", result)
									}
								}
							)
						);
					}
					catch (Exception e)
					{
						_worker.PostMessage(
							Bridge.Json.Serialize(
								new WebWorkerMessage
								{
									MsgType = MessageType.Exception,
									Data = new WebWorkerExceptionMessage
									{
										ThreadId = startData.ThreadId,
									}
								}
							)
						);

						throw;
					}
					break;
				default:
					throw new ArgumentOutOfRangeException();
			}
		}
	}
}

