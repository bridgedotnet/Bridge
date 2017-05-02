using Bridge;
using Bridge.Internal.Html5;

namespace System.Threading.Utils
{
	/// <summary>
	/// Worker thread manager, manages the thread starts for this thread if it is a web worker.
	/// Called by the bridge runtime when it has loaded, also prevents functions marked with the [Ready] attribute from
	/// Executing
	/// </summary>
	public static class WorkerThreadManager
	{
		/// <summary>
		/// Global bool that indicates if this thread is a web worker or not
		/// </summary>
		private static bool _isWebWorker;

		/// <summary>
		/// The worker (usually a reference to "window" when a web worker).
		/// </summary>
		private static Worker _worker;

		/// <summary>
		/// The id of the currently running thread start function
		/// </summary>
		private static int _threadId;

		/// <summary>
		/// Is this a web worker?
		/// </summary>
		/// <returns>true if this is a web worker, or false if this is the main thread</returns>
		public static bool IsWebWorker()
		{
			// Return the web worker status
			return _isWebWorker;
		}

		/// <summary>
		/// Gets the thread id of the currently running thread start function.
		/// </summary>
		/// <returns>The thread identifier.</returns>
		public static int GetThreadId()
		{
			// Return the thread id
			return _threadId;
		}

	    /// <summary>
	    /// OnMessage event handler for creating custom message passing between threads
	    /// The callback parameter is the object passed to Thread::PostMessage
	    /// </summary> 
	    public static event Action<object> OnMessage;

        /// <summary>
        /// The global entry point that is called as soon as the bridge runtime has loaded if this is a web worker
        /// </summary>
        /// <returns>Nothing.</returns>
        public static void WorkerThreadManagerEntryPoint()
		{
			// This is a web worker, update the flag
			_isWebWorker = true;

			// Set the worker to be a reference to "window"
			_worker = Script.Get<Worker>("window");

			// Set the message handler to handle messages from the main thread
			_worker.OnMessage = HandleMessage;
		}

		/// <summary>
		/// importScripts binding to allow importing script files in to this web worker
		/// </summary>
		/// <returns>Nothing.</returns>
		/// <param name="script">The Uri of the script to load in to this web worker</param>
		[Template("importScripts({script})")]
		private static extern void ImportScript(string script);

		/// <summary>
		/// Recursively gets an object reference from a . separated string. ie "BridgeDev.Main.ThreadEp"
		/// </summary>
		/// <returns>A reference to the object, or null</returns>
		/// <param name="o">The root object (usually window)</param>
		/// <param name="s">The string representing the path to the object</param>
		public static object GetObjectRefFromString(object o, string s)
		{
			// Check if the path still contains another .
			if (!s.Contains(".")) 
				// No, we have reached the reference pointer, return the reference
				return Script.Write<object>("o[s]");

			// Split the path by .
			var bits = s.Split('.');
			// Get the first part of the path
			var s1 = bits[0];
			// Get the rest of the path after the first .
			var s2 = bits.Slice(1).Join(".");
			// Get the object referenced by the first part, and continue recursing with the next path reference
			return GetObjectRefFromString(Script.Write<object>("o[s1]", s1), s2);
		}

