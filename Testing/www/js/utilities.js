/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.Utilities.BrowserHelper', {
    statics: {
        isPhantomJs: function () {
            return Bridge.String.contains(navigator.userAgent,"PhantomJS");
        },
        getBrowserInfo: function () {
            var userAgent = navigator.userAgent;
            var appVersion = navigator.appVersion;
            var product = navigator.product;
            var appName = navigator.appName;
            var appCodeName = navigator.appCodeName;

            return Bridge.String.format("userAgent:{0} appVersion:{1} product:{2} appName:{3} appCodeName:{4}", userAgent, appVersion, product, appName, appCodeName);
        }
    }
});

Bridge.define('ClientTestLibrary.Utilities.Group', {
    statics: {
        getGroups: function () {
            var groups = new Bridge.List$1(ClientTestLibrary.Utilities.Group)();
            groups.add(Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "A",
                setLimit: 1000
            } ));
            groups.add(Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "B",
                setLimit: 400
            } ));
            groups.add(Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "C",
                setLimit: 800
            } ));
            groups.add(Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "D",
                setLimit: 200
            } ));

            return groups;
        }
    },
    config: {
        properties: {
            Name: null,
            Limit: 0
        }
    }
});

Bridge.define('ClientTestLibrary.Utilities.Person', {
    statics: {
        getPersons: function () {
            var persons = new Bridge.List$1(ClientTestLibrary.Utilities.Person)();

            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 1,
                setName: "Frank",
                setCity: "Edmonton",
                setCount: 300,
                setGroup: "A"
            } ));
            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 2,
                setName: "Zeppa",
                setCity: "Tokyo",
                setCount: 100,
                setGroup: "C"
            } ));
            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 3,
                setName: "John",
                setCity: "Lisbon",
                setCount: 700,
                setGroup: "B"
            } ));
            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 4,
                setName: "Billy",
                setCity: "Paris",
                setCount: 500,
                setGroup: "C"
            } ));
            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 5,
                setName: "Dora",
                setCity: "Budapest",
                setCount: 50,
                setGroup: "B"
            } ));
            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 6,
                setName: "Ian",
                setCity: "Rome",
                setCount: 550,
                setGroup: "B"
            } ));
            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 7,
                setName: "Mary",
                setCity: "Dortmund",
                setCount: 700,
                setGroup: "B"
            } ));
            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 8,
                setName: "Nemo",
                setCity: "Ocean",
                setCount: 3000,
                setGroup: null
            } ));

            return persons;
        }
    },
    config: {
        properties: {
            ID: 0,
            Name: null,
            City: null,
            Count: 0,
            Group: null
        }
    }
});

Bridge.define('ClientTestLibrary.Utilities.TypeHelper', {
    statics: {
        getTypeName: function (o) {
            return Bridge.getTypeName(o);
            // return Script.Get<string>("o.__proto__.$$name");
        }
    }
});