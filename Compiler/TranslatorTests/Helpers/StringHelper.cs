namespace Bridge.Translator.Tests.Helpers
{
    static class StringHelper
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

        public static string CombineLinesNL(params string[] lines)
        {
            var s = CombineLines(lines);

            if (s == null)
            {
                return null;
            }

            return s + System.Environment.NewLine;
        }
    }
}
