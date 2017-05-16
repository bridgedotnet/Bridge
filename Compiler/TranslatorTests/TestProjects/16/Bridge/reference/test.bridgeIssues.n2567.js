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

System.Linq.Enumerable.from("").any(function (ch) {
    // Singleline comment Top
    /* 
      Multipleline comment Top
    */
    var singlelineInjectTop = 1;
    var multilineInjectWithAsteriskTop = 2;
    var multilineInjectTop = 3;
    var multilineInjectWithAsteriskAndWhitespaceOffsetTop = 4;
    var multilineInjectAndWhitespaceOffsetTop = 5;
    return true;
});

Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.init(function () {
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

        System.Linq.Enumerable.from("").any(function (ch) {
                // Singleline comment Before
                /* 
                  Multipleline comment Before
                */
                var singlelineInjectBefore = 1;
                var multilineInjectWithAsteriskBefore = 2;
                var multilineInjectBefore = 3;
                var multilineInjectWithAsteriskAndWhitespaceOffsetBefore = 4;
                var multilineInjectAndWhitespaceOffsetBefore = 5;
                return true;
            });
    });

    Bridge.define("Test.BridgeIssues.N2567.N2567", {
        statics: {
            methods: {
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
                },
                CheckCommentsInInitPositionAfter: function () {
                    console.log('After0');

                    if (true) {
                        console.log('After1');
                    }
                    if (true) {
                        console.log('After2');
                    }
                    if (true) {
                        console.log('After3');
                    }
                    if (true) {
                        console.log('After4');
                    }

                    if (true)
                        console.log('After1');
                    if (true)
                        console.log('After2');
                    if (true)
                        console.log('After3');
                    if (true)
                        console.log('After4');

                    System.Linq.Enumerable.from("").any(function (ch) {
                            // Singleline comment After
                            /* 
                              Multipleline comment After
                            */
                            var singlelineInjectAfter = 1;
                            var multilineInjectWithAsteriskAfter = 2;
                            var multilineInjectAfter = 3;
                            var multilineInjectWithAsteriskAndWhitespaceOffsetAfter = 4;
                            var multilineInjectAndWhitespaceOffsetAfter = 5;
                            return true;
                        });
                }
            }
        }
    });

    Bridge.init(function () { Test.BridgeIssues.N2567.N2567.CheckCommentsInInitPositionAfter(); });
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

System.Linq.Enumerable.from("").any(function (ch) {
    // Singleline comment Bottom
    /* 
      Multipleline comment Bottom
    */
    var singlelineInjectBottom = 1;
    var multilineInjectWithAsteriskBottom = 2;
    var multilineInjectBottom = 3;
    var multilineInjectWithAsteriskAndWhitespaceOffsetBottom = 4;
    var multilineInjectAndWhitespaceOffsetBottom = 5;
    return true;
});
