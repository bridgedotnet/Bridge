using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;

namespace Bridge.Contract
{
    public class XmlToJSConstants
    {
        /// <summary>
        /// Emitted text's default line separator.
        /// </summary>
        public const char DEFAULT_LINE_SEPARATOR = '\n';
    }

    public class XmlToJsDoc
    {
        private const char newLine = Bridge.Contract.XmlToJSConstants.DEFAULT_LINE_SEPARATOR;

        public static void EmitComment(IAbstractEmitterBlock block, AstNode node, bool? getter = null, VariableInitializer varInitializer = null)
        {
            if (block.Emitter.AssemblyInfo.GenerateDocumentation == Bridge.Contract.DocumentationMode.None || node.Parent == null)
            {
                return;
            }

            var visitor = new DocumentationCommentVisitor();
            node.AcceptChildren(visitor);

            if (block.Emitter.AssemblyInfo.GenerateDocumentation == Bridge.Contract.DocumentationMode.Basic && visitor.Comments.Count == 0)
            {
                return;
            }

            object value = null;
            var rr = block.Emitter.Resolver.ResolveNode(varInitializer ?? node, block.Emitter);
            string source = BuildCommentString(visitor.Comments);

            if (node is FieldDeclaration)
            {
                var initializer = varInitializer.Initializer as PrimitiveExpression;

                if (initializer != null)
                {
                    value = initializer.Value;
                }
            }
            else if (node is EventDeclaration)
            {
                var eventDecl = (EventDeclaration)node;
                foreach (var evVar in eventDecl.Variables)
                {
                    var ev_rr = block.Emitter.Resolver.ResolveNode(evVar, block.Emitter);
                    var memberResolveResult = ev_rr as MemberResolveResult;
                    var ev = memberResolveResult.Member as IEvent;

                    if (!getter.HasValue || getter.Value)
                    {
                        var comment = new JsDocComment();
                        InitMember(comment, ev.AddAccessor, block.Emitter, null);
                        comment.Function = Helpers.GetEventRef(ev, block.Emitter, false);
                        block.Write(
                            block.WriteIndentToString(XmlToJsDoc.ReadComment(source, ev_rr, block.Emitter, comment)));
                        block.WriteNewLine();
                    }

                    if (!getter.HasValue || !getter.Value)
                    {
                        var comment = new JsDocComment();
                        InitMember(comment, ev.RemoveAccessor, block.Emitter, null);
                        comment.Function = Helpers.GetEventRef(ev, block.Emitter, true);
                        block.Write(
                            block.WriteIndentToString(XmlToJsDoc.ReadComment(source, ev_rr, block.Emitter, comment)));
                        block.WriteNewLine();
                    }
                }
                
                return;
            }

            var prop = node as PropertyDeclaration;
            if (prop != null)
            {
                var memberResolveResult = rr as MemberResolveResult;
                var rProp = memberResolveResult.Member as IProperty;

                var comment = new JsDocComment();
                InitMember(comment, rProp, block.Emitter, null);
                comment.Function = Helpers.GetPropertyRef(rProp, block.Emitter);
                block.Write(block.WriteIndentToString(XmlToJsDoc.ReadComment(source, rr, block.Emitter, comment)));
                block.WriteNewLine();
                return;
            }

            var indexer = node as IndexerDeclaration;
            if (indexer != null)
            {
                var memberResolveResult = rr as MemberResolveResult;
                var rProp = memberResolveResult.Member as IProperty;

                var comment = new JsDocComment();
                InitMember(comment, getter.HasValue && getter.Value ? rProp.Getter : rProp.Setter, block.Emitter, null);
                block.Write(block.WriteIndentToString(XmlToJsDoc.ReadComment(source, rr, block.Emitter, comment)));
                block.WriteNewLine();
                return;
            }

            block.Write(block.WriteIndentToString(XmlToJsDoc.Convert(source, rr, block.Emitter, value)));

            block.WriteNewLine();
        }

        private static string BuildCommentString(IList<Comment> comments)
        {
            if (comments.Count == 0)
            {
                return null;
            }

            StringBuilder sb = new StringBuilder();
            foreach (var c in comments)
            {
                sb.Append(c.Content + newLine);
            }

            return sb.ToString();
        }

