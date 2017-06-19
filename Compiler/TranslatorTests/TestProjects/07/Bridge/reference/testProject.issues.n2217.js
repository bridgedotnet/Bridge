Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    define("Module2217_AMD", function () {
        var Module2217_AMD = { };
        /** @namespace TestProject.Issues.N2217 */

        /**
         * @public
         * @class Module2217_AMD.TestProject.Issues.N2217.N2217_AMD
         */
        Bridge.define("TestProject.Issues.N2217.N2217_AMD", {
            $scope: Module2217_AMD,
            methods: {
                /**
                 * @instance
                 * @public
                 * @this Module2217_AMD.TestProject.Issues.N2217.N2217_AMD
                 * @memberof Module2217_AMD.TestProject.Issues.N2217.N2217_AMD
                 * @return  {number}
                 */
                GetNumber: function () {
                    return 1;
                }
            }
        });
        return Module2217_AMD;
    });

    define("Module2217_Auto", function () {
        var Module2217_Auto = { };
        /**
         * @public
         * @class Module2217_Auto.TestProject.Issues.N2217.N2217_Auto
         */
        Bridge.define("TestProject.Issues.N2217.N2217_Auto", {
            $scope: Module2217_Auto
        });
        return Module2217_Auto;
    });

    (function () {
        var Module2217_CommonJS = { };
        /**
         * @public
         * @class Module2217_CommonJS.TestProject.Issues.N2217.N2217_CommonJS
         */
        Bridge.define("TestProject.Issues.N2217.N2217_CommonJS", {
            $scope: Module2217_CommonJS,
            methods: {
                /**
                 * @instance
                 * @public
                 * @this Module2217_CommonJS.TestProject.Issues.N2217.N2217_CommonJS
                 * @memberof Module2217_CommonJS.TestProject.Issues.N2217.N2217_CommonJS
                 * @return  {number}
                 */
                GetNumber: function () {
                    return 2;
                }
            }
        });
        module.exports.Module2217_CommonJS = Module2217_CommonJS;
    }) ();

    (function () {
        var Module2217_ES6 = { };
        /**
         * @public
         * @class Module2217_ES6.TestProject.Issues.N2217.N2217_ES6
         */
        Bridge.define("TestProject.Issues.N2217.N2217_ES6", {
            $scope: Module2217_ES6,
            methods: {
                /**
                 * @instance
                 * @public
                 * @this Module2217_ES6.TestProject.Issues.N2217.N2217_ES6
                 * @memberof Module2217_ES6.TestProject.Issues.N2217.N2217_ES6
                 * @return  {number}
                 */
                GetNumber: function () {
                    return 3;
                }
            }
        });
        export {Module2217_ES6};
    }) ();

    define("MyModule", ["Module2217_Auto"], function (Module2217_Auto) {
        var MyModule = { };
    /**
     * @public
     * @class TestProject.Issues.N2217.N2217_Loader
     */
    Bridge.define("TestProject.Issues.N2217.N2217_Loader", {
        methods: {
            /**
             * @instance
             * @public
             * @this TestProject.Issues.N2217.N2217_Loader
             * @memberof TestProject.Issues.N2217.N2217_Loader
             * @return  {void}
             */
            LoadManualModule: function () {
                // N2217_Loader Should NOT be wrapped by module N2217_Manual
                var manual = new Module2217_Manual.TestProject.Issues.N2217.N2217_Manual();

                // N2217_Loader Should be wrapped by module N2217_Auto
                var auto = new Module2217_Auto.TestProject.Issues.N2217.N2217_Auto();
            },
            /**
             * @instance
             * @public
             * @this TestProject.Issues.N2217.N2217_Loader
             * @memberof TestProject.Issues.N2217.N2217_Loader
             * @return  {void}
             */
            Load: function () {
                var $step = 0,
                    $task1, 
                    $task2, 
                    $task3, 
                    $task4, 
                    $jumpFromFinally, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1,2,3,4], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = Bridge.loadModule({amd: ["Module2217_AMD"]}, function () { Module2217_AMD = arguments[0]; });
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
                                    $task2 = Bridge.loadModule({cjs: ["Module2217_CommonJS"]}, function () { Module2217_CommonJS = arguments[0]; });
                                    $step = 2;
                                    $task2.continueWith($asyncBody, true);
                                    return;
                                }
                                case 2: {
                                    $task2.getAwaitedResult();
                                    $task3 = Bridge.loadModule({cjs: ["Module2217_ES6"]}, function () { Module2217_ES6 = arguments[0]; });
                                    $step = 3;
                                    $task3.continueWith($asyncBody, true);
                                    return;
                                }
                                case 3: {
                                    $task3.getAwaitedResult();
                                    $task4 = Bridge.loadModule({amd: ["Module2217_UMD"]}, function () { Module2217_UMD = arguments[0]; });
                                    $step = 4;
                                    $task4.continueWith($asyncBody, true);
                                    return;
                                }
                                case 4: {
                                    $task4.getAwaitedResult();
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
        }
    });
        return MyModule;
    });

    define("Module2217_Manual", function () {
        var Module2217_Manual = { };
        /**
         * @public
         * @class Module2217_Manual.TestProject.Issues.N2217.N2217_Manual
         */
        Bridge.define("TestProject.Issues.N2217.N2217_Manual", {
            $scope: Module2217_Manual
        });
        return Module2217_Manual;
    });

    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            define("Module2217_UMD", factory);
        } else if (typeof module === 'object' && module.exports) {
            module.exports = factory();
        } else {
            root.Module2217_UMD = factory();
        }
    }(this, function () {
        var Module2217_UMD = { };
        /**
         * @public
         * @class Module2217_UMD.TestProject.Issues.N2217.N2217_UMD
         */
        Bridge.define("TestProject.Issues.N2217.N2217_UMD", {
            $scope: Module2217_UMD,
            methods: {
                /**
                 * @instance
                 * @public
                 * @this Module2217_UMD.TestProject.Issues.N2217.N2217_UMD
                 * @memberof Module2217_UMD.TestProject.Issues.N2217.N2217_UMD
                 * @return  {number}
                 */
                GetNumber: function () {
                    return 4;
                }
            }
        });
        return Module2217_UMD;
    }));

});
