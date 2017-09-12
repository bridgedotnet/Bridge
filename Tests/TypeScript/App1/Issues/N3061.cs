namespace TypeScript.Issues
{
    using System;

    public class N3061
    {
        public interface IVehicle : IEquatable<IVehicle>
        {
            double Horses
            {
                get; set;
            }
        }

        public abstract class Car : IVehicle, IEquatable<Car>
        {
            public double Horses
            {
                get; set;
            }

            public bool Equals(IVehicle vehicle)
            {
                return Equals((Car)vehicle);
            }

            public abstract bool Equals(Car car);
        }

        public class Truck : Car
        {
            public override bool Equals(Car car)
            {
                return this.Horses == car.Horses;
            }
        }

        public class Tractor : Car
        {
            public override bool Equals(Car car)
            {
                return this.Horses == car.Horses;
            }
        }
    }
}