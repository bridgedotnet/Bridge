namespace TypeScript.Issues
{
    public interface N2029Interface<T>
    {
        int Value1
        {
            get;
        }
    }

    public class N2029 : N2029Interface<int>
    {
        public int Value1
        {
            get; set;
        }
    }
}