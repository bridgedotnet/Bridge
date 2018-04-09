Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    /** @namespace Test.BridgeIssues.N3438 */

    /**
     * #3438 - the test here consists in checking whether the IReadOnlyList
     and IReadOnlyCollection interfaces have the correct variance.
     *
     * @public
     * @class Test.BridgeIssues.N3438.N3438
     */
    Bridge.define("Test.BridgeIssues.N3438.N3438", {
        $metadata : function () { return {"nested":[Test.BridgeIssues.N3438.N3438.INotifyListChangedEventArgs$1],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }
    });

    /**
     * Bridge should be able to build this code, albeit it will not
     generate any runnable output (code has no client-side effect).
     *
     * @abstract
     * @public
     * @class Test.BridgeIssues.N3438.N3438.INotifyListChangedEventArgs$1
     */
    Bridge.definei("Test.BridgeIssues.N3438.N3438.INotifyListChangedEventArgs$1", function (T) { return {
        $kind: "nested interface",
        $metadata : function () { return {"td":Test.BridgeIssues.N3438.N3438,"att":162,"a":2,"m":[{"ab":true,"a":2,"n":"Items","t":16,"rt":System.Collections.Generic.IReadOnlyList$1(T),"g":{"ab":true,"a":2,"n":"get_Items","t":8,"rt":System.Collections.Generic.IReadOnlyList$1(T),"fg":"\"Test$BridgeIssues$N3438$N3438$INotifyListChangedEventArgs$1$\" + Bridge.getTypeAlias(T) + \"$Items\""},"fn":"\"Test$BridgeIssues$N3438$N3438$INotifyListChangedEventArgs$1$\" + Bridge.getTypeAlias(T) + \"$Items\""},{"ab":true,"a":2,"n":"Items2","t":16,"rt":System.Collections.Generic.IReadOnlyCollection$1(T),"g":{"ab":true,"a":2,"n":"get_Items2","t":8,"rt":System.Collections.Generic.IReadOnlyCollection$1(T),"fg":"\"Test$BridgeIssues$N3438$N3438$INotifyListChangedEventArgs$1$\" + Bridge.getTypeAlias(T) + \"$Items2\""},"fn":"\"Test$BridgeIssues$N3438$N3438$INotifyListChangedEventArgs$1$\" + Bridge.getTypeAlias(T) + \"$Items2\""}]}; },
        $variance: [1]
    }; });
});
