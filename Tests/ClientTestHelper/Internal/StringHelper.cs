using Bridge.Html5;

namespace Bridge.ClientTestHelper
{
    public static class StringHelper
    {
        public static string CombineLines(params string[] lines)
        {
            if (lines == null)
            {
                return null;
            }

            var s = "";

            for (int i = 0; i < lines.Length; i++)
            {
                if (i != 0)
                {
                    s += System.Environment.NewLine;
                }

                s += lines[i];
            }

            return s;
        }
    }
}