using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Reflection;

namespace Bridge.ClientTest.Linq.Expressions
{
    [Category(Constants.MODULE_LINQ_EXPRESSIONS)]
    [TestFixture(TestNameFormat = "LINQ Expressions - {0}")]
    public class ExpressionTests
    {
        private class MyList : IEnumerable
        {
            [Reflectable]
            public void Add(int i)
            {
            }

            [Reflectable]
            public void Add(int i, int j)
            {
            }

            [Reflectable]
            public MyList()
            {
            }

            public IEnumerator GetEnumerator()
            {
                throw new Exception();
            }
        }

#pragma warning disable 649

        private class C
        {
            [Reflectable]
            public static C operator *(C a, C b)
            {
                return null;
            }

            [Reflectable]
            public static C operator %(C a, C b)
            {
                return null;
            }

            [Reflectable]
            public static C operator /(C a, C b)
            {
                return null;
            }

            [Reflectable]
            public static C operator +(C a, C b)
            {
                return null;
            }

            [Reflectable]
            public static C operator -(C a, C b)
            {
                return null;
            }

            [Reflectable]
            public static C operator <<(C a, int b)
            {
                return null;
            }

            [Reflectable]
            public static C operator >>(C a, int b)
            {
                return null;
            }

            [Reflectable]
            public static bool operator <(C a, C b)
            {
                return false;
            }

            [Reflectable]
            public static bool operator >(C a, C b)
            {
                return false;
            }

            [Reflectable]
            public static bool operator <=(C a, C b)
            {
                return false;
            }

            [Reflectable]
            public static bool operator >=(C a, C b)
            {
                return false;
            }

            [Reflectable]
            public static bool operator ==(C a, C b)
            {
                return false;
            }

            [Reflectable]
            public static bool operator !=(C a, C b)
            {
                return false;
            }

            [Reflectable]
            public static C operator &(C a, C b)
            {
                return null;
            }

            [Reflectable]
            public static C operator ^(C a, C b)
            {
                return null;
            }

            [Reflectable]
            public static C operator |(C a, C b)
            {
                return null;
            }

            [Reflectable]
            public static C operator +(C a)
            {
                return null;
            }

            [Reflectable]
            public static C operator -(C a)
            {
                return null;
            }

            [Reflectable]
            public static C operator ~(C a)
            {
                return null;
            }

            [Reflectable]
            public static bool operator !(C a)
            {
                return false;
            }

            [Reflectable]
            public static C op_Power(C a, C b)
            {
                return null;
            }

            [Reflectable]
            public static C operator ++(C a)
            {
                return null;
            }

            [Reflectable]
            public static C operator --(C a)
            {
                return null;
            }

            [Reflectable]
            public static bool operator true(C a)
            {
                return false;
            }

            [Reflectable]
            public static bool operator false(C a)
            {
                return false;
            }

            [Reflectable]
            public static explicit operator int(C a)
            {
                return 0;
            }

            [Reflectable]
            public int M1(int a, string b)
            {
                return 0;
            }

            [Reflectable]
            public static int M2(int a, string b)
            {
                return 0;
            }

            public int M3(int a)
            {
                return a + 34;
            }

            [Reflectable]
            public int M4(int a)
            {
                return a + 34;
            }

            [Reflectable]
            public int F1;

            public int F2;

            [Reflectable]
            public int P1
            {
                get;
                set;
            }

            public int P2
            {
                get;
                set;
            }

            [Reflectable]
            public MyList LF;

            [Reflectable]
            public MyList LP
            {
                get;
                set;
            }

            [Reflectable]
            public C CF;

            [Reflectable]
            public C CP
            {
                get;
                set;
            }

            [Reflectable]
            public string this[int a, string b]
            {
                get
                {
                    return F1 + " " + a + " " + b;
                }
            }

            public override bool Equals(object o)
            {
                return false;
            }

            public override int GetHashCode()
            {
                return 0;
            }

            [Reflectable]
            public C()
            {
                F1 = 234;
                F2 = 24;
                P1 = 42;
                P2 = 17;
            }

            [Reflectable]
            public C(int a, int b)
            {
            }

            public C(int a, string b)
            {
            }
        }

#pragma warning restore 649

        private static int F(Expression<Func<int, int>> f)
        {
            return 0;
        }

        private class MyExpression : Expression
        {
            public MyExpression()
                : base((ExpressionType)9999, typeof(string))
            {
            }
        }

        private class MyEnumerable<T> : IEnumerable<T>
        {
            private bool _hasEnumerated;
            private IList<T> _items;

            public MyEnumerable(IList<T> items)
            {
                _items = items;
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return GetEnumerator();
            }

            public IEnumerator<T> GetEnumerator()
            {
                if (_hasEnumerated)
                    throw new Exception("Already enumerated");
                _hasEnumerated = true;
                return _items.GetEnumerator();
            }
        }

        [Test]
        public void ExpressionProtectedConstructorWorks()
        {
            var expr = new MyExpression();
            Assert.AreEqual(9999, expr.NodeType, "NodeType");
            Assert.AreEqual(typeof(string), expr.Type, "Type");
        }

        [Test]
        public void SimpleExpressionTreeWorks()
        {
            Expression<Func<int>> f = () => 42;
            Assert.AreEqual(ExpressionType.Lambda, f.NodeType);
            Assert.AreEqual(typeof(Func<int>), f.Type);
            Assert.AreEqual(typeof(int), f.ReturnType);
            Assert.AreEqual(ExpressionType.Constant, f.Body.NodeType);
            Assert.AreEqual(typeof(int), f.Body.Type);
            Assert.AreEqual(42, ((ConstantExpression)f.Body).Value);
        }

        [Test]
        public void LambdaWorks()
        {
            Action<LambdaExpression, Type, string[], Type[], string> asserter = (expr, returnType, parmNames, parmTypes, title) =>
            {
                Assert.True((object)expr is LambdaExpression, title + " is lambda");
                Assert.False(expr.Body is LambdaExpression, title + " body is lambda");
                Assert.AreEqual(ExpressionType.Lambda, expr.NodeType, title + " node type");
                Assert.AreEqual(typeof(Function), expr.Type, title + " type");
                Assert.AreEqual(returnType, expr.ReturnType, title + " return type");
                Assert.AreEqual(parmTypes.Length, expr.Parameters.Count, title + " param count");
                for (int i = 0; i < expr.Parameters.Count; i++)
                {
                    Assert.AreEqual(ExpressionType.Parameter, expr.Parameters[i].NodeType, title + " parameter " + i + " node type");
                    Assert.AreEqual(parmNames[i], expr.Parameters[i].Name, title + " parameter " + i + " name");
                    Assert.AreEqual(parmTypes[i], expr.Parameters[i].Type, title + " parameter " + i + " type");
                }
            };

            Expression<Func<int>> f1 = () => 42;
            Expression<Func<int, string>> f2 = a => "X";
            Expression<Func<int, string, double>> f3 = (x, y) => 42.0;
            Expression<Func<int, string, double>> f4 = Expression.Lambda<Func<int, string, double>>(Expression.Constant(42, typeof(double)), new[] { Expression.Parameter(typeof(int), "x1"), Expression.Parameter(typeof(string), "x2") });
            Expression<Func<int, string, double>> f5 = Expression.Lambda<Func<int, string, double>>(Expression.Constant(42, typeof(double)), new MyEnumerable<ParameterExpression>(new[] { Expression.Parameter(typeof(int), "x1"), Expression.Parameter(typeof(string), "x2") }));
            LambdaExpression f6 = Expression.Lambda<Func<int, string, double>>(Expression.Constant(42, typeof(double)), new[] { Expression.Parameter(typeof(int), "x1"), Expression.Parameter(typeof(string), "x2") });
            LambdaExpression f7 = Expression.Lambda(Expression.Constant(42, typeof(double)), new MyEnumerable<ParameterExpression>(new[] { Expression.Parameter(typeof(int), "x1"), Expression.Parameter(typeof(string), "x2") }));

            asserter(f1, typeof(int), new string[0], new Type[0], "f1");
            asserter(f2, typeof(string), new[] { "a" }, new[] { typeof(int) }, "f2");
            asserter(f3, typeof(double), new[] { "x", "y" }, new[] { typeof(int), typeof(string) }, "f3");
            asserter(f4, typeof(double), new[] { "x1", "x2" }, new[] { typeof(int), typeof(string) }, "f4");
            asserter(f5, typeof(double), new[] { "x1", "x2" }, new[] { typeof(int), typeof(string) }, "f5");
            asserter(f6, typeof(double), new[] { "x1", "x2" }, new[] { typeof(int), typeof(string) }, "f6");
            asserter(f7, typeof(double), new[] { "x1", "x2" }, new[] { typeof(int), typeof(string) }, "f7");
        }

        [Test]
        public void ParameterAndVariableWork()
        {
            ParameterExpression p1 = Expression.Parameter(typeof(int));
            ParameterExpression p2 = Expression.Parameter(typeof(string), "par");
            ParameterExpression p3 = Expression.Variable(typeof(int));
            ParameterExpression p4 = Expression.Variable(typeof(string), "var");
            Assert.True((object)p1 is ParameterExpression, "p1 is ParameterExpression");
            Assert.True((object)p2 is ParameterExpression, "p2 is ParameterExpression");
            Assert.True((object)p3 is ParameterExpression, "p3 is ParameterExpression");
            Assert.True((object)p4 is ParameterExpression, "p4 is ParameterExpression");
            Assert.AreEqual(ExpressionType.Parameter, p1.NodeType, "p1.NodeType");
            Assert.AreEqual(ExpressionType.Parameter, p2.NodeType, "p2.NodeType");
            Assert.AreEqual(ExpressionType.Parameter, p3.NodeType, "p3.NodeType");
            Assert.AreEqual(ExpressionType.Parameter, p4.NodeType, "p4.NodeType");
            Assert.AreEqual(typeof(int), p1.Type, "p1.Type");
            Assert.AreEqual(typeof(string), p2.Type, "p2.Type");
            Assert.AreEqual(typeof(int), p3.Type, "p3.Type");
            Assert.AreEqual(typeof(string), p4.Type, "p4.Type");
            Assert.True(p1.Name == null, "p1.Name");
            Assert.AreEqual("par", p2.Name, "p2.Name");
            Assert.True(p3.Name == null, "p3.Name");
            Assert.AreEqual("var", p4.Name, "p4.Name");

            Assert.False((object)Expression.Constant(0, typeof(int)) is ParameterExpression, "Constant is ParameterExpression");
        }

        [Test]
        public void ConstantWorks()
        {
            ConstantExpression c1 = Expression.Constant(42, typeof(int));
            ConstantExpression c2 = Expression.Constant("Hello, world", typeof(string));
            ConstantExpression c3 = Expression.Constant(17);

            Assert.True((object)c1 is ConstantExpression, "c1 is ConstantExpression");
            Assert.True((object)c2 is ConstantExpression, "c2 is ConstantExpression");
            Assert.True((object)c3 is ConstantExpression, "c3 is ConstantExpression");
            Assert.AreEqual(ExpressionType.Constant, c1.NodeType, "c1.NodeType");
            Assert.AreEqual(ExpressionType.Constant, c2.NodeType, "c2.NodeType");
            Assert.AreEqual(ExpressionType.Constant, c3.NodeType, "c3.NodeType");
            Assert.AreEqual(typeof(int), c1.Type, "c1.Type");
            Assert.AreEqual(typeof(string), c2.Type, "c2.Type");
            Assert.AreEqual(typeof(int), c3.Type, "c3.Type");
            Assert.AreEqual(42, c1.Value, "c1.Value");
            Assert.AreEqual("Hello, world", c2.Value, "c2.Value");
            Assert.AreEqual(17, c3.Value, "c3.Value");

            Assert.False((object)Expression.Parameter(typeof(int)) is ConstantExpression, "Parameter is ConstantExpression");
        }