        public static string Convert(string source, ResolveResult rr, IEmitter emitter, object value)
        {
            var comment = new JsDocComment();
            XmlToJsDoc.InitComment(comment, rr, emitter, value);

            return ReadComment(source, rr, emitter, comment);
        }

        private static string ReadComment(string source, ResolveResult rr, IEmitter emitter, JsDocComment comment)
        {
            var xml = new StringBuilder("<comment>" + newLine);
            if (source != null)
            {
                foreach (var line in source.Split(newLine))
                {
                    var trimmedLine = line.Trim();

                    if (string.IsNullOrEmpty(trimmedLine))
                    {
                        continue;
                    }

                    xml.Append(System.Text.RegularExpressions.Regex.Replace(line, @"\/\/\/\s*", "") + newLine);
                }

                xml.Append("</comment>");

                var doc = new System.Xml.XmlDocument();

                try
                {
                    doc.LoadXml(xml.ToString());
                }
                catch (XmlException)
                {
                    return "";
                }

                foreach (XmlNode node in doc.GetElementsByTagName("summary"))
                {
                    comment.Descriptions.Add(HandleNode(node));
                }

                foreach (XmlNode node in doc.GetElementsByTagName("remark"))
                {
                    comment.Remarks.Add(HandleNode(node));
                }

                foreach (XmlNode node in doc.GetElementsByTagName("typeparam"))
                {
                    string name = null;
                    var attr = node.Attributes["name"];
                    if (attr != null)
                    {
                        name = attr.Value.Trim();
                    }

                    var param = comment.Parameters.FirstOrDefault(p => p.Name == name);
                    if (param == null)
                    {
                        param = new JsDocParam
                        {
                            Name = "[name]",
                            Type = "[type]"
                        };

                        comment.Parameters.Add(param);
                    }

                    attr = node.Attributes["type"];
                    if (attr != null)
                    {
                        param.Type = attr.Value;
                    }
                    else if (rr != null)
                    {
                        param.Type = "Function";
                    }

                    var text = HandleNode(node);
                    if (!string.IsNullOrEmpty(text))
                    {
                        param.Desc = text;
                    }
                }

                foreach (XmlNode node in doc.GetElementsByTagName("param"))
                {
                    string name = null;
                    var attr = node.Attributes["name"];
                    if (attr != null)
                    {
                        name = attr.Value.Trim();
                    }

                    var param = comment.Parameters.FirstOrDefault(p => p.Name == name);
                    if (param == null)
                    {
                        continue;
                    }

                    attr = node.Attributes["type"];
                    if (attr != null)
                    {
                        param.Type = attr.Value;
                    }
                    else if (rr != null)
                    {
                        param.Type = XmlToJsDoc.GetParamTypeName(param.Name, rr, emitter);
                    }

                    var text = HandleNode(node);
                    if (!string.IsNullOrEmpty(text))
                    {
                        param.Desc = text;
                    }
                }

                foreach (XmlNode node in doc.GetElementsByTagName("returns"))
                {
                    JsDocParam param = null;
                    if (comment.Returns.Any())
                    {
                        param = comment.Returns.FirstOrDefault();
                    }
                    else
                    {
                        param = new JsDocParam
                        {
                            Type = "[type]"
                        };

                        comment.Returns.Add(param);
                    }

                    var attr = node.Attributes["name"];
                    if (attr != null)
                    {
                        param.Name = attr.Value.Trim();
                    }

                    if (string.IsNullOrWhiteSpace(param.Type))
                    {
                        attr = node.Attributes["type"];
                        if (attr != null)
                        {
                            param.Type = attr.Value.Trim();
                        }
                        else if (rr != null)
                        {
                            param.Type = XmlToJsDoc.GetParamTypeName(null, rr, emitter);
                        }
                    }

                    var text = HandleNode(node);
                    if (!string.IsNullOrEmpty(text))
                    {
                        param.Desc = text;
                    }
                }

                foreach (XmlNode node in doc.GetElementsByTagName("example"))
                {
                    var codeNodes = node.SelectNodes("code");
                    StringBuilder sb = new StringBuilder();

                    foreach (XmlNode codeNode in codeNodes)
                    {
                        sb.Append(codeNode.InnerText + newLine);
                        node.RemoveChild(codeNode);
                    }

                    var code = sb.ToString();
                    var caption = HandleNode(node);
                    comment.Examples.Add(new Tuple<string, string>(caption, code));
                }

                foreach (XmlNode node in doc.GetElementsByTagName("exception"))
                {
                    var attr = node.Attributes["cref"];
                    var exceptionType = "";

                    if (attr != null)
                    {
                        try
                        {
                            exceptionType = XmlToJsDoc.ToJavascriptName(emitter.BridgeTypes.Get(attr.InnerText).Type, emitter);
                        }
                        catch
                        {
                            // ignored
                        }
                    }

                    var caption = HandleNode(node);
                    comment.Throws.Add(new Tuple<string, string>(caption, exceptionType));
                }

                foreach (XmlNode node in doc.GetElementsByTagName("seealso"))
                {
                    var attr = node.Attributes["cref"];
                    var cref = "";

                    if (attr != null)
                    {
                        cref = attr.InnerText;
                    }

                    comment.SeeAlso.Add(cref);
                }

                foreach (XmlNode node in doc.GetElementsByTagName("value"))
                {
                    var valueParam = comment.Parameters.FirstOrDefault(p => p.Name == "value");
                    if (valueParam != null)
                    {
                        valueParam.Desc = HandleNode(node);
                    }
                }
            }

            return comment.ToString();
        }

