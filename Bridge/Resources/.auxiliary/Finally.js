})(this);

// WebWorker check
// http://stackoverflow.com/a/18002694
if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	// Call the web worker manager entry point
<<<<<<< HEAD
    Bridge.init(System.Threading.Utils.WorkerThreadManager.workerThreadManagerEntryPoint);
=======
    System.Threading.Utils.WorkerThreadManager.workerThreadManagerEntryPoint();
>>>>>>> ab3209ca4eac8b376a91f6c5acf790d9d4e3b56a
}