        [Test]
        public void BinaryExpressionsWork()
        {
            Action<Expression, ExpressionType, Type, string, string> asserter = (expr, nodeType, type, method, title) =>
            {
                var be = expr as BinaryExpression;
                Assert.True(be != null, title + " is BinaryExpression");
                Assert.False(expr is ConstantExpression, title + " is ConstantExpression");
                Assert.AreEqual(nodeType, be.NodeType, title + " node type");
                Assert.AreEqual(type, be.Type, title + " type");
                Assert.True(be.Left is ParameterExpression && ((ParameterExpression)be.Left).Name == "a", title + " left");
                Assert.True(be.Right is ParameterExpression && ((ParameterExpression)be.Right).Name == "b", title + " right");
                if (method == null)
                {
                    Assert.True(be.Method == null, title + " method should be null");
                }
                else
                {
                    Assert.True(be.Method != null, title + " method should not be null");
                    Assert.AreEqual(typeof(C), be.Method.DeclaringType, title + " method declaring type should be correct");
                    Assert.AreEqual(method, be.Method.Name, title + " method name should be correct");
                }
            };

            Expression<Func<int, int, int>> e1 = (a, b) => a * b;
            Expression<Func<int, int, int>> e2 = (a, b) => a % b;
            Expression<Func<int, int, int>> e3 = (a, b) => a / b;
            Expression<Func<int, int, int>> e4 = (a, b) => a + b;
            Expression<Func<int, int, int>> e5 = (a, b) => a - b;
            Expression<Func<int, int, int>> e6 = (a, b) => a << b;
            Expression<Func<int, int, int>> e7 = (a, b) => a >> b;
            Expression<Func<int, int, bool>> e8 = (a, b) => a < b;
            Expression<Func<int, int, bool>> e9 = (a, b) => a > b;
            Expression<Func<int, int, bool>> e10 = (a, b) => a <= b;
            Expression<Func<int, int, bool>> e11 = (a, b) => a >= b;
            Expression<Func<int, int, bool>> e12 = (a, b) => a == b;
            Expression<Func<int, int, bool>> e13 = (a, b) => a != b;
            Expression<Func<int, int, int>> e14 = (a, b) => a & b;
            Expression<Func<int, int, int>> e15 = (a, b) => a ^ b;
            Expression<Func<int, int, int>> e16 = (a, b) => a | b;
            Expression<Func<bool, bool, bool>> e17 = (a, b) => a && b;
            Expression<Func<bool, bool, bool>> e18 = (a, b) => a || b;
            Expression<Func<int, int, int>> e19 = (a, b) => checked(a * b);
            Expression<Func<int, int, int>> e20 = (a, b) => checked(a + b);
            Expression<Func<int, int, int>> e21 = (a, b) => checked(a - b);
            Expression<Func<int?, int, int>> e22 = (a, b) => a ?? b;

            var pa = Expression.Parameter(typeof(int), "a");
            var pb = Expression.Parameter(typeof(int), "b");
            Expression e31 = Expression.Multiply(pa, pb, typeof(int));
            Expression e32 = Expression.Modulo(pa, pb, typeof(int));
            Expression e33 = Expression.Divide(pa, pb, typeof(int));
            Expression e34 = Expression.Add(pa, pb, typeof(int));
            Expression e35 = Expression.Subtract(pa, pb, typeof(int));
            Expression e36 = Expression.LeftShift(pa, pb, typeof(int));
            Expression e37 = Expression.RightShift(pa, pb, typeof(int));
            Expression e38 = Expression.LessThan(pa, pb, typeof(bool));
            Expression e39 = Expression.GreaterThan(pa, pb, typeof(bool));
            Expression e40 = Expression.LessThanOrEqual(pa, pb, typeof(bool));
            Expression e41 = Expression.GreaterThanOrEqual(pa, pb, typeof(bool));
            Expression e42 = Expression.Equal(pa, pb, typeof(bool));
            Expression e43 = Expression.NotEqual(pa, pb, typeof(bool));
            Expression e44 = Expression.And(pa, pb, typeof(int));
            Expression e45 = Expression.ExclusiveOr(pa, pb, typeof(int));
            Expression e46 = Expression.Or(pa, pb, typeof(int));
            Expression e47 = Expression.AndAlso(Expression.Parameter(typeof(bool), "a"), Expression.Parameter(typeof(bool), "b"), typeof(bool));
            Expression e48 = Expression.OrElse(Expression.Parameter(typeof(bool), "a"), Expression.Parameter(typeof(bool), "b"), typeof(bool));
            Expression e49 = Expression.MultiplyChecked(pa, pb, typeof(int));
            Expression e50 = Expression.AddChecked(pa, pb, typeof(int));
            Expression e51 = Expression.SubtractChecked(pa, pb, typeof(int));
            Expression e52 = Expression.Coalesce(Expression.Parameter(typeof(int?), "a"), pb, typeof(int));
            Expression e53 = Expression.Power(pa, pb, typeof(int));

            Expression<Func<C, C, C>> e61 = (a, b) => a * b;
            Expression<Func<C, C, C>> e62 = (a, b) => a % b;
            Expression<Func<C, C, C>> e63 = (a, b) => a / b;
            Expression<Func<C, C, C>> e64 = (a, b) => a + b;
            Expression<Func<C, C, C>> e65 = (a, b) => a - b;
            Expression<Func<C, int, C>> e66 = (a, b) => a << b;
            Expression<Func<C, int, C>> e67 = (a, b) => a >> b;
            Expression<Func<C, C, bool>> e68 = (a, b) => a < b;
            Expression<Func<C, C, bool>> e69 = (a, b) => a > b;
            Expression<Func<C, C, bool>> e70 = (a, b) => a <= b;
            Expression<Func<C, C, bool>> e71 = (a, b) => a >= b;
            Expression<Func<C, C, bool>> e72 = (a, b) => a == b;
            Expression<Func<C, C, bool>> e73 = (a, b) => a != b;
            Expression<Func<C, C, C>> e74 = (a, b) => a & b;
            Expression<Func<C, C, C>> e75 = (a, b) => a ^ b;
            Expression<Func<C, C, C>> e76 = (a, b) => a | b;
            Expression<Func<C, C, C>> e79 = (a, b) => checked(a * b);
            Expression<Func<C, C, C>> e80 = (a, b) => checked(a + b);
            Expression<Func<C, C, C>> e81 = (a, b) => checked(a - b);

            var pa2 = Expression.Parameter(typeof(C), "a");
            var pb2 = Expression.Parameter(typeof(C), "b");
            Expression e91 = Expression.Multiply(pa2, pb2, typeof(C).GetMethod("op_Multiply"));
            Expression e92 = Expression.Modulo(pa2, pb2, typeof(C).GetMethod("op_Modulus"));
            Expression e93 = Expression.Divide(pa2, pb2, typeof(C).GetMethod("op_Division"));
            Expression e94 = Expression.Add(pa2, pb2, typeof(C).GetMethod("op_Addition"));
            Expression e95 = Expression.Subtract(pa2, pb2, typeof(C).GetMethod("op_Subtraction"));
            Expression e96 = Expression.LeftShift(pa2, pb2, typeof(C).GetMethod("op_LeftShift"));
            Expression e97 = Expression.RightShift(pa2, pb2, typeof(C).GetMethod("op_RightShift"));
            Expression e98 = Expression.LessThan(pa2, pb2, typeof(C).GetMethod("op_LessThan"));
            Expression e99 = Expression.GreaterThan(pa2, pb2, typeof(C).GetMethod("op_GreaterThan"));
            Expression e100 = Expression.LessThanOrEqual(pa2, pb2, typeof(C).GetMethod("op_LessThanOrEqual"));
            Expression e101 = Expression.GreaterThanOrEqual(pa2, pb2, typeof(C).GetMethod("op_GreaterThanOrEqual"));
            Expression e102 = Expression.Equal(pa2, pb2, typeof(C).GetMethod("op_Equality"));
            Expression e103 = Expression.NotEqual(pa2, pb2, typeof(C).GetMethod("op_Inequality"));
            Expression e104 = Expression.And(pa2, pb2, typeof(C).GetMethod("op_BitwiseAnd"));
            Expression e105 = Expression.ExclusiveOr(pa2, pb2, typeof(C).GetMethod("op_ExclusiveOr"));
            Expression e106 = Expression.Or(pa2, pb2, typeof(C).GetMethod("op_BitwiseOr"));
            Expression e109 = Expression.MultiplyChecked(pa2, pb2, typeof(C).GetMethod("op_Multiply"));
            Expression e110 = Expression.AddChecked(pa2, pb2, typeof(C).GetMethod("op_Addition"));
            Expression e111 = Expression.SubtractChecked(pa2, pb2, typeof(C).GetMethod("op_Subtraction"));
            Expression e113 = Expression.Power(pa2, pb2, typeof(C).GetMethod("op_Power"));

            Expression e121 = Expression.MultiplyAssign(pa, pb, typeof(int));
            Expression e122 = Expression.ModuloAssign(pa, pb, typeof(int));
            Expression e123 = Expression.DivideAssign(pa, pb, typeof(int));
            Expression e124 = Expression.AddAssign(pa, pb, typeof(int));
            Expression e125 = Expression.SubtractAssign(pa, pb, typeof(int));
            Expression e126 = Expression.LeftShiftAssign(pa, pb, typeof(int));
            Expression e127 = Expression.RightShiftAssign(pa, pb, typeof(int));
            Expression e134 = Expression.AndAssign(pa, pb, typeof(int));
            Expression e135 = Expression.ExclusiveOrAssign(pa, pb, typeof(int));
            Expression e136 = Expression.OrAssign(pa, pb, typeof(int));
            Expression e139 = Expression.MultiplyAssignChecked(pa, pb, typeof(int));
            Expression e140 = Expression.AddAssignChecked(pa, pb, typeof(int));
            Expression e141 = Expression.SubtractAssignChecked(pa, pb, typeof(int));
            Expression e143 = Expression.PowerAssign(pa, pb, typeof(int));
            Expression e144 = Expression.Assign(pa, pb);

            Expression e151 = Expression.MultiplyAssign(pa2, pb2, typeof(C).GetMethod("op_Multiply"));
            Expression e152 = Expression.ModuloAssign(pa2, pb2, typeof(C).GetMethod("op_Modulus"));
            Expression e153 = Expression.DivideAssign(pa2, pb2, typeof(C).GetMethod("op_Division"));
            Expression e154 = Expression.AddAssign(pa2, pb2, typeof(C).GetMethod("op_Addition"));
            Expression e155 = Expression.SubtractAssign(pa2, pb2, typeof(C).GetMethod("op_Subtraction"));
            Expression e156 = Expression.LeftShiftAssign(pa2, pb2, typeof(C).GetMethod("op_LeftShift"));
            Expression e157 = Expression.RightShiftAssign(pa2, pb2, typeof(C).GetMethod("op_RightShift"));
            Expression e164 = Expression.AndAssign(pa2, pb2, typeof(C).GetMethod("op_BitwiseAnd"));
            Expression e165 = Expression.ExclusiveOrAssign(pa2, pb2, typeof(C).GetMethod("op_ExclusiveOr"));
            Expression e166 = Expression.OrAssign(pa2, pb2, typeof(C).GetMethod("op_BitwiseOr"));
            Expression e169 = Expression.MultiplyAssignChecked(pa2, pb2, typeof(C).GetMethod("op_Multiply"));
            Expression e170 = Expression.AddAssignChecked(pa2, pb2, typeof(C).GetMethod("op_Addition"));
            Expression e171 = Expression.SubtractAssignChecked(pa2, pb2, typeof(C).GetMethod("op_Subtraction"));
            Expression e173 = Expression.PowerAssign(pa2, pb2, typeof(C).GetMethod("op_Power"));

            Expression mkbin1 = Expression.MakeBinary(ExpressionType.Subtract, pa, pb);
            Expression mkbin2 = Expression.MakeBinary(ExpressionType.LessThan, pa2, pb2, typeof(C).GetMethod("op_LessThan"));

            asserter(e1.Body, ExpressionType.Multiply, typeof(int), null, "e1");
            asserter(e2.Body, ExpressionType.Modulo, typeof(int), null, "e2");
            asserter(e3.Body, ExpressionType.Divide, typeof(int), null, "e3");
            asserter(e4.Body, ExpressionType.Add, typeof(int), null, "e4");
            asserter(e5.Body, ExpressionType.Subtract, typeof(int), null, "e5");
            asserter(e6.Body, ExpressionType.LeftShift, typeof(int), null, "e6");
            asserter(e7.Body, ExpressionType.RightShift, typeof(int), null, "e7");
            asserter(e8.Body, ExpressionType.LessThan, typeof(bool), null, "e8");
            asserter(e9.Body, ExpressionType.GreaterThan, typeof(bool), null, "e9");
            asserter(e10.Body, ExpressionType.LessThanOrEqual, typeof(bool), null, "e10");
            asserter(e11.Body, ExpressionType.GreaterThanOrEqual, typeof(bool), null, "e11");
            asserter(e12.Body, ExpressionType.Equal, typeof(bool), null, "e12");
            asserter(e13.Body, ExpressionType.NotEqual, typeof(bool), null, "e13");
            asserter(e14.Body, ExpressionType.And, typeof(int), null, "e14");
            asserter(e15.Body, ExpressionType.ExclusiveOr, typeof(int), null, "e15");
            asserter(e16.Body, ExpressionType.Or, typeof(int), null, "e16");
            asserter(e17.Body, ExpressionType.AndAlso, typeof(bool), null, "e17");
            asserter(e18.Body, ExpressionType.OrElse, typeof(bool), null, "e18");
            asserter(e19.Body, ExpressionType.MultiplyChecked, typeof(int), null, "e19");
            asserter(e20.Body, ExpressionType.AddChecked, typeof(int), null, "e20");
            asserter(e21.Body, ExpressionType.SubtractChecked, typeof(int), null, "e21");
            asserter(e22.Body, ExpressionType.Coalesce, typeof(int), null, "e22");

            asserter(e31, ExpressionType.Multiply, typeof(int), null, "e31");
            asserter(e32, ExpressionType.Modulo, typeof(int), null, "e32");
            asserter(e33, ExpressionType.Divide, typeof(int), null, "e33");
            asserter(e34, ExpressionType.Add, typeof(int), null, "e34");
            asserter(e35, ExpressionType.Subtract, typeof(int), null, "e35");
            asserter(e36, ExpressionType.LeftShift, typeof(int), null, "e36");
            asserter(e37, ExpressionType.RightShift, typeof(int), null, "e37");
            asserter(e38, ExpressionType.LessThan, typeof(bool), null, "e38");
            asserter(e39, ExpressionType.GreaterThan, typeof(bool), null, "e39");
            asserter(e40, ExpressionType.LessThanOrEqual, typeof(bool), null, "e40");
            asserter(e41, ExpressionType.GreaterThanOrEqual, typeof(bool), null, "e41");
            asserter(e42, ExpressionType.Equal, typeof(bool), null, "e42");
            asserter(e43, ExpressionType.NotEqual, typeof(bool), null, "e43");
            asserter(e44, ExpressionType.And, typeof(int), null, "e44");
            asserter(e45, ExpressionType.ExclusiveOr, typeof(int), null, "e45");
            asserter(e46, ExpressionType.Or, typeof(int), null, "e46");
            asserter(e47, ExpressionType.AndAlso, typeof(bool), null, "e47");
            asserter(e48, ExpressionType.OrElse, typeof(bool), null, "e48");
            asserter(e49, ExpressionType.MultiplyChecked, typeof(int), null, "e49");
            asserter(e50, ExpressionType.AddChecked, typeof(int), null, "e50");
            asserter(e51, ExpressionType.SubtractChecked, typeof(int), null, "e51");
            asserter(e52, ExpressionType.Coalesce, typeof(int), null, "e52");
            asserter(e53, ExpressionType.Power, typeof(int), null, "e53");

            asserter(e61.Body, ExpressionType.Multiply, typeof(C), "op_Multiply", "e61");
            asserter(e62.Body, ExpressionType.Modulo, typeof(C), "op_Modulus", "e62");
            asserter(e63.Body, ExpressionType.Divide, typeof(C), "op_Division", "e63");
            asserter(e64.Body, ExpressionType.Add, typeof(C), "op_Addition", "e64");
            asserter(e65.Body, ExpressionType.Subtract, typeof(C), "op_Subtraction", "e65");
            asserter(e66.Body, ExpressionType.LeftShift, typeof(C), "op_LeftShift", "e66");
            asserter(e67.Body, ExpressionType.RightShift, typeof(C), "op_RightShift", "e67");
            asserter(e68.Body, ExpressionType.LessThan, typeof(bool), "op_LessThan", "e68");
            asserter(e69.Body, ExpressionType.GreaterThan, typeof(bool), "op_GreaterThan", "e69");
            asserter(e70.Body, ExpressionType.LessThanOrEqual, typeof(bool), "op_LessThanOrEqual", "e70");
            asserter(e71.Body, ExpressionType.GreaterThanOrEqual, typeof(bool), "op_GreaterThanOrEqual", "e71");
            asserter(e72.Body, ExpressionType.Equal, typeof(bool), "op_Equality", "e72");
            asserter(e73.Body, ExpressionType.NotEqual, typeof(bool), "op_Inequality", "e73");
            asserter(e74.Body, ExpressionType.And, typeof(C), "op_BitwiseAnd", "e74");
            asserter(e75.Body, ExpressionType.ExclusiveOr, typeof(C), "op_ExclusiveOr", "e75");
            asserter(e76.Body, ExpressionType.Or, typeof(C), "op_BitwiseOr", "e76");
            asserter(e79.Body, ExpressionType.MultiplyChecked, typeof(C), "op_Multiply", "e79");
            asserter(e80.Body, ExpressionType.AddChecked, typeof(C), "op_Addition", "e80");
            asserter(e81.Body, ExpressionType.SubtractChecked, typeof(C), "op_Subtraction", "e81");

            asserter(e91, ExpressionType.Multiply, typeof(C), "op_Multiply", "e91");
            asserter(e92, ExpressionType.Modulo, typeof(C), "op_Modulus", "e92");
            asserter(e93, ExpressionType.Divide, typeof(C), "op_Division", "e93");
            asserter(e94, ExpressionType.Add, typeof(C), "op_Addition", "e94");
            asserter(e95, ExpressionType.Subtract, typeof(C), "op_Subtraction", "e95");
            asserter(e96, ExpressionType.LeftShift, typeof(C), "op_LeftShift", "e96");
            asserter(e97, ExpressionType.RightShift, typeof(C), "op_RightShift", "e97");
            asserter(e98, ExpressionType.LessThan, typeof(bool), "op_LessThan", "e98");
            asserter(e99, ExpressionType.GreaterThan, typeof(bool), "op_GreaterThan", "e99");
            asserter(e100, ExpressionType.LessThanOrEqual, typeof(bool), "op_LessThanOrEqual", "e100");
            asserter(e101, ExpressionType.GreaterThanOrEqual, typeof(bool), "op_GreaterThanOrEqual", "e101");
            asserter(e102, ExpressionType.Equal, typeof(bool), "op_Equality", "e102");
            asserter(e103, ExpressionType.NotEqual, typeof(bool), "op_Inequality", "e103");
            asserter(e104, ExpressionType.And, typeof(C), "op_BitwiseAnd", "e104");
            asserter(e105, ExpressionType.ExclusiveOr, typeof(C), "op_ExclusiveOr", "e105");
            asserter(e106, ExpressionType.Or, typeof(C), "op_BitwiseOr", "e106");
            asserter(e109, ExpressionType.MultiplyChecked, typeof(C), "op_Multiply", "e109");
            asserter(e110, ExpressionType.AddChecked, typeof(C), "op_Addition", "e110");
            asserter(e111, ExpressionType.SubtractChecked, typeof(C), "op_Subtraction", "e111");
            asserter(e113, ExpressionType.Power, typeof(C), "op_Power", "e113");

            asserter(e121, ExpressionType.MultiplyAssign, typeof(int), null, "e121");
            asserter(e122, ExpressionType.ModuloAssign, typeof(int), null, "e122");
            asserter(e123, ExpressionType.DivideAssign, typeof(int), null, "e123");
            asserter(e124, ExpressionType.AddAssign, typeof(int), null, "e124");
            asserter(e125, ExpressionType.SubtractAssign, typeof(int), null, "e125");
            asserter(e126, ExpressionType.LeftShiftAssign, typeof(int), null, "e126");
            asserter(e127, ExpressionType.RightShiftAssign, typeof(int), null, "e127");
            asserter(e134, ExpressionType.AndAssign, typeof(int), null, "e134");
            asserter(e135, ExpressionType.ExclusiveOrAssign, typeof(int), null, "e135");
            asserter(e136, ExpressionType.OrAssign, typeof(int), null, "e136");
            asserter(e139, ExpressionType.MultiplyAssignChecked, typeof(int), null, "e139");
            asserter(e140, ExpressionType.AddAssignChecked, typeof(int), null, "e140");
            asserter(e141, ExpressionType.SubtractAssignChecked, typeof(int), null, "e141");
            asserter(e143, ExpressionType.PowerAssign, typeof(int), null, "e143");
            asserter(e144, ExpressionType.Assign, typeof(int), null, "e143");

            asserter(e151, ExpressionType.MultiplyAssign, typeof(C), "op_Multiply", "e151");
            asserter(e152, ExpressionType.ModuloAssign, typeof(C), "op_Modulus", "e152");
            asserter(e153, ExpressionType.DivideAssign, typeof(C), "op_Division", "e153");
            asserter(e154, ExpressionType.AddAssign, typeof(C), "op_Addition", "e154");
            asserter(e155, ExpressionType.SubtractAssign, typeof(C), "op_Subtraction", "e155");
            asserter(e156, ExpressionType.LeftShiftAssign, typeof(C), "op_LeftShift", "e156");
            asserter(e157, ExpressionType.RightShiftAssign, typeof(C), "op_RightShift", "e157");
            asserter(e164, ExpressionType.AndAssign, typeof(C), "op_BitwiseAnd", "e164");
            asserter(e165, ExpressionType.ExclusiveOrAssign, typeof(C), "op_ExclusiveOr", "e165");
            asserter(e166, ExpressionType.OrAssign, typeof(C), "op_BitwiseOr", "e166");
            asserter(e169, ExpressionType.MultiplyAssignChecked, typeof(C), "op_Multiply", "e169");
            asserter(e170, ExpressionType.AddAssignChecked, typeof(C), "op_Addition", "e170");
            asserter(e171, ExpressionType.SubtractAssignChecked, typeof(C), "op_Subtraction", "e171");
            asserter(e173, ExpressionType.PowerAssign, typeof(C), "op_Power", "e173");

            asserter(mkbin1, ExpressionType.Subtract, typeof(int), null, "mkbin1");
            asserter(mkbin2, ExpressionType.LessThan, typeof(bool), "op_LessThan", "mkbin2");

            Assert.False((object)Expression.Constant(null, typeof(object)) is BinaryExpression, "Constant should not be BinaryExpression");
        }

