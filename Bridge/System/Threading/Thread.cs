using Bridge;
using System.Threading.Utils;

using System.ComponentModel;
using System.Linq;
using System.Collections.Generic;

namespace System.Threading
{
	public class Thread : IDisposable
	{
		/// <summary>
		/// Gets the managed thread identifier for this thread. If this is a web worker it returns the thread id of the web worker
		/// otherwise it returns the currently running thread id where web workers are not available, or if this is the main thread, 0
		/// </summary>
		/// <value>The managed thread identifier.</value>
		public int ManagedThreadId
		{
			get
			{
				// Check if this thread is a web worker
				if (WorkerThreadManager.IsWebWorker())
				{
					// Yes, return the web worker thread id
					return WorkerThreadManager.GetThreadId();
				}
				else
				{
					// No, return the current thread id
					return _currentThreadId;
				}
			}
		}

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

		/// <summary>
		/// Gets the Uri of the javascript file that called this function.
		/// Useful for fetching the file paths for javascript files used in threading.
		/// Used internally by System.Threading.Thread to get the bridge.js file to load System.Threading.Utils.WorkerThreadManager in a web worker.
		/// </summary>
		/// <returns>The current js file path (As a fully formed Uri).</returns>
		public static string GetCurrentJsFilePath()
		{
			// Need to create a stack trace so we can break down the files in the stack trace and work out which file called us
			try
			{
				// Raise a new basic javascript error
				Script.Write("throw new Error()");
			}
			catch (ErrorException error)
			{
				// Catch the error and get the stack trace from the error
				var stack = (string)((dynamic)error).error.stack;
				// Split the stack trace in to lines
				var stackLines = stack.Split('\n');
				// Next we skip over the first two lines in the stack trace, since the first line is "Error" and the second line is this javascript file where the exception occurred
				var line = stackLines.Skip(2).First();
				// Next we sprit the string up and extract the file name from the line, file name is inside brackets, but also includes the line and column, so we need to extract between ( and :
				var result = line.Split('(').Last().Split(new[] { ".js:" }, StringSplitOptions.None).First() + ".js";
				// Return the result
				return result;
			}
			// Never gets here, but all code paths must return a value
			return null;
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="T:System.Threading.Thread"/> class.
		/// </summary>
		/// <param name="scripts">
		/// An array of (string[]) fully formed javascript Uri's not including the bridge.js javascript file. 
		/// Javascript files in this array are loaded in order in the Web Worker. Usually you would include all javascript 
		/// libraries and dependancies required by the javascript file containing the thread entry point(s) to be run.
		/// </param>
		public Thread(string[] scripts)
		{
			// Try to create a web worker
			try
			{
				// Create the web worker loading the bridge.js runtime
				_worker = new Worker(GetCurrentJsFilePath());

				// Set the message handler to handle messages from the worker
				_worker.OnMessage = HandleMessage;

				// Ask the worker to load the scripts provided
				_worker.PostMessage(
					// Messages are serialized so complex objects can be sent
					Bridge.Json.Serialize(
						// Create a new message to send to the worker
						new WorkerThreadManager.WebWorkerMessage
						{
							// The message is to load scripts
							MsgType = WorkerThreadManager.MessageType.LoadScripts,
							// Specify the scripts to load
							Data = scripts
						}
					)
				);
			}
			catch (Exception)
			{
				// Web worker does not exist
				_worker = null;
			}

			// Threads start in an alive state
			_isDead = false;

			// Current thread id always starts at 0 since 0 represents the main thread, or the currenly executing 
			// thread start within this thread if web workers are not available
			_currentThreadId = 0;
		}

		/// <summary>
		/// Start the specified static function in the Web Worker with param passed to the function.
		/// On completion of the function, it should return a result which is then sent in the main thread to the
		/// specified onResult callback.
		/// This is a convenience function for calling the real Start function, that wraps the entry point in quotes and passes it as a string
		/// </summary>
		/// <param name="entryPoint">The entry point of the function to be started</param>
		/// <param name="param">The parameter to be sent to the function when it is started</param>
		/// <param name="onResult">The callback to be called when the function finishes, callback format is (this thread, the initial parameter, the result from the function)</param>
		[Template("start('{entryPoint:raw}', {param}, {onResult})")]
		public void Start(ThreadStart entryPoint, object param, Action<Thread, object, object> onResult = null) { }

		/// <summary>
		/// Start the specified static function in the Web Worker with param passed to the function.
		/// On completion of the function, it should return a result which is then sent in the main thread to the
		/// specified onResult callback.
		/// </summary>
		/// <param name="entryPoint">The entry point (as a string) representing the function to start in the web worker</param>
		/// <param name="param">The parameter to be sent to the function when it is started</param>
		/// <param name="onResult">The callback to be called when the function finishes, callback format is (this thread, the initial parameter, the result from the function)</param>
		public void Start(string entryPoint, object param, Action<Thread, object, object> onResult = null)
		{
			// First we must make sure the function exists and is static
			object threadStartRef = null;
			try
			{
				// Try to get a reference to the entry point
				threadStartRef = WorkerThreadManager.GetObjectRefFromString(Script.Get<object>("window"), entryPoint);
				// Confirm that it is not null
				if (threadStartRef == null)
					// The reference was null
					throw new Exception();
				// Confirm that the reference is a function
				if (!Script.Write<bool>("typeof threadStartRef === 'function'"))
					// The reference is not a function
					throw new Exception();
			}
			catch (Exception)
			{
				// The entry point is not valid, it either does not exist or is not a static function
				throw new ArgumentException("Thread entry point " + entryPoint + " doesn't seem to exist, or is not a static function");
			}

			// Check that this thread is not already dead
			if (_isDead)
				// Thread is dead, can't start any my functions
				throw new InvalidOperationException("Attempt made to call Start on a dead thread");

			// Can only run one thread start if there is no on result callback
			if (onResult == null && _queuedStarts.Count() > 0)
				// Whoops
				throw new InvalidOperationException("Attempt made to queue thread starts with no valid OnResult handler");

			// Ask the worker to start the thread if web workers are available
			if (_worker != null)
			{
				// Ask the worker to start (or queue) this function
				_worker.PostMessage(
					// Messages are serialized so complex objects can be sent
					Bridge.Json.Serialize(
						// Send a new message
						new WorkerThreadManager.WebWorkerMessage
						{
							// The message is to start a function
							MsgType = WorkerThreadManager.MessageType.Start,
							// The data is a WebWorkerStartMessage
							Data = new WorkerThreadManager.WebWorkerStartMessage
							{
								// Set the thread id
								ThreadId = _globalThreadIdCounter,
								// Set the entry point
								ThreadEntryPoint = entryPoint,
								// Set the parameter
								// This is a work around for not being able to serialize boxed primitives such is System.Int32
								ThreadParam = Script.Call<object>("Bridge.unbox", param)
							}
						}
					)
				);
				// Add the thread to the queue of thread starts
				_queuedStarts.Add(_globalThreadIdCounter,
					// Create a new QueuedThreadStart object
					new QueuedThreadStart
					{
						// Set the thread id	
						ThreadId = _globalThreadIdCounter,
						// Set the original parameter
						Param = param,
						// Set the on result callback
						OnResult = onResult
					}
				);
			}
			else
			{
				// Web workers are not available, run the thread start function in this thread

				// Set the current thread to be the current global thread count
				_currentThreadId = _globalThreadIdCounter;

				// Try to call the function
				try
				{
					// Call the function with the parameter, and get the result
					var result = Script.Write<object>("threadStartRef(param)", threadStartRef, param);

					// Check if an on result callback was provided
					if (onResult != null)
					{
						// Yes, call the handler with this thread, the original parameter and the result from the message
						onResult(this, param, result);
					}
					else
					{
						// No, set the internal result to the result from the message
						_result = result;
					}
				}
				catch (Exception e)
				{
					// An exception occurred running the thread start function
					// Continue raising the exception in this thread so it is printed to the console
					throw new Exception("Unhandled exception in thread (" + _currentThreadId + ")", e);
				}
				finally
				{
					// Always go back to the main thread
					_currentThreadId = 0;
				}
			}

			// Increment the global thread counter
			_globalThreadIdCounter++;
		}

		/// <summary>
		/// Handles messages sent back from the web worker
		/// </summary>
		/// <returns>Nothing.</returns>
		/// <param name="arg">The message sent from the web worker</param>
		private void HandleMessage(Worker.DataEvent arg)
		{
			// Deserialize the message sent from the worker
			var msg = (WorkerThreadManager.WebWorkerMessage)Bridge.Json.Deserialize<WorkerThreadManager.WebWorkerMessage>(arg.Data);
			// Process the message type
			switch (msg.MsgType)
			{
				// Check for a thread start finished message
				case WorkerThreadManager.MessageType.Finish:
					// Get the WebWorkerFinishMessage data from the message
					var finishMessage = (WorkerThreadManager.WebWorkerFinishMessage)msg.Data;
					// Get the thread start object that this message indicates just finished
					var threadStart = _queuedStarts[finishMessage.ThreadId];
					// Check if this thread start had a result handler
					if (threadStart.OnResult != null)
					{
						// Yes, call the handler with this thread, the original parameter and the result from the message
						threadStart.OnResult(this, threadStart.Param, finishMessage.Result);
					}
					else 
					{
						// No, set the internal result to the result from the message
						_result = finishMessage.Result;
					}
					// Remove this finished thread start from the list of queued thread starts
					_queuedStarts.Remove(threadStart.ThreadId);
					break;

				// Check for a thread start exception message
				case WorkerThreadManager.MessageType.Exception:
					// Get the WebWorkerExceptionMessage data from the message
					var exceptionMessage = (WorkerThreadManager.WebWorkerExceptionMessage)msg.Data;
					// Get the thread start object that this message indicates raised an exception
					threadStart = _queuedStarts[exceptionMessage.ThreadId];
					// Remove this finished thread start object from the list of queued threads
					_queuedStarts.Remove(threadStart.ThreadId);
					// Raise an execption indicating that this thread start raised an exception
					throw new Exception("Unhandled exception in thread (" + threadStart.ThreadId + ")");

				// Check for a thread script load exception (Raised while loading the scripts specified in the constructor)
				case WorkerThreadManager.MessageType.ScriptLoadException:
					// Script loading exceptions are unrecoverable and will kill the thread
					Dispose();
					// Raise an exception indicating the file that was loaded that caused the exception
					throw new Exception("There was an exception loading script file " + (string) msg.Data + " while initialising a Web Worker");

				default:
					throw new ArgumentOutOfRangeException();
			}
		}

		/// <summary>
		/// Wait for all thread starts to run, and then when all thread starts have finished will trigger the specified callback.
		/// This is fundamentally different from the way C# indicates Join should work, since there is no way to block and wait
		/// for web workers to finish
		/// </summary>
		/// <param name="onJoin">The callback to run when all queued thread starts have finished.</param>
		public void Join(Action onJoin)
		{
			// Check if there are any queued or running thread start objects
			if (_queuedStarts.Count() > 0)
			{
				// Yes, we need to wait a moment and then call on join again
				// This must use setTimeout to allow worker messages to be processed
				Action<Action, int> setTimeout = (System.Action<System.Action, int>)Script.Get("window.setTimeout");
				// Check the join again in a moment
				setTimeout(() => Join(onJoin), 0);
			}
			else
			{
				// All thread starts have finished, call the callback
				onJoin();
			}
		}

		/// <summary>
		/// Abort this thread, this will remove any queued thread starts, and will also kill the running thread (if there is one)
		/// This will kill the thread and the worker will be cleaned up. The thread will be unusable after it is Aborted
		/// </summary>
		public void Abort()
		{
			Dispose();
		}

		/// <summary>
		/// Dispose this thread, this will remove any queued thread starts, and will also kill the running thread (if there is one)
		/// This will kill the thread and the worker will be cleaned up. The thread will be unusable after it is disposed
		/// </summary>
		public void Dispose()
		{
			if (!_isDead)
			{
				_worker.Terminate();
				_queuedStarts.Clear();
				_isDead = true;
			}
		}

		/// <summary>
		/// Checks if the thread is currently busy (is still executing any thread starts
		/// </summary>
		/// <value>If the thread is busy.</value>
		public bool IsAlive
		{
			get
			{
				// True if there are any outstanding jobs, else false
				return _queuedStarts.Count > 0;
			}
		}

		/// <summary>
		/// The thread start function signature, takes an object as the parameter, and must return an object as the result
		/// </summary>
		public delegate object ThreadStart(object param);

		/// <summary>
		/// Gets the result of the last thread start that executed that did not have an on result callback set
		/// </summary>
		/// <value>The result return from the last thread start that finished that did not have an on result callback set</value>
		public object Result { get { return _result; } }

		/// <summary>
		/// Used to store the actual result received from the last thread start that did not have an on result callback set
		/// </summary>
		private object _result;

		/// <summary>
		/// The web worker that is running the thread start functions
		/// </summary>
		private Worker _worker;

		/// <summary>
		/// If this thread is dead or not, if it is alive it can handle more thread starts, if it is dead it has been cleaned up and disposed
		/// </summary>
		private bool _isDead;

		/// <summary>
		/// Queued thread start object, used to store info about a new thread start
		/// </summary>
		[ObjectLiteral]
		private class QueuedThreadStart
		{
			// The thread id of this thread start
			public int ThreadId;
			// The original parameter provided to the thread start function
			public object Param;
			// The on result callback called when the thread start function returns a result (if set)
			public Action<Thread, object, object> OnResult;
		}

		/// <summary>
		/// The dictionary of queued thread starts, with the thread id as the key and the QueuedThreadStart object as the value
		/// </summary>
		private Dictionary<int, QueuedThreadStart> _queuedStarts = new Dictionary<int, QueuedThreadStart>();

		/// <summary>
		/// The global thread id counter, used to generate unique thread id's
		/// </summary>
		private static int _globalThreadIdCounter;

		/// <summary>
		/// The current thread identifier, used only when web workers are unavailable
		/// </summary>
		private int _currentThreadId;
	}
}