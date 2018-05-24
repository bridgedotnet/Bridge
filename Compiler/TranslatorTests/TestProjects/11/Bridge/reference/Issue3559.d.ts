/// <reference path="./bridge.d.ts" />

declare namespace Issue3559 {
    /** @namespace Issue3559 */

    /**
     * TypeScript reference for type parameters must be wrapped in lt and gt
     symbols, not parenthesis.
     *
     * @public
     * @class Issue3559.C$2
     */
    interface C$2<S,T> {
    }
    interface C$2Func extends Function {
        <S, T>($S: Bridge.TypeRef<S>, $T: Bridge.TypeRef<T>): {
            prototype: C$2<S,T>;
            R: Issue3559.C$2.RFunc;
            new (): C$2<S,T>;
        }
    }
    var C$2: C$2Func;
    module C$2 {
        interface R<S,T> {
            x: number;
            getHashCode(): number;
            equals(o: Issue3559.C$2.R<S,T>): boolean;
            $clone(to: Issue3559.C$2.R<S,T>): Issue3559.C$2.R<S,T>;
        }
        interface RFunc extends Function {
            <S, T>($S: Bridge.TypeRef<S>, $T: Bridge.TypeRef<T>): {
                prototype: R<S,T>;
                new (): R<S,T>;
            }
        }
    }

}