        [Test]
        public void UnaryExpressionsWork()
        {
            Action<Expression, ExpressionType, Type, string, string> asserter = (expr, nodeType, type, method, title) =>
            {
                var ue = expr as UnaryExpression;
                Assert.True(ue != null, title + " is UnaryExpression");
                Assert.AreEqual(nodeType, ue.NodeType, title + " node type");
                Assert.AreEqual(type, ue.Type, title + " type");
                Assert.True(ue.Operand is ParameterExpression && ((ParameterExpression)ue.Operand).Name == "a", title + " operand");
                if (method == null)
                {
                    Assert.True(ue.Method == null, title + " method should be null");
                }
                else
                {
                    Assert.True(ue.Method != null, title + " method should not be null");
                    Assert.AreEqual(typeof(C), ue.Method.DeclaringType, title + " method declaring type should be correct");
                    Assert.AreEqual(method, ue.Method.Name, title + " method name should be correct");
                }
            };

            Expression<Func<int, int>> e1 = a => +a;
            Expression<Func<int, int>> e2 = a => -a;
            Expression<Func<int, int>> e3 = a => ~a;
            Expression<Func<bool, bool>> e4 = a => !a;
            Expression<Func<int, int>> e5 = a => checked(-a);

            var pa = Expression.Parameter(typeof(int), "a");
            Expression e11 = Expression.UnaryPlus(pa, typeof(int));
            Expression e12 = Expression.Negate(pa, typeof(int));
            Expression e13 = Expression.OnesComplement(pa, typeof(int));
            Expression e14 = Expression.Not(Expression.Parameter(typeof(bool), "a"), typeof(bool));
            Expression e15 = Expression.NegateChecked(pa, typeof(int));
            Expression e16 = Expression.IsFalse(Expression.Parameter(typeof(bool), "a"), typeof(bool));
            Expression e17 = Expression.IsTrue(Expression.Parameter(typeof(bool), "a"), typeof(bool));
            Expression e18 = Expression.Increment(pa, typeof(int));
            Expression e19 = Expression.Decrement(pa, typeof(int));

            Expression<Func<C, C>> e21 = a => +a;
            Expression<Func<C, C>> e22 = a => -a;
            Expression<Func<C, C>> e23 = a => ~a;
            Expression<Func<C, bool>> e24 = a => !a;
            Expression<Func<C, C>> e25 = a => checked(-a);

            var pa2 = Expression.Parameter(typeof(C), "a");
            Expression e31 = Expression.UnaryPlus(pa2, typeof(C).GetMethod("op_UnaryPlus"));
            Expression e32 = Expression.Negate(pa2, typeof(C).GetMethod("op_UnaryNegation"));
            Expression e33 = Expression.OnesComplement(pa2, typeof(C).GetMethod("op_OnesComplement"));
            Expression e34 = Expression.Not(pa2, typeof(C).GetMethod("op_LogicalNot"));
            Expression e35 = Expression.NegateChecked(pa2, typeof(C).GetMethod("op_UnaryNegation"));
            Expression e36 = Expression.IsFalse(pa2, typeof(C).GetMethod("op_False"));
            Expression e37 = Expression.IsTrue(pa2, typeof(C).GetMethod("op_True"));
            Expression e38 = Expression.Increment(pa2, typeof(C).GetMethod("op_Increment"));
            Expression e39 = Expression.Decrement(pa2, typeof(C).GetMethod("op_Decrement"));

            Expression e41 = Expression.PreIncrementAssign(pa, typeof(int));
            Expression e42 = Expression.PreDecrementAssign(pa, typeof(int));
            Expression e43 = Expression.PostIncrementAssign(pa, typeof(int));
            Expression e44 = Expression.PostDecrementAssign(pa, typeof(int));

            Expression e51 = Expression.PreIncrementAssign(pa, typeof(C).GetMethod("op_Increment"));
            Expression e52 = Expression.PreDecrementAssign(pa, typeof(C).GetMethod("op_Decrement"));
            Expression e53 = Expression.PostIncrementAssign(pa, typeof(C).GetMethod("op_Increment"));
            Expression e54 = Expression.PostDecrementAssign(pa, typeof(C).GetMethod("op_Decrement"));

            Expression mkun1 = Expression.MakeUnary(ExpressionType.OnesComplement, pa, typeof(int));
            Expression mkun2 = Expression.MakeUnary(ExpressionType.Negate, pa2, null, typeof(C).GetMethod("op_UnaryNegation"));

            asserter(e1.Body, ExpressionType.UnaryPlus, typeof(int), null, "e1");
            asserter(e2.Body, ExpressionType.Negate, typeof(int), null, "e2");
            asserter(e3.Body, ExpressionType.OnesComplement, typeof(int), null, "e3");
            asserter(e4.Body, ExpressionType.Not, typeof(bool), null, "e4");
            asserter(e5.Body, ExpressionType.NegateChecked, typeof(int), null, "e5");

            asserter(e11, ExpressionType.UnaryPlus, typeof(int), null, "e11");
            asserter(e12, ExpressionType.Negate, typeof(int), null, "e12");
            asserter(e13, ExpressionType.OnesComplement, typeof(int), null, "e13");
            asserter(e14, ExpressionType.Not, typeof(bool), null, "e14");
            asserter(e15, ExpressionType.NegateChecked, typeof(int), null, "e15");
            asserter(e16, ExpressionType.IsFalse, typeof(bool), null, "e16");
            asserter(e17, ExpressionType.IsTrue, typeof(bool), null, "e17");
            asserter(e18, ExpressionType.Increment, typeof(int), null, "e18");
            asserter(e19, ExpressionType.Decrement, typeof(int), null, "e19");

            asserter(e21.Body, ExpressionType.UnaryPlus, typeof(C), "op_UnaryPlus", "e21");
            asserter(e22.Body, ExpressionType.Negate, typeof(C), "op_UnaryNegation", "e22");
            asserter(e23.Body, ExpressionType.OnesComplement, typeof(C), "op_OnesComplement", "e23");
            asserter(e24.Body, ExpressionType.Not, typeof(bool), "op_LogicalNot", "e24");
            asserter(e25.Body, ExpressionType.NegateChecked, typeof(C), "op_UnaryNegation", "e25");

            asserter(e31, ExpressionType.UnaryPlus, typeof(C), "op_UnaryPlus", "e31");
            asserter(e32, ExpressionType.Negate, typeof(C), "op_UnaryNegation", "e32");
            asserter(e33, ExpressionType.OnesComplement, typeof(C), "op_OnesComplement", "e33");
            asserter(e34, ExpressionType.Not, typeof(bool), "op_LogicalNot", "e34");
            asserter(e35, ExpressionType.NegateChecked, typeof(C), "op_UnaryNegation", "e35");
            asserter(e36, ExpressionType.IsFalse, typeof(bool), "op_False", "e36");
            asserter(e37, ExpressionType.IsTrue, typeof(bool), "op_True", "e37");
            asserter(e38, ExpressionType.Increment, typeof(C), "op_Increment", "e38");
            asserter(e39, ExpressionType.Decrement, typeof(C), "op_Decrement", "e39");

            asserter(e41, ExpressionType.PreIncrementAssign, typeof(int), null, "e41");
            asserter(e42, ExpressionType.PreDecrementAssign, typeof(int), null, "e42");
            asserter(e43, ExpressionType.PostIncrementAssign, typeof(int), null, "e43");
            asserter(e44, ExpressionType.PostDecrementAssign, typeof(int), null, "e44");

            asserter(e51, ExpressionType.PreIncrementAssign, typeof(C), "op_Increment", "e51");
            asserter(e52, ExpressionType.PreDecrementAssign, typeof(C), "op_Decrement", "e52");
            asserter(e53, ExpressionType.PostIncrementAssign, typeof(C), "op_Increment", "e53");
            asserter(e54, ExpressionType.PostDecrementAssign, typeof(C), "op_Decrement", "e54");

            asserter(mkun1, ExpressionType.OnesComplement, typeof(int), null, "mkun1");
            asserter(mkun2, ExpressionType.Negate, typeof(C), "op_UnaryNegation", "mkun2");

            Assert.False((object)Expression.Constant(null, typeof(object)) is UnaryExpression, "Constant should not be UnaryExpression");
        }

        [Test]
        public void ArrayLengthWorks()
        {
            Expression<Func<double[], int>> e1 = a => a.Length;
            Expression e2 = Expression.ArrayLength(Expression.Parameter(typeof(double[]), "a"));

            Assert.True(e1.Body is UnaryExpression, "e1 is UnaryExpression");
            Assert.AreEqual(ExpressionType.ArrayLength, e1.Body.NodeType, "e1 node type");
            Assert.AreEqual(typeof(int), e1.Body.Type, "e1 type");
            Assert.True(((UnaryExpression)e1.Body).Operand is ParameterExpression && ((ParameterExpression)((UnaryExpression)e1.Body).Operand).Name == "a", "e1 operand");
            Assert.True(((UnaryExpression)e1.Body).Method == null, "e1 method");

            Assert.True(e2 is UnaryExpression, "e2 is UnaryExpression");
            Assert.AreEqual(ExpressionType.ArrayLength, e2.NodeType, "e2 node type");
            Assert.AreEqual(typeof(int), e2.Type, "e2 type");
            Assert.True(((UnaryExpression)e2).Operand is ParameterExpression && ((ParameterExpression)((UnaryExpression)e2).Operand).Name == "a", "e2 operand");
            Assert.True(((UnaryExpression)e2).Method == null, "e2 method");
        }

        [Test]
        public void ConversionsWork()
        {
            Action<Expression, ExpressionType, Type, string, string> asserter = (expr, nodeType, type, method, title) =>
            {
                var ue = expr as UnaryExpression;
                Assert.True(ue != null, title + " is UnaryExpression");
                Assert.AreEqual(nodeType, ue.NodeType, title + " node type");
                Assert.AreEqual(type, ue.Type, title + " type");
                Assert.True(ue.Operand is ParameterExpression && ((ParameterExpression)ue.Operand).Name == "a", title + " operand");
                if (method == null)
                {
                    Assert.True(ue.Method == null, title + " method should be null");
                }
                else
                {
                    Assert.True(ue.Method != null, title + " method should not be null");
                    Assert.AreEqual(typeof(C), ue.Method.DeclaringType, title + " method declaring type should be correct");
                    Assert.AreEqual(method, ue.Method.Name, title + " method name should be correct");
                }
            };

            Expression<Func<object, int>> e1 = a => (int)a;
            Expression<Func<object, C>> e2 = a => (C)a;
            Expression<Func<double, int>> e3 = a => (int)a;
            Expression<Func<double, int>> e4 = a => checked((int)a);
            Expression<Func<object, C>> e5 = a => a as C;
            Expression<Func<C, int>> e6 = a => (int)a;
            Expression<Func<C, int>> e7 = a => checked((int)a);

            Expression e11 = Expression.Unbox(Expression.Parameter(typeof(object), "a"), typeof(int));
            Expression e12 = Expression.Convert(Expression.Parameter(typeof(object), "a"), typeof(C));
            Expression e13 = Expression.Convert(Expression.Parameter(typeof(double), "a"), typeof(int));
            Expression e14 = Expression.ConvertChecked(Expression.Parameter(typeof(double), "a"), typeof(int));
            Expression e15 = Expression.TypeAs(Expression.Parameter(typeof(object), "a"), typeof(C));
            Expression e16 = Expression.Convert(Expression.Parameter(typeof(C), "a"), typeof(int), typeof(C).GetMethod("op_Explicit"));
            Expression e17 = Expression.ConvertChecked(Expression.Parameter(typeof(C), "a"), typeof(int), typeof(C).GetMethod("op_Explicit"));

            asserter(e1.Body, ExpressionType.Convert, typeof(int), null, "e1");
            asserter(e2.Body, ExpressionType.Convert, typeof(C), null, "e2");
            asserter(e3.Body, ExpressionType.Convert, typeof(int), null, "e3");
            asserter(e4.Body, ExpressionType.ConvertChecked, typeof(int), null, "e4");
            asserter(e5.Body, ExpressionType.TypeAs, typeof(C), null, "e5");
            asserter(e6.Body, ExpressionType.Convert, typeof(int), "op_Explicit", "e6");
            asserter(e7.Body, ExpressionType.ConvertChecked, typeof(int), "op_Explicit", "e7");

            asserter(e11, ExpressionType.Unbox, typeof(int), null, "e11");
            asserter(e12, ExpressionType.Convert, typeof(C), null, "e12");
            asserter(e13, ExpressionType.Convert, typeof(int), null, "e13");
            asserter(e14, ExpressionType.ConvertChecked, typeof(int), null, "e14");
            asserter(e15, ExpressionType.TypeAs, typeof(C), null, "e15");
            asserter(e16, ExpressionType.Convert, typeof(int), "op_Explicit", "e16");
            asserter(e17, ExpressionType.ConvertChecked, typeof(int), "op_Explicit", "e17");
        }

        [Test]
        public void ArrayIndexWorks()
        {
            Expression<Func<double[], int, double>> e1 = (a, b) => a[b];
            Expression e2 = Expression.ArrayIndex(typeof(double), Expression.Parameter(typeof(double[]), "a"), Expression.Parameter(typeof(int), "b"));

            Assert.True(e1.Body is BinaryExpression, "e1 is BinaryExpression");
            Assert.AreEqual(ExpressionType.ArrayIndex, e1.Body.NodeType, "e1 node type");
            Assert.AreEqual(typeof(double), e1.Body.Type, "e1 type");
            Assert.True(((BinaryExpression)e1.Body).Left is ParameterExpression && ((ParameterExpression)((BinaryExpression)e1.Body).Left).Name == "a", "e1 left");
            Assert.True(((BinaryExpression)e1.Body).Right is ParameterExpression && ((ParameterExpression)((BinaryExpression)e1.Body).Right).Name == "b", "e1 right");
            Assert.True(((BinaryExpression)e1.Body).Method == null, "e1 method");

            Assert.True(e2 is BinaryExpression, "e2 is BinaryExpression");
            Assert.AreEqual(ExpressionType.ArrayIndex, e2.NodeType, "e2 node type");
            Assert.AreEqual(typeof(double), e2.Type, "e2 type");
            Assert.True(((BinaryExpression)e1.Body).Left is ParameterExpression && ((ParameterExpression)((BinaryExpression)e1.Body).Left).Name == "a", "e2 left");
            Assert.True(((BinaryExpression)e1.Body).Right is ParameterExpression && ((ParameterExpression)((BinaryExpression)e1.Body).Right).Name == "b", "e2 right");
            Assert.True(((BinaryExpression)e1.Body).Method == null, "e2 method");
        }

        [Test]
        public void MultiDimensionalArrayIndexWorks()
        {
            var arr = new double[4, 4];
            arr[1, 2] = 2.5;
            Expression<Func<double[,], int, int, double>> e1 = (a, b, c) => a[b, c];
            Expression e2 = Expression.ArrayIndex(typeof(double), Expression.Parameter(typeof(double[,]), "a"), new Expression[] { Expression.Parameter(typeof(int), "b"), Expression.Parameter(typeof(int), "c") });
            Expression e3 = Expression.ArrayIndex(typeof(double), Expression.Parameter(typeof(double[,]), "a"), new MyEnumerable<Expression>(new Expression[] { Expression.Parameter(typeof(int), "b"), Expression.Parameter(typeof(int), "c") }));

            Action<Expression, string> asserter = (expr, title) =>
            {
                var me = expr as MethodCallExpression;
                Assert.True(me != null, title + " is MethodCallExpression");
                Assert.AreEqual(ExpressionType.Call, me.NodeType, title + " node type");
                Assert.AreEqual(typeof(double), me.Type, title + " type");
                Assert.True(me.Object is ParameterExpression && ((ParameterExpression)me.Object).Name == "a", title + " object");
                Assert.AreEqual(2, me.Arguments.Count, title + " argument count");
                Assert.True(me.Arguments[0] is ParameterExpression && ((ParameterExpression)me.Arguments[0]).Name == "b", title + " argument 0");
                Assert.True(me.Arguments[1] is ParameterExpression && ((ParameterExpression)me.Arguments[1]).Name == "c", title + " argument 1");
                Assert.AreEqual(MemberTypes.Method, me.Method.MemberType, title + "method type");
                Assert.False(me.Method.IsConstructor, title + "method is constructor");
                Assert.False(me.Method.IsStatic, title + "method isstatic");
                Assert.AreEqual(typeof(double), me.Method.ReturnType, title + " method return value");
                Assert.AreEqual("Get", me.Method.Name, title + " method name");
                Assert.AreEqual(typeof(double[,]), me.Method.DeclaringType, title + " method declaring type");
                Assert.AreEqual(new[] { typeof(int), typeof(int) }, me.Method.ParameterTypes, title + " method parameter types");
                Assert.AreEqual(2.5, me.Method.Invoke(arr, 1, 2), title + " method invoke result");
            };

            asserter(e1.Body, "e1");
            asserter(e2, "e2");
            asserter(e3, "e3");
        }

