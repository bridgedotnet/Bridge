    System.Collections.Generic.List$1.getElementType = function (type) {
        var interfaceType;

        if (System.String.startsWith(type.$$name, "System.Collections.Generic.IList")) {
            interfaceType = type;
        } else {
            var interfaces = Bridge.Reflection.getInterfaces(type);

            for (var j = 0; j < interfaces.length; j++) {
                if (System.String.startsWith(interfaces[j].$$name, "System.Collections.Generic.IList")) {
                    interfaceType = interfaces[j];

                    break;
                }
            }
        }

        return interfaceType ? Bridge.Reflection.getGenericArguments(interfaceType)[0] : null;
    };
