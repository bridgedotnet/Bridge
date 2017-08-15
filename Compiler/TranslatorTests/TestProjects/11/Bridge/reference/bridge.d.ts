/*
 * @version   : 16.0.1 - Bridge.NET
 * @author    : Object.NET, Inc. http://bridge.net/
 * @date      : 2017-08-08
 * @copyright : Copyright 2008-2017 Object.NET, Inc. http://object.net/
 * @license   : See license.txt and https://github.com/bridgedotnet/Bridge/blob/master/LICENSE.md.
 */
declare module Bridge {
    export type TypeRef<T> = { prototype: { valueOf(): T } | T };
    export function global<T>(): T;
    export function emptyFn(): Function;
    export function box<T>(v: T, type: { prototype: T }): { v: T, type: { prototype: T } };
    export function unbox(obj:any, noclone?: boolean): any;
    export function property(scope: any, name: string, defaultValue: any): void;
    export function event(scope: any, name: string, defaultValue: any): void;
    export function copy<T>(to: T, from: T, keys: string[], toIf?: boolean): T;
    export function copy<T>(to: T, from: T, keys: string, toIf?: boolean): T;
    export function ns(ns: string, scope?: any): any;
    export function ready(fn: { (): void }): void;
    export function on(event: string, el: HTMLElement, fn: Function): void;
    export function getHashCode(value: any, safe: boolean): number;
    export function getDefaultValue<T>(type: TypeRef<T>): T;
    export function getTypeName(obj: any): string;
    export function is(obj: any, type: any, ignoreFn?: boolean): boolean;
    export function as<T>(obj: any, type: TypeRef<T>): T;
    export function cast<T>(obj: any, type: TypeRef<T>): T;
    export function apply<T>(obj: T, values: any): T;
    export function merge<T>(to: T, from: T): T;
    export function getEnumerator(obj: any): System.Collections.IEnumerator;
    export function getPropertyNames(obj: any, includeFunctions?: boolean): string[];
    export function isDefined(value: any, noNull?: boolean): boolean;
    export function isEmpty(value: any, allowEmpty?: boolean): boolean;
    export function toArray(ienumerable: any[]): any[];
    export function toArray<T>(ienumerable: T[]): T[];
    export function toArray<T>(ienumerable: any): T[];
    export function isArray(obj: any): boolean;
    export function isFunction(obj: any): boolean;
    export function isDate(obj: any): boolean;
    export function isNull(obj: any): boolean;
    export function isBoolean(obj: any): boolean;
    export function isNumber(obj: any): boolean;
    export function isString(obj: any): boolean;
    export function unroll(value: string): any;
    export function equals(a: any, b: any): boolean;
    export function objectEquals(a: any, b: any): boolean;
    export function deepEquals(a: any, b: any): boolean;
    export function compare(a: any, b: any, safe?: boolean): boolean;
    export function equalsT(a: any, b: any): boolean;
    export function format(obj: any, formatString?: string): string;
    export function getType(instance: any): any;
    export function isLower(c: number): boolean;
    export function isUpper(c: number): boolean;

    export interface fnMethods {
        call(obj: any, fnName: string): any;
        bind(obj: any, method: Function, args?: any[], appendArgs?: boolean): Function;
        bindScope(obj: any, method: Function): Function;
        combine(fn1: Function, fn2: Function): Function;
        remove(fn1: Function, fn2: Function): Function;
    }

    var fn: fnMethods;

    export interface Array {
        get(arr: any[], indices: number[]): any;
        set(arr: any[], indices: number[], value: any);
        getLength(arr: any[], dimension: number): number;
        getRank(arr: any[]): number;
        create(defValue: any, initValues: any[], sizes: number[]): any[];
        toEnumerable(array: any[]): System.Collections.IEnumerable;
        toEnumerable<T>(array: T[]): System.Collections.Generic.IEnumerable$1<T>;
        toEnumerator(array: any[]): System.Collections.IEnumerator;
        toEnumerator<T>(array: T[]): System.Collections.Generic.IEnumerator$1<T>;
    }

    var Array: Array;

    export interface Class {
        define(className: string, props: any): Function;
        define(className: string, scope: any, props: any): Function;
        generic(className: string, props: any): Function;
        generic(className: string, scope: any, props: any): Function;
    }

    var Class: Class;
    export function define(className: string, props: any): Function;
    export function define(className: string, scope: any, props: any): Function;

    export class ErrorException extends System.Exception {
        constructor(error: Error);
        getError(): Error;
    }

    export interface IPromise {
        then(fulfilledHandler: Function, errorHandler?: Function): void;
    }
    var IPromise: Function;

    export interface Int extends System.IComparable$1<Int>, System.IEquatable$1<Int> {
        instanceOf(instance): boolean;
        getDefaultValue(): number;
        format(num: number, format?: string, provider?: System.Globalization.NumberFormatInfo): string;
        parseFloat(str: string, provider?: System.Globalization.NumberFormatInfo): number;
        tryParseFloat(str: string, provider: System.Globalization.NumberFormatInfo, result: { v: number }): boolean;
        parseInt(str: string, min?: number, max?: number, radix?: number): number;
        tryParseInt(str: string, result: { v: number }, min?: number, max?: number, radix?: number): boolean;
        trunc(num: number): number;
        div(x: number, y: number): number;
    }
    var Int: Int;

    export interface Browser {
        isStrict: boolean;
        isIEQuirks: boolean;
        isOpera: boolean;
        isOpera10_5: boolean;
        isWebKit: boolean;
        isChrome: boolean;
        isSafari: boolean;
        isSafari3: boolean;
        isSafari4: boolean;
        isSafari5: boolean;
        isSafari5_0: boolean;
        isSafari2: boolean;
        isIE: boolean;
        isIE6: boolean;
        isIE7: boolean;
        isIE7m: boolean;
        isIE7p: boolean;
        isIE8: boolean;
        isIE8m: boolean;
        isIE8p: boolean;
        isIE9: boolean;
        isIE9m: boolean;
        isIE9p: boolean;
        isIE10: boolean;
        isIE10m: boolean;
        isIE10p: boolean;
        isIE11: boolean;
        isIE11m: boolean;
        isIE11p: boolean;
        isGecko: boolean;
        isGecko3: boolean;
        isGecko4: boolean;
        isGecko5: boolean;
        isGecko10: boolean;
        isFF3_0: boolean;
        isFF3_5: boolean;
        isFF3_6: boolean;
        isFF4: boolean;
        isFF5: boolean;
        isFF10: boolean;
        isLinux: boolean;
        isWindows: boolean;
        isMac: boolean;
        chromeVersion: number;
        firefoxVersion: number;
        ieVersion: number;
        operaVersion: number;
        safariVersion: number;
        webKitVersion: number;
        isSecure: boolean;
        isiPhone: boolean;
        isiPod: boolean;
        isiPad: boolean;
        isBlackberry: boolean;
        isAndroid: boolean;
        isDesktop: boolean;
        isTablet: boolean;
        isPhone: boolean;
        iOS: boolean;
        standalone: boolean;
    }