        [Test]
        public void ConditionWorks()
        {
            Expression<Func<bool, int, int, int>> e1 = (a, b, c) => a ? b : c;
            Expression e2 = Expression.Condition(Expression.Parameter(typeof(bool), "a"), Expression.Parameter(typeof(int), "b"), Expression.Parameter(typeof(int), "c"), typeof(int));

            Assert.True(e1.Body is ConditionalExpression, "e1 is ConditionalExpression");
            Assert.AreEqual(ExpressionType.Conditional, e1.Body.NodeType, "e1 node type");
            Assert.AreEqual(typeof(int), e1.Body.Type, "e1 type");
            Assert.True(((ConditionalExpression)e1.Body).Test is ParameterExpression && ((ParameterExpression)((ConditionalExpression)e1.Body).Test).Name == "a", "e1 test");
            Assert.True(((ConditionalExpression)e1.Body).IfTrue is ParameterExpression && ((ParameterExpression)((ConditionalExpression)e1.Body).IfTrue).Name == "b", "e1 iftrue");
            Assert.True(((ConditionalExpression)e1.Body).IfFalse is ParameterExpression && ((ParameterExpression)((ConditionalExpression)e1.Body).IfFalse).Name == "c", "e1 iffalse");

            Assert.True(e2 is ConditionalExpression, "e2 is ConditionalExpression");
            Assert.AreEqual(ExpressionType.Conditional, e2.NodeType, "e2 node type");
            Assert.AreEqual(typeof(int), e2.Type, "e2 type");
            Assert.True(((ConditionalExpression)e2).Test is ParameterExpression && ((ParameterExpression)((ConditionalExpression)e2).Test).Name == "a", "e2 test");
            Assert.True(((ConditionalExpression)e2).IfTrue is ParameterExpression && ((ParameterExpression)((ConditionalExpression)e2).IfTrue).Name == "b", "e2 iftrue");
            Assert.True(((ConditionalExpression)e2).IfFalse is ParameterExpression && ((ParameterExpression)((ConditionalExpression)e2).IfFalse).Name == "c", "e2 iffalse");

            Assert.False((object)Expression.Constant(null, typeof(object)) is ConditionalExpression, "Constant should not be ConditionalExpression");
        }

        [Test]
        public void CallWorks()
        {
            Action<Expression, string, bool, string> asserter = (expr, method, isStatic, title) =>
            {
                var ce = expr as MethodCallExpression;
                Assert.True(ce != null, title + " is CallExpression");
                Assert.AreEqual(ExpressionType.Call, ce.NodeType, title + " node type");
                Assert.AreEqual(typeof(int), ce.Type, title + " type");
                Assert.AreEqual(2, ce.Arguments.Count, title + " argument count");
                Assert.True(ce.Arguments[0] is ParameterExpression && ((ParameterExpression)ce.Arguments[0]).Name == "a", title + " argument 0");
                Assert.True(ce.Arguments[1] is ParameterExpression && ((ParameterExpression)ce.Arguments[1]).Name == "b", title + " argument 1");
                Assert.AreEqual(typeof(C), ce.Method.DeclaringType, title + " method declaring type");
                Assert.AreEqual(method, ce.Method.Name, title + " method name");
                if (isStatic)
                {
                    Assert.True(ce.Object == null, title + " object should be null");
                }
                else
                {
                    Assert.True(ce.Object is ParameterExpression && ((ParameterExpression)ce.Object).Name == "i");
                }
            };

            Expression<Func<C, int, string, int>> e1 = (i, a, b) => i.M1(a, b);
            Expression<Func<int, string, int>> e2 = (a, b) => C.M2(a, b);
            Expression e3 = Expression.Call(Expression.Parameter(typeof(C), "i"), typeof(C).GetMethod("M1"), new[] { Expression.Parameter(typeof(int), "a"), Expression.Parameter(typeof(string), "b") });
            Expression e4 = Expression.Call(null, typeof(C).GetMethod("M2"), new Expression[] { Expression.Parameter(typeof(int), "a"), Expression.Parameter(typeof(string), "b") });
            Expression e5 = Expression.Call(Expression.Parameter(typeof(C), "i"), typeof(C).GetMethod("M1"), new MyEnumerable<Expression>(new Expression[] { Expression.Parameter(typeof(int), "a"), Expression.Parameter(typeof(string), "b") }));
            Expression e6 = Expression.Call(null, typeof(C).GetMethod("M2"), new MyEnumerable<Expression>(new Expression[] { Expression.Parameter(typeof(int), "a"), Expression.Parameter(typeof(string), "b") }));
            Expression e7 = Expression.Call(typeof(C).GetMethod("M2"), new Expression[] { Expression.Parameter(typeof(int), "a"), Expression.Parameter(typeof(string), "b") });
            Expression e8 = Expression.Call(typeof(C).GetMethod("M2"), new MyEnumerable<Expression>(new Expression[] { Expression.Parameter(typeof(int), "a"), Expression.Parameter(typeof(string), "b") }));
            Expression<Func<C, int>> e9 = a => a.M1(0, null);
            Expression<Func<C, int>> e10 = a => a.M3(0);

            asserter(e1.Body, "M1", false, "e1");
            asserter(e2.Body, "M2", true, "e2");
            asserter(e3, "M1", false, "e3");
            asserter(e4, "M2", true, "e4");
            asserter(e5, "M1", false, "e5");
            asserter(e6, "M2", true, "e6");
            asserter(e7, "M2", true, "e7");
            asserter(e8, "M2", true, "e8");

            Assert.True(ReferenceEquals(((MethodCallExpression)e9.Body).Method, typeof(C).GetMethod("M1")), "e9 member");
            Assert.AreEqual("M3", ((MethodCallExpression)e10.Body).Method.Name, "e10 member name");
            Assert.AreEqual(73, ((MethodCallExpression)e10.Body).Method.Invoke(new C(), 39), "e10 member result");

            Assert.False((object)Expression.Constant(null, typeof(object)) is MethodCallExpression, "Constant should not be MethodCallExpression");
        }

        [Test]
        public void MethodGroupConversionWorks()
        {
            Expression<Func<C, Func<int, int>>> e1 = a => a.M4;

            Assert.True(e1.Body.NodeType == ExpressionType.Convert, "e1 body node type");
            var e2 = (UnaryExpression)e1.Body;
            Assert.AreEqual(typeof(Func<int, int>), e2.Type, "e2 type");
            Assert.AreEqual(ExpressionType.Call, e2.Operand.NodeType, "2 operand type");
            var e3 = (MethodCallExpression)e2.Operand;
            Assert.AreEqual(ExpressionType.Constant, e3.Object.NodeType, "e3 object node type");
            var e4 = (ConstantExpression)e3.Object;
            Assert.AreEqual(typeof(MethodInfo), e4.Type, "e4 type");
            Assert.True(e4.Value == typeof(C).GetMethod("M4"), "e4 value");
            Assert.AreEqual(typeof(MethodInfo), e3.Method.DeclaringType, "e3 method declaring type");
            Assert.AreEqual("CreateDelegate", e3.Method.Name, "e3 method name");
            Assert.AreEqual(new[] { typeof(Type), typeof(object) }, e3.Method.ParameterTypes, "e3 method parameters");
            Assert.AreEqual(2, e3.Arguments.Count, "e3 arguments");
            Assert.AreEqual(typeof(Func<int, int>), e3.Arguments[0], "e3 argument 0");
            Assert.True(e3.Arguments[1] is ParameterExpression && ((ParameterExpression)e3.Arguments[1]).Name == "a", "e3 argument 1");
        }

        [Test]
        public void InvokeWorks()
        {
            Expression<Func<Func<int, string, string>, int, string, string>> e1 = (a, b, c) => a(b, c);
            Expression e2 = Expression.Invoke(typeof(string), Expression.Parameter(typeof(Func<int, string, string>), "a"), new Expression[] { Expression.Parameter(typeof(int), "b"), Expression.Parameter(typeof(string), "c") });
            Expression e3 = Expression.Invoke(typeof(string), Expression.Parameter(typeof(Func<int, string, string>), "a"), new MyEnumerable<Expression>(new Expression[] { Expression.Parameter(typeof(int), "b"), Expression.Parameter(typeof(string), "c") }));

            Action<Expression, string> asserter = (expr, title) =>
            {
                var ie = expr as InvocationExpression;
                Assert.True(ie != null, title + " is InvocationExpression");
                Assert.AreEqual(ExpressionType.Invoke, ie.NodeType, title + " node type");
                Assert.AreEqual(typeof(string), ie.Type, title + " type");
                Assert.True(ie.Expression is ParameterExpression && ((ParameterExpression)ie.Expression).Name == "a", title + " expression");
                Assert.AreEqual(2, ie.Arguments.Count, title + " argument count");
                Assert.True(ie.Arguments[0] is ParameterExpression && ((ParameterExpression)ie.Arguments[0]).Name == "b", title + " argument 0");
                Assert.True(ie.Arguments[1] is ParameterExpression && ((ParameterExpression)ie.Arguments[1]).Name == "c", title + " argument 1");
            };

            asserter(e1.Body, "e1");
            asserter(e2, "e2");
            asserter(e3, "e3");

            Assert.False((object)Expression.Constant(null, typeof(object)) is InvocationExpression, "Constant should not be InvocationExpression");
        }

        [Test]
        public void ArrayCreationWorks()
        {
            Expression<Func<int, int[]>> e1 = a => new int[a];
            Expression<Func<int, int, int[,]>> e2 = (a, b) => new int[a, b];
            Expression<Func<int, int, int[]>> e3 = (a, b) => new[] { a, b };
            Expression e4 = Expression.NewArrayBounds(typeof(int), new Expression[] { Expression.Parameter(typeof(int), "a"), Expression.Parameter(typeof(int), "b") });
            Expression e5 = Expression.NewArrayBounds(typeof(int), new MyEnumerable<Expression>(new Expression[] { Expression.Parameter(typeof(int), "a"), Expression.Parameter(typeof(int), "b") }));
            Expression e6 = Expression.NewArrayInit(typeof(int), new Expression[] { Expression.Parameter(typeof(int), "a"), Expression.Parameter(typeof(int), "b") });
            Expression e7 = Expression.NewArrayInit(typeof(int), new MyEnumerable<Expression>(new Expression[] { Expression.Parameter(typeof(int), "a"), Expression.Parameter(typeof(int), "b") }));

            Assert.True(e1.Body is NewArrayExpression, "e1 is NewArrayExpression");
            Assert.AreEqual(ExpressionType.NewArrayBounds, e1.Body.NodeType, "e1 node type");
            Assert.AreEqual(typeof(int[]), e1.Body.Type, "e1 type");
            Assert.AreEqual(1, ((NewArrayExpression)e1.Body).Expressions.Count, "e1 expression count");
            Assert.True(((NewArrayExpression)e1.Body).Expressions[0] is ParameterExpression && ((ParameterExpression)((NewArrayExpression)e1.Body).Expressions[0]).Name == "a", "e1 expression 0");

            Assert.True(e2.Body is NewArrayExpression, "e2 is NewArrayExpression");
            Assert.AreEqual(ExpressionType.NewArrayBounds, e2.Body.NodeType, "e2 node type");
            Assert.AreEqual(typeof(int[,]), e2.Body.Type, "e2 type");
            Assert.AreEqual(2, ((NewArrayExpression)e2.Body).Expressions.Count, "e2 expression count");
            Assert.True(((NewArrayExpression)e2.Body).Expressions[0] is ParameterExpression && ((ParameterExpression)((NewArrayExpression)e2.Body).Expressions[0]).Name == "a", "e2 expression 0");
            Assert.True(((NewArrayExpression)e2.Body).Expressions[1] is ParameterExpression && ((ParameterExpression)((NewArrayExpression)e2.Body).Expressions[1]).Name == "b", "e2 expression 1");

            Assert.True(e3.Body is NewArrayExpression, "e3 is NewArrayExpression");
            Assert.AreEqual(ExpressionType.NewArrayInit, e3.Body.NodeType, "e3 node type");
            Assert.AreEqual(typeof(int[]), e3.Body.Type, "e3 type");
            Assert.AreEqual(2, ((NewArrayExpression)e3.Body).Expressions.Count, "e3 expression count");
            Assert.True(((NewArrayExpression)e3.Body).Expressions[0] is ParameterExpression && ((ParameterExpression)((NewArrayExpression)e3.Body).Expressions[0]).Name == "a", "e3 expression 0");
            Assert.True(((NewArrayExpression)e3.Body).Expressions[1] is ParameterExpression && ((ParameterExpression)((NewArrayExpression)e3.Body).Expressions[1]).Name == "b", "e3 expression 1");

            Assert.True(e4 is NewArrayExpression, "e4 is NewArrayExpression");
            Assert.AreEqual(ExpressionType.NewArrayBounds, e4.NodeType, "e4 node type");
            Assert.AreEqual(typeof(int[,]), e4.Type, "e4 type");
            Assert.AreEqual(2, ((NewArrayExpression)e4).Expressions.Count, "e4 expression count");
            Assert.True(((NewArrayExpression)e4).Expressions[0] is ParameterExpression && ((ParameterExpression)((NewArrayExpression)e4).Expressions[0]).Name == "a", "e4 expression 0");
            Assert.True(((NewArrayExpression)e4).Expressions[1] is ParameterExpression && ((ParameterExpression)((NewArrayExpression)e4).Expressions[1]).Name == "b", "e4 expression 1");

            Assert.True(e5 is NewArrayExpression, "e5 is NewArrayExpression");
            Assert.AreEqual(ExpressionType.NewArrayBounds, e5.NodeType, "e5 node type");
            Assert.AreEqual(typeof(int[,]), e5.Type, "e5 type");
            Assert.AreEqual(2, ((NewArrayExpression)e5).Expressions.Count, "e5 expression count");
            Assert.True(((NewArrayExpression)e5).Expressions[0] is ParameterExpression && ((ParameterExpression)((NewArrayExpression)e5).Expressions[0]).Name == "a", "e5 expression 0");
            Assert.True(((NewArrayExpression)e5).Expressions[1] is ParameterExpression && ((ParameterExpression)((NewArrayExpression)e5).Expressions[1]).Name == "b", "e5 expression 1");

            Assert.True(e6 is NewArrayExpression, "e6 is NewArrayExpression");
            Assert.AreEqual(ExpressionType.NewArrayInit, e6.NodeType, "e6 node type");
            Assert.AreEqual(typeof(int[]), e6.Type, "e6 type");
            Assert.AreEqual(2, ((NewArrayExpression)e6).Expressions.Count, "e6 expression count");
            Assert.True(((NewArrayExpression)e6).Expressions[0] is ParameterExpression && ((ParameterExpression)((NewArrayExpression)e6).Expressions[0]).Name == "a", "e6 expression 0");
            Assert.True(((NewArrayExpression)e6).Expressions[1] is ParameterExpression && ((ParameterExpression)((NewArrayExpression)e6).Expressions[1]).Name == "b", "e6 expression 1");

            Assert.True(e7 is NewArrayExpression, "e7 is NewArrayExpression");
            Assert.AreEqual(ExpressionType.NewArrayInit, e7.NodeType, "e7 node type");
            Assert.AreEqual(typeof(int[]), e7.Type, "e7 type");
            Assert.AreEqual(2, ((NewArrayExpression)e7).Expressions.Count, "e7 expression count");
            Assert.True(((NewArrayExpression)e7).Expressions[0] is ParameterExpression && ((ParameterExpression)((NewArrayExpression)e7).Expressions[0]).Name == "a", "e7 expression 0");
            Assert.True(((NewArrayExpression)e7).Expressions[1] is ParameterExpression && ((ParameterExpression)((NewArrayExpression)e7).Expressions[1]).Name == "b", "e7 expression 1");

            Assert.False((object)Expression.Constant(null, typeof(object)) is NewArrayExpression, "Constant should not be NewArrayExpression");
        }

        [Test]
        public void PropertiesAndFieldsWork()
        {
            Expression<Func<C, int>> e1 = a => a.F1;
            Expression<Func<C, int>> e2 = a => a.F2;
            Expression<Func<C, int>> e3 = a => a.P1;
            Expression<Func<C, int>> e4 = a => a.P2;
            Expression e5 = Expression.Field(Expression.Parameter(typeof(C), "a"), typeof(C).GetField("F1"));
            Expression e6 = Expression.Property(Expression.Parameter(typeof(C), "a"), typeof(C).GetProperty("P1"));
            Expression e7 = Expression.Field(Expression.Parameter(typeof(C), "a"), "F1");
            Expression e8 = Expression.Property(Expression.Parameter(typeof(C), "a"), "P1");
            Expression e9 = Expression.Field(Expression.Parameter(typeof(C), "a"), typeof(int), "F1");
            Expression e10 = Expression.Property(Expression.Parameter(typeof(C), "a"), typeof(int), "P1");
            Expression e11 = Expression.PropertyOrField(Expression.Parameter(typeof(C), "a"), "F1");
            Expression e12 = Expression.PropertyOrField(Expression.Parameter(typeof(C), "a"), "P1");
            Expression e13 = Expression.MakeMemberAccess(Expression.Parameter(typeof(C), "a"), typeof(C).GetField("F1"));
            Expression e14 = Expression.MakeMemberAccess(Expression.Parameter(typeof(C), "a"), typeof(C).GetProperty("P1"));

            Action<Expression, string, int, string> asserter = (expr, memberName, result, title) =>
            {
                var me = expr as MemberExpression;
                Assert.True(me != null, title + " is MemberExpression");
                Assert.AreEqual(ExpressionType.MemberAccess, me.NodeType, title + " node type");
                Assert.AreEqual(typeof(int), me.Type, title + " type");
                Assert.True(me.Expression is ParameterExpression && ((ParameterExpression)me.Expression).Name == "a", title + " expression");
                if (memberName == "F1" || memberName == "P1")
                {
                    Assert.True(ReferenceEquals(me.Member, memberName.StartsWith("F") ? (object)typeof(C).GetField(memberName) : typeof(C).GetProperty(memberName)), title + " member");
                }
                else
                {
                    Assert.AreEqual(memberName.StartsWith("F") ? MemberTypes.Field : MemberTypes.Property, me.Member.MemberType, title + " member type");
                    Assert.AreEqual(memberName, me.Member.Name, title + " name");
                }
                Assert.AreEqual(result, me.Member is FieldInfo ? ((FieldInfo)me.Member).GetValue(new C()) : ((PropertyInfo)me.Member).GetMethod.Invoke(new C()), title + " member result");
            };

            asserter(e1.Body, "F1", 234, "e1");
            asserter(e2.Body, "F2", 24, "e2");
            asserter(e3.Body, "P1", 42, "e3");
            asserter(e4.Body, "P2", 17, "e4");
            asserter(e5, "F1", 234, "e5");
            asserter(e6, "P1", 42, "e6");
            asserter(e7, "F1", 234, "e7");
            asserter(e8, "P1", 42, "e8");
            asserter(e9, "F1", 234, "e9");
            asserter(e10, "P1", 42, "e10");
            asserter(e11, "F1", 234, "e11");
            asserter(e12, "P1", 42, "e12");
            asserter(e13, "F1", 234, "e11");
            asserter(e14, "P1", 42, "e12");

            Assert.False((object)Expression.Constant(null, typeof(object)) is MemberExpression, "Constant should not be MemberExpression");
        }

