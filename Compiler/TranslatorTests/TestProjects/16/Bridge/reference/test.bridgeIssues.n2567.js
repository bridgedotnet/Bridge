console.log('Top0');

if (true) {
    console.log('Top1');
}
if (true) {
    console.log('Top2');
}
if (true) {
    console.log('Top3');
}
if (true) {
    console.log('Top4');
}

if (true)
    console.log('Top1');
if (true)
    console.log('Top2');
if (true)
    console.log('Top3');
if (true)
    console.log('Top4');

Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.init(function(){
        console.log('Before0');

        if (true) {
            console.log('Before1');
        }
        if (true) {
            console.log('Before2');
        }
        if (true) {
            console.log('Before3');
        }
        if (true) {
            console.log('Before4');
        }

        if (true)
            console.log('Before1');
        if (true)
            console.log('Before2');
        if (true)
            console.log('Before3');
        if (true)
            console.log('Before4');
    });

    Bridge.define("Test.BridgeIssues.N2567.N2567", {
        statics: {
            CheckMultilineInjectCommentAsterisk: function () {
                // The comment below contains a line with asterisk with NO whitespace at the end
                console.log('one');

                console.log('two');

                // The comment below contains a line with asterisk with ONE whitespace at the end
                console.log('three');

                console.log('four');

                // The comment below contains a line with asterisk with TWO whitespaces at the end
                console.log('fix');

                console.log('six');

                // The comment below contains a line with asterisk with TWO whitespaces and a code
                console.log('fix');
                if (true) {
                    someFunctionCall1();
                }
                if (true) {
                    someFunctionCall2();
                }
                if (true) {
                    someFunctionCall3();
                }
                if (true) {
                    someFunctionCall4();
                }
                console.log('six');
            },
            CheckMultilineInjectComment: function () {
                console.log('one');

                console.log('two');

                console.log('fix');
                if (true) {
                    someFunctionCall1();
                }
                if (true) {
                    someFunctionCall2();
                }
                if (true) {
                    someFunctionCall3();
                }
                if (true) {
                    someFunctionCall4();
                }
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
            },
            CheckMultilineInjectCommentWithCode: function () {
                var some = "";
                some(@"/faaa");
            },
            CheckAllComments: function () {
                /* Multiline
                  comment
                */
                /* Another multiline
                  comment
                */
                // Single line comment
                //Another single line comment
                //   One more single line comment
                console.log('1');
                if (true) {
                    someFunctionCall();
                }
                console.log('2');
                console.log('3');
                console.log('4');
                if (true)
                    console.log('5');
            },
            CheckTheSameLineAndEmptyInjectComments: function () {
                var a = 1,
                    b = 2,
                    c = 3;

                var d = 4,
                    e = 5;

                var f = 6;


            },
            CheckTheSameLineAndEmptyComments: function () {
                /* var a = 1,
                   b = 2,
                   c = 3;*/

                /* var d = 4,
                   e = 5;*/

                /* var f = 6;*/

                /* */

                /* */
            }
        }
    });
});

console.log('Bottom0');

if (true) {
    console.log('Bottom1');
}
if (true) {
    console.log('Bottom2');
}
if (true) {
    console.log('Bottom3');
}
if (true) {
    console.log('Bottom4');
}

if (true)
    console.log('Bottom1');
if (true)
    console.log('Bottom2');
if (true)
    console.log('Bottom3');
if (true)
    console.log('Bottom4');
