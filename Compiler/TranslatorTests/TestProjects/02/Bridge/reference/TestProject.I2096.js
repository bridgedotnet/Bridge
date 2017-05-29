/**
 * @version   : 16.0.0-beta2 - Bridge.NET
 * @author    : Object.NET, Inc. http://bridge.net/
 * @date      : 2017-05-22
 * @copyright : Copyright 2008-2017 Object.NET, Inc. http://object.net/
 * @license   : See license.txt and https://github.com/bridgedotnet/Bridge/blob/master/LICENSE.md
 */

Here and below the content marker (see // @!!! etc) will be skipped for comparing
The text after the content marked will be compared

// @!!! Content begin mark. This is required to mark beginning of the file part to compare to the reference without bridge.js content
// This is resource from referenced project A for testing issue #2717
// --- A ---
// This is resource from referenced project B for testing issue #2717
// --- B depends on A
// This is resource from referenced project C for testing issue #2717
// --- C depends on B
// Should be at the top (issue 1193). Beginning of Test 02 project output itself (after referenced resources)

/**
 * Bridge Test library.
 * @version 1.0.0.0
 * @author Object.NET, Inc.
 * @copyright Copyright 2008-2015 Object.NET, Inc.
 * @compiler Bridge.NET 16.0.0-beta2
 */
Bridge.assembly("TestProject.I2096", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1193.TopShouldbBOverAssemblyDescription");

    Bridge.define("Test.BridgeIssues.N1424.A");

    Bridge.define("Test.BridgeIssues.N1424.Alpha", {
        props: {
            Data: 0
        }
    });

    Bridge.define("Test.BridgeIssues.N1424.B");

    Bridge.define("Test.BridgeIssues.N2717.N2717", {
        methods: {
            UseReferencedProjects: function () {
                // This is to force C# compiler to use references to projects A, B and C
                var a = new Object();
                var b = new Object();
                var c = new Object();
            }
        }
    });

    Bridge.define("Test.BridgeIssues.N770.IBase", {
        $kind: "interface"
    });

    Bridge.define("TestProject1.TestClassA", {
        props: {
            Value1: 0
        }
    });

    Bridge.define("TestProject2.TestClassB", {
        props: {
            Value1: 0
        }
    });

    Bridge.define("Test.BridgeIssues.N770.Impl", {
        inherits: [Test.BridgeIssues.N770.IBase],
        props: {
            Prop: 0
        },
        alias: [
            "Prop", "Test$BridgeIssues$N770$IBase$Prop"
        ]
    });
});

