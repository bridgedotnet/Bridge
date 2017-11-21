Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define("MyModule", function () {
        var MyModule = { };

    var $m = Bridge.setMetadata,
        $n = [System,TestProject1,TestProject2,TestProject.Issues,TestProject.Issues.N2217];
    $m($n[1].TestClassA, function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetMyValue","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"GetMyValue","rt":$n[0].String,"p":[$n[0].Int32]},{"a":2,"n":"Value1","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Value1","t":8,"rt":$n[0].Int32,"fg":"Value1","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Value1","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Value1"},"fn":"Value1"}]}; });
    $m($n[2].TestClassB, function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Value1","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Value1","t":8,"rt":$n[0].Int32,"fg":"Value1","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Value1","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Value1"},"fn":"Value1"}]}; });
    $m($n[3].N2007, function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnConnected","t":2,"ad":{"a":2,"n":"add_OnConnected","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnConnected","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnConnected","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnConnected","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"OnDisconnected","t":2,"ad":{"a":2,"n":"add_OnDisconnected","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnDisconnected","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnDisconnected","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnDisconnected","rt":$n[0].Void,"p":[Function]}}]}; });
    $m($n[4].N2217_Loader, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Load","t":8,"sn":"Load","rt":$n[0].Void},{"a":2,"n":"LoadManualModule","t":8,"sn":"LoadManualModule","rt":$n[0].Void}]}; });
        return MyModule;
    });

});
