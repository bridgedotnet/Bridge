/// <reference path="..\..\Runner\resources\qunit\qunit.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\bridge.d.ts" />
/// <reference path="..\..\Runner\TypeScript\App1\classes.d.ts" />

"use strict";

QUnit.module("TypeScript - Classes");
QUnit.test("Inheritance", function (assert) {
    var animal = new Classes.Animal.ctor();
    assert.deepEqual(animal.GetName(), "Animal", "Animal name parameterless constructor");

    animal = new Classes.Animal.$ctor1("A");
    assert.deepEqual(animal.GetName(), "A", "Animal name");
    // TODO #292 Should not require optional parameters
    assert.deepEqual(animal.Move(), 1, "Animal move");

    var snake = new Classes.Snake("S");
    assert.deepEqual(snake.GetName(), "S", "Snake name");
    // TODO #292 Should not require optional parameters
    assert.deepEqual(snake.Move(), 5, "Snake move");

    animal = snake;
    assert.deepEqual(animal.GetName(), "S", "Snake as Animal name");
    // TODO #292 Should not require optional parameters
    assert.deepEqual(animal.Move(), 5, "Snake as Animal move");

    var dog = new Classes.Dog("D");
    assert.deepEqual(dog.GetName(), "D", "Dogname");
    // TODO #292 Should not require optional parameters
    assert.deepEqual(dog.Move(), 1, "Dog move");
    assert.deepEqual(dog.Move$1(), 20, "Dog another move");

    animal = dog;
    assert.deepEqual(animal.GetName(), "D", "Dog as Animal name");
    // TODO #292 Should not require optional parameters
    assert.deepEqual(animal.Move(), 1, "Dog as Animal move");

    var employee = new Classes.Employee("E", 1);
    assert.deepEqual(employee.GetName(), "E", "Employee name");
    // TODO #292 Should not require optional parameters
    assert.deepEqual(employee.Move(), 1, "Employee move");

    animal = employee;
    assert.deepEqual(animal.GetName(), "E", "Employee as Animal name");
    // TODO #292 Should not require optional parameters
    assert.deepEqual(animal.Move(), 1, "Employee as Animal move");
});

QUnit.test("Static", function (assert) {
    var point1: Classes.Point = new Classes.Point.$ctor1(10, 20);
    assert.deepEqual(point1.X, 10, "Point x field");
    assert.deepEqual(point1.Y, 20, "Point y field");

    var point2 = Classes.StaticClass.Move(point1, -20, -40);
    assert.deepEqual(point1.X, 10, "Point x field not changed");
    assert.deepEqual(point1.Y, 20, "Point y field not changed");
    assert.deepEqual(point2.X, -10, "Point x field moved");
    assert.deepEqual(point2.Y, -20, "Point y field moved");

    var movePoint = new Classes.MovePoint();
    movePoint.Point = point1;
    assert.deepEqual(movePoint.Point.X, 10, "MovePoint x field");
    assert.deepEqual(movePoint.Point.Y, 20, "MovePoint y field");

    movePoint.Move(5, 7);
    assert.deepEqual(point1.X, 10, "Point x field not changed");
    assert.deepEqual(point1.Y, 20, "Point y field not changed");
    assert.deepEqual(movePoint.Point.X, 15, "MovePoint x field moved");
    assert.deepEqual(movePoint.Point.Y, 27, "MovePoint y field moved");
});
