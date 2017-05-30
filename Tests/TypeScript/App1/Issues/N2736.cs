namespace TypeScript.Issues
{
    public interface N2736_INumber<out T>
    {
        T GetNumber();
    }

    class N2736_Number<T> : N2736_INumber<T>
    {
        T N2736_INumber<T>.GetNumber()
        {
            return default(T);
        }
    }
}