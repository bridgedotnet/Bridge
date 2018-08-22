/**
 * @compiler Bridge.NET 17.3.0
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
         * @return  {System.Threading.Tasks.Task$1}
         */
        main: function Main () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = System.Threading.Tasks.Task.delay(1000);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
                                    $tcs.setResult(1);
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);

            $asyncBody();
            return $tcs.task;
        }
    });
});
