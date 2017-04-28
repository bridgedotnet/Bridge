})(this);

// WebWorker check
// http://stackoverflow.com/a/18002694
if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
    System.Threading.Utils.WorkerThreadManager.workerThreadManagerEntryPoint();
}