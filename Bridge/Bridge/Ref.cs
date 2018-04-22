using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Bridge
{
    public class Ref<T>
    {
        private Func<T> getter;
        private Action<T> setter;

        public T Value
        {
            get
            {
                return getter();
            }
            set
            {
                setter(value);
            }
        }

        private T v
        {
            get
            {
                return Value;
            }
            set
            {
                Value = value;
            }
        }

        public Ref(Func<T> getter, Action<T> setter)
        {
            this.getter = getter;
            this.setter = setter;
        }

        public static implicit operator T(Ref<T> reference)
        {
            return reference.Value;
        }

        public override string ToString()
        {
            return Value.ToString();
        }

        [Name("valueOf")]
        public override object ValueOf()
        {
            return Value;
        }
    }
}
