﻿/// <reference path="..\..\Runner\resources\qunit\qunit.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\bridge.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\classes.d.ts" />
QUnit.module("TypeScript - Classes");
QUnit.test("Inheritance", function (assert) {
    var animal = new Classes.Animal.$constructor();
    QUnit.deepEqual(animal.getName(), "Animal", "Animal name parameterless constructor");

    animal = new Classes.Animal.constructor$1("A");
    QUnit.deepEqual(animal.getName(), "A", "Animal name");

    // TODO #292 Should not require optional parameters
    QUnit.deepEqual(animal.move(), 1, "Animal move");

    var snake = new Classes.Snake("S");
    QUnit.deepEqual(snake.getName(), "S", "Snake name");

    // TODO #292 Should not require optional parameters
    QUnit.deepEqual(snake.move(), 5, "Snake move");

    animal = snake;
    QUnit.deepEqual(animal.getName(), "S", "Snake as Animal name");

    // TODO #292 Should not require optional parameters
    QUnit.deepEqual(animal.move(), 5, "Snake as Animal move");

    var dog = new Classes.Dog("D");
    QUnit.deepEqual(dog.getName(), "D", "Dogname");

    // TODO #292 Should not require optional parameters
    QUnit.deepEqual(dog.move(), 1, "Dog move");
    QUnit.deepEqual(dog.move$1(), 20, "Dog another move");

    animal = dog;
    QUnit.deepEqual(animal.getName(), "D", "Dog as Animal name");

    // TODO #292 Should not require optional parameters
    QUnit.deepEqual(animal.move(), 1, "Dog as Animal move");

    var employee = new Classes.Employee("E", 1);
    QUnit.deepEqual(employee.getName(), "E", "Employee name");

    // TODO #292 Should not require optional parameters
    QUnit.deepEqual(employee.move(), 1, "Employee move");

    animal = employee;
    QUnit.deepEqual(animal.getName(), "E", "Employee as Animal name");

    // TODO #292 Should not require optional parameters
    QUnit.deepEqual(animal.move(), 1, "Employee as Animal move");
});

QUnit.test("Static", function (assert) {
    var point1 = new Classes.Point.constructor$1(10, 20);
    QUnit.deepEqual(point1.x, 10, "Point x field");
    QUnit.deepEqual(point1.y, 20, "Point y field");

    var point2 = Classes.StaticClass.move(point1, -20, -40);
    QUnit.deepEqual(point1.x, 10, "Point x field not changed");
    QUnit.deepEqual(point1.y, 20, "Point y field not changed");
    QUnit.deepEqual(point2.x, -10, "Point x field moved");
    QUnit.deepEqual(point2.y, -20, "Point y field moved");

    var movePoint = new Classes.MovePoint();
    movePoint.setPoint(point1);
    QUnit.deepEqual(movePoint.getPoint().x, 10, "MovePoint x field");
    QUnit.deepEqual(movePoint.getPoint().y, 20, "MovePoint y field");

    movePoint.move(5, 7);
    QUnit.deepEqual(point1.x, 10, "Point x field not changed");
    QUnit.deepEqual(point1.y, 20, "Point y field not changed");
    QUnit.deepEqual(movePoint.getPoint().x, 15, "MovePoint x field moved");
    QUnit.deepEqual(movePoint.getPoint().y, 27, "MovePoint y field moved");
});
