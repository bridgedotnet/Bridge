namespace Bridge.Contract
{
    public enum FileNameCaseConvert
    {
        /// <summary>
        /// (Default), Group contents on first file processed by compiler: this means data for 'File.js' and 'file.js' will go all
        /// to either 'File.js' or 'file.js', whichever comes first in the compiling or file creation process.
        /// </summary>
        None = 1,

        /// <summary>
        /// Like 'None', but all 'word' names begin lowercase. A 'word' begins either in the begining of
        /// the file name or after a dot (that is not the file extension separator).
        /// </summary>
        CamelCase = 2,

        /// <summary>
        /// Convert any file names to lowercase. This is the most fail-safe solution that might work on all file systems
        /// regardles of their inherent file name case sensitiveness properties. But might break fancy file naming.
        /// </summary>
        Lowercase = 3
    }
 }
