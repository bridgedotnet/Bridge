/// <reference path="..\..\Runner\resources\qunit\qunit.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\bridge.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\generics.d.ts" />
QUnit.module("TypeScript - Generics");
QUnit.test("Check predefined generic instances", function (assert) {
    var g1 = Generics.implementation.simpleGenericInt;
    QUnit.deepEqual(g1.getSomething(5), 5, "simpleGenericInt");

    var g2 = Generics.implementation.simpleDoubleGenericIntString;
    QUnit.deepEqual(g2.getSomething(5), 5, "simpleDoubleGenericIntString - int");
    QUnit.deepEqual(g2.getSomethingMore("25"), "25", "simpleDoubleGenericIntString - string");

    var g3 = Generics.implementation.genericINamedEntity;
    var i3 = new Generics.NamedEntity();
    i3.setName$1("Dove");
    var r3 = g3.getSomething(i3);
    QUnit.deepEqual(r3, i3, "genericINamedEntity");
    QUnit.deepEqual(r3 instanceof Generics.INamedEntity, true, "genericINamedEntity instance of INameEntity");
    QUnit.deepEqual(r3 instanceof Generics.NamedEntity, true, "genericINamedEntity instance of NameEntity");

    var g4 = Generics.implementation.genericNamedEntity;
    var i4 = new Generics.NamedEntity();
    i4.setName$1("Eagle");
    var r4 = g4.getSomething(i4);
    QUnit.deepEqual(r4, i4, "genericNamedEntity");
    QUnit.deepEqual(r4 instanceof Generics.INamedEntity, true, "genericNamedEntity instance of INameEntity");
    QUnit.deepEqual(r4 instanceof Generics.NamedEntity, true, "genericNamedEntity instance of NameEntity");

    var g5 = Generics.implementation.genericClassObject;
    var i5 = "class object";
    var r5 = g5.getSomething(i5);
    QUnit.deepEqual(r5, i5, "genericClassObject");

    // TODO #296
    //QUnit.deepEqual(r5 instanceof Object, true, "genericClassObject instance of Object");
    var g6 = Generics.implementation.genericClassNamedEntity;
    var i6 = new Generics.NamedEntity();
    i6.setName$1("Penguin");
    var r6 = g6.getSomething(i6);
    QUnit.deepEqual(r6, i6, "genericClassNamedEntity");
    QUnit.deepEqual(r6 instanceof Generics.INamedEntity, true, "genericClassNamedEntity instance of INameEntity");
    QUnit.deepEqual(r6 instanceof Generics.NamedEntity, true, "genericClassNamedEntity instance of NameEntity");

    var g7 = Generics.implementation.genericNew;
    var i7 = new Generics.NewClass();
    i7.data = 700;
    var r7 = g7.getSomething(i7);
    QUnit.deepEqual(r7, i7, "genericNew");
    QUnit.deepEqual(r7 instanceof Generics.NewClass, true, "genericNew instance of NewClass");

    var g8 = Generics.implementation.genericNewAndClass;
    var i8 = new Generics.NewClass();
    i8.data = 800;
    var r8 = g8.getSomething(i8);
    QUnit.deepEqual(r8, i8, "genericNewAndClass");
    QUnit.deepEqual(r8 instanceof Generics.NewClass, true, "genericNewAndClass instance of NewClass");
});

