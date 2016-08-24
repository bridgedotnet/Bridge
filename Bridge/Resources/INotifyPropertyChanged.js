    Bridge.define("System.ComponentModel.INotifyPropertyChanged", {
        $kind: "interface",
    });

    Bridge.define("System.ComponentModel.PropertyChangedEventArgs", {
        constructor: function (propertyName, newValue, oldValue) {
            this.$initialize();
            this.propertyName = propertyName;
            this.newValue = newValue;
            this.oldValue = oldValue;
        }
    });
