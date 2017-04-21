    Bridge.define("System.Console", {
        statics: {
            methods: {
                WriteLine: function (value) {
                    var con = Bridge.global.console;

                    if (con && con.log) {
                        con.log(Bridge.unbox(value));
                    }
                }
            }
        }
    });
