    Bridge.define("System.Threading.Utils.WorkerThreadManager.MessageType", {
        $kind: "enum",
        statics: {
            fields: {
                LoadScripts: 0,
                Start: 1,
                Finish: 2,
                Exception: 3,
                ScriptLoadException: 4
            }
        }
    });