        private static string HandleNode(XmlNode node)
        {
            var cNodes = node.SelectNodes("c");
            var codeNodes = node.SelectNodes("code");
            var list = cNodes.Cast<XmlNode>().Concat<XmlNode>(codeNodes.Cast<XmlNode>());

            foreach (XmlNode cNode in list)
            {
                XmlElement pre = node.OwnerDocument.CreateElement("pre");
                XmlElement code = node.OwnerDocument.CreateElement("code");
                code.InnerXml = HandleNode(cNode);
                pre.AppendChild(code);
                node.ReplaceChild(pre, cNode);
            }

            cNodes = node.SelectNodes("para");
            foreach (XmlNode cNode in cNodes)
            {
                XmlElement p = node.OwnerDocument.CreateElement("p");
                p.InnerXml = HandleNode(cNode);
                node.ReplaceChild(p, cNode);
            }

            list = node.SelectNodes("paramref").Cast<XmlNode>().Concat<XmlNode>(node.SelectNodes("typeparamref").Cast<XmlNode>());
            foreach (XmlNode cNode in list)
            {
                XmlElement p = node.OwnerDocument.CreateElement("b");
                var attr = node.Attributes["name"];
                p.InnerXml = attr != null ? attr.InnerText : "";
                node.ReplaceChild(p, cNode);
            }

            cNodes = node.SelectNodes("see");
            foreach (XmlNode cNode in cNodes)
            {
                var attr = node.Attributes["cref"];
                XmlText p = node.OwnerDocument.CreateTextNode(string.Format("{{@link {0}}}", attr != null ? attr.InnerText : ""));
                node.ReplaceChild(p, cNode);
            }

            RemoveNodes(node, "include");
            RemoveNodes(node, "list");
            RemoveNodes(node, "permission");

            return node.InnerXml.Trim();
        }

        private static void RemoveNodes(XmlNode node, string tag)
        {
            XmlNodeList cNodes = node.SelectNodes(tag);
            foreach (XmlNode cNode in cNodes)
            {
                node.RemoveChild(cNode);
            }
        }

        private static void InitComment(JsDocComment comment, ResolveResult rr, IEmitter emitter, object value)
        {
            if (rr is MemberResolveResult)
            {
                InitMember(comment, ((MemberResolveResult)rr).Member, emitter, value);
            }
            else if (rr is TypeResolveResult)
            {
                InitType(comment, rr.Type, emitter);
            }
        }

