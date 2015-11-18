using System;
using System.Collections.Generic;

namespace Bridge
{
    [External]
    [Name("Bridge")]
    public static class Script
    {
        public static object Apply(object obj, object values)
        {
            return null;
        }

        public static T Apply<T>(T obj, object values)
        {
            return default(T);
        }

        public static bool IsDefined(object value)
        {
            return false;
        }

        public static bool IsArray(object obj)
        {
            return false;
        }

        public static T[] ToArray<T>(IEnumerable<T> items)
        {
            return null;
        }

        [Template("delete {0}")]
        public static void Delete(object value)
        {
        }

        [Template("Bridge.is({0}, {1})")]
        public static bool Is(object type, string typeName)
        {
            return false;
        }

        [Template("Bridge.copy({0}, {1}, {2})")]
        public static object Copy(object to, object from, string[] keys)
        {
            return null;
        }

        [Template("Bridge.copy({0}, {1}, {2})")]
        public static object Copy(object to, object from, string keys)
        {
            return null;
        }

        [Template("Bridge.copy({0}, {1}, {2}, {3})")]
        public static object Copy(object to, object from, string[] keys, bool toIf)
        {
            return null;
        }

        [Template("Bridge.copy({0}, {1}, {2}, {3})")]
        public static object Copy(object to, object from, string keys, bool toIf)
        {
            return null;
        }

        [Template("Bridge.ns({0}, {1})")]
        public static object NS(string ns, object scope)
        {
            return null;
        }

        [Template("Bridge.ns({0})")]
        public static object NS(string ns)
        {
            return null;
        }

        [Template("Bridge.getHashCode({0})")]
        public static int GetHashCode(object value)
        {
            return 0;
        }

        [Template("Bridge.getDefaultValue({0})")]
        public static T GetDefaultValue<T>(Type type)
        {
            return default(T);
        }

        [Template("Bridge.getDefaultValue({0})")]
        public static object GetDefaultValue(Type type)
        {
            return null;
        }

        /// <summary>
        /// Inject javascript code
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="code"></param>
        /// <returns></returns>
        [Template]
        public static T Write<T>(string code)
        {
            return default(T);
        }

        /// <summary>
        /// Inject javascript code
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        [Template]
        public static void Write(string code)
        {
        }

        /// <summary>
        /// An Array-like object corresponding to the arguments passed to a function.
        /// </summary>
        [Template("arguments")]
        public static readonly object[] Arguments;

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
        public static void Debugger()
        {
        }

        /// <summary>
        /// The eval() method evaluates JavaScript code represented as a string.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="expression">A string representing a JavaScript expression, statement, or sequence of statements. The expression can include variables and properties of existing objects.</param>
        /// <returns></returns>
        [Template("eval({0})")]
        public static T Eval<T>(string expression)
        {
            return default(T);
        }

        /// <summary>
        /// The eval() method evaluates JavaScript code represented as a string.
        /// </summary>
        /// <param name="expression">A string representing a JavaScript expression, statement, or sequence of statements. The expression can include variables and properties of existing objects.</param>
        /// <returns></returns>
        [Template("eval({0})")]
        public static void Eval(string expression)
        {
        }

        /// <summary>
        /// The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.
        /// </summary>
        /// <param name="testValue">The value to be tested for finiteness.</param>
        /// <returns></returns>
        [Template("isFinite({0})")]
        public static bool IsFinite(object testValue)
        {
            return false;
        }

        /// <summary>
        /// The parseFloat() function parses a string argument and returns a floating point number.
        /// </summary>
        /// <param name="value">A string that represents the value you want to parse.</param>
        /// <returns></returns>
        [Template("parseFloat({0})")]
        public static double ParseFloat(string value)
        {
            return 0;
        }

