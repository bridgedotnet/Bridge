/**
 * @compiler Bridge.NET 17.0.0-beta0
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("TestProject1.AliasUsing", {
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Console.WriteLine("Test");
            }
        }
    });

    Bridge.define("TestProject1.StaticUsing", {
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Console.WriteLine("Test");
            }
        }
    });
});
