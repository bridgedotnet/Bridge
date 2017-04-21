    Bridge.define("System.Console", {
        statics: {
            WriteLine: function (value) {
                var con = Bridge.global.console;

                if (con && con.log) {
                    con.log(Bridge.unbox(value));
                }
            }
        }
    });
