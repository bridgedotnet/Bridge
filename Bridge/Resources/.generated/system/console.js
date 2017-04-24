    Bridge.define("System.Console", {
        statics: {
            methods: {
                Write: function (value) {
                    System.Console.WriteLine(value);
                },
                WriteLine: function (value) {
                    var con = Bridge.global.console;

                    if (con && con.log) {
                        con.log(value);
                    }
                }
            }
        }
    });
