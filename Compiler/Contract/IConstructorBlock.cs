namespace Bridge.Contract
{
    public interface IConstructorBlock
    {
        IEmitter Emitter
        {
            get;
            set;
        }

        ITypeInfo TypeInfo
        {
            get;
            set;
        }

        bool StaticBlock
        {
            get;
            set;
        }
    }
}