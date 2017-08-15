Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System,TestProject.Issues,Test.BridgeIssues.N783,TestProject2,TestProject1];
    $m($n[2].App, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main1","is":true,"t":8,"sn":"Main1","rt":$n[0].Void}]}; });
    $m($n[2].Base, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; });
    $m($n[2].Ignore, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; });
    $m($n[2].DontIgnore, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; });
    $m($n[1].N2262, function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DoSomething","t":8,"sn":"DoSomething","rt":$n[0].Void}]}; });
    $m($n[1].N2262.I2262, function () { return {"td":$n[1].N2262,"att":163,"a":1,"m":[{"ab":true,"a":2,"n":"Count","t":16,"rt":$n[0].Int32,"g":{"ab":true,"a":2,"n":"get_Count","t":8,"rt":$n[0].Int32,"fg":"TestProject$Issues$N2262$I2262$Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"ab":true,"a":2,"n":"set_Count","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"TestProject$Issues$N2262$I2262$Count"},"fn":"TestProject$Issues$N2262$I2262$Count"}]}; });
    $m($n[1].N2262.CI2262, function () { return {"td":$n[1].N2262,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Count","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Count","t":8,"rt":$n[0].Int32,"fg":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Count","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Count"},"fn":"Count"}]}; });
    $m($n[3].TestClassB, function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Value1","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Value1","t":8,"rt":$n[0].Int32,"fg":"Value1","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Value1","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Value1"},"fn":"Value1"}]}; });
    $m($n[4].TestClassA, function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Value1","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Value1","t":8,"rt":$n[0].Int32,"fg":"Value1","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Value1","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Value1"},"fn":"Value1"}]}; });
});