        private static void InitType(JsDocComment comment, IType type, IEmitter emitter)
        {
            if (!emitter.JsDoc.Namespaces.Contains(type.Namespace))
            {
                emitter.JsDoc.Namespaces.Add(type.Namespace);
                comment.Namespace = type.Namespace;
            }

            comment.Class = XmlToJsDoc.ToJavascriptName(type, emitter);
            comment.Augments = XmlToJsDoc.GetTypeHierarchy(type, emitter);

            var access = type as IHasAccessibility;
            if (access != null)
            {
                comment.IsPublic = access.IsPublic;
                comment.IsPrivate = access.IsPrivate;
                comment.IsProtected = access.IsProtected;
            }

            var typeDef = type as ICSharpCode.NRefactory.TypeSystem.Implementation.DefaultResolvedTypeDefinition;
            if (typeDef != null)
            {
                comment.IsAbstract = typeDef.IsAbstract;
                comment.IsStatic = typeDef.IsStatic;
            }

            if (type.Kind == TypeKind.Enum)
            {
                comment.Enum = true;
            }
        }

        private static void InitMember(JsDocComment comment, IMember member, IEmitter emitter, object value)
        {
            if (member != null)
            {
                var method = member as IMethod;
                if (method != null)
                {
                    comment.This = XmlToJsDoc.ToJavascriptName(member.DeclaringType, emitter);
                    if (method.IsConstructor)
                    {
                        comment.Constructs = comment.This;
                    }

                    if (method.TypeParameters != null && method.TypeParameters.Count > 0)
                    {
                        foreach (var param in method.TypeParameters)
                        {
                            var jsParam = new JsDocParam();
                            jsParam.Name = param.Name;
                            jsParam.Type = "Function";

                            comment.Parameters.Add(jsParam);
                        }
                    }
                }

                comment.Override = member.IsOverride;

                if (member is IParameterizedMember)
                {
                    var parameters = ((IParameterizedMember)member).Parameters;

                    if (parameters != null && parameters.Count > 0)
                    {
                        foreach (var param in parameters)
                        {
                            var jsParam = new JsDocParam();
                            jsParam.Name = param.Name;
                            jsParam.Type = XmlToJsDoc.ToJavascriptName(param.Type, emitter);

                            comment.Parameters.Add(jsParam);
                        }
                    }
                }

                var variable = member as IVariable;
                if (variable != null)
                {
                    comment.MemberType = XmlToJsDoc.ToJavascriptName(variable.Type, emitter);
                }
                else if(!(member is IField || member is IProperty))
                {
                    comment.Returns.Add(new JsDocParam
                    {
                        Type = XmlToJsDoc.ToJavascriptName(member.ReturnType, emitter)
                    });
                }

                var field = member as IField;
                if (field != null)
                {
                    comment.ReadOnly = field.IsReadOnly;
                    comment.Const = field.IsConst;
                    comment.Default = value ?? field.ConstantValue;
                    comment.MemberType = XmlToJsDoc.ToJavascriptName(field.Type, emitter);
                }

                var property = member as IProperty;
                if (property != null)
                {
                    comment.ReadOnly = !property.CanSet;
                    comment.Default = value;
                    comment.MemberType = XmlToJsDoc.ToJavascriptName(property.ReturnType, emitter);
                }

                var ev = member as IEvent;
                if (ev != null)
                {
                    comment.Event = XmlToJsDoc.ToJavascriptName(member.DeclaringType, emitter) + "#" + member.Name;
                }

                comment.MemberOf = XmlToJsDoc.ToJavascriptName(member.DeclaringType, emitter);
                comment.IsPublic = member.IsPublic;
                comment.IsPrivate = member.IsPrivate;
                comment.IsProtected = member.IsProtected;

                var entity = member as ICSharpCode.NRefactory.TypeSystem.Implementation.AbstractResolvedEntity;
                if (entity != null)
                {
                    comment.IsAbstract = entity.IsAbstract;
                    comment.IsStatic = entity.IsStatic;
                }
            }
        }

