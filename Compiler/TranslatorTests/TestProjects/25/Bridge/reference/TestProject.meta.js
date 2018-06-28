Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [];
    $m("TestProject1.AliasUsing", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    $m("TestProject1.StaticUsing", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
});
