using Bridge;
using System;
using System.Collections.Generic;

namespace Test.BridgeIssues.N2567
{
    // #2567
    public class N2567
    {
        public static void CheckMultilineInjectCommentAsterics()
        {
            // The comment below contains a line with asterics with NO whitespace at the end
            /*@
             * console.log('one');
             *
             * console.log('two');
             */

            // The comment below contains a line with asterics with ONE whitespace at the end
            /*@
             * console.log('three');
             * 
             * console.log('four');
             */

            // The comment below contains a line with asterics with TWO whitespaces at the end
            /*@
             * console.log('fix');
             *  
             * console.log('six');
             */

            // The comment below contains a line with asterics with TWO whitespaces and a code
            /*@
             * console.log('fix');
             * if (true) {
             *  someFunctionCall1();
             * }
             * if (true) {
             *   someFunctionCall2();
             * }
             * if (true) {
             *   someFunctionCall3();
             * }
             * if (true) {
             *   someFunctionCall4();
             * }
             * console.log('six');
             */
        }

        public static void CheckMultilineInjectComment()
        {
            /*@
               console.log('one');
                          
               console.log('two');
             */

            /*@
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
             */
        }

        public static void CheckSinglelineInjectComment()
        {
            // The line below is with NO whitespace at the end - should be emitted as empty line
            //@

            // The line below is with ONE whitespace at the end - should be emitted as empty line
            //@ 

            // The line below is with TWO whitespaces at the end - should be emitted as empty line
            //@  

            // The line below is with ONE whitespace and a code - should be emitted as code
            //@ someCode1();

            // The line below is with TWO whitespaces and a code - should be emitted as code
            //@  someCode2();
        }

        public static void CheckMultilineInjectCommentWithCode()
        {
            var some = "";
            /*@
              some(@"/faaa");
            */
        }

        public static void CheckAllComments()
        {
            /* Multiline
             * comment
             */
            /* Another multiline
               comment
             */
            // Single line comment
            //Another single line comment
            //   One more single line comment
            /*@
             * console.log('1');
             * if (true) {
             *     someFunctionCall();
             * }
             * console.log('2');
             */
            //@ console.log('3');
            /*@
             * console.log('4');
             */
            //@ if (true)
            //@     console.log('5');
        }

        public static void CheckTheSameLineAndEmptyInjectComments()
        {
            /*@var a = 1,
                b = 2,
                c = 3;*/

            /*@var d = 4,
                e = 5;*/

            /*@var f = 6;*/

            /*@ */

            /*@*/
        }
        
        public static void CheckTheSameLineAndEmptyComments()
        {
            /*var a = 1,
                b = 2,
                c = 3;*/

            /*var d = 4,
                e = 5;*/

            /*var f = 6;*/
            
            /* */

            /**/
        }

        [Init(InitPosition.Top)]
        public static void CheckCommentsInInitPositionTop()
        {
            /*@
             * console.log('Top0');
             *
             * if (true) {
             *  console.log('Top1');
             * }
             * if (true) {
             *   console.log('Top2');
             * }
             * if (true) {
             *    console.log('Top3');
             * }
             * if (true) {
             *    console.log('Top4');
             * }
             */

            //@ if (true)
            //@  console.log('Top1');
            //@ if (true)
            //@   console.log('Top2');
            //@ if (true)
            //@   console.log('Top3');
            //@ if (true)
            //@   console.log('Top4');
        }
        
        [Init(InitPosition.Bottom)]
        public static void CheckCommentsInInitPositionBottom()
        {
            /*@
             * console.log('Bottom0');
             *
             * if (true) {
             *  console.log('Bottom1');
             * }
             * if (true) {
             *   console.log('Bottom2');
             * }
             * if (true) {
             *    console.log('Bottom3');
             * }
             * if (true) {
             *    console.log('Bottom4');
             * }
             */

            //@ if (true)
            //@  console.log('Bottom1');
            //@ if (true)
            //@   console.log('Bottom2');
            //@ if (true)
            //@   console.log('Bottom3');
            //@ if (true)
            //@   console.log('Bottom4');
        }

        [Init(InitPosition.Before)]
        public static void CheckCommentsInInitPositionBefore()
        {
            /*@
             * console.log('Before0');
             *
             * if (true) {
             *  console.log('Before1');
             * }
             * if (true) {
             *   console.log('Before2');
             * }
             * if (true) {
             *    console.log('Before3');
             * }
             * if (true) {
             *    console.log('Before4');
             * }
             */

            //@ if (true)
            //@  console.log('Before1');
            //@ if (true)
            //@   console.log('Before2');
            //@ if (true)
            //@   console.log('Before3');
            //@ if (true)
            //@   console.log('Before4');
        }
    }

}