        private static string[] GetTypeHierarchy(IType type, IEmitter emitter)
        {
            var list = new List<string>();

            foreach (var t in emitter.BridgeTypes.Get(type).TypeInfo.GetBaseTypes(emitter))
            {
                var name = XmlToJsDoc.ToJavascriptName(t, emitter);

                var rr = emitter.Resolver.ResolveNode(t, emitter);
                if (rr.Type.Kind == TypeKind.Interface)
                {
                    name = "+" + name;
                }

                list.Add(name);
            }

            if (list.Count > 0 && list[0] == JS.Types.Object.NAME)
            {
                list.RemoveAt(0);
            }

            if (list.Count == 0)
            {
                return null;
            }

            return list.ToArray();
        }

        private static string GetParamTypeName(string name, ResolveResult rr, IEmitter emitter)
        {
            IMember member = null;
            if (rr is MemberResolveResult)
            {
                member = ((MemberResolveResult)rr).Member;
            }

            if (name == null)
            {
                return XmlToJsDoc.ToJavascriptName(member.ReturnType, emitter);
            }

            if (member is IParameterizedMember)
            {
                var paramMember = (IParameterizedMember)member;
                var param = paramMember.Parameters.FirstOrDefault(p => p.Name == name);
                if (param != null)
                {
                    return XmlToJsDoc.ToJavascriptName(param.Type, emitter);
                }
            }

            return null;
        }

        public static string GetPrimitivie(PrimitiveType primitive)
        {
            if (primitive != null)
            {
                switch (primitive.KnownTypeCode)
                {
                    case KnownTypeCode.Void:
                        return "void";

                    case KnownTypeCode.Boolean:
                        return "boolean";

                    case KnownTypeCode.String:
                        return "string";

                    case KnownTypeCode.Decimal:
                    case KnownTypeCode.Double:
                    case KnownTypeCode.Byte:
                    case KnownTypeCode.Char:
                    case KnownTypeCode.Int16:
                    case KnownTypeCode.Int32:
                    case KnownTypeCode.Int64:
                    case KnownTypeCode.SByte:
                    case KnownTypeCode.Single:
                    case KnownTypeCode.UInt16:
                    case KnownTypeCode.UInt32:
                    case KnownTypeCode.UInt64:
                        return "number";
                }
            }

            return null;
        }

        public static string ToJavascriptName(AstType astType, IEmitter emitter)
        {
            string name = null;
            var primitive = astType as PrimitiveType;
            name = XmlToJsDoc.GetPrimitivie(primitive);
            if (name != null)
            {
                return name;
            }

            var composedType = astType as ComposedType;
            if (composedType != null && composedType.ArraySpecifiers != null && composedType.ArraySpecifiers.Count > 0)
            {
                return JS.Types.ARRAY + ".<" + BridgeTypes.ToTypeScriptName(composedType.BaseType, emitter) + ">";
            }

            var simpleType = astType as SimpleType;
            if (simpleType != null && simpleType.Identifier == "dynamic")
            {
                return "object";
            }

            var resolveResult = emitter.Resolver.ResolveNode(astType, emitter);
            return XmlToJsDoc.ToJavascriptName(resolveResult.Type, emitter);
        }

