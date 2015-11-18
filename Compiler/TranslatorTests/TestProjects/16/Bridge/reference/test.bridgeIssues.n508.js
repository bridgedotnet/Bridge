/* global Bridge */

"use strict";

Bridge.define('Test.BridgeIssues.N508.Bridge508', {
    statics: {
        count: 0,
        main: function () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $asyncBody = function () {
                    for (;;) {
                        switch ($step) {
                            case 0: {
                                $task1 = Test.BridgeIssues.N508.Bridge508.method1();
                                $step = 1;
                                $task1.continueWith($asyncBody, true);
                                return;
                            }
                            case 1: {
                                $task1.getResult();
                                return;
                            }
                            default: {
                                return;
                            }
                        }
                    }
                };

            $asyncBody.apply(this, arguments);
        },
        method1: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $task2, 
                $taskResult2, 
                $task3, 
                $taskResult3, 
                $jumpFromFinally, 
                $returnTask = new Bridge.Task(), 
                $returnValue, 
                np, 
                np1, 
                $asyncBody = function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $task3 = Test.BridgeIssues.N508.Bridge508.initPage();
                                    $step = 1;
                                    $task3.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult3 = $task3.getResult();
                                    np = $taskResult3;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( np !== null ) {
                                        $step = 3;
                                        continue;
                                    }
                                    $step = 6;
                                    continue;
                                }
                                case 3: {
                                    console.log("page1");
                                }
                                case 4: {
                                    $task2 = Test.BridgeIssues.N508.Bridge508.nextPage();
                                    $step = 5;
                                    $task2.continueWith($asyncBody);
                                    return;
                                }
                                case 5: {
                                    $taskResult2 = $task2.getResult();
                                    np = $taskResult2;
                                    $step = 2;
                                    continue;
                                }
                                case 6: {
                                    
                                    Test.BridgeIssues.N508.Bridge508.count = 0;
                                    $task1 = Test.BridgeIssues.N508.Bridge508.initPage();
                                    $step = 7;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 7: {
                                    $taskResult1 = $task1.getResult();
                                    np1 = $taskResult1;
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    if ( np1 !== null ) {
                                        $step = 9;
                                        continue;
                                    }
                                    $step = 11;
                                    continue;
                                }
                                case 9: {
                                    console.log("page2");
                                }
                                case 10: {
                                    np1 = Test.BridgeIssues.N508.Bridge508.nextPage1();
                                    $step = 8;
                                    continue;
                                }
                                case 11: {
                                    $returnTask.setResult(null);
                                    return;
                                }
                                default: {
                                    $returnTask.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($e1) {
                        $e1 = Bridge.Exception.create($e1);
                        $returnTask.setError($e1);
                    }
                };

            $asyncBody.apply(this, arguments);
            return $returnTask;
        },
        initPage: function () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $returnTask = new Bridge.Task(), 
                $returnValue, 
                $asyncBody = function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $task1 = Bridge.Task.delay(100);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getResult();
                                    Test.BridgeIssues.N508.Bridge508.count++;
                                    $returnTask.setResult(Test.BridgeIssues.N508.Bridge508.count < 4 ? { } : null);
                                    return;
                                }
                                default: {
                                    $returnTask.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($e1) {
                        $e1 = Bridge.Exception.create($e1);
                        $returnTask.setError($e1);
                    }
                };

            $asyncBody.apply(this, arguments);
            return $returnTask;
        },
        nextPage: function () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $returnTask = new Bridge.Task(), 
                $returnValue, 
                $asyncBody = function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $task1 = Bridge.Task.delay(100);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getResult();
                                    Test.BridgeIssues.N508.Bridge508.count++;
                                    $returnTask.setResult(Test.BridgeIssues.N508.Bridge508.count < 4 ? { } : null);
                                    return;
                                }
                                default: {
                                    $returnTask.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($e1) {
                        $e1 = Bridge.Exception.create($e1);
                        $returnTask.setError($e1);
                    }
                };

            $asyncBody.apply(this, arguments);
            return $returnTask;
        },
        nextPage1: function () {
            Test.BridgeIssues.N508.Bridge508.count++;
            return Test.BridgeIssues.N508.Bridge508.count < 4 ? { } : null;
        }
    }
});



Bridge.init();