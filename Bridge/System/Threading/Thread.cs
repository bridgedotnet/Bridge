using Bridge;
using System.Threading.Utils;

using System.ComponentModel;
using System.Linq;
using System.Collections.Generic;

namespace System.Threading
{
	public class Thread : IDisposable
	{
		//public extern int ManagedThreadId
		//{
		//    get;
		//}

		//public static extern Thread CurrentThread
		//{
		//    get;
		//}

		/// <summary>
		/// Suspends the current thread for the specified number of milliseconds.
		/// Implemented as a loop checking timeout each iteration.
		/// Please note maximum 1e7 iterations
		/// </summary>
		/// <param name="millisecondsTimeout">The number of milliseconds for which the thread is suspended. Should be positive or -1. -1 works the same as 0 (not Infinite)</param>
		[Template("Bridge.sleep({millisecondsTimeout})")]
		public extern static void Sleep(int millisecondsTimeout);

		/// <summary>
		/// Suspends the current thread for the specified anout of time.
		/// Implemented as a loop checking timeout each iteration.
		/// Please note maximum 1e7 iterations
		/// </summary>
		/// <param name="timeout">The amount of time for which the thread is suspended. Should be positive or -1. -1 works the same as 0 (not Infinite)</param>
		[Template("Bridge.sleep(null, {timeout})")]
		public extern static void Sleep(TimeSpan timeout);


		public static string GetCurrentJsFile()
		{
			try
			{
				Script.Write("throw new Error()");
			}
			catch (ErrorException error)
			{
				var stack = (string)((dynamic)error).error.stack;
				var stackLines = stack.Split('\n');
				foreach (var line in stackLines.Skip(2))
				{
					if (line.Contains("://") && line.Contains(".js"))
					{
						var s = line.Split('(').Last().Split(new[] { ".js:" }, StringSplitOptions.None).First() + ".js";
						return s;
					}
				}
			}

			return null;
		}

		public Thread(string[] scripts)
		{
			// Create the worker
			_worker = new Worker(GetCurrentJsFile());

			// Set the message handler to handle messages from the worker
			_worker.OnMessage = HandleMessage;

			// Ask the worker to load the scripts provider
			_worker.PostMessage(
				Bridge.Json.Serialize(
					new WorkerThreadManager.WebWorkerMessage
					{
						MsgType = WorkerThreadManager.MessageType.LoadScripts,
						Data = scripts
					}
				)
			);

			// Thread starts in an alive state
			_isDead = false;
		}

		[Template("start('{entryPoint:raw}', {param}, {onResult})")]
		public void Start(ThreadStart entryPoint, object param, Action<Thread, object, object> onResult = null) { }

		public void Start(string entryPoint, object param, Action<Thread, object, object> onResult = null)
		{
			// Verify that the entry point exists and we can get a reference to the static function
			try
			{
				if (WorkerThreadManager.GetObjectRefFromString(Script.Get<object>("window"), entryPoint) == null)
					throw new Exception();
			}
			catch (Exception)
			{
				throw new ArgumentException("Thread entry point " + entryPoint + " doesn't seem to exist, or is not a static function");
			}

			// Can't start on a dead thread
			if (_isDead)
				throw new InvalidOperationException("Attempt made to call Start on a dead thread");

			// Can only run one thread start if there is no on result callback
			if (onResult == null && _queuedStarts.Count() > 0)
				throw new InvalidOperationException("Attempt made to queue thread starts with no valid OnResult handler");

			_worker.PostMessage(
				Bridge.Json.Serialize(
					new WorkerThreadManager.WebWorkerMessage
					{
						MsgType = WorkerThreadManager.MessageType.Start,
						Data = new WorkerThreadManager.WebWorkerStartMessage
						{
							ThreadId = _globalThreadIdCounter,
							ThreadEntryPoint = entryPoint,
							// This is a work around for not being able to serialize boxed primitives such is System.Int32
							ThreadParam = Script.Call<object>("Bridge.unbox", param)
						}
					}
				)
			);

			_queuedStarts.Add(_globalThreadIdCounter,
				new QueuedThreadStart
				{
					ThreadId = _globalThreadIdCounter,
					Param = param,
					OnResult = onResult
				}
		   	);

			// Increment the thread counter
			_globalThreadIdCounter++;
		}

		private void HandleMessage(Worker.DataEvent arg)
		{
			var msg = (WorkerThreadManager.WebWorkerMessage)Bridge.Json.Deserialize<WorkerThreadManager.WebWorkerMessage>(arg.Data);
			switch (msg.MsgType)
			{
				case WorkerThreadManager.MessageType.Finish:
					var finishMessage = (WorkerThreadManager.WebWorkerFinishMessage)msg.Data;
					var thread = _queuedStarts[finishMessage.ThreadId];
					if (thread.OnResult != null)
					{
						thread.OnResult(this, thread.Param, finishMessage.Result);
					}
					else 
					{
						_result = finishMessage.Result;
					}
					// Remove this finished thread from the list of queued threads
					_queuedStarts.Remove(thread.ThreadId);
					break;
				case WorkerThreadManager.MessageType.Exception:
					var exceptionMessage = (WorkerThreadManager.WebWorkerExceptionMessage)msg.Data;
					thread = _queuedStarts[exceptionMessage.ThreadId];
					// Remove this finished thread from the list of queued threads
					_queuedStarts.Remove(thread.ThreadId);
					throw new Exception("Unhandled exception in thread (" + thread.ThreadId + ")");
					break;
				default:
					throw new ArgumentOutOfRangeException();
			}
		}

		public void Join(Action onJoin)
		{
			if (_queuedStarts.Count() > 0)
			{
				Action<Action, int> setTimeout = (System.Action<System.Action, int>)Script.Get("window.setTimeout");
				setTimeout(() => Join(onJoin), 0);
			}
			else
			{
				onJoin();
			}
		}

		public void Abort()
		{
			Dispose();
		}

		public void Dispose()
		{
			if (!_isDead)
			{
				_worker.Terminate();
				_queuedStarts.Clear();
				_isDead = true;
			}
		}

		public object Result { get { return _result; } }

		public delegate object ThreadStart(object param);

		private object _result;
		private Worker _worker;
		private bool _isDead;

		private static int _globalThreadIdCounter;

		[ObjectLiteral]
		private class QueuedThreadStart
		{
			public int ThreadId;
			public object Param;
			public Action<Thread, object, object> OnResult;
		}

		private Dictionary<int, QueuedThreadStart> _queuedStarts = new Dictionary<int, QueuedThreadStart>();
	}
}