        public static string ToJavascriptName(IType type, IEmitter emitter)
        {
            if (type.Kind == TypeKind.Delegate)
            {
                var delegateName = BridgeTypes.ConvertName(type.FullName);

                if (!emitter.JsDoc.Callbacks.Contains(delegateName))
                {
                    var method = type.GetDelegateInvokeMethod();
                    JsDocComment comment = new JsDocComment();

                    var parameters = method.Parameters;

                    if (parameters != null && parameters.Count > 0)
                    {
                        foreach (var param in parameters)
                        {
                            var jsParam = new JsDocParam();
                            jsParam.Name = param.Name;
                            jsParam.Type = XmlToJsDoc.ToJavascriptName(param.Type, emitter);

                            comment.Parameters.Add(jsParam);
                        }
                    }

                    comment.Returns.Add(new JsDocParam
                    {
                        Type = XmlToJsDoc.ToJavascriptName(method.ReturnType, emitter)
                    });

                    comment.Callback = delegateName;
                    comment.MemberOf = type.Namespace;

                    if (!emitter.JsDoc.Namespaces.Contains(type.Namespace))
                    {
                        emitter.JsDoc.Namespaces.Add(type.Namespace);
                        comment.Namespace = type.Namespace;
                    }

                    emitter.JsDoc.Callbacks.Add(delegateName);

                    emitter.WriteIndented(comment.ToString() + newLine + newLine, 0);
                }

                return delegateName;
            }

            if (type.IsKnownType(KnownTypeCode.String))
            {
                return "string";
            }

            if (type.IsKnownType(KnownTypeCode.Boolean))
            {
                return "boolean";
            }

            if (type.IsKnownType(KnownTypeCode.Void))
            {
                return "void";
            }

            if (type.IsKnownType(KnownTypeCode.Byte) ||
                type.IsKnownType(KnownTypeCode.Char) ||
                type.IsKnownType(KnownTypeCode.Decimal) ||
                type.IsKnownType(KnownTypeCode.Double) ||
                type.IsKnownType(KnownTypeCode.Int16) ||
                type.IsKnownType(KnownTypeCode.Int32) ||
                type.IsKnownType(KnownTypeCode.Int64) ||
                type.IsKnownType(KnownTypeCode.SByte) ||
                type.IsKnownType(KnownTypeCode.Single) ||
                type.IsKnownType(KnownTypeCode.UInt16) ||
                type.IsKnownType(KnownTypeCode.UInt32) ||
                type.IsKnownType(KnownTypeCode.UInt64))
            {
                return "number";
            }

            if (type.Kind == TypeKind.Array)
            {
                ICSharpCode.NRefactory.TypeSystem.ArrayType arrayType = (ICSharpCode.NRefactory.TypeSystem.ArrayType)type;
                return JS.Types.ARRAY + ".<" + XmlToJsDoc.ToJavascriptName(arrayType.ElementType, emitter) + ">";
            }

            if (type.Kind == TypeKind.Dynamic)
            {
                return "object";
            }

            if (type.Kind == TypeKind.Enum && type.DeclaringType != null)
            {
                return "number";
            }

            if (NullableType.IsNullable(type))
            {
                return "?" + XmlToJsDoc.ToJavascriptName(NullableType.GetUnderlyingType(type), emitter);
            }

            BridgeType bridgeType = emitter.BridgeTypes.Get(type, true);
            //string name = BridgeTypes.ConvertName(type.FullName);

            var name = type.Namespace;

            var hasTypeDef = bridgeType != null && bridgeType.TypeDefinition != null;
            if (hasTypeDef)
            {
                var typeDef = bridgeType.TypeDefinition;
                if (typeDef.IsNested)
                {
                    name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.GetParentNames(emitter, typeDef);
                }

                name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.ConvertName(typeDef.Name);
            }
            else
            {
                if (type.DeclaringType != null)
                {
                    name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.GetParentNames(emitter, type);

                    if (type.DeclaringType.TypeArguments.Count > 0)
                    {
                        name += Helpers.PrefixDollar(type.TypeArguments.Count);
                    }
                }

                name = (string.IsNullOrEmpty(name) ? "" : (name + ".")) + BridgeTypes.ConvertName(type.Name);
            }

            bool isCustomName = false;
            if (bridgeType != null)
            {
                name = BridgeTypes.AddModule(name, bridgeType, false, out isCustomName);
            }

            if (!hasTypeDef && !isCustomName && type.TypeArguments.Count > 0)
            {
                name += Helpers.PrefixDollar(type.TypeArguments.Count);
            }

            return name;
        }

        private class DocumentationCommentVisitor : DepthFirstAstVisitor
        {
            public DocumentationCommentVisitor()
            {
                this.Comments = new List<Comment>();
            }

            public List<Comment> Comments
            {
                get;
                private set;
            }

            protected override void VisitChildren(AstNode node)
            {
            }

            public override void VisitComment(Comment comment)
            {
                if (comment.CommentType == CommentType.Documentation)
                {
                    this.Comments.Add(comment);
                }
            }
        }
    }

    public class JsDocComment
    {
        private const char newLine = Bridge.Contract.XmlToJSConstants.DEFAULT_LINE_SEPARATOR;

