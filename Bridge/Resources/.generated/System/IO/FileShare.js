    Bridge.define("System.IO.FileShare", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Read: 1,
                Write: 2,
                ReadWrite: 3,
                Delete: 4,
                Inheritable: 16
            }
        },
        $flags: true
    });
