Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N2567.N2567", {
        statics: {
            CheckMultilineInjectComment: function () {
                // The comment below contains a line with asterics with NO whitespace at the end
                
             console.log('one');
             
             console.log('two');
             

                // The comment below contains a line with asterics with ONE whitespace at the end
                
             console.log('three');
             
             console.log('four');
             

                // The comment below contains a line with asterics with TWO whitespaces at the end
                
             console.log('fix');
              
             console.log('six');
             

                // The comment below contains a line with asterics with TWO whitespaces and a code
                
             console.log('fix');
              someFunctionCall();
             console.log('six');
             
            },
            CheckSinglelineInjectComment: function () {
                // The line below is with NO whitespace at the end - should be emitted as empty line
                

                // The line below is with ONE whitespace at the end - should be emitted as empty line
                

                // The line below is with TWO whitespaces at the end - should be emitted as empty line
                

                // The line below is with ONE whitespace and a code - should be emitted as code
                someCode1();

                // The line below is with TWO whitespaces and a code - should be emitted as code
                 someCode2();
            }
        }
    });
});