    var Browser: Browser;

    export class CustomEnumerator implements System.Collections.IEnumerator {
        constructor(moveNext: Function, getCurrent: Function, reset?: Function, dispose?: Function, scope?: any);
        moveNext(): boolean;
        getCurrent(): any;
        reset(): void;
        dispose(): void;
        readonly Current: any;
    }

    export class ArrayEnumerator implements System.Collections.IEnumerator {
        constructor(array: any[]);
        moveNext(): boolean;
        getCurrent(): any;
        reset(): void;
        dispose(): void;
        readonly Current: any;
    }

    export class ArrayEnumerable implements System.Collections.IEnumerable {
        constructor(array: any[]);
        getEnumerator(): ArrayEnumerator;
    }

    export interface Validation {
        isNull(value: any): boolean;
        isEmpty(value: any): boolean;
        isNotEmptyOrWhitespace(value: any): boolean;
        isNotNull(value: any): boolean;
        isNotEmpty(value: any): boolean;
        email(value: string): boolean;
        url(value: string): boolean;
        alpha(value: string): boolean;
        alphaNum(value: string): boolean;
        creditCard(value: string, type: string): boolean;
    }

    var Validation: Validation;

    module Collections {
        export interface EnumerableHelpers {
        }
        export interface EnumerableHelpersFunc extends Function {
            prototype: Bridge.Collections.EnumerableHelpers;
            new (): Bridge.Collections.EnumerableHelpers;
            toArray<T>(T: { prototype: T }, source: System.Collections.Generic.IEnumerable$1<T>): T[];
            toArray$1<T>(T: { prototype: T }, source: System.Collections.Generic.IEnumerable$1 < T >, length: { v: number }): T[];
        }
        var EnumerableHelpers: EnumerableHelpersFunc;
    }
}

declare module System {
    export class Object {
    }

    export class Attribute {
    }

    export interface Nullable {
        hasValue(obj: any): boolean;
        getValue<T>(obj: T): T;
        getValue(obj: any): any;
        getValueOrDefault<T>(obj: T, defValue: T): T;
        add(a: number, b: number): number;
        band<T>(a: number, b: number): number;
        bor<T>(a: number, b: number): number;
        and<T>(a: boolean, b: boolean): boolean;
        or<T>(a: boolean, b: boolean): boolean;
        div(a: number, b: number): number;
        eq(a: any, b: any): boolean;
        xor(a: number, b: number): number;
        gt(a: any, b: any): boolean;
        gte(a: any, b: any): boolean;
        neq(a: any, b: any): boolean;
        lt(a: any, b: any): boolean;
        lte(a: any, b: any): boolean;
        mod(a: number, b: number): number;
        mul(a: number, b: number): number;
        sl(a: number, b: number): number;
        sr(a: number, b: number): number;
        sub(a: number, b: number): number;
        bnot(a: number): number;
        neg(a: number): number;
        not(a: boolean): boolean;
        pos(a: number): number;
    }

    var Nullable: Nullable;

    export interface Char {
        isWhiteSpace(value: string): boolean;
        isDigit(value: number): boolean;
        isLetter(value: number): boolean;
        isHighSurrogate(value: number): boolean;
        isLowSurrogate(value: number): boolean;
        isSurrogate(value: number): boolean;
        isSymbol(value: number): boolean;
        isSeparator(value: number): boolean;
        isPunctuation(value: number): boolean;
        isNumber(value: number): boolean;
        isControl(value: number): boolean;
    }

    var Char: Char;

    export interface String {
        isNullOrWhiteSpace(value: string): boolean;
        isNullOrEmpty(value: string): boolean;
        fromCharCount(c: number, count: number): string;
        format(str: string, ...args: any[]): string;
        alignString(str: string, alignment: number, pad: string, dir: number): string;
        startsWith(str: string, prefix: string): boolean;
        endsWith(str: string, suffix: string): boolean;
        contains(str: string, value: string): string;
        indexOfAny(str: string, anyOf: number[], startIndex?: number, length?: number): number;
        indexOf(str: string, value: string): number;
        compare(strA: string, strB: string): number;
        toCharArray(str: string, startIndex: number, length: number): number[];
    }

    var String: String;

    export class Exception {
        constructor(message: string, innerException?: Exception);
        getMessage(): string;
        getInnerException(): Exception;
        getStackTrace(): any;
        getData<T>(): T;
        toString(): string;
        static create(error: string): Exception;
        static create(error: Error): Exception;
    }

    export class SystemException extends Exception {
        constructor(message: string, innerException: Exception);
        constructor(message: string);
    }

    export class OutOfMemoryException extends SystemException {
        constructor(message: string, innerException: Exception);
        constructor(message: string);
    }

    export class IndexOutOfRangeException extends SystemException {
        constructor(message: string, innerException: Exception);
        constructor(message: string);
    }

    export class ArgumentException extends Exception {
        constructor(message: string, paramName: string, innerException: Exception);
        constructor(message: string, innerException: Exception);
        constructor(message: string);
        getParamName(): string;
    }

    export class ArgumentNullException extends ArgumentException {
        constructor(paramName: string, message?: string, innerException?: Exception);
    }

    export class ArgumentOutOfRangeException extends ArgumentException {
        constructor(paramName: string, message?: string, innerException?: Exception, actualValue?: any);
        getActualValue<T>(): T;
    }

    export class ArithmeticException extends Exception {
        constructor(message?: string, innerException?: Exception);
    }

    export class DivideByZeroException extends ArithmeticException {
        constructor(message?: string, innerException?: Exception);
    }

    export class OverflowException extends ArithmeticException {
        constructor(message?: string, innerException?: Exception);
    }

    export class FormatException extends Exception {
        constructor(message?: string, innerException?: Exception);
    }

    export class InvalidCastException extends Exception {
        constructor(message?: string, innerException?: Exception);
    }

    export class InvalidOperationException extends Exception {
        constructor(message?: string, innerException?: Exception);
    }

    export class NotImplementedException extends Exception {
        constructor(message?: string, innerException?: Exception);
    }

    export class NotSupportedException extends Exception {
        constructor(message?: string, innerException?: Exception);
    }

    export class NullReferenceException extends Exception {
        constructor(message?: string, innerException?: Exception);
    }

    export interface IFormattable {
        format(format: string, formatProvider: IFormatProvider): string;
    }
    var IFormattable: Function;

    export interface IComparable {
        compareTo(obj: any): number;
    }
    var IComparable: Function;

    export interface IFormatProvider {
        getFormat(formatType: any): any;
    }

    export interface ICloneable {
        clone(): any;
    }
    var ICloneable: Function;

    export interface IComparable$1<T> {
        compareTo(other: T): number;
    }
    export function IComparable$1<T>(t: Bridge.TypeRef<T>): {
        prototype: IComparable$1<T>;
    }

