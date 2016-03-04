﻿using Bridge;

namespace System
{
    /// <summary>
    /// Represents a method that converts an object from one type to another type.
    /// </summary>
    /// <typeparam name="TInput">The type of object that is to be converted.</typeparam>
    /// <typeparam name="TOutput">The type the input object is to be converted to.</typeparam>
    /// <param name="input">The object to convert.</param>
    /// <returns>The TOutput that represents the converted TInput.</returns>
    [External]
    [Name("Converter")]
    public delegate TOutput Converter<in TInput, out TOutput>(TInput input);
}