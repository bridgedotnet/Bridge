//#1472
namespace Test.BridgeIssues.N1472
{
    using Bridge;

    [External]
    public class ClassA
    {
        [Template("DoSomethingTemplate({againMe}, {againMe})")]
        public static extern void DoSomething(object againMe);
    }

    public class UseDoSomething
    {
        public int Property
        {
            get; set;
        }

        public object Method()
        {
            return 2;
        }

        int Field;

        public void UseWithSimpleCall()
        {
            // The method checks that local variales used as a parameter in a method with multiple keys in a [Template]
            // will NOT be wrapped with temp variable
            // DoSomethingTemplate(localVar, localVar);
            var localVar = new object();
            ClassA.DoSomething(localVar);
        }

        public void UseWithField()
        {
            // The method checks that a field used as a parameter in a method with multiple keys in a [Template]
            // will NOT be wrapped with temp variable
            // DoSomethingTemplate(this.field, this.field);
            ClassA.DoSomething(this.Field);
        }

        public void UseWithProperty()
        {
            // The method checks that a property used as a parameter in a method with multiple keys in a [Template]
            // will BE wrapped with temp variable
            // ($t=this.getProperty(), DoSomethingTemplate($t, $t));
            ClassA.DoSomething(this.Property);
        }

        public void UseWithMethod()
        {
            // The method checks that a method used as a parameter in a method with multiple keys in a [Template]
            // will BE wrapped with temp variable
            // ($t=this.method(), DoSomethingTemplate($t, $t));
            ClassA.DoSomething(this.Method());
        }
    }
}
