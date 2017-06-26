namespace Bridge.Html5
{
    [External]
    [Name("BarProp")]
    public class BarProp
    {
        extern BarProp();

        /// <summary>
        /// False to hide location bar
        /// </summary>
        public static bool Visible;
    }
}