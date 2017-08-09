Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System,Issue2493,TestProject2,TestProject1];
    $m(Operation, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Add","t":8,"pi":[{"n":"a","pt":$n[0].Int32,"ps":0},{"n":"b","pt":$n[0].Int32,"ps":1}],"sn":"Add","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; });
    $m(o2, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Add","t":8,"pi":[{"n":"a","pt":$n[0].Int32,"ps":0},{"n":"b","pt":$n[0].Int32,"ps":1}],"sn":"Add","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; });
    $m($n[1].Operation3, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Add","t":8,"pi":[{"n":"a","pt":$n[0].Int32,"ps":0},{"n":"b","pt":$n[0].Int32,"ps":1}],"sn":"Add","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; });
    $m($n[2].TestClassB, function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Value1","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Value1","t":8,"rt":$n[0].Int32,"fg":"Value1","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Value1","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Value1"},"fn":"Value1"}]}; });
    $m($n[3].TestClassA, function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Value1","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Value1","t":8,"rt":$n[0].Int32,"fg":"Value1","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Value1","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Value1"},"fn":"Value1"}]}; });
});
