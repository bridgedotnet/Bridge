using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bridge
{
    [External]
    [Name("Bridge")]
    public static class Script
    {
        public static extern object Apply(object obj, object values);

        public static extern T Apply<T>(T obj, object values);

        public static extern bool IsDefined(object obj);

        public static extern bool IsArray(object obj);

        public static extern T[] ToArray<T>(IEnumerable<T> items);

        public static extern T Identity<T>(T arg, params object[] args);

        /// <summary>
        /// The delete operator removes a property from an object.
        /// </summary>
        /// <param name="obj">The name of an object, or an expression evaluating to an object.</param>
        /// <returns>true for all cases except when the property is an own non-configurable property, in which case, false is returned in non-strict mode.</returns>
        [Template("delete {0}")]
        public static extern bool Delete(object obj);

        /// <summary>
        /// The delete operator removes a property from an object.
        /// </summary>
        /// <param name="obj">The name of an object, or an expression evaluating to an object.</param>
        /// <param name="prop">The property to delete.</param>
        /// <returns>true for all cases except when the property is an own non-configurable property, in which case, false is returned in non-strict mode.</returns>
        [Template("delete {0}[{1}]")]
        public static extern bool Delete(object obj, string prop);

        [Template("Bridge.is({0}, {1})")]
        public static extern bool Is(object type, string typeName);

        [Template("Bridge.copy({0}, {1}, {2})")]
        public static extern object Copy(object to, object from, string[] keys);

        [Template("Bridge.copy({0}, {1}, {2})")]
        public static extern object Copy(object to, object from, string keys);

        [Template("Bridge.copy({0}, {1}, {2}, {3})")]
        public static extern object Copy(object to, object from, string[] keys, bool toIf);

        [Template("Bridge.copy({0}, {1}, {2}, {3})")]
        public static extern object Copy(object to, object from, string keys, bool toIf);

        [Template("Bridge.ns({0}, {1})")]
        public static extern object NS(string ns, object scope);

        [Template("Bridge.ns({0})")]
        public static extern object NS(string ns);

        [Template("Bridge.getHashCode({0})")]
        public static extern int GetHashCode(object obj);

        [Template("Bridge.getDefaultValue({0})")]
        public static extern T GetDefaultValue<T>(Type type);

        [Template("Bridge.getDefaultValue({0})")]
        public static extern object GetDefaultValue(Type type);

        /// <summary>
        /// Checks if the specified object is undefined. The object passed in should be a local variable, and not a member of a class (to avoid potential script warnings).
        /// </summary>
        /// <param name="obj">The object to test against undefined.</param>
        /// <returns>true if the object is undefined; false otherwise.</returns>
        [Template("{0} === undefined")]
        public static extern bool IsUndefined(object obj);

        /// <summary>
        /// Checks if the object has a value.
        /// </summary>
        /// <param name="obj">The object to test if there is a value.</param>
        /// <returns>true if the object has a value; false otherwise.</returns>
        [Template("Bridge.hasValue({0})")]
        public static extern bool HasValue(object obj);

        /// <summary>
        /// Checks if the specified object is null.
        /// </summary>
        /// <param name="obj">The object to test against null.</param>
        /// <returns>true if the object is null; false otherwise.</returns>
        [Template("{0} === null")]
        public static extern bool IsNull(object obj);

        /// <summary>
        /// Converts an object into a boolean.
        /// </summary>
        /// <param name="obj">The object to convert.</param>
        /// <returns>true if the object is not null, zero, empty string or undefined.</returns>
        [Template("!!{0}")]
        public static extern bool Boolean(object obj);

        /// <summary>
        /// Generate <c>member in obj</c>.
        /// </summary>
        /// <param name="obj">The object to test against.</param>
        /// <param name="member">The member to check if in the object.</param>
        /// <returns>true if member in object; false otherwise.</returns>
        [Template("{member} in {obj}")]
        public static extern bool In(object obj, string member);

        /// <summary>
        /// Invoke a method on an object
        /// </summary>
        /// <param name="obj">The object to invoke the method against.</param>
        /// <param name="name">The method to invoke.</param>
        /// <param name="args">The arguments passed into the method.</param>
        /// <returns></returns>
        [Template("{obj}[{name}]({*args})")]
        public static extern object InvokeMethod(object obj, string name, params object[] args);

        /// <summary>
        /// Inject javascript code
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="code"></param>
        /// <param name="args"></param>
        /// <returns></returns>
        [Template]
        public static extern T Write<T>(string code, params object[] args);

        /// <summary>
        /// Inject javascript code
        /// </summary>
        /// <param name="code"></param>
        /// <param name="args"></param>
        /// <returns></returns>
        [Template]
        public static extern void Write(string code, params object[] args);

        /// <summary>
        /// The global undefined property represents the value undefined.
        /// </summary>
        [Template("undefined")]
        public static readonly object Undefined;

        /// <summary>
        /// The global NaN property is a value representing Not-A-Number.
        /// </summary>
        [Template("NaN")]
        public static readonly object NaN;

        /// <summary>
        /// The global Infinity property is a numeric value representing infinity.
        /// </summary>
        [Template("Infinity")]
        public static readonly object Infinity;

        [Template("debugger")]
        public static extern void Debugger();

        /// <summary>
        /// The eval() method evaluates JavaScript code represented as a string.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="expression">A string representing a JavaScript expression, statement, or sequence of statements. The expression can include variables and properties of existing objects.</param>
        /// <returns></returns>
        [Template("eval({0})")]
        public static extern T Eval<T>(string expression);

        /// <summary>
        /// The eval() method evaluates JavaScript code represented as a string.
        /// </summary>
        /// <param name="expression">A string representing a JavaScript expression, statement, or sequence of statements. The expression can include variables and properties of existing objects.</param>
        /// <returns></returns>
        [Template("eval({0})")]
        public static extern void Eval(string expression);

        /// <summary>
        /// The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.
        /// </summary>
        /// <param name="testValue">The value to be tested for finiteness.</param>
        /// <returns></returns>
        [Template("isFinite({0})")]
        public static extern bool IsFinite(object testValue);

        /// <summary>
        /// Parses a string argument and returns a floating point number corresponding to double .Net type.
        /// </summary>
        /// <param name="value">A string that represents the value you want to parse.</param>
        /// <returns>Parsed floating point number with type corresponding to double .Net type</returns>
        [Template("parseFloat({0})")]
        public static extern double ParseFloat(string value);

        /// <summary>
        /// The parseInt() function parses a string argument and returns an integer of the specified radix or base.
        /// </summary>
        /// <param name="value">The value to parse. If string is not a string, then it is converted to one. Leading whitespace in the string is ignored.</param>
        /// <returns></returns>
        [Template("parseInt({0})")]
        public static extern int ParseInt(string value);

        /// <summary>
        /// The parseInt() function parses a string argument and returns an integer of the specified radix or base.
        /// </summary>
        /// <param name="value">The value to parse. If string is not a string, then it is converted to one. Leading whitespace in the string is ignored.</param>
        /// <param name="radix">An integer that represents the radix of the above mentioned string. Always specify this parameter to eliminate reader confusion and to guarantee predictable behavior. Different implementations produce different results when a radix is not specified.</param>
        /// <returns></returns>
        [Template("parseInt({0}, {1})")]
        public static extern int ParseInt(string value, int radix);

        /// <summary>
        /// The isNaN() function determines whether a value is NaN or not. Be careful, this function is broken. You may be interested in Number.isNaN() as defined in ECMAScript 6 or you can use typeof to determine if the value is Not-A-Number.
        /// </summary>
        /// <param name="testValue">The value to be tested.</param>
        /// <returns></returns>
        [Template("isNaN({0})")]
        public static extern bool IsNaN(object testValue);

        /// <summary>
        /// The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.
        /// </summary>
        /// <param name="encodedURI">A complete, encoded Uniform Resource Identifier.</param>
        /// <returns></returns>
        [Template("decodeURI({0})")]
        public static extern string DecodeURI(string encodedURI);

        /// <summary>
        /// The decodeURIComponent() method decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.
        /// </summary>
        /// <param name="encodedURI">An encoded component of a Uniform Resource Identifier.</param>
        /// <returns></returns>
        [Template("decodeURIComponent({0})")]
        public static extern string DecodeURIComponent(string encodedURI);

        /// <summary>
        /// The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).
        /// </summary>
        /// <param name="uri">A complete Uniform Resource Identifier.</param>
        /// <returns></returns>
        [Template("encodeURI({0})")]
        public static extern string EncodeURI(string uri);

        /// <summary>
        /// The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).
        /// </summary>
        /// <param name="component">A component of a URI.</param>
        /// <returns></returns>
        [Template("encodeURIComponent({0})")]
        public static extern string EncodeURIComponent(string component);

        [Template("(typeof {0})")]
        public static extern string TypeOf(object obj);

        [Template("({obj} instanceof {type})")]
        public static extern bool InstanceOf(object obj, Type type);

        [Template("this")]
        public static extern T This<T>();

        [Template("(Bridge.caller[0] || this)")]
        public static extern T Caller<T>();

        [Template("{scope:raw}[{name}] = {value}")]
        public static extern void Set(object scope, string name, object value);

        [Template("{name:raw} = {value}")]
        public static extern void Set(string name, object value);

        [Template("{name:raw}")]
        public static extern object Get(string name);

        [Template("{scope:raw}[{name}]")]
        public static extern object Get(object scope, string name);

        [Template("{name:raw}")]
        public static extern T Get<T>(string name);

        [Template("{scope:raw}[{name}]")]
        public static extern T Get<T>(object scope, string name);

        [Template("{name:raw}({args})")]
        public static extern void Call(string name, params object[] args);

        [Template("{name:raw}()")]
        public static extern void Call(string name);

        [Template("{name:raw}({args})")]
        public static extern T Call<T>(string name, params object[] args);

        [Template("{name:raw}()")]
        public static extern T Call<T>(string name);

        [GlobalTarget("Bridge.global")]
        public new static extern dynamic ToDynamic();

        [Template("({a} === {b})")]
        public static extern bool StrictEquals(object a, object b);

        [Template("{init}({t})")]
        public static extern T CallFor<T>(T t, Func<T, T> init);

        [Template("{init}({t})")]
        public static extern Task<T> AsyncCallFor<T>(T t, Func<T, Task<T>> init);

        [Template("({name:tmp} = {t})")]
        [Unbox(false)]
        public static extern T ToTemp<T>(string name, T t);

        [Template("{name:gettmp}")]
        [Unbox(false)]
        public static extern T FromTemp<T>(string name);

        [Template("{action:body}")]
        public static extern object FromLambda(Action action);

        [Template("{o:plain}")]
        public static extern T ToPlainObject<T>(T o);

        [Template("{o:plain}")]
        public static extern T ToObjectLiteral<T>(T o);

        /// <summary>
        /// Runs the function in a try/catch statement
        /// </summary>
        /// <param name="fn">Function to run</param>
        /// <returns>Return either function result or false in case of catch</returns>
        [Template("Bridge.safe({fn})")]
        public static extern bool SafeFunc(Func<bool> fn);
    }
}
