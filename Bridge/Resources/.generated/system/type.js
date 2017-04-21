    Bridge.define("System.Type", {
        props: {
            prototype: null,
            isPrimitive: {
                get: function () {
                    return $asm.$.System.Type.f1(new (System.Collections.Generic.List$1(System.Type))()).contains(this);

                    // System.Decimal(decimal) ??
                    // System.Int64
                    // System.UInt64
                    // System.Double
                    // System.Single
                    // System.Byte
                    // System.SByte
                    // System.Int16
                    // System.UInt16
                    // System.Int32
                    // System.UInt32
                    // Boolean
                    // System.Char
                }
            }
        }
    });

    Bridge.ns("System.Type", $asm.$);

    Bridge.apply($asm.$.System.Type, {
        f1: function (_o8) {
            _o8.add(System.Boolean);
            _o8.add(System.Byte);
            _o8.add(System.SByte);
            _o8.add(System.Int16);
            _o8.add(System.UInt16);
            _o8.add(System.Int32);
            _o8.add(System.UInt32);
            _o8.add(System.Int64);
            _o8.add(System.UInt64);
            _o8.add(System.Char);
            _o8.add(System.Double);
            _o8.add(System.Single);
            return _o8;
        }
    });
