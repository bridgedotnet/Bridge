namespace System.Text.RegularExpressions
{
    /// <summary>
    /// Represents the method that is called each time a regular expression match is found during a Replace method operation.
    /// </summary>
    /// <param name="match"></param>
    /// <returns></returns>
    [Bridge.External]
    public delegate string MatchEvaluator(Match match);
}