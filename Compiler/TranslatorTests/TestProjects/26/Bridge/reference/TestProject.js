/**
 * @compiler Bridge.NET 17.1.0
 */
Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    /** @namespace TestProject */

    /**
     * @public
     * @class TestProject.Test
     */
    Bridge.define("TestProject.Test", {
        /**
         * @static
         * @public
         * @this TestProject.Test
         * @memberof TestProject.Test
         * @return  {void}
         */
        main: function Main () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    for (;;) {
                        $step = System.Array.min([0,1], $step);
                        switch ($step) {
                            case 0: {
                                $task1 = System.Threading.Tasks.Task.delay(1000);
                                $step = 1;
                                $task1.continueWith($asyncBody, true);
                                return;
                            }
                            case 1: {
                                $task1.getAwaitedResult();
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