		/// <summary>
		/// Handles messages sent from the main thread
		/// </summary>
		/// <returns>Nothing.</returns>
		/// <param name="arg">The message sent from the main thread</param>
		private static void HandleMessage(Worker.DataEvent arg)
		{
			// Deserialise the message
			var msg = (WebWorkerMessage) arg.Data;
			// Process the message
			switch (msg.MsgType)
			{
				// Check if this is a message to load a script
				case MessageTypeLoadScripts:
					// The data is an array of strings representing the Uris of the scripts to load
				    var scripts = msg.Data as string[];
					// Iterate over each script in order and load it in to the web worker
				    if (scripts != null)
				        foreach (var s in scripts)
				        {
				            // Try to import the script
				            try
				            {
				                // Import the script
				                ImportScript(s);
				            }
				            catch (Exception)
				            {
				                // An exception occurred trying to load the script
				                // Send a script load exception message back to the main thread
				                _worker.PostMessage(
				                    // Create a new message
				                    new WebWorkerMessage
				                    {
				                        // It's a script load exception message
				                        MsgType = MessageTypeScriptLoadException,
				                        // Set data to the Uri of the script that failed to load
				                        Data = s
				                    }
				                );
				            }
				        }
				    break;
				// Check if this is a thread start message
				case MessageTypeStart:
					// Cast the message data to a WebWorkerStartMessage
					var startData = (WebWorkerStartMessage) msg.Data;
					// Get the function pointer of the thread entry point to call
					var entryPointRef = GetObjectRefFromString(Script.Get<object>("window"), startData.ThreadEntryPoint);
					// Get the param from the message
					var param = startData.ThreadParam;

					// Set the thread id
					_threadId = startData.ThreadId;

					// Try to call the function
					try
					{
						// Call the function with the parameter, and get the result
						var result = Script.Write<dynamic>("entryPointRef(param)", entryPointRef, param);

						// Send the result back to the main thread
						_worker.PostMessage(
							// Create a new WebWorkerMessage
							new WebWorkerMessage
							{
								// The message is a finish message
								MsgType = MessageTypeFinish,
								// Set the data to a new WebWorkerFinishMessage
								Data = new WebWorkerFinishMessage
									{
										// Set the thread id if this thread start function that just finished
										ThreadId = startData.ThreadId,
										// Set the result to the result of the thread start function
										Result = result
                                    }
							}
						);
					}
					catch (Exception)
					{
						// An exception occurred running the thread start function
						_worker.PostMessage(
							// Create a new web worker message
							new WebWorkerMessage
							{
								// The message is an exception message
								MsgType = MessageTypeException,
								// Set the data to a new WebWorkerExceptionMessage
								Data = new WebWorkerExceptionMessage
								    {
									    // Set the thread id of the thread start function that raised the exception
									    ThreadId = startData.ThreadId,
								    }
                            }
						);
						// Continue raising the exception in this thread so it is printed to the console
						throw;
					}
					break;

			    case MessageTypeMessage:
			        OnMessage?.Invoke(msg.Data);
			        break;

                default:
					throw new ArgumentOutOfRangeException();
			}
		}

	    /// <summary>
	    /// Posts a custom message back to the parent thread
	    /// </summary>
	    /// <param name="msg">The custom object to send as the message</param>
	    public static void PostMessage(object msg)
	    {
	        // Send the result back to the main thread
	        _worker.PostMessage(
	            // Create a new WebWorkerMessage
	            new WebWorkerMessage
	            {
	                // The message is a finish message
	                MsgType = MessageTypeMessage,
	                // Set the data to a new WebWorkerFinishMessage
	                Data = msg
	            }
	        );
	    }

        /// <summary>
        /// Message types that can be sent between the main thread and the web worker
        /// 
        /// Load scripts in to the web worker (Sent from the main thread to the worker)
        /// </summary>
        public const int MessageTypeLoadScripts = 0;

	    /// <summary>
	    /// Start and execute a thread start function (Sent from the main thread to the worker)
	    /// </summary>
	    public const int MessageTypeStart = 1;

		/// <summary>
		/// The thread has finished, pass the result back to the main thread (Sent from the worker to the main thread)
		/// </summary>
		public const int MessageTypeFinish = 2;

	    /// <summary>
	    /// An exception was raised running a thread start function (Sent from the worker to the main thread)
	    /// </summary>
	    public const int MessageTypeException = 3;

	    /// <summary>
	    /// An exeption was raised while loading a script in to the web worker (Sent from the worker to the main thread)
	    /// </summary>
	    public const int MessageTypeScriptLoadException = 4;

	    /// <summary>
	    /// A custom message can be sent between threads
	    /// </summary>
	    public const int MessageTypeMessage = 5;

        /// <summary>
        /// The message that is serialised and sent between workers and the main thread
        /// </summary>
        [ObjectLiteral]
        public class WebWorkerMessage
		{
			/// <summary>
			/// The type of message this is
			/// </summary>
			public int MsgType;

			/// <summary>
			/// The data payload of the message
			/// </summary>
			public object Data;
		}

        /// <summary>
        /// Message with info to start a new thread start function (sent from the main thread to the web worker)
        /// </summary>
        [ObjectLiteral]
        public class WebWorkerStartMessage
		{
			/// <summary>
			/// The id of this thread start function
			/// </summary>
			public int ThreadId;

			/// <summary>
			/// The thread start function entry point to be started
			/// </summary>
			public string ThreadEntryPoint;

			/// <summary>
			/// The parameter passed to the thread start function
			/// </summary>
			public object ThreadParam;
		}

		/// <summary>
		/// Message with details about the result from a thread start function (Sent from the web worker to the main thread)
		/// </summary>
		[ObjectLiteral]
		public class WebWorkerFinishMessage
		{
			/// <summary>
			/// The id of the thread that finished
			/// </summary>
			public int ThreadId;

			/// <summary>
			/// The result from the thread that finished
			/// </summary>
			public object Result;
		}

	    /// <summary>
	    /// Message sent if an exception occurs while processing a thread start function (Sent from the web worker to the main thread)
	    /// </summary>
	    [ObjectLiteral]
	    public class WebWorkerExceptionMessage
	    {
	        public int ThreadId;
	    }
	}
}

