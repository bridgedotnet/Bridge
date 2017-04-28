using Bridge;
using System.Threading.Utils;

using System.ComponentModel;
using System.Linq;

namespace System.Threading
{
    public class Thread
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
			catch (ErrorException)
			{
				var stack = Script.Write<string>("$e1.error.stack");
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

		public delegate void ThreadStart();

		private Worker _worker;
		private string _entryPoint;

		[Template("new System.Threading.Thread({scripts:raw}, '{entryPoint:raw}')")]
		public Thread(string[] scripts, ThreadStart entryPoint) { }

		public Thread(string[] scripts, string entryPoint)
		{
			// Create the worker
			_worker = new Worker(GetCurrentJsFile());

			// Ask the worker to load the scripts provider
			_worker.PostMessage(new WorkerThreadManager.WebWorkerMessage
			{
				MsgType = WorkerThreadManager.MessageType.LoadScripts,
				Data = Script.Write<object>("JSON.stringify(scripts)", scripts)
			});

			// Remember the entry point for when we call start
			_entryPoint = entryPoint;
		}

		public void Start()
		{
			Script.Call("console.log", _entryPoint);
		}
    }
}