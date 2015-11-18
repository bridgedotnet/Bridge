using System;

namespace Bridge.Html5
{
    [External]
    [Enum(Emit.StringNameLowerCase)]
    public enum ElementType
    {
        [Name("a")]
        Anchor,

        Area,
        Audio,
        Base,
        Body,

        [Name("br")]
        BR,

        Button,
        Canvas,
        DataList,

        Div,

        [Name("dl")]
        DList,

        Embed,
        FieldSet,

        Form,
        Head,
        H1,
        H2,
        H3,
        H4,
        H5,
        H6,
        HR,
        Html,
        IFrame,
        Image,
        Input,
        Keygen,
        Label,
        Legend,
        LI,
        Link,
        Map,
        Media,
        Meta,
        Meter,
        Mod,
        Object,

        [Name("ol")]
        OList,

        OptGroup,
        Option,
        Output,

        [Name("p")]
        Paragraph,

        Param,
        Pre,
        Progress,

        [Name("blockquote")]
        Quote,

        Script,
        Select,
        Source,
        Span,
        Style,

        [Name("caption")]
        TableCaption,

        [Name("td")]
        TableCell,

        [Name("col")]
        TableCol,

        [Name("td")]
        TableDataCell,

        Table,

        [Name("th")]
        TableHeaderCell,

        [Name("tr")]
        TableRow,

        [Name("tbody")]
        TableSection,

        TextArea,
        Title,
        Track,

        [Name("ul")]
        UList,

        Video
    }
}
