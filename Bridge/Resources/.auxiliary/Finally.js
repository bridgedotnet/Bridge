})(this);

// WebWorker check
// http://stackoverflow.com/a/18002694
if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	// Call the web worker manager entry point
    Bridge.init(System.Threading.Utils.WorkerThreadManager.workerThreadManagerEntryPoint);
}