    export interface IEquatable$1<T> {
        equals(other: T): boolean;
    }
    export function IEquatable$1<T>(t: Bridge.TypeRef<T>): {
        prototype: IEquatable$1<T>;
    }

    export interface IDisposable {
        dispose(): void;
    }
    var IDisposable: Function;

    export interface DateTime {
        utcNow(): Date;
        today(): Date;
        format(date: Date, format?: string, provider?: System.Globalization.DateTimeFormatInfo): string;
        parse(value: string, provider?: System.Globalization.DateTimeFormatInfo): Date;
        parseExact(str: string, format?: string, provider?: System.Globalization.DateTimeFormatInfo, silent?: boolean): Date;
        tryParse(str: string, provider: System.Globalization.DateTimeFormatInfo, result: { v: Date }): boolean;
        tryParseExact(str: string, format: string, provider: System.Globalization.DateTimeFormatInfo, result: { v: Date }): boolean;
        isDaylightSavingTime(dt: Date): boolean;
        toUTC(dt: Date): Date;
        toLocal(dt: Date): Date;
    }
    var DateTime: DateTime;

    export interface Guid extends System.IEquatable$1<System.Guid>, System.IComparable$1<System.Guid>, System.IFormattable {
        equalsT(o: System.Guid): boolean;
        compareTo(value: System.Guid): number;
        toString(): string;
        toString$1(format: string): string;
        format(format: string, formatProvider: System.IFormatProvider): string;
        toByteArray(): number[];
        getHashCode(): System.Guid;
        $clone(to: System.Guid): System.Guid;
    }
    export interface GuidFunc extends Function {
        prototype: Guid;
        $ctor4: {
            new (uuid: string): Guid;
        };
        $ctor1: {
            new (b: number[]): Guid;
        };
        $ctor5: {
            new (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number): Guid;
        };
        $ctor3: {
            new (a: number, b: number, c: number, d: number[]): Guid;
        };
        $ctor2: {
            new (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number): Guid;
        };
        ctor: {
            new (): Guid;
        };
        empty: System.Guid;
        parse(input: string): System.Guid;
        parseExact(input: string, format: string): System.Guid;
        tryParse(input: string, result: { v: System.Guid }): boolean;
        tryParseExact(input: string, format: string, result: { v: System.Guid }): boolean;
        newGuid(): System.Guid;
        op_Equality(a: System.Guid, b: System.Guid): boolean;
        op_Inequality(a: System.Guid, b: System.Guid): boolean;
    }
    var Guid: GuidFunc;

    export class TimeSpan implements IComparable, IComparable$1<TimeSpan>, IEquatable$1<TimeSpan> {
        static fromDays(value: number): TimeSpan;
        static fromHours(value: number): TimeSpan;
        static fromMilliseconds(value: number): TimeSpan;
        static fromMinutes(value: number): TimeSpan;
        static fromSeconds(value: number): TimeSpan;
        static fromTicks(value: number): TimeSpan;
        static getDefaultValue(): TimeSpan;
        constructor();
        getTicks(): number;
        getDays(): number;
        getHours(): number;
        getMilliseconds(): number;
        getMinutes(): number;
        getSeconds(): number;
        getTotalDays(): number;
        getTotalHours(): number;
        getTotalMilliseconds(): number;
        getTotalMinutes(): number;
        getTotalSeconds(): number;
        get12HourHour(): number;
        add(ts: TimeSpan): TimeSpan;
        subtract(ts: TimeSpan): TimeSpan;
        duration(): TimeSpan;
        negate(): TimeSpan;
        compareTo(other: TimeSpan): number;
        equals(other: TimeSpan): boolean;
        format(str: string, provider?: System.Globalization.DateTimeFormatInfo): string;
        toString(str: string, provider?: System.Globalization.DateTimeFormatInfo): string;
    }

    export interface Random {
        sample(): number;
        internalSample(): number;
        next(): number;
        next$2(minValue: number, maxValue: number): number;
        next$1(maxValue: number): number;
        nextDouble(): number;
        nextBytes(buffer: number[]): void;
    }
    export interface RandomFunc extends Function {
        prototype: Random;
        ctor: {
            new (): Random;
        };
        $ctor1: {
            new (seed: number): Random;
        };
    }
    var Random: RandomFunc;

    module Collections {
        export interface IEnumerable {
            getEnumerator(): IEnumerator;
        }
        var IEnumerable: Function;

        export interface IEnumerator {
            getCurrent(): any;
            moveNext(): boolean;
            reset(): void;
            readonly Current: any;
        }
        var IEnumerator: Function;

        export interface IEqualityComparer {
            equals(x: any, y: any): boolean;
            getHashCode(obj: any): number;
        }
        var IEqualityComparer: Function;

        export interface ICollection extends IEnumerable {
            getCount(): number;
        }
        var ICollection: Function;

        export interface BitArray extends System.Collections.ICollection, System.ICloneable {
            getItem(index: number): boolean;
            setItem(index: number, value: boolean): void;
            Length: number;
            Count: number;
            IsReadOnly: boolean;
            IsSynchronized: boolean;
            copyTo(array: Array<any>, index: number): void;
            get(index: number): boolean;
            set(index: number, value: boolean): void;
            setAll(value: boolean): void;
            and(value: System.Collections.BitArray): System.Collections.BitArray;
            or(value: System.Collections.BitArray): System.Collections.BitArray;
            xor(value: System.Collections.BitArray): System.Collections.BitArray;
            not(): System.Collections.BitArray;
            clone(): System.Object;
            getEnumerator(): System.Collections.IEnumerator;
        }
        export interface BitArrayFunc extends Function {
            prototype: BitArray;
            BitArrayEnumeratorSimple: System.Collections.BitArray.BitArrayEnumeratorSimpleFunc;
            $ctor3: {
                new (length: number): BitArray
            };
            $ctor4: {
                new (length: number, defaultValue: boolean): BitArray
            };
            $ctor1: {
                new (bytes: number[]): BitArray
            };
            ctor: {
                new (values: boolean[]): BitArray
            };
            $ctor5: {
                new (values: number[]): BitArray
            };
            $ctor2: {
                new (bits: System.Collections.BitArray): BitArray
            };
            getArrayLength(n: number, div: number): number;
        }
        var BitArray: BitArrayFunc;

        module BitArray {
            export interface BitArrayEnumeratorSimple extends System.Collections.IEnumerator {
                Current: System.Object;
                moveNext(): boolean;
                reset(): void;
            }
            export interface BitArrayEnumeratorSimpleFunc extends Function {
                prototype: BitArrayEnumeratorSimple;
            }
        }

        export interface HashHelpers {
        }
        export interface HashHelpersFunc extends Function {
            prototype: HashHelpers;
            new (): HashHelpers;
            primes: number[];
            MaxPrimeArrayLength: number;
            isPrime(candidate: number): boolean;
            getPrime(min: number): number;
            getMinPrime(): number;
            expandPrime(oldSize: number): number;
        }
        var HashHelpers: HashHelpersFunc;

