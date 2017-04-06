using Bridge;

namespace System
{
    [External]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IConvertible : IBridgeClass
    {
        TypeCode GetTypeCode();

        bool ToBoolean(IFormatProvider provider);

        char ToChar(IFormatProvider provider);

        sbyte ToSByte(IFormatProvider provider);

        byte ToByte(IFormatProvider provider);

        short ToInt16(IFormatProvider provider);

        ushort ToUInt16(IFormatProvider provider);

        int ToInt32(IFormatProvider provider);

        uint ToUInt32(IFormatProvider provider);

        long ToInt64(IFormatProvider provider);

        ulong ToUInt64(IFormatProvider provider);

        float ToSingle(IFormatProvider provider);

        double ToDouble(IFormatProvider provider);

        Decimal ToDecimal(IFormatProvider provider);

        DateTime ToDateTime(IFormatProvider provider);

        String ToString(IFormatProvider provider);

        Object ToType(Type conversionType, IFormatProvider provider);
    }
}