        [Test]
        public void IndexersWork()
        {
            Expression<Func<C, int, string, string>> e1 = (a, b, c) => a[b, c];

            var ie = e1.Body as MethodCallExpression;
            Assert.True(ie != null, "is MethodCallExpression");
            Assert.AreEqual(ExpressionType.Call, ie.NodeType, "node type");
            Assert.AreEqual(typeof(string), ie.Type, "type");
            Assert.True(ie.Object is ParameterExpression && ((ParameterExpression)ie.Object).Name == "a", "expression");
            Assert.AreEqual(2, ie.Arguments.Count, "argument count");
            Assert.True(ReferenceEquals(ie.Method, typeof(C).GetProperty("Item").GetMethod), "get method");
            Assert.True(ie.Arguments[0] is ParameterExpression && ((ParameterExpression)ie.Arguments[0]).Name == "b", "argument 0");
            Assert.True(ie.Arguments[1] is ParameterExpression && ((ParameterExpression)ie.Arguments[1]).Name == "c", "argument 1");
        }

        [Test]
        public void IndexExpressionsWork()
        {
            var pa1 = Expression.Parameter(typeof(C), "a");
            var pb1 = Expression.Parameter(typeof(int), "b");
            var pc1 = Expression.Parameter(typeof(string), "c");
            var pa2 = Expression.Parameter(typeof(double[,]), "a");
            var pb2 = Expression.Parameter(typeof(int), "b");
            var pc2 = Expression.Parameter(typeof(int), "c");

            Action<Expression, PropertyInfo, Type, string> asserter = (expr, member, type, title) =>
            {
                var ie = expr as IndexExpression;
                Assert.True(ie != null, title + " is IndexExpression");
                Assert.AreEqual(ExpressionType.Index, ie.NodeType, title + " node type");
                Assert.AreEqual(type, ie.Type, title + " type");
                Assert.True(ie.Object is ParameterExpression && ((ParameterExpression)ie.Object).Name == "a", title + " object");
                Assert.AreEqual(2, ie.Arguments.Count, title + " argument count");
                Assert.True(ie.Arguments[0] is ParameterExpression && ((ParameterExpression)ie.Arguments[0]).Name == "b", title + " argument 0");
                Assert.True(ie.Arguments[1] is ParameterExpression && ((ParameterExpression)ie.Arguments[1]).Name == "c", title + " argument 1");
                Assert.True(ReferenceEquals(ie.Indexer, member), title + " member");
            };

            Expression e1 = Expression.Property(pa1, typeof(C).GetProperty("Item"), new Expression[] { pb1, pc1 });
            Expression e2 = Expression.Property(pa1, typeof(C).GetProperty("Item"), new MyEnumerable<Expression>(new Expression[] { pb1, pc1 }));
            Expression e3 = Expression.ArrayAccess(typeof(double), pa2, new Expression[] { pb2, pc2 });
            Expression e4 = Expression.ArrayAccess(typeof(double), pa2, new MyEnumerable<Expression>(new Expression[] { pb2, pc2 }));

            asserter(e1, typeof(C).GetProperty("Item"), typeof(string), "e1");
            asserter(e2, typeof(C).GetProperty("Item"), typeof(string), "e2");
            asserter(e3, null, typeof(double), "e3");
            asserter(e4, null, typeof(double), "e4");

            Assert.False((object)Expression.Constant(null, typeof(object)) is IndexExpression, "Constant should not be IndexExpression");
        }

        [Test]
        public void ObjectConstructionWorks()
        {
            Action<Expression, Type[], bool, string> asserter = (expr, argTypes, checkReference, title) =>
            {
                var ne = expr as NewExpression;
                Assert.True(ne != null, title + " is NewExpression");
                Assert.AreEqual(ExpressionType.New, ne.NodeType, title + " node type");
                Assert.AreEqual(typeof(C), ne.Type, title + " type");
                Assert.AreEqual(argTypes.Length, ne.Arguments.Count, title + " argument count");
                for (int i = 0; i < ne.Arguments.Count; i++)
                {
                    Assert.True(ne.Arguments[i] is ParameterExpression && ((ParameterExpression)ne.Arguments[i]).Name == ((char)('a' + i)).ToString(), title + " argument " + i);
                }
                Assert.AreEqual(argTypes.Length, ne.Constructor.ParameterTypes.Length, title + " constructor argument length");
                for (int i = 0; i < ne.Constructor.ParameterTypes.Length; i++)
                {
                    Assert.AreEqual(argTypes[i], ne.Constructor.ParameterTypes[i], title + " constructor parameter type " + i);
                }
                if (checkReference)
                {
                    var ctor = typeof(C).GetConstructor(argTypes);
                    Assert.True(ReferenceEquals(ctor, ne.Constructor), title + " constructor reference");
                }
            };

            Expression<Func<C>> e1 = () => new C();
            Expression<Func<int, int, C>> e2 = (a, b) => new C(a, b);
            Expression<Func<int, string, C>> e3 = (a, b) => new C(a, b);
            Expression e4 = Expression.New(typeof(C).GetConstructor(new[] { typeof(int), typeof(int) }), new Expression[] { Expression.Parameter(typeof(int), "a"), Expression.Parameter(typeof(int), "b") });
            Expression e5 = Expression.New(typeof(C).GetConstructor(new[] { typeof(int), typeof(int) }), new MyEnumerable<Expression>(new Expression[] { Expression.Parameter(typeof(int), "a"), Expression.Parameter(typeof(int), "b") }));
            Expression e6 = Expression.New(typeof(C));

            asserter(e1.Body, new Type[0], true, "e1");
            asserter(e2.Body, new[] { typeof(int), typeof(int) }, true, "e2");
            asserter(e3.Body, new[] { typeof(int), typeof(string) }, false, "e3");
            asserter(e4, new[] { typeof(int), typeof(int) }, true, "e4");
            asserter(e5, new[] { typeof(int), typeof(int) }, true, "e5");
            asserter(e6, new Type[0], true, "e6");

            Assert.False((object)Expression.Constant(null, typeof(object)) is NewExpression, "Constant should not be NewExpression");
        }

        [Test]
        public void AnonymousTypeConstructionWorks()
        {
            Expression<Func<int, int, object>> e = (a, b) => new
            {
                A = a,
                B = b
            };
            Assert.AreEqual(ExpressionType.Convert, e.Body.NodeType);

            var ne = ((UnaryExpression)e.Body).Operand as NewExpression;
            Assert.True(ne != null, "is NewExpression");
            Assert.AreEqual(ExpressionType.New, ne.NodeType, "node type");
            Assert.True(ne.Type.FullName.Contains("$AnonymousType$"), "type");
            Assert.AreEqual(2, ne.Arguments.Count, "argument count");
            Assert.True(ne.Arguments[0] is ParameterExpression && ((ParameterExpression)ne.Arguments[0]).Name == "a", "argument 0");
            Assert.True(ne.Arguments[1] is ParameterExpression && ((ParameterExpression)ne.Arguments[1]).Name == "b", "argument 1");
            Assert.AreEqual(2, ne.Members.Count, "member count");
            var propA = ne.Members[0];
            var propB = ne.Members[1];
            Assert.True(propA is PropertyInfo, "A should be property");
            Assert.AreEqual("A", propA.Name, "A name");
            Assert.AreEqual(42, ((PropertyInfo)propA).GetMethod.Invoke(new
            {
                A = 42,
                B = 17
            }), "A getter result");
            Assert.True(propB is PropertyInfo, "B should be property");
            Assert.AreEqual("B", propB.Name, "B name");
            Assert.AreEqual(17, ((PropertyInfo)propB).GetMethod.Invoke(new
            {
                A = 42,
                B = 17
            }), "B getter result");

            var instance = ne.Constructor.Invoke(42, 17);
            Assert.AreEqual(42, ((dynamic)instance).A, "Constructor invocation result A");
            Assert.AreEqual(17, ((dynamic)instance).B, "Constructor invocation result B");
        }

        public class ClassWithQueryPattern<T>
        {
            public readonly T Data;

            public ClassWithQueryPattern(T data)
            {
                Data = data;
            }

            public ClassWithQueryPattern<TResult> Select<TResult>(Func<T, TResult> f)
            {
                return new ClassWithQueryPattern<TResult>(f(Data));
            }
        }

        [Test]
        public void TransparentIdentifiersWork()
        {
            var c = new ClassWithQueryPattern<int>(42);
            Expression<Func<ClassWithQueryPattern<int>>> f = () => from a in c
                                                                   let b = a + 1
                                                                   select a + b;
            var outer = (MethodCallExpression)f.Body;
            //var outerLambda = (LambdaExpression)outer.Arguments[0];
            var inner = (MethodCallExpression)outer.Object;
            Assert.AreEqual("Select", inner.Method.Name);
            var innerLambda = (LambdaExpression)inner.Arguments[0];
            var ne = (NewExpression)innerLambda.Body;

            Assert.True(ne != null, "is NewExpression");
            Assert.AreEqual(ExpressionType.New, ne.NodeType, "node type");
            Assert.True(ne.Type.FullName.Contains("$AnonymousType$"), "type");
            Assert.AreEqual(2, ne.Arguments.Count, "argument count");
            Assert.True(ne.Arguments[0] is ParameterExpression && ((ParameterExpression)ne.Arguments[0]).Name == "a", "argument 0");
            Assert.AreEqual(ExpressionType.Add, ne.Arguments[1].NodeType, "argument 1");
            Assert.AreEqual(2, ne.Members.Count, "member count");
            var propA = ne.Members[0];
            var propB = ne.Members[1];
            Assert.True(propA is PropertyInfo, "A should be property");
            Assert.AreEqual("a", propA.Name, "a name");
            Assert.AreEqual(42, ((PropertyInfo)propA).GetMethod.Invoke(new
            {
                a = 42,
                b = 17
            }), "a getter result");
            Assert.True(propB is PropertyInfo, "B should be property");
            Assert.AreEqual("b", propB.Name, "b name");
            Assert.AreEqual(17, ((PropertyInfo)propB).GetMethod.Invoke(new
            {
                a = 42,
                b = 17
            }), "b getter result");

            var instance = ne.Constructor.Invoke(42, 17);
            Assert.AreEqual(42, ((dynamic)instance).a, "Constructor invocation result a");
            Assert.AreEqual(17, ((dynamic)instance).b, "Constructor invocation result b");
        }

        [Test]
        public void NewExpressionWithMembersWork()
        {
            var a = Expression.Parameter(typeof(int), "a");
            var b = Expression.Parameter(typeof(int), "b");

            Action<Expression, string> asserter = (expr, title) =>
            {
                var ne = expr as NewExpression;
                Assert.True(ne != null, title + " is NewExpression");
                Assert.AreEqual(ExpressionType.New, ne.NodeType, title + " node type");
                Assert.AreEqual(typeof(C), ne.Type, title + " type");
                Assert.AreEqual(2, ne.Arguments.Count, title + " argument count");
                Assert.True(ReferenceEquals(ne.Constructor, typeof(C).GetConstructor(new[] { typeof(int), typeof(int) })), title + " constructor reference");
                Assert.True(ReferenceEquals(ne.Arguments[0], a), title + " argument 0");
                Assert.True(ReferenceEquals(ne.Arguments[1], b), title + " argument 1");
                Assert.AreEqual(2, ne.Members.Count, title + " member count");
                Assert.True(ReferenceEquals(ne.Members[0], typeof(C).GetField("F1")), title + " member 0");
                Assert.True(ReferenceEquals(ne.Members[1], typeof(C).GetProperty("P1").GetMethod), title + " member 1");
            };

            var e1 = Expression.New(typeof(C).GetConstructor(new[] { typeof(int), typeof(int) }), new Expression[] { a, b }, new MemberInfo[] { typeof(C).GetField("F1"), typeof(C).GetProperty("P1").GetMethod });
            var e2 = Expression.New(typeof(C).GetConstructor(new[] { typeof(int), typeof(int) }), new MyEnumerable<Expression>(new Expression[] { a, b }), new MemberInfo[] { typeof(C).GetField("F1"), typeof(C).GetProperty("P1").GetMethod });
            var e3 = Expression.New(typeof(C).GetConstructor(new[] { typeof(int), typeof(int) }), new MyEnumerable<Expression>(new Expression[] { a, b }), new MyEnumerable<MemberInfo>(new MemberInfo[] { typeof(C).GetField("F1"), typeof(C).GetProperty("P1").GetMethod }));

            asserter(e1, "e1");
            asserter(e2, "e2");
            asserter(e3, "e3");
        }

        [Test]
        public void BindWorks()
        {
            var pa = Expression.Parameter(typeof(int), "a");
            Expression<Func<int, C>> e1 = a => new C
            {
                F1 = a
            };
            Expression<Func<int, C>> e2 = a => new C
            {
                P1 = a
            };

            MemberBinding b1 = ((MemberInitExpression)e1.Body).Bindings[0];
            MemberBinding b2 = ((MemberInitExpression)e2.Body).Bindings[0];
            MemberBinding b3 = Expression.Bind(typeof(C).GetField("F1"), pa);
            MemberBinding b4 = Expression.Bind(typeof(C).GetProperty("P1"), pa);

            var ma1 = b1 as MemberAssignment;
            Assert.True(ma1 != null, "b1 should be MemberAssignment");
            Assert.AreEqual(MemberBindingType.Assignment, ma1.BindingType, "b1 BindingType");
            Assert.True(ReferenceEquals(ma1.Member, typeof(C).GetField("F1")), "b1 member");
            Assert.True(ma1.Expression is ParameterExpression && ((ParameterExpression)ma1.Expression).Name == "a", "b1 expression");

            var ma2 = b2 as MemberAssignment;
            Assert.True(ma2 != null, "b2 should be MemberAssignment");
            Assert.AreEqual(MemberBindingType.Assignment, ma2.BindingType, "b2 BindingType");
            Assert.True(ReferenceEquals(ma2.Member, typeof(C).GetProperty("P1")), "b2 member");
            Assert.True(ma2.Expression is ParameterExpression && ((ParameterExpression)ma2.Expression).Name == "a", "b2 expression");

            var ma3 = b3 as MemberAssignment;
            Assert.True(ma3 != null, "b3 should be MemberAssignment");
            Assert.AreEqual(MemberBindingType.Assignment, ma3.BindingType, "b3 BindingType");
            Assert.True(ReferenceEquals(ma3.Member, typeof(C).GetField("F1")), "b3 member");
            Assert.True(ma3.Expression is ParameterExpression && ((ParameterExpression)ma3.Expression).Name == "a", "b3 expression");

            var ma4 = b4 as MemberAssignment;
            Assert.True(ma4 != null, "b4 should be MemberAssignment");
            Assert.AreEqual(MemberBindingType.Assignment, ma4.BindingType, "b4 BindingType");
            Assert.True(ReferenceEquals(ma4.Member, typeof(C).GetProperty("P1")), "b4 member");
            Assert.True(ma4.Expression is ParameterExpression && ((ParameterExpression)ma4.Expression).Name == "a", "b4 expression");

            Assert.False((object)Expression.ListBind(typeof(C).GetField("LF")) is MemberAssignment, "ListBinding should not be MemberAssignment");
        }