        module Generic {
            export class KeyNotFoundException extends Exception {
                constructor(message?: string, innerException?: Exception);
            }
            export interface IEnumerator$1<T> extends IEnumerator {
                getCurrent(): T;
                readonly Current: T;
            }
            export function IEnumerator$1<T>(t: Bridge.TypeRef<T>): {
                prototype: IEnumerator$1<T>;
            }

            export interface IEnumerable$1<T> extends IEnumerable {
                getEnumerator(): IEnumerator$1<T>;
            }
            export function IEnumerable$1<T>(t: Bridge.TypeRef<T>): {
                prototype: IEnumerable$1<T>;
            }

            export interface ICollection$1<T> extends IEnumerable$1<T> {
                getCount(): number;
                add(item: T): void;
                clear(): void;
                contains(item: T): boolean;
                remove(item: T): boolean;
            }
            export function ICollection$1<T>(t: Bridge.TypeRef<T>): {
                prototype: ICollection$1<T>;
            }

            export interface IEqualityComparer$1<T> extends IEqualityComparer {
                equals(x: T, y: T): boolean;
                getHashCode(obj: T): number;
            }
            export function IEqualityComparer$1<T>(t: Bridge.TypeRef<T>): {
                prototype: IEqualityComparer$1<T>;
            }

            export interface IDictionary$2<TKey, TValue> extends IEnumerable$1<KeyValuePair$2<TKey, TValue>> {
                get(key: TKey): TValue;
                set(key: TKey, value: TValue): void;
                getKeys(): ICollection$1<TKey>;
                getValues(): ICollection$1<TValue>;
                getCount(): number;
                containsKey(key: TKey): boolean;
                add(key: TKey, value: TValue): void;
                remove(key: TKey): boolean;
                tryGetValue(key: TKey, value: { v: TValue }): boolean;
            }
            export function IDictionary$2<TKey, TValue>(tKey: Bridge.TypeRef<TKey>, tValue: Bridge.TypeRef<TValue>): {
                prototype: IDictionary$2<TKey, TValue>;
            }

            export interface IList$1<T> extends ICollection$1<T> {
                get(index: number): T;
                set(index: number, value: T): void;
                indexOf(item: T): number;
                insert(index: number, item: T): void;
                removeAt(index: number): void;
            }
            export function IList$1<T>(t: Bridge.TypeRef<T>): {
                prototype: IList$1<T>;
            }

            export interface IComparer$1<T> {
                compare(x: T, y: T): number;
            }
            export function IComparer$1<T>(t: Bridge.TypeRef<T>): {
                prototype: IComparer$1<T>;
            }

            export interface EqualityComparer$1<T> extends IEqualityComparer$1<T> {
                equals(x: T, y: T): boolean;
                getHashCode(obj: T): number;
            }
            export function EqualityComparer$1<T>(t: Bridge.TypeRef<T>): {
                prototype: EqualityComparer$1<T>;
                new (): EqualityComparer$1<T>;
            }

            export interface Comparer$1<T> extends IComparer$1<T> {
                compare(x: T, y: T): number;
            }
            export function Comparer$1<T>(t: Bridge.TypeRef<T>): {
                prototype: Comparer$1<T>;
                new (fn: { (x: T, y: T): number }): Comparer$1<T>;
            }

            export interface KeyValuePair$2<TKey, TValue> {
                key: TKey;
                value: TValue;
            }
            export function KeyValuePair$2<TKey, TValue>(tKey: Bridge.TypeRef<TKey>, tValue: Bridge.TypeRef<TValue>): {
                prototype: KeyValuePair$2<TKey, TValue>;
                new (key: TKey, value: TValue): KeyValuePair$2<TKey, TValue>;
            }

            export interface Dictionary$2<TKey, TValue> extends IDictionary$2<TKey, TValue> {
                getKeys(): ICollection$1<TKey>;
                getValues(): ICollection$1<TValue>;
                clear(): void;
                containsKey(key: TKey): boolean;
                containsValue(value: TValue): boolean;
                get(key: TKey): TValue;
                set(key: TKey, value: TValue, add?: boolean): void;
                add(key: TKey, value: TValue): void;
                remove(key: TKey): boolean;
                getCount(): number;
                getComparer(): IEqualityComparer$1<TKey>;
                tryGetValue(key: TKey, value: { v: TValue }): boolean;
                getEnumerator(): IEnumerator$1<KeyValuePair$2<TKey, TValue>>;
            }
            export function Dictionary$2<TKey, TValue>(tKey: Bridge.TypeRef<TKey>, tValue: Bridge.TypeRef<TValue>): {
                prototype: Dictionary$2<TKey, TValue>;
                new (): Dictionary$2<TKey, TValue>;
                new (obj: Dictionary$2<TKey, TValue>, comparer?: IEqualityComparer$1<TKey>): Dictionary$2<TKey, TValue>;
                new (obj: any, comparer?: IEqualityComparer$1<TKey>): Dictionary$2<TKey, TValue>;
            }

            export interface List$1<T> extends ICollection$1<T>, IList$1<T> {
                getCount(): number;
                get(index: number): T;
                set(index: number, value: T): void;
                add(value: T): void;
                addRange(items: T[]);
                addRange(items: IEnumerable$1<T>);
                clear(): void;
                indexOf(item: T, startIndex?: number): number;
                insertRange(index: number, items: IEnumerable$1<T>): void;
                contains(item: T): boolean;
                getEnumerator(): IEnumerator$1<T>;
                getRange(index: number, count?: number): List$1<T>;
                getRange(): List$1<T>;
                insert(index: number, item: T): void;
                join(delimeter?: string): string;
                lastIndexOf(item: T, fromIndex?: number): number;
                remove(item: T): boolean;
                removeAt(index: number): void;
                removeRange(index: number, count: number): void;
                reverse(): void;
                slice(start: number, end: number): void;
                sort(comparison?: { (x: T, y: T): number });
                splice(start: number, deleteCount: number, itemsToInsert?: IEnumerable$1<T>): void;
                splice(start: number, deleteCount: number, itemsToInsert?: T[]): void;
                unshift(): void;
                toArray(): T[];
            }
            export function List$1<T>(t: Bridge.TypeRef<T>): {
                prototype: List$1<T>;
                new (): List$1<T>;
                new (obj: T[]): List$1<T>;
                new (obj: IEnumerable$1<T>): List$1<T>;
            }

            export interface BitHelper {
                markBit(bitPosition: number): void;
                isMarked(bitPosition: number): boolean;
            }
            export interface BitHelperFunc extends Function {
                prototype: BitHelper;
                toIntArrayLength(n: number): number;
            }
            var BitHelper: BitHelperFunc;

