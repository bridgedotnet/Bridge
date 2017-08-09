Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define("MyModule", function () {
        var MyModule = { };

    var $m = Bridge.setMetadata,
        $n = [System,TestProject.Issues,TestProject.Issues.N2217,TestProject2,TestProject1];
    $m($n[1].N2007, function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnConnected","t":2,"ad":{"a":2,"n":"add_OnConnected","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnConnected","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnConnected","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnConnected","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnDisconnected","t":2,"ad":{"a":2,"n":"add_OnDisconnected","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnDisconnected","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnDisconnected","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnDisconnected","rt":$n[0].Void,"p":[Function]}}]}; });
    $m(Module1.TestProject.Issues.N2198.N2198, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void}]}; });
    $m(Module2217_AMD.TestProject.Issues.N2217.N2217_AMD, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetNumber","t":8,"sn":"GetNumber","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; });
    $m(Module2217_CommonJS.TestProject.Issues.N2217.N2217_CommonJS, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetNumber","t":8,"sn":"GetNumber","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; });
    $m(Module2217_ES6.TestProject.Issues.N2217.N2217_ES6, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetNumber","t":8,"sn":"GetNumber","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; });
    $m(Module2217_UMD.TestProject.Issues.N2217.N2217_UMD, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetNumber","t":8,"sn":"GetNumber","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; });
    $m(Module2217_Manual.TestProject.Issues.N2217.N2217_Manual, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; });
    $m(Module2217_Auto.TestProject.Issues.N2217.N2217_Auto, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; });
    $m($n[2].N2217_Loader, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Load","t":8,"sn":"Load","rt":$n[0].Void},{"a":2,"n":"LoadManualModule","t":8,"sn":"LoadManualModule","rt":$n[0].Void}]}; });
    $m(Module2806.TestProject.Issues.N2806.N2806, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetNumber","t":8,"sn":"GetNumber","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; });
    $m($n[3].TestClassB, function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Value1","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Value1","t":8,"rt":$n[0].Int32,"fg":"Value1","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Value1","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Value1"},"fn":"Value1"}]}; });
    $m($n[4].TestClassA, function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetMyValue","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"GetMyValue","rt":$n[0].String,"p":[$n[0].Int32]},{"a":2,"n":"Value1","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Value1","t":8,"rt":$n[0].Int32,"fg":"Value1","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Value1","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Value1"},"fn":"Value1"}]}; });
        return MyModule;
    });

});