QUnit.test("Create generic instances", function (assert) {
    var name = "My name is Named Entity";
    var namedEntity = new Generics.NamedEntity();
    namedEntity.setName$1(name);

    var c10 = new (Generics.SimpleGeneric$1(Number))(5);
    QUnit.deepEqual(c10.getSomething(7), 7, "simpleGeneric$1(Number) getSomething");
    QUnit.deepEqual(c10.instance, 5, "simpleGeneric$1(Number) instance");

    var c11 = new (Generics.SimpleGeneric$1(Generics.NamedEntity))(namedEntity);
    QUnit.deepEqual(c11.getSomething(namedEntity).getName$1(), name, "SimpleGeneric$1(Generics.NamedEntity) getSomething");
    QUnit.deepEqual(c11.instance, namedEntity, "SimpleGeneric$1(Generics.NamedEntity) instance");

    var c20 = new (Generics.SimpleDoubleGeneric$2(Object, Number).constructor$1)("I'm object", 35);
    QUnit.deepEqual(c20.getSomething(5), 5, "SimpleDoubleGeneric$2(Object, Number) getSomething");
    QUnit.deepEqual(c20.getSomethingMore(25), 25, "SimpleDoubleGeneric$2(Object, Number) getSomethingMore");
    QUnit.deepEqual(c20.instanceT, "I'm object", "SimpleDoubleGeneric$2(Object, Number) instanceT");
    QUnit.deepEqual(c20.instanceK, 35, "SimpleDoubleGeneric$2(Object, Number) instanceK");

    var c21 = new (Generics.SimpleDoubleGeneric$2(Object, Number).$constructor)();
    QUnit.deepEqual(c21.getSomething(7), 7, "SimpleDoubleGeneric$2(Object, Number) parameterless constructor getSomething");
    QUnit.deepEqual(c21.getSomethingMore(35), 35, "SimpleDoubleGeneric$2(Object, Number) parameterless constructor getSomethingMore");
    QUnit.deepEqual(c21.instanceT, null, "SimpleDoubleGeneric$2(Object, Number) instanceT");
    QUnit.deepEqual(c21.instanceK, null, "SimpleDoubleGeneric$2(Object, Number) instanceK");

    var c30 = new (Generics.GenericINamedEntity$1(Generics.NamedEntity))(namedEntity);
    QUnit.deepEqual(c30.getSomething(namedEntity).getName$1(), name, "GenericINamedEntity$1(Generics.NamedEntity) getSomething");
    QUnit.deepEqual(c30.instance, namedEntity, "GenericINamedEntity$1(Generics.NamedEntity) instance");

    var c40 = new (Generics.GenericNamedEntity$1(Generics.NamedEntity))(namedEntity);
    QUnit.deepEqual(c40.getSomething(namedEntity).getName$1(), name, "GenericNamedEntity$1(Generics.NamedEntity) getSomething");
    QUnit.deepEqual(c40.instance, namedEntity, "GenericNamedEntity$1(Generics.NamedEntity) instance");

    var c50 = new (Generics.GenericClass$1(Generics.NamedEntity))(namedEntity);
    QUnit.deepEqual(c50.getSomething(namedEntity).getName$1(), name, "GenericClass$1(Generics.NamedEntity) getSomething");
    QUnit.deepEqual(c50.instance, namedEntity, "GenericClass$1(Generics.NamedEntity) instance");
    var c51 = new (Generics.GenericClass$1(String))("Trest");
    QUnit.deepEqual(c51.getSomething("Just string"), "Just string", "GenericClass$1(String) getSomething");
    QUnit.deepEqual(c51.instance, "Trest", "GenericClass$1(String) instance");

    var c60 = new (Generics.GenericStruct$1(Generics.NamedEntity))(namedEntity);
    QUnit.deepEqual(c60.getSomething(namedEntity).getName$1(), name, "GenericStruct$1(Generics.NamedEntity) getSomething");
    QUnit.deepEqual(c60.instance, namedEntity, "GenericStruct$1(Generics.NamedEntity) instance");
    var c61 = new (Generics.GenericStruct$1(String))("Trest");
    QUnit.deepEqual(c61.getSomething("Just string"), "Just string", "GenericStruct$1(String) getSomething");
    QUnit.deepEqual(c61.instance, "Trest", "GenericStruct$1(String) instance");

    var c70 = new (Generics.GenericNew$1(String))("New trest");
    QUnit.deepEqual(c70.getSomething("Just string"), "Just string", "GenericNew$1(String) getSomething");
    QUnit.deepEqual(c70.instance, "New trest", "GenericNew$1(String) instance");
    var c71 = new (Generics.GenericNew$1(Object))("New trest");
    QUnit.deepEqual(c71.getSomething("Just string"), "Just string", "GenericNew$1(Object) getSomething");
    QUnit.deepEqual(c71.instance, "New trest", "GenericNew$1(Object) instance");

    var c80 = new (Generics.GenericNewAndClass$1(String))("New trest80");
    QUnit.deepEqual(c80.getSomething("Just string80"), "Just string80", "GenericNewAndClass$1(String) getSomething");
    QUnit.deepEqual(c80.instance, "New trest80", "GenericNewAndClass$1(String) instance");
    var c81 = new (Generics.GenericNewAndClass$1(Object))("New trest81");
    QUnit.deepEqual(c81.getSomething("Just string81"), "Just string81", "GenericNewAndClass$1(Object) getSomething");
    QUnit.deepEqual(c81.instance, "New trest81", "GenericNewAndClass$1(Object) instance");
});