            export interface ISet$1<T> extends System.Collections.Generic.ICollection$1<T> {
                add(item: T): boolean;
                unionWith(other: System.Collections.Generic.IEnumerable$1<T>): void;
                intersectWith(other: System.Collections.Generic.IEnumerable$1<T>): void;
                exceptWith(other: System.Collections.Generic.IEnumerable$1<T>): void;
                symmetricExceptWith(other: System.Collections.Generic.IEnumerable$1<T>): void;
                isSubsetOf(other: System.Collections.Generic.IEnumerable$1<T>): boolean;
                isSupersetOf(other: System.Collections.Generic.IEnumerable$1<T>): boolean;
                isProperSupersetOf(other: System.Collections.Generic.IEnumerable$1<T>): boolean;
                isProperSubsetOf(other: System.Collections.Generic.IEnumerable$1<T>): boolean;
                overlaps(other: System.Collections.Generic.IEnumerable$1<T>): boolean;
                setEquals(other: System.Collections.Generic.IEnumerable$1<T>): boolean;
            }

            export interface HashSet$1<T> extends System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.ISet$1<T> {
                Count: number;
                IsReadOnly: boolean;
                Comparer: System.Collections.Generic.IEqualityComparer$1<T>;
                //"System$Collections$Generic$ICollection$1$" + Bridge.getTypeAlias(T) + "$add"(item: T): void;
                add(item: T): boolean;
                clear(): void;
                arrayClear(array: Array<any>, index: number, length: number): void;
                contains(item: T): boolean;
                copyTo(array: T[], arrayIndex: number): void;
                copyTo$1(array: T[]): void;
                copyTo$2(array: T[], arrayIndex: number, count: number): void;
                remove(item: T): boolean;
                getEnumerator(): System.Collections.Generic.HashSet$1.Enumerator<T>;
                //"System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator"(): System.Collections.Generic.IEnumerator$1<T>;
                System$Collections$IEnumerable$getEnumerator(): System.Collections.IEnumerator;
                unionWith(other: System.Collections.Generic.IEnumerable$1<T>): void;
                intersectWith(other: System.Collections.Generic.IEnumerable$1<T>): void;
                exceptWith(other: System.Collections.Generic.IEnumerable$1<T>): void;
                symmetricExceptWith(other: System.Collections.Generic.IEnumerable$1<T>): void;
                isSubsetOf(other: System.Collections.Generic.IEnumerable$1<T>): boolean;
                isProperSubsetOf(other: System.Collections.Generic.IEnumerable$1<T>): boolean;
                isSupersetOf(other: System.Collections.Generic.IEnumerable$1<T>): boolean;
                isProperSupersetOf(other: System.Collections.Generic.IEnumerable$1<T>): boolean;
                overlaps(other: System.Collections.Generic.IEnumerable$1<T>): boolean;
                setEquals(other: System.Collections.Generic.IEnumerable$1<T>): boolean;
                removeWhere(match: { (arg: T): boolean }): number;
                trimExcess(): void;
                initialize(capacity: number): void;
                increaseCapacity(): void;
                setCapacity(newSize: number, forceNewHashCodes: boolean): void;
                addIfNotPresent(value: T): boolean;
                containsAllElements(other: System.Collections.Generic.IEnumerable$1<T>): boolean;
                isSubsetOfHashSetWithSameEC(other: System.Collections.Generic.HashSet$1<T>): boolean;
                intersectWithHashSetWithSameEC(other: System.Collections.Generic.HashSet$1<T>): void;
                intersectWithEnumerable(other: System.Collections.Generic.IEnumerable$1<T>): void;
                internalIndexOf(item: T): number;
                symmetricExceptWithUniqueHashSet(other: System.Collections.Generic.HashSet$1<T>): void;
                symmetricExceptWithEnumerable(other: System.Collections.Generic.IEnumerable$1<T>): void;
                addOrGetLocation(value: T, location: { v: number }): boolean;
                checkUniqueAndUnfoundElements(other: System.Collections.Generic.IEnumerable$1<T>, returnIfUnfound: boolean): System.Collections.Generic.HashSet$1.ElementCount<T>;
                toArray(): T[];
                internalGetHashCode(item: T): number;
            }
            export interface HashSet$1Func extends Function {
                <T>($T: Bridge.TypeRef<T>): {
                    prototype: HashSet$1<T>;
                    ElementCount: System.Collections.Generic.HashSet$1.ElementCountFunc;
                    Enumerator: System.Collections.Generic.HashSet$1.EnumeratorFunc;
                    Slot: System.Collections.Generic.HashSet$1.SlotFunc;
                    new (): HashSet$1<T>;
                    ctor: {
                        new (): HashSet$1<T>
                    };
                    $ctor3: {
                        new (comparer: System.Collections.Generic.IEqualityComparer$1<T>): HashSet$1<T>
                    };
                    $ctor1: {
                        new (collection: System.Collections.Generic.IEnumerable$1<T>): HashSet$1<T>
                    };
                    $ctor2: {
                        new (collection: System.Collections.Generic.IEnumerable$1<T>, comparer: System.Collections.Generic.IEqualityComparer$1<T>): HashSet$1<T>
                    };
                    hashSetEquals(set1: System.Collections.Generic.HashSet$1<T>, set2: System.Collections.Generic.HashSet$1<T>, comparer: System.Collections.Generic.IEqualityComparer$1<T>): boolean;
                    areEqualityComparersEqual(set1: System.Collections.Generic.HashSet$1<T>, set2: System.Collections.Generic.HashSet$1<T>): boolean;
                }
            }
            var HashSet$1: HashSet$1Func;

            module HashSet$1 {
                export interface ElementCount<T> {
                    getHashCode(): System.Collections.Generic.HashSet$1.ElementCount<T>;
                    equals(o: System.Collections.Generic.HashSet$1.ElementCount<T>): Boolean;
                    $clone(to: System.Collections.Generic.HashSet$1.ElementCount<T>): System.Collections.Generic.HashSet$1.ElementCount<T>;
                }
                export interface ElementCountFunc extends Function {
                    <T>($T: Bridge.TypeRef<T>): {
                        prototype: ElementCount<T>;
                        new (): ElementCount<T>;
                    }
                }

                export interface Enumerator<T> extends System.Collections.Generic.IEnumerator$1<T> {
                    Current: T;
                    System$Collections$IEnumerator$Current: System.Object;
                    dispose(): void;
                    moveNext(): boolean;
                    System$Collections$IEnumerator$reset(): void;
                    getHashCode(): System.Collections.Generic.HashSet$1.Enumerator<T>;
                    equals(o: System.Collections.Generic.HashSet$1.Enumerator<T>): Boolean;
                    $clone(to: System.Collections.Generic.HashSet$1.Enumerator<T>): System.Collections.Generic.HashSet$1.Enumerator<T>;
                }
                export interface EnumeratorFunc extends Function {
                    <T>($T: Bridge.TypeRef<T>): {
                        prototype: Enumerator<T>;
                        new (): Enumerator<T>;
                        ctor: {
                            new (): Enumerator<T>
                        };
                    }
                }