        public JsDocComment()
        {
            this.Descriptions = new List<string>();
            this.Parameters = new List<JsDocParam>();
            this.Remarks = new List<string>();
            this.Returns = new List<JsDocParam>();
            this.Examples = new List<Tuple<string, string>>();
            this.Throws = new List<Tuple<string, string>>();
            this.SeeAlso = new List<string>();
        }

        public List<string> SeeAlso
        {
            get;
            set;
        }

        public List<string> Descriptions
        {
            get;
            set;
        }

        public List<string> Remarks
        {
            get;
            set;
        }

        public string[] Augments
        {
            get;
            set;
        }

        public List<JsDocParam> Parameters
        {
            get;
            set;
        }

        public List<JsDocParam> Returns
        {
            get;
            set;
        }

        public bool IsPrivate
        {
            get;
            set;
        }

        public bool IsPublic
        {
            get;
            set;
        }

        public bool IsProtected
        {
            get;
            set;
        }

        public string This
        {
            get;
            set;
        }

        public string MemberOf
        {
            get;
            set;
        }

        public string Class
        {
            get;
            set;
        }

        public string Namespace
        {
            get;
            set;
        }

        public bool IsAbstract
        {
            get;
            set;
        }

        public bool IsStatic
        {
            get;
            set;
        }

        public string MemberType
        {
            get;
            set;
        }

        public string Function
        {
            get;
            set;
        }

        public bool Const
        {
            get;
            set;
        }

        public object Default
        {
            get;
            set;
        }

        public string Callback
        {
            get;
            set;
        }

        public string Constructs
        {
            get;
            set;
        }

        public bool Enum
        {
            get;
            set;
        }

        public bool Override
        {
            get;
            set;
        }

        public string Event
        {
            get;
            set;
        }

        public bool ReadOnly
        {
            get;
            set;
        }

        public List<Tuple<string, string>> Examples
        {
            get;
            set;
        }

        public List<Tuple<string, string>> Throws
        {
            get;
            set;
        }

