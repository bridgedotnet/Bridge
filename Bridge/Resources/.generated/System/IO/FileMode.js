    Bridge.define("System.IO.FileMode", {
        $kind: "enum",
        statics: {
            fields: {
                CreateNew: 1,
                Create: 2,
                Open: 3,
                OpenOrCreate: 4,
                Truncate: 5,
                Append: 6
            }
        }
    });
