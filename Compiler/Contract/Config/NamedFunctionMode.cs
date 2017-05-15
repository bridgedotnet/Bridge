namespace Bridge.Contract
{
    /// <summary>
    /// Format of function name
    /// </summary>
    public enum NamedFunctionMode
    {
        /// <summary>
        /// No function name
        /// </summary>
        None = 0,

        /// <summary>
        /// Include function name
        /// </summary>
        Name = 1,

        /// <summary>
        /// Include full name of function
        /// </summary>
        FullName = 2,

        /// <summary>
        /// Include function name with class name (excluding namespace of class)
        /// </summary>
        ClassName = 4
    }
 }
