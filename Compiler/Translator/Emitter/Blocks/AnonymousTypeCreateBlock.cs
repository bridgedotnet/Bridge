using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator
{
    public class AnonymousTypeCreateBlock : AbstractObjectCreateBlock
    {
        public AnonymousTypeCreateBlock(IEmitter emitter, AnonymousTypeCreateExpression anonymousTypeCreateExpression, bool plain = false)
            : base(emitter, anonymousTypeCreateExpression)
        {
            this.Emitter = emitter;
            this.AnonymousTypeCreateExpression = anonymousTypeCreateExpression;
            this.Plain = plain;
        }

        public AnonymousTypeCreateExpression AnonymousTypeCreateExpression
        {
            get;
            set;
        }

        public bool Plain
        {
            get; private set;
        }

        protected override void DoEmit()
        {
            if (this.Plain)
            {
                this.VisitPlainAnonymousTypeCreateExpression();
            }
            else
            {
                this.VisitAnonymousTypeCreateExpression();
            }
        }

        protected void VisitPlainAnonymousTypeCreateExpression()
        {
            AnonymousTypeCreateExpression anonymousTypeCreateExpression = this.AnonymousTypeCreateExpression;

            this.WriteOpenBrace();
            this.WriteSpace();

            if (anonymousTypeCreateExpression.Initializers.Count > 0)
            {
                this.WriteObjectInitializer(anonymousTypeCreateExpression.Initializers, true);

                this.WriteSpace();
                this.WriteCloseBrace();
            }
            else
            {
                this.WriteCloseBrace();
            }
        }

        protected void VisitAnonymousTypeCreateExpression()
        {
            AnonymousTypeCreateExpression anonymousTypeCreateExpression = this.AnonymousTypeCreateExpression;
            var invocationrr = this.Emitter.Resolver.ResolveNode(anonymousTypeCreateExpression, this.Emitter) as InvocationResolveResult;
            var type = invocationrr.Type as AnonymousType;
            IAnonymousTypeConfig config = null;

            if (!this.Emitter.AnonymousTypes.ContainsKey(type))
            {
                config = CreateAnonymousType(type);
                this.Emitter.AnonymousTypes.Add(type, config);
            }
            else
            {
                config = this.Emitter.AnonymousTypes[type];
            }

            this.WriteNew();
            this.Write(config.Name);
            this.WriteOpenParentheses();

            if (anonymousTypeCreateExpression.Initializers.Count > 0)
            {
                this.WriteObjectInitializer(anonymousTypeCreateExpression.Initializers, true, true);
            }

            this.WriteCloseParentheses();
        }

        protected virtual IAnonymousTypeConfig CreateAnonymousType(AnonymousType type)
        {
            var config = new AnonymousTypeConfig();
            config.Name = JS.Types.BRIDGE_ANONYMOUS + (this.Emitter.AnonymousTypes.Count + 1);
            config.Type = type;

            var oldWriter = this.SaveWriter();
            this.NewWriter();

            this.Write(JS.Funcs.BRIDGE_DEFINE);
            this.WriteOpenParentheses();
            this.WriteScript(config.Name);
            this.Write(", ");
            this.BeginBlock();
            this.Emitter.Comma = false;
            this.GenereateCtor(type);
            this.GenereateGetters(config);
            this.GenereateEquals(config);
            this.GenerateHashCode(config);
            this.GenereateToJSON(config);

            this.WriteNewLine();
            this.EndBlock();
            this.Write(");");
            config.Code = this.Emitter.Output.ToString();

            this.RestoreWriter(oldWriter);
            return config;
        }

        private void GenereateCtor(AnonymousType type)
        {
            this.EnsureComma();
            this.Write(JS.Funcs.CONSTRUCTOR + ": function (");
            foreach (var property in type.Properties)
            {
                this.EnsureComma(false);
                this.Write(Object.Net.Utilities.StringUtils.ToLowerCamelCase(property.Name));
                this.Emitter.Comma = true;
            }
            this.Write(") ");
            this.Emitter.Comma = false;
            this.BeginBlock();

            foreach (var property in type.Properties)
            {
                var name = Object.Net.Utilities.StringUtils.ToLowerCamelCase(property.Name);

                this.Write(string.Format("this.{0} = {0};", name));
                this.WriteNewLine();
            }

            this.EndBlock();
            this.Emitter.Comma = true;
        }

        private void GenereateGetters(IAnonymousTypeConfig config)
        {
            foreach (var property in config.Type.Properties)
            {
                this.EnsureComma();
                var lowerName = Object.Net.Utilities.StringUtils.ToLowerCamelCase(property.Name);
                var name = property.Name;

                this.Write(string.Format("get{0} : function () ", name));
                this.BeginBlock();
                this.Write(string.Format("return this.{0};", lowerName));
                this.WriteNewLine();
                this.EndBlock();
                this.Emitter.Comma = true;
            }
        }

        private void GenereateEquals(IAnonymousTypeConfig config)
        {
            this.EnsureComma();
            this.Write(JS.Funcs.EQUALS + ": function (o) ");
            this.BeginBlock();

            this.Write("if (!" + JS.Funcs.BRIDGE_IS + "(o, ");
            this.Write(config.Name);
            this.Write(")) ");
            this.BeginBlock();
            this.Write("return false;");
            this.WriteNewLine();
            this.EndBlock();
            this.WriteNewLine();
            this.Write("return ");

            bool and = false;

            foreach (var property in config.Type.Properties)
            {
                var name = Object.Net.Utilities.StringUtils.ToLowerCamelCase(property.Name);

                if (and)
                {
                    this.Write(" && ");
                }

                and = true;

                this.Write(JS.Funcs.BRIDGE_EQUALS + "(this.");
                this.Write(name);
                this.Write(", o.");
                this.Write(name);
                this.Write(")");
            }

            this.Write(";");

            this.WriteNewLine();
            this.EndBlock();
            this.Emitter.Comma = true;
        }

        private void GenerateHashCode(IAnonymousTypeConfig config)
        {
            this.EnsureComma();
            this.Write(JS.Funcs.GETHASHCODE + ": function () ");
            this.BeginBlock();
            this.Write("var hash = 17;");

            this.WriteNewLine();
            this.Write("hash = hash * 23 + " + config.Name.GetHashCode() + ";");

            foreach (var property in config.Type.Properties)
            {
                var name = Object.Net.Utilities.StringUtils.ToLowerCamelCase(property.Name);

                this.WriteNewLine();
                this.Write("hash = hash * 23 + ");
                this.Write("(this." + name);
                this.Write(" == null ? 0 : ");
                this.Write(JS.Funcs.BRIDGE_GETHASHCODE + "(");
                this.Write("this." + name);
                this.Write("));");
            }

            this.WriteNewLine();
            this.Write("return hash;");
            this.WriteNewLine();
            this.EndBlock();
            this.Emitter.Comma = true;
        }

        private void GenereateToJSON(IAnonymousTypeConfig config)
        {
            this.EnsureComma();
            this.Write("toJSON: function () ");
            this.BeginBlock();
            this.Write("return ");
            this.BeginBlock();

            foreach (var property in config.Type.Properties)
            {
                this.EnsureComma();
                var name = Object.Net.Utilities.StringUtils.ToLowerCamelCase(property.Name);

                this.Write(string.Format("{0} : this.{0}", name));
                this.Emitter.Comma = true;
            }

            this.WriteNewLine();
            this.EndBlock();
            this.WriteSemiColon();
            this.WriteNewLine();
            this.EndBlock();
            this.Emitter.Comma = true;
        }
    }
}