        [Test]
        public void ElementInitWorks()
        {
            var add1 = typeof(MyList).GetMethod("Add", new[] { typeof(int) });
            var add2 = typeof(MyList).GetMethod("Add", new[] { typeof(int), typeof(int) });
            var pa = Expression.Parameter(typeof(int), "a");
            var pb = Expression.Parameter(typeof(int), "b");

            var i1 = Expression.ElementInit(add1, new Expression[] { pa });
            var i2 = Expression.ElementInit(add1, new MyEnumerable<Expression>(new Expression[] { pa }));
            var i3 = Expression.ElementInit(add2, new Expression[] { pa, pb });
            var i4 = Expression.ElementInit(add2, new MyEnumerable<Expression>(new Expression[] { pa, pb }));

            Assert.True(ReferenceEquals(i1.AddMethod, add1), "i1 add method");
            Assert.AreEqual(1, i1.Arguments.Count, "i1 argument count");
            Assert.True(ReferenceEquals(i1.Arguments[0], pa), "i1 argument");

            Assert.True(ReferenceEquals(i2.AddMethod, add1), "i2 add method");
            Assert.AreEqual(1, i2.Arguments.Count, "i2 argument count");
            Assert.True(ReferenceEquals(i2.Arguments[0], pa), "i2 argument");

            Assert.True(ReferenceEquals(i3.AddMethod, add2), "i3 add method");
            Assert.AreEqual(2, i3.Arguments.Count, "i3 argument count");
            Assert.True(ReferenceEquals(i3.Arguments[0], pa), "i3 argument 0");
            Assert.True(ReferenceEquals(i3.Arguments[1], pb), "i3 argument 1");

            Assert.True(ReferenceEquals(i4.AddMethod, add2), "i4 add method");
            Assert.AreEqual(2, i4.Arguments.Count, "i4 argument count");
            Assert.True(ReferenceEquals(i4.Arguments[0], pa), "i4 argument 0");
            Assert.True(ReferenceEquals(i4.Arguments[1], pb), "i4 argument 1");
        }

        [Test]
        public void ListBindWorks()
        {
            var add1 = typeof(MyList).GetMethod("Add", new[] { typeof(int) });
            var add2 = typeof(MyList).GetMethod("Add", new[] { typeof(int), typeof(int) });
            Action<MemberBinding, MemberInfo, string> asserter = (binding, member, title) =>
            {
                var mlb = binding as MemberListBinding;
                Assert.True(mlb != null, title + " is MemberListBinding");
                Assert.AreEqual(MemberBindingType.ListBinding, binding.BindingType, title + " node type");
                Assert.True(ReferenceEquals(binding.Member, member), title + " member");
                Assert.AreEqual(2, mlb.Initializers.Count, title + " initializer count");
                Assert.True(ReferenceEquals(mlb.Initializers[0].AddMethod, add1), title + " initializer 0 add method");
                Assert.AreEqual(1, mlb.Initializers[0].Arguments.Count, title + " initializer 0 argument count");
                Assert.True(mlb.Initializers[0].Arguments[0] is ParameterExpression && ((ParameterExpression)mlb.Initializers[0].Arguments[0]).Name == "a", title + " initializer 0 argument");
                Assert.True(ReferenceEquals(mlb.Initializers[0].AddMethod, add1), title + " initializer 1 add method");
                Assert.AreEqual(1, mlb.Initializers[1].Arguments.Count, title + " initializer 1 argument count");
                Assert.True(mlb.Initializers[1].Arguments[0] is ParameterExpression && ((ParameterExpression)mlb.Initializers[1].Arguments[0]).Name == "b", title + " initializer 1 argument");
            };

            var pa = Expression.Parameter(typeof(int), "a");
            var pb = Expression.Parameter(typeof(int), "b");
            Expression<Func<int, int, C>> e1 = (a, b) => new C
            {
                LF = { a, b }
            };
            Expression<Func<int, int, C>> e2 = (a, b) => new C
            {
                LP = { a, b }
            };
            Expression<Func<int, int, C>> e3 = (a, b) => new C
            {
                LF = { a, { a, b } }
            };
            MemberBinding b1 = ((MemberInitExpression)e1.Body).Bindings[0];
            MemberBinding b2 = ((MemberInitExpression)e2.Body).Bindings[0];
            MemberBinding b3 = Expression.ListBind(typeof(C).GetField("LF"), new[] { Expression.ElementInit(add1, pa), Expression.ElementInit(add1, pb) });
            MemberBinding b4 = Expression.ListBind(typeof(C).GetProperty("LP"), new[] { Expression.ElementInit(add1, pa), Expression.ElementInit(add1, pb) });
            MemberBinding b5 = Expression.ListBind(typeof(C).GetField("LF"), new MyEnumerable<ElementInit>(new[] { Expression.ElementInit(add1, pa), Expression.ElementInit(add1, pb) }));
            MemberBinding b6 = Expression.ListBind(typeof(C).GetProperty("LP"), new MyEnumerable<ElementInit>(new[] { Expression.ElementInit(add1, pa), Expression.ElementInit(add1, pb) }));
            MemberBinding b7 = ((MemberInitExpression)e3.Body).Bindings[0];

            asserter(b1, typeof(C).GetField("LF"), "b1");
            asserter(b2, typeof(C).GetProperty("LP"), "b2");
            asserter(b3, typeof(C).GetField("LF"), "b3");
            asserter(b4, typeof(C).GetProperty("LP"), "b4");
            asserter(b5, typeof(C).GetField("LF"), "b5");
            asserter(b6, typeof(C).GetProperty("LP"), "b6");

            var mlb7 = b7 as MemberListBinding;
            Assert.True(mlb7 != null, "b7 is MemberListBinding");
            Assert.AreEqual(MemberBindingType.ListBinding, b7.BindingType, "b7 node type");
            Assert.True(ReferenceEquals(b7.Member, typeof(C).GetField("LF")), "b7 member");
            Assert.AreEqual(2, mlb7.Initializers.Count, "b7 initializer count");
            Assert.True(ReferenceEquals(mlb7.Initializers[0].AddMethod, add1), "b7 initializer 0 add method");
            Assert.AreEqual(1, mlb7.Initializers[0].Arguments.Count, "b7 initializer 0 argument count");
            Assert.True(mlb7.Initializers[0].Arguments[0] is ParameterExpression && ((ParameterExpression)mlb7.Initializers[0].Arguments[0]).Name == "a", "b7 initializer 0 argument");
            Assert.True(ReferenceEquals(mlb7.Initializers[1].AddMethod, add2), "b7 initializer 1 add method");
            Assert.AreEqual(2, mlb7.Initializers[1].Arguments.Count, "b7 initializer 1 argument count");
            Assert.True(mlb7.Initializers[1].Arguments[0] is ParameterExpression && ((ParameterExpression)mlb7.Initializers[1].Arguments[0]).Name == "a", "b7 initializer 1 argument 0");
            Assert.True(mlb7.Initializers[1].Arguments[1] is ParameterExpression && ((ParameterExpression)mlb7.Initializers[1].Arguments[1]).Name == "b", "b7 initializer 1 argument 1");

            Assert.False((object)Expression.Bind(typeof(C).GetField("F1"), Expression.Parameter(typeof(int), "a")) is MemberListBinding, "MemberAssignment should not be list binding");
        }

        [Test]
        public void MemberBindWorks()
        {
            var pa = Expression.Parameter(typeof(int), "a");
            Expression<Func<int, C>> e1 = a => new C
            {
                CF =
                    {
                        F1 = a,
                        P1 = a
                    }
            };
            Expression<Func<int, C>> e2 = a => new C
            {
                CP =
                    {
                        F1 = a,
                        P1 = a
                    }
            };

            var bindings = new MemberBinding[] { Expression.Bind(typeof(C).GetField("F1"), pa), Expression.Bind(typeof(C).GetProperty("P1"), pa) };
            MemberBinding b1 = ((MemberInitExpression)e1.Body).Bindings[0];
            MemberBinding b2 = ((MemberInitExpression)e2.Body).Bindings[0];
            MemberBinding b3 = Expression.MemberBind(typeof(C).GetField("CF"), bindings);
            MemberBinding b4 = Expression.MemberBind(typeof(C).GetProperty("CP"), new MyEnumerable<MemberBinding>(bindings));

            var mb1 = b1 as MemberMemberBinding;
            Assert.True(mb1 != null, "b1 should be MemberMemberBinding");
            Assert.AreEqual(MemberBindingType.MemberBinding, mb1.BindingType, "b1 BindingType");
            Assert.True(ReferenceEquals(mb1.Member, typeof(C).GetField("CF")), "b1 member");
            Assert.AreEqual(2, mb1.Bindings.Count, "b1 binding count");
            Assert.True(mb1.Bindings[0] is MemberAssignment && ReferenceEquals(mb1.Bindings[0].Member, typeof(C).GetField("F1")), "b1 binding 0");
            Assert.True(mb1.Bindings[1] is MemberAssignment && ReferenceEquals(mb1.Bindings[1].Member, typeof(C).GetProperty("P1")), "b1 binding 1");

            var mb2 = b2 as MemberMemberBinding;
            Assert.True(mb2 != null, "b2 should be MemberMemberBinding");
            Assert.AreEqual(MemberBindingType.MemberBinding, mb2.BindingType, "b2 BindingType");
            Assert.True(ReferenceEquals(mb2.Member, typeof(C).GetProperty("CP")), "b2 member");
            Assert.AreEqual(2, mb2.Bindings.Count, "b2 binding count");
            Assert.True(mb2.Bindings[0] is MemberAssignment && ReferenceEquals(mb2.Bindings[0].Member, typeof(C).GetField("F1")), "b1 binding 0");
            Assert.True(mb2.Bindings[1] is MemberAssignment && ReferenceEquals(mb2.Bindings[1].Member, typeof(C).GetProperty("P1")), "b1 binding 1");

            var mb3 = b3 as MemberMemberBinding;
            Assert.True(mb3 != null, "b3 should be MemberMemberBinding");
            Assert.AreEqual(MemberBindingType.MemberBinding, mb3.BindingType, "b3 BindingType");
            Assert.True(ReferenceEquals(mb3.Member, typeof(C).GetField("CF")), "b3 member");
            Assert.AreEqual(2, mb3.Bindings.Count, "b3 binding count");
            Assert.True(ReferenceEquals(mb3.Bindings[0], bindings[0]), "b3 binding 0");
            Assert.True(ReferenceEquals(mb3.Bindings[1], bindings[1]), "b3 binding 1");

            var mb4 = b4 as MemberMemberBinding;
            Assert.True(mb4 != null, "b4 should be MemberMemberBinding");
            Assert.AreEqual(MemberBindingType.MemberBinding, mb4.BindingType, "b4 BindingType");
            Assert.True(ReferenceEquals(mb4.Member, typeof(C).GetProperty("CP")), "b4 member");
            Assert.AreEqual(2, mb4.Bindings.Count, "b4 binding count");
            Assert.True(ReferenceEquals(mb4.Bindings[0], bindings[0]), "b4 binding 0");
            Assert.True(ReferenceEquals(mb4.Bindings[1], bindings[1]), "b4 binding 1");

            Assert.False((object)Expression.ListBind(typeof(C).GetField("LF")) is MemberMemberBinding, "ListBinding should not be MemberMemberBinding");
        }

        [Test]
        public void MemberInitWorks()
        {
            Action<Expression, string> asserter = (expr, title) =>
            {
                var mie = expr as MemberInitExpression;
                Assert.True(mie != null, title + " is MemberInitExpression");
                Assert.AreEqual(ExpressionType.MemberInit, expr.NodeType, title + " node type");
                Assert.AreEqual(typeof(C), expr.Type, title + " type");
                Assert.AreEqual(2, mie.Bindings.Count, title + " binding count");
                Assert.True(ReferenceEquals(mie.NewExpression.Constructor, typeof(C).GetConstructor(new Type[0])), title + " new expression");
                Assert.True(mie.Bindings[0] is MemberAssignment, title + " binding 0 type");
                Assert.True(ReferenceEquals(mie.Bindings[0].Member, typeof(C).GetField("F1")), title + " binding 0 member");
                Assert.True(((MemberAssignment)mie.Bindings[0]).Expression is ParameterExpression && ((ParameterExpression)((MemberAssignment)mie.Bindings[0]).Expression).Name == "a", title + " binding 0 expression");
                Assert.True(mie.Bindings[1] is MemberAssignment, title + " binding 1 type");
                Assert.True(ReferenceEquals(mie.Bindings[1].Member, typeof(C).GetProperty("P1")), title + " binding 1 member");
                Assert.True(((MemberAssignment)mie.Bindings[1]).Expression is ParameterExpression && ((ParameterExpression)((MemberAssignment)mie.Bindings[1]).Expression).Name == "b", title + " binding 1 expression");
            };

            var pa = Expression.Parameter(typeof(int), "a");
            var pb = Expression.Parameter(typeof(int), "b");
            Expression<Func<int, int, C>> e1 = (a, b) => new C
            {
                F1 = a,
                P1 = b
            };
            Expression e2 = Expression.MemberInit(Expression.New(typeof(C).GetConstructor(new Type[0])), new MemberBinding[] { Expression.Bind(typeof(C).GetField("F1"), pa), Expression.Bind(typeof(C).GetProperty("P1"), pb) });
            Expression e3 = Expression.MemberInit(Expression.New(typeof(C).GetConstructor(new Type[0])), new MyEnumerable<MemberBinding>(new MemberBinding[] { Expression.Bind(typeof(C).GetField("F1"), pa), Expression.Bind(typeof(C).GetProperty("P1"), pb) }));

            asserter(e1.Body, "e1");
            asserter(e2, "e2");
            asserter(e3, "e3");

            Assert.False((object)Expression.Constant(0, typeof(int)) is MemberInitExpression, "Constant is MemberInitExpression");
        }

        [Test]
        public void ListInitWorks()
        {
            var add1 = typeof(MyList).GetMethod("Add", new[] { typeof(int) });
            var add2 = typeof(MyList).GetMethod("Add", new[] { typeof(int), typeof(int) });

            Action<Expression, string> asserter = (expr, title) =>
            {
                var lie = expr as ListInitExpression;
                Assert.True(lie != null, title + " is ListInitExpression");
                Assert.AreEqual(ExpressionType.ListInit, expr.NodeType, title + " node type");
                Assert.AreEqual(typeof(MyList), expr.Type, title + " type");
                Assert.True(ReferenceEquals(lie.NewExpression.Constructor, typeof(MyList).GetConstructor(new Type[0])), title + " new expression");
                Assert.AreEqual(2, lie.Initializers.Count, title + " initializer count");
                Assert.True(ReferenceEquals(lie.Initializers[0].AddMethod, add1), title + " initializer 0 add method");
                Assert.AreEqual(1, lie.Initializers[0].Arguments.Count, title + " initializer 0 argument count");
                Assert.True(lie.Initializers[0].Arguments[0] is ParameterExpression && ((ParameterExpression)lie.Initializers[0].Arguments[0]).Name == "a", title + " initializer 0 argument");
                Assert.True(ReferenceEquals(lie.Initializers[1].AddMethod, add1), title + " initializer 1 add method");
                Assert.AreEqual(1, lie.Initializers[1].Arguments.Count, title + " initializer 1 argument count");
                Assert.True(lie.Initializers[1].Arguments[0] is ParameterExpression && ((ParameterExpression)lie.Initializers[1].Arguments[0]).Name == "b", title + " initializer 1 argument");
            };

            var pa = Expression.Parameter(typeof(int), "a");
            var pb = Expression.Parameter(typeof(int), "b");
            Expression<Func<int, int, MyList>> e1 = (a, b) => new MyList { a, b };
            Expression e2 = Expression.ListInit(Expression.New(typeof(MyList)), new[] { Expression.ElementInit(add1, new[] { pa }), Expression.ElementInit(add1, new[] { pb }) });
            Expression e3 = Expression.ListInit(Expression.New(typeof(MyList)), new MyEnumerable<ElementInit>(new[] { Expression.ElementInit(add1, new[] { pa }), Expression.ElementInit(add1, new[] { pb }) }));
            Expression e4 = Expression.ListInit(Expression.New(typeof(MyList)), add1, new Expression[] { pa, pb });
            Expression e5 = Expression.ListInit(Expression.New(typeof(MyList)), add1, new MyEnumerable<Expression>(new Expression[] { pa, pb }));
            Expression<Func<int, int, MyList>> e6 = (a, b) => new MyList { a, { a, b } };

            asserter(e1.Body, "e1");
            asserter(e2, "e2");
            asserter(e3, "e3");
            asserter(e4, "e4");
            asserter(e5, "e5");

            var lie6 = e6.Body as ListInitExpression;
            Assert.True(lie6 != null, "e6 is ListInitExpression");
            Assert.AreEqual(ExpressionType.ListInit, lie6.NodeType, "e6 node type");
            Assert.AreEqual(typeof(MyList), lie6.Type, "e6 type");
            Assert.True(ReferenceEquals(lie6.NewExpression.Constructor, typeof(MyList).GetConstructor(new Type[0])), "e6 new expression");
            Assert.AreEqual(2, lie6.Initializers.Count, "e6 initializer count");
            Assert.True(ReferenceEquals(lie6.Initializers[0].AddMethod, add1), "e6 initializer 0 add method");
            Assert.AreEqual(1, lie6.Initializers[0].Arguments.Count, "e6 initializer 0 argument count");
            Assert.True(lie6.Initializers[0].Arguments[0] is ParameterExpression && ((ParameterExpression)lie6.Initializers[0].Arguments[0]).Name == "a", "e6 initializer 0 argument");
            Assert.True(ReferenceEquals(lie6.Initializers[1].AddMethod, add2), "e6 initializer 1 add method");
            Assert.AreEqual(2, lie6.Initializers[1].Arguments.Count, "e6 initializer 1 argument count");
            Assert.True(lie6.Initializers[1].Arguments[0] is ParameterExpression && ((ParameterExpression)lie6.Initializers[1].Arguments[0]).Name == "a", "e6 initializer 1 argument 0");
            Assert.True(lie6.Initializers[1].Arguments[1] is ParameterExpression && ((ParameterExpression)lie6.Initializers[1].Arguments[1]).Name == "b", "e6 initializer 1 argument 1");

            Assert.False((object)Expression.Constant(0, typeof(int)) is ListInitExpression, "Constant is ListInitExpression");
        }