        /// <summary>
        /// The parseInt() function parses a string argument and returns an integer of the specified radix or base.
        /// </summary>
        /// <param name="value">The value to parse. If string is not a string, then it is converted to one. Leading whitespace in the string is ignored.</param>
        /// <returns></returns>
        [Template("parseInt({0})")]
        public static int ParseInt(string value)
        {
            return 0;
        }

        /// <summary>
        /// The parseInt() function parses a string argument and returns an integer of the specified radix or base.
        /// </summary>
        /// <param name="value">The value to parse. If string is not a string, then it is converted to one. Leading whitespace in the string is ignored.</param>
        /// <param name="radix">An integer that represents the radix of the above mentioned string. Always specify this parameter to eliminate reader confusion and to guarantee predictable behavior. Different implementations produce different results when a radix is not specified.</param>
        /// <returns></returns>
        [Template("parseInt({0}, {1})")]
        public static int ParseInt(string value, int radix)
        {
            return 0;
        }

        /// <summary>
        /// The isNaN() function determines whether a value is NaN or not. Be careful, this function is broken. You may be interested in Number.isNaN() as defined in ECMAScript 6 or you can use typeof to determine if the value is Not-A-Number.
        /// </summary>
        /// <param name="testValue">The value to be tested.</param>
        /// <returns></returns>
        [Template("isNaN({0})")]
        public static bool IsNaN(object testValue)
        {
            return false;
        }

        /// <summary>
        /// The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.
        /// </summary>
        /// <param name="encodedURI">A complete, encoded Uniform Resource Identifier.</param>
        /// <returns></returns>
        [Template("decodeURI({0})")]
        public static string DecodeURI(string encodedURI)
        {
            return null;
        }

        /// <summary>
        /// The decodeURIComponent() method decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.
        /// </summary>
        /// <param name="encodedURI">An encoded component of a Uniform Resource Identifier.</param>
        /// <returns></returns>
        [Template("decodeURIComponent({0})")]
        public static string DecodeURIComponent(string encodedURI)
        {
            return null;
        }

        /// <summary>
        /// The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).
        /// </summary>
        /// <param name="uri">A complete Uniform Resource Identifier.</param>
        /// <returns></returns>
        [Template("encodeURI({0})")]
        public static string EncodeURI(string uri)
        {
            return null;
        }

        /// <summary>
        /// The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).
        /// </summary>
        /// <param name="component">A component of a URI.</param>
        /// <returns></returns>
        [Template("encodeURIComponent({0})")]
        public static string EncodeURIComponent(string component)
        {
            return null;
        }

        [Template("typeof {0}")]
        public static string TypeOf(object obj)
        {
            return null;
        }

        [Template("this")]
        public static T This<T>()
        {
            return default(T);
        }

        [Template("(Bridge.caller[0] || this)")]
        public static T Caller<T>()
        {
            return default(T);
        }

        [Template("{scope:raw}[{name}] = {value}")]
        public static void Set(object scope, string name, object value)
        {
        }

        [Template("{name:raw} = {value}")]
        public static void Set(string name, object value)
        {
        }

        [Template("{name:raw}")]
        public static object Get(string name)
        {
            return null;
        }

        [Template("{scope:raw}[{name}]")]
        public static object Get(object scope, string name)
        {
            return null;
        }

        [Template("{name:raw}")]
        public static T Get<T>(string name)
        {
            return default(T);
        }

        [Template("{scope:raw}[{name}]")]
        public static T Get<T>(object scope, string name)
        {
            return default(T);
        }

        [Template("{name:raw}({args})")]
        public static void Call(string name, params object[] args)
        {
        }

        [Template("{name:raw}()")]
        public static void Call(string name)
        {
        }

        [Template("{name:raw}({args})")]
        public static T Call<T>(string name, params object[] args)
        {
            return default(T);
        }

        [Template("{name:raw}()")]
        public static T Call<T>(string name)
        {
            return default(T);
        }

        [GlobalTarget("Bridge.global")]
        public new static dynamic ToDynamic()
        {
            return null;
        }
    }
}