                export interface Slot<T> {
                    getHashCode(): System.Collections.Generic.HashSet$1.Slot<T>;
                    equals(o: System.Collections.Generic.HashSet$1.Slot<T>): Boolean;
                    $clone(to: System.Collections.Generic.HashSet$1.Slot<T>): System.Collections.Generic.HashSet$1.Slot<T>;
                }
                export interface SlotFunc extends Function {
                    <T>($T: Bridge.TypeRef<T>): {
                        prototype: Slot<T>;
                        new (): Slot<T>;
                    }
                }
            }

            export interface Queue$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.ICollection {
                Count: number;
                IsReadOnly: boolean;

                copyTo(array: Array<any>, index: number): void;
                copyTo$1(array: T[], arrayIndex: number): void;
                clear(): void;
                enqueue(item: T): void;
                getEnumerator(): System.Collections.Generic.Queue$1.Enumerator<T>;
                //"System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator"(): System.Collections.Generic.IEnumerator$1<T>;
                System$Collections$IEnumerable$getEnumerator(): System.Collections.IEnumerator;
                dequeue(): T;
                peek(): T;
                contains(item: T): boolean;
                getElement(i: number): T;
                toArray(): T[];
                setCapacity(capacity: number): void;
                moveNext(index: number): number;
                trimExcess(): void;
            }
            export interface Queue$1Func extends Function {
                <T>($T: Bridge.TypeRef<T>): {
                    prototype: Queue$1<T>;
                    Enumerator: System.Collections.Generic.Queue$1.EnumeratorFunc;
                    new (): Queue$1<T>;
                    ctor: {
                        new (): Queue$1<T>
                    };
                    $ctor2: {
                        new (capacity: number): Queue$1<T>
                    };
                    $ctor1: {
                        new (collection: System.Collections.Generic.IEnumerable$1<T>): Queue$1<T>
                    };
                }
            }
            var Queue$1: Queue$1Func;

            module Queue$1 {
                export interface Enumerator<T> extends System.Collections.Generic.IEnumerator$1<T> {
                    Current: T;
                    System$Collections$IEnumerator$Current: System.Object;
                    dispose(): void;
                    moveNext(): boolean;
                    System$Collections$IEnumerator$reset(): void;
                    getHashCode(): System.Collections.Generic.Queue$1.Enumerator<T>;
                    equals(o: System.Collections.Generic.Queue$1.Enumerator<T>): Boolean;
                    $clone(to: System.Collections.Generic.Queue$1.Enumerator<T>): System.Collections.Generic.Queue$1.Enumerator<T>;
                }
                export interface EnumeratorFunc extends Function {
                    <T>($T: Bridge.TypeRef<T>): {
                        prototype: Enumerator<T>;
                        new (): Enumerator<T>;
                        ctor: {
                            new (): Enumerator<T>
                        };
                    }
                }
            }

            export interface Stack$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.ICollection {
                Count: number;
                IsReadOnly: boolean;
                clear(): void;
                contains(item: T): boolean;
                copyTo$1(array: T[], arrayIndex: number): void;
                copyTo(array: Array<any>, arrayIndex: number): void;
                getEnumerator(): System.Collections.Generic.Stack$1.Enumerator<T>;
                //"System$Collections$Generic$IEnumerable$1$" + Bridge.getTypeAlias(T) + "$getEnumerator"(): System.Collections.Generic.IEnumerator$1<T>;
                System$Collections$IEnumerable$getEnumerator(): System.Collections.IEnumerator;
                trimExcess(): void;
                peek(): T;
                pop(): T;
                push(item: T): void;
                toArray(): T[];
            }
            export interface Stack$1Func extends Function {
                <T>($T: Bridge.TypeRef<T>): {
                    prototype: Stack$1<T>;
                    Enumerator: System.Collections.Generic.Stack$1.EnumeratorFunc;
                    new (): Stack$1<T>;
                    ctor: {
                        new (): Stack$1<T>
                    };
                    $ctor2: {
                        new (capacity: number): Stack$1<T>
                    };
                    $ctor1: {
                        new (collection: System.Collections.Generic.IEnumerable$1<T>): Stack$1<T>
                    };
                }
            }
            var Stack$1: Stack$1Func;

            module Stack$1 {
                export interface Enumerator<T> extends System.Collections.Generic.IEnumerator$1<T> {
                    Current: T;
                    System$Collections$IEnumerator$Current: System.Object;
                    dispose(): void;
                    moveNext(): boolean;
                    System$Collections$IEnumerator$reset(): void;
                    getHashCode(): System.Collections.Generic.Stack$1.Enumerator<T>;
                    equals(o: System.Collections.Generic.Stack$1.Enumerator<T>): Boolean;
                    $clone(to: System.Collections.Generic.Stack$1.Enumerator<T>): System.Collections.Generic.Stack$1.Enumerator<T>;
                }
                export interface EnumeratorFunc extends Function {
                    <T>($T: Bridge.TypeRef<T>): {
                        prototype: Enumerator<T>;
                        new (): Enumerator<T>;
                        ctor: {
                            new (): Enumerator<T>
                        };
                    }
                }
            }
        }

        module ObjectModel {
            export interface ReadOnlyCollection$1<T> extends System.Collections.Generic.List$1<T> {
            }
            export function ReadOnlyCollection$1<T>(t: Bridge.TypeRef<T>): {
                prototype: ReadOnlyCollection$1<T>;
                new (obj: T[]): ReadOnlyCollection$1<T>;
                new (obj: System.Collections.Generic.IEnumerable$1<T>): ReadOnlyCollection$1<T>;
            }
        }
    }

    module ComponentModel {
        export interface INotifyPropertyChanged {
            propertyChanged(sender: any, e: PropertyChangedEventArgs): void;
        }
        var INotifyPropertyChanged: Function;

        export class PropertyChangedEventArgs {
            constructor(propertyName: string);
            propertyName: string;
        }
    }

    module Globalization {
        export class CultureNotFoundException extends ArgumentException {
            constructor(paramName: string, invalidCultureName?: string, message?: string, innerException?: Exception);
            getInvalidCultureName(): string;
        }

        export class DateTimeFormatInfo implements IFormatProvider, ICloneable {
            invariantInfo: DateTimeFormatInfo;
            clone(): any;
            getFormat(type: any): any;
            getAbbreviatedDayName(dayofweek: number): string;
            getAbbreviatedMonthName(month: number): string;
            getAllDateTimePatterns(format: string, returnNull?: boolean): string[];
            getDayName(dayofweek: number): string;
            getMonthName(month: number): string;
            getShortestDayName(dayofweek: number): string;
        }

        export class NumberFormatInfo implements IFormatProvider, ICloneable {
            invariantInfo: NumberFormatInfo;
            clone(): any;
            getFormat(type: any): any;
        }