        public override string ToString()
        {
            var comment = new StringBuilder();

            if (!string.IsNullOrEmpty((Namespace)))
            {
                comment.Append("/** @namespace " + this.Namespace + " */" + newLine + newLine);
            }

            comment.Append("/**" + newLine);

            var nameColumnWidth = 0;
            var typeColumnWidth = 0;

            var tmp = new List<JsDocParam>(this.Parameters);
            tmp.AddRange(this.Returns);
            foreach (JsDocParam param in tmp)
            {
                if (param.Type != null && param.Type.Length > typeColumnWidth)
                {
                    typeColumnWidth = param.Type.Length;
                }

                if (param.Name != null && param.Name.Length > nameColumnWidth)
                {
                    nameColumnWidth = param.Name.Length;
                }
            }

            typeColumnWidth += 4;
            nameColumnWidth += 4;

            if (this.Descriptions.Count > 0 && this.Descriptions.Any(v => !string.IsNullOrWhiteSpace(v)))
            {
                comment.Append(" * " + string.Join(newLine + " * ", this.Descriptions.ToArray()) + newLine + " *" + newLine);
            }

            if (this.Remarks.Count > 0 && this.Remarks.Any(v=> !string.IsNullOrWhiteSpace(v)))
            {
                comment.Append(" * " + string.Join(newLine + " * ", this.Remarks) + newLine + " *" + newLine);
            }

            if (this.IsStatic)
            {
                comment.Append(" * @static" + newLine);
            }
            else if (string.IsNullOrEmpty(this.Class) && string.IsNullOrEmpty(this.Callback))
            {
                comment.Append(" * @instance" + newLine);
            }

            if (this.IsAbstract)
            {
                comment.Append(" * @abstract" + newLine);
            }

            if (this.IsPublic)
            {
                comment.Append(" * @public" + newLine);
            }

            if (this.IsProtected)
            {
                comment.Append(" * @protected" + newLine);
            }

            if (this.IsPrivate)
            {
                comment.Append(" * @private" + newLine);
            }

            if (this.Override)
            {
                comment.Append(" * @override" + newLine);
            }

            if (this.ReadOnly)
            {
                comment.Append(" * @readonly" + newLine);
            }

            if (!string.IsNullOrEmpty(this.This))
            {
                comment.Append(" * @this ").Append(this.This + newLine);
            }

            if (!string.IsNullOrEmpty(this.MemberOf))
            {
                comment.Append(" * @memberof ").Append(this.MemberOf + newLine);
            }

            if (!string.IsNullOrEmpty(this.Class))
            {
                comment.Append(" * @class " + this.Class + newLine);
            }

            if (!string.IsNullOrEmpty(this.Event))
            {
                comment.Append(" * @event " + this.Event + newLine);
            }

            /*if (!string.IsNullOrEmpty(this.Constructs))
            {
                comment.Append(" * @constructs ").Append(this.Constructs + els);
            }*/

            /*if (this.Enum)
            {
                comment.Append(" * @enum {number}" + els);
            }*/

            if (this.Const)
            {
                comment.Append(" * @constant" + newLine);
            }

            if (this.Default != null)
            {
                comment.Append(" * @default " + JsonConvert.SerializeObject(this.Default) + newLine);
            }

            if (!string.IsNullOrEmpty(this.Callback))
            {
                comment.Append(" * @callback " + this.Callback + newLine);
            }

            if (!string.IsNullOrEmpty(this.Function))
            {
                comment.Append(" * @function " + this.Function + newLine);
            }

            if (!string.IsNullOrEmpty(this.MemberType))
            {
                comment.Append(" * @type " + this.MemberType + newLine);
            }

            if (this.Augments != null && this.Augments.Length > 0)
            {
                foreach (var augment in this.Augments)
                {
                    if (augment.StartsWith("+"))
                    {
                        comment.Append(" * @implements  " + augment.Substring(1) + newLine);
                    }
                    else
                    {
                        comment.Append(" * @augments " + augment + newLine);
                    }
                }
            }

            foreach (var example in this.Examples)
            {
                if (!string.IsNullOrEmpty(example.Item1))
                {
                    comment.Append(" * @example " + example.Item1 + newLine);
                }
                else
                {
                    comment.Append(" * @example" + newLine);
                }

                comment.Append(" *" + string.Join(newLine + " *", example.Item2.Split(newLine)) + newLine + " *" + newLine);
            }

            foreach (var exception in this.Throws)
            {
                if (!string.IsNullOrEmpty(exception.Item2))
                {
                    comment.Append(" * @throws {" + exception.Item2 + "} ");
                }
                else
                {
                    comment.Append(" * @throws ");
                }

                comment.Append(exception.Item1 + newLine);
            }

            int argCount = 0;
            foreach (JsDocParam param in this.Parameters)
            {
                comment.Append(" * @param   {" + param.Type + "}");

                comment.Append(new String(' ', typeColumnWidth - (param.Type != null ? param.Type.Length : 0)));
                comment.Append(param.Name);

                var desc = param.Desc;
                if (desc != null)
                {
                    desc = desc.Trim();
                }

                // If we are not in the last parameter argument or description exists
                // (for last argument), then print whitespaces after param name.
                if (++argCount < this.Parameters.Count() || desc != null)
                {
                    comment.Append(new String(' ', nameColumnWidth - param.Name.Length));
                }

                comment.Append(desc + newLine);
            }

            argCount = 0;
            foreach (JsDocParam param in this.Returns)
            {
                comment.Append(" * @return  {" + param.Type + "}");

                var desc = param.Desc;
                if (desc != null)
                {
                    desc = desc.Trim();
                }

                // If we are not in the last parameter argument or description exists
                // (for last argument), then print whitespaces after param name.
                if (++argCount < this.Returns.Count() || desc != null)
                {
                    comment.Append(new String(' ', typeColumnWidth - (param.Type != null ? param.Type.Length : 0)));
                    comment.Append(new String(' ', nameColumnWidth));
                }

                comment.Append(desc + newLine);
            }

            foreach (var see in this.SeeAlso)
            {
                comment.Append(" * @see {@link " + see + "}" + newLine);
            }

            comment.Append(" */");

            return comment.ToString();
        }
    }

    public class JsDocParam
    {
        public string Name
        {
            get;
            set;
        }

        public string Type
        {
            get;
            set;
        }

        public string Desc
        {
            get;
            set;
        }
    }
}