# Module Attribute

The following demonstrates a Bridge C# sample configured as a `[Module]`.

```csharp Example
using System;
using Bridge;

[assembly:Module("Module1")]

namespace Demo2
{
    public class Md1
    {
        public static void M1()
        {
            M2();
        }

        public static void M2()
        {
            Console.WriteLine("Hello");
        }
    }
}
```

```js Output (AMD)
define("Module1", function () {
    var Module1 = { };
    Bridge.define("Demo2.Md1", {
        $scope: Module1,
        statics: {
            methods: {
                M1: function () {
                    Module1.Demo2.Md1.M2();
                },
                M2: function () {
                    System.Console.WriteLine("Hello");
                }
            }
        }
    });
    return Module1;
});
```

```csharp Example
[assembly:Module(ModuleType.CommonJS, "Module1")]
```

```js Output (CommonJS)
(function () {
    var Module1 = { };
    Bridge.define("Demo2.Md1", {
        $scope: Module1,
        statics: {
            methods: {
                M1: function () {
                    Module1.Demo2.Md1.M2();
                },
                M2: function () {
                    System.Console.WriteLine("Hello");
                }
            }
        }
    });
    module.exports.Module1 = Module1;
}) ();
```

```csharp Example
[assembly:Module(ModuleType.UMD, "Module1")]
```

```js Output (UMD)
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define("Module1", factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Module1 = factory();
    }
}(this, function () {
    var Module1 = { };
    Bridge.define("Demo2.Md1", {
        $scope: Module1,
        statics: {
            methods: {
                M1: function () {
                    Module1.Demo2.Md1.M2();
                },
                M2: function () {
                    System.Console.WriteLine("Hello");
                }
            }
        }
    });
    return Module1;
}));

```

```csharp Example
[assembly:Module(ModuleType.ES6, "Module1")]
```

```js Output (ES6)
(function () {
    var Module1 = { };
    Bridge.define("Demo2.Md1", {
        $scope: Module1,
        statics: {
            methods: {
                M1: function () {
                    Module1.Demo2.Md1.M2();
                },
                M2: function () {
                    System.Console.WriteLine("Hello");
                }
            }
        }
    });
    export {Module1};
}) ();
```

## Using The Module In Another Project (C#)

```csharp
namespace Demo
{
    public class Program
    {
        public static void Main()
        {
            Demo2.Md1.M1();
        }
    }
}
```

## AMD Module

By default, Bridge uses `require` function to load AMD modules. If you want to use different library then function name can be changed in `bridge.json` (`loader.loaderFunction` property).

```js
Bridge.assembly("Bridge.TestLibrary", function ($asm, globals) {
    "use strict";

    require(["Module1"], function (Module1) {
        Bridge.define("Demo.Program", {
            $main: function () {
                Module1.Demo2.Md1.M1();
            }
        });
    });
});
```

## CommonJS module

```js
Bridge.assembly("Bridge.TestLibrary", function ($asm, globals) {
    "use strict";

    var Module1 = require('Module1');

    Bridge.define("Demo.Program", {
        $main: function () {
            Module1.Demo2.Md1.M1();
        }
    });
});
```

## UMD module

Code will depends from `loader.type` option in `bridge.json`, default is AMD (generated code will be the same as in `AMD module` section). You can change loader type to CommonJS.

## ES6 module

```js
Bridge.assembly("Bridge.TestLibrary", function ($asm, globals) {
    "use strict";

    import Module1 from "Module1";

    Bridge.define("Demo.Program", {
        $main: function () {
            Module1.Demo2.Md1.M1();
        }
    });
});
```

Any module can be loaded manually. 

You need to disable autoloading using `loader.disableAutoLoading` property for all modules or just specific module using `loader.disabledModulesMask`

```js bridge.json
"loader": {
    "disableAutoLoading":  true
  }
```

```csharp Example
namespace Demo
{
    public class Program
    {
        public static async void Main()
        {
            Console.WriteLine("Start");
            await Script.LoadModule(typeof (Demo2.Md1));
            Demo2.Md1.M1();
            Console.WriteLine("End");
        }
    }
}
```

```js Output
Bridge.assembly("Bridge.TestLibrary", function ($asm, globals) {
    "use strict";

    var Module1;

    Bridge.define("Demo.Program", {
        $main: function () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    for (;;) {
                        $step = System.Array.min([0,1], $step);
                        switch ($step) {
                            case 0: {
                                Bridge.Console.log("Start");
                                $task1 = Bridge.loadModule({amd: ["Module1"]}, function () { Module1 = arguments[0]; });
                                $step = 1;
                                $task1.continueWith($asyncBody, true);
                                return;
                            }
                            case 1: {
                                $task1.getAwaitedResult();
                                Module1.Demo2.Md1.M1();
                                Bridge.Console.log("End");
                                return;
                            }
                            default: {
                                return;
                            }
                        }
                    }
                }, arguments);

            $asyncBody();
        }
    });
});
```