        [Test]
        public void TypeIsAndTypeEqualWork()
        {
            Expression<Func<object, bool>> e1 = a => a is C;
            Expression e2 = Expression.TypeIs(Expression.Parameter(typeof(object), "a"), typeof(C));
            Expression e3 = Expression.TypeEqual(Expression.Parameter(typeof(object), "a"), typeof(C));

            Assert.True(e1.Body is TypeBinaryExpression, "e1 is TypeBinaryExpression");
            Assert.AreEqual(ExpressionType.TypeIs, e1.Body.NodeType, "e1 node type");
            Assert.AreEqual(typeof(bool), e1.Body.Type, "e1 type");
            Assert.True(((TypeBinaryExpression)e1.Body).Expression is ParameterExpression && ((ParameterExpression)((TypeBinaryExpression)e1.Body).Expression).Name == "a", "e1 expression");
            Assert.AreEqual(typeof(C), ((TypeBinaryExpression)e1.Body).TypeOperand, "e1 type operand");

            Assert.True(e2 is TypeBinaryExpression, "e2 is TypeBinaryExpression");
            Assert.AreEqual(ExpressionType.TypeIs, e2.NodeType, "e2 node type");
            Assert.AreEqual(typeof(bool), e2.Type, "e2 type");
            Assert.True(((TypeBinaryExpression)e2).Expression is ParameterExpression && ((ParameterExpression)((TypeBinaryExpression)e2).Expression).Name == "a", "e2 expression");
            Assert.AreEqual(typeof(C), ((TypeBinaryExpression)e2).TypeOperand, "e2 type operand");

            Assert.True(e3 is TypeBinaryExpression, "e3 is TypeBinaryExpression");
            Assert.AreEqual(ExpressionType.TypeEqual, e3.NodeType, "e3 node type");
            Assert.AreEqual(typeof(bool), e3.Type, "e3 type");
            Assert.True(((TypeBinaryExpression)e3).Expression is ParameterExpression && ((ParameterExpression)((TypeBinaryExpression)e2).Expression).Name == "a", "e3 expression");
            Assert.AreEqual(typeof(C), ((TypeBinaryExpression)e3).TypeOperand, "e3 type operand");

            Assert.False((object)Expression.Constant(0, typeof(int)) is TypeBinaryExpression, "Constant is TypeBinaryExpression");
        }

        [Test]
        public void QuoteWorks()
        {
            var p = Expression.Parameter(typeof(int), "x");
            Expression<Func<int, int>> e1 = a => F(x => x + a);
            Expression e2 = Expression.Quote(Expression.Lambda(p, new[] { p }));

            var q1 = ((MethodCallExpression)e1.Body).Arguments[0];
            Assert.True(q1 is UnaryExpression, "e1 is UnaryExpression");
            Assert.AreEqual(ExpressionType.Quote, q1.NodeType, "e1 node type");
            Assert.AreEqual(typeof(Expression), q1.Type, "e1 type");
            var l1 = ((UnaryExpression)q1).Operand as LambdaExpression;
            Assert.True(l1 != null, "e1 operand should be LambdaExpression");
            Assert.AreEqual(1, l1.Parameters.Count, "e1 lambda parameter count");
            Assert.AreEqual("x", l1.Parameters[0].Name, "e1 lambda parameter name");

            Assert.True(e2 is UnaryExpression, "e2 is UnaryExpression");
            Assert.AreEqual(ExpressionType.Quote, e2.NodeType, "e2 node type");
            Assert.AreEqual(typeof(Expression), e2.Type, "e2 type");
            var l2 = ((UnaryExpression)e2).Operand as LambdaExpression;
            Assert.True(l2 != null, "e2 operand should be LambdaExpression");
            Assert.AreEqual(1, l2.Parameters.Count, "e2 lambda parameter count");
            Assert.AreEqual("x", l2.Parameters[0].Name, "e2 lambda parameter name");
        }

        [Test]
        public void LocalVariableReferenceWorks()
        {
            int a = 42;
            Expression<Func<int>> e = () => a;
            var me = e.Body as MemberExpression;
            Assert.True(me != null, "e is MemberExpression");
            Assert.AreEqual(ExpressionType.MemberAccess, me.NodeType, "e node type");
            Assert.AreEqual(typeof(int), me.Type, "e type");

            var expr = me.Expression as ConstantExpression;
            Assert.True(expr != null, "expression should be ConstantExpression");
            Assert.AreEqual(ExpressionType.Constant, expr.NodeType, "expression node type");
            Assert.AreEqual(typeof(int), expr.Type, "expression type");
            Assert.True(expr.Value != null, "expression value");

            var prop = ((MemberExpression)e.Body).Member as PropertyInfo;
            Assert.True(prop != null, "property not null");

            Assert.AreEqual(MemberTypes.Property, prop.MemberType, "property member type");
            Assert.AreEqual("a", prop.Name, "property name");
            Assert.True(prop.DeclaringType != null, "property declaring type");
            Assert.False(prop.IsStatic, "property is static");
            Assert.AreEqual(typeof(int), prop.PropertyType, "property type");
            Assert.AreEqual(0, prop.IndexParameterTypes.Length, "property indexer parameters");
            Assert.True(prop.CanRead, "property can read");
            Assert.True(prop.CanWrite, "property can write");

            Assert.AreEqual(MemberTypes.Method, prop.GetMethod.MemberType, "getter member type");
            Assert.AreEqual("geta", prop.GetMethod.Name, "getter name");
            Assert.True(prop.GetMethod.DeclaringType != null, "getter declaring type");
            Assert.False(prop.GetMethod.IsStatic, "getter is static");
            Assert.AreEqual(0, prop.GetMethod.ParameterTypes.Length, "getter parameters");
            Assert.False(prop.GetMethod.IsConstructor, "getter is constructor");
            Assert.AreEqual(typeof(int), prop.GetMethod.ReturnType, "getter return type");
            Assert.AreEqual(0, prop.GetMethod.TypeParameterCount, "getter type parameter count");

            Assert.AreEqual(MemberTypes.Method, prop.SetMethod.MemberType, "setter member type");
            Assert.AreEqual("seta", prop.SetMethod.Name, "setter name");
            Assert.True(prop.SetMethod.DeclaringType != null, "setter declaring type");
            Assert.False(prop.SetMethod.IsStatic, "setter is static");
            Assert.AreEqual(1, prop.SetMethod.ParameterTypes.Length, "setter parameter count");
            Assert.AreEqual(typeof(int), prop.SetMethod.ParameterTypes[0], "setter parameter type");
            Assert.False(prop.SetMethod.IsConstructor, "setter is constructor");
            Assert.AreEqual(typeof(object) /*really: void*/, prop.SetMethod.ReturnType, "setter return type");
            Assert.AreEqual(0, prop.SetMethod.TypeParameterCount, "setter type parameter count");

            Assert.AreEqual(42, prop.GetValue(expr.Value), "property get");
            prop.SetValue(expr.Value, 120);
            Assert.AreEqual(120, a, "property set");
        }

        [Test]
        public void ThrowAndRethrowWork()
        {
            var a = Expression.Parameter(typeof(NotSupportedException), "a");
            var e1 = Expression.Throw(a);
            var e2 = Expression.Throw(a, typeof(Exception));
            var e3 = Expression.Rethrow();
            var e4 = Expression.Rethrow(typeof(Exception));

            Action<Expression, Type, bool, string> asserter = (expr, type, hasOperand, title) =>
            {
                var ue = expr as UnaryExpression;
                Assert.True(ue != null, title + " is UnaryExpression");
                Assert.AreEqual(ExpressionType.Throw, ue.NodeType, title + " node type");
                Assert.AreEqual(type, ue.Type, title + " type");
                if (hasOperand)
                {
                    Assert.True(ue.Operand is ParameterExpression && ((ParameterExpression)ue.Operand).Name == "a", title + " operand");
                }
                else
                {
                    Assert.True(ue.Operand == null, title + " operand");
                }
                Assert.True(ue.Method == null, title + " method should be null");
            };

            asserter(e1, typeof(object) /*really: void*/, true, "e1");
            asserter(e2, typeof(Exception), true, "e2");
            asserter(e3, typeof(object) /*really: void*/, false, "e3");
            asserter(e4, typeof(Exception), false, "e4");
        }

        [Test]
        public void DefaultAndEmptyWork()
        {
            Expression e1 = Expression.Empty();
            Expression e2 = Expression.Default(typeof(string));

            Assert.True(e1 is DefaultExpression, "e1 is DefaultExpression");
            Assert.AreEqual(ExpressionType.Default, e1.NodeType, "e1 node type");
            Assert.AreEqual(typeof(object) /*really: void*/, e1.Type, "e1 type");

            Assert.True(e2 is DefaultExpression, "e2 is DefaultExpression");
            Assert.AreEqual(ExpressionType.Default, e2.NodeType, "e2 node type");
            Assert.AreEqual(typeof(string), e2.Type, "e2 type");

            Assert.False((object)Expression.Constant(0, typeof(int)) is TypeBinaryExpression, "Constant is DefaultExpression");
        }

        [Test]
        public void BlockWorks()
        {
            var c1 = Expression.Constant(2);
            var c2 = Expression.Constant("X");
            var v1 = Expression.Parameter(typeof(int), "v1");
            var v2 = Expression.Parameter(typeof(string), "v2");

            Expression e1 = Expression.Block(new Expression[] { c1, c2 });
            Expression e2 = Expression.Block(new MyEnumerable<Expression>(new Expression[] { c1, c2 }));
            Expression e3 = Expression.Block(typeof(object), new Expression[] { c1, c2 });
            Expression e4 = Expression.Block(typeof(object), new MyEnumerable<Expression>(new Expression[] { c1, c2 }));
            Expression e5 = Expression.Block(new MyEnumerable<ParameterExpression>(new[] { v1, v2 }), new Expression[] { c1, c2 });
            Expression e6 = Expression.Block(new MyEnumerable<ParameterExpression>(new[] { v1, v2 }), new MyEnumerable<Expression>(new Expression[] { c1, c2 }));
            Expression e7 = Expression.Block(typeof(object), new MyEnumerable<ParameterExpression>(new[] { v1, v2 }), new Expression[] { c1, c2 });
            Expression e8 = Expression.Block(typeof(object), new MyEnumerable<ParameterExpression>(new[] { v1, v2 }), new MyEnumerable<Expression>(new Expression[] { c1, c2 }));
            Expression e9 = Expression.Block(new[] { v1, v2 }, new Expression[] { c1, c2 });
            Expression e10 = Expression.Block(new[] { v1, v2 }, new MyEnumerable<Expression>(new Expression[] { c1, c2 }));
            Expression e11 = Expression.Block(typeof(object), new[] { v1, v2 }, new Expression[] { c1, c2 });
            Expression e12 = Expression.Block(typeof(object), new[] { v1, v2 }, new MyEnumerable<Expression>(new Expression[] { c1, c2 }));

            Action<Expression, Type, bool, string> asserter = (expr, type, hasVariables, title) =>
            {
                var be = expr as BlockExpression;
                Assert.True(be != null, title + " is BlockExpression");
                Assert.AreEqual(ExpressionType.Block, be.NodeType, title + " node type");
                Assert.AreEqual(type, be.Type, title + " type");
                Assert.AreEqual(2, be.Expressions.Count, title + " expression count");
                Assert.True(ReferenceEquals(be.Expressions[0], c1), title + " expression 0");
                Assert.True(ReferenceEquals(be.Expressions[1], c2), title + " expression 1");
                Assert.True(ReferenceEquals(be.Result, c2), title + " result");
                if (hasVariables)
                {
                    Assert.AreEqual(2, be.Variables.Count, title + " variable count");
                    Assert.True(ReferenceEquals(be.Variables[0], v1), title + " variable 0");
                    Assert.True(ReferenceEquals(be.Variables[1], v2), title + " variable 1");
                }
                else
                {
                    Assert.AreEqual(0, be.Variables.Count, title + " variable count");
                }
            };

            asserter(e1, typeof(string), false, "e1");
            asserter(e2, typeof(string), false, "e2");
            asserter(e3, typeof(object), false, "e3");
            asserter(e4, typeof(object), false, "e4");
            asserter(e5, typeof(string), true, "e5");
            asserter(e6, typeof(string), true, "e6");
            asserter(e7, typeof(object), true, "e7");
            asserter(e8, typeof(object), true, "e8");
            asserter(e9, typeof(string), true, "e9");
            asserter(e10, typeof(string), true, "e10");
            asserter(e11, typeof(object), true, "e11");
            asserter(e12, typeof(object), true, "e12");

            Assert.False((object)Expression.Constant(0, typeof(int)) is BlockExpression, "Constant is BlockExpression");
        }

        [Test]
        public void IfThenWorks()
        {
            var a = Expression.Parameter(typeof(bool), "a");
            var b = Expression.Parameter(typeof(bool), "a");
            var c = Expression.Parameter(typeof(bool), "a");

            Expression e1 = Expression.IfThen(a, b);
            Expression e2 = Expression.IfThenElse(a, b, c);

            var ce1 = e1 as ConditionalExpression;
            Assert.True(ce1 != null, "e1 is ConditionalExpression");
            Assert.AreEqual(ExpressionType.Conditional, ce1.NodeType, "e1 node type");
            Assert.AreEqual(typeof(object) /*really: void*/, ce1.Type, "e1 type");
            Assert.True(ReferenceEquals(ce1.Test, a), "e1 test");
            Assert.True(ReferenceEquals(ce1.IfTrue, b), "e1 iftrue");
            Assert.AreEqual(ExpressionType.Default, ce1.IfFalse.NodeType, "e1 iffalse node type");
            Assert.AreEqual(typeof(object) /* really: void */, ce1.IfFalse.Type, "e1 iffalse type");

            var ce2 = e2 as ConditionalExpression;
            Assert.True(ce2 != null, "e2 is ConditionalExpression");
            Assert.AreEqual(ExpressionType.Conditional, ce2.NodeType, "e2 node type");
            Assert.AreEqual(typeof(object) /*really: void*/, ce2.Type, "e2 type");
            Assert.True(ReferenceEquals(ce2.Test, a), "e2 test");
            Assert.True(ReferenceEquals(ce2.IfTrue, b), "e2 iftrue");
            Assert.True(ReferenceEquals(ce2.IfFalse, c), "e2 iffalse");
        }

        [Test]
        public void LabelTargetWorks()
        {
            LabelTarget l1 = Expression.Label();
            LabelTarget l2 = Expression.Label("name1");
            LabelTarget l3 = Expression.Label(typeof(int));
            LabelTarget l4 = Expression.Label(typeof(string), "name2");

            Assert.True(l1.Name == null, "l1 name");
            Assert.AreEqual(typeof(object)/*really: void*/, l1.Type, "l1 type");
            Assert.AreEqual("name1", l2.Name, "l2 name");
            Assert.AreEqual(typeof(object)/*really: void*/, l2.Type, "l2 type");
            Assert.True(l3.Name == null, "l3 name");
            Assert.AreEqual(typeof(int), l3.Type, "l3 type");
            Assert.AreEqual("name2", l4.Name, "l4 name");
            Assert.AreEqual(typeof(string), l4.Type, "l4 type");
        }

        [Test]
        public void GotoWorks()
        {
            var lbl1 = Expression.Label();
            var lbl2 = Expression.Label(typeof(string));
            var c = Expression.Constant("X");
            Expression e1 = Expression.Break(lbl1);
            Expression e2 = Expression.Break(lbl2, c);
            Expression e3 = Expression.Break(lbl1, typeof(int));
            Expression e4 = Expression.Break(lbl1, c, typeof(string));
            Expression e5 = Expression.Continue(lbl1);
            Expression e6 = Expression.Continue(lbl1, typeof(int));
            Expression e7 = Expression.Return(lbl1);
            Expression e8 = Expression.Return(lbl2, c);
            Expression e9 = Expression.Return(lbl1, typeof(int));
            Expression e10 = Expression.Return(lbl1, c, typeof(string));
            Expression e11 = Expression.Goto(lbl1);
            Expression e12 = Expression.Goto(lbl2, c);
            Expression e13 = Expression.Goto(lbl1, typeof(int));
            Expression e14 = Expression.Goto(lbl2, c, typeof(string));
            Expression e15 = Expression.MakeGoto(GotoExpressionKind.Break, lbl2, c, typeof(string));

            Action<Expression, Type, GotoExpressionKind, LabelTarget, Expression, string> asserter = (expr, type, kind, target, value, title) =>
            {
                var ge = expr as GotoExpression;
                Assert.True(ge != null, title + " is GotoExpression");
                Assert.AreEqual(ExpressionType.Goto, ge.NodeType, title + " node type");
                Assert.AreEqual(type, ge.Type, title + " type");
                Assert.AreEqual(kind, ge.Kind, title + " kind");
                Assert.True(ReferenceEquals(ge.Target, target), title + " target");
                Assert.True(ReferenceEquals(ge.Value, value), title + " target");
            };

            asserter(e1, typeof(object) /*really: void*/, GotoExpressionKind.Break, lbl1, null, "e1");
            asserter(e2, typeof(object) /*really: void*/, GotoExpressionKind.Break, lbl2, c, "e2");
            asserter(e3, typeof(int), GotoExpressionKind.Break, lbl1, null, "e3");
            asserter(e4, typeof(string), GotoExpressionKind.Break, lbl1, c, "e4");
            asserter(e5, typeof(object) /*really: void*/, GotoExpressionKind.Continue, lbl1, null, "e5");
            asserter(e6, typeof(int), GotoExpressionKind.Continue, lbl1, null, "e6");
            asserter(e7, typeof(object) /*really: void*/, GotoExpressionKind.Return, lbl1, null, "e7");
            asserter(e8, typeof(object) /*really: void*/, GotoExpressionKind.Return, lbl2, c, "e8");
            asserter(e9, typeof(int), GotoExpressionKind.Return, lbl1, null, "e9");
            asserter(e10, typeof(string), GotoExpressionKind.Return, lbl1, c, "e10");
            asserter(e11, typeof(object) /*really: void*/, GotoExpressionKind.Goto, lbl1, null, "e11");
            asserter(e12, typeof(object) /*really: void*/, GotoExpressionKind.Goto, lbl2, c, "e12");
            asserter(e13, typeof(int), GotoExpressionKind.Goto, lbl1, null, "e13");
            asserter(e14, typeof(string), GotoExpressionKind.Goto, lbl2, c, "e14");
            asserter(e15, typeof(string), GotoExpressionKind.Break, lbl2, c, "e15");

            Assert.False((object)Expression.Constant(0, typeof(int)) is GotoExpression, "Constant is GotoExpression");
        }

