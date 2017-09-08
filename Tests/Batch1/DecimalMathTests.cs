using Bridge.Test.NUnit;
using Bridge.ClientTestHelper;

using System;
using System.Text;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_DECIMAL_MATH)]
    [TestFixture]
    public class DecimalMathTests
    {
        public static bool UseLogging = false;
        public static bool JSMode = true;

        private const bool NoDotNetDiff = false;
        private const bool HasDotNetDiff = true;

        private static readonly decimal MaxValue = Decimal.MaxValue;
        private static readonly decimal MinValue = Decimal.MinValue;

        #region Common Inputs

        private static object[,] InputAdd = new object[,]
            {
                { NoDotNetDiff, null, 0m, 47m, 47m },
                { NoDotNetDiff, null, 0m, -47m, -47m },
                { NoDotNetDiff, null, 0m, -47m, -47m },
                { NoDotNetDiff, null, 0m, 47m, 47m },
                { NoDotNetDiff, null, 443534569034876.33478923476m, 47m, 443534569034923.33478923476m },
                { NoDotNetDiff, null, 443534569034876.12345678901235m, 47.000000000001m, 443534569034923.12345678901335m },
                { NoDotNetDiff, null, 443534569034876.12345678901235m, 9436905724146.297872340425532m, 452971474759022.42132912943788m },
                { NoDotNetDiff, null, 4435345690348766678656790453m, 17m, 4435345690348766678656790470m },
                { NoDotNetDiff, null, 17.2345324m, 4435345690348766678656790453m, 4435345690348766678656790470.2m },
                { HasDotNetDiff, "0.00000000000005", -943456769034871.4234m, 47.00000000003455m, -943456769034824.4233999999654m },
                { NoDotNetDiff, null, 6999545690348766678656790453m, -13m, 6999545690348766678656790440m },
                { NoDotNetDiff, null, 11m, -6435345690348766678656790453m, -6435345690348766678656790442m },
                { NoDotNetDiff, null, DecimalMathTests.MaxValue, DecimalMathTests.MinValue, 0m },
                { NoDotNetDiff, null, decimal.MinusOne, DecimalMathTests.MaxValue, 79228162514264337593543950334m },
                { NoDotNetDiff, null, DecimalMathTests.MaxValue, decimal.MinusOne, 79228162514264337593543950334m }
            };

        private static object[,] InputSubtract = new object[,]
            {
                { NoDotNetDiff, null, 0m, 47m, -47m },
                { NoDotNetDiff, null, 0m, -47m, 47m },
                { NoDotNetDiff, null, 0m, -47m, 47m },
                { NoDotNetDiff, null, 0m, 47m, -47m },
                { NoDotNetDiff, null, 443534569034876.33478923476m, 47m, 443534569034829.33478923476m },
                { NoDotNetDiff, null, 443534569034876.12345678901235m, 47.000000000001m, 443534569034829.12345678901135m },
                { NoDotNetDiff, null, 443534569034876.12345678901235m, 9436905724146.297872340425532m, 434097663310729.82558444858682m },
                { NoDotNetDiff, null, 4435345690348766678656790453m, 17m, 4435345690348766678656790436m },
                { NoDotNetDiff, null, 17.2345324m, 4435345690348766678656790453m, -4435345690348766678656790435.8m },
                { HasDotNetDiff, -0.00000000000005m, -943456769034871.4234m, 47.00000000003455m, -943456769034918.4234000000346m },
                { NoDotNetDiff, null, 6999545690348766678656790453m, -13m, 6999545690348766678656790466m },
                { NoDotNetDiff, null, 11m, -6435345690348766678656790453m, 6435345690348766678656790464m },
                { NoDotNetDiff, null, DecimalMathTests.MaxValue, DecimalMathTests.MaxValue, 0m },
                { NoDotNetDiff, null, decimal.MinusOne, DecimalMathTests.MinValue, 79228162514264337593543950334m },
                { NoDotNetDiff, null, DecimalMathTests.MaxValue, decimal.One, 79228162514264337593543950334m },
                { NoDotNetDiff, null, DecimalMathTests.MinValue, decimal.MinusOne, -79228162514264337593543950334m }
            };

        private static object[,] InputMultiply = new object[,]
            {
                { NoDotNetDiff, null, 0m, 47m, 0m },
                { NoDotNetDiff, null, 0m, -47m, 0m },
                { NoDotNetDiff, null, 0m, -47m, 0m },
                { NoDotNetDiff, null, 0m, 47m, 0m },
                { NoDotNetDiff, null, 0m, 0m, 0m },
                { NoDotNetDiff, null, 443534569034876.33478923476m, 0.47m, 208461247446391.8773509403372m },
                { NoDotNetDiff, null, 43534569034876.12345678901235m, 47.000000000001m, 2046124744639221.3370381184566m },
                { NoDotNetDiff, null, 44.353456903487612345678901235m, 9436905724146.297872340425532m, 418559391338198.38088395328596m },
                { NoDotNetDiff, null, 4435345690348766678656790453m, 0.17m, 754008767359290335371654377.01m },
                { NoDotNetDiff, null, 17.2345324m, 443534569034876667865679045.37m, 7644110900551618662335084355.4m},
                { NoDotNetDiff, null, -943456769034871.4234m, 0.4700000000003455m, -443424681446715.53331170154808m},
                { HasDotNetDiff, -0.01m, 6999545690348766678656790453m, -0.13m, -909940939745339668225382758.9m },
                { HasDotNetDiff, 0.0001m, 0.11m, -64353456903487666786567904.535m, -7078880259383643346522469.4988m },
                { NoDotNetDiff, null, DecimalMathTests.MaxValue, decimal.MinusOne, DecimalMathTests.MinValue },
                { NoDotNetDiff, null, decimal.MinusOne, DecimalMathTests.MinValue, DecimalMathTests.MaxValue },
                { NoDotNetDiff, null, DecimalMathTests.MaxValue, decimal.One, DecimalMathTests.MaxValue },
                { NoDotNetDiff, null, DecimalMathTests.MinValue, decimal.MinusOne, DecimalMathTests.MaxValue }
            };

        private static object[,] InputDivide = new object[,]
            {
                { NoDotNetDiff, null, 0m, 47m, 0m },
                { NoDotNetDiff, null, 0m, -47m, 0m },
                { NoDotNetDiff, null, 0m, -47m, 0m },
                { NoDotNetDiff, null, 0m, 47m, 0m },
                { NoDotNetDiff, null, decimal.One, 2m, 0.5m },
                { NoDotNetDiff, null, 3m, 4m, 0.75m },
                { HasDotNetDiff, "-0.00000000000000000000000000003", 5m, 6m, 0.8333333333333333333333333333m },
                { NoDotNetDiff, null, 7m, 8m, 0.875m },
                { HasDotNetDiff, "-0.0000000000000005", 443534569034876.33478923476m, 47m, 9436905724146.304995515633191m },
                { HasDotNetDiff, "0.0000000000000002", 443534569034876.12345678901235m, 47.000000000001m, 9436905724146.099713852443963m },
                { NoDotNetDiff, null, 443534569034876.12345678901235m, 9436905724146.297872340425532m, 47.000000000000013082337857467m },
                { NoDotNetDiff, null, 4435345690348766678656790453m, 17m, 260902687667574510509222967.82m },
                { HasDotNetDiff, "0.0000000000000000000000000000142752779107982686908967873", 17.2345324m, 4435345690348766678656790453m, 0.0000000000000000000000000039m },
                { NoDotNetDiff, null, -943456769034871.4234m, 47.00000000003455m, -20073548277322.933666106776439m },
                { NoDotNetDiff, null, 6999545690348766678656790453m, -13m, -538426591565289744512060804.08m },
                { HasDotNetDiff, "0.0000000000000000000000000000093098847039326132480985641", 11m, -6435345690348766678656790453m, -0.0000000000000000000000000017m },
                { NoDotNetDiff, null, DecimalMathTests.MaxValue, DecimalMathTests.MinValue, decimal.MinusOne },
                { HasDotNetDiff, "-0.000000000000000000000000000012621774483536188886587657045", decimal.MinusOne, DecimalMathTests.MinValue, 0m },
                { NoDotNetDiff, null, DecimalMathTests.MaxValue, decimal.MinusOne, DecimalMathTests.MinValue },
                { NoDotNetDiff, null, DecimalMathTests.MinValue, decimal.MinusOne, DecimalMathTests.MaxValue }
                // TODO Exceptions{ Difference, null, DecimalTest.MaxValue, 0.0000000001m, -1m },
            };

        private static object[,] InputRemainder = new object[,]
            {
                { NoDotNetDiff, null, 0m, 47m, 0m },
                { NoDotNetDiff, null, 0m, -47m, 0m },
                { NoDotNetDiff, null, 0m, -47m, 0m },
                { NoDotNetDiff, null, 0m, 47m, 0m },
                { NoDotNetDiff, null, 443534569034876.33478923476m, 47m, 14.33478923476m },
                { NoDotNetDiff, null, 443534569034876.12345678901235m, 47.000000000001m, 4.68655106486635m },
                { HasDotNetDiff, 0.000000000000004m, 443534569034876.12345678901235m, 9436905724146.297872340425532m, 0.12345678901235m },
                { NoDotNetDiff, null, 4435345690348766678656790453m, 17m, 14m },
                { NoDotNetDiff, null, 17.2345324m, 4435345690348766678656790453m, 17.2345324m },
                { HasDotNetDiff, 0.0000000000001m, -943456769034871.4234m, 47.00000000003455m, -43.8823070185248m },
                { NoDotNetDiff, null, 6999545690348766678656790453m, -13m, decimal.One },
                { NoDotNetDiff, null, 11m, -6435345690348766678656790453m, 11m },
                { NoDotNetDiff, null, DecimalMathTests.MaxValue, DecimalMathTests.MaxValue, 0m },
                { NoDotNetDiff, null, decimal.MinusOne, DecimalMathTests.MinValue, decimal.MinusOne },
                { NoDotNetDiff, null, DecimalMathTests.MaxValue, decimal.One, 0m },
                { NoDotNetDiff, null, DecimalMathTests.MinValue, decimal.MinusOne, 0m }
            };

        #endregion Common Inputs

        #region Tests

        [Test]
        public static void TestSubtractOperator()
        {
            DecimalMathTests.RunOperationSet(InputSubtract, "SubtractOperator", (a, b) => a - b);
        }

        [Test]
        public static void TestRemainderOperator()
        {
            DecimalMathTests.RunOperationSet(InputRemainder, "RemainderOperator", (a, b) => a % b);
        }

        [Test]
        public static void TestMultiplyOperator()
        {
            DecimalMathTests.RunOperationSet(InputMultiply, "MultiplyOperator", (a, b) => a * b);
        }

        [Test]
        public static void TestDivideOperator()
        {
            DecimalMathTests.RunOperationSet(InputDivide, "DivideOperator", (a, b) => a / b);
        }

        [Test]
        public static void TestAddOperator()
        {
            DecimalMathTests.RunOperationSet(InputAdd, "AddOperator", (a, b) => a + b);
        }

        [Test]
        public static void TestAddMethod()
        {
            DecimalMathTests.RunOperationSet(InputAdd, "AddMethod", (a, b) => Decimal.Add(a, b));
        }

        [Test]
        public static void TestDivideMethod()
        {
            DecimalMathTests.RunOperationSet(InputDivide, "DivideMethod", (a, b) => decimal.Divide(a, b));
        }

        [Test]
        public static void TestMultiplyMethod()
        {
            DecimalMathTests.RunOperationSet(InputMultiply, "MiltiplyMethod", (a, b) => decimal.Multiply(a, b));
        }

        [Test]
        public static void TestRemainderMethod()
        {
            DecimalMathTests.RunOperationSet(InputRemainder, "RemainderMethod", (a, b) => decimal.Remainder(a, b));
        }

        [Test]
        public static void TestSubtractMethod()
        {
            DecimalMathTests.RunOperationSet(InputSubtract, "SubtractMethod", (a, b) => decimal.Subtract(a, b));
        }

        [Test]
        public static void TestCeilingMethod()
        {
            object[,] input = new object[,]
            {
                { NoDotNetDiff, null, 0m, 0m },
                { NoDotNetDiff, null, -443534569034876.12345678901235m, -443534569034876m },
                { NoDotNetDiff, null, -443534569034876.82345678901235m, -443534569034876m },
                { NoDotNetDiff, null, 443534569034876.12345678901235m, 443534569034877m },
                { NoDotNetDiff, null, 443534569034876.62345678901235m, 443534569034877m },
                { NoDotNetDiff, null, 443534569034876.49999999999999m, 443534569034877m },
                { NoDotNetDiff, null, 443534569034876.50000000000001m, 443534569034877m },
                { NoDotNetDiff, null, 443534569034876.99999999999999m, 443534569034877m },
                { NoDotNetDiff, null, 4435345690348766678656790453m, 4435345690348766678656790453m },
                { NoDotNetDiff, null, 17.9345324m, 18m },
                { NoDotNetDiff, null, -0.9434567690348714234m, 0m },
                { NoDotNetDiff, null, 6999545690348766678656790453m, 6999545690348766678656790453m },
                { NoDotNetDiff, null, DecimalMathTests.MaxValue, DecimalMathTests.MaxValue },
                { NoDotNetDiff, null, decimal.MinusOne, decimal.MinusOne },
                { NoDotNetDiff, null, DecimalMathTests.MinValue, DecimalMathTests.MinValue }
            };

            DecimalMathTests.RunOperationSet(input, "CeilingMethod", (a) => decimal.Ceiling(a));
        }

        [Test]
        public static void TestFloorMethod()
        {
            object[,] input = new object[,]
            {
                { NoDotNetDiff, null, 0m, 0m },
                { NoDotNetDiff, null, -443534569034876.12345678901235m, -443534569034877m },
                { NoDotNetDiff, null, -443534569034876.82345678901235m, -443534569034877m },
                { NoDotNetDiff, null, 443534569034876.12345678901235m, 443534569034876m },
                { NoDotNetDiff, null, 443534569034876.62345678901235m, 443534569034876m },
                { NoDotNetDiff, null, 443534569034876.49999999999999m, 443534569034876m },
                { NoDotNetDiff, null, 443534569034876.50000000000001m, 443534569034876m },
                { NoDotNetDiff, null, 443534569034876.99999999999999m, 443534569034876m },
                { NoDotNetDiff, null, 4435345690348766678656790453m, 4435345690348766678656790453m },
                { NoDotNetDiff, null, 17.9345324m, 17m },
                { NoDotNetDiff, null, -0.9434567690348714234m, decimal.MinusOne },
                { NoDotNetDiff, null, 6999545690348766678656790453m, 6999545690348766678656790453m },
                { NoDotNetDiff, null, DecimalMathTests.MaxValue, DecimalMathTests.MaxValue },
                { NoDotNetDiff, null, decimal.MinusOne, decimal.MinusOne },
                { NoDotNetDiff, null, DecimalMathTests.MinValue, DecimalMathTests.MinValue }
            };

            DecimalMathTests.RunOperationSet(input, "FloorMethod", (a) => decimal.Floor(a));
        }

        #endregion Tests

        #region TestHelpers

        public static void RunOperationSet(object[,] input, string name, Func<decimal, decimal, object> operation)
        {
            var logger = new Logger();
            logger.OnLogBegin(name);

            for (int i = input.GetLowerBound(0); i <= input.GetUpperBound(0); i++)
            {
                var lowerBound = input.GetLowerBound(1);
                decimal? dotNetDiff = ParseDotNetDiff(input, i, lowerBound);

                var a = input[i, lowerBound + 2];
                var b = input[i, lowerBound + 3];
                var expected = input[i, lowerBound + 4];
                var result = RunOperation((decimal)a, (decimal)b, operation);

                logger.OnLog(dotNetDiff, a, b, result);

                var diff = GetDifference(expected, result);
                var diffReport = GetDifferenceReport(diff);

                AssertDecimal(dotNetDiff, expected, result, diffReport, string.Format("{0} for row {1} with operand {2} and {3} .NetDiff {4}{5}", name, i, a, b, dotNetDiff, diffReport));
            }

            logger.OnLogEnd();
        }

        public static void RunOperationSet(object[,] input, string name, Func<decimal, object> operation)
        {
            var logger = new Logger();
            logger.OnLogBegin(name);

            for (int i = input.GetLowerBound(0); i <= input.GetUpperBound(0); i++)
            {
                var lowerBound = input.GetLowerBound(1);
                decimal? dotNetDiff = ParseDotNetDiff(input, i, lowerBound);
                var a = input[i, lowerBound + 2];
                var expected = input[i, lowerBound + 3];
                var result = RunOperation((decimal)a, operation);

                logger.OnLog(dotNetDiff, a, result);

                var diff = GetDifference(expected, result);
                var diffReport = GetDifferenceReport(diff);

                AssertDecimal(dotNetDiff, expected, result, diffReport, string.Format("{0} for row {1} with operand {2} .NetDiff {3}{4}", name, i, a, dotNetDiff, diffReport));
            }

            logger.OnLogEnd();
        }

        private static decimal? ParseDotNetDiff(object[,] input, int i, int lowerBound)
        {
            var o = input[i, lowerBound + 1];
            if (o == null)
                return null;

            if (o is string)
                return decimal.Parse(o.ToString());

            decimal? dotNetDiff = (decimal?)input[i, lowerBound + 1];
            return dotNetDiff;
        }

        private static void AssertDecimal(decimal? dotNetDiff, object expected, object result, string differenceReport, string message)
        {
            if (JSMode)
            {
                NumberHelper.AssertDecimal((decimal)expected - (dotNetDiff.HasValue ? dotNetDiff.Value : 0m), result, message);
            }
            else
            {
                NumberHelper.AssertDecimal(expected, result, message);
            }
        }

        private static string GetDifferenceReport(decimal difference)
        {
            var differenceReport = difference != 0m ? "; result diff is " + difference.ToString() : string.Empty;
            return differenceReport;
        }

        private static decimal GetDifference(object expected, object result)
        {
            decimal difference;
            if ((result is decimal || result is int) && (expected is decimal || expected is int))
            {
                difference = (decimal)expected - (decimal)result;
            }
            else
            {
                difference = 0m;
            }

            return difference;
        }

        private static object RunOperation(decimal a, decimal b, Func<decimal, decimal, object> operation)
        {
            return operation(a, b);
        }

        private static object RunOperation(decimal a, Func<decimal, object> operation)
        {
            return operation(a);
        }

        private class Logger
        {
            public StringBuilder Text { get; set; }

            public Logger()
            {
                if (UseLogging)
                    this.Text = new StringBuilder();
            }

            public void OnLogBegin(string name)
            {
                if (!UseLogging)
                    return;

                this.Text.AppendLine("//------------------------------" + name + "------------------------------");
                this.Text.AppendLine("object[,] input = new object[,]");
                this.Text.Append("{");
            }

            public void OnLog(params object[] parameters)
            {
                if (!UseLogging)
                    return;

                var sb = new StringBuilder("{{");
                for (int i = 0; i < parameters.Length + 1; i++)
                {
                    sb.Append(" {");
                    sb.Append(i);
                    sb.Append("},");
                }
                sb.Remove(sb.Length - 1, 1);
                sb.Append(" }},");

                string format = sb.ToString();

                this.Text.AppendLine();
                //Fix
                //this.Text.AppendFormat(format, ConvertParameters(parameters));
                var convertedParams = ConvertParameters(parameters);
                if (convertedParams.Length == 4)
                    this.Text.AppendFormat(format, convertedParams[0], convertedParams[1], convertedParams[2], convertedParams[3]);
                if (convertedParams.Length == 5)
                    this.Text.AppendFormat(format, convertedParams[0], convertedParams[1], convertedParams[2], convertedParams[3], convertedParams[4]);
            }

            public void OnLogEnd()
            {
                if (!UseLogging)
                    return;

                var sb = this.Text;

                sb.Remove(sb.Length - 1, 1);
                sb.AppendLine();
                sb.Append("};");

                Console.WriteLine(sb.ToString());
            }

            private static object[] ConvertParameters(params object[] parameters)
            {
                var result = new object[parameters.Length + 1];

                for (int i = 0; i < parameters.Length; i++)
                {
                    if (i == 0)
                    {
                        var d = (decimal?)parameters[0];
                        result[0] = d.HasValue ? "HasDotNetDiff" : "NoDotNetDiff";
                        result[1] = d.HasValue ? d.ToString() + "m" : "null";

                        continue;
                    }

                    var o = parameters[i];
                    var j = i + 1;
                    if (o is decimal)
                    {
                        var d = (decimal)o;
                        if (d.Equals(DecimalMathTests.MaxValue))
                            result[j] = "DecimalMathTests.MaxValue";
                        else if (d.Equals(DecimalMathTests.MinValue))
                            result[j] = "DecimalMathTests.MinValue";
                        else if (d.Equals(decimal.MinusOne))
                            result[j] = "decimal.MinusOne";
                        else if (d.Equals(decimal.One))
                            result[j] = "decimal.One";
                        else
                            result[j] = d.ToString() + "m";
                    }
                    else
                    {
                        result[j] = o;
                    }
                }

                return result;
            }
        }

        #endregion TestHelpers
    }
}