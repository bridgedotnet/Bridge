/**
 * @version   : 15.4.0 - Bridge.NET
 * @author    : Object.NET, Inc. http://bridge.net/
 * @date      : 2016-11-08
 * @copyright : Copyright 2008-2016 Object.NET, Inc. http://object.net/
 * @license   : See license.txt and https://github.com/bridgedotnet/Bridge/blob/master/LICENSE.md
 */

Here and below the content marker (see // @!!! etc) will be skipped for comparing
The text after the content marked will be compared
 

// @!!! Content begin mark. Should be at the top (issue 1193). This is also required to mark beginning of the file part to compare to the reference without bridge.js content

/**
 * Bridge Test library.
 * @version 1.0.0.0
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2015 Object.NET, Inc.
 * @compiler Bridge.NET 15.4.0
 */
Bridge.assembly("TestProject.I2096", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1193.TopShouldbBOverAssemblyDescription");

    Bridge.define("Test.BridgeIssues.N1424.A");

    Bridge.define("Test.BridgeIssues.N1424.Alpha", {
        data: 0
    });

    Bridge.define("Test.BridgeIssues.N1424.B", {
        getData: function () {
            return 8;
        },
        setData: function (value) {
        }
    });

    Bridge.define("Test.BridgeIssues.N770.IBase", {
        $kind: "interface"
    });

    Bridge.define("TestProject1.TestClassA", {
        value1: 0
    });

    Bridge.define("TestProject2.TestClassB", {
        value1: 0
    });

    Bridge.define("Test.BridgeIssues.N770.Impl", {
        inherits: [Test.BridgeIssues.N770.IBase],
        prop: 0,
        config: {
            alias: [
            "prop", "prop",
            "prop", "prop"
            ]
        }
    });
});