        [Test]
        public void LabelExpressionWorks()
        {
            var lbl1 = Expression.Label();
            var lbl2 = Expression.Label(typeof(string));
            var v = Expression.Constant("X");
            Expression e1 = Expression.Label(lbl1);
            Expression e2 = Expression.Label(lbl1, v);
            Expression e3 = Expression.Label(lbl2, v);

            Assert.True(e1 is LabelExpression, "e1 is LabelExpression");
            Assert.AreEqual(ExpressionType.Label, e1.NodeType, "e1 node type");
            Assert.AreEqual(typeof(object) /*really: void*/, e1.Type, "e1 type");
            Assert.True(ReferenceEquals(((LabelExpression)e1).Target, lbl1), "e1 target");
            Assert.True(((LabelExpression)e1).DefaultValue == null, "e1 default value");

            Assert.True(e2 is LabelExpression, "e2 is LabelExpression");
            Assert.AreEqual(ExpressionType.Label, e2.NodeType, "e2 node type");
            Assert.AreEqual(typeof(object) /*really: void*/, e2.Type, "e2 type");
            Assert.True(ReferenceEquals(((LabelExpression)e2).Target, lbl1), "e2 target");
            Assert.True(ReferenceEquals(((LabelExpression)e2).DefaultValue, v), "e2 default value");

            Assert.True(e3 is LabelExpression, "e3 is LabelExpression");
            Assert.AreEqual(ExpressionType.Label, e3.NodeType, "e3 node type");
            Assert.AreEqual(typeof(string), e3.Type, "e3 type");
            Assert.True(ReferenceEquals(((LabelExpression)e3).Target, lbl2), "e3 target");
            Assert.True(ReferenceEquals(((LabelExpression)e3).DefaultValue, v), "e3 default value");

            Assert.False((object)Expression.Constant(0, typeof(int)) is LabelExpression, "Constant is LabelExpression");
        }

        [Test]
        public void LoopWorks()
        {
            var c = Expression.Constant(1);
            var lb = Expression.Label(typeof(string));
            var lc = Expression.Label();

            Expression e1 = Expression.Loop(c);
            Expression e2 = Expression.Loop(c, lb);
            Expression e3 = Expression.Loop(c, lb, lc);
            Expression e4 = Expression.Loop(c, null, null);

            Assert.True(e1 is LoopExpression, "e1 is LoopExpression");
            Assert.AreEqual(ExpressionType.Loop, e1.NodeType, "e1 node type");
            Assert.AreEqual(typeof(object) /*really: void*/, e1.Type, "e1 type");
            Assert.True(ReferenceEquals(((LoopExpression)e1).Body, c), "e1 body");
            Assert.True(((LoopExpression)e1).BreakLabel == null, "e1 break label");
            Assert.True(((LoopExpression)e1).ContinueLabel == null, "e1 continue label");

            Assert.True(e2 is LoopExpression, "e2 is LoopExpression");
            Assert.AreEqual(ExpressionType.Loop, e2.NodeType, "e2 node type");
            Assert.AreEqual(typeof(string), e2.Type, "e2 type");
            Assert.True(ReferenceEquals(((LoopExpression)e2).Body, c), "e2 target");
            Assert.True(ReferenceEquals(((LoopExpression)e2).BreakLabel, lb), "e2 break label");
            Assert.True(((LoopExpression)e2).ContinueLabel == null, "e1 continue label");

            Assert.True(e3 is LoopExpression, "e3 is LoopExpression");
            Assert.AreEqual(ExpressionType.Loop, e3.NodeType, "e3 node type");
            Assert.AreEqual(typeof(string), e3.Type, "e3 type");
            Assert.True(ReferenceEquals(((LoopExpression)e3).Body, c), "e3 target");
            Assert.True(ReferenceEquals(((LoopExpression)e3).BreakLabel, lb), "e3 break label");
            Assert.True(ReferenceEquals(((LoopExpression)e3).ContinueLabel, lc), "e3 continue label");

            Assert.True(e4 is LoopExpression, "e4 is LoopExpression");
            Assert.AreEqual(ExpressionType.Loop, e4.NodeType, "e4 node type");
            Assert.AreEqual(typeof(object) /*really: void*/, e4.Type, "e4 type");
            Assert.True(ReferenceEquals(((LoopExpression)e4).Body, c), "e4 body");
            Assert.True(((LoopExpression)e4).BreakLabel == null, "e4 break label");
            Assert.True(((LoopExpression)e4).ContinueLabel == null, "e4 continue label");

            Assert.False((object)Expression.Constant(0, typeof(int)) is LoopExpression, "Constant is LoopExpression");
        }

        [Test]
        public void SwitchCaseWorks()
        {
            var v1 = Expression.Constant(1);
            var v2 = Expression.Constant(2);
            var v3 = Expression.Constant(3);

            var sc1 = Expression.SwitchCase(v1, new Expression[] { v2, v3 });
            var sc2 = Expression.SwitchCase(v1, new MyEnumerable<Expression>(new Expression[] { v2, v3 }));

            Assert.True(ReferenceEquals(sc1.Body, v1), "sc1 body");
            Assert.AreEqual(2, sc1.TestValues.Count, "sc1 test values count");
            Assert.True(ReferenceEquals(sc1.TestValues[0], v2), "sc1 test value 0");
            Assert.True(ReferenceEquals(sc1.TestValues[1], v3), "sc1 test value 1");

            Assert.True(ReferenceEquals(sc2.Body, v1), "sc2 body");
            Assert.AreEqual(2, sc2.TestValues.Count, "sc2 test values count");
            Assert.True(ReferenceEquals(sc2.TestValues[0], v2), "sc2 test value 0");
            Assert.True(ReferenceEquals(sc2.TestValues[1], v3), "sc2 test value 1");
        }

        [Test]
        public void SwitchWorks()
        {
            var c1 = Expression.Constant(1);
            var d = Expression.Constant("T");
            var c2 = Expression.Constant(new C());
            var sc1 = Expression.SwitchCase(Expression.Constant("X"), Expression.Constant(1));
            var sc2 = Expression.SwitchCase(Expression.Constant("Y"), Expression.Constant(2));
            var sc3 = Expression.SwitchCase(Expression.Constant("X"), Expression.Constant(new C()));
            var sc4 = Expression.SwitchCase(Expression.Constant("Y"), Expression.Constant(new C()));
            var op = typeof(C).GetMethod("op_Equality");

            var e1 = Expression.Switch(c1, new[] { sc1, sc2 });
            var e2 = Expression.Switch(c1, d, new[] { sc1, sc2 });
            var e3 = Expression.Switch(c2, d, op, new[] { sc3, sc4 });
            var e4 = Expression.Switch(typeof(object), c2, d, op, new[] { sc3, sc4 });
            var e5 = Expression.Switch(c2, d, op, new MyEnumerable<SwitchCase>(new[] { sc3, sc4 }));
            var e6 = Expression.Switch(typeof(object), c2, d, op, new MyEnumerable<SwitchCase>(new[] { sc3, sc4 }));

            Action<Expression, Type, Expression, Expression, SwitchCase[], MethodInfo, string> asserter = (expr, type, switchValue, defaultBody, cases, comparison, title) =>
            {
                var se = expr as SwitchExpression;
                Assert.True(se != null, title + " is SwitchExpression");
                Assert.AreEqual(ExpressionType.Switch, se.NodeType, title + " node type");
                Assert.AreEqual(type, se.Type, title + " type");
                Assert.True(ReferenceEquals(se.Comparison, comparison), title + " comparison");
                Assert.True(ReferenceEquals(se.SwitchValue, switchValue), title + " switch value");
                Assert.True(ReferenceEquals(se.DefaultBody, defaultBody), title + " default value");
                Assert.AreEqual(cases.Length, se.Cases.Count, title + " cases count");
                for (int i = 0; i < se.Cases.Count; i++)
                {
                    Assert.True(ReferenceEquals(se.Cases[i], cases[i]), title + " case " + i);
                }
            };

            asserter(e1, typeof(string), c1, null, new[] { sc1, sc2 }, null, "e1");
            asserter(e2, typeof(string), c1, d, new[] { sc1, sc2 }, null, "e2");
            asserter(e3, typeof(string), c2, d, new[] { sc3, sc4 }, op, "e3");
            asserter(e4, typeof(object), c2, d, new[] { sc3, sc4 }, op, "e4");
            asserter(e5, typeof(string), c2, d, new[] { sc3, sc4 }, op, "e5");
            asserter(e6, typeof(object), c2, d, new[] { sc3, sc4 }, op, "e6");

            Assert.False((object)Expression.Constant(0, typeof(int)) is SwitchExpression, "Constant is SwitchExpression");
        }

        [Test]
        public void CatchBlockWorks()
        {
            var ex = Expression.Variable(typeof(NotSupportedException), "ex");
            var b = Expression.Empty();
            var f = Expression.Constant(true);

            var b1 = Expression.Catch(typeof(NotSupportedException), b);
            var b2 = Expression.Catch(ex, b);
            var b3 = Expression.Catch(typeof(NotSupportedException), b, f);
            var b4 = Expression.Catch(ex, b, f);
            var b5 = Expression.MakeCatchBlock(null, ex, b, f);
            var b6 = Expression.MakeCatchBlock(typeof(NotSupportedException), null, b, f);

            Action<CatchBlock, ParameterExpression, Expression, string> asserter = (block, variable, filter, title) =>
            {
                Assert.True(ReferenceEquals(block.Variable, variable), title + " variable");
                Assert.AreEqual(typeof(NotSupportedException), block.Test, title + " test");
                Assert.True(ReferenceEquals(block.Body, b), title + " body");
                Assert.True(ReferenceEquals(block.Filter, filter), title + " filter");
            };

            asserter(b1, null, null, "b1");
            asserter(b2, ex, null, "b2");
            asserter(b3, null, f, "b3");
            asserter(b4, ex, f, "b4");
            asserter(b5, ex, f, "b5");
            asserter(b6, null, f, "b6");
        }

        [Test]
        public void TryWorks()
        {
            var b1 = Expression.Default(typeof(string));
            var b2 = Expression.Empty();
            var b3 = Expression.Empty();
            var cs = new[] { Expression.Catch(typeof(NotSupportedException), Expression.Empty()), Expression.Catch(typeof(Expression), Expression.Empty()) };

            var e1 = Expression.TryFault(b1, b2);
            var e2 = Expression.TryFinally(b1, b3);
            var e3 = Expression.TryCatch(b1, cs);
            var e4 = Expression.TryCatchFinally(b1, b3, cs);
            var e5 = Expression.MakeTry(typeof(object), b1, b3, null, cs);
            var e6 = Expression.MakeTry(typeof(object), b1, null, b2, null);

            Action<Expression, Type, Expression, Expression, bool, string> asserter = (expr, type, fault, @finally, hasHandlers, title) =>
            {
                var te = expr as TryExpression;
                Assert.True(te != null, title + " is TryExpression");
                Assert.AreEqual(ExpressionType.Try, te.NodeType, title + " node type");
                Assert.AreEqual(type, te.Type, title + " type");
                Assert.True(ReferenceEquals(te.Body, b1), title + " body");
                Assert.True(ReferenceEquals(te.Fault, fault), title + " fault");
                Assert.True(ReferenceEquals(te.Finally, @finally), title + " finally");
                if (hasHandlers)
                {
                    Assert.AreEqual(2, te.Handlers.Count, title + " handler count");
                    Assert.True(ReferenceEquals(te.Handlers[0], cs[0]), title + " handler 0");
                    Assert.True(ReferenceEquals(te.Handlers[1], cs[1]), title + " handler 1");
                }
                else
                {
                    Assert.AreEqual(0, te.Handlers.Count, title + " handler count");
                }
            };

            asserter(e1, typeof(string), b2, null, false, "e1");
            asserter(e2, typeof(string), null, b3, false, "e2");
            asserter(e3, typeof(string), null, null, true, "e3");
            asserter(e4, typeof(string), null, b3, true, "e4");
            asserter(e5, typeof(object), null, b3, true, "e5");
            asserter(e6, typeof(object), b2, null, false, "e6");

            Assert.False((object)Expression.Constant(0, typeof(int)) is TryExpression, "Constant is TryExpression");
        }

        [Test]
        public void DynamicWorks()
        {
            var a = Expression.Parameter(typeof(string), "a");
            var b = Expression.Parameter(typeof(string), "b");
            var c = Expression.Parameter(typeof(string), "c");

            Expression e1 = Expression.DynamicMember(a, "member1");
            Expression e2 = Expression.DynamicMember(typeof(int), a, "member1");
            Expression e3 = Expression.DynamicInvocation(a, new Expression[] { b, c });
            Expression e4 = Expression.DynamicInvocation(a, new MyEnumerable<Expression>(new Expression[] { b, c }));
            Expression e5 = Expression.DynamicInvocation(typeof(int), a, new Expression[] { b, c });
            Expression e6 = Expression.DynamicInvocation(typeof(int), a, new MyEnumerable<Expression>(new Expression[] { b, c }));
            Expression e7 = Expression.DynamicIndex(a, b);
            Expression e8 = Expression.DynamicIndex(typeof(int), a, b);

            Action<Expression, Type, string> assertMember = (expr, type, title) =>
            {
                var dme = expr as DynamicMemberExpression;
                Assert.True(expr is DynamicExpression, title + " is DynamicExpression");
                Assert.True(dme != null, title + " is DynamicMemberExpression");
                Assert.AreEqual(ExpressionType.Dynamic, dme.NodeType, title + " node type");
                Assert.AreEqual(type, dme.Type, title + " type");
                Assert.AreEqual(DynamicExpressionType.MemberAccess, dme.DynamicType, title + " dynamic type");
                Assert.True(ReferenceEquals(dme.Expression, a), title + " expression");
                Assert.AreEqual("member1", dme.Member, title + " member name");
            };

            Action<Expression, Type, string> assertInvocation = (expr, type, title) =>
            {
                var dme = expr as DynamicInvocationExpression;
                Assert.True(expr is DynamicExpression, title + " is DynamicExpression");
                Assert.True(dme != null, title + " is DynamicInvocationExpression");
                Assert.AreEqual(ExpressionType.Dynamic, dme.NodeType, title + " node type");
                Assert.AreEqual(type, dme.Type, title + " type");
                Assert.AreEqual(DynamicExpressionType.Invocation, dme.DynamicType, title + " dynamic type");
                Assert.True(ReferenceEquals(dme.Expression, a), title + " expression");
                Assert.AreEqual(2, dme.Arguments.Count, title + " argument count");
                Assert.True(ReferenceEquals(dme.Arguments[0], b), title + " argument 0");
                Assert.True(ReferenceEquals(dme.Arguments[1], c), title + " argument 1");
            };

            Action<Expression, Type, string> assertIndex = (expr, type, title) =>
            {
                var dme = expr as DynamicIndexExpression;
                Assert.True(expr is DynamicExpression, title + " is DynamicExpression");
                Assert.True(dme != null, title + " is DynamicIndexExpression");
                Assert.AreEqual(ExpressionType.Dynamic, dme.NodeType, title + " node type");
                Assert.AreEqual(type, dme.Type, title + " type");
                Assert.AreEqual(DynamicExpressionType.Index, dme.DynamicType, title + " dynamic type");
                Assert.True(ReferenceEquals(dme.Expression, a), title + " expression");
                Assert.True(ReferenceEquals(dme.Argument, b), title + " argument");
            };

            assertMember(e1, typeof(object), "e1");
            assertMember(e2, typeof(int), "e2");
            assertInvocation(e3, typeof(object), "e3");
            assertInvocation(e4, typeof(object), "e4");
            assertInvocation(e5, typeof(int), "e5");
            assertInvocation(e6, typeof(int), "e6");
            assertIndex(e7, typeof(object), "e7");
            assertIndex(e8, typeof(int), "e8");

            Assert.False((object)Expression.Constant(0, typeof(int)) is DynamicExpression, "Constant is DynamicExpression");
            Assert.False((object)Expression.DynamicInvocation(a) is DynamicMemberExpression, "DynamicInvocation is DynamicMember");
            Assert.False((object)Expression.DynamicMember(a, "x") is DynamicInvocationExpression, "DynamicIndex is DynamicInvocation");
            Assert.False((object)Expression.DynamicInvocation(a) is DynamicIndexExpression, "DynamicInvocation is DynamicIndex");
        }
    }
}