        export class CultureInfo implements IFormatProvider, ICloneable {
            constructor(name: string);
            invariantCulture: CultureInfo;
            clone(): any;
            getFormat(type: any): any;
            static getCurrentCulture(): CultureInfo;
            static setCurrentCulture(culture: CultureInfo): void;
            static getCultureInfo(name: string): CultureInfo;
            static getCultures(): CultureInfo[];
        }
    }

    module Text {
        export class StringBuilder {
            constructor();
            constructor(value: string);
            constructor(value: string, capacity: number);
            constructor(value: string, startIndex: number, length: number);
            getLength(): number;
            getCapacity(): number;
            setCapacity(value: number): void;
            toString(startIndex?: number, length?: number): string;
            append(value: string): StringBuilder;
            append(value: string, count: number): StringBuilder;
            append(value: string, startIndex: number, count: number): StringBuilder;
            appendFormat(format: string, ...args: string[]): StringBuilder;
            clear(): void;
            appendLine(): StringBuilder;
            equals(sb: StringBuilder): boolean;
            remove(startIndex: number, length: number): StringBuilder;
            insert(index: number, value: string, count?: number): StringBuilder;
            replace(oldValue: string, newValue: string, startIndex?: number, count?: number): StringBuilder;
        }
    }

    module Threading {
        module Tasks {
            export class Task {
                constructor(action: Function, state?: any);
                static delay(delay: number, state?: any): Task;
                static fromResult(result: any): Task;
                static run(fn: Function): Task;
                static whenAll(tasks: Task[]): Task;
                static whenAny(tasks: Task[]): Task;
                static fromCallback(target: any, method: string, ...otherArguments: any[]): Task;
                static fromCallbackResult(target: any, method: string, resultHandler: Function, ...otherArguments: any[]): Task;
                static fromCallbackOptions(target: any, method: string, name: string, ...otherArguments: any[]): Task;
                static fromPromise(promise: Bridge.IPromise, handler: Function): Task;
                continueWith(continuationAction: Function): Task;
                start(): void;
                complete(result?: any): boolean;
                isCanceled(): boolean;
                isCompleted(): boolean;
                isFaulted(): boolean;
                setCanceled(): void;
                setError(error: Exception): void;
            }

            export class Task$1<TResult> extends Task {
                constructor(action: () => TResult);
                constructor(action: (fn: any) => TResult, state: any);
                getResult(): TResult;
                continueWith(continuationAction: (arg: Task$1<TResult>) => void): Task;
                continueWith<TNewResult>(continuationAction: (arg: Task$1<TResult>) => TNewResult): Task$1<TNewResult>;
                setResult(result: TResult): void;
            }
        }
    }
}

declare module Bridge.Linq {
    interface EnumerableStatic {
        Utils: {
            createLambda(expression: any): (...params: any[]) => any;
            createEnumerable(getEnumerator: () => System.Collections.IEnumerator): Enumerable;
            createEnumerator(initialize: () => void, tryGetNext: () => boolean, dispose: () => void): System.Collections.IEnumerator;
            extendTo(type: any): void;
        };
        choice(...params: any[]): Enumerable;
        cycle(...params: any[]): Enumerable;
        empty(): Enumerable;
        from(): Enumerable;
        from(obj: Enumerable): Enumerable;
        from(obj: string): Enumerable;
        from(obj: number): Enumerable;
        from(obj: { length: number;[x: number]: any; }): Enumerable;
        from(obj: any): Enumerable;
        make(element: any): Enumerable;
        matches(input: string, pattern: RegExp): Enumerable;
        matches(input: string, pattern: string, flags?: string): Enumerable;
        range(start: number, count: number, step?: number): Enumerable;
        rangeDown(start: number, count: number, step?: number): Enumerable;
        rangeTo(start: number, to: number, step?: number): Enumerable;
        repeat(element: any, count?: number): Enumerable;
        repeatWithFinalize(initializer: () => any, finalizer: (element: any) => void): Enumerable;
        generate(func: () => any, count?: number): Enumerable;
        toInfinity(start?: number, step?: number): Enumerable;
        toNegativeInfinity(start?: number, step?: number): Enumerable;
        unfold(seed: any, func: (value: any) => any): Enumerable;
        defer(enumerableFactory: () => Enumerable): Enumerable;
    }

    interface Enumerable {
        constructor(getEnumerator: () => System.Collections.IEnumerator): Enumerable;
        getEnumerator(): System.Collections.IEnumerator;

