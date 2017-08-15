namespace Test.BridgeIssues.N477
{
    public class App1
    {
        public void MethodA(int optionalNumber = 41)
        {
            var i = optionalNumber;
        }

        public void MethodA(string s, int optionalNumber = 42)
        {
            var i = optionalNumber;
        }

        public virtual void MethodC(int optionalNumber = 51)
        {
            var i = optionalNumber;
        }

        public virtual void MethodC(string s, int optionalNumber = 52)
        {
            var i = optionalNumber;
        }

        public void MethodB1()
        {
            this.MethodA();
        }

        public void MethodB2()
        {
            this.MethodA("Q");
        }

        public void MethodB3()
        {
            this.MethodA(3);
        }

        public void MethodB4()
        {
            this.MethodA("W", 4);
        }

        public void MethodC1()
        {
            this.MethodC();
        }

        public void MethodC2()
        {
            this.MethodC("E");
        }

        public void MethodC3()
        {
            this.MethodC(30);
        }

        public void MethodC4()
        {
            this.MethodC("R", 40);
        }
    }

    public class App2 : App1
    {
        public new void MethodA(int optionalNumber = 401)
        {
            var i = optionalNumber;
        }

        public override void MethodC(string s, int optionalNumber = 501)
        {
            var i = optionalNumber;
        }

        public void MethodD1()
        {
            this.MethodA();
        }

        public void MethodD2()
        {
            this.MethodA("T");
        }

        public void MethodD3()
        {
            this.MethodA(3000);
        }

        public void MethodD4()
        {
            this.MethodA("Y", 4000);
        }
    }
}
