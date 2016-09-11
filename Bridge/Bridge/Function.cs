using System;

namespace Bridge
{
    /// <summary>
    /// Equivalent to the Function type in Javascript.
    /// </summary>
    [Name("Function")]
    [External]
    public sealed class Function
    {
        /// <summary>
        /// Creates a new function with the specified implementation, and the
        /// set of named parameters.
        /// </summary>
        /// <param name="argNamesAndBody">Argument names, followed by the function body.</param>
        [Template("new Function({*argNamesAndBody})")]
        public extern Function(params string[] argNamesAndBody);

        /// <summary>
        /// Creates a new function with the specified implementation, and the
        /// set of named parameters.
        /// </summary>
        /// <param name="parameters">List of comma separated argument names</param>
        /// <param name="body">The function body</param>
        public extern Function(string parameters, string body);

        /// <summary>
        /// Creates a new function with the specified implementation, and the
        /// set of named parameters.
        /// </summary>
        /// <param name="parameters">Argument names</param>
        /// <param name="body">The function body</param>
        public extern Function(string[] parameters, string body);

        /// <summary>
        /// Gets the number of parameters expected by the function.
        /// </summary>
        [FieldProperty]
        public extern int Length { get; }

        /// <summary>
        /// Invokes the function against the specified object instance.
        /// </summary>
        /// <param name="instance">The object used as the value of 'this' within the function.</param>
        /// <returns>Any return value returned from the function.</returns>
        public extern object Apply(object instance);

        /// <summary>
        /// Invokes the function against the specified object instance.
        /// </summary>
        /// <param name="instance">The object used as the value of 'this' within the function.</param>
        /// <param name="arguments">The set of arguments to pass in into the function.</param>
        /// <returns>Any return value returned from the function.</returns>
        [Template("{this}.apply({instance}, [{*arguments}])")]
        public extern object Apply(object instance, params object[] arguments);

        /// <summary>
        /// Invokes the function against the specified object instance.
        /// </summary>
        /// <param name="instance">The object used as the value of 'this' within the function.</param>
        /// <returns>Any return value returned from the function.</returns>
        public extern object Call(object instance);

        /// <summary>
        /// Invokes the function against the specified object instance.
        /// </summary>
        /// <param name="instance">The object used as the value of 'this' within the function.</param>
        /// <param name="arguments">One or more arguments to pass in into the function.</param>
        /// <returns>Any return value returned from the function.</returns>
        [Template("{this}.call({instance}, {*arguments})")]
        public extern object Call(object instance, params object[] arguments);

        public static extern explicit operator Function(Delegate d);

        public static extern explicit operator MulticastDelegate(Function f);
    }
}