        // Extension Methods
        traverseBreadthFirst(func: (element: any) => Enumerable, resultSelector?: (element: any, nestLevel: number) => any): Enumerable;
        traverseDepthFirst(func: (element: any) => Enumerable, resultSelector?: (element: any, nestLevel: number) => any): Enumerable;
        flatten(): Enumerable;
        pairwise(selector: (prev: any, current: any) => any): Enumerable;
        scan(func: (prev: any, current: any) => any): Enumerable;
        scan(seed: any, func: (prev: any, current: any) => any): Enumerable;
        select(selector: (element: any, index: number) => any): Enumerable;
        selectMany(collectionSelector: (element: any, index: number) => any[], resultSelector?: (outer: any, inner: any) => any): Enumerable;
        selectMany(collectionSelector: (element: any, index: number) => Enumerable, resultSelector?: (outer: any, inner: any) => any): Enumerable;
        selectMany(collectionSelector: (element: any, index: number) => { length: number;[x: number]: any; }, resultSelector?: (outer: any, inner: any) => any): Enumerable;
        where(predicate: (element: any, index: number) => boolean): Enumerable;
        choose(selector: (element: any, index: number) => any): Enumerable;
        ofType(type: any): Enumerable;
        zip(second: any[], resultSelector: (first: any, second: any, index: number) => any): Enumerable;
        zip(second: Enumerable, resultSelector: (first: any, second: any, index: number) => any): Enumerable;
        zip(second: { length: number;[x: number]: any; }, resultSelector: (first: any, second: any, index: number) => any): Enumerable;
        zip(...params: any[]): Enumerable; // last one is selector
        merge(second: any[], resultSelector: (first: any, second: any, index: number) => any): Enumerable;
        merge(second: Enumerable, resultSelector: (first: any, second: any, index: number) => any): Enumerable;
        merge(second: { length: number;[x: number]: any; }, resultSelector: (first: any, second: any, index: number) => any): Enumerable;
        merge(...params: any[]): Enumerable; // last one is selector
        join(inner: Enumerable, outerKeySelector: (outer: any) => any, innerKeySelector: (inner: any) => any, resultSelector: (outer: any, inner: any) => any, compareSelector?: (obj: any) => any): Enumerable;
        groupJoin(inner: Enumerable, outerKeySelector: (outer: any) => any, innerKeySelector: (inner: any) => any, resultSelector: (outer: any, inner: any) => any, compareSelector?: (obj: any) => any): Enumerable;
        all(predicate: (element: any) => boolean): boolean;
        any(predicate?: (element: any) => boolean): boolean;
        isEmpty(): boolean;
        concat(...sequences: any[]): Enumerable;
        insert(index: number, second: any[]): Enumerable;
        insert(index: number, second: Enumerable): Enumerable;
        insert(index: number, second: { length: number;[x: number]: any; }): Enumerable;
        alternate(alternateValue: any): Enumerable;
        alternate(alternateSequence: any[]): Enumerable;
        alternate(alternateSequence: Enumerable): Enumerable;
        contains(value: any, compareSelector: (element: any) => any): Enumerable;
        contains(value: any): Enumerable;
        defaultIfEmpty(defaultValue?: any): Enumerable;
        distinct(compareSelector?: (element: any) => any): Enumerable;
        distinctUntilChanged(compareSelector: (element: any) => any): Enumerable;
        except(second: any[], compareSelector?: (element: any) => any): Enumerable;
        except(second: { length: number;[x: number]: any; }, compareSelector?: (element: any) => any): Enumerable;
        except(second: Enumerable, compareSelector?: (element: any) => any): Enumerable;
        intersect(second: any[], compareSelector?: (element: any) => any): Enumerable;
        intersect(second: { length: number;[x: number]: any; }, compareSelector?: (element: any) => any): Enumerable;
        intersect(second: Enumerable, compareSelector?: (element: any) => any): Enumerable;
        sequenceEqual(second: any[], compareSelector?: (element: any) => any): Enumerable;
        sequenceEqual(second: { length: number;[x: number]: any; }, compareSelector?: (element: any) => any): Enumerable;
        sequenceEqual(second: Enumerable, compareSelector?: (element: any) => any): Enumerable;
        union(second: any[], compareSelector?: (element: any) => any): Enumerable;
        union(second: { length: number;[x: number]: any; }, compareSelector?: (element: any) => any): Enumerable;
        union(second: Enumerable, compareSelector?: (element: any) => any): Enumerable;
        orderBy(keySelector: (element: any) => any): OrderedEnumerable;
        orderByDescending(keySelector: (element: any) => any): OrderedEnumerable;
        reverse(): Enumerable;
        shuffle(): Enumerable;
        weightedSample(weightSelector: (element: any) => any): Enumerable;
        groupBy(keySelector: (element: any) => any, elementSelector?: (element: any) => any, resultSelector?: (key: any, element: any) => any, compareSelector?: (element: any) => any): Enumerable;
        partitionBy(keySelector: (element: any) => any, elementSelector?: (element: any) => any, resultSelector?: (key: any, element: any) => any, compareSelector?: (element: any) => any): Enumerable;
        buffer(count: number): Enumerable;
        aggregate(func: (prev: any, current: any) => any): any;
        aggregate(seed: any, func: (prev: any, current: any) => any, resultSelector?: (last: any) => any): any;
        average(selector?: (element: any) => any): number;
        count(predicate?: (element: any, index: number) => boolean): number;
        max(selector?: (element: any) => any): number;
        min(selector?: (element: any) => any): number;
        maxBy(keySelector: (element: any) => any): any;
        minBy(keySelector: (element: any) => any): any;
        sum(selector?: (element: any) => any): number;
        elementAt(index: number): any;
        elementAtOrDefault(index: number, defaultValue?: any): any;
        first(predicate?: (element: any, index: number) => boolean): any;
        firstOrDefault(predicate?: (element: any, index: number) => boolean, defaultValue?: any): any;
        last(predicate?: (element: any, index: number) => boolean): any;
        lastOrDefault(predicate?: (element: any, index: number) => boolean, defaultValue?: any): any;
        single(predicate?: (element: any, index: number) => boolean): any;
        singleOrDefault(predicate?: (element: any, index: number) => boolean, defaultValue?: any): any;
        skip(count: number): Enumerable;
        skipWhile(predicate: (element: any, index: number) => boolean): Enumerable;
        take(count: number): Enumerable;
        takeWhile(predicate: (element: any, index: number) => boolean): Enumerable;
        takeExceptLast(count?: number): Enumerable;
        takeFromLast(count: number): Enumerable;
        indexOf(item: any): number;
        indexOf(predicate: (element: any, index: number) => boolean): number;
        lastIndexOf(item: any): number;
        lastIndexOf(predicate: (element: any, index: number) => boolean): number;
        asEnumerable(): Enumerable;
        toArray(): any[];
        toLookup(keySelector: (element: any) => any, elementSelector?: (element: any) => any, compareSelector?: (element: any) => any): Lookup;
        toObject(keySelector: (element: any) => any, elementSelector?: (element: any) => any): Object;
        toDictionary(keySelector: (element: any) => any, elementSelector?: (element: any) => any, compareSelector?: (element: any) => any): Dictionary;
        toJSONString(replacer: (key: string, value: any) => any): string;
        toJSONString(replacer: any[]): string;
        toJSONString(replacer: (key: string, value: any) => any, space: any): string;
        toJSONString(replacer: any[], space: any): string;
        toJoinedString(separator?: string, selector?: (element: any, index: number) => any): string;
        doAction(action: (element: any, index: number) => void): Enumerable;
        doAction(action: (element: any, index: number) => boolean): Enumerable;
        forEach(action: (element: any, index: number) => void): void;
        forEach(action: (element: any, index: number) => boolean): void;
        write(separator?: string, selector?: (element: any) => any): void;
        writeLine(selector?: (element: any) => any): void;
        force(): void;
        letBind(func: (source: Enumerable) => any[]): Enumerable;
        letBind(func: (source: Enumerable) => { length: number;[x: number]: any; }): Enumerable;
        letBind(func: (source: Enumerable) => Enumerable): Enumerable;
        share(): DisposableEnumerable;
        memoize(): DisposableEnumerable;
        catchError(handler: (exception: any) => void): Enumerable;
        finallyAction(finallyAction: () => void): Enumerable;
        log(selector?: (element: any) => void): Enumerable;
        trace(message?: string, selector?: (element: any) => void): Enumerable;
    }

    interface OrderedEnumerable extends Enumerable {
        createOrderedEnumerable(keySelector: (element: any) => any, descending: boolean): OrderedEnumerable;
        thenBy(keySelector: (element: any) => any): OrderedEnumerable;
        thenByDescending(keySelector: (element: any) => any): OrderedEnumerable;
    }

    interface DisposableEnumerable extends Enumerable {
        dispose(): void;
    }

    interface Dictionary {
        add(key: any, value: any): void;
        get(key: any): any;
        set(key: any, value: any): boolean;
        contains(key: any): boolean;
        clear(): void;
        remove(key: any): void;
        count(): number;
        toEnumerable(): Enumerable; // Enumerable<KeyValuePair>
    }

    interface Lookup {
        count(): number;
        get(key: any): Enumerable;
        contains(key: any): boolean;
        toEnumerable(): Enumerable; // Enumerable<Groping>
    }

    interface Grouping extends Enumerable {
        key(): any;
    }

    var Enumerable: EnumerableStatic;
}
