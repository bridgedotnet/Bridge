    System.Console = {
        output: null,

        log: function (obj) {
            if (System.Console.output != null) {
                System.Console.output += obj;

                return;
            }

            console.log(obj);
        }
    };
