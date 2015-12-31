using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using ClientTestLibrary.Linq;

namespace ClientTestLibrary
{
    [FileName("testRunner.js")]
    internal class RunTests
    {
        [Ready]
        public static void Main()
        {
            QUnit.Module("Inheritance, abstract, virtual and overloading");
            QUnit.Test("Overloading static methods", TestOverloadStaticMethods.TestStatic);
            QUnit.Test("Overloading instance methods", TestOverloadInstanceMethods.TestInstance);
            QUnit.Test("Inheritance A instance", TestInheritance.TestA);
            QUnit.Test("Inheritance B instance", TestInheritance.TestB);
            QUnit.Test("Inheritance B instance as A type", TestInheritance.TestAB);
            QUnit.Test("Abstract B instance", TestAbstractClass.TestB);
            QUnit.Test("Abstract C instance", TestAbstractClass.TestC);
            QUnit.Test("Abstract BC instance as A type", TestAbstractClass.TestBC);
            QUnit.Test("Virtual methods", TestVirtualMethods.TestB);

            QUnit.Module("Reference types");
            QUnit.Test("Instance constructors and methods", TestReferenceTypes.TestInstanceConstructorsAndMethods);
            QUnit.Test("Static constructors and methods", TestReferenceTypes.TestStaticConstructorsAndMethods);
            QUnit.Test("Method parameters", TestReferenceTypes.TestMethodParameters);

            QUnit.Module("Value types");
            QUnit.Test("Instance constructors and methods", TestValueTypes.TestInstanceConstructorsAndMethods);
            QUnit.Test("Static constructors and methods", TestValueTypes.TestStaticConstructorsAndMethods);

            QUnit.Module("Interfaces");
            QUnit.Test("Interface method and property", TestInterfaces.TestInterfaceMethodAndProperty);
            QUnit.Test("Explicit interface", TestInterfaces.TestExplicitInterfaceMethodAndProperty);
            QUnit.Test("Simple two interfaces", TestInterfaces.TestTwoInterfaces);

            QUnit.Module("Method parameters");
            QUnit.Test("Default and params", TestMethodParametersClass.Test);

            QUnit.Module("String");
            QUnit.Test("Common", TestStringFunctions.Strings);
            QUnit.Test("String Enumerable", TestStringFunctions.Enumerable);
            QUnit.Test("String #393", TestStringFunctions.IssueBridge393);
            QUnit.Test("StringBuilder", TestStringBuilderFunctions.StringBuilders);

            QUnit.Module("Enum");
            QUnit.Test("Parse", TestEnum.TestParse);
            QUnit.Test("ParseIgnoreCase", TestEnum.TestParseIgnoreCase);
            QUnit.Test("ToString", TestEnum.TestToString);
            QUnit.Test("GetValues", TestEnum.TestGetValues);
            QUnit.Test("CompareTo", TestEnum.TestCompareTo);
            QUnit.Test("Format", TestEnum.TestFormat);
            QUnit.Test("GetName", TestEnum.TestGetName);
            QUnit.Test("GetNames", TestEnum.TestGetNames);
            QUnit.Test("HasFlag", TestEnum.TestHasFlag);
            QUnit.Test("IsDefined", TestEnum.TestIsDefined);
            QUnit.Test("TryParse", TestEnum.TestTryParse);

            QUnit.Module("Date and time");
            QUnit.Test("Common", TestDateFunctions.DateTimes);
            QUnit.Test("#329", TestDateFunctions.Bridge329);
            QUnit.Test("#349", TestDateFunctions.Bridge349);

            QUnit.Module("Try/Catch");
            QUnit.Test("Try/Catch simpe", TestTryCatchBlocks.SimpleTryCatch);
            QUnit.Test("Try/Catch caught exceptions", TestTryCatchBlocks.CaughtExceptions);
            QUnit.Test("Try/Catch thrown exceptions", TestTryCatchBlocks.ThrownExceptions);
            QUnit.Test("#320", TestTryCatchBlocks.Bridge320);
            QUnit.Test("#343", TestTryCatchBlocks.Bridge343);
            QUnit.Test("Try/Catch/Finally simple", TestTryCatchFinallyBlocks.SimpleTryCatchFinally);
            QUnit.Test("Try/Catch/Finally caught exceptions", TestTryCatchFinallyBlocks.CaughtExceptions);
            QUnit.Test("Try/Catch/Finally thrown exceptions", TestTryCatchFinallyBlocks.ThrownExceptions);

            QUnit.Module("System");
            QUnit.Test("Version TestConstructors", TestVersion.TestConstructors);
            QUnit.Test("Version Equals and GetHashCode", TestVersion.TestEqualsGetHashCode);
            QUnit.Test("Version ToString", TestVersion.TestToString);
            QUnit.Test("Version Parse", TestVersion.TestParse);
            QUnit.Test("Version Operators", TestVersion.TestOperators);
            QUnit.Test("Version #499", TestVersion.TestIssue499);

            QUnit.Module("Issues");
            QUnit.Test("#169", TestBridgeIssues.N169);
            QUnit.Test("#240", TestBridgeIssues.N240);
            QUnit.Test("#264", TestBridgeIssues.N264);
            QUnit.Test("#266", TestBridgeIssues.N266);
            QUnit.Test("#272", TestBridgeIssues.N272);
            QUnit.Test("#273", TestBridgeIssues.N273);
            QUnit.Test("#277", TestBridgeIssues.N277);
            QUnit.Test("#294", TestBridgeIssues.N294);
            QUnit.Test("#304", TestBridgeIssues.N304);
            QUnit.Test("#305", TestBridgeIssues.N305);
            QUnit.Test("#306", TestBridgeIssues.N306);
            QUnit.Test("#335", TestBridgeIssues.N335);
            QUnit.Test("#336", TestBridgeIssues.N336);
            QUnit.Test("#337", TestBridgeIssues.N337);
            QUnit.Test("#338", TestBridgeIssues.N338);
            QUnit.Test("#339", TestBridgeIssues.N339);
            QUnit.Test("#340", TestBridgeIssues.N340);
            QUnit.Test("#341", TestBridgeIssues.N341);
            QUnit.Test("#342", TestBridgeIssues.N342);
            QUnit.Test("#377", TestBridgeIssues.N377);
            QUnit.Test("#381", Bridge381.TestUseCase);
            QUnit.Test("#383", TestBridgeIssues.N383);
            QUnit.Test("#395", TestBridgeIssues.N395);
            QUnit.Test("#406", TestBridgeIssues.N406);
            QUnit.Test("#407", TestBridgeIssues.N407);
            QUnit.Test("#409", TestBridgeIssues.N409);
            QUnit.Test("#410", TestBridgeIssues.N410);
            QUnit.Test("#418", TestBridgeIssues.N418);
            QUnit.Test("#422", TestBridgeIssues.N422);
            QUnit.Test("#428", TestBridgeIssues.N428);
            QUnit.Test("#435", TestBridgeIssues.N435);
            QUnit.Test("#436", TestBridgeIssues.N436);
            QUnit.Test("#438", TestBridgeIssues.N438);
            QUnit.Test("#439", TestBridgeIssues.N439);
            QUnit.Test("#442", TestBridgeIssues.N442);
            QUnit.Test("#460", TestBridgeIssues.N460);
            QUnit.Test("#467", TestBridgeIssues.N467);
            QUnit.Test("#469", TestBridgeIssues.N469);
            QUnit.Test("#470", TestBridgeIssues.N470);
            QUnit.Test("#472", Bridge472.Test);
            QUnit.Test("#479", Bridge479.TestUseCase);
            QUnit.Test("#485", Bridge485.TestUseCase);
            QUnit.Test("#495", Bridge495.TestUseCase);
            QUnit.Test("#501", Bridge501.TestUseCase);
            QUnit.Test("#502", Bridge502.TestUseCase);
            QUnit.Test("#503", Bridge503.TestUseCase);
            QUnit.Test("#508", Bridge508.TestUseCase);
            QUnit.Test("#514", Bridge514.TestUseCase);
            QUnit.Test("#514", Bridge514.TestRelated);
            QUnit.Test("#520", Bridge520.TestUseCase);
            QUnit.Test("#522", Bridge522.TestUseCase1);
            QUnit.Test("#522", Bridge522.TestUseCase2);
            QUnit.Test("#532", Bridge532.TestUseCase);
            QUnit.Test("#537", Bridge537.TestUseCase);
            QUnit.Test("#538", Bridge538.TestUseCase);
            QUnit.Test("#544", Bridge544.TestUseCase);
            QUnit.Test("#544", Bridge544.TestRelated);
            QUnit.Test("#546", Bridge546.TestUseCase);
            QUnit.Test("#546", Bridge546.TestRelated);
            QUnit.Test("#548", Bridge548.TestUseCase);
            QUnit.Test("#549", Bridge549.TestUseCase);
            QUnit.Test("#550", Bridge550.TestUseCase);
            QUnit.Test("#554", Bridge554.TestUseCase);
            QUnit.Test("#555", Bridge555.TestUseCase);
            QUnit.Test("#558", Bridge558.TestUseCase);
            QUnit.Test("#559", Bridge559.TestUseCase1);
            QUnit.Test("#559", Bridge559.TestUseCase2);
            QUnit.Test("#559", Bridge559.TestUseCase3);
            QUnit.Test("#563", Bridge563.TesForeach);
            QUnit.Test("#563", Bridge563.TesFor);
            QUnit.Test("#565", Bridge565.TestUseCase);
            QUnit.Test("#566", Bridge566.TestUseCase);
            QUnit.Test("#572", Bridge572.TestUseCase);
            QUnit.Test("#577", Bridge577.TestUseCase);
            QUnit.Test("#578", Bridge578.TestUseCase);
            QUnit.Test("#580", Bridge580.TestUseCase);
            QUnit.Test("#582", Bridge582.TestAddTicks);
            QUnit.Test("#582", Bridge582.TestAddTimeSpan);
            QUnit.Test("#582", Bridge582.TestSubtractTimeSpan);
            QUnit.Test("#582", Bridge582.TestTimeOfDay);
            QUnit.Test("#582", Bridge582.TestTicks);
            QUnit.Test("#583", Bridge583.TestUseCase);
            QUnit.Test("#586", Bridge586.TestUseCase);
            QUnit.Test("#588", Bridge588.TestUseCase);
            QUnit.Test("#588", Bridge588C.TestUseCase);
            QUnit.Test("#592", Bridge592.TestUseCase);
            QUnit.Test("#595", Bridge595.TestUseCase);
            QUnit.Test("#597", Bridge597.TestUseCase);
            QUnit.Test("#603", Bridge603.TestUseCase);
            QUnit.Test("#603", Bridge603.TestRelated);
            QUnit.Test("#606", Bridge606.TestUseCase);
            QUnit.Test("#607", Bridge607.TestUseCase);
            QUnit.Test("#608", Bridge608.TestUseCase);
            QUnit.Test("#615", Bridge615.TestUseCase);
            QUnit.Test("#623", Bridge623.TestUseCase);
            QUnit.Test("#625", Bridge625.TestUseCase);
            QUnit.Test("#634", Bridge634.TestUseCase1);
            QUnit.Test("#634", Bridge634.TestUseCase2);
            QUnit.Test("#634", Bridge634.TestUseCaseFor658);
            QUnit.Test("#635", Bridge635.TestUseCase);
            QUnit.Test("#647", Bridge647.TestUseCase);
            QUnit.Test("#648", Bridge648.TestUseCase);
            QUnit.Test("#652", Bridge652.TestUseCase);
            QUnit.Test("#655", Bridge655.TestUseCase);
            QUnit.Test("#660", Bridge660.TestUseCase);
            QUnit.Test("#661", Bridge661.TestUseCase);
            QUnit.Test("#664", Bridge664.TestUseCase);
            QUnit.Test("#666", Bridge666.TestUseCase);
            QUnit.Test("#671", Bridge671.TestUseCase);
            QUnit.Test("#674", Bridge674.TestUseCase);
            QUnit.Test("#675", Bridge675.TestUseCase);
            QUnit.Test("#687", Bridge687.TestUseCase);
            QUnit.Test("#689", Bridge689.TestUseCase);
            QUnit.Test("#690", Bridge690.TestUseCaseForInstance);
            QUnit.Test("#690", Bridge690.TestUseCaseForStatic);
            QUnit.Test("#691", Bridge691.TestUseCase);
            QUnit.Test("#693", Bridge693.TestUseCase);
            QUnit.Test("#694", Bridge694.TestUseCase);
            QUnit.Test("#696", Bridge696.TestUseCase);
            QUnit.Test("#699", Bridge699.TestUseCase);
            QUnit.Test("#708", Bridge708.TestUseCase);
            QUnit.Test("#721", Bridge721.TestUseCase);
            QUnit.Test("#722", Bridge722.TestUseCase);
            QUnit.Test("#726", Bridge726.TestUseCase);
            QUnit.Test("#732", Bridge732.TestUseCase);
            QUnit.Test("#733", Bridge733.TestUseCase);
            QUnit.Test("#751", Bridge751.TestUseCase);
            QUnit.Test("#758", Bridge758.TestUseCase);
            QUnit.Test("#760", Bridge760.TestUseCase);
            QUnit.Test("#762", Bridge762.TestUseCase);
            QUnit.Test("#786", Bridge786.TestUseCase);
            QUnit.Test("#788", Bridge788.TestUseCase);
            QUnit.Test("#796", Bridge796.TestUseCase);
            QUnit.Module("LINQ");
            QUnit.Test("Aggregate operators", TestLinqAggregateOperators.Test);
            QUnit.Test("Aggregate operators", TestLinqAggregateOperators.Bridge315);
            QUnit.Test("Conversion operators", TestLinqConversionOperators.Test);
            QUnit.Test("Element operators", TestLinqElementOperators.Test);
            QUnit.Test("Generation operators", TestLinqGenerationOperators.Test);
            QUnit.Test("Join operators", TestLinqJoinOperators.Test);
            QUnit.Test("Grouping operators", TestLinqGroupingOperators.Test);
            QUnit.Test("Complex grouping operators.", TestLinqGroupingOperators.TestComplexGrouping);
            QUnit.Test("Anagram grouping operators.", TestLinqGroupingOperators.TestAnagrams);
            QUnit.Test("Miscellaneous operators", TestLinqMiscellaneousOperators.Test);
            QUnit.Test("Ordering operators", TestLinqOrderingOperators.Test);
            QUnit.Test("Partitioning operators", TestLinqPartitioningOperators.Test);
            QUnit.Test("Projection operators", TestLinqProjectionOperators.Test);
            QUnit.Test("Quantifiers", TestLinqQuantifiers.Test);
            QUnit.Test("Query execution", TestLinqQueryExecution.Test);
            QUnit.Test("Restriction operators", TestLinqRestrictionOperators.Test);
            QUnit.Test("Set operators", TestLinqSetOperators.Test);
        }
    }
}
