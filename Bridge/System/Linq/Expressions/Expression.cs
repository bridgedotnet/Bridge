using System.Collections.Generic;
using System.ComponentModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    public abstract class Expression
    {
        [Bridge.Name("ntype")]
        public extern ExpressionType NodeType { get; private set; }

        [Bridge.Name("t")]
        public extern Type Type { get; private set; }

        [Bridge.Template("{ ntype: {nodeType}, t: {type} }")]
        protected extern Expression(ExpressionType nodeType, Type type);

        internal extern Expression();

        [Bridge.Template("{ ntype: {binaryType}, t: {right}.t, left: {left}, right: {right} }")]
        public static extern BinaryExpression MakeBinary(ExpressionType binaryType, Expression left, Expression right);

        [Bridge.Template("{ ntype: {binaryType}, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression MakeBinary(ExpressionType binaryType, Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression MakeBinary(ExpressionType binaryType, Expression left, Expression right, bool liftToNull, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.Template("{ ntype: 46, t: {right}.t, left: {left}, right: {right} }")]
        public static extern BinaryExpression Assign(Expression left, Expression right);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression Equal(Expression left, Expression right);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression Equal(Expression left, Expression right, bool liftToNull, MethodInfo method);

        [Bridge.Template("{ ntype: 13, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression Equal(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 13, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression Equal(Expression left, Expression right, MethodInfo method);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression NotEqual(Expression left, Expression right);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression NotEqual(Expression left, Expression right, bool liftToNull, MethodInfo method);

        [Bridge.Template("{ ntype: 35, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression NotEqual(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 35, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression NotEqual(Expression left, Expression right, MethodInfo method);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression GreaterThan(Expression left, Expression right);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression GreaterThan(Expression left, Expression right, bool liftToNull, MethodInfo method);

        [Bridge.Template("{ ntype: 15, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression GreaterThan(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 15, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression GreaterThan(Expression left, Expression right, MethodInfo method);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression LessThan(Expression left, Expression right);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression LessThan(Expression left, Expression right, bool liftToNull, MethodInfo method);

        [Bridge.Template("{ ntype: 20, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression LessThan(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 20, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression LessThan(Expression left, Expression right, MethodInfo method);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression GreaterThanOrEqual(Expression left, Expression right);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression GreaterThanOrEqual(Expression left, Expression right, bool liftToNull, MethodInfo method);

        [Bridge.Template("{ ntype: 16, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression GreaterThanOrEqual(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 16, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression GreaterThanOrEqual(Expression left, Expression right, MethodInfo method);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression LessThanOrEqual(Expression left, Expression right);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression LessThanOrEqual(Expression left, Expression right, bool liftToNull, MethodInfo method);

        [Bridge.Template("{ ntype: 21, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression LessThanOrEqual(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 21, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression LessThanOrEqual(Expression left, Expression right, MethodInfo method);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression AndAlso(Expression left, Expression right);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression AndAlso(Expression left, Expression right, MethodInfo method);

        [Bridge.Template("{ ntype: 3, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression AndAlso(Expression left, Expression right, Type type);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression OrElse(Expression left, Expression right);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression OrElse(Expression left, Expression right, MethodInfo method);

        [Bridge.Template("{ ntype: 37, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression OrElse(Expression left, Expression right, Type type);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression Coalesce(Expression left, Expression right);

        [Bridge.Template("{ ntype: 7, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression Coalesce(Expression left, Expression right, Type type);

        //public static BinaryExpression Coalesce(Expression left, Expression right, LambdaExpression conversion) { return null; }

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression Add(Expression left, Expression right);

        [Bridge.Template("{ ntype: 0, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression Add(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 0, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression Add(Expression left, Expression right, MethodInfo method);

        [Bridge.Template("{ ntype: 63, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression AddAssign(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 63, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression AddAssign(Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression AddAssign(Expression left, Expression right, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.Template("{ ntype: 74, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression AddAssignChecked(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 74, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression AddAssignChecked(Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression AddAssignChecked(Expression left, Expression right, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression AddChecked(Expression left, Expression right);

        [Bridge.Template("{ ntype: 1, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression AddChecked(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 1, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression AddChecked(Expression left, Expression right, MethodInfo method);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression Subtract(Expression left, Expression right);

        [Bridge.Template("{ ntype: 42, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression Subtract(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 42, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression Subtract(Expression left, Expression right, MethodInfo method);

        [Bridge.Template("{ ntype: 73, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression SubtractAssign(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 73, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression SubtractAssign(Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression SubtractAssign(Expression left, Expression right, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.Template("{ ntype: 76, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression SubtractAssignChecked(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 76, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression SubtractAssignChecked(Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression SubtractAssignChecked(Expression left, Expression right, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression SubtractChecked(Expression left, Expression right);

        [Bridge.Template("{ ntype: 43, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression SubtractChecked(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 43, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression SubtractChecked(Expression left, Expression right, MethodInfo method);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression Divide(Expression left, Expression right);

        [Bridge.Template("{ ntype: 12, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression Divide(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 12, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression Divide(Expression left, Expression right, MethodInfo method);

        [Bridge.Template("{ ntype: 65, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression DivideAssign(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 65, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression DivideAssign(Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression DivideAssign(Expression left, Expression right, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression Modulo(Expression left, Expression right);

        [Bridge.Template("{ ntype: 25, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression Modulo(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 25, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression Modulo(Expression left, Expression right, MethodInfo method);

        [Bridge.Template("{ ntype: 68, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression ModuloAssign(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 68, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression ModuloAssign(Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression ModuloAssign(Expression left, Expression right, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression Multiply(Expression left, Expression right);

        [Bridge.Template("{ ntype: 26, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression Multiply(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 26, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression Multiply(Expression left, Expression right, MethodInfo method);

        [Bridge.Template("{ ntype: 69, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression MultiplyAssign(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 69, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression MultiplyAssign(Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression MultiplyAssign(Expression left, Expression right, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.Template("{ ntype: 75, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression MultiplyAssignChecked(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 75, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression MultiplyAssignChecked(Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression MultiplyAssignChecked(Expression left, Expression right, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression MultiplyChecked(Expression left, Expression right);

        [Bridge.Template("{ ntype: 27, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression MultiplyChecked(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 27, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression MultiplyChecked(Expression left, Expression right, MethodInfo method);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression LeftShift(Expression left, Expression right);

        [Bridge.Template("{ ntype: 19, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression LeftShift(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 19, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression LeftShift(Expression left, Expression right, MethodInfo method);

        [Bridge.Template("{ ntype: 67, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression LeftShiftAssign(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 67, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression LeftShiftAssign(Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression LeftShiftAssign(Expression left, Expression right, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression RightShift(Expression left, Expression right);

        [Bridge.Template("{ ntype: 41, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression RightShift(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 41, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression RightShift(Expression left, Expression right, MethodInfo method);

        [Bridge.Template("{ ntype: 72, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression RightShiftAssign(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 72, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression RightShiftAssign(Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression RightShiftAssign(Expression left, Expression right, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression And(Expression left, Expression right);

        [Bridge.Template("{ ntype: 2, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression And(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 2, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression And(Expression left, Expression right, MethodInfo method);

        [Bridge.Template("{ ntype: 64, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression AndAssign(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 64, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression AndAssign(Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression AndAssign(Expression left, Expression right, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression Or(Expression left, Expression right);

        [Bridge.Template("{ ntype: 36, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression Or(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 36, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression Or(Expression left, Expression right, MethodInfo method);

        [Bridge.Template("{ ntype: 70, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression OrAssign(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 70, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression OrAssign(Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression OrAssign(Expression left, Expression right, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression ExclusiveOr(Expression left, Expression right);

        [Bridge.Template("{ ntype: 14, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression ExclusiveOr(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 14, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression ExclusiveOr(Expression left, Expression right, MethodInfo method);

        [Bridge.Template("{ ntype: 66, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression ExclusiveOrAssign(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 66, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression ExclusiveOrAssign(Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression ExclusiveOrAssign(Expression left, Expression right, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.Template("{ ntype: 39, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression Power(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 39, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression Power(Expression left, Expression right, MethodInfo method);

        [Bridge.Template("{ ntype: 71, t: {type}, left: {left}, right: {right} }")]
        public static extern BinaryExpression PowerAssign(Expression left, Expression right, Type type);

        [Bridge.Template("{ ntype: 71, t: {method}.rt, left: {left}, right: {right}, method: {method} }")]
        public static extern BinaryExpression PowerAssign(Expression left, Expression right, MethodInfo method);

        //public static BinaryExpression PowerAssign(Expression left, Expression right, MethodInfo method, LambdaExpression conversion) { return null; }

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern BinaryExpression ArrayIndex(Expression array, Expression index);

        [Bridge.Template("{ ntype: 5, t: {type}, left: {array}, right: {index} }")]
        public static extern BinaryExpression ArrayIndex(Type type, Expression array, Expression index);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern MethodCallExpression ArrayIndex(Expression array, params Expression[] indexes);

        [Bridge.Template("{ ntype: 6, t: {type}, obj: {array}, method: { t: 8, td: System.Array.type({type}, {indexes:array}.length), n: \"Get\", rt: {type}, p: System.Array.init({indexes:array}.length, System.Int32, {type}, true), def: function () { return System.Array.$get.call(this, arguments); } }, args: Bridge.toList({indexes:array}) }")]
        public static extern MethodCallExpression ArrayIndex(Type type, Expression array, params Expression[] indexes);

        [Bridge.Template("(function (a, b, c) { return { ntype: 6, t: a, obj: b, method: { t: 8, td: System.Array.type({type}, c.Count), n: \"Get\", rt: a, p: System.Array.init(c.Count, System.Int32, {type}, true), def: function () { return System.Array.$get.call(this, arguments); } }, args: c }; })({type}, {array}, Bridge.toList({indexes}))")]
        public static extern MethodCallExpression ArrayIndex(Type type, Expression array, IEnumerable<Expression> indexes);

        [Bridge.Template("{ ntype: 47, t: {expressions:array}[{expressions:array}.length - 1].t, expressions: Bridge.toList({expressions:array}) }")]
        public static extern BlockExpression Block(params Expression[] expressions);

        [Bridge.Template("(function (a) { return { ntype: 47, t: a.getItem(a.Count - 1).t, expressions: a }; })(Bridge.toList({expressions}))")]
        public static extern BlockExpression Block(IEnumerable<Expression> expressions);

        [Bridge.Template("{ ntype: 47, t: {type}, expressions: Bridge.toList({expressions:array}) }")]
        public static extern BlockExpression Block(Type type, params Expression[] expressions);

        [Bridge.Template("{ ntype: 47, t: {type}, expressions: Bridge.toList({expressions}) }")]
        public static extern BlockExpression Block(Type type, IEnumerable<Expression> expressions);

        [Bridge.Template("{ ntype: 47, t: {expressions:array}[{expressions:array}.length - 1].t, variables: Bridge.toList({variables}), expressions: Bridge.toList({expressions:array}) }")]
        public static extern BlockExpression Block(IEnumerable<ParameterExpression> variables, params Expression[] expressions);

        [Bridge.Template("(function (a, b) { return { ntype: 47, t: b.getItem(b.Count - 1).t, variables: a, expressions: b }; })(Bridge.toList({variables}), Bridge.toList({expressions}))")]
        public static extern BlockExpression Block(IEnumerable<ParameterExpression> variables, IEnumerable<Expression> expressions);

        [Bridge.Template("{ ntype: 47, t: {type}, variables: Bridge.toList({variables}), expressions: Bridge.toList({expressions:array}) }")]
        public static extern BlockExpression Block(Type type, IEnumerable<ParameterExpression> variables, params Expression[] expressions);

        [Bridge.Template("{ ntype: 47, t: {type}, variables: Bridge.toList({variables}), expressions: Bridge.toList({expressions}) }")]
        public static extern BlockExpression Block(Type type, IEnumerable<ParameterExpression> variables, IEnumerable<Expression> expressions);

        [Bridge.Template("{ ntype: 47, t: {expressions:array}[{expressions:array}.length - 1].t, variables: Bridge.toList({variables}), expressions: Bridge.toList({expressions:array}) }")]
        public static extern BlockExpression Block(ParameterExpression[] variables, params Expression[] expressions);

        [Bridge.Template("(function (a, b) { return { ntype: 47, t: b.getItem(b.Count - 1).t, variables: a, expressions: b }; })(Bridge.toList({variables}), Bridge.toList({expressions}))")]
        public static extern BlockExpression Block(ParameterExpression[] variables, IEnumerable<Expression> expressions);

        [Bridge.Template("{ ntype: 47, t: {type}, variables: Bridge.toList({variables}), expressions: Bridge.toList({expressions:array}) }")]
        public static extern BlockExpression Block(Type type, ParameterExpression[] variables, params Expression[] expressions);

        [Bridge.Template("{ ntype: 47, t: {type}, variables: Bridge.toList({variables}), expressions: Bridge.toList({expressions}) }")]
        public static extern BlockExpression Block(Type type, ParameterExpression[] variables, IEnumerable<Expression> expressions);

        [Bridge.Template("{ test: {type}, body: {body} }")]
        public static extern CatchBlock Catch(Type type, Expression body);

        [Bridge.Template("{ test: {variable}.t, variable: {variable}, body: {body} }")]
        public static extern CatchBlock Catch(ParameterExpression variable, Expression body);

        [Bridge.Template("{ test: {type}, body: {body}, filter: {filter} }")]
        public static extern CatchBlock Catch(Type type, Expression body, Expression filter);

        [Bridge.Template("{ test: {variable}.t, variable: {variable}, body: {body}, filter: {filter} }")]
        public static extern CatchBlock Catch(ParameterExpression variable, Expression body, Expression filter);

        [Bridge.Template("{ test: {type} || {variable}.t, variable: {variable}, body: {body}, filter: {filter} }")]
        public static extern CatchBlock MakeCatchBlock(Type type, ParameterExpression variable, Expression body, Expression filter);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern ConditionalExpression Condition(Expression test, Expression ifTrue, Expression ifFalse);

        [Bridge.Template("{ ntype: 8, t: {type}, test: {test}, ifTrue: {ifTrue}, ifFalse: {ifFalse} }")]
        public static extern ConditionalExpression Condition(Expression test, Expression ifTrue, Expression ifFalse, Type type);

        [Bridge.Template("{ ntype: 8, t: System.Object, test: {test}, ifTrue: {ifTrue}, ifFalse: { ntype: 51, t: System.Object } }")]
        public static extern ConditionalExpression IfThen(Expression test, Expression ifTrue);

        [Bridge.Template("{ ntype: 8, t: System.Object, test: {test}, ifTrue: {ifTrue}, ifFalse: {ifFalse} }")]
        public static extern ConditionalExpression IfThenElse(Expression test, Expression ifTrue, Expression ifFalse);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern ConstantExpression Constant(object value);

        [Bridge.Template("{ ntype: 9, t: {type}, value: {value} }")]
        public static extern ConstantExpression Constant(object value, Type type);

        [Bridge.Template("{ ntype: 9, t: {T}, value: {value} }")]
        public static extern ConstantExpression Constant<T>(T value);

        [Bridge.Template("{ ntype: 51, t: System.Object }")]
        public static extern DefaultExpression Empty();

        [Bridge.Template("{ ntype: 51, t: {type} }")]
        public static extern DefaultExpression Default(Type type);

        //public static DynamicExpression MakeDynamic(Type delegateType, CallSiteBinder binder, params Expression[] arguments) { return null; }
        //public static DynamicExpression MakeDynamic(Type delegateType, CallSiteBinder binder, IEnumerable<Expression> arguments) { return null; }
        //public static DynamicExpression MakeDynamic(Type delegateType, CallSiteBinder binder, Expression arg0) { return null; }
        //public static DynamicExpression MakeDynamic(Type delegateType, CallSiteBinder binder, Expression arg0, Expression arg1) { return null; }
        //public static DynamicExpression MakeDynamic(Type delegateType, CallSiteBinder binder, Expression arg0, Expression arg1, Expression arg2) { return null; }
        //public static DynamicExpression MakeDynamic(Type delegateType, CallSiteBinder binder, Expression arg0, Expression arg1, Expression arg2, Expression arg3) { return null; }
        //public static DynamicExpression Dynamic(CallSiteBinder binder, Type returnType, params Expression[] arguments) { return null; }
        //public static DynamicExpression Dynamic(CallSiteBinder binder, Type returnType, Expression arg0) { return null; }
        //public static DynamicExpression Dynamic(CallSiteBinder binder, Type returnType, Expression arg0, Expression arg1) { return null; }
        //public static DynamicExpression Dynamic(CallSiteBinder binder, Type returnType, Expression arg0, Expression arg1, Expression arg2) { return null; }
        //public static DynamicExpression Dynamic(CallSiteBinder binder, Type returnType, Expression arg0, Expression arg1, Expression arg2, Expression arg3) { return null; }
        //public static DynamicExpression Dynamic(CallSiteBinder binder, Type returnType, IEnumerable<Expression> arguments) { return null; }

        [Bridge.Template("{ ntype: 50, t: System.Object, dtype: 0, expression: {expression}, member: {member} }")]
        public static extern DynamicMemberExpression DynamicMember(Expression expression, string member);

        [Bridge.Template("{ ntype: 50, t: {type}, dtype: 0, expression: {expression}, member: {member} }")]
        public static extern DynamicMemberExpression DynamicMember(Type type, Expression expression, string member);

        [Bridge.Template("{ ntype: 50, t: System.Object, dtype: 1, expression: {expression}, arguments: Bridge.toList({arguments:array}) }")]
        public static extern DynamicInvocationExpression DynamicInvocation(Expression expression, params Expression[] arguments);

        [Bridge.Template("{ ntype: 50, t: System.Object, dtype: 1, expression: {expression}, arguments: Bridge.toList({arguments}) }")]
        public static extern DynamicInvocationExpression DynamicInvocation(Expression expression, IEnumerable<Expression> arguments);

        [Bridge.Template("{ ntype: 50, t: {type}, dtype: 1, expression: {expression}, arguments: Bridge.toList({arguments:array}) }")]
        public static extern DynamicInvocationExpression DynamicInvocation(Type type, Expression expression, params Expression[] arguments);

        [Bridge.Template("{ ntype: 50, t: {type}, dtype: 1, expression: {expression}, arguments: Bridge.toList({arguments}) }")]
        public static extern DynamicInvocationExpression DynamicInvocation(Type type, Expression expression, IEnumerable<Expression> arguments);

        [Bridge.Template("{ ntype: 50, t: System.Object, dtype: 2, expression: {expression}, argument: {argument} }")]
        public static extern DynamicIndexExpression DynamicIndex(Expression expression, Expression argument);

        [Bridge.Template("{ ntype: 50, t: {type}, dtype: 2, expression: {expression}, argument: {argument} }")]
        public static extern DynamicIndexExpression DynamicIndex(Type type, Expression expression, Expression argument);

        [Bridge.Template("{ addMethod: {addMethod}, arguments: Bridge.toList({arguments:array}) }")]
        public static extern ElementInit ElementInit(MethodInfo addMethod, params Expression[] arguments);

        [Bridge.Template("{ addMethod: {addMethod}, arguments: Bridge.toList({arguments}) }")]
        public static extern ElementInit ElementInit(MethodInfo addMethod, IEnumerable<Expression> arguments);

        [Bridge.Template("{ ntype: 53, t: System.Object, kind: 2, target: {target} }")]
        public static extern GotoExpression Break(LabelTarget target);

        [Bridge.Template("{ ntype: 53, t: {type}, kind: 2, target: {target} }")]
        public static extern GotoExpression Break(LabelTarget target, Type type);

        [Bridge.Template("{ ntype: 53, t: System.Object, kind: 2, target: {target}, value: {value} }")]
        public static extern GotoExpression Break(LabelTarget target, Expression value);

        [Bridge.Template("{ ntype: 53, t: {type}, kind: 2, target: {target}, value: {value} }")]
        public static extern GotoExpression Break(LabelTarget target, Expression value, Type type);

        [Bridge.Template("{ ntype: 53, t: System.Object, kind: 3, target: {target} }")]
        public static extern GotoExpression Continue(LabelTarget target);

        [Bridge.Template("{ ntype: 53, t: {type}, kind: 3, target: {target} }")]
        public static extern GotoExpression Continue(LabelTarget target, Type type);

        [Bridge.Template("{ ntype: 53, t: System.Object, kind: 1, target: {target} }")]
        public static extern GotoExpression Return(LabelTarget target);

        [Bridge.Template("{ ntype: 53, t: {type}, kind: 1, target: {target} }")]
        public static extern GotoExpression Return(LabelTarget target, Type type);

        [Bridge.Template("{ ntype: 53, t: System.Object, kind: 1, target: {target}, value: {value} }")]
        public static extern GotoExpression Return(LabelTarget target, Expression value);

        [Bridge.Template("{ ntype: 53, t: {type}, kind: 1, target: {target}, value: {value} }")]
        public static extern GotoExpression Return(LabelTarget target, Expression value, Type type);

        [Bridge.Template("{ ntype: 53, t: System.Object, kind: 0, target: {target} }")]
        public static extern GotoExpression Goto(LabelTarget target);

        [Bridge.Template("{ ntype: 53, t: {type}, kind: 0, target: {target} }")]
        public static extern GotoExpression Goto(LabelTarget target, Type type);

        [Bridge.Template("{ ntype: 53, t: System.Object, kind: 0, target: {target}, value: {value} }")]
        public static extern GotoExpression Goto(LabelTarget target, Expression value);

        [Bridge.Template("{ ntype: 53, t: {type}, kind: 0, target: {target}, value: {value} }")]
        public static extern GotoExpression Goto(LabelTarget target, Expression value, Type type);

        [Bridge.Template("{ ntype: 53, t: {type}, kind: {kind}, target: {target}, value: {value} }")]
        public static extern GotoExpression MakeGoto(GotoExpressionKind kind, LabelTarget target, Expression value, Type type);

        //public static IndexExpression MakeIndex(Expression instance, PropertyInfo indexer, IEnumerable<Expression> arguments) { return null; }
        [Bridge.Template("{ ntype: 55, t: {type}, obj: {array}, arguments: Bridge.toList({indexes:array}) }")]
        public static extern IndexExpression ArrayAccess(Type type, Expression array, params Expression[] indexes);

        [Bridge.Template("{ ntype: 55, t: {type}, obj: {array}, arguments: Bridge.toList({indexes}) }")]
        public static extern IndexExpression ArrayAccess(Type type, Expression array, IEnumerable<Expression> indexes);

        //public static IndexExpression Property(Expression instance, string propertyName, params Expression[] arguments) { return null; }
        [Bridge.Template("{ ntype: 55, t: {indexer}.rt, obj: {instance}, indexer: {indexer}, arguments: Bridge.toList({arguments:array}) }")]
        public static extern IndexExpression Property(Expression instance, PropertyInfo indexer, params Expression[] arguments);

        [Bridge.Template("{ ntype: 55, t: {indexer}.rt, obj: {instance}, indexer: {indexer}, arguments: Bridge.toList({arguments}) }")]
        public static extern IndexExpression Property(Expression instance, PropertyInfo indexer, IEnumerable<Expression> arguments);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern InvocationExpression Invoke(Expression expression, params Expression[] arguments);

        [Bridge.Template("{ ntype: 17, t: {type}, expression: {expression}, args: Bridge.toList({arguments:array}) }")]
        public static extern InvocationExpression Invoke(Type type, Expression expression, params Expression[] arguments);

        [Bridge.Template("{ ntype: 17, t: {type}, expression: {expression}, args: Bridge.toList({arguments}) }")]
        public static extern InvocationExpression Invoke(Type type, Expression expression, IEnumerable<Expression> arguments);

        [Bridge.Template("{ ntype: 56, t: {target}.t, target: {target} }")]
        public static extern LabelExpression Label(LabelTarget target);

        [Bridge.Template("{ ntype: 56, t: {target}.t, target: {target}, dv: {defaultValue} }")]
        public static extern LabelExpression Label(LabelTarget target, Expression defaultValue);

        [Bridge.Template("{ t: System.Object }")]
        public static extern LabelTarget Label();

        [Bridge.Template("{ t: System.Object, n: {name} }")]
        public static extern LabelTarget Label(string name);

        [Bridge.Template("{ t: {type} }")]
        public static extern LabelTarget Label(Type type);

        [Bridge.Template("{ t: {type}, n: {name} }")]
        public static extern LabelTarget Label(Type type, string name);

        [Bridge.Template("{ ntype: 18, t: Function, rt: {body}.t, body: {body}, p: Bridge.toList({parameters}) }")]
        public static extern Expression<TDelegate> Lambda<TDelegate>(Expression body, IEnumerable<ParameterExpression> parameters);

        [Bridge.Template("{ ntype: 18, t: Function, rt: {body}.t, body: {body}, p: Bridge.toList({parameters:array}) }")]
        public static extern Expression<TDelegate> Lambda<TDelegate>(Expression body, params ParameterExpression[] parameters);

        [Bridge.Template("{ ntype: 18, t: Function, rt: {body}.t, body: {body}, p: Bridge.toList({parameters}) }")]
        public static extern LambdaExpression Lambda(Expression body, IEnumerable<ParameterExpression> parameters);

        [Bridge.Template("{ ntype: 18, t: Function, rt: {body}.t, body: {body}, p: Bridge.toList({parameters:array}) }")]
        public static extern LambdaExpression Lambda(Expression body, params ParameterExpression[] parameters);

        //public static Type GetFuncType(params Type[] typeArgs) { return null; }
        //public static bool TryGetFuncType(Type[] typeArgs, out Type funcType) { funcType = null; return false; }
        //public static Type GetActionType(params Type[] typeArgs) { return null; }
        //public static bool TryGetActionType(Type[] typeArgs, out Type actionType) { actionType = null; return false; }
        //public static Type GetDelegateType(params Type[] typeArgs) { return null; }

        //public static ListInitExpression ListInit(NewExpression newExpression, params Expression[] initializers) { return null; }
        //public static ListInitExpression ListInit(NewExpression newExpression, IEnumerable<Expression> initializers) { return null; }
        [Bridge.Template("{ ntype: 22, t: {newExpression}.t, newExpression: {newExpression}, initializers: Bridge.toList({initializers:array}.map(function (i) { return { addMethod: {addMethod}, arguments: Bridge.toList([i]) }; })) }")]
        public static extern ListInitExpression ListInit(NewExpression newExpression, MethodInfo addMethod, params Expression[] initializers);

        [Bridge.Template("{ ntype: 22, t: {newExpression}.t, newExpression: {newExpression}, initializers: Bridge.toList(Bridge.toArray({initializers}).map(function (i) { return { addMethod: {addMethod}, arguments: Bridge.toList([i]) }; })) }")]
        public static extern ListInitExpression ListInit(NewExpression newExpression, MethodInfo addMethod, IEnumerable<Expression> initializers);

        [Bridge.Template("{ ntype: 22, t: {newExpression}.t, newExpression: {newExpression}, initializers: Bridge.toList({initializers:array}) }")]
        public static extern ListInitExpression ListInit(NewExpression newExpression, params ElementInit[] initializers);

        [Bridge.Template("{ ntype: 22, t: {newExpression}.t, newExpression: {newExpression}, initializers: Bridge.toList({initializers}) }")]
        public static extern ListInitExpression ListInit(NewExpression newExpression, IEnumerable<ElementInit> initializers);

        [Bridge.Template("{ ntype: 58, t: System.Object, body: {body} }")]
        public static extern LoopExpression Loop(Expression body);

        [Bridge.Template("{ ntype: 58, t: {break}.t, body: {body}, breakLabel: {break} }")]
        public static extern LoopExpression Loop(Expression body, LabelTarget @break);

        [Bridge.Template("{ ntype: 58, t: {break} ? {break}.t : System.Object, body: {body}, breakLabel: {break}, continueLabel: {continue} }")]
        public static extern LoopExpression Loop(Expression body, LabelTarget @break, LabelTarget @continue);

        [Bridge.Template("{ btype: 0, member: {member}, expression: {expression} }")]
        public static extern MemberAssignment Bind(MemberInfo member, Expression expression);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern MemberAssignment Bind(MethodInfo propertyAccessor, Expression expression);

        [Bridge.Template("{ ntype: 23, t: {field}.rt, expression: {expression}, member: {field} }")]
        public static extern MemberExpression Field(Expression expression, FieldInfo field);

        [Bridge.Template("{ ntype: 23, t: Bridge.Reflection.getMembers({expression}.t, 4, 284, {fieldName}).rt, expression: {expression}, member: Bridge.Reflection.getMembers({expression}.t, 4, 284, {fieldName}) }")]
        public static extern MemberExpression Field(Expression expression, string fieldName);

        [Bridge.Template("{ ntype: 23, t: {type}, expression: {expression}, member: Bridge.Reflection.getMembers({expression}.t, 4, 284, {fieldName}) }")]
        public static extern MemberExpression Field(Expression expression, Type type, string fieldName);

        [Bridge.Template("{ ntype: 23, t: Bridge.Reflection.getMembers({expression}.t, 16, 284, {propertyName}).rt, expression: {expression}, member: Bridge.Reflection.getMembers({expression}.t, 16, 284, {propertyName}) }")]
        public static extern MemberExpression Property(Expression expression, string propertyName);

        [Bridge.Template("{ ntype: 23, t: {type}, expression: {expression}, member: Bridge.Reflection.getMembers({expression}.t, 16, 284, {propertyName}) }")]
        public static extern MemberExpression Property(Expression expression, Type type, string propertyName);

        [Bridge.Template("{ ntype: 23, t: {property}.rt, expression: {expression}, member: {property} }")]
        public static extern MemberExpression Property(Expression expression, PropertyInfo property);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern MemberExpression Property(Expression expression, MethodInfo propertyAccessor);

        [Bridge.Template("{ ntype: 23, t: Bridge.Reflection.getMembers({expression}.t, 20, 284, {propertyOrFieldName}).rt, expression: {expression}, member: Bridge.Reflection.getMembers({expression}.t, 20, 284, {propertyOrFieldName}) }")]
        public static extern MemberExpression PropertyOrField(Expression expression, string propertyOrFieldName);

        [Bridge.Template("{ ntype: 23, t: {member}.rt, expression: {expression}, member: {member} }")]
        public static extern MemberExpression MakeMemberAccess(Expression expression, MemberInfo member);

        [Bridge.Template("{ ntype: 24, t: {newExpression}.t, newExpression: {newExpression}, bindings: Bridge.toList({bindings:array}) }")]
        public static extern MemberInitExpression MemberInit(NewExpression newExpression, params MemberBinding[] bindings);

        [Bridge.Template("{ ntype: 24, t: {newExpression}.t, newExpression: {newExpression}, bindings: Bridge.toList({bindings}) }")]
        public static extern MemberInitExpression MemberInit(NewExpression newExpression, IEnumerable<MemberBinding> bindings);

        [Bridge.Template("{ btype: 2, member: {member}, initializers: Bridge.toList({initializers:array}) }")]
        public static extern MemberListBinding ListBind(MemberInfo member, params ElementInit[] initializers);

        [Bridge.Template("{ btype: 2, member: {member}, initializers: Bridge.toList({initializers}) }")]
        public static extern MemberListBinding ListBind(MemberInfo member, IEnumerable<ElementInit> initializers);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern MemberListBinding ListBind(MethodInfo propertyAccessor, params ElementInit[] initializers);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern MemberListBinding ListBind(MethodInfo propertyAccessor, IEnumerable<ElementInit> initializers);

        [Bridge.Template("{ btype: 1, member: {member}, bindings: Bridge.toList({bindings:array}) }")]
        public static extern MemberMemberBinding MemberBind(MemberInfo member, params MemberBinding[] bindings);

        [Bridge.Template("{ btype: 1, member: {member}, bindings: Bridge.toList({bindings}) }")]
        public static extern MemberMemberBinding MemberBind(MemberInfo member, IEnumerable<MemberBinding> bindings);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern MemberMemberBinding MemberBind(MethodInfo propertyAccessor, params MemberBinding[] bindings);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern MemberMemberBinding MemberBind(MethodInfo propertyAccessor, IEnumerable<MemberBinding> bindings);

        [Bridge.Template("{ ntype: 6, t: {method}.rt, method: {method}, args: Bridge.toList({arguments:array}) }")]
        public static extern MethodCallExpression Call(MethodInfo method, params Expression[] arguments);

        [Bridge.Template("{ ntype: 6, t: {method}.rt, method: {method}, args: Bridge.toList({arguments}) }")]
        public static extern MethodCallExpression Call(MethodInfo method, IEnumerable<Expression> arguments);

        [Bridge.Template("{ ntype: 6, t: {method}.rt, obj: {instance}, method: {method}, args: Bridge.toList({arguments:array}) }")]
        public static extern MethodCallExpression Call(Expression instance, MethodInfo method, params Expression[] arguments);

        [Bridge.Template("{ ntype: 6, t: {method}.rt, obj: {instance}, method: {method}, args: Bridge.toList({arguments}) }")]
        public static extern MethodCallExpression Call(Expression instance, MethodInfo method, IEnumerable<Expression> arguments);

        [Bridge.Template("{ ntype: 32, t: System.Array.type({type}), expressions: Bridge.toList({initializers:array}) }")]
        public static extern NewArrayExpression NewArrayInit(Type type, params Expression[] initializers);

        [Bridge.Template("{ ntype: 32, t: System.Array.type({type}), expressions: Bridge.toList({initializers}) }")]
        public static extern NewArrayExpression NewArrayInit(Type type, IEnumerable<Expression> initializers);

        [Bridge.Template("{ ntype: 33, t: System.Array.type({type}, {bounds:array}.length), expressions: Bridge.toList({bounds:array}) }")]
        public static extern NewArrayExpression NewArrayBounds(Type type, params Expression[] bounds);

        [Bridge.Template("(function (l) { return { ntype: 33, t: System.Array.type({type}, l.Count), expressions: l };})(Bridge.toList({bounds}))")]
        public static extern NewArrayExpression NewArrayBounds(Type type, IEnumerable<Expression> bounds);

        [Bridge.Template("{ ntype: 31, t: {type}, constructor: Bridge.Reflection.getMembers({type}, 1, 284, null, []), arguments: Bridge.toList([]) }")]
        public static extern NewExpression New(Type type);

        [Bridge.Template("{ ntype: 31, t: {constructor}.td, constructor: {constructor}, arguments: Bridge.toList({arguments:array}) }")]
        public static extern NewExpression New(ConstructorInfo constructor, params Expression[] arguments);

        [Bridge.Template("{ ntype: 31, t: {constructor}.td, constructor: {constructor}, arguments: Bridge.toList({arguments}) }")]
        public static extern NewExpression New(ConstructorInfo constructor, IEnumerable<Expression> arguments);

        [Bridge.Template("{ ntype: 31, t: {constructor}.td, constructor: {constructor}, arguments: Bridge.toList({arguments}), m: Bridge.toList({members:array}) }")]
        public static extern NewExpression New(ConstructorInfo constructor, Expression[] arguments, params MemberInfo[] members);

        [Bridge.Template("{ ntype: 31, t: {constructor}.td, constructor: {constructor}, arguments: Bridge.toList({arguments}), m: Bridge.toList({members}) }")]
        public static extern NewExpression New(ConstructorInfo constructor, IEnumerable<Expression> arguments, IEnumerable<MemberInfo> members);

        [Bridge.Template("{ ntype: 31, t: {constructor}.td, constructor: {constructor}, arguments: Bridge.toList({arguments}), m: Bridge.toList({members:array}) }")]
        public static extern NewExpression New(ConstructorInfo constructor, IEnumerable<Expression> arguments, params MemberInfo[] members);

        [Bridge.Template("{ ntype: 38, t: {type} }")]
        public static extern ParameterExpression Parameter(Type type);

        [Bridge.Template("{ ntype: 38, t: {type}, n: {name} }")]
        public static extern ParameterExpression Parameter(Type type, string name);

        [Bridge.Template("{ ntype: 38, t: {type} }")]
        public static extern ParameterExpression Variable(Type type);

        [Bridge.Template("{ ntype: 38, t: {type}, n: {name} }")]
        public static extern ParameterExpression Variable(Type type, string name);

        //public static RuntimeVariablesExpression RuntimeVariables(params ParameterExpression[] variables) { return null; }
        //public static RuntimeVariablesExpression RuntimeVariables(IEnumerable<ParameterExpression> variables) { return null; }

        [Bridge.Template("{ body: {body}, testValues: Bridge.toList({testValues:array}) }")]
        public static extern SwitchCase SwitchCase(Expression body, params Expression[] testValues);

        [Bridge.Template("{ body: {body}, testValues: Bridge.toList({testValues}) }")]
        public static extern SwitchCase SwitchCase(Expression body, IEnumerable<Expression> testValues);

        [Bridge.Template("{ ntype: 59, t: {cases:array}[0].body.t, switchValue: {switchValue}, cases: Bridge.toList({cases:array}) }")]
        public static extern SwitchExpression Switch(Expression switchValue, params SwitchCase[] cases);

        [Bridge.Template("{ ntype: 59, t: {cases:array}[0].body.t, switchValue: {switchValue}, defaultBody: {defaultBody}, cases: Bridge.toList({cases:array}) }")]
        public static extern SwitchExpression Switch(Expression switchValue, Expression defaultBody, params SwitchCase[] cases);

        [Bridge.Template("{ ntype: 59, t: {cases:array}[0].body.t, switchValue: {switchValue}, defaultBody: {defaultBody}, comparison: {comparison}, cases: Bridge.toList({cases:array}) }")]
        public static extern SwitchExpression Switch(Expression switchValue, Expression defaultBody, MethodInfo comparison, params SwitchCase[] cases);

        [Bridge.Template("{ ntype: 59, t: {type}, switchValue: {switchValue}, defaultBody: {defaultBody}, comparison: {comparison}, cases: Bridge.toList({cases:array}) }")]
        public static extern SwitchExpression Switch(Type type, Expression switchValue, Expression defaultBody, MethodInfo comparison, params SwitchCase[] cases);

        [Bridge.Template("(function (a, b, c, d) { return { ntype: 59, t: d.getItem(0).body.t, switchValue: a, defaultBody: b, comparison: c, cases: d }; })({switchValue}, {defaultBody}, {comparison}, Bridge.toList({cases}))")]
        public static extern SwitchExpression Switch(Expression switchValue, Expression defaultBody, MethodInfo comparison, IEnumerable<SwitchCase> cases);

        [Bridge.Template("{ ntype: 59, t: {type}, switchValue: {switchValue}, defaultBody: {defaultBody}, comparison: {comparison}, cases: Bridge.toList({cases}) }")]
        public static extern SwitchExpression Switch(Type type, Expression switchValue, Expression defaultBody, MethodInfo comparison, IEnumerable<SwitchCase> cases);

        [Bridge.Template("{ ntype: 61, t: {body}.t, body: {body}, handlers: Bridge.toList([]), fault: {fault} }")]
        public static extern TryExpression TryFault(Expression body, Expression fault);

        [Bridge.Template("{ ntype: 61, t: {body}.t, body: {body}, handlers: Bridge.toList([]), finallyExpr: {finally} }")]
        public static extern TryExpression TryFinally(Expression body, Expression @finally);

        [Bridge.Template("{ ntype: 61, t: {body}.t, body: {body}, handlers: Bridge.toList({handlers:array}) }")]
        public static extern TryExpression TryCatch(Expression body, params CatchBlock[] handlers);

        [Bridge.Template("{ ntype: 61, t: {body}.t, body: {body}, finallyExpr: {finally}, handlers: Bridge.toList({handlers:array}) }")]
        public static extern TryExpression TryCatchFinally(Expression body, Expression @finally, params CatchBlock[] handlers);

        [Bridge.Template("{ ntype: 61, t: {type} || {body}.t, body: {body}, finallyExpr: {finally}, fault: {fault}, handlers: Bridge.toList({handlers} || []) }")]
        public static extern TryExpression MakeTry(Type type, Expression body, Expression @finally, Expression fault, IEnumerable<CatchBlock> handlers);

        [Bridge.Template("{ ntype: 45, t: System.Boolean, expression: {expression}, typeOperand: {type} }")]
        public static extern TypeBinaryExpression TypeIs(Expression expression, Type type);

        [Bridge.Template("{ ntype: 81, t: System.Boolean, expression: {expression}, typeOperand: {type} }")]
        public static extern TypeBinaryExpression TypeEqual(Expression expression, Type type);

        [Bridge.Template("{ ntype: {unaryType}, t: {type}, operand: {operand} }")]
        public static extern UnaryExpression MakeUnary(ExpressionType unaryType, Expression operand, Type type);

        [Bridge.Template("{ ntype: {unaryType}, t: {type} || {method}.rt, operand: {operand}, method: {method} }")]
        public static extern UnaryExpression MakeUnary(ExpressionType unaryType, Expression operand, Type type, MethodInfo method);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern UnaryExpression Negate(Expression expression);

        [Bridge.Template("{ ntype: 28, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression Negate(Expression expression, Type type);

        [Bridge.Template("{ ntype: 28, t: {method}.rt, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression Negate(Expression expression, MethodInfo method);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern UnaryExpression UnaryPlus(Expression expression);

        [Bridge.Template("{ ntype: 29, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression UnaryPlus(Expression expression, Type type);

        [Bridge.Template("{ ntype: 29, t: {method}.rt, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression UnaryPlus(Expression expression, MethodInfo method);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern UnaryExpression NegateChecked(Expression expression);

        [Bridge.Template("{ ntype: 30, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression NegateChecked(Expression expression, Type type);

        [Bridge.Template("{ ntype: 30, t: {method}.rt, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression NegateChecked(Expression expression, MethodInfo method);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern UnaryExpression Not(Expression expression);

        [Bridge.Template("{ ntype: 34, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression Not(Expression expression, Type type);

        [Bridge.Template("{ ntype: 34, t: {method}.rt, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression Not(Expression expression, MethodInfo method);

        [Bridge.Template("{ ntype: 84, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression IsFalse(Expression expression, Type type);

        [Bridge.Template("{ ntype: 84, t: {method}.rt, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression IsFalse(Expression expression, MethodInfo method);

        [Bridge.Template("{ ntype: 83, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression IsTrue(Expression expression, Type type);

        [Bridge.Template("{ ntype: 83, t: {method}.rt, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression IsTrue(Expression expression, MethodInfo method);

        [Bridge.NonScriptable, EditorBrowsable(EditorBrowsableState.Never)]
        public static extern UnaryExpression OnesComplement(Expression expression);

        [Bridge.Template("{ ntype: 82, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression OnesComplement(Expression expression, Type type);

        [Bridge.Template("{ ntype: 82, t: {method}.rt, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression OnesComplement(Expression expression, MethodInfo method);

        [Bridge.Template("{ ntype: 44, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression TypeAs(Expression expression, Type type);

        [Bridge.Template("{ ntype: 62, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression Unbox(Expression expression, Type type);

        [Bridge.Template("{ ntype: 10, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression Convert(Expression expression, Type type);

        [Bridge.Template("{ ntype: 10, t: {type}, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression Convert(Expression expression, Type type, MethodInfo method);

        [Bridge.Template("{ ntype: 11, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression ConvertChecked(Expression expression, Type type);

        [Bridge.Template("{ ntype: 11, t: {type}, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression ConvertChecked(Expression expression, Type type, MethodInfo method);

        [Bridge.Template("{ ntype: 4, t: System.Int32, operand: {array} }")]
        public static extern UnaryExpression ArrayLength(Expression array);

        [Bridge.Template("{ ntype: 40, t: System.Object, operand: {expression} }")]
        public static extern UnaryExpression Quote(Expression expression);

        [Bridge.Template("{ ntype: 60, t: System.Object }")]
        public static extern UnaryExpression Rethrow();

        [Bridge.Template("{ ntype: 60, t: {type} }")]
        public static extern UnaryExpression Rethrow(Type type);

        [Bridge.Template("{ ntype: 60, t: System.Object, operand: {value} }")]
        public static extern UnaryExpression Throw(Expression value);

        [Bridge.Template("{ ntype: 60, t: {type}, operand: {value} }")]
        public static extern UnaryExpression Throw(Expression value, Type type);

        [Bridge.Template("{ ntype: 54, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression Increment(Expression expression, Type type);

        [Bridge.Template("{ ntype: 54, t: {method}.rt, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression Increment(Expression expression, MethodInfo method);

        [Bridge.Template("{ ntype: 49, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression Decrement(Expression expression, Type type);

        [Bridge.Template("{ ntype: 49, t: {method}.rt, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression Decrement(Expression expression, MethodInfo method);

        [Bridge.Template("{ ntype: 77, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression PreIncrementAssign(Expression expression, Type type);

        [Bridge.Template("{ ntype: 77, t: {method}.rt, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression PreIncrementAssign(Expression expression, MethodInfo method);

        [Bridge.Template("{ ntype: 78, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression PreDecrementAssign(Expression expression, Type type);

        [Bridge.Template("{ ntype: 78, t: {method}.rt, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression PreDecrementAssign(Expression expression, MethodInfo method);

        [Bridge.Template("{ ntype: 79, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression PostIncrementAssign(Expression expression, Type type);

        [Bridge.Template("{ ntype: 79, t: {method}.rt, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression PostIncrementAssign(Expression expression, MethodInfo method);

        [Bridge.Template("{ ntype: 80, t: {type}, operand: {expression} }")]
        public static extern UnaryExpression PostDecrementAssign(Expression expression, Type type);

        [Bridge.Template("{ ntype: 80, t: {method}.rt, operand: {expression}, method: {method} }")]
        public static extern UnaryExpression PostDecrementAssign(Expression expression, MethodInfo method);
    }
}