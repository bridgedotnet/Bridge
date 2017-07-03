namespace TypeScript.Issues
{
    using Bridge.Html5;

    public class N2911
    {
        private static void initButton_Clicked(MouseEvent<HTMLButtonElement> arg)
        {
            // Should build non generic TS initButton_Clicked(arg: MouseEvent): void